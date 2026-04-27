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

## Modular Deployment

By default, Dispatcharr runs in all-in-one (AIO) mode with Redis and PostgreSQL bundled inside a single container. Modular deployment separates these into individual containers, giving you control over database versions, resource allocation, and connection security.

!!! note
    Modular deployment is optional. AIO mode works for most users. Consider modular deployment if you need TLS-encrypted database connections, want to use existing external Redis or PostgreSQL instances, or require independent scaling of services.

### Modular Docker Compose

```yaml
--8<-- "https://raw.githubusercontent.com/Dispatcharr/Dispatcharr/refs/heads/main/docker/docker-compose.yml"
```

### Key Differences from AIO

* `DISPATCHARR_ENV=modular` replaces `DISPATCHARR_ENV=aio`
* PostgreSQL and Redis run as separate containers with their own health checks
* The Celery worker runs in a dedicated container with its own entrypoint
* Environment variables for PostgreSQL and Redis must match across the web and celery services
* TLS encryption for database connections is only available in modular mode

### TLS Configuration

Modular deployments support TLS encryption for connections between Dispatcharr and external Redis/PostgreSQL services. See [Connection Security](/Dispatcharr-Docs/advanced/#connection-security) in the Advanced section for configuration details.

---

## Accessing Dispatcharr

Open your web browser and navigate to:

[http://localhost:9191](http://localhost:9191/)

Replace `localhost` with your server's IP address if accessing remotely.

