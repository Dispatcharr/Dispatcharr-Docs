## Users
Desde la página "Users" puedes crear y administrar todos los usuarios de Dispatcharr. Existen tres tipos de usuarios:

1. Admin
    * Tiene acceso total a Dispatcharr.
    * El inicio de sesión XC está habilitado solo si se ha configurado una contraseña "XC Password" para el usuario.
2. Standard User
    * Tiene acceso a la interfaz de usuario de Dispatcharr (User Interface), pero únicamente a las páginas Channels, TV Guide y Settings.
    * Puede tener acceso a todos los perfiles de canales "Channel Profiles" o estar limitado a un subconjunto de ellos.
    * En Settings, solo puede modificar las configuraciones de la interfaz de usuario "UI settings".
    * El inicio de sesión XC está habilitado solo si se ha configurado una contraseña "XC Password" para el usuario.
3. Streamer
    * No tiene acceso a la interfaz de usuario de Dispatcharr (UI).
    * Este tipo de usuario es exclusivamente para inicio de sesión mediante XC Login.

---

## Logo Manager
Desde la página "Logo Manager" puedes subir y administrar logos.  
!!! info
    Dispatcharr también escaneará automáticamente la carpeta `/data/logos` para detectar archivos existentes.

---
    
## Settings

### UI Settings
* Table Size – Define el tamaño de las filas de canales en "Channels".
* Pin Table Headers – Activa o desactiva mantener visibles los encabezados de la tabla al desplazarse.
* Time format – Define si el tiempo se muestra en formato 12 horas o 24 horas.
* Date format – Define si las fechas se muestran en formato Día/Mes/Año o Mes/Día/Año.
* Time Zone – Establece tu zona horaria preferida.
* Navigation – Arrastra y suelta para reorganizar los elementos de navegación de la barra lateral, o haz clic en <i data-lucide="eye" style="color: LightGray; width: 18px;"></i> para activar o desactivar su visibilidad.
    * System no puede ocultarse.
    * Haz clic en el botón Reset to Default al final de la sección Navigation para restaurar la configuración predeterminada.

### DVR
* Enable Comskip (elimina los comerciales después de la grabación) – Activa o desactiva la opción.
* Custom comskip.ini path – Ingresa una ruta personalizada o déjala en blanco para usar los valores predeterminados integrados.
* Select comskip.ini – Haz clic en este botón para seleccionar, subir y utilizar un archivo comskip.ini personalizado en Dispatcharr.
* Start early (minutos) - Comienza la grabación este número de minutos antes del inicio programado.
* End late (minutos) - Continúa la grabación este número de minutos después del final programado.
* TV Path Template - Admite las variables `{show}`, `{season}`, `{episode}`, `{sub_title}`, `{channel}`, `{year}`, `{start}`, `{end}`. Usa especificaciones de formato como `{season:02d}`. Las rutas relativas están dentro del directorio de tu biblioteca.
* TV Fallback Template - Plantilla usada cuando un episodio no tiene datos de temporada o episodio. Admite `{show}`, `{start}`, `{end}`, `{channel}`, `{year}`.
* Movie Path Template - Admite `{title}`, `{year}`, `{channel}`, `{start}`, `{end}`. Las rutas relativas están dentro del directorio de tu biblioteca.
* Movie Fallback Template - Plantilla usada cuando los metadatos de la película están incompletos. Admite `{start}`, `{end}`, `{channel}`.

!!! note
    <span id="recording-location"></span><i data-lucide="link" style="color: Grey; width: 18px;"></i> Las grabaciones se guardan en la carpeta /data/recordings de acuerdo con la configuración de tus plantillas. Es posible que quieras usar bind mounts en Docker Compose para guardar las grabaciones en una ubicación diferente en tu host.

    !!! example
    ```yaml
    volumes:
      - dispatcharr_data:/data
      - host_path/media:/data/recordings
    ```

