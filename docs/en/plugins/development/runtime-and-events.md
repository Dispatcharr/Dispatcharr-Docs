# Runtime, events, and background work

--8<-- "includes/plugin-development-version.md"

Dispatcharr executes plugin actions through the `plugins` Celery queue. A plugin handles an action through its `Plugin` class:

```python
class Plugin:
    def run(self, action: str, params: dict, context: dict):
        if action == "sync":
            return {"status": "ok"}

        return {"status": "error", "message": f"Unknown action: {action}"}
```

The `action` value is the ID declared in `plugin.json`. `params` contains values provided by the caller. `context` provides the plugin's settings, logger, code directory, and data directory.

## Long-running work

Manual actions run on the `plugins` queue. A normal action waits for the worker result. Mark an action with `"async": true` when it should return immediately and run in the background.

The standard workers consume both the `celery` and `plugins` queues. Custom worker configurations must consume `plugins` or plugin actions will remain queued. `CELERY_MIN_WORKERS` and `CELERY_MAX_WORKERS` configure the shared worker's concurrency at startup.

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

Action results must be JSON serializable, without non-finite numbers. An invalid result fails the task and is not retained. When an awaited action returns `status: error`, the API responds with HTTP 500 and includes the returned dictionary in `result`, alongside `success: false` and `error`.

Task history records its trigger as `manual`, `action`, `schedule`, or `event`; older records may have an `unknown` trigger. Administrators can filter by trigger when the history contains more than one distinct trigger. Set `PLUGIN_TASK_HISTORY_MAX_ENTRIES` to retain from 1 to 5000 entries per plugin, or `PLUGIN_TASK_HISTORY_TTL_SECONDS` to retain entries from 1 second to 90 days. Defaults are 50 entries and 7 days.

### Provide diagnostic output

For a background action, return a JSON-serializable dictionary with details that can help an administrator investigate the run. For example, a scan action might return:

```python
return {
    "status": "partial",
    "message": "Some sources could not be scanned",
    "plugin_version": "1.2.3",
    "diagnostics": {
        "sources_checked": 12,
        "sources_failed": 2,
        "failure_codes": ["timeout", "invalid_response"],
    },
}
```

Use the plugin's actual release version rather than a hard-coded example when maintaining your own plugin. After the action completes, an administrator can open the plugin's **Tasks**, select **View history**, and use **Download output** to save the full result as JSON. Include actionable summaries and diagnostic codes where useful, but do not include passwords, API tokens, private URLs, personal data, or other secrets. Review output before sharing it with a support provider. History is retained only within the configured limits.

### Refresh after an action

An action can request a refresh in its returned dictionary:

```python
return {
    "status": "ok",
    "message": "Updated",
    "_dispatcharr": {"refresh": "plugin"},
}
```

Use `"ui"` to fetch current plugin metadata and settings without rebuilding discovery-time `get_fields` values. Use `"plugin"` to reload the plugin on the worker after the action returns, rebuild its fields, and refresh connected clients. The backend performs the reload even if the browser disconnects. Other workers pick up the reload on their next discovery.

Refreshes preserve unsaved edits to individual settings over the newly fetched values. If both the user and server changed the same setting, the unsaved edit takes precedence until saved or discarded.

Directives apply to successful and partial results, including background actions, but not errors. A single-plugin reload waits for active actions and other explicit reloads across workers sharing the plugin directory; queued actions do not count as active. Reloading runs stop hooks and affects persistent services. If the requested reload fails, the task reports an error even though the action has already run.

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

See [Plugin storage and lifecycle](storage-and-lifecycle.md) for durable data and [Persistent plugin services](persistent-services.md) for leader-managed services. Review [Plugin manifest and capabilities](capabilities-and-security.md) before using privileged operations.
