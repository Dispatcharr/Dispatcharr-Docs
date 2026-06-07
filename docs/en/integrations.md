## Connections
From the Connections page you can create and manage event-driven webhooks and script execution

Click <i data-lucide="square-plus" style="color: White; width: 18px;"></i> New Connection to create a new webhook or event-driven script execution

* Supports multiple event types including:
    * Channel lifecycle (start, stop, reconnect, error, failover)
    * Stream operations (switch),
    * Recording events (start, end)
    * Data refreshes (EPG, M3U)
    * Client activity (connect, disconnect)
    * Security events (login failed, EPG/M3U blocked)
    * VOD playback (start, stop)

Event data is available as environment variables in scripts (prefixed with DISPATCHARR_), POST payloads for webhooks, and plugin execution payloads

!!! info
    Scripts should be placed in `data/scripts` and must be given execute permissions

??? example "Example Script (click to see)"
    ```python
    #!/usr/bin/env python3

    import requests
    import json
    import os
    import re

    webhook_url = ""

    message = ["Test event from Dispatcharr!"]

    for key, value in os.environ.items():
    #    if not re.search(r"DISPATCHARR_", key):
    #        continue

        key = key.replace("DISPATCHARR_", "").replace("_", " ").lower()
        message.append(f"{key} = {value}")

    # The data to be sent in the POST request
    # 'content' is the key for a basic message.
    # Please leave this thats how the project works!
    data = {
        "content": "\n".join(message)
    }

    # The headers to specify the content type
    headers = {
        "Content-Type": "application/json"
    }

    # Send the POST request
    response = requests.post(webhook_url, data=json.dumps(data), headers=headers)

    # Check if the request was successful
    if response.status_code == 204:
        print("Message sent successfully!")
    else:
        print(f"Failed to send message. Status code: {response.status_code}")
        print(response.text)
    ```

## Webhook Payload Templates