### Stream Settings
* Default User-Agent - Define el User-Agent predeterminado.
* Default Stream Profile - Define el perfil de transmisión "Stream Profile" predeterminado.
* Preferred Region - Establece tu región preferida.
* Auto Import Mapped Files - Activa o desactiva la opción de importar automáticamente archivos M3U o datos EPG XML desde las carpetas /data/epgs y/o /data/m3us.
* M3U Hash Key - Define cómo se generará el hash para tus listas M3U. Esto afecta la limpieza de transmisiones obsoletas "Stale Stream Cleanup".
    * La configuración predeterminada utiliza hash basado en la URL. Las opciones disponibles incluyen:
      *  Name
      *  URL - Para cuentas XC, el hash del stream utiliza el stream_id estable en lugar de la URL al generar el hash, lo que garantiza que los streams XC mantengan su identidad y asociaciones con canales incluso cuando cambian las credenciales de la cuenta o las URLs del servidor.
      * M3U ID
      * Group
    * El stream original desaparecerá de Dispatcharr según la configuración Stale Stream Retention (days) definida en tu cuenta M3U.
    !!! nota
        Asegúrate de hacer clic en el botón `Save` después de realizar cualquier cambio en M3U Hash Key.
    !!! ejemplo
        Tu proveedor cambia regularmente los nombres de ciertos canales PPV, pero ya tienes canales configurados para esas transmisiones y no quieres que se eliminen por el proceso de limpieza de transmisiones obsoletas. Como el proveedor cambia el nombre, pero no la URL ni el TVG-ID, puedes configurar tu M3U Hash Key para que solo use `URL` y `TVG-ID`.

### System settings
Configura cuántos eventos del sistema (inicio/detención de canales, buffering, etc.) se conservarán en la base de datos. Los eventos se muestran en la página (Stats).
* Maximum System Events - Número de eventos que se conservarán (mínimo: 10, máximo: 1000)
    
### User-Agents
En el contexto de IPTV, un user agent es una cadena de texto que identifica la aplicación cliente (por ejemplo, un reproductor como Kodi o VLC) ante el servidor IPTV. Se incluye en los encabezados HTTP de las solicitudes enviadas por el cliente al servidor, informando al servidor sobre el tipo de dispositivo y el software utilizado para acceder a la transmisión IPTV. Dispatcharr incluye User-Agents predeterminados para VLC, Chrome y TiviMate.

* Agrega tu propio User-Agent haciendo clic en el botón "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> "Add User-Agent" en la página "Settings"
    * Name - Un nombre para tu user-agent.
    * User-Agent - El texto que se incluirá en la cadena user-agent.
    * Description - (Opcional) una descripción del user-agent para tu referencia personal.

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
| yt-dlp         | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | Low   

!!! note
    <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> = Soportado  
    <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i> = Parcialmente soportado  
    <i data-lucide="square-x" style="color: red; width: 18px;"></i> = No soportado  


