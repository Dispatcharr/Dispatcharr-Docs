## Connections
Desde la página Connections puedes crear y gestionar webhooks basados en eventos y la ejecución de scripts.

Haz clic en <i data-lucide="square-plus" style="color: White; width: 18px;"></i> New Connection para crear un nuevo webhook o una ejecución de script basada en eventos.

* Admite múltiples tipos de eventos, incluyendo:
    * Ciclo de vida del canal (start, stop, reconnect, error, failover)
    * Operaciones de stream (switch) 
    * Eventos de grabación (start, end)
    * Actualizaciones de datos (EPG, M3U)
    * Actividad del cliente (connect, disconnect)

Los datos del evento están disponibles como variables de entorno en scripts (con el prefijo DISPATCHARR_), como payloads POST para webhooks, y como payloads de ejecución para plugins.

!!! info
    Los scripts deben colocarse en `data/scripts` y deben tener permisos de ejecución.

??? example "Ejemplo Script (clic para ver)"
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

## Logs
Las conexiones activadas, sus respuestas y cualquier error se registrarán aquí.
