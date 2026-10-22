# Plugin development quick start

A Dispatcharr plugin is a directory containing a `plugin.json` manifest and Python code that exports a `Plugin` class. This guide creates a minimal plugin with one action and two settings.

For full manifest-version guidance, see [Plugin manifest and interface](manifest-and-interface.md).

## Create the plugin directory

In a standard Compose installation, create a directory on the host:

```text
data/plugins/my-plugin/
```

Dispatcharr makes this available to the application and Celery workers as:

```text
/data/plugins/my-plugin/
```

`DISPATCHARR_PLUGINS_DIR` overrides the runtime plugin directory.

!!! tip
    Keep the plugin directory name lowercase and stable. Dispatcharr uses it to identify local plugins and create their durable data directories.

## Add the manifest

Create `data/plugins/my-plugin/plugin.json`:

```json
{
  "manifest_version": 2,
  "name": "My Plugin",
  "version": "0.1.0",
  "description": "A minimal Dispatcharr plugin",
  "capabilities": [],
  "fields": [
    {
      "id": "enabled",
      "label": "Enabled",
      "type": "boolean",
      "default": true
    },
    {
      "id": "note",
      "label": "Note",
      "type": "string",
      "default": ""
    }
  ],
  "actions": [
    {
      "id": "run",
      "label": "Run"
    }
  ]
}
```

New plugins should declare `manifest_version: 1` or later. Manifest version 2 or later is recommended because it enables Dispatcharr's supported runtime capability checks. This example needs no additional capabilities.

??? info "Why use a manifest?"
    Dispatcharr can read a valid manifest while the plugin is disabled, so it can display metadata, settings, actions, and capability requests without importing plugin code.

## Add the plugin code

Create `data/plugins/my-plugin/plugin.py`:

```python
class Plugin:
    def run(self, action: str, params: dict, context: dict):
        if action == "run":
            settings = context["settings"]
            return {
                "status": "ok",
                "enabled": settings.get("enabled", True),
            }

        return {
            "status": "error",
            "message": f"Unknown action: {action}",
        }
```

Dispatcharr loads the `Plugin` class from `plugin.py`. A package may export the class from its `__init__.py` instead. If both are present, Dispatcharr uses `plugin.py`.

The action ID passed to `run()` matches the action declared in `plugin.json`. `context["settings"]` contains the saved values for fields in the manifest.

## Load and enable the plugin

1. Open **Plugins** in Dispatcharr.
2. Reload plugins after creating or changing local plugin files.
3. Open **My Plugin**, review its settings, and enable it.
4. Run **Run** from the plugin detail page.

New plugins are disabled by default. Plugins that declare capabilities must be acknowledged before they can be enabled.

!!! warning
    Reloading stops and reimports plugin code. Use it after local changes, but ensure the plugin releases resources through `stop(context)` before relying on reload during development.

## Next steps

- Define settings fields, actions, and supported manifest versions in [Plugin manifest and interface](manifest-and-interface.md).
- Learn about events, long-running work, and durable data in [Runtime, events, and background work](runtime-and-events.md).
- Understand capability declarations and their limits in [Capabilities and security](capabilities-and-security.md).
- Validate and package the plugin in [Test and package a plugin](testing-and-packaging.md).
