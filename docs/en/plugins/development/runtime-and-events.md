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

Use `context["code_dir"]` for files bundled with the plugin. Treat this directory as read-only. Use `context["data_dir"]` for durable mutable state such as a local database, cache, or downloaded data. Dispatcharr keeps the data directory stable across managed-plugin updates.

!!! info "Plugin files and data"
    Dispatcharr creates `data_dir` before importing the plugin. It is a stable sibling directory for that plugin's mutable state. Dispatcharr does not provide a generic static-asset directory or plugin HTTP routes. Read packaged assets from `code_dir`; use a root-level `logo.png` only for the plugin icon.

??? example "Store durable plugin state"
    ```python
    from pathlib import Path

    cache_file = Path(context["data_dir"]) / "cache.json"
    cache_file.write_text('{"last_sync": "2026-10-22"}')
    ```

Writing outside the code and data directories requires the appropriate capability. See [Capabilities and security](capabilities-and-security.md).

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

Do not start a persistent server, listener, or loop during module import or in `Plugin.__init__`. Use leader hooks instead:

```python
class Plugin:
    def on_leader_acquired(self, context):
        self._server = self._start_server()

    def on_leader_lost(self, context):
        self._stop_server()
```

Declare the `persistent_service` capability for a plugin that implements these hooks. Dispatcharr elects one worker as leader for that plugin and manages leadership with a Redis lease.

Leadership can change during worker restarts or Redis failures. Hooks must be idempotent, tolerate a new leader taking over, and safely handle a brief overlap between leaders. Disable and reload release leadership immediately. A hard worker termination relies on lease expiry.

See [Capabilities and security](capabilities-and-security.md) before using background tasks, persistent services, or any privileged operation.
