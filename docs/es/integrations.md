## Connections
Desde la página Connections puedes crear y administrar webhooks basados en eventos y la ejecución de scripts.

Haz clic en <i data-lucide="square-plus" style="color: White; width: 18px;"></i> New Connection para crear un nuevo webhook o una ejecución de script basada en eventos.

* Admite múltiples tipos de eventos, incluidos:
    * Ciclo de vida del canal (start, stop, reconnect, error, failover)
    * Operaciones de stream (switch),
    * Eventos de grabación (start, end)
    * Actualizaciones de datos (EPG, M3U)
    * Actividad del cliente (connect, disconnect)
    * Eventos de seguridad (login failed, EPG/M3U blocked)
    * Reproducción de VOD (start, stop)

Los datos del evento están disponibles como variables de entorno en scripts (con el prefijo DISPATCHARR_), payloads POST para webhooks y payloads de ejecución de plugins.

!!! info "Información"
    Los scripts deben colocarse en `data/scripts` y deben tener permisos de ejecución.

??? example "Ejemplo de script (clic para ver)"
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

Cuando creas una conexión de webhook, opcionalmente puedes proporcionar un **payload template**. El template se renderiza con el [lenguaje de templates de Django](https://docs.djangoproject.com/en/stable/ref/templates/language/) (el texto de ayuda menciona Jinja2, pero el motor es el de Django). Las variables del payload del evento se exponen directamente en el contexto del template, así que puedes referenciarlas como `{{ variable_name }}`.

Si el template renderizado se interpreta como JSON válido, Dispatcharr fuerza `Content-Type: application/json` en la solicitud saliente. De lo contrario, la cadena renderizada se envía por POST tal cual usando los headers que hayas configurado en la conexión.

!!! warning "Advertencia"
    Si **dejas el template vacío**, el dict crudo del payload del evento se pasa a `requests.post(..., data=<dict>)`, lo que lo codifica como formulario `application/x-www-form-urlencoded` (por ejemplo `channel_name=CNN&stream_name=...`). **No** se envía como JSON. Si quieres JSON, proporciona un template. Incluso uno trivial como `{{ payload|default:"" }}` tampoco funcionará; debes renderizar el body tú mismo, por ejemplo `{"channel": "{{ channel_name }}"}`.

### Variables auto-inyectadas (eventos con contexto de canal)

Cualquier evento que incluya un `channel_id` se enriquece en el momento del envío con los siguientes campos (tomados del registro del canal, del stream que se está reproduciendo y del M3U/profile en Redis):

| Variable | Description |
| --- | --- |
| `channel_name` | Nombre visible del canal |
| `stream_name` | Nombre del stream que se está reproduciendo actualmente |
| `stream_url` | URL upstream del stream que se está reproduciendo actualmente |
| `channel_url` | Alias de `stream_url` |
| `provider_name` | Nombre de la cuenta M3U que respalda el stream activo |
| `profile_used` | Nombre del StreamProfile aplicado al stream activo |

!!! warning "Los valores falsy se eliminan antes del render"
    Cualquier clave del payload cuyo valor sea falsy según la evaluación de Python, como `None`, `""`, `0`, `0.0`, `False`, `[]` vacío o `{}` vacío, se **elimina del payload antes de renderizar el template**. Eso significa que los campos numéricos y booleanos también pueden desaparecer: por ejemplo, `bytes_written=0` en `recording_end` o `interrupted=False` no aparecerán con valor cero, sino que faltarán por completo. Si un campo podría faltar, protégelo con un valor por defecto: `{{ stream_name|default:"-" }}`. De lo contrario, una variable no definida se renderizará como una cadena vacía y puede producir JSON inválido.

!!! warning "Escapa las variables que van dentro de cadenas JSON"
    El motor de templates de Django hace escape HTML de `<`, `>`, `&`, `"`, `'` por defecto, pero **no** escapa barras invertidas ni saltos de línea. Eso significa que:

    - **Una URL con parámetros de consulta `&`** renderizada como `"url": "{{ stream_url }}"` produce `"url": "http://host/?a=1&amp;b=2"`; el JSON se interpreta bien, pero el receptor obtiene una URL con `&amp;` literal.
    - **Un `error_message` que contiene un salto de línea o una barra invertida** (muy común en textos de excepciones) produce JSON inválido.

    El patrón seguro para cualquier variable que termine dentro de una cadena JSON es el filtro `escapejs`, que escapa todo lo peligroso en un contexto de cadena JS/JSON (comillas, barras invertidas, saltos de línea, `<`, `>`, `&`) como secuencias `\uXXXX`. El resultado se ve ruidoso, pero es inequívoco después de `JSON.parse`:

    ```jinja
    "url": "{{ stream_url|escapejs }}"
    "detail": "{{ error_message|escapejs }}"
    ```

    Para destinos de **texto plano** como cuerpos de línea de ntfy, puedes usar `|safe` en cada variable para omitir el autoescape y evitar ruido tipo `&lt;` en el mensaje renderizado.

### Variables por evento

Las tablas a continuación muestran las variables que proporciona cada evento _además de_ los campos auto-inyectados anteriores, cuando correspondan.

#### `channel_start` - Channel Started
| Variable | Description |
| --- | --- |
| `channel_name` | Nombre del canal |
| `stream_name` | Nombre del stream |
| `stream_id` | ID interno del stream |

#### `channel_stop` - Channel Stopped
| Variable | Description |
| --- | --- |
| `channel_name` | Nombre del canal |
| `runtime` | Tiempo total de ejecución en segundos |
| `total_bytes` | Total de bytes transmitidos |

#### `channel_reconnect` - Channel Reconnected
| Variable | Description |
| --- | --- |
| `channel_name` | Nombre del canal |
| `attempt` | Número actual del intento de reintento |
| `max_attempts` | Máximo de reintentos configurados |

#### `channel_error` - Channel Error
| Variable | Description |
| --- | --- |
| `channel_name` | Nombre del canal |
| `error_type` | Uno de `connection_failed`, `connection_exception` |
| `url` | Primeros 100 caracteres de la URL del stream |
| `attempts` | Cuántos intentos se hicieron antes de abandonar |
| `error_message` | Detalle de la excepción (solo en `connection_exception`) |

#### `channel_failover` - Channel Failover
| Variable | Description |
| --- | --- |
| `channel_name` | Nombre del canal |
| `reason` | Motivo por el que se activó el failover (por ejemplo `buffering_timeout`) |
| `duration` | Cuánto tiempo persistió la condición de fallo antes del failover |

#### `stream_switch` - Stream Switch
| Variable | Description |
| --- | --- |
| `channel_name` | Nombre del canal |
| `new_url` | Primeros 100 caracteres de la nueva URL del stream |
| `stream_id` | Nuevo ID del stream |

#### `recording_start` - Recording Started
| Variable | Description |
| --- | --- |
| `channel_name` | Nombre del canal |
| `recording_id` | ID de la fila de grabación |

#### `recording_end` - Recording Ended
| Variable | Description |
| --- | --- |
| `channel_name` | Nombre del canal |
| `recording_id` | ID de la fila de grabación |
| `interrupted` | `True` si la grabación terminó antes de tiempo |
| `bytes_written` | Total de bytes escritos en disco |

#### `epg_refresh` - EPG Refreshed
| Variable | Description |
| --- | --- |
| `source_name` | Nombre de la fuente EPG |
| `programs` | Número de programas ingeridos |
| `channels` | Número de canales con programas |
| `skipped_programs` | Programas omitidos durante el parseo |
| `unmapped_channels` | Canales EPG sin canal coincidente en Dispatcharr |

#### `m3u_refresh` - M3U Refreshed
| Variable | Description |
| --- | --- |
| `account_name` | Nombre de la cuenta M3U |
| `elapsed_time` | Duración de la actualización en segundos (redondeada a 2 decimales) |
| `streams_created` | Nuevos streams agregados en esta actualización |
| `streams_updated` | Streams existentes actualizados |
| `streams_deleted` | Streams eliminados porque el proveedor los quitó |
| `total_processed` | Total de streams vistos en la playlist |

#### `client_connect` - Client Connected
| Variable | Description |
| --- | --- |
| `channel_name` | Nombre del canal |
| `client_ip` | Dirección IP del cliente |
| `client_id` | ID interno del cliente por conexión |
| `user_agent` | User-Agent del cliente (truncado a 100 caracteres) |
| `username` | Nombre de usuario autenticado, si existe |

#### `client_disconnect` - Client Disconnected
| Variable | Description |
| --- | --- |
| `channel_name` | Nombre del canal |
| `client_ip` | Dirección IP del cliente |
| `client_id` | ID interno del cliente por conexión |
| `user_agent` | User-Agent del cliente (truncado a 100 caracteres) |
| `duration` | Duración de la sesión en segundos (redondeada a 2 decimales) |
| `bytes_sent` | Bytes enviados a este cliente |
| `username` | Nombre de usuario autenticado, si existe |

#### `login_failed` - Login Failed
| Variable | Description |
| --- | --- |
| `user` | Nombre de usuario enviado (o `unknown` / `token_refresh`) |
| `client_ip` | Dirección IP del cliente |
| `user_agent` | User-Agent del cliente |
| `reason` | Motivo del fallo (credenciales inválidas, acceso de red denegado, etc.) |

#### `epg_blocked` - EPG Blocked
| Variable | Description |
| --- | --- |
| `profile` | Nombre del output profile (o `all`) |
| `reason` | Motivo por el que se bloqueó la solicitud |
| `client_ip` | Dirección IP del cliente |
| `user_agent` | User-Agent del cliente |

#### `m3u_blocked` - M3U Blocked
| Variable | Description |
| --- | --- |
| `profile` | Nombre del output profile (o `all`) presente en la ruta M3U estándar |
| `user` | Nombre de usuario enviado presente en la ruta de la API Xtream Codes |
| `reason` | Motivo por el que se bloqueó la solicitud |
| `client_ip` | Dirección IP del cliente |
| `user_agent` | User-Agent del cliente |

#### `vod_start` / `vod_stop` - VOD Started / VOD Stopped
| Variable | Description |
| --- | --- |
| `content_name` | Título del VOD |
| `content_uuid` | UUID del contenido VOD (compartido por el par start/stop correspondiente) |
| `client_ip` | Dirección IP del cliente |
| `username` | Nombre de usuario autenticado, si existe |

### Cosas a tener en cuenta

* **Los valores falsy desaparecen.** Como se indicó arriba, Dispatcharr elimina cualquier clave del payload cuyo valor esté vacío antes de renderizar. Usa siempre `{{ var|default:"-" }}` o rodea los campos con `{% if var %}...{% endif %}` para mantener tu JSON válido.
* **Los campos de contexto de canal pueden faltar en algunos eventos.** `stream_name`, `stream_url`, `channel_url`, `provider_name` y `profile_used` se llenan a partir de una fila `Stream`. El dispatcher usa un `stream_id` explícito desde el sitio de llamada si se pasó uno, lo que ocurre en `channel_start` y `stream_switch`; de lo contrario, usa la clave de Redis `channel_stream:<channel.id>`. Si ninguno produce un stream, los cinco campos serán `None` y se eliminarán antes del render. En la práctica, esto afecta eventos como `channel_stop`, `channel_reconnect`, `channel_error`, `channel_failover`, `recording_start`, `recording_end`, `client_connect` y `client_disconnect` cuando el estado del stream en vivo en Redis ya se limpió.
* **Algunos eventos registrados no disparan webhooks.** `login_success`, `logout`, `m3u_download`, `epg_download` y `channel_buffering` se escriben en el log de System Events, pero **no** están en el registro de eventos de webhook, así que las suscripciones a esos eventos nunca se ejecutarán.
* **El Channel UUID no se expone a los templates.** La capa de envío acepta internamente un argumento `channel_id` y lo usa como clave de búsqueda UUID para la fila `Channel`, pero ese valor se consume en ese punto y **no** se agrega al contexto del template. `{{ channel_id }}` en un payload template se renderiza como una cadena vacía. Usa `{{ channel_name }}` para identificar el canal.
* **No hay firma HMAC integrada.** Si tu receptor necesita autenticar el webhook, coloca un secreto compartido largo en los headers de la conexión, por ejemplo `X-Auth-Token`, y valídalo en el extremo receptor.

### Ejemplos prácticos

#### Discord - channel start / stop
Usa **dos suscripciones separadas** con etiquetas codificadas de forma fija. No intentes detectar start vs. stop a partir de la presencia de `total_bytes` o `runtime`, porque una sesión legítima de 0 bytes se eliminaría y se clasificaría mal.

Para `channel_start`:

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

Para `channel_stop`:

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

#### Slack - error / failover / reconnect alerts
Un solo webhook de Slack cubre los tres eventos de tipo error. Observa el filtro `|escapejs` en cada valor de variable. Sin él, un `error_message` con un salto de línea o una barra invertida, algo muy común en texto crudo de excepciones de Python, producirá JSON inválido y fallará la entrega:

```jinja
{
  "text": ":warning: *{{ channel_name|escapejs }}* - {% if error_type %}{{ error_type|escapejs }}{% elif reason %}{{ reason|escapejs }}{% else %}reconnect {{ attempt }}/{{ max_attempts }}{% endif %}",
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

#### ntfy / Gotify / Pushover - notificaciones móviles para eventos de seguridad
Suscribe `login_failed`, `m3u_blocked` y `epg_blocked` a un topic de ntfy. ntfy acepta un body de texto plano, así que el template no necesita ser JSON:

```jinja
{{ user|default:"unknown" }} from {{ client_ip }} - {{ reason }}
```

El propio nombre del evento **no** está en el contexto del template, solo el dict del payload, así que inclúyelo en los headers de la conexión junto con otros metadatos de ntfy:

```json
{"Title": "Dispatcharr security alert", "Priority": "high", "Tags": "warning"}
```

#### Home Assistant - estado now-playing
Usa **dos suscripciones separadas** con valores `state` codificados de forma fija, por el mismo motivo que en Discord. Observa `|escapejs` en `stream_url`; sin él, una URL con parámetros `&` como casi cualquier URL Xtream o HLS se renderizaría como `&amp;` y Home Assistant almacenaría una URL rota.

Para `channel_start` y `stream_switch`:

```jinja
{
  "state": "playing",
  "channel":  "{{ channel_name|escapejs }}",
  "stream":   "{{ stream_name|escapejs }}",
  "provider": "{{ provider_name|escapejs }}",
  "url":      "{{ stream_url|escapejs }}"
}
```

Para `channel_stop`:

```jinja
{
  "state": "idle",
  "channel": "{{ channel_name|escapejs }}"
}
```

Controla un `input_text` o un template sensor desde la automatización de webhook del lado de Home Assistant.

#### InfluxDB - métricas de salud del proveedor
Envía `m3u_refresh` y `epg_refresh` a un endpoint HTTP write de InfluxDB usando line protocol de InfluxDB. Es texto plano, no JSON, así que no se activará la detección de JSON. Los dos eventos no comparten nombres de campo, así que usa una suscripción con un template para cada uno.

!!! warning "Advertencia"
    InfluxDB line protocol requiere que los valores de tag escapen espacios, comas y `=`. Django no tiene un filtro incorporado para line protocol, así que la solución rápida es `|cut:" "|cut:","|cut:"="` para quitar esos caracteres del tag. La alternativa más limpia es renombrar tus cuentas M3U o tus fuentes EPG para que usen solo caracteres alfanuméricos y guion.

Para `m3u_refresh`:

```jinja
m3u_refresh,account={{ account_name|cut:" "|cut:","|cut:"=" }} created={{ streams_created|default:0 }},updated={{ streams_updated|default:0 }},deleted={{ streams_deleted|default:0 }},elapsed={{ elapsed_time|default:0 }}
```

Para `epg_refresh`:

```jinja
epg_refresh,source={{ source_name|cut:" "|cut:","|cut:"=" }} programs={{ programs|default:0 }},channels={{ channels|default:0 }},skipped={{ skipped_programs|default:0 }},unmapped={{ unmapped_channels|default:0 }}
```

## Logs
Las conexiones activadas, sus respuestas y cualquier error se registrarán aquí.
