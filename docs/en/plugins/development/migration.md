# Migrate an existing plugin

Plugins without `manifest_version` use version 0. Manifest versions 1 and 2 require Dispatcharr 0.34.0 or later. See [Plugin manifest and capabilities](capabilities-and-security.md) for the version and capability reference.

Before changing the manifest, test a copy of the plugin on a compatible Dispatcharr instance. Record its existing settings and back up mutable files so you can verify that an upgrade retains the data users need.

## Move from version 0 to 1

Add `manifest_version: 1` to `plugin.json` and declare the capabilities the plugin needs. Administrators must acknowledge requested capabilities before enabling it. Version 1 also supports newer settings-field types and attributes; see [Plugin settings fields](settings-fields.md).

For example, a plugin that calls an external API can start with:

```json
{
  "manifest_version": 1,
  "capabilities": ["outbound_network"]
}
```

Add these keys to the existing manifest rather than replacing its name, fields, and actions. Include every capability the plugin needs, reload it, and check the approval prompt and settings before continuing.

## Prepare for version 2

1. Move mutable state from the replaceable plugin code directory to `context["data_dir"]`. See [Plugin storage and lifecycle](storage-and-lifecycle.md).
2. Replace persistent work started during import or `Plugin.__init__` with managed leader services. Declare `persistent_service` and any other capabilities needed by the service.
3. Use `dispatch_task` for plugin actions and `dispatch_internal_task` only for approved first-party tasks. Declare the matching capabilities.
4. Review all network, subprocess, and filesystem access. Declare the appropriate capabilities, then set `manifest_version` to 2 and test with only those declarations.
5. Test enablement, updates, actions, reload, disablement, and service handover. An update requesting new capabilities requires administrator acknowledgement.

For example, an action that previously wrote `cache.json` alongside `plugin.py` can instead use the durable path supplied by Dispatcharr:

```python
from pathlib import Path

def run(self, action, params, context):
    cache_file = Path(context["data_dir"]) / "cache.json"
    cache_file.write_text("{}", encoding="utf-8")
    return {"status": "ok"}
```

Plan how existing data will be copied to the new location before releasing the update. Test an upgrade with real existing data, then reload and restart to confirm the plugin reads it from the durable directory. Finally, change the manifest to version 2 and repeat the action and lifecycle tests.

Version 2 checks are best-effort safeguards, not a sandbox. Plugins still execute trusted Python code inside Dispatcharr.
