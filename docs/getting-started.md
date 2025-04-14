# Installation

Dispatcharr can be installed using Docker on various platforms, including Windows, macOS, Proxmox, and Unraid. This guide provides detailed instructions for each method.

---

## Prerequisites

Ensure Docker and Docker Compose are installed on your platform.

- [Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/install/)
- [Docker Desktop for Mac](https://docs.docker.com/docker-for-mac/install/)
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

### Proxmox

1. Create an Ubuntu LXC container or VM with Docker and Docker Compose installed.

```shell
apt update
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


### Unraid

1. Select the "Apps" tab of your Unraid server
2. Search "Dispatcharr" and Select Install
3. Leave the defaults unless you need to change them

## Accessing Dispatcharr

Open your web browser and navigate to:

```
http://localhost:9191
```

Replace `localhost` with your server's IP address if accessing remotely.

