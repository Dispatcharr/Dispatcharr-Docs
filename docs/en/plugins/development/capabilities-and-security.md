# Capabilities and security

Capabilities declare the access a plugin needs. Dispatcharr shows newly requested capabilities before a user enables a plugin or accepts a managed-plugin update.

Add capabilities to a version 1 or later manifest:

```json
{
  "manifest_version": 2,
  "capabilities": [
    "outbound_network",
    "filesystem_write"
  ]
}
```

Declare only the capabilities your plugin needs. A capability is a disclosure to the administrator and, for version 2 manifests, enables supported runtime checks.

## Capability acknowledgement

Before a plugin with new effective capabilities can be enabled, an administrator must acknowledge them in the Dispatcharr interface. A managed-plugin update that adds capabilities requires acknowledgement again.

Acknowledgement is an administrative approval step. It is not the same as runtime enforcement. Version 2 runtime checks use the capabilities declared by the plugin, not the acknowledgement record.

An action declared with `"async": true` automatically requests `background_tasks`, even when that capability is not explicitly listed.

## Available capabilities

| Capability | Declare when the plugin needs to |
| --- | --- |
| `background_tasks` | Queue plugin work for later execution. |
| `persistent_service` | Run a leader-elected persistent service. |
| `network_listener` | Bind or listen on a network socket. |
| `subprocess` | Start a subprocess. |
| `outbound_network` | Make outbound network connections. |
| `filesystem_write` | Write outside the plugin code and data directories. |
| `celery_dispatch` | Dispatch an approved internal Dispatcharr Celery task. |
| `proxy_internals` | Access internal proxy behavior. |
| `user_data` | Access user-related data. |
| `external_dependencies` | Depend on externally provided software or services. |

Unknown capability names are preserved and shown to administrators as custom capabilities. Use a known capability whenever it accurately describes the access you need.

## Version 2 runtime checks

For version 2 manifests, Dispatcharr applies best-effort checks to supported code paths:

| Capability | Supported guarded behavior |
| --- | --- |
| `background_tasks` | `context["dispatch_task"]`. |
| `persistent_service` | Leader hooks. |
| `celery_dispatch` | `context["dispatch_internal_task"]`, in addition to the internal-task allowlist. |
| `network_listener` | Selected socket bind and listen operations. |
| `outbound_network` | Selected HTTP and socket connection operations. |
| `subprocess` | Selected `subprocess` functions. |
| `filesystem_write` | File writes outside the code and stable data directories. |

`proxy_internals`, `user_data`, and `external_dependencies` are disclosures. They do not currently add runtime guards. `external_dependencies` does not install dependencies.

The `network_listener` capability is marked as requiring a restart in the user interface. Plan listener plugins accordingly.

## Security boundary

Dispatcharr plugins run as Python code in the Dispatcharr process. Capability checks are a best-effort safety net, not process isolation or a complete sandbox. A trusted plugin author can bypass Python-level checks.

Install plugins only from sources you trust. Review the plugin's requested capabilities, source, and version before enabling it. Use the official registry or another repository with an appropriate trust and verification process.

For execution patterns, see [Runtime, events, and background work](runtime-and-events.md).