* Existen 5 perfiles de transmisión predeterminados, con la posibilidad de crear tus propios perfiles personalizados
    * ffmpeg - Dispatcharr usará ffmpeg para retransmitir (proxy) los streams. No se realiza transcodificación con el perfil predeterminado de ffmpeg; únicamente se remultiplexan los streams. Utiliza más recursos del sistema que el perfil proxy.
    * Proxy - Retransmite los streams originales, permitiendo aprovechar las funciones de Dispatcharr (como transmisiones redundantes por canal) y agregando un pequeño búfer para mejorar la estabilidad. Usa menos recursos del sistema que ffmpeg.

        !!! note
            El proxy vuelve al perfil de stream predeterminado de ffmpeg si el stream de origen no es mpegts.

    * Redirect - Redirige directamente la URL del stream original del archivo M3U hacia el cliente. No hay retransmisión (proxying) con este perfil.
    * streamlink - Para streams personalizados basados en los servicios compatibles con [streamlink](https://streamlink.github.io/)
    * VLC - Dispatcharr retransmitirá (proxy) los streams mediante VLC. No se realiza transcodificación con el perfil de transmisión predeterminado de VLC; únicamente se remultiplexan (remux) los streams. Utiliza más recursos del sistema que el perfil Proxy.
* Custom Stream Profiles - Crea tu propio perfil de transmisión personalizado haciendo clic en el botón "Add Stream Profile" en la página Settings.
    * Name - Un nombre para tu perfil de transmisión.
    * Command - ffmpeg o streamlink o cvlc.
    * Custom Command (solo para Custom) – Introduce el nombre del ejecutable (por ejemplo, ffmpeg) o la ruta completa (por ejemplo, /usr/local/bin/mycmd).
    * Parameters – Define tus parámetros personalizados para [ffmpeg](https://ffmpeg.org/ffmpeg.html), [streamlink](https://streamlink.github.io/cli.html), o [VLC](https://wiki.videolan.org/VLC_command-line_help/)
    * User-Agent - Define el User-Agent predeterminado para este perfil de transmisión.
    
### Network Access
Permite restringir el acceso a Dispatcharr mediante un rango CIDR. Puedes ingresar varios rangos CIDR separados por comas. El valor predeterminado 0.0.0.0/0 permite el acceso desde todas las direcciones IP.
!!! Ejemplo
    | Rango CIDR     | Número de IPs |  Ejemplo Rango                |
    | -------------- | :-----------: | ----------------------------- |
    | 192.168.1.0/32 | 1             | 192.168.1.0 (single IP)       |
    | 192.168.1.0/24 | 256           | 192.168.1.0 - 192.168.1.255   |
    | 192.168.1.0/16 | 65,536        | 192.168.0.0 - 192.168.255.255 |
    
* M3U / EPG Endpoints - Restringe el acceso a las URLs de M3U, EPG y HDHR.
* Stream Endpoints - Limita el acceso de red a las URLs de transmisión (stream URLs), incluidas las URLs de transmisión XC.
* XC API - Restringe el acceso a la API de XC.
* UI - Restringe el acceso a la interfaz de usuario (Dispatcharr UI).

!!! tip
    Para bloquear completamente el acceso a cualquiera de los anteriores, usa la dirección 127.0.0.1/32 (¡NO usar para la UI!).
    
### Proxy Settings
These settings affect all stream profiles with the exception of redirect

* Buffering Timeout - Tiempo máximo (en segundos) que se espera ante buffering antes de cambiar de stream.
* Buffering Speed - Umbral de velocidad por debajo del cual se considera que hay buffering (1.0 = velocidad normal).
* Buffer Chunk TTL - Tiempo de vida (en segundos) de los fragmentos en búfer; define cuánto tiempo se cachea la transmisión.
* Channel Shutdown Delay -Retardo (en segundos) antes de apagar un canal tras la desconexión del último cliente.
* Channel Initialization Grace Period -  Período de gracia (en segundos) durante la inicialización del canal.
* New Client Buffer (seconds) – Segundos de buffer recibido para iniciar detrás del directo cuando un nuevo cliente se conecta (0 = iniciar en vivo). Nota: esto corresponde al tiempo de recepción de los chunks, no a la duración del video.

### Backup & Restore
Crear, programar y restaurar respaldos (backups)

* Schedule backups - Actívalo para configurar un programa regular de respaldos.
* Advanced (Cron Expression) - Actívalo para definir una expresión cron para los respaldos programados. Las expresiones cron permiten un control más granular sobre la programación de los respaldos.  

    !!! ejemplos
        `0 3 * * *` - Todos los días a las 3:00 AM  
        `0 2 * * 0` - Todos los Domingos a las 2:00 AM
        `0 */6 * * *` - Cada 6 horas  
        `30 14 1 * *` - El día 1 de cada mes a las 2:30 PM  
        
* Retention - Número de respaldos que se conservarán. El respaldo más antiguo se eliminará cuando se cree uno nuevo que exceda este límite. Configura el valor en 0 para conservar todos los respaldos antiguos.