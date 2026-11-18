# Plugin storage and lifecycle

--8<-- "includes/plugin-development-version.md"

Implement `stop(context)` to release resources when the plugin is disabled, deleted, or reloaded. If `stop()` is not present, Dispatcharr calls `run("stop", {}, context)` as a compatibility fallback.

On disable and delete, `stop()` runs inside a database transaction while the plugin row is locked. Keep it short and do not close database connections in the hook. If it encounters a database error, its database changes are rolled back and disable or delete still completes.

Use `context["code_dir"]` for files bundled with the plugin. Treat this directory as read-only. Use `context["data_dir"]` for durable mutable state such as a local database, cache, or downloaded data. Dispatcharr stores this durable data under `/data/plugins/_data/<canonical-plugin-id>/`, so it survives managed-plugin updates that replace the versioned code directory.

Managed plugins use their repository slug as the data identity. If a repository removes a plugin or a ZIP import replaces a managed plugin, Dispatcharr retains that identity when the plugin becomes unmanaged. Dispatcharr reserves `_uploads` inside `data_dir` for [file-field uploads](settings-fields.md).

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
