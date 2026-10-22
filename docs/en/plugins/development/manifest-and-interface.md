# Plugin manifest and interface

`plugin.json` describes a plugin without importing its Python code. Dispatcharr uses it to display metadata, settings, actions, and capability requests while the plugin is disabled.

For enabled plugins, non-empty `fields` and `actions` defined by the `Plugin` class take precedence. Manifest values provide the interface when the code does not.

## Manifest structure

A manifest is a JSON object. New plugins should declare `manifest_version: 1` or later. See [Capabilities and security](capabilities-and-security.md) for manifest-version support and capability behavior.

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

If `plugin.json` is missing, unreadable, malformed, or its root value is not an object, Dispatcharr treats the plugin as legacy. Its metadata and interface become available only after its code is enabled and imported. A valid manifest that omits `manifest_version` is a version 0 manifest, not a legacy plugin.

See [Capabilities and security](capabilities-and-security.md) for manifest-version compatibility, capability IDs, acknowledgement, and the limits of runtime enforcement.

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
