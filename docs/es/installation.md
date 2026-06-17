# Instalación

Dispatcharr puede instalarse usando Docker en varias plataformas, incluidas Windows, macOS, Proxmox y Unraid. Esta guía ofrece instrucciones detalladas para cada método.

## Requisitos previos

Asegúrate de que Docker y Docker Compose estén instalados en tu plataforma.

- [Docker Desktop para Windows](https://docs.docker.com/docker-for-windows/install/)
- [Docker Desktop para Mac](https://docs.docker.com/docker-for-mac/install/)
- [Docker en Linux](https://docs.docker.com/engine/install/)
- [Docker en Proxmox (LXC)](https://pve.proxmox.com/wiki/Linux_Container)
- [Docker en Unraid](https://docs.unraid.net/unraid-os/manual/docker-management/)

---

## Docker Compose

Dispatcharr se implementa usando el siguiente `docker-compose.yml`:

```yaml
--8<-- "https://raw.githubusercontent.com/Dispatcharr/Dispatcharr/refs/heads/main/docker/docker-compose.aio.yml"
```

---

## Pasos de instalación

### Windows Docker

1. Instala y abre Docker Desktop.
2. Crea un directorio, por ejemplo `C:\Dispatcharr`, y dentro crea un `docker-compose.yml` con el contenido proporcionado.
3. Abre una ventana de PowerShell o de Símbolo del sistema en este directorio.
4. Inicia Dispatcharr con:

    ```shell
    docker compose up -d
    ```

---

### macOS Docker

1. Instala e inicia Docker Desktop.
2. Crea un directorio para Dispatcharr, por ejemplo `~/Dispatcharr`.
3. Crea un archivo `docker-compose.yml` con el contenido proporcionado.
4. Abre Terminal y navega a tu directorio:

    ```shell
    cd ~/Dispatcharr
    ```

5. Ejecuta el contenedor:

    ```shell
    docker compose up -d
    ```

---

### Linux Docker

!!! warning
    Algunas distribuciones usan versiones desactualizadas de Docker, así que se recomienda instalarlo directamente desde Docker.

Instala Docker siguiendo las instrucciones oficiales, como las de [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

??? example "Ubuntu example"
    1. Desinstala las versiones anteriores.

    ```shell
    for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
    ```

    2. Configura el propio repositorio apt de Docker para obtener versiones actualizadas.

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

    3. Instala Docker.

    ```shell
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```

1. Crea y navega a tu directorio de Dispatcharr.
    ```shell
    mkdir ~/dispatcharr && cd ~/dispatcharr
    ```

2. Agrega tu propio `docker-compose.yml` o usa el ejemplo proporcionado.

3. Inicia Dispatcharr:

    ```shell
    docker compose up -d
    ```

!!! note
    Si quieres usar los comandos `docker compose` sin `sudo`, quizá debas seguir la guía oficial de Docker [aquí](https://docs.docker.com/engine/install/linux-postinstall/).

---

### Proxmox

1. Crea un contenedor LXC de Ubuntu o una VM con Docker y Docker Compose instalados.

    ```shell
    apt install docker.io docker-compose -y
    ```

2. Crea y navega a tu directorio de Dispatcharr:

    ```shell
    mkdir ~/dispatcharr && cd ~/dispatcharr
    ```

3. Agrega tu `docker-compose.yml`.
4. Inicia Dispatcharr:

    ```shell
    docker compose up -d
    ```

---

### Unraid

1. Selecciona la pestaña "Apps" de tu servidor Unraid.
2. Busca "Dispatcharr" y selecciona Install.
3. Deja los valores predeterminados a menos que necesites cambiarlos.

---

## Despliegue modular

Por defecto, Dispatcharr se ejecuta en modo all-in-one (AIO) con Redis y PostgreSQL incluidos dentro de un solo contenedor. El despliegue modular separa estos servicios en contenedores individuales, lo que te da control sobre las versiones de la base de datos, la asignación de recursos y la seguridad de la conexión.

!!! note
    El despliegue modular es opcional. El modo AIO funciona para la mayoría de los usuarios. Considera el despliegue modular si necesitas conexiones cifradas con TLS a la base de datos, si quieres usar instancias externas existentes de Redis o PostgreSQL, o si requieres escalado independiente de los servicios.

### Docker Compose modular

```yaml
--8<-- "https://raw.githubusercontent.com/Dispatcharr/Dispatcharr/refs/heads/main/docker/docker-compose.yml"
```

### Diferencias clave con AIO

* `DISPATCHARR_ENV=modular` reemplaza a `DISPATCHARR_ENV=aio`
* PostgreSQL y Redis se ejecutan como contenedores separados con sus propias verificaciones de salud
* El worker de Celery se ejecuta en un contenedor dedicado con su propio entrypoint
* Las variables de entorno para PostgreSQL y Redis deben coincidir entre los servicios `web` y `celery`
* El cifrado TLS para conexiones de base de datos solo está disponible en modo modular

### Configuración TLS

Los despliegues modulares admiten cifrado TLS para las conexiones entre Dispatcharr y servicios externos de Redis/PostgreSQL. Consulta [Connection Security](/Dispatcharr-Docs/advanced/#connection-security) en la sección Advanced para obtener detalles de configuración.

---

## Acceso a Dispatcharr

Abre tu navegador web y navega a:

[http://localhost:9191](http://localhost:9191/)

Reemplaza `localhost` por la dirección IP de tu servidor si accedes de forma remota.
