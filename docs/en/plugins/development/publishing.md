# Publish to the official plugin registry

The official [Dispatcharr Plugins](https://github.com/Dispatcharr/Plugins) repository is a distribution registry. Build, test, and maintain your plugin in your own repository or workspace before submitting it.

Before you submit, confirm that the packaged plugin works in Dispatcharr, requests only the capabilities it needs, includes useful metadata and documentation, and has a supported license.

!!! info
    The official registry distributes reviewed releases. It does not replace your plugin's source repository, test suite, or release process.

## Choose a contribution model

The official registry accepts two contribution models:

- **External plugin:** keep the plugin in its own public repository and provide a versioned HTTPS ZIP release. The registry catalogs, checks, republishes, and publishes metadata for that release.
- **Standard plugin:** submit the plugin source under the registry's `plugins/<slug>/` directory. The registry packages the source for distribution.

Choose the model that fits your plugin's maintenance and release process. The registry contribution guide defines the current metadata, versioning, validation, and release requirements.

??? tip "Choose external for an independent release process"
    An external plugin is a good fit when you already publish versioned ZIP releases from your own repository. A standard plugin is a good fit for a smaller plugin maintained directly in the registry.

## Submit your plugin

Follow the official [Plugins contribution guide](https://github.com/Dispatcharr/Plugins/blob/main/CONTRIBUTING.md) for the complete submission process.

It is the source of truth for:

- required catalog metadata and licensing;
- plugin naming and version rules;
- external release-archive requirements;
- compatibility metadata;
- pull-request validation and review;
- generated release artifacts, checksums, and signatures.

Contributors must also follow the repository's [Code of Conduct](https://github.com/Dispatcharr/Plugins/blob/main/CODE_OF_CONDUCT.md).

!!! warning
    The registry contribution guide is the source of truth. Do not rely on this page for validation details that may change with registry tooling.

## Related documentation

- [Test and package a plugin](testing-and-packaging.md)
- [Plugin manifest and interface](manifest-and-interface.md)
- [Capabilities and security](capabilities-and-security.md)
