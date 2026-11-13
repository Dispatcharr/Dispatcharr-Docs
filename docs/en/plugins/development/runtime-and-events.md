# Runtime, events, and background work

Dispatcharr executes plugin actions through the `plugins` Celery queue. A plugin handles an action through its `Plugin` class:

```python
class Plugin:
    def run(self, action: str, params: dict, context: dict):
        if action == "sync":
            return {"status": "ok"}

        return {"status": "error", "message": f"Unknown action: {action}"}
```

The `action` value is the ID declared in `plugin.json`. `params` contains values provided by the caller. `context` provides the plugin's settings, logger, code directory, and data directory.

## Lifecycle and storage

Implement `stop(context)` to release resources when the plugin is disabled, deleted, or reloaded. If `stop()` is not present, Dispatcharr calls `run("stop", {}, context)` as a compatibility fallback.

Use `context["code_dir"]` for files bundled with the plugin. Treat this directory as read-only. Use `context["data_dir"]` for durable mutable state such as a local database, cache, or downloaded data. Dispatcharr stores this durable data under `/data/plugins/_data/<canonical-plugin-id>/`, so it survives managed-plugin updates that replace the versioned code directory.

!!! info "Plugin files and data"
    Dispatcharr creates `data_dir` when it builds an action or leadership context, not during discovery or import. It is a stable `_data/<canonical-plugin-id>/` directory for that plugin's mutable state. Do not assume it exists at module import time or in `Plugin.__init__`. Dispatcharr does not provide a generic static-asset directory or plugin HTTP routes. Read packaged assets from `code_dir`; use a root-level `logo.png` only for the plugin icon.

??? example "Store durable plugin state"
    ```python
    from pathlib import Path

    cache_file = Path(context["data_dir"]) / "cache.json"
    cache_file.write_text('{"last_sync": "2026-10-22"}')
    ```

Writing outside the code and data directories requires the appropriate capability. See [Plugin manifest and capabilities](capabilities-and-security.md).

## Watched directories

The `dispatcharr` context is available to `get_fields`, actions, `stop`, and leadership hooks. Its `directories` mapping exposes the watched paths `logos` (`/data/logos`), `m3u` (`/data/m3us`), and `epg` (`/data/epgs`). The paths may not exist until needed.

```python
from pathlib import Path

api = context["dispatcharr"]
logos_dir = Path(api["ensure_directory"]("logos"))
snapshot = logos_dir / "my-plugin-snapshot"
# Only remove a directory after checking that its contents belong to your plugin.
if snapshot.is_dir():
    api["remove_directory"](snapshot)
```

`ensure_directory(name)` creates a named watched directory on demand and returns its path. `remove_directory(path)` removes a directory tree using an absolute path beneath the plugin's data directory or a watched directory. It rejects the roots themselves, paths outside them, and symlink traversal. A missing target raises `FileNotFoundError`. Plugins must check that shared content belongs to them before removing it.

For manifest version 2 or later, creating a watched directory or removing a tree beneath one requires `filesystem_write`; removing a tree beneath the plugin's own data directory does not. Versions 0 and 1 do not enforce this capability check. Discovery helpers expire when `get_fields` returns. Runtime helpers stop working when the loaded plugin instance is replaced or removed. These checks are not a sandbox or an isolation boundary.

## Long-running work

Manual actions run on the `plugins` queue. A normal action waits for the worker result. Mark an action with `"async": true` when it should return immediately and run in the background.

A plugin can also queue one of its declared actions:

```python
task_id = context["dispatch_task"]("do_scan", params)
return {"status": "started", "task_id": task_id}
```

`dispatch_task` accepts only an action ID declared in the manifest. In a manifest version 2 or later, it requires the `background_tasks` capability. An action marked `"async": true` adds that capability request automatically.

Background work can report progress:

```python
context["report_progress"](50, "Scanning streams")
```

Progress is available while an active plugin task is running. Dispatcharr records task history and sends progress updates to the user interface. Progress reporting outside an active task has no effect.

