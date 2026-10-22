# Plugin manifest and capabilities

`plugin.json` describes a plugin without importing its Python code. Dispatcharr uses it to display metadata, settings, actions, and capability requests while the plugin is disabled. For enabled plugins, non-empty `fields` and `actions` defined by the `Plugin` class take precedence.

## Manifest structure

A manifest is a JSON object. New plugins should declare `manifest_version: 1` or later.

```json
{
  "manifest_version": 2,
  "name": "Example Plugin",
  "version": "1.0.0",
  "description": "An example Dispatcharr plugin",
  "author": "Example Author",
  "help_url": "https://example.com/example-plugin",
  "capabilities": [],
  "fields": [],
  "actions": []
}
```

| Key | Purpose |
| --- | --- |
| `manifest_version` | Selects the capability model. |
| `name` | Display name. |
| `version` | Plugin version. |
| `description` | Short description. |
| `author` | Author display name. |
| `help_url` | Link to plugin help. |
| `capabilities` | Capability requests for manifest version 1 or later. |
| `fields` | Settings-interface definitions. |
| `actions` | Actions that users or events can run. |

Other top-level keys are ignored by Dispatcharr. `fields`, `actions`, and `capabilities` must be JSON lists. Invalid list entries are discarded. If `plugin.json` is missing, unreadable, malformed, or its root value is not an object, Dispatcharr treats the plugin as legacy. A valid manifest that omits `manifest_version` is a version 0 manifest, not a legacy plugin.

## Manifest versions

Capabilities declare the access a plugin needs. Dispatcharr shows newly requested capabilities before a user enables a plugin or accepts a managed-plugin update.

Add capabilities to a version 1 or later manifest:

```json
{
  "manifest_version": 2,
  "capabilities": [
    "outbound_network",
    "filesystem_write"
  ]
}
```

Declare only the capabilities your plugin needs. A capability is a disclosure to the administrator and, for manifest version 2 or later, enables supported runtime checks.

## Capability acknowledgement

Before a plugin with new effective capabilities can be enabled, an administrator must acknowledge them in the Dispatcharr interface. A managed-plugin update that adds capabilities requires acknowledgement again.

Acknowledgement is an administrative approval step. It is not the same as runtime enforcement. Manifest version 2 or later runtime checks use the capabilities declared by the plugin, not the acknowledgement record.

An action declared with `"async": true` automatically requests `background_tasks`, even when that capability is not explicitly listed.

## Available capabilities

| Capability | Introduced | Removed | Declare when the plugin needs to | Example |
| --- | --- | --- | --- | --- |
| `background_tasks` | v1 |  | Queue plugin work for later execution. | Start a long-running scan after returning to the user.<br>`context["dispatch_task"]("scan", {})` |
| `persistent_service` | v1 |  | Run a leader-elected persistent service. | Keep one plugin-managed listener active across workers.<br>`def on_leader_acquired(self, context): ...` |
| `network_listener` | v1 |  | Bind or listen on a network socket. | Receive webhook requests on a local port.<br>`socket.bind(("0.0.0.0", 9000))` |
| `subprocess` | v1 |  | Start a subprocess. | Run a bundled command-line tool.<br>`subprocess.run(["tool", "--sync"])` |
| `outbound_network` | v1 |  | Make outbound network connections. | Call an external service API.<br>`requests.get("https://api.example.com")` |
| `filesystem_write` | v1 |  | Write outside the plugin code and data directories. | Export a report to another mounted directory.<br>`open("/exports/report.txt", "w")` |
| `celery_dispatch` | v1 |  | Dispatch an approved internal Dispatcharr Celery task. | Refresh an M3U account through an allowlisted task.<br>`context["dispatch_internal_task"]("apps.m3u.tasks.refresh_single_m3u_account", [account_id])` |
| `proxy_internals` | v1 |  | Declare intended use of proxy internals. | No stable plugin API is currently available.<br>`# Do not rely on an internal import` |
| `user_data` | v1 |  | Declare intended access to user-related data. | No stable plugin API is currently available.<br>`# Do not rely on this as an access grant` |
| `external_dependencies` | v1 |  | Declare an external software or service dependency. | Check that a required tool is present.<br>`shutil.which("ffmpeg")` |

Unknown capability names are preserved and shown to administrators as custom capabilities. Use a known capability whenever it accurately describes the access you need.

