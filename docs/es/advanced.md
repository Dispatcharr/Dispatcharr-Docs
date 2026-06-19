## Aceleración por hardware
- Dispatcharr actualmente no admite aceleración por hardware de forma directa, pero puedes usar aceleración por hardware con custom ffmpeg stream profiles.
- Esto requiere mapear tu hardware al contenedor y configurar un custom ffmpeg stream profile.

### Mapear hardware
=== "NVIDIA"
    - Instala el [NVIDIA Container toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
    - Agrega una sección deploy a tu docker-compose.yml
	??? example "Ejemplo"
	    ```yaml
		services:
		  dispatcharr:
			# build:
			#   context: .
			#   dockerfile: Dockerfile
			image: ghcr.io/dispatcharr/dispatcharr:latest
			container_name: dispatcharr
			ports:
			  - 9191:9191
			volumes:
			  - dispatcharr_data:/data
			environment:
			  - DISPATCHARR_ENV=aio
			  - REDIS_HOST=localhost
			  - CELERY_BROKER_URL=redis://localhost:6379/0
			deploy:
			  resources:
				reservations:
				  devices:
					- driver: nvidia
					  count: all
					  capabilities: [gpu]
		volumes:
		  dispatcharr_data:
		```

=== "Intel"
    - Agrega una sección devices a tu docker-compose.yml
	??? example "Ejemplo"
	    ```yaml
		services:
		  dispatcharr:
			# build:
			#   context: .
			#   dockerfile: Dockerfile
			image: ghcr.io/dispatcharr/dispatcharr:latest
			container_name: dispatcharr
			ports:
			  - 9191:9191
			volumes:
			  - dispatcharr_data:/data
			environment:
			  - DISPATCHARR_ENV=aio
			  - REDIS_HOST=localhost
			  - CELERY_BROKER_URL=redis://localhost:6379/0
			devices:
			  - /dev/dri:/dev/dri

		volumes:
		  dispatcharr_data:
		```

=== "NVIDIA (Unraid)"
    - Instala el plugin NVIDIA Driver Package desde community apps si aún no está instalado
    - Edita el contenedor Docker de Dispatcharr en Unraid
        - Activa Advanced View
        - Ve a Extra Parameters
            - Agrega `--runtime=nvidia`
        - Baja y haz clic en "Add another Path, Port, Variable, Label or Device"
		    - Config Type: Variable
		    - Name: `NVIDIA_VISIBLE_DEVICES`
			- Key: `NVIDIA_VISIBLE_DEVICES`
			- Value: `all`
		- Haz clic en Save
		- De nuevo haz clic en "Add another Path, Port, Variable, Label or Device"
		    - Config Type: Variable
		    - Name: `NVIDIA_DRIVER_CAPABILITIES`
			- Key: `NVIDIA_DRIVER_CAPABILITIES`
			- Value: `all`
		- Haz clic en Save

=== "Intel (Unraid)"
    - Edita el contenedor Docker de Dispatcharr en Unraid
	- Baja y haz clic en "Add another Path, Port, Variable, Label or Device"
		- Config Type: Device
		- Name: `/dev/dri`
		- Key: `/dev/dri`
		- Description: `Intel GPU`
    - Haz clic en Save

### Custom Stream Profiles
- Abre Dispatcharr
- Ve a Settings > Add Stream Profile
    - Dale el nombre que prefieras
	- Command `ffmpeg`
    - Parameters variará según tu tipo de hardware y tus necesidades de streaming
	    - Consulta [ffmpeg docs](https://ffmpeg.org/ffmpeg.html) para más información
	- Visita nuestro [discord](https://discord.gg/Sp45V5BcxU) para ver más parámetros ffmpeg enviados por usuarios
	=== "NVIDIA"
	    !!! example "Ejemplo"
	        - Parameters: `-user_agent {userAgent} -hwaccel cuda -i {streamUrl} -c:v h264_nvenc -c:a copy -f mpegts pipe:1`

	=== "Intel VAAPI"
		!!! example "Ejemplo"
		    - Parameters: `-user_agent {userAgent} -hwaccel vaapi -hwaccel_output_format vaapi -hwaccel_device /dev/dri/renderD128 -i {streamUrl} -c:a aac -c:v h264_vaapi -f mpegts pipe:1`

    === "Intel QSV"
		!!! example "Ejemplo"
		    - Parameters: `-hwaccel qsv -user_agent {userAgent} -i {streamUrl} -c:v h264_qsv -c:a aac -f mpegts pipe:1`

## Configuración de prioridad de procesos
Variables de entorno opcionales para ajustar la prioridad de varias tareas. Valores más bajos = mayor prioridad. Rango: -20 (más alto) a 19 (más bajo). Los valores negativos requieren `cap_add: SYS_NICE`

- `UWSGI_NICE_LEVEL` - Define prioridad para uWSGI, FFmpeg y streaming. La prioridad predeterminada es 0; se recomienda -5 para alta prioridad
- `CELERY_NICE_LEVEL` - Define prioridad para Celery, EPG y otras tareas en background. La prioridad predeterminada es 5

!!! example "Ejemplo"
    ```yaml
        environment:
          - UWSGI_NICE_LEVEL=-5
          - CELERY_NICE_LEVEL=5

        cap_add:
          - SYS_NICE
    ```

## Reverse Proxies
### Nginx
Ejemplo de configuración HTTPS (streams solo vía https, WebUI vía red local y Wireguard)

??? example "Ejemplo (haz clic para ver)"
    ```nginx
    # Dispatcharr HTTPS DynuDNS
    server {
        listen 443 ssl;
        server_name dispatcharr.your.domain.com;  #Adjust for your domain

        ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
        
        location ~ ^(/proxy/(vod|ts)/(stream|movie|episode)/.*|/player_api\.php|/xmltv\.php|/api/channels/logos/.*/cache|/api/vod/vodlogos/.*/cache/?|/(live|movie|series)/[^/]+/.*|/[^/]+/[^/]+/[0-9]+(?:\.[^/.]+)?)$ {
            allow all;  # Allow everyone else
            proxy_pass http://dispatcharrserver:9191;  # Adjust for your server name or IP
            proxy_set_header Host $host:443;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            # CORS settings
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
            add_header 'Access-Control-Allow-Headers' 'Origin, Content-Type, Accept';
        }

        location / {
            allow 10.0.0.0/22;  # Allow the local network, adjust for your network
            allow 10.1.0.0/24;  # Allow Wireguard, adjust for your network
            deny all;  # Deny everyone else
            proxy_pass http://dispatcharrserver:9191;  # Adjust for your server name or IP
            # WebSocket headers
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "Upgrade";
            proxy_set_header Host $host:443;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            # CORS settings
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
            add_header 'Access-Control-Allow-Headers' 'Origin, Content-Type, Accept';
        }
    }  
    ```

!!! note "Consejo"
    Incluso con un reverse proxy configurado correctamente, tu salida M3U puede estar disponible por internet. Sigue estas buenas prácticas para bloquear el acceso M3U estándar y permitirlo solo con un username y password específicos.

    1. Configura tu reverse proxy como se muestra en la [documentación](/Dispatcharr-Docs/advanced/#nginx-reverse-proxy)
    2. En Dispatcharr, ve a Settings > [Network Access](/Dispatcharr-Docs/system/#network-access), y restringe M3U / EPG Endpoints únicamente a tu red local (ejemplo: 192.168.1.0/24)
    3. Crea un usuario con XC password en la página [Users](/Dispatcharr-Docs/system/#users) si aún no lo has hecho
    4. Usa el siguiente formato de enlace M3U para compartir con tus usuarios: `https://hostname/get.php?username=XCUSERNAME&password=XCPASSWORD`
    5. Y este formato para epg: `https://hostname/xmltv.php?username=XCUSERNAME&password=XCPASSWORD`

---

### Pangolin
* Crea tu recurso tal como lo harías con cualquier otro en Pangolin
* Si alojas Dispatcharr en el mismo VPS (si usas un VPS) que Pangolin, asegúrate de configurarlo como recurso local y usa 172.XX.X.X como IP, luego ingresa el puerto. De lo contrario, configúralo normalmente
* Si quieres habilitar el SSO de Pangolin para este recurso por seguridad, hazlo en la pestaña Authentication de tu nuevo recurso de Dispatcharr

Para permitir que Dispatcharr se conecte a clientes cuando está protegido detrás de Pangolin SSO u otro IdP que hayas agregado, necesitas crear Bypass Rules. Consulta abajo la lista de reglas requeridas. Una vez guardes estas reglas, la WebUI de Dispatcharr estará protegida detrás de tu SSO mientras que las apps y servicios podrán conectarse vía XC

* La "Action" será `Bypass Auth` para todas
* El "Match Type" será `Path` para todas

??? example "Reglas de bypass (haz clic para ver)"

    * ```/player_api.php/*```
    * ```/get.php/*```
    * ```/xmltv.php/*```
    * ```/*/*/*.ts```
    * ```/proxy/ts/stream/*```
    * ```/proxy/vod/episode/*```
    * ```/proxy/vod/movie/*```
    * ```/api/channels/logos/*/cache/```
    * ```/live/*/*```
    * ```/movie/*/*```
    * ```/series/*/*```

    **(Opcional para acceso por URL HDHR, M3U y/o EPG; no requerido si usas XC. Si usas HDHR, M3U o EPG, deberías restringirlo más en [Settings > Network Access > M3U / EPG Endpoints)](/Dispatcharr-Docs/system/#network-access). De lo contrario, tus enlaces HDHR, M3U y/o EPG serán accesibles públicamente por internet**

    * ```/hdhr/*```
    * ```/output/m3u/*```
    * ```/output/epg/*```

* Si quieres configurar GeoBlock para algún recurso o todos, consulta la [documentación oficial de Pangolin](https://docs.pangolin.net/self-host/advanced/enable-geoblocking) para orientación

* Prueba tu nueva configuración navegando a Dispatcharr en una ventana incógnito o privada. Ahora deberías ver el dashboard de login de Pangolin al acceder a la WebUI sin autenticarte; tus clientes, sin embargo, seguirán pudiendo conectarse para permitir streaming

---

### Nginx Proxy Manager

Sigue estos pasos para configurar acceso a Dispatcharr mediante Nginx Proxy Manager. Esta guía asume que Nginx Proxy Manager ya está configurado y tiene SSL certificates configurados. Configurar Nginx Proxy Manager y certificados queda fuera del alcance de esta guía. Puedes encontrar información de instalación en la [guía de Nginx Proxy Manager](https://nginxproxymanager.com/guide/) y en [este blog](https://medium.com/@life-is-short-so-enjoy-it/homelab-nginx-proxy-manager-setup-ssl-certificate-with-domain-name-in-cloudflare-dns-732af64ddc0b).

* Esto se creó en la versión 2.14.0 de Nginx Proxy Manager. No se han probado otras versiones
* El dominio está difuminado por privacidad. Puedes comprar un dominio o crear un dominio de uso local. Configurar un dominio queda fuera del alcance, pero hay muchas guías que lo cubren

1. Configura Nginx Proxy Manager. Consulta el enlace anterior para instrucciones

1. Crea una entrada DNS que resuelva el dominio de Dispatcharr a la IP LAN de Nginx Proxy Manager
    * Este paso depende del router que uses

    ??? info "Captura de pantalla"
        ![Add Proxy Host](../assets/nginx-proxy-manager-images/proxy_ip.png)

1. Crea un nuevo proxy host en Nginx Proxy Manager

    ??? info "Captura de pantalla"
        ![Add Proxy Host](../assets/nginx-proxy-manager-images/add_proxy_host.png)

1. Ingresa el nombre de dominio creado en el paso 2

1. Scheme: `http`

1. Forward Hostname/IP: `<IP address of Dispatcharr server>`

1. Forward port: `9191`

1. Selecciona `Websockets Support`

    ??? info "Captura de pantalla"
        ![Add Proxy Host](../assets/nginx-proxy-manager-images/proxy_data.png)

    !!! note "Nota"
        La configuración SSL personalizada agregada en el paso 14 también define Websocket support. Hemos probado con `Websocket Support` activado y desactivado y no hemos notado diferencia

1. Selecciona SSL (en la pestaña superior bajo `Edit Proxy Host`)

1. Elige tu SSL certificate

    * Crear SSL certs está fuera del alcance de esta guía. Consulta el [enlace anterior](https://nginxproxymanager.com/guide/) para la documentación de instalación de Nginx Proxy Manager

    * Se recomienda configurar wildcard SSL certs para tu dominio. Si usas Cloudflare para tu dominio, consulta [esta guía](https://blog.jverkamp.com/2023/03/27/wildcard-lets-encrypt-certificates-with-nginx-proxy-manager-and-cloudflare/) para instrucciones

1. Selecciona `Force SSL`

    ??? info "Captura de pantalla"
        ![Add Proxy Host](../assets/nginx-proxy-manager-images/ssl.png)

1. Selecciona la pestaña `Details`

1. Selecciona el ícono de engrane para configuración Nginx personalizada

    ??? info "Captura de pantalla"
        ![Add Proxy Host](../assets/nginx-proxy-manager-images/details.png)

1. Pega la configuración de ejemplo de abajo, asegurándote de cambiar los nombres de variables según sea necesario. Las variables están entre <> y en MAYÚSCULAS. Los valores a cambiar son la IP de Nginx Proxy Manager y la IP de Dispatcharr

    ??? example "Ejemplo (haz clic para ver)"
        ```nginx
        # Dispatcharr HTTPS Nginx Proxy Manager
        location ~ ^(/proxy/(vod|ts)/(stream|movie|episode)/.*|/player_api\.php|/xmltv\.php|/api/channels/logos/.*/cache|/api/vod/vodlogos/.*/cache/?|/(live|movie|series)/[^/]+/.*|/[^/]+/[^/]+/[0-9]+(?:\.[^/.]+)?)$ {
            allow all;
            proxy_pass http://<DISPATCHARR IP ADDRESS>:9191;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;

            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
            add_header 'Access-Control-Allow-Headers' 'Origin, Content-Type
        Accept';
        }

        # Restrict access.  In this instance all traffic to Dispatcharr flows through proxy.  You can add another allow block if you want to allow traffic not through the proxy.
        location / {
            allow <NPM IP ADDRESS>/32;
            deny all;

            proxy_pass http://<DISPATCHARR IP ADDRESS>:9191;

            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "Upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;

            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
            add_header 'Access-Control-Allow-Headers' 'Origin, Content-Type
        Accept';
        }
        ```

    ??? info "Captura de pantalla"
        ![Add Proxy Host](../assets/nginx-proxy-manager-images/custom_nginx_config.png)

1. Selecciona `Save`

1. Verifica el acceso visitando el nombre DNS de Dispatcharr en el navegador. Verifica que el SSL certificate sea válido.

    ??? info "Captura de pantalla"
        ![Add Proxy Host](../assets/nginx-proxy-manager-images/cert.png)

1. Inicia sesión y disfruta.

    ??? info "Captura de pantalla"
        ![Add Proxy Host](../assets/nginx-proxy-manager-images/login.png)

        ![Add Proxy Host](../assets/nginx-proxy-manager-images/done.png)

    !!! note "Nota"
        Si apuntas Pangolin a Nginx Proxy Manager como recurso, puedes acceder a Dispatcharr mediante esto en lugar de crear una nueva entrada.

---

## Connection Security

TLS cifra las conexiones entre Dispatcharr y servicios externos Redis/PostgreSQL en [modular deployments](/Dispatcharr-Docs/installation/#modular-deployment). Esto evita que credenciales y datos se envíen en texto plano por la red.

!!! note "Nota"
    Connection security solo está disponible en modular deployment mode. AIO mode usa servicios internos que no requieren cifrado.

### Overview

Se admiten tres niveles de connection security:

| Level | What it does | When to use |
| ----- | ------------ | ----------- |
| **TLS** | Cifra el tráfico entre Dispatcharr y la base de datos | Las conexiones cruzan un límite de red |
| **TLS + Server Verification** | Cifra el tráfico y verifica la identidad del servidor usando un CA certificate | Protección contra ataques man-in-the-middle |
| **Mutual TLS (mTLS)** | Ambos lados se verifican mutuamente con certificates | El servidor de base de datos requiere autenticación de cliente |

Cada nivel se basa en el anterior. Puedes habilitar cifrado sin verificación, o verificación sin mutual TLS.

### Certificate Volume Mount

Server verification y mutual TLS requieren que los archivos certificate sean accesibles dentro del contenedor. Si solo estás cifrando la conexión sin verificación, no se necesitan archivos certificate.

Monta un directorio que contenga tus certificates como volumen de solo lectura:

```yaml
volumes:
  - ./data:/data
  - ./certs:/certs:ro  # TLS certificates
```

Monta el mismo volumen en los servicios `web` y `celery`.

### Redis TLS

| Variable | Required | Description |
| -------- | :------: | ----------- |
| `REDIS_SSL` | Yes | Set to `true` to enable TLS |
| `REDIS_SSL_VERIFY` | No | Verify the server's identity (default: `true`). Set to `false` for self-signed certs without a CA |
| `REDIS_SSL_CA_CERT` | No | Path to the CA certificate used to verify the server |
| `REDIS_SSL_CERT` | No | Path to the client certificate (only if the server requires client authentication) |
| `REDIS_SSL_KEY` | No | Path to the client private key (only if the server requires client authentication) |

??? example "Redis TLS — cifrado, sin verificación"
    ```yaml
    environment:
      - REDIS_SSL=true
      - REDIS_SSL_VERIFY=false
    ```

??? example "Redis TLS — cifrado con server verification"
    ```yaml
    environment:
      - REDIS_SSL=true
      - REDIS_SSL_VERIFY=true
      - REDIS_SSL_CA_CERT=/certs/redis/ca.crt
    ```

??? example "Redis mTLS — mutual authentication"
    ```yaml
    environment:
      - REDIS_SSL=true
      - REDIS_SSL_VERIFY=true
      - REDIS_SSL_CA_CERT=/certs/redis/ca.crt
      - REDIS_SSL_CERT=/certs/redis/client.crt
      - REDIS_SSL_KEY=/certs/redis/client.key
    ```

### PostgreSQL TLS

| Variable | Required | Description |
| -------- | :------: | ----------- |
| `POSTGRES_SSL` | Yes | Set to `true` to enable TLS |
| `POSTGRES_SSL_MODE` | No | How strictly to verify the server (default: `verify-full`). Options: `verify-full`, `verify-ca`, `require` |
| `POSTGRES_SSL_CA_CERT` | No | Path to the CA certificate used to verify the server |
| `POSTGRES_SSL_CERT` | No | Path to the client certificate (only if the server requires client authentication) |
| `POSTGRES_SSL_KEY` | No | Path to the client private key (only if the server requires client authentication) |

**Modos de verificación:**

* `verify-full` — verifica el server certificate y comprueba que el hostname coincida (más seguro, predeterminado)
* `verify-ca` — verifica el server certificate pero no comprueba el hostname
* `require` — cifra la conexión pero no verifica la identidad del servidor

??? example "PostgreSQL TLS — cifrado con full verification"
    ```yaml
    environment:
      - POSTGRES_SSL=true
      - POSTGRES_SSL_MODE=verify-full
      - POSTGRES_SSL_CA_CERT=/certs/postgres/ca.crt
    ```

??? example "PostgreSQL TLS — cifrado, sin verificación"
    ```yaml
    environment:
      - POSTGRES_SSL=true
      - POSTGRES_SSL_MODE=require
    ```

??? example "PostgreSQL mTLS — mutual authentication"
    ```yaml
    environment:
      - POSTGRES_SSL=true
      - POSTGRES_SSL_MODE=verify-full
      - POSTGRES_SSL_CA_CERT=/certs/postgres/ca.crt
      - POSTGRES_SSL_CERT=/certs/postgres/client.crt
      - POSTGRES_SSL_KEY=/certs/postgres/client.key
    ```

### Important Notes

* Las environment variables de TLS deben coincidir entre los servicios `web` y `celery`
* Las rutas de certificates se refieren a rutas dentro del contenedor, no del host
* Dispatcharr valida las rutas de archivos certificate al iniciar y fallará con un mensaje de error claro si no encuentra un archivo
* Si sobrescribes `REDIS_URL` o `CELERY_BROKER_URL` con un valor personalizado, el esquema de URL (`redis://` vs `rediss://`) debe coincidir con la configuración `REDIS_SSL`. La mayoría de usuarios no necesita definir esto; Dispatcharr construye la URL automáticamente
* El panel Connection Security en [System Settings](/Dispatcharr-Docs/system/#connection-security) muestra el estado TLS actual de cada servicio
