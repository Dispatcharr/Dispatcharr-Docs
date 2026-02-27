## Hardware Acceleration 
- Dispatcharr actualmente no admite aceleración por hardware de forma directa, pero puedes habilitarla utilizando perfiles de transmisión personalizados con ffmpeg.
- Esto requiere mapear tu hardware al contenedor y configurar un perfil personalizado de ffmpeg para aprovechar la aceleración. 

### Mapping Hardware
=== "NVIDIA"
    - Instala el [NVIDIA Container toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
    - Agrega una sección deploy a tu docker-compose.yml
	??? Ejemplo
	    ```
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
    - Agrega una sección "devices" a tu archivo docker-compose.yml
	??? Ejemplo
	    ```
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
    - Instala el plugin NVIDIA Driver Package desde Community Apps (si aún no lo tienes).
    - Edita el contenedor de Dispatcharr en Unraid:
        - Activa Advanced View
        - En Extra Parameters
            - Agrega `--runtime=nvidia`
        - Haz clic en "Add another Path, Port, Variable, Label or Device"
		    - Config Type: Variable
		    - Name: `NVIDIA_VISIBLE_DEVICES`
			- Key: `NVIDIA_VISIBLE_DEVICES`
			- Value: `all`
		- Clic Save
		- De nuevo en "Add another Path, Port, Variable, Label or Device"
		    - Config Type: Variable
		    - Name: `NVIDIA_DRIVER_CAPABILITIES`
			- Key: `NVIDIA_DRIVER_CAPABILITIES`
			- Value: `all`
		- Clic Save

=== "Intel (Unraid)"
    - Edita el contenedor de Dispatcharr en Unraid.
	- Desplazate hacia abajo y haz clic en "Add another Path, Port, Variable, Label or Device"
		- Config Type: Device
		- Name: `/dev/dri`
		- Key: `/dev/dri`
		- Description: `Intel GPU`
    - Clic Save
	
### Custom Stream Profiles
- Abre Dispatcharr.
- Ve a Settings > Add Stream Profile.
    - Nombralo con el nombre que prefieras
	- Command (Comando) `ffmpeg`
    - Parameters (Parámetros) varían según tu hardware y necesidades de streaming.
	    - Revisa [ffmpeg docs](https://ffmpeg.org/ffmpeg.html) para más información.
	- Visita nuestro [discord](https://discord.gg/Sp45V5BcxU) para ver parámetros de ffmpeg aportados por la comunidad.
	=== "NVIDIA"
	    !!! Ejemplo
	        - Parameters: `-user_agent {userAgent} -hwaccel cuda -i {streamUrl} -c:v h264_nvenc -c:a copy -f mpegts pipe:1`
	
	=== "Intel VAAPI"
		!!! Ejemplo
		    - Parameters: `-user_agent {userAgent} -hwaccel vaapi -hwaccel_output_format vaapi -hwaccel_device /dev/dri/renderD128 -i {streamUrl} -c:a aac -c:v h264_vaapi -f mpegts pipe:1`
		
    === "Intel QSV"
		!!! Ejemplo
		    - Parameters: `-hwaccel qsv -user_agent {userAgent} -i {streamUrl} -c:v h264_qsv -c:a aac -f mpegts pipe:1`

## Process Priority Configuration
Variables de entorno opcionales para ajustar la prioridad de tareas. Valores más bajos = mayor prioridad. Rango: -20 (máxima) a 19 (mínima). Los valores negativos requieren `cap_add: SYS_NICE`  

- `UWSGI_NICE_LEVEL` - Prioridad para uWSGI, FFmpeg y streaming. Predeterminado 0; recomendado -5 para alta prioridad. 
- `CELERY_NICE_LEVEL` - Prioridad para Celery, EPG y otras tareas en segundo plano. Predeterminado 5.

!!! Ejemplo
    ```yaml
        environment:
          - UWSGI_NICE_LEVEL=-5
          - CELERY_NICE_LEVEL=5

        cap_add:
          - SYS_NICE
    ```
 
## Nginx reverse proxy
Ejemplo de configuración HTTPS (solo streams vía HTTPS, WebUI a través de la red local y Wireguard)

??? example "Example (click to see)"
    ```nginx
    # Dispatcharr HTTPS DynuDNS
    server {
        listen 443 ssl;
        server_name dispatcharr.your.domain.com;  #Adjust for your domain

        ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
        
        location ~ ^(/proxy/(vod|ts)/(stream|movie|episode)|/player_api.php|/xmltv.php|/api/channels/logos/.*/cache|/(live|movie|series)/[^/]+/.*) { 
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

!!! nota "Tip"
    Incluso con un reverse proxy configurado correctamente, la salida M3U estará disponible por defecto a través de internet. Sigue estas buenas prácticas para bloquear el acceso M3U estándar y permitirlo únicamente mediante un usuario y contraseña específicos.
	
    1. Configura tu reverse proxy como se muestra en la [documentación](/Dispatcharr-Docs/advanced/#nginx-reverse-proxy)
    2. En Dispatcharr, ve a > [Network Access](/Dispatcharr-Docs/system/#network-access), y restringe M3U / EPG Endpoints únicamente a tu red local (ejemplo: `192.168.1.0/24`)
    3. Crea un usuario con XC password en la página[Users](/Dispatcharr-Docs/system/#users) si aún no lo has hecho 
    4. Usa el siguiente formato de enlace M3U para compartir con tus usuarios: `https://hostname/get.php?username=XCUSERNAME&password=XCPASSWORD`
    5. Y este formato para EPG: `https://hostname/xmltv.php?username=XCUSERNAME&password=XCPASSWORD`