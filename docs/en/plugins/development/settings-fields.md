# Plugin settings fields

--8<-- "includes/plugin-development-version.md"

Use settings fields to let an administrator configure a plugin without editing its code. Add field definitions to the `fields` list in `plugin.json`, then read their values from `context["settings"]` in an action. Start with the [quick start](quick-start.md) if you have not created a plugin yet.

Each field needs an `id` and a `type`. Use `label` for fields shown to users. For example, add the following object to the manifest's `fields` list:

Field types and attributes are subject to `manifest_version`, whether fields are defined in `plugin.json`, the class's `fields` attribute, or `get_fields`. Set `manifest_version` in `plugin.json` even when defining fields in Python. The versions below are manifest versions, not Dispatcharr release versions.

Dispatcharr logs a warning and ignores unsupported field types. It removes unsupported attributes but retains the rest of the field. Discovery does not delete saved settings. When at least one field has an ID, saving ignores submitted unknown keys but preserves existing values without matching field IDs. When no field IDs are available, saving replaces the saved settings with the submitted settings instead. Set the correct manifest version before saving.

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

In `run`, read the saved value with `context["settings"].get("api_url", "")`. Reload the plugin after changing its manifest, then open its settings, enter a value, and save it before running the action.

| Type | Introduced | Removed | Use |
| --- | --- | --- | --- |
| `string` | v0 |  | Short text input. |
| `text` | v0 |  | Multi-line text input. |
| `number` | v0 |  | Numeric input. |
| `boolean` | v0 |  | On or off setting. |
| `select` | v0 |  | One value from `options`. |
| `multiselect` | v1 |  | Multiple values from `options`. |
| `info` | v0 |  | Read-only information. |
| `section` | v1 |  | A visual settings section. |
| `table` | v1 |  | A list of structured rows. |
| `file` | v1 |  | A file uploaded through the plugin settings UI. |

These attributes have additional manifest-version requirements:

| Attribute | Applies to | Introduced | Removed |
| --- | --- | --- | --- |
| `section` | All field types | v1 |  |
| `collapsed` | `section` | v1 |  |
| `columns` | `table` | v1 |  |
| `accept`, `max_size` | `file` | v1 |  |
| `rows` | `text` | v1 |  |

Fields can also use `default`, `description`, `placeholder`, `input_type`, `rows`, `min`, `max`, `step`, `value`, `options`, `section`, and `collapsed` where appropriate. `rows` sets the initial visible height of a `text` field and must be a positive integer. It defaults to 4. For `select` and `multiselect`, define useful `options`. A table value is a list of row objects. Define `columns` for each table column, using `id`, `type`, and normally `label`. Table columns support `string`, `number`, `boolean`, and `select`. Administrators can reset plugin settings to their declared defaults.

Select and multiselect options use objects such as `{"value": "safe", "label": "Safe"}`. A multiselect stores a list of selected values. Table select columns use the same option format. Table row order is preserved; invalid cell values are rejected when settings are saved, while stored keys no longer declared as columns are ignored rather than deleted.

For example, add this field to the manifest's `fields` list to let an administrator choose a mode:

```json
{
  "id": "mode",
  "label": "Mode",
  "type": "select",
  "default": "safe",
  "options": [
    {"value": "safe", "label": "Safe"},
    {"value": "fast", "label": "Fast"}
  ]
}
```

Read the selected value as `context["settings"].get("mode", "safe")`. For multiple selections, use `multiselect`, set a list default such as `[]`, and declare manifest version 1 or later.

Section markers do not store values. A field with a `section` that does not match a declared section is displayed ungrouped. A section's collapsed state is a UI preference and is not saved as a setting.

File fields may specify `accept` and `max_size`. Uploads are written to `_uploads/<field-id>/` under the plugin's durable `data_dir`, and Dispatcharr stores only the resulting path in the setting. The `_uploads` directory is reserved for Dispatcharr-managed files. The server restricts accepted extensions, caps the requested size, and prevents uploads from replacing plugin code. Validate uploaded contents before use.

`accept` is a browser file-picker hint, not a replacement for the server's extension allowlist. Uploading another file to the same field replaces the previous file. Uploads survive plugin updates and follow the keep-or-delete data choice on uninstall. Older uploads stored in the plugin code directory are not moved automatically and may need to be uploaded again after an update.

??? example "Group fields and store structured rows"
    Use a `section` field to group related settings. A `table` field stores a list of row objects whose columns use `string`, `number`, `boolean`, or `select` types.

    ```json
    {
      "manifest_version": 1,
      "fields": [
        {"id": "advanced", "label": "Advanced", "type": "section", "collapsed": true},
        {"id": "rules", "label": "Rules", "type": "table", "section": "advanced", "default": [], "columns": [{"id": "enabled", "label": "Enabled", "type": "boolean"}]}
      ]
    }
    ```

### Dynamic fields

An enabled plugin can define `get_fields(self, context)` to build its settings fields during discovery. For example:

```python
class Plugin:
    def get_fields(self, context):
        saved_name = context["settings"].get("name", "")
        return [{"id": "name", "label": "Name", "type": "string",
                 "default": saved_name}]
```

The discovery context contains `settings`, `data_dir`, `code_dir`, `logger`, and `dispatcharr`. `settings` contains saved values before field defaults are merged, and `data_dir` may not exist yet. `get_fields` takes precedence over the class's `fields` attribute; an empty result falls back to manifest fields. Fields are rebuilt on discovery or reload, not automatically when a catalog changes. While the plugin is disabled, Dispatcharr uses the manifest fields without importing its code.

See [Watched directories](storage-and-lifecycle.md#watched-directories) for the filesystem helpers available during discovery.
