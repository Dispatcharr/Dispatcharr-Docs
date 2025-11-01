# Instalación

Dispatcharr puede instalarse en varias plataformas a través del uso de Docker, incluyendo Windows, macOS, Proxmox y Unraid.
Esta guía proporciona instrucciones detalladas para cada método.

## Requisitos

Asegúrate de que Docker y Docker Compose estén instalados en tu plataforma.

- [Docker Escritorio (Desktop) en Windows](https://docs.docker.com/docker-for-windows/install/)
- [Docker Escritorio (Deskptop) para Mac](https://docs.docker.com/docker-for-mac/install/)
- [Docker en Linux](https://docs.docker.com/engine/install/)
- [Docker en Proxmox (LXC)](https://pve.proxmox.com/wiki/Linux_Container)
- [Docker en Unraid](https://docs.unraid.net/unraid-os/manual/docker-management/)

---

## Docker Compose

Dispatcharr es distribuido utilizando el siguiente `docker-compose.yml`:

```yaml
--8<-- "https://raw.githubusercontent.com/Dispatcharr/Dispatcharr/refs/heads/main/docker/docker-compose.aio.yml"
```

---

## Pasos de Instalación

### Windows Docker

1. Instala y ejecuta Docker para Escritorio (Desktop).
2. Crea un directorio, por ejemplo: `C:\Dispatcharr`, y dentro del directorio crea un archivo con el nombre `docker-compose.yml` con el contenido proporcionado.
3. Abre una consola/ventana de PowerShell o de Comandos (CMD) en el directario creado.
4. Inicia Dispatcharr con:

    ```shell
    docker compose up -d
    ```

---

### macOS Docker

1. Instala e inicia Docker para Escritorio (Desktop)
2. Crea un directorio para Dispatcharr, por ejemplo: `~/Dispatcharr`.
3. Crea un archivo con el nombre`docker-compose.yml` y el contenido proporcionado.
4. Ejecuta una Terminal y navega al directorio creado:

    ```shell
    cd ~/Dispatcharr
    ```

5. Ejecuta del Contenedor (Container):

    ```shell
    docker compose up -d
    ```

---

### Linux Docker

!!! warning "Advertencia"
    Algunas distribuciones utilizan versiones desactualizadas de Docker, por lo que se recomienda instalarlo directamente desde Docker.

Instala Docker siguiendo las instrucciones oficiales, como las disponibles para [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

??? example "Ejemplo Ubuntu"
    1. Desinstala versiones desactualizadas.

    ```shell
    for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
    ```

    2. Configura el repositorio apt oficial de Docker para asegurarte de instalar la versión más reciente.

    ```shell
    # Agrega la clave GPG oficial de Docker:
    sudo apt-get update
    sudo apt-get install ca-certificates curl
    sudo install -m 0755 -d /etc/apt/keyrings
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    sudo chmod a+r /etc/apt/keyrings/docker.asc

    # Agrega el repositorio a las fuentes de Apt.:
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

1. Crea y navega hacia tu directorio de Dispatcharr.
    ```shell
    mkdir ~/dispatcharr && cd ~/dispatcharr
    ```

2. Agrega tu propio `docker-compose.yml` o utiliza el ejemplo proporcionado.

3. Inicia Dispatcharr:

    ```shell
    docker compose up -d
    ```

!!! nota
    Si deseas utilizar los comandos de `docker compose` sin sudo, es recomendable que sigas la guia oficial de Docker [aquí](https://docs.docker.com/engine/install/linux-postinstall/).

---
### Proxmox

1. Crea un contenedor LXC o VM con Docker y Docker Compose instalados.

    ```shell
    apt install docker.io docker-compose -y
    ```

2. Crea y navega hacia tu directorio de Dispatcharr:

    ```shell
    mkdir ~/dispatcharr && cd ~/dispatcharr
    ```

3. Agrega tu archivo `docker-compose.yml`.
4. Inicia Dispatcharr:

    ```shell
    docker compose up -d
    ```

---

### Unraid

1. Ve a la pestaña “Apps” en tu servidor Unraid.
2. Busca “Dispatcharr” y selecciona "Install".
3. Mantén los valores predeterminados, a menos que necesites modificarlos.

---

### Compilación desde el código fuente (No Soportado)

1. Clona este repositorio:
    ```bash
    git clone https://github.com/Dispatcharr/Dispatcharr.git
    cd Dispatcharr
    ```

2. Crea y activa un entorno virtual (opcional pero recomendado):
    ```bash
    python -m venv venv
    source venv/bin/activate
    ```

3. Instala las dependencias requeridas:
    ```bash
    pip install -r requirements.txt
    ```

4. Ejecuta la migración de la base de datos e inicia el servidor (Django + front-end React):

    ```bash
    python manage.py migrate
    python manage.py runserver
    ```

5. Para el front-end, navega al directorio frontend/ y ejecuta:

    ```
    npm install
    npm run build
    ```
   
6. Una vez en ejecución, visita, [http://localhost:9191](http://localhost:9191/) (o el puerto que hayas configurado) en tu navegador.

---

## Acceso a Dispatcharr

Abre tu navegador y navega a:

[http://localhost:9191](http://localhost:9191/)

Si estas accediendo de forma remota, reemplaza `localhost` por la direccion IP de tu servidor.

