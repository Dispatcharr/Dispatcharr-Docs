# Plugins

Plugins extend Dispatcharr with optional integrations and features. Use **My Plugins** to manage plugins already installed on your instance, or **Find Plugins** to browse plugins published through configured repositories.

## My Plugins

Open **My Plugins** to view installed plugins. From here, you can:

- import a plugin ZIP;
- enable or disable a plugin;
- configure plugin settings and run its actions;
- reload plugin code after making local changes;
- update, remove, or pin installed plugins.

Imported plugins are stored in `/data/plugins`.

## Find Plugins

Open **Find Plugins** to browse available plugins from configured repositories. The official Dispatcharr plugin repository is configured by default.

You can search, filter, and sort available plugins, then install compatible plugins or update installed managed plugins. Use **Manage Repositories** to add or maintain third-party repositories. Refreshing a repository checks its available versions; reloading plugins restarts their code.

## Develop plugins

Use the plugin-development documentation to build, test, package, and publish a Dispatcharr plugin.

- [Plugin development quick start](plugins/development/quick-start.md)
- [Plugin manifest and interface](plugins/development/manifest-and-interface.md)
- [Runtime, events, and background work](plugins/development/runtime-and-events.md)
- [Capabilities and security](plugins/development/capabilities-and-security.md)
- [Test and package a plugin](plugins/development/testing-and-packaging.md)
- [Publish to the official plugin registry](plugins/development/publishing.md)
