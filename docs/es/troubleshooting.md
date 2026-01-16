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
* Puedes usar aceleración por hardware con perfiles de transmisión (streaming) personalizados en ffmpeg. Esto requerirá [mapear tu hardware](/Dispatcharr-Docs/user-guide/#mapping-hardware) al contenedor y configurar un perfil ffmpeg personalizado [custom ffmpeg stream profile](/Dispatcharr-Docs/user-guide/#custom-stream-profiles). 

---

## Plex no muestra los Logos
* Plex no soporta logos en caché. Agrega `?cachedlogos=false` al final de la URL de tu EPG para evitar el almacenamiento en caché de logos. 

---

## ¿Cómo genero configuraciones para el XC API?
* Debe existir al menos un usuario configurado con [XC password](/Dispatcharr-Docs/user-guide/#users)
* Para la URL, usa tu IP y puerto: `http://{your_ip_here}:9191`
* El nombre de usuario es el username del usuario.
* La contraseña es la contraseña XC asignada al usuario.

---

## ¿Cómo activo los logs de debug?
* Agrega la variable de entorno (compose/environmental): `DISPATCHARR_LOG_LEVEL=debug`

---

## Recibí nuevas credenciales (o URL) de mi proveedor, ¿qué debo hacer?
1. ¡Haz una copia de seguridad!
2. Elimina el parámetro URL en Settings → Stream Settings → M3U Hash Key.
   * Agrega todas las otras opciones hash. 
3. Una vez terminado el re-hash, cambia los ajustes de tu cuenta M3U.
4. Refresca la cuenta.
5. Una vez finalizado el refresh, vuelve a configurar tus ajustes de hash.

---

## Cambié la configuración de red y me bloqueé, ¿cómo la restablezco?
1. Accede al CLI del contenedor.
2. Ve al directorio /app
3. Ejecuta el siguiente comando: `python manage.py reset_network_access`

--- 

## ¿Cómo hago una copia de seguridad de la base de datos?
Consulta [Backup & Restore](/Dispatcharr-Docs/user-guide/#backup-restore) 

--- 

## ¿Cómo puedo proteger con contraseña mi M3U para compartirlo por internet??
1. Configura tu reverse proxy como se muestra en la [documentación](/Dispatcharr-Docs/user-guide/#nginx-reverse-proxy)
2. En Dispatcharr, ve a Settings > [Network Access](/Dispatcharr-Docs/user-guide/#network-access), y restringe M3U / EPG Endpoints únicamente a tu red local (ejemplo: 192.168.1.0/24)
3. Crea un usuario con XC password en la página [Users](/Dispatcharr-Docs/user-guide/#users) si aún no lo has hecho.
4. Usa el siguiente formato de enlace M3U para compartir con tus usuarios: `https://hostname/get.php?username=XCUSERNAME&password=XCPASSWORD`
5. Y este formato para epg: `https://hostname/xmltv.php?username=XCUSERNAME&password=XCPASSWORD`

---

## ¿Por qué aparecen conexiones en la página de estadísticas de Dispatcharr cuando nadie está viendo ni conectado?
Este es un problema complejo que el equipo de Dispatcharr ha estado investigando. Sin embargo, se han identificado algunas causas posibles:

* Uso de Dispatcharr a través de un Cloudflare Tunnel. Algunos usuarios han reportado mejoras al ajustar las siguientes configuraciones de Cloudflare:
    1. Idle Connection Expiration - 10 segundos
    2. Max TCP Keepalives - 3 segundos
    3. TCP Keepalive Interval - 10 segundos
    4. En Dispatcharr, configurar [Channel Shutdown Delay](/Dispatcharr-Docs/user-guide/#proxy-settings) en 3 segundos
    
* Un bug o error en el cliente que no cierra correctamente la conexión con Dispatcharr.

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
Para usar Video-on-Demand (VOD), debes importar tu cuenta IPTV dentro de Dispatcharr utilizando el tipo de cuenta Xtream Codes y sus credenciales [account type](/Dispatcharr-Docs/user-guide/#m3u-accounts). Algunas fuentes también se refieren a esto como “API” as well.

Para usar VOD en un cliente o aplicación de terceros, también debes exportar desde Dispatcharr usando credenciales de Xtream Codes. (mira: [Cómo genero configuraciones para el XC API](/Dispatcharr-Docs/troubleshooting/#how-do-i-output-to-xc-api))