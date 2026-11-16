# Plugin APIs and integration

Plugins run inside the Dispatcharr Django application. Use `context["dispatch_task"]` for a plugin's own actions and `context["report_progress"]` for progress. Plugins can use Django models and transactions where appropriate, but should not ask users for the host Dispatcharr URL or credentials to call their own application. Use `context["logger"]` for logs and avoid logging credentials or sensitive user data.

Choose the narrowest integration that fits the work:

1. For another action in your plugin, declare the action and use `dispatch_task`. See [Runtime and events](runtime-and-events.md#long-running-work).
2. To request an approved first-party background task, use `dispatch_internal_task` as shown below.
3. For data access that needs Django models, use the application models and transactions where appropriate. Those internals can change, so test against the Dispatcharr versions your plugin supports.

If HTTP is genuinely necessary, use Django's `reverse()` to build internal URLs, set a short timeout, and declare `outbound_network` for manifest version 2 or later.

Normal ORM work in `run()` and `stop()` is cleaned up by Dispatcharr. Threads or greenlets started by a plugin must close their own database connections when they finish. Keep expensive work out of lifecycle hooks and use the background queue where appropriate.

## Approved internal tasks

`context["dispatch_internal_task"]` is limited to explicitly approved Dispatcharr tasks. Declaring `celery_dispatch` is required for manifest version 2 or later, but does not allow arbitrary Celery tasks. Approved tasks are queued on `plugins`.

For example, to queue an EPG refresh, add `"celery_dispatch"` to the manifest's `capabilities` list. Then call the helper from an action with the ID of the EPG source to refresh:

```python
task_id = context["dispatch_internal_task"](
    "apps.epg.tasks.refresh_epg_data", args=[source_id]
)
return {"status": "started", "task_id": task_id}
```

The approved tasks are `apps.epg.tasks.refresh_epg_data` and `apps.m3u.tasks.refresh_single_m3u_account`. See [Runtime and events](runtime-and-events.md) for plugin-owned actions.

Enable the plugin, approve its capability request, and run the action with a valid source ID. The returned task ID identifies queued work; queuing it does not mean the refresh has completed.

## REST endpoints

These endpoints are useful for UI integrations and tooling. They are not a substitute for in-process plugin helpers.

For example, after copying a plugin directory, call the reload endpoint before listing plugins. To run an action, enable the plugin first and send its action ID and parameters to the run endpoint. Authenticate requests as required by your Dispatcharr installation.

| Method and path | Purpose |
| --- | --- |
| `GET /api/plugins/plugins/` | List plugins. |
| `POST /api/plugins/plugins/reload/` | Reload discovery. |
| `POST /api/plugins/plugins/import/` | Import a ZIP in the multipart `file` field. |
| `POST /api/plugins/plugins/<key>/settings/` | Update settings using `{"settings": {...}}`. |
| `POST /api/plugins/plugins/<key>/run/` | Run an action using `{"action": "id", "params": {...}}`. |
| `POST /api/plugins/plugins/<key>/enabled/` | Enable or disable using `{"enabled": true}` or `false`. |
| `DELETE /api/plugins/plugins/<key>/delete/` | Uninstall a plugin. |

Running an action for a disabled plugin returns HTTP 403. When uninstalling a plugin with nonempty saved data, a request without a choice returns HTTP 409 and `data_confirmation_required: true`. Retry with a JSON body containing `{"data_action": "keep"}` or `{"data_action": "delete"}`. Empty data directories are removed automatically.
