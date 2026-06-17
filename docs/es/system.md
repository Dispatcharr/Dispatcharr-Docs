## Usuarios
Desde la página Users puedes crear y administrar todos los usuarios de Dispatcharr. Hay 3 tipos de usuarios:

1. Admin
    * Tiene acceso total en Dispatcharr
    * El login XC solo está habilitado si se define una XC Password para el usuario
2. Standard User
    * Tiene acceso a la UI de Dispatcharr, pero solo a las páginas Channels, TV Guide y Settings
        * El acceso a la UI de Dispatcharr se concede para todos los canales
    * Puede permitir acceso a todos los Channel Profiles o restringirlo a un subconjunto
        * Las restricciones solo aplican al acceso mediante XC
    * En Settings, solo puede cambiar UI settings
    * El login XC solo está habilitado si se define una XC Password para el usuario
    * Opcionalmente puede ocultar canales marcados como "Mature Content" en user settings
    * Opcionalmente puede definir límites de streams en user settings
3. Streamer
    * No tiene acceso a la UI de Dispatcharr
    * Este nivel de usuario es solo para login XC
    * Opcionalmente puede ocultar canales marcados como "Mature Content" en user settings
    * Opcionalmente puede definir límites de streams en user settings

!!! note "Nota"
    * Los valores predeterminados de EPG de cada usuario se pueden definir en la pestaña "EPG Defaults" de ese usuario, lo que permite especificar cuántos días pasados y futuros de datos EPG se deben incluir
    * En la pestaña `API & XC` del usuario, puedes definir las siguientes opciones
        * XC Password - (dejar en blanco para no permitir acceso XC)
        * Output Format Override - Sobrescribe el formato de salida predeterminado del sistema para este usuario. Borrar para usar el valor predeterminado del sistema
        * Output Profile Override - Perfil de transcodificación previo a la entrega aplicado a streams para este usuario. Borrar para no usar transcodificación
        * Allowed IPs - Restringe todo el acceso de este usuario por IP. Dejar vacío para heredar la configuración global

## Logo Manager
Desde la página Logo Manager puedes subir y administrar logos.
!!! info "Información"
    Dispatcharr también escaneará automáticamente `/data/logos` en busca de archivos existentes

## Settings

### UI Settings
* Table Size - Define el tamaño de las filas de canales en "Channels"
* Pin Table Headers - Alterna si se mantienen visibles los encabezados de tabla al desplazarte
* Time format - Define la visualización de la hora en formato de 12 o 24 horas
* Date format - Define la visualización de fechas como Día/Mes/Año o Mes/Día/Año
* Time Zone - Define tu time zone preferida
* Web Player Output Profile - Output profile aplicado al previsualizar streams en el reproductor del navegador
* Navigation - Arrastra y suelta para reordenar los elementos de navegación de la barra lateral, o haz clic en <i data-lucide="eye" style="color: LightGray; width: 18px;"></i> para alternar la visibilidad
    * System no se puede ocultar
    * Haz clic en el botón `Reset to Default` al final de la sección Navigation para restaurar los valores predeterminados

### DVR
* Enable Comskip (remove commercials after recording) - Activa o desactiva
* Custom comskip.ini path - Ingresa una ruta personalizada o déjala en blanco para usar los valores integrados predeterminados.
* Select comskip.ini - Haz clic en este botón para seleccionar, subir y usar un comskip.ini personalizado en Dispatcharr
* Start early (minutes) - Comienza la grabación esta cantidad de minutos antes del inicio programado.
* End late (minutes) - Continúa la grabación esta cantidad de minutos después del final programado.
* TV Path Template - Soporta `{show}`, `{season}`, `{episode}`, `{sub_title}`, `{channel}`, `{year}`, `{start}`, `{end}`. Usa especificadores de formato como `{season:02d}`. Las rutas relativas están bajo el directorio de tu biblioteca.
* TV Fallback Template - Template usado cuando un episodio no tiene temporada/episodio. Soporta `{show}`, `{start}`, `{end}`, `{channel}`, `{year}`.
* Movie Path Template - Soporta `{title}`, `{year}`, `{channel}`, `{start}`, `{end}`. Las rutas relativas están bajo el directorio de tu biblioteca.
* Movie Fallback Template - Template usado cuando los metadatos de película están incompletos. Soporta `{start}`, `{end}`, `{channel}`.

