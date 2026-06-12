# Instalação

O Dispatcharr pode ser instalado usando Docker em várias plataformas, incluindo Windows, macOS, Proxmox e Unraid. Este guia fornece instruções detalhadas para cada método.

## Pré-requisitos

Certifique-se de que Docker e Docker Compose estejam instalados na sua plataforma.

- [Docker Desktop para Windows](https://docs.docker.com/docker-for-windows/install/)
- [Docker Desktop para Mac](https://docs.docker.com/docker-for-mac/install/)
- [Docker no Linux](https://docs.docker.com/engine/install/)
- [Docker no Proxmox (LXC)](https://pve.proxmox.com/wiki/Linux_Container)
- [Docker no Unraid](https://docs.unraid.net/unraid-os/manual/docker-management/)

---

## Docker Compose

O Dispatcharr é implantado usando o seguinte `docker-compose.yml`:

```yaml
--8<-- "https://raw.githubusercontent.com/Dispatcharr/Dispatcharr/refs/heads/main/docker/docker-compose.aio.yml"
```

---

## Passos de Instalação

### Windows Docker

1. Instale e abra o Docker Desktop.
2. Crie um diretório, ex.: `C:\Dispatcharr`, e dentro dele crie um `docker-compose.yml` com o conteúdo fornecido.
3. Abra uma janela do PowerShell ou Prompt de Comando neste diretório.
4. Inicie o Dispatcharr com:

    ```shell
    docker compose up -d
    ```

---

### macOS Docker

1. Instale e inicie o Docker Desktop.
2. Crie um diretório para o Dispatcharr, ex.: `~/Dispatcharr`.
3. Crie um arquivo `docker-compose.yml` com o conteúdo fornecido.
4. Abra o Terminal e navegue até o seu diretório:

    ```shell
    cd ~/Dispatcharr
    ```

5. Execute o contêiner:

    ```shell
    docker compose up -d
    ```

---

### Linux Docker

!!! warning
    Algumas distribuições usam versões desatualizadas do Docker, então é recomendado instalar diretamente do Docker

Instale o Docker usando as instruções oficiais, como as para [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

??? example "Exemplo para Ubuntu"
    1. Desinstale versões antigas.

    ```shell
    for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
    ```

    2. Configure o repositório apt do próprio Docker para versões atualizadas.

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

    3. Instale o Docker.

    ```shell
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```

1. Crie e navegue até o diretório do Dispatcharr.
    ```shell
    mkdir ~/dispatcharr && cd ~/dispatcharr
    ```

2. Adicione seu próprio `docker-compose.yml` ou use o exemplo fornecido.

3. Inicie o Dispatcharr:

    ```shell
    docker compose up -d
    ```

!!! note
    Se você deseja usar os comandos `docker compose` sem sudo, pode ser necessário seguir o guia oficial do Docker [aqui](https://docs.docker.com/engine/install/linux-postinstall/).

---
### Proxmox

1. Crie um contêiner LXC Ubuntu ou VM com Docker e Docker Compose instalados.

    ```shell
    apt install docker.io docker-compose -y
    ```

2. Crie e navegue até o diretório do Dispatcharr:

    ```shell
    mkdir ~/dispatcharr && cd ~/dispatcharr
    ```

3. Adicione seu `docker-compose.yml`.
4. Inicie o Dispatcharr:

    ```shell
    docker compose up -d
    ```

---

### Unraid

1. Selecione a aba "Apps" do seu servidor Unraid
2. Pesquise "Dispatcharr" e selecione Install
3. Mantenha os padrões a menos que precise alterá-los

---

## Implantação Modular

Por padrão, o Dispatcharr é executado no modo all-in-one (AIO) com Redis e PostgreSQL agrupados dentro de um único contêiner. A implantação modular separa estes em contêineres individuais, dando a você controle sobre versões de banco de dados, alocação de recursos e segurança de conexão.

!!! note
    A implantação modular é opcional. O modo AIO funciona para a maioria dos usuários. Considere a implantação modular se você precisa de conexões de banco de dados criptografadas com TLS, deseja usar instâncias externas existentes de Redis ou PostgreSQL, ou precisa de escalonamento independente de serviços.

### Docker Compose Modular

```yaml
--8<-- "https://raw.githubusercontent.com/Dispatcharr/Dispatcharr/refs/heads/main/docker/docker-compose.yml"
```

### Principais Diferenças do AIO

* `DISPATCHARR_ENV=modular` substitui `DISPATCHARR_ENV=aio`
* PostgreSQL e Redis são executados como contêineres separados com suas próprias verificações de saúde
* O worker Celery é executado em um contêiner dedicado com seu próprio entrypoint
* As variáveis de ambiente para PostgreSQL e Redis devem corresponder entre os serviços web e celery
* A criptografia TLS para conexões de banco de dados está disponível apenas no modo modular

### Configuração TLS

Implantações modulares suportam criptografia TLS para conexões entre o Dispatcharr e serviços externos de Redis/PostgreSQL. Consulte [Segurança de Conexão](/Dispatcharr-Docs/advanced/#connection-security) na seção Avançado para detalhes de configuração.

---

## Acessando o Dispatcharr

Abra seu navegador e acesse:

[http://localhost:9191](http://localhost:9191/)

Substitua `localhost` pelo endereço IP do seu servidor se estiver acessando remotamente.