Queued actions can report an outcome through their returned dictionary. Return `{"status": "ok"}` for success, `{"status": "error", "message": "..."}` to fail the task, or `{"status": "partial", "message": "..."}` to record a warning outcome without failing the Celery task. Results for all outcomes, including plugin-returned errors, are retained in background task history subject to retention limits. Completed runs with a non-null JSON-serializable result offer a JSON output download. An exception without a returned result has no output file.

Task history records its trigger as `manual`, `action`, `schedule`, or `event`; older records may have an `unknown` trigger. Administrators can filter by trigger when the history contains more than one distinct trigger. Set `PLUGIN_TASK_HISTORY_MAX_ENTRIES` to retain from 1 to 5000 entries per plugin, or `PLUGIN_TASK_HISTORY_TTL_SECONDS` to retain entries from 1 second to 90 days. Defaults are 50 entries and 7 days.

## Event actions

Actions can subscribe to Connect events:

```json
{
  "id": "on_channel_start",
  "label": "Handle channel start",
  "events": ["channel_start"]
}
```

When Dispatcharr receives a matching event, it queues the action without waiting for a result. Event delivery does not depend on the action's `async` setting.

The action receives:

```python
params = {
    "event": event_name,
    "payload": payload,
}
```

Treat event payload fields as event-specific. Some events include stream, channel, provider, or profile details, but plugins should tolerate fields being absent.

## Plugin-owned scheduled tasks

A plugin may import modules containing Celery `@shared_task` tasks from its entrypoint. While the plugin is enabled, Dispatcharr records those task names as plugin-owned.

When the plugin is disabled, Dispatcharr suspends its enabled periodic tasks. When it is enabled again, Dispatcharr restores tasks that it previously suspended and that still exist. Deleting a plugin removes its periodic-task records, but leaves shared interval and crontab definitions in place.

??? info "Schedule ownership"
    Dispatcharr records task ownership only for tasks imported while the plugin is enabled. Do not expect it to manage a schedule for a plugin that has never been loaded successfully.

## Persistent services

Do not start a persistent server, listener, or loop during module import or in `Plugin.__init__`. Use leader hooks and Dispatcharr's managed service runner instead:

```python
class Plugin:
    def on_leader_acquired(self, context):
        context["start_service"](self._run_service, name="exporter")

    def _run_service(self, stop_event):
        while not stop_event.is_set():
            self._publish_metrics()
            stop_event.wait(10)

    def on_leader_lost(self, context):
        self._close_plugin_resources()
```

Declare the `persistent_service` capability for a plugin that implements these hooks. Dispatcharr elects one worker as leader for that plugin and manages leadership with a Redis lease.

`context["start_service"](target, name=None)` starts one host-managed native thread for the leader. Its target receives a `threading.Event` named `stop_event`. Check or wait on that event regularly, then release sockets and external resources promptly when it is set.

Dispatcharr signals the stop event and briefly waits for the service thread when leadership is lost, the plugin is disabled or reloaded, startup fails, or the worker shuts down. `start_service` is available only in leadership hooks. Do not use `gevent.spawn`, `gevent.spawn_later`, or create a `threading.Thread` for persistent plugin work.

The leadership context provides `settings`, `code_dir`, `data_dir`, `logger`, actions, task-dispatch helpers, and `start_service`. `settings` is a discovery-time snapshot. Use `context["get_settings"]()` to read current settings and field defaults on demand. It reads the database and can fail if the plugin was deleted.

A leader service can queue a declared action as a scheduled run:

```python
task_id = context["dispatch_scheduled_task"]("sync", {"full": True})
```

Scheduled dispatch requires `background_tasks` and checks that the local process still holds leadership. It is not a fencing guarantee: runs can overlap during leadership changes, and already queued work continues after leadership is lost.

If a service exits unexpectedly or raises, Dispatcharr releases its leadership and delays local reacquisition with backoff. Another worker can take over sooner. An administrator can inspect the lease-owned state and failure count at `GET /api/plugins/plugins/<key>/service-health/`; `unknown` means no current health record is available.

Leadership can change during worker restarts or Redis failures. Hooks must be idempotent, tolerate a new leader taking over, and safely handle a brief overlap between leaders.

See [Plugin manifest and capabilities](capabilities-and-security.md) before using background tasks, persistent services, or any privileged operation.
