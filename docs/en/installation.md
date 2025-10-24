# Installation

Dispatcharr can be installed using Docker on various platforms, including Windows, macOS, Proxmox, and Unraid. This guide provides detailed instructions for each method.

## Prerequisites

Ensure Docker and Docker Compose are installed on your platform.

- [Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/install/)
- [Docker Desktop for Mac](https://docs.docker.com/docker-for-mac/install/)
- [Docker on Linux](https://docs.docker.com/engine/install/)
- [Docker on Proxmox (LXC)](https://pve.proxmox.com/wiki/Linux_Container)
- [Docker on Unraid](https://docs.unraid.net/unraid-os/manual/docker-management/)

---

## Docker Compose

Dispatcharr is deployed using the following `docker-compose.yml`:

```yaml
--8<-- "https://raw.githubusercontent.com/Dispatcharr/Dispatcharr/refs/heads/main/docker/docker-compose.aio.yml"
```

---

## Installation Steps

### Windows Docker

1. Install and open Docker Desktop.
2. Create a directory, e.g., `C:\Dispatcharr`, and inside it create a `docker-compose.yml` with the provided content.
3. Open a PowerShell or Command Prompt window in this directory.
4. Start Dispatcharr with:

    ```shell
    docker compose up -d
    ```

---

### macOS Docker

1. Install and start Docker Desktop.
2. Create a directory for Dispatcharr, e.g., `~/Dispatcharr`.
3. Create a `docker-compose.yml` file with the provided content.
4. Launch Terminal and navigate to your directory:

    ```shell
    cd ~/Dispatcharr
    ```

5. Run the container:

    ```shell
    docker compose up -d
    ```

---

### Linux Docker

!!! warning
    Some distros use outdated versions of Docker so it is recommended to install directly from Docker

Install Docker using the official instructions, such as those for [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

??? example "Ubuntu example"
    1. Uninstall old versions.

    ```shell
    for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
    ```

    2. Setup Dockers own apt repository for up-to-date versions.

    ```shell
    # Add Docker's official GPG key:
    sudo apt-get update
    sudo apt-get install ca-certificates curl
    sudo install -m 0755 -d /etc/apt/keyrings
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    sudo chmod a+r /etc/apt/keyrings/docker.asc

    # Add the repository to Apt sources:
    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update
    ```

    3. Install Docker.

    ```shell
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```

1. Create and navigate to your Dispatcharr directory.
    ```shell
    mkdir ~/dispatcharr && cd ~/dispatcharr
    ```

2. Add your own `docker-compose.yml` or use the provided example.

3. Launch Dispatcharr:

    ```shell
    docker compose up -d
    ```

!!! note
    If you wish to use the `docker compose` commands without sudo you may need to follow Dockers official guide [here](https://docs.docker.com/engine/install/linux-postinstall/).

---
### Proxmox

1. Create an Ubuntu LXC container or VM with Docker and Docker Compose installed.

    ```shell
    apt install docker.io docker-compose -y
    ```

2. Create and navigate to your Dispatcharr directory:

    ```shell
    mkdir ~/dispatcharr && cd ~/dispatcharr
    ```

3. Add your `docker-compose.yml`.
4. Launch Dispatcharr:

    ```shell
    docker compose up -d
    ```

---

### Unraid

1. Select the "Apps" tab of your Unraid server
2. Search "Dispatcharr" and Select Install
3. Leave the defaults unless you need to change them

---

### Building from Source (Unsupported)

1. Clone this repository:
    ```bash
    git clone https://github.com/Dispatcharr/Dispatcharr.git
    cd Dispatcharr
    ```

2. Create and activate a virtual environment (optional but recommended):
    ```bash
    python -m venv venv
    source venv/bin/activate
    ```

3. Install required dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Run database migrations and start the server (Django + React front-end):

    ```bash
    python manage.py migrate
    python manage.py runserver
    ```

5. For the front-end, navigate to the frontend/ folder and run:

    ```
    npm install
    npm run build
    ```
   
6. Once running, visit [http://localhost:9191](http://localhost:9191/) (or the port you exposed) in your browser.

---

## Accessing Dispatcharr

Open your web browser and navigate to:

[http://localhost:9191](http://localhost:9191/)

Replace `localhost` with your server's IP address if accessing remotely.

