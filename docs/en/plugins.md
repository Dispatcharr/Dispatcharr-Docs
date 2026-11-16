# Plugins

Plugins extend Dispatcharr with optional integrations and features. Use **My Plugins** to manage plugins already installed on your instance, or **Find Plugins** to browse plugins published through configured repositories.

## My Plugins

Open **My Plugins** to view installed plugins. From here, you can:

- import a plugin ZIP;
- enable or disable a plugin;
- configure plugin settings and run its actions;
- view background task progress and task history;
- reload plugin code after making local changes;
- update, remove, or pin installed plugins.

Imported plugins are stored in `/data/plugins`.

Use the plugin card's **…** actions menu to enable or disable it, or pin it to or unpin it from the sidebar. Enabling a plugin may require capability approval. Select and multiselect settings with more than 10 options are searchable, including select cells in editable tables.

On a plugin's detail page, open **Tasks** and select **View history** to inspect runs. Completed runs with output offer **Download output**, which downloads the full JSON result. History is subject to retention limits.

Some plugin actions refresh settings or reload the plugin after they finish. Unsaved edits remain staged over refreshed settings. If the same setting changed on the server, your unsaved edit takes precedence until you save or discard it.

When removing a plugin with saved data, Dispatcharr asks whether to keep that data for a future reinstall or delete it. Empty saved-data directories are removed automatically.

## Find Plugins

Open **Find Plugins** to browse available plugins from configured repositories. The official Dispatcharr plugin repository is configured by default.

You can search, filter, and sort available plugins, then install compatible plugins or update installed managed plugins. Use **Manage Repositories** to add or maintain third-party repositories. Refreshing a repository checks its available versions; reloading plugins restarts their code.

After installation, you can choose **Enable now** when offered. If the plugin requests capabilities, review and approve them separately before enabling it. If enabling fails, the installation dialog remains open so you can retry.

## Develop plugins

Use the plugin-development documentation to build, test, package, and publish a Dispatcharr plugin.

- [Plugin development quick start](plugins/development/quick-start.md)
- [Plugin manifest and capabilities](plugins/development/capabilities-and-security.md)
- [Plugin settings fields](plugins/development/settings-fields.md)
- [Runtime, events, and background work](plugins/development/runtime-and-events.md)
- [Plugin storage and lifecycle](plugins/development/storage-and-lifecycle.md)
- [Persistent plugin services](plugins/development/persistent-services.md)
- [APIs and integration](plugins/development/apis-and-integration.md)
- [Migrate an existing plugin](plugins/development/migration.md)
- [Test and package a plugin](plugins/development/testing-and-packaging.md)
- [Publish to the official plugin registry](plugins/development/publishing.md)
