Migración desde otras aplicaciones de gestión IPTV.

##IPTV Editor

!!! warning "Advertencia"
    Este método solo se recomienda si tienes un solo proveedor configurado en IPTV Editor.
    Si tienes varios, será más sencillo comenzar desde cero en Dispatcharr.

1. En Dispatcharr, navega a `Settings` > `Stream Settings` > `M3U Hash Key`
    * Cambia el valor a `URL` únicamente. Elimina las demás haciendo clic en la pequeña X
    * Haz clic en `Save`
2. Exporta tu playlist desde IPTV Editor como M3U
    * Playlist manager > Menu (flecha hacia abajo) > Show playlist info > Selecciona Xtream API (en la parte superior de la ventana emergente) > Copia la URL M3U mostrada.
3. En Dispatcharr, navega a `M3U & EPG Manager`
4. Haz clic en el botón verde `Add M3U` ubicado arriba a la derecha.
    * <b>Name</b>: El que prefieras (muchos usan el nombre del proveedor).
    * <b>URL</b>: La URL obtenida en el Paso 2.
    * <b>Account Type</b>: Standard.
    * Deja todo lo demás con los valores predeterminados por ahora.
5. Dale a Dispatcharr un par de minutos para importar la playlist M3U. Espera hasta que el proceso haya finalizado antes de seguir adelante.
6. Si no te importa traer los mismos nombres de grupos que usabas en IPTV Editor, salta al paso 11.
7. Navega a `Channels` en Dispatcharr.
8. Haz clic en el ícono <i data-lucide="ellipsis-vertical" style="color: white; width: 18px;"></i> (tres puntos verticales) en la parte superior derecha de la sección `Channels` (no en la sección de Streams).
9. Haz clic en <i data-lucide="settings" style="color: white; width: 18px;"></i> Edit Groups
10. Crea aquí los grupos personalizados que quieras importar desde IPTV Editor.
    * Haz clic en <i data-lucide="square-plus" style="color: skyblue; width: 18px;"></i> <span style="color: skyblue">Add Group</span>, escribe el nombre y confirma con el check verde.
11. En la tabla derecha`Streams` ordena por grupo haciendo clic en el encabezado de la columna Group. También puedes escribir en el filtro para no desplazarte por la lista.
    * Selecciona todos los streams de tu Grupo 1 y haz clic en, <i data-lucide="square-plus" style="color: white; width: 18px;"></i> Create Channels. Elige canal personalizado e inicia en Channel 1 para el primer grupo.
12. Si te saltaste al Paso 11 previamente, salta ahora al Paso 15.
13. En la sección `Channels` (la tabla ubicada a la izquierda) selecciona todos los canales que acabas de crear y haz clic en <i data-lucide="square-pen" style="color: white; width: 18px;"></i> (Edit) en la parte superior de la tabla. En el campo Channel Group, escribe el grupo personalizado que creaste en el Paso 9.    
    * Haz clic en `Submit`
14. Para cada grupo adicional que crees y/o agregues, elige un número de canal personalizado y asegúrate de que nunca se superpongan los rangos entre grupos. Por ejemplo: si tu primer grupo tiene 37 canales, no inicies el Grupo 2 en el canal 25.
    * Es recomendado separar los grupos con un margen amplio, por ejemplo: el Grupo 1 usa los canales 1–99 y el Grupo 2 usa 100–199. Asegúrate de dejarte espacio suficiente para una futura expansión.
    * Entonces, si el Grupo 1 tiene 300 canales, sé generoso y asígnale 1–499. Luego 500–999. No hay ninguna desventaja en que los números de canal sean muy altos. No los estas usando todos, solo los estás separando con fines de organización
15. Navega a `M3U & EPG Manager`    
16. Haz clic en el <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> (icono de lápiz amarillo) en tu M3U para editarlo.
17. Edita todos los campos en el cuadro de diálogo de tu Cuenta M3U para que coincidan con la configuración de tu proveedor de IPTV
    * <b>Name</b>: Lo que tú quieras. Muchas personas usan el nombre de su proveedor para mayor claridad
    * <b>URL</b>: Reemplaza la URL proveniente de IPTV Editor con la URL M3U o Xtream Codes (XC) de tu proveedor
    * <b>Account Type</b>: Puedes continuar como Standard o cambiar a Xtream Codes (VOD solo se obtiene usando Xtream Codes)
    * <b>Enable VOD Scanning</b>: Si deseas habilitar la biblioteca VOD de tu proveedor, activa esta opción
    * <b>Username/Password</b>: Reemplaza estos valores con el usuario y contraseña de tu proveedor
    * <b>Max Streams</b>: Ingresa el número máximo de streams que tu proveedor permite
        * Si tienes múltiples credenciales del mismo proveedor, puedes hacer clic en Profiles en la parte inferior de esta ventana para agregarlas
    * Completa el resto de los campos como prefieras
    * Haz clic en Save. 
18. Haz clic en el ícono <i data-lucide="refresh-ccw" style="color: royalblue; width: 18px;"></i> (actualización azul) en tu M3U. Esto puede tomar unos minutos. Espera a que se complete antes de continuar.
19. Para agregar una EPG, haz clic en <i data-lucide="square-plus" style="color: white; width: 18px;"></i> Add EPG y proporciona la URL de EPG de tu proveedor.
20. Has migrado exitosamente de IPTV Editor a Dispatcharr. Revisa [Discord](https://discord.gg/wfeqTRRJru) si necesitas soporte adicional. 