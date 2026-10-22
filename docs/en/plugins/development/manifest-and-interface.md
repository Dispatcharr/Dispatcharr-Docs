# Plugin manifest and interface

`plugin.json` describes a plugin without importing its Python code. Dispatcharr uses it to display metadata, settings, actions, and capability requests while the plugin is disabled.

For enabled plugins, non-empty `fields` and `actions` defined by the `Plugin` class take precedence. Manifest values provide the interface when the code does not.

## Manifest structure

A manifest is a JSON object. New plugins should declare `manifest_version: 1` or later. Manifest version 2 or later is recommended because it enables Dispatcharr's supported runtime capability checks.

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

The recognized top-level keys are:

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

Other top-level keys are ignored by Dispatcharr. `fields`, `actions`, and `capabilities` must be JSON lists. Invalid list entries are discarded.

## Manifest versions

New plugins should declare `manifest_version: 1` or later. Use manifest version 2 or later when the plugin should receive Dispatcharr's supported runtime capability checks.

| Version | Minimum Dispatcharr version | Maximum Dispatcharr version | Capability declarations | Runtime capability checks |
| --- | --- | --- | --- | --- |
| v0, omitted, invalid, or negative | Not set | Not set | Ignored | Not applied |
| v1 | 0.29.0 | Not set | Read and presented for acknowledgement | Not applied |
| v2 and later | 0.29.0 | Not set | Read and presented for acknowledgement | Applied on supported code paths |

Versions 1 and 2 require Dispatcharr 0.29.0 or later. Future manifest versions currently follow the version 2 capability policy.

A valid manifest that omits `manifest_version` is a version 0 manifest. It is not the same as a legacy plugin. Dispatcharr currently supports version 0 and version 1 manifests. No deprecation timeline has been set for either version.

If `plugin.json` is missing, unreadable, malformed, or its root value is not an object, Dispatcharr treats the plugin as legacy. Its metadata and interface become available only after its code is enabled and imported.

??? warning "Legacy fallback"
    Legacy fallback keeps older plugins working, but it prevents Dispatcharr from safely showing manifest metadata, fields, and actions before importing code. New plugins should always include a valid manifest.

See [Capabilities and security](capabilities-and-security.md) for capability IDs, acknowledgement, and the limits of runtime enforcement.

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

Supported field types are:

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

Fields can also use `default`, `description`, `placeholder`, `input_type`, `min`, `max`, `step`, `value`, `options`, `section`, and `collapsed` where appropriate.

For `select` and `multiselect`, define useful `options`. A table value is a list of row objects. Define `columns` for each table column, using `id`, `type`, and normally `label`. Table columns support `string`, `number`, `boolean`, and `select`.

File fields may specify `accept` and `max_size`. Treat uploaded files as plugin data and validate their contents before use.

??? example "A select field"
    ```json
    {
      "id": "quality",
      "label": "Quality",
      "type": "select",
      "default": "balanced",
      "options": [
        {"label": "Balanced", "value": "balanced"},
        {"label": "High", "value": "high"}
      ]
    }
    ```

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

Actions can also define `button_label`, `button_variant`, `button_color`, `events`, and `async`.

Every manual action runs on Dispatcharr's plugin task queue. An action with `"async": true` returns immediately with a task ID and contributes the `background_tasks` capability request.

Actions can subscribe to Connect events with an `events` list. See [Runtime, events, and background work](runtime-and-events.md) for event payloads and execution behavior.