Removed capabilities will use a struck-through name and show their removal version in this table.

!!! info "Metadata-only capabilities"
    `proxy_internals`, `user_data`, and `external_dependencies` are recorded for administrator acknowledgement and compatibility metadata. They do not currently expose a stable plugin API or install dependencies.

| Manifest version | Minimum Dispatcharr version | Maximum Dispatcharr version | Capability declarations | Administrator acknowledgement | Runtime checks |
| --- | --- | --- | :---: | :---: | :---: |
| v0 | Not set | Not set | <i data-lucide="square-x" style="color: red; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i> |
| v1 | 0.34.0 | Not set | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i> |
| v2 and later | 0.34.0 | Not set | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> |

Version 0 includes manifests that omit `manifest_version`. Version 1 reads capability declarations and requires administrator acknowledgement before enablement, but does not apply runtime checks. Manifest version 2 or later is recommended for new plugins because it applies the supported checks below.

## Settings fields

Each field needs an `id` and a `type`. Use `label` for fields shown to users.

```json
{
  "id": "api_url",
  "label": "API URL",
  "type": "string",
  "default": "",
  "placeholder": "https://api.example.com",
  "help_text": "The service endpoint."
}
```

| Type | Use |
| --- | --- |
| `string` | Short text input. |
| `text` | Multi-line text input. |
| `number` | Numeric input. |
| `boolean` | On or off setting. |
| `select` | One value from `options`. |
| `multiselect` | Multiple values from `options`. |
| `info` | Read-only information. |
| `section` | A visual settings section. |
| `table` | A list of structured rows. |
| `file` | A file uploaded through the plugin settings UI. |

Fields can also use `default`, `description`, `placeholder`, `input_type`, `min`, `max`, `step`, `value`, `options`, `section`, and `collapsed` where appropriate. For `select` and `multiselect`, define useful `options`. A table value is a list of row objects. Define `columns` for each table column, using `id`, `type`, and normally `label`. Table columns support `string`, `number`, `boolean`, and `select`.

File fields may specify `accept` and `max_size`. Treat uploaded files as plugin data and validate their contents before use.

## Actions

Each action needs an `id` and a `label`:

```json
{
  "id": "sync",
  "label": "Synchronize",
  "description": "Fetch the latest data.",
  "confirm": {
    "title": "Synchronize now?",
    "message": "This may take several minutes."
  }
}
```

Actions can also define `button_label`, `button_variant`, `button_color`, `events`, and `async`. Every manual action runs on Dispatcharr's plugin task queue. An action with `"async": true` returns immediately with a task ID and contributes the `background_tasks` capability request.

Actions can subscribe to Connect events with an `events` list. See [Runtime, events, and background work](runtime-and-events.md) for event payloads and execution behavior.

??? example "Dispatch a plugin action"
    Declare the action in `plugin.json` and request `background_tasks`, then queue it from another action:

    ```python
    task_id = context["dispatch_task"]("scan", {"full": True})
    return {"status": "started", "task_id": task_id}
    ```

## Supported runtime checks

For manifest version 2 or later, Dispatcharr applies best-effort checks to supported code paths:

| Capability | Supported guarded behavior |
| --- | --- |
| `background_tasks` | `context["dispatch_task"]`. |
| `persistent_service` | Leader hooks. |
| `celery_dispatch` | `context["dispatch_internal_task"]`, in addition to the internal-task allowlist. |
| `network_listener` | Selected socket bind and listen operations. |
| `outbound_network` | Selected HTTP and socket connection operations. |
| `subprocess` | Selected `subprocess` functions. |
| `filesystem_write` | File writes outside the code and stable data directories. |

`proxy_internals`, `user_data`, and `external_dependencies` are disclosures. They do not currently add runtime guards. `external_dependencies` does not install dependencies.

The `network_listener` capability is marked as requiring a restart in the user interface. Plan listener plugins accordingly.

## Security boundary

Dispatcharr plugins run as Python code in the Dispatcharr process. Capability checks are a best-effort safety net, not process isolation or a complete sandbox. A trusted plugin author can bypass Python-level checks.

Install plugins only from sources you trust. Review the plugin's requested capabilities, source, and version before enabling it. Use the official registry or another repository with an appropriate trust and verification process.

For execution patterns, see [Runtime, events, and background work](runtime-and-events.md).
