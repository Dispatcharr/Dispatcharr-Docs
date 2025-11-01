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

##¿Cómo genero configuraciones para el XC API?
* Debe existir al menos un usuario configurado con [XC password](/Dispatcharr-Docs/user-guide/#users)
* Para la URL, usa tu IP y puerto: `http://{your_ip_here}:9191`
* El nombre de usuario es el username del usuario.
* La contraseña es la contraseña XC asignada al usuario.

---

## ¿Cómo activo los logs de debug?
* Agrega la variable de entorno (compose/environmental): `DISPATCHARR_LOG_LEVEL=debug`

---

## Recibí nuevas credenciales o URL de mi proveedor, ¿qué debo hacer?
1. ¡Haz una copia de seguridad!
2. Elimina el parámetro URL en Settings → Stream Settings → M3U Hash Key.
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
1. Accede al CLI del contenedor.
2. Crea un directorio para las copias: `mkdir /data/manualbackups`
3. Ejecuta la copia de seguridad (cambia Backup-mm-dd-yy por el nombre que quieras):  
`pg_dump -h $POSTGRES_HOST -p $POSTGRES_PORT -U $POSTGRES_USER -d $POSTGRES_DB -Fc -v -f "/data/manualbackups/Backup-mm-dd-yy"`  

Para restaurar sigue estos pasos:  

1. Accede al CLI del contenedor. 
2. Ejecuta el siguiente comando:  
`pg_restore --clean -h $POSTGRES_HOST -p $POSTGRES_PORT -U $POSTGRES_USER -d $POSTGRES_DB -v "/data/manualbackups/Backup-mm-dd-yy"`  
3. Reinicia el contenedor. 
