---
search:
  boost: 2 # (1)!
---

# Resolución de Problemas
## El failover de transmisión (streams) no funciona
* Verifica que el Perfil "Profile" de Transmisión (stream) (tanto el predeterminado como el del canal) esté configurado en redirect. El failover de transmisión (Streams) no funcionará si está configurado en redirect.

---

## Pueden implementar X nueva función?
* Revisa las solicitudes de funciones existentes en nuestro [discord](https://discord.gg/Sp45V5BcxU) or [github](https://github.com/Dispatcharr/Dispatcharr/issues). Si no ha sido solicitada, siéntete libre de solicitarla.. 

---

## ¿Dispatcharr soporta aceleración por hardware?
* Puedes usar aceleración por hardware con perfiles de transmisión (streaming) personalizados en ffmpeg. Esto requerirá [mapear tu hardware](/Dispatcharr-Docs/advanced/#mapping-hardware) al contenedor y configurar un perfil ffmpeg personalizado [custom ffmpeg stream profile](/Dispatcharr-Docs/system/#custom-stream-profiles). 

---

## Plex no muestra los Logos
* Plex no soporta logos en caché. Agrega `?cachedlogos=false` al final de la URL de tu EPG para evitar el almacenamiento en caché de logos.
  *  Si subiste tus propios logos en Dispatcharr y quieres que Plex los muestre, solo aparecerán si se sirven a través de HTTPS, lo cual requiere tener configurado un proxy inverso[reverse proxy](/Dispatcharr-Docs/advanced/#reverse-proxies).

---

## ¿Cómo genero configuraciones para el XC API?
* Debe existir al menos un usuario configurado con [XC password](/Dispatcharr-Docs/system/#users)
* Para la URL, usa tu IP y puerto: `http://{your_ip_here}:9191`
* El nombre de usuario es el username del usuario.
* La contraseña es la contraseña XC asignada al usuario.

---

## ¿Cómo activo los logs de debug?
* Agrega la variable de entorno (compose/environmental): `DISPATCHARR_LOG_LEVEL=debug`

---

## Recibí nuevas credenciales (o URL) de mi proveedor, ¿qué debo hacer?

### Para tipos de cuenta M3U y versiones de Dispatcharr < 0.19.0:
1. ¡Haz una copia de seguridad!
2. Elimina el parámetro URL en Settings → Stream Settings → M3U Hash Key
   1. Agrega todas las otras opciones hash
   2. Guarda los cambios 
3. Una vez terminado el re-hash, cambia los ajustes de tu cuenta M3U
4. Refresca la cuenta
5. Una vez finalizado el refresh, vuelve a configurar tus ajustes de hash

### Para cuentas de tipo XC y versiones de Dispatcharr >= 0.19.0
1. Cambia la configuración de tu cuenta XC (ya sea la URL, las credenciales o ambas)
2. Guarda los cambios y actualiza 

---

## Cambié la configuración de red y me bloqueé, ¿cómo la restablezco?
1. Accede al CLI del contenedor
2. Ve al directorio /app
3. Ejecuta el siguiente comando: `python manage.py reset_network_access`

--- 

## ¿Cómo hago una copia de seguridad de la base de datos?
Consulta [Backup & Restore](/Dispatcharr-Docs/system/#backup-restore) 

--- 

## ¿Cómo puedo proteger con contraseña mi M3U para compartirlo por internet??
1. Configura tu reverse proxy como se muestra en la [documentación](/Dispatcharr-Docs/advanced/#reverse-proxy)
2. En Dispatcharr, ve a Settings > [Network Access](/Dispatcharr-Docs/system/#network-access), y restringe M3U / EPG Endpoints únicamente a tu red local (ejemplo: 192.168.1.0/24)
3. Crea un usuario con XC password en la página [Users](/Dispatcharr-Docs/system/#users) si aún no lo has hecho
4. Usa el siguiente formato de enlace M3U para compartir con tus usuarios: `https://hostname/get.php?username=XCUSERNAME&password=XCPASSWORD`
5. Y este formato para epg: `https://hostname/xmltv.php?username=XCUSERNAME&password=XCPASSWORD`

---

## ¿Por qué aparecen conexiones en la página de estadísticas de Dispatcharr cuando nadie está viendo ni conectado?
Este es un problema complejo que el equipo de Dispatcharr ha estado investigando. Sin embargo, se han identificado algunas causas posibles:

* Un bug o error en el cliente que no cierra correctamente la conexión con Dispatcharr
* Uso de Dispatcharr a través de un Cloudflare Tunnel. Algunos usuarios han reportado mejoras al ajustar las siguientes configuraciones de Cloudflare:
    1. Idle Connection Expiration - 10 segundos
    2. Max TCP Keepalives - 3 segundos
    3. TCP Keepalive Interval - 10 segundos
    4. En Dispatcharr, configurar [Channel Shutdown Delay](/Dispatcharr-Docs/system/#proxy-settings) en 3 segundos
    


Si puedes reproducir este problema de forma consistente y crees que no se debe a ninguna de las causas anteriores, por favor reprodúcelo mientras capturas [debug logs](/Dispatcharr-Docs/troubleshooting/#how-do-i-turn-on-debug-logs) y abre un issue en nuestro [Github](https://github.com/Dispatcharr/Dispatcharr) o compártelo con el equipo en nuestro canal de [Discord](https://discord.gg/Sp45V5BcxU)

---

## ¿Cómo actualizo mi contenedor (usando compose)?
1. Abre una terminal en el host.
2. Ejecuta el siguiente comando: `docker compose -f /path/to/docker-compose.yml pull`
3. Ejecuta el siguiente comando: `docker compose -f /path/to/docker-compose.yml up -d`

---

## Recibo un mensaje sobre soporte de hardware para NumPy. ¿Qué debo hacer?
Si estás usando un hipervisor basado en QEMU/KVM (como Proxmox), cambia el tipo de hardware de la VM a "Host" o "x86_v2" en lugar de "q35".

Si estás ejecutando Dispatcharr en hardware antiguo (procesadores de ~2009 o anteriores), agrega lo siguiente en la sección environment de tu docker compose:
`      - USE_LEGACY_NUMPY=true`

---

## ¿Cómo accedo a VOD??
Para usar Video-on-Demand (VOD), debes importar tu cuenta IPTV dentro de Dispatcharr utilizando el tipo de cuenta Xtream Codes y tus credenciales [account type](/Dispatcharr-Docs/m3u-epg-manager/#m3u-accounts). Algunas fuentes también se refieren a esto como “API”.

Para usar VOD en un cliente o aplicación de terceros, también debes exportar desde Dispatcharr usando credenciales de Xtream Codes. (mira: [Cómo genero configuraciones para el XC API](/Dispatcharr-Docs/troubleshooting/#how-do-i-output-to-xc-api))

Las credenciales XC de Dispatcharr pueden configurarse en la pestaña Users. Crea o edita un usuario nuevo o existente e introduce una contraseña en el campo llamado XC Password.

Si tu cliente o aplicación admite el uso de credenciales XC, te solicitará una API o URL, nombre de usuario y contraseña. Introduce la URL que utilizas para acceder a Dispatcharr (IP de la LAN:Puerto o proxy inverso), el nombre de usuario de la pestaña Users, y la XC Password creada para ese usuario.

## Multicast streams no están funcionando
Los streams multicast requieren que Dispatcharr se ejecute en modo de red host[host network mode](https://docs.docker.com/engine/network/drivers/host/) que use [macvlan](https://docs.docker.com/engine/network/drivers/macvlan/). 

Además, si hay varias interfaces de red disponibles, tendrás que especificar una interfaz usando uno de los dos métodos siguientes:

1. Agrega el argumento `-localaddr [interface-ip]` a un perfil personalizado de stream FFmpeg.
2. Añade `?localaddr=[interface-ip]` al argumento existente `-i {streamUrl}` en un perfil personalizado de stream FFmpeg.

!!! example "Examplo 1"
    `-localaddr 192.168.86.1 -i {streamUrl} -user_agent {userAgent} -i {streamUrl} -c copy -f mpegts pipe:1`

!!! example "Examplo 2"
    `-i {streamUrl}?localaddr=192.168.86.1 -user_agent {userAgent} -i {streamUrl} -c copy -f mpegts pipe:1`

## ¿Cómo elimino todo el VOD de Dispatcharr?
1. En la página de [M3U & EPG manager](/Dispatcharr-Docs/m3u-epg-manager/#m3u-epg-manager) haz clic en el ícono de editar <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> en cualquier cuenta que proporcione VOD (solo las cuentas de tipo XC pueden hacerlo).
2. Activa la opción `Enable VOD Scanning`
3. Haz clic en el botón `Groups`
4. En las pestañas `VOD - Movies` y `VOD - Series` desmarca todos los grupos
5. Haz clic en `Save and Refresh`
6. Una vez que termine la actualización, desactiva la opción `Enable VOD Scanning`
7. RRepite el proceso para otras cuentas si es necesario

## ¿Cómo creo y configuro un perfil personalizado global en Dispatcharr?

1. Dentro de la interfaz gráfica de Dispatcharr (GUI), selecciona Settings en el lado izquierdo de la pantalla
2. Sigue estos pasos:
    1. Haz clic en Streaming Profiles.
    2. Haz clic en Add Stream Profile.
    3. En la sección Name, introduce un nombre único.
    4. En la sección Command, introduce ffmpeg, streamlink o cvlc.
    5. En la sección Parameters, introduce los parámetros que desees.
    > :memo: **Nota:** Puedes encontrar perfiles de ffmpeg creados por la comunidad en la sección ⁠🔀・stream-profiles del [discord](https://discord.gg/Sp45V5BcxU) de Dispatcharr.
    6. En el campo User-Agent, déjalo en blanco.
    7. Haz clic en Submit para guardar los cambios.
3. Selecciona Stream Settings, luego usa el menú desplegable a la derecha bajo Default Stream Profile.
4. Selecciona el perfil de streaming recién creado en el paso 2.
5. Haz clic en Save.

---

## Uso de Auto Channel Sync

Se recomienda usar Auto Channel Sync para grupos de eventos donde los nombres de los canales se actualizan para mostrar el nombre del evento. Usarlo en grupos de canales regulares puede parecer una forma rápida de agregar todos tus canales, pero perderás la capacidad de personalizar el canal (nombre, logo, EPG, streams de failover, etc.), ya que en la siguiente actualización se eliminarán todos los cambios.

Si quieres agregar rápidamente todos los canales de un grupo regular, filtra por el grupo en la tabla de streams, selecciona todos y luego presiona `Create Channels` en la parte superior. 

---

## ¿Por qué las cuentas XC creadas en Dispatcharr muestran una expiración de 90 días y cómo puedo solucionarlo?
No es necesario solucionarlo ni cambiarlo. La expiración de 90 días es continua, renovándose automáticamente en cada actualización.

---

## ¿Dónde se guardan las grabaciones de DVR?
Las grabaciones se guardan en la carpeta `/data/recordings` de acuerdo con tu [template settings](/Dispatcharr-Docs/system/#dvr). Es posible que quieras usar bind mounts en Docker Compose para guardar las grabaciones en una ubicación diferente en tu host.

!!! example
    ```yaml
    volumes:
      - dispatcharr_data:/data
      - host_path/media:/data/recordings
    ```