!!! note "Nota"
    <span id="recording-location"></span>[<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#recording-location) Las grabaciones se guardan en la carpeta `/data/recordings` según tu configuración de templates. Es posible que quieras usar bind mounts de docker compose para guardar grabaciones en una ubicación diferente en tu host

    !!! example "Ejemplo"
        ```yaml
        volumes:
          - dispatcharr_data:/data
          - host_path/media:/data/recordings
        ```

### Stream Settings
* Default User-Agent - Define el User-Agent predeterminado
* Default Stream Profile - Define el Stream Profile predeterminado
* Default Output Format - Formato de contenedor usado al hacer proxy de streams. MPEG-TS es ampliamente compatible con reproductores multimedia y dispositivos; fMP4 tiene mejor soporte para codecs modernos como AV1 y algunos clientes nuevos lo prefieren
* HDHR Default Output Profile - Un output profile que se aplica de forma predeterminada a todas las URLs de stream HDHR (puede sobrescribirse modificando la URL de salida HDHR). Cuando se borra, los streams se sirven tal cual (pass-through)
* M3U Hash Key - Define cómo generar el hash de tu M3U. Esto afecta la limpieza de streams obsoletos.
    * La configuración predeterminada usa hash sobre URL. Las opciones disponibles incluyen:
        * Name
        * URL - Para cuentas XC, el hash del stream usa el stream_id estable en lugar de la URL al hacer hashing, lo que garantiza que los streams XC mantengan su identidad y asociaciones de canales incluso cuando cambian las credenciales de cuenta o URLs del servidor
        * TVG-ID
        * M3U ID
        * Group
    * El stream original desaparecerá de Dispatcharr según la configuración Stale Stream Retention (days) de tu cuenta M3U
    !!! note "Nota"
        Asegúrate de hacer clic en el botón `Save` después de hacer cualquier cambio en M3U Hash Key.
    !!! example "Ejemplo"
        Tu proveedor cambia regularmente los nombres de ciertos streams PPV, pero tienes canales configurados para esos streams y no quieres que se eliminen durante la limpieza de streams obsoletos. Como el proveedor cambia el nombre del stream, pero no la URL ni el TVG-ID, defines tu M3U hash key solo como `URL` y `TVG-ID`

### System settings
* Maximum System Events - Configura cuántos eventos del sistema (channel start/stop, buffering, etc.) conservar en la base de datos (mínimo: 10, máximo: 1000). Los eventos se muestran en la página Stats.
* Preferred Region - Define tu región preferida
* Auto Import Mapped Files - Activa/desactiva la importación automática de archivos M3U o datos EPG xml desde /data/epgs y/o /data/m3us

### Connection Security
Muestra el estado actual de cifrado TLS para conexiones Redis y PostgreSQL. Esta sección solo es visible en [modular deployment mode](/Dispatcharr-Docs/installation/#modular-deployment).

* **Encryption** - Si TLS está habilitado para la conexión
* **Server Verification** (Redis) / **Verification Mode** (PostgreSQL) - Si la identidad del servidor se verifica usando un CA certificate
* **Mutual TLS** - Si Dispatcharr se autentica ante el servidor usando un client certificate

!!! note "Nota"
    Connection Security es de solo lectura. TLS se configura mediante environment variables en el archivo docker compose. Consulta [Connection Security](/Dispatcharr-Docs/advanced/#connection-security) en la sección Advanced para detalles de configuración.

### User-Agents
En el contexto de IPTV, un user agent es una cadena de texto que identifica la aplicación cliente (por ejemplo, un reproductor como Kodi o VLC) ante el servidor IPTV. Se incluye en los headers HTTP de las solicitudes enviadas por el cliente al servidor, informando al servidor sobre el tipo de dispositivo y software usado para acceder al stream IPTV. Dispatcharr incluye User-Agents predeterminados para VLC, Chrome y TiviMate.

* Agrega tu propio User-Agent haciendo clic en el botón "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Add User-Agent" en la página Settings
    * Name - un nombre para tu user-agent
    * User-Agent - El texto que se incluirá para tu cadena user-agent
    * Description - (Opcional) una descripción del user-agent para tu propio uso

### Stream Profiles
| Stream Profile | [Proxy support <br>(buffer, VPN support, etc.)](/Dispatcharr-Docs/system/#proxy-settings)          | [Fallback stream<br> support](/Dispatcharr-Docs/channels/#fallback-streams)                          | [Stream stats<br> support](/Dispatcharr-Docs/stats/#stats)                                        | System resources      |
| -------------- | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-------------------: |
| ffmpeg         | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | Low                   |
| Proxy          | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | Very low              |
| Redirect       | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | Very low              |
| streamlink     | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | Low                   |
| VLC            | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | Low                   |
| Custom ffmpeg  | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | Low to Very High      |
| Custom VLC     | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | Low to Very High      |
| yt-dlp         | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | Low                   |

!!! note "Nota"
    <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> = Soporte completo
    <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i> = Soporte parcial
    <i data-lucide="square-x" style="color: red; width: 18px;"></i> = No soportado

* Hay 5 stream profiles predeterminados con la posibilidad de crear tus propios perfiles personalizados
    * ffmpeg - Dispatcharr hará proxy de streams mediante ffmpeg. No se realiza transcoding con el stream profile predeterminado de ffmpeg, solo remux de streams. Usa más recursos del sistema que proxy
    * Proxy - Hace proxy de los streams originales, lo que permite usar funciones de Dispatcharr (streams redundantes por canal) y agrega un pequeño buffer para ayudar con la estabilidad del stream. Usa menos recursos del sistema que ffmpeg.

        !!! note "Nota"
            Proxy vuelve al stream profile predeterminado de ffmpeg si el stream fuente no es mpegts

    * Redirect - Redirige la URL original del stream M3U a tu cliente. No hay proxying con este profile
    * streamlink - Para streams personalizados basados en los servicios soportados por [streamlink](https://streamlink.github.io/)
    * VLC - Dispatcharr hará proxy de streams mediante VLC. No se realiza transcoding con el stream profile predeterminado de VLC, solo remux de streams. Usa más recursos del sistema que proxy
* Custom Stream Profiles - crea tu propio stream profile personalizado haciendo clic en el botón "Add Stream Profile" en la página Settings
    * Name - un nombre para tu stream profile
    * Command - FFmpeg, Streamlink, VLC, yt-dlp, or Custom
    * Custom Command (only for Custom) - Ingresa el nombre del ejecutable (por ejemplo, ffmpeg) o la ruta completa (por ejemplo, /usr/local/bin/mycmd)
    * Parameters - Define tus parámetros personalizados de [FFmpeg](https://ffmpeg.org/ffmpeg.html), [Streamlink](https://streamlink.github.io/cli.html), [VLC](https://wiki.videolan.org/VLC_command-line_help/), o [yt-dlp](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#output-template)
    * User-Agent - Define el user-agent predeterminado para este stream profile

### Output Profiles
Los output profiles toman la salida del stream profile y transcodifican para cualquier cliente que solicite un output profile. Permiten ajustar la salida del stream mediante URL HDHR, URL M3U y/o por usuario XC. Se ejecuta un proceso de transcode por cada par activo (channel, profile) y todos los clientes solicitantes comparten el buffer de salida resultante.

!!! note "Caso de uso común"
    Un profile que convierte audio AC3 a AAC para clientes de navegador y móviles, mientras el stream nativo (AC3 intacto) sigue sirviendo a Plex/Emby/Jellyfin.

A diferencia de los stream profiles, los output profiles deben usar `pipe:0` como entrada y `pipe:1` como salida en los parámetros de ffmpeg. La salida debe estar en formato MPEG-TS (-f mpegts).

!!! example "Ejemplo"
    `-i pipe:0 -c:v libx264 -b:v 2000k -vf scale=-2:720 -c:a copy -f mpegts pipe:1`

### Network Access
Permite restringir el acceso a Dispatcharr por rango CIDR. Puedes ingresar varios rangos CIDR separados por comas. 0.0.0.0/0 permite todas las IPs
!!! example "Ejemplo"
    | CIDR Range     | Number of IPs | Range example                 |
    | -------------- | :-----------: | ----------------------------- |
    | 192.168.1.0/32 | 1             | 192.168.1.0 (single IP)       |
    | 192.168.1.0/24 | 256           | 192.168.1.0 - 192.168.1.255   |
    | 192.168.1.0/16 | 65,536        | 192.168.0.0 - 192.168.255.255 |

* M3U / EPG Endpoints - Limita el acceso a URLs M3U, EPG y HDHR (la configuración predeterminada permite acceso solo en redes locales)
* Stream Endpoints - Limita el acceso de red a URLs de stream, incluidas URLs de stream XC
* XC API - Limita el acceso a la XC API
* UI - Limita el acceso a la UI de Dispatcharr

!!! tip "Consejo"
    Para bloquear por completo el acceso a cualquiera de los anteriores, usa la dirección `127.0.0.1/32` (¡NO usar para UI!)

### Proxy Settings
Estas configuraciones afectan a todos los stream profiles excepto redirect

* Buffering Timeout - Tiempo máximo (en segundos) que se espera por buffering antes de cambiar de stream
* Buffering Speed - Umbral de velocidad por debajo del cual se detecta buffering (1.0 = velocidad normal)
* Buffer Chunk TTL - Time-to-live para chunks de buffer en segundos (cuánto tiempo se cachean datos del stream)
* Channel Shutdown Delay - Retraso en segundos antes de apagar un canal después de que el último cliente se desconecta
* Channel Initialization Grace Period - Período de gracia en segundos durante la inicialización del canal
* New Client Buffer (seconds) - Segundos de buffer recibido para iniciar detrás del live cuando se conecta un nuevo cliente (0 = empezar en live). Nota: esto es tiempo de recepción del chunk, no duración de video

### Backup & Restore
Crea, programa y restaura backups

* Schedule backups - Habilita para definir un programa regular de backups
* Advanced (Cron Expression) - Habilita para definir una expresión cron para backups programados. Las expresiones cron permiten un control más granular sobre los programas de backup.

    !!! examples
        `0 3 * * *` - Todos los días a las 3:00 AM
        `0 2 * * 0` - Todos los domingos a las 2:00 AM
        `0 */6 * * *` - Cada 6 horas
        `30 14 1 * *` - Día 1 de cada mes a las 2:30 PM

* Retention - La cantidad de backups a conservar. El backup más antiguo se eliminará cuando se cree un backup nuevo que exceda este número. Usa 0 para conservar todos los backups antiguos.

### User Limits
* Terminate on Limit Exceeded - Marca para habilitar límites de streams de usuario según los criterios siguientes
* Prioritize Single Client Channels - prefiere liberar streams en canales que solo ese usuario está viendo
* Ignore Same-Channel Connections - cuenta varias conexiones al mismo canal live como un solo stream para el límite
* Terminate Oldest - Marca para priorizar terminar el stream más antiguo cuando se exceden los límites. Si no está marcado, prioriza el más nuevo
