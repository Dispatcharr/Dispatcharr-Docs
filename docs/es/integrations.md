## Connections
From the Connections page you can create and manage event-driven webhooks and script execution

Click <i data-lucide="square-plus" style="color: White; width: 18px;"></i> New Connection to create a new webhook or event-driven script execution

* Supports multiple event types including:
    * Channel lifecycle (start, stop, reconnect, error, failover)
    * Stream operations (switch), 
    * Recording events (start, end)
    * Data refreshes (EPG, M3U)
    * Client activity (connect, disconnect) 

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

## Logs
Triggered connections, their responses, and any errors will be logged here