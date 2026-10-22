# Test and package a plugin

Develop and test a plugin in its own repository or local workspace. The official Dispatcharr plugin registry distributes reviewed releases. It is not a plugin development environment or a replacement for an author's test workflow.

## Test locally

Place the plugin directory under `data/plugins/` in a standard Compose installation, then reload plugins from the Dispatcharr interface after changing files. Dispatcharr does not watch the filesystem or automatically reload code.

Use this checklist before packaging:

1. Reload the plugin and confirm that its name, version, description, fields, and actions appear as expected.
2. Enable the plugin and acknowledge every requested capability.
3. Save every settings-field type the plugin uses, including invalid values where applicable.
4. Run each manual action and confirm errors are useful to an administrator.
5. Trigger every subscribed event and confirm that missing optional payload fields are handled safely.
6. Test disable, reload, and delete behavior. Confirm `stop()` releases resources.
7. For background work, inspect task progress and history. For persistent services, test worker restart and leader handover.
8. Restart Dispatcharr and confirm durable data is read from `context["data_dir"]`.

Dispatcharr's own `python manage.py test` suite validates Dispatcharr. Plugin authors should maintain tests appropriate to their own code and dependencies.

## Prepare an importable archive

A plugin archive must contain Python code that Dispatcharr can load:

- a `plugin.py` that exports `Plugin`, or
- a package `__init__.py` that exports `Plugin`.

Include `plugin.json` so Dispatcharr can inspect metadata and the interface before enabling the plugin. Include a `logo.png` when the plugin should have a custom image in the interface.

Use a clear plugin directory name and test the final ZIP through **My Plugins** before distributing it. Dispatcharr accepts archives with plugin files at the archive root or within directories, but authors should use a simple, predictable layout. Do not rely on archive-discovery behavior to select between multiple possible plugin entrypoints.

A direct ZIP import does not validate every manifest field or enforce compatibility metadata. Test the exact archive that users will install.

## Compatibility and releases

When publishing through a repository, use `min_dispatcharr_version` and `max_dispatcharr_version` to describe the Dispatcharr versions a release supports. Plugin Hub uses this metadata when evaluating an install or update.

Compatibility metadata is not enforced for a direct ZIP import. It is still useful to document supported versions in the plugin README and release notes.

Use a plugin versioning scheme that lets users and maintainers identify upgrades. The official registry requires a numeric `MAJOR.MINOR.PATCH` version for submitted plugins.

## Before publishing

Before submitting a plugin to a registry:

- test the packaged archive from a clean installation;
- review the capabilities and remove unnecessary requests;
- provide a README with setup, configuration, and troubleshooting guidance;
- provide a license and maintainer information;
- document external services, credentials, ports, and dependencies;
- confirm that the plugin handles upgrade, disable, and reload safely.

For the official submission process, see [Publish to the official plugin registry](publishing.md).
