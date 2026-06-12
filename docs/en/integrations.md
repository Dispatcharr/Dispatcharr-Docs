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
    #!/dispatcharrpy/bin/python

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

!!! warning
    If you **leave the template blank**, the raw event payload dict is passed to `requests.post(..., data=<dict>)`, which form-encodes it as `application/x-www-form-urlencoded` (e.g. `channel_name=CNN&stream_name=...`). It is **not** sent as JSON. If you want JSON, supply a template — even a trivial one like `{{ payload|default:"" }}` will not work either; you must render the body yourself, e.g. `{"channel": "{{ channel_name }}"}`.

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

!!! warning "Falsy values are stripped before render"
    Any payload key whose value is falsy under Python truthiness — `None`, `""`, `0`, `0.0`, `False`, empty `[]`, empty `{}` — is **deleted from the payload before the template is rendered**. That means numeric and boolean fields can also vanish: e.g. `bytes_written=0` on `recording_end` or `interrupted=False` will both be missing, not present-with-zero. If a field might be missing, guard it with a default: `{{ stream_name|default:"-" }}`. Otherwise an undefined variable will render as an empty string and can produce invalid JSON.

!!! warning "Escape variables that go inside JSON strings"
    Django's template engine HTML-escapes `<`, `>`, `&`, `"`, `'` by default but does **not** escape backslashes or newlines. That means:

    - **A URL with `&` query params** rendered as `"url": "{{ stream_url }}"` produces `"url": "http://host/?a=1&amp;b=2"` — the JSON parses fine but the receiver gets a URL with literal `&amp;`.
    - **An `error_message` containing a newline or backslash** (very common for exception text) produces invalid JSON.

    The safe pattern for any variable that lands inside a JSON string is the `escapejs` filter, which escapes everything dangerous in a JS/JSON string context (quotes, backslashes, newlines, `<`, `>`, `&`) as `\uXXXX` sequences. The output looks noisy but is unambiguous after `JSON.parse`:

    ```jinja
    "url": "{{ stream_url|escapejs }}"
    "detail": "{{ error_message|escapejs }}"
    ```

    For **plain-text** targets like ntfy line bodies, you can use `|safe` on each variable to bypass autoescape and avoid `&lt;`-style noise in the rendered message.

### Per-event variables

The tables below list the variables each event provides _in addition to_ the auto-injected fields above (where applicable).

#### `channel_start` — Channel Started
| Variable | Description |
| --- | --- |
| `channel_name` | Channel name |
| `stream_name` | Stream name |
| `stream_id` | Internal stream ID |

#### `channel_stop` — Channel Stopped
| Variable | Description |
| --- | --- |
| `channel_name` | Channel name |
| `runtime` | Total runtime in seconds |
| `total_bytes` | Total bytes streamed |

#### `channel_reconnect` — Channel Reconnected
| Variable | Description |
| --- | --- |
| `channel_name` | Channel name |
| `attempt` | Current retry attempt number |
| `max_attempts` | Maximum configured retries |

#### `channel_error` — Channel Error
| Variable | Description |
| --- | --- |
| `channel_name` | Channel name |
| `error_type` | One of `connection_failed`, `connection_exception` |
| `url` | First 100 chars of the stream URL |
| `attempts` | How many attempts were made before giving up |
| `error_message` | Exception detail (only on `connection_exception`) |

#### `channel_failover` — Channel Failover
| Variable | Description |
| --- | --- |
| `channel_name` | Channel name |
| `reason` | Why failover triggered (e.g. `buffering_timeout`) |
| `duration` | How long the failure condition persisted before failover |

#### `stream_switch` — Stream Switch
| Variable | Description |
| --- | --- |
| `channel_name` | Channel name |
| `new_url` | First 100 chars of the new stream URL |
| `stream_id` | New stream ID |

#### `recording_start` — Recording Started
| Variable | Description |
| --- | --- |
| `channel_name` | Channel name |
| `recording_id` | Recording row ID |

#### `recording_end` — Recording Ended
| Variable | Description |
| --- | --- |
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
| `channel_name` | Channel name |
| `client_ip` | Client IP address |
| `client_id` | Internal per-connection client ID |
| `user_agent` | Client User-Agent (truncated to 100 chars) |
| `username` | Authenticated username, if any |

#### `client_disconnect` — Client Disconnected
| Variable | Description |
| --- | --- |
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
* **Channel-context fields can be missing on some events.** `stream_name` / `stream_url` / `channel_url` / `provider_name` / `profile_used` are populated from a `Stream` row. The dispatcher uses an explicit `stream_id` from the call site if one was passed (true for `channel_start` and `stream_switch`); otherwise it falls back to the Redis key `channel_stream:<channel.id>`. If neither yields a stream, all five fields are `None` and get stripped before render. In practice this affects events like `channel_stop`, `channel_reconnect`, `channel_error`, `channel_failover`, `recording_start`, `recording_end`, `client_connect`, and `client_disconnect` when the live-stream Redis state has already been cleared.
* **Some logged events do not fire webhooks.** `login_success`, `logout`, `m3u_download`, `epg_download`, and `channel_buffering` are written to the System Events log but are **not** in the webhook event registry, so subscriptions on those events will never fire.
* **The Channel UUID is not exposed to templates.** The dispatch layer accepts a `channel_id` argument internally and uses it as the UUID lookup key for the `Channel` row, but the value is consumed at that point and is **not** added to the template context. `{{ channel_id }}` in a payload template renders as an empty string. Use `{{ channel_name }}` to identify the channel.
* **No HMAC signing is built in.** If your receiver needs to authenticate the webhook, put a long shared secret in the connection's headers (e.g. `X-Auth-Token`) and validate it on the receiving end.

### Worked examples

#### Discord — channel start / stop
Use **two separate subscriptions** with hardcoded labels — don't try to detect start vs. stop from `total_bytes`/`runtime` truthiness, because a legitimate 0-byte session would be stripped to nothing and misclassified.

For `channel_start`:

```jinja
{
  "username": "Dispatcharr",
  "embeds": [{
    "title": "{{ channel_name|default:"Unknown"|escapejs }} started",
    "fields": [
      {"name": "Stream",   "value": "{{ stream_name|default:"-"|escapejs }}",   "inline": true},
      {"name": "Provider", "value": "{{ provider_name|default:"-"|escapejs }}", "inline": true},
      {"name": "Profile",  "value": "{{ profile_used|default:"-"|escapejs }}",  "inline": true}
    ]
  }]
}
```

For `channel_stop`:

```jinja
{
  "username": "Dispatcharr",
  "embeds": [{
    "title": "{{ channel_name|default:"Unknown"|escapejs }} stopped",
    "fields": [
      {"name": "Stream",      "value": "{{ stream_name|default:"-"|escapejs }}", "inline": true},
      {"name": "Provider",    "value": "{{ provider_name|default:"-"|escapejs }}", "inline": true},
      {"name": "Runtime (s)", "value": "{{ runtime|default:0 }}", "inline": true},
      {"name": "Bytes",       "value": "{{ total_bytes|default:0 }}", "inline": true}
    ]
  }]
}
```

#### Slack — error / failover / reconnect alerts
One Slack webhook covers all three error-class events. Note the `|escapejs` filter on every variable value — without it, an `error_message` that contains a newline or backslash (very common in raw Python exception text) will produce invalid JSON and the delivery will fail:

```jinja
{
  "text": ":warning: *{{ channel_name|escapejs }}* — {% if error_type %}{{ error_type|escapejs }}{% elif reason %}{{ reason|escapejs }}{% else %}reconnect {{ attempt }}/{{ max_attempts }}{% endif %}",
  "attachments": [{
    "color": "warning",
    "fields": [
      {"title": "Provider", "value": "{{ provider_name|default:"-"|escapejs }}", "short": true},
      {"title": "Stream",   "value": "{{ stream_name|default:"-"|escapejs }}",   "short": true}
      {% if error_message %},{"title": "Detail", "value": "{{ error_message|escapejs }}", "short": false}{% endif %}
    ]
  }]
}
```

#### ntfy / Gotify / Pushover — mobile push for security events
Subscribe `login_failed`, `m3u_blocked`, `epg_blocked` to a ntfy topic. ntfy accepts a plain text body, so the template doesn't need to be JSON:

```jinja
{{ user|default:"unknown" }} from {{ client_ip }} — {{ reason }}
```

The event name itself is **not** in the template context (only the payload dict is), so include it in the connection headers instead, alongside other ntfy metadata:

```json
{"Title": "Dispatcharr security alert", "Priority": "high", "Tags": "warning"}
```

#### Home Assistant — now-playing state
Use **two separate subscriptions** with hardcoded `state` values (same reason as Discord). Note `|escapejs` on `stream_url` — without it, a URL with `&` query params (every Xtream/HLS URL) would be rendered as `&amp;` and HA would store the broken URL.

For `channel_start` and `stream_switch`:

```jinja
{
  "state": "playing",
  "channel":  "{{ channel_name|escapejs }}",
  "stream":   "{{ stream_name|escapejs }}",
  "provider": "{{ provider_name|escapejs }}",
  "url":      "{{ stream_url|escapejs }}"
}
```

For `channel_stop`:

```jinja
{
  "state": "idle",
  "channel": "{{ channel_name|escapejs }}"
}
```

Drive an `input_text` or template sensor from the webhook automation on the HA side.

#### InfluxDB — provider health metrics
Send `m3u_refresh` and `epg_refresh` to an InfluxDB HTTP write endpoint as InfluxDB line protocol — plain text, not JSON, so the JSON-detection path won't fire. The two events share no field names, so use one subscription with one template for each.

!!! warning
    InfluxDB line protocol requires tag values to escape spaces, commas, and `=`. Django has no built-in line-protocol filter, so the cheap workaround is `|cut:" "|cut:","|cut:"="` to strip those characters from the tag. The clean alternative is to rename your M3U accounts / EPG sources to be alphanumeric+dash only.

For `m3u_refresh`:

```jinja
m3u_refresh,account={{ account_name|cut:" "|cut:","|cut:"=" }} created={{ streams_created|default:0 }},updated={{ streams_updated|default:0 }},deleted={{ streams_deleted|default:0 }},elapsed={{ elapsed_time|default:0 }}
```

For `epg_refresh`:

```jinja
epg_refresh,source={{ source_name|cut:" "|cut:","|cut:"=" }} programs={{ programs|default:0 }},channels={{ channels|default:0 }},skipped={{ skipped_programs|default:0 }},unmapped={{ unmapped_channels|default:0 }}
```

## Logs
Triggered connections, their responses, and any errors will be logged here