When you create a webhook connection you can optionally supply a **payload template**. The template is rendered with the [Django template language](https://docs.djangoproject.com/en/stable/ref/templates/language/) (the help text mentions Jinja2, but the engine is Django's). Variables from the event payload are exposed directly in the template context — reference them as `{{ variable_name }}`.

If the rendered template parses as valid JSON, Dispatcharr forces `Content-Type: application/json` on the outgoing request. Otherwise the rendered string is POSTed as-is using whatever headers you set on the connection.

Leaving the template blank sends the raw event payload as JSON.

### Auto-injected variables (channel-context events)

Any event that carries a `channel_id` is enriched at dispatch time with the following fields (sourced from the channel record, the currently playing stream, and the M3U/profile in Redis):

| Variable | Description |
| --- | --- |
| `channel_name` | Channel display name |
| `stream_name` | Name of the currently playing stream |
| `stream_url` | Upstream URL of the currently playing stream |
| `channel_url` | Alias of `stream_url` |
| `provider_name` | M3U account name backing the active stream |
| `profile_used` | StreamProfile name applied to the active stream |

!!! warning
    Empty / falsy values (`None`, `0`, `""`, `False`) are **stripped from the payload before the template is rendered**. If a field might be missing, guard it with a default: `{{ stream_name|default:"-" }}`. Otherwise an undefined variable will render as an empty string and can produce invalid JSON.

### Per-event variables

The tables below list the variables each event provides _in addition to_ the auto-injected fields above (where applicable).

#### `channel_start` — Channel Started
| Variable | Description |
| --- | --- |
| `channel_id` | Channel UUID |
| `channel_name` | Channel name |
| `stream_name` | Stream name |
| `stream_id` | Internal stream ID |

#### `channel_stop` — Channel Stopped
| Variable | Description |
| --- | --- |
| `channel_id` | Channel UUID |
| `channel_name` | Channel name |
| `runtime` | Total runtime in seconds |
| `total_bytes` | Total bytes streamed |

#### `channel_reconnect` — Channel Reconnected
| Variable | Description |
| --- | --- |
| `channel_id` | Channel UUID |
| `channel_name` | Channel name |
| `attempt` | Current retry attempt number |
| `max_attempts` | Maximum configured retries |

#### `channel_error` — Channel Error
| Variable | Description |
| --- | --- |
| `channel_id` | Channel UUID |
| `channel_name` | Channel name |
| `error_type` | One of `connection_failed`, `connection_exception` |
| `url` | First 100 chars of the stream URL |
| `attempts` | How many attempts were made before giving up |
| `error_message` | Exception detail (only on `connection_exception`) |

#### `channel_failover` — Channel Failover
| Variable | Description |
| --- | --- |
| `channel_id` | Channel UUID |
| `channel_name` | Channel name |
| `reason` | Why failover triggered (e.g. `buffering_timeout`) |
| `duration` | How long the failure condition persisted before failover |

#### `stream_switch` — Stream Switch
| Variable | Description |
| --- | --- |
| `channel_id` | Channel UUID |
| `channel_name` | Channel name |
| `new_url` | First 100 chars of the new stream URL |
| `stream_id` | New stream ID |

#### `recording_start` — Recording Started
| Variable | Description |
| --- | --- |
| `channel_id` | Channel UUID |
| `channel_name` | Channel name |
| `recording_id` | Recording row ID |

#### `recording_end` — Recording Ended
| Variable | Description |
| --- | --- |
| `channel_id` | Channel UUID |
| `channel_name` | Channel name |
| `recording_id` | Recording row ID |
| `interrupted` | `True` if the recording ended early |
| `bytes_written` | Total bytes written to disk |

#### `epg_refresh` — EPG Refreshed
| Variable | Description |
| --- | --- |
| `source_name` | EPG source name |
| `programs` | Number of programs ingested |
| `channels` | Number of channels with programs |
| `skipped_programs` | Programs skipped during parse |
| `unmapped_channels` | EPG channels with no matching Dispatcharr channel |

#### `m3u_refresh` — M3U Refreshed
| Variable | Description |
| --- | --- |
| `account_name` | M3U account name |
| `elapsed_time` | Refresh duration in seconds (rounded to 2dp) |
| `streams_created` | New streams added this refresh |
| `streams_updated` | Existing streams updated |
| `streams_deleted` | Streams removed because the provider dropped them |
| `total_processed` | Total streams seen in the playlist |

#### `client_connect` — Client Connected
| Variable | Description |
| --- | --- |
| `channel_id` | Channel UUID |
| `channel_name` | Channel name |
| `client_ip` | Client IP address |
| `client_id` | Internal per-connection client ID |
| `user_agent` | Client User-Agent (truncated to 100 chars) |
| `username` | Authenticated username, if any |

#### `client_disconnect` — Client Disconnected
| Variable | Description |
| --- | --- |
| `channel_id` | Channel UUID |
| `channel_name` | Channel name |
| `client_ip` | Client IP address |
| `client_id` | Internal per-connection client ID |
| `user_agent` | Client User-Agent (truncated to 100 chars) |
| `duration` | Session length in seconds (rounded to 2dp) |
| `bytes_sent` | Bytes delivered to this client |
| `username` | Authenticated username, if any |

#### `login_failed` — Login Failed
| Variable | Description |
| --- | --- |
| `user` | Username submitted (or `unknown` / `token_refresh`) |
| `client_ip` | Client IP address |
| `user_agent` | Client User-Agent |
| `reason` | Failure reason (invalid credentials, network access denied, etc.) |

#### `epg_blocked` — EPG Blocked
| Variable | Description |
| --- | --- |
| `profile` | Output profile name (or `all`) |
| `reason` | Why the request was blocked |
| `client_ip` | Client IP address |
| `user_agent` | Client User-Agent |

#### `m3u_blocked` — M3U Blocked
| Variable | Description |
| --- | --- |
| `profile` | Output profile name (or `all`) — present on the standard M3U path |
| `user` | Submitted username — present on the Xtream Codes API path |
| `reason` | Why the request was blocked |
| `client_ip` | Client IP address |
| `user_agent` | Client User-Agent |

#### `vod_start` / `vod_stop` — VOD Started / VOD Stopped
| Variable | Description |
| --- | --- |
| `content_name` | VOD title |
| `content_uuid` | VOD content UUID (shared by the matching start/stop pair) |
| `client_ip` | Client IP address |
| `username` | Authenticated username, if any |

### Gotchas

* **Falsy values disappear.** As noted above, Dispatcharr deletes any payload key whose value is empty before rendering. Always use `{{ var|default:"-" }}` (or wrap fields in `{% if var %}…{% endif %}`) to keep your JSON valid.
* **Channel-context fields require an active stream.** If no stream is bound in Redis for the channel at dispatch time, `stream_name` / `stream_url` / `provider_name` / `profile_used` will be missing from the payload — even on `channel_start`.
* **Some logged events do not fire webhooks.** `login_success`, `logout`, `m3u_download`, `epg_download`, and `channel_buffering` are written to the System Events log but are **not** in the webhook event registry, so subscriptions on those events will never fire.
* **`channel_id` is a Channel UUID**, not the integer primary key.
* **No HMAC signing is built in.** If your receiver needs to authenticate the webhook, put a long shared secret in the connection's headers (e.g. `X-Auth-Token`) and validate it on the receiving end.

### Worked examples

#### Discord — channel start / stop
Subscribe `channel_start` and `channel_stop` to the same Discord webhook URL:

```jinja
{
  "username": "Dispatcharr",
  "embeds": [{
    "title": "{{ channel_name|default:"Unknown" }} {% if total_bytes %}stopped{% else %}started{% endif %}",
    "fields": [
      {"name": "Stream",   "value": "{{ stream_name|default:"-" }}",   "inline": true},
      {"name": "Provider", "value": "{{ provider_name|default:"-" }}", "inline": true},
      {"name": "Profile",  "value": "{{ profile_used|default:"-" }}",  "inline": true}
      {% if runtime %},{"name": "Runtime (s)", "value": "{{ runtime }}", "inline": true}{% endif %}
      {% if total_bytes %},{"name": "Bytes",   "value": "{{ total_bytes }}", "inline": true}{% endif %}
    ]
  }]
}
```

#### Slack — error / failover / reconnect alerts
One Slack webhook covers all three error-class events:

```jinja
{
  "text": ":warning: *{{ channel_name }}* — {% if error_type %}{{ error_type }}{% elif reason %}{{ reason }}{% else %}reconnect {{ attempt }}/{{ max_attempts }}{% endif %}",
  "attachments": [{
    "color": "warning",
    "fields": [
      {"title": "Provider", "value": "{{ provider_name|default:"-" }}", "short": true},
      {"title": "Stream",   "value": "{{ stream_name|default:"-" }}",   "short": true}
      {% if error_message %},{"title": "Detail", "value": "{{ error_message }}", "short": false}{% endif %}
    ]
  }]
}
```

#### ntfy / Gotify / Pushover — mobile push for security events
Subscribe `login_failed`, `m3u_blocked`, `epg_blocked` to a ntfy topic. ntfy accepts a plain text body, so the template doesn't need to be JSON:

```jinja
[{{ event|default:"alert" }}] {{ user|default:"unknown" }} from {{ client_ip }} — {{ reason }}
```

Add headers on the connection itself:

```json
{"Title": "Dispatcharr security", "Priority": "high", "Tags": "warning"}
```

#### Home Assistant — now-playing state
Point `channel_start`, `channel_stop`, and `stream_switch` at a Home Assistant `webhook` trigger:

```jinja
{
  "state": "{% if total_bytes %}idle{% else %}playing{% endif %}",
  "channel": "{{ channel_name }}",
  "stream":  "{{ stream_name }}",
  "provider":"{{ provider_name }}",
  "url":     "{{ stream_url }}"
}
```

Drive an `input_text` or template sensor from the webhook automation on the HA side.

#### InfluxDB — provider health metrics
Send `m3u_refresh` and `epg_refresh` to an InfluxDB HTTP write endpoint. The body is InfluxDB line protocol — plain text, not JSON, so the JSON-detection path won't fire:

```jinja
m3u_refresh,account={{ account_name }} created={{ streams_created|default:0 }},updated={{ streams_updated|default:0 }},deleted={{ streams_deleted|default:0 }},elapsed={{ elapsed_time|default:0 }}
```

## Logs
Triggered connections, their responses, and any errors will be logged here
