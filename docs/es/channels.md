## Channels
Desde la sección de Channels (Canales) puedes crear y administrar todos los canales agregados, los streams y los enlaces externos.

### Channels
* Selecciona el perfil de canales "Channel Profile" haciendo clic en el menú desplegable debajo del encabezado "Channels". El perfil predeterminado es "All".
    * Crea un nuevo perfil de canales "Channel Profile" haciendo clic en el <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> ícono que se encuentra junto al menú desplegable.
    * Los perfiles de canales "Channel Profiles" pueden usarse para crear subconjuntos dentro de tu lista de canales. Cada perfil generará su propio enlace (HDHR, M3U y EPG). Al crear usuarios "XC User", puedes seleccionar a qué perfiles "Channel Profiles" tendrá acceso cada usuario.
    * Para eliminar canales de un "Channel Profile", haz clic en el ícono de alternancia (activar/desactivar) correspondiente en la columna <i data-lucide="scan-eye" style="color: white; width: 18px;"></i> para desactivarlo.
        * Para activar o desactivar varios canales al mismo tiempo, usa las casillas de verificación (check boxes) para seleccionar varios canales y luego haz clic en el ícono de activar o desactivar (toggle icon).
    * Para eliminar un Channel Profile, haz clic en el menú desplegable y selecciona el ícono <i data-lucide="square-minus" style="color: Red; width: 18px;"></i> junto al Channel Profile que deseas eliminar.
    * Para duplicar un Channel Profile, haz clic en el menú desplegable y selecciona el ícono <i data-lucide="copy" style="color: LimeGreen; width: 18px;"></i> junto al Channel Profile que deseas duplicar. Se abrirá un cuadro de diálogo para asignarle un nombre.
    * Para renombrar un Channel Profile, haz clic en el menú desplegable y selecciona el ícono <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> junto al Channel Profile que deseas renombrar. 
* Haz clic en el ícono <i data-lucide="funnel" style="color: white; width: 18px;"></i> Filter para utilizar el filtrado avanzado.
    * Hide/Show Disabled - Disponible solo cuando un Channel Profile está activo. Actívalo para ocultar o mostrar los canales que estén deshabilitados para el perfil seleccionado.
    * Only empty channels - Marca esta opción para mostrar solo los canales que no tienen streams asociados.
* Busca nombres de canales haciendo clic en el encabezado de columna "Name".
* Filtra por la guía de programación "EPG" haciendo clic en el encabezado de columna "EPG".
* Busca por grupo de canal "Channel Group" haciendo clic en el encabezado de columna "Group".
* Edita un canal haciendo clic en el ícono correspondiente <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> "Edit Channel" que se encuentra en la columna "Actions". 
    * Channel Name - Edita el nombre de tu Canal.
    * Channel Group - Edita el grupo de tu Canal. Si deseas crear y agregarlo a un nuevo grupo, haz clic en el ícono. <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i>
    * Stream Profile - Haz clic aquí si deseas usar un perfil de transmisión diferente al predeterminado (Stream Profile) para este canal.
    * User Level Access - Define qué tipos de usuarios pueden acceder a este canal a través de Xtream Codes.
    * Logo - Elige un logo, carga uno nuevo o utiliza el logo del EPG asignado.
    * Channel # - Edita el número del Canal. Actualmente solo se aceptan valores enteros.
    * TVG-ID - Edita el campo TVG-ID de tu canal. La función de autoasignación (Auto-match) intenta vincular la guía de programación con este campo.
    * Gracenote StationID - Edita el Gracenote StationID de tu canal. Estos suelen ser números de 5 o 6 dígitos que Gracenote (un proveedor común de EPG) utiliza para identificar canales de TV.
    * EPG - Haz clic en el cuadro para seleccionar manualmente una entrada de EPG, presiona "Use Dummy" para asignar una entrada ficticia o selecciona "Auto Match" para intentar una autoasignación.
* Elimina un canal haciendo clic en el ícono correspondiente <i data-lucide="square-minus" style="color: red; width: 18px;"></i> "Delete Channel" en la columna "Actions". 
* Previsualiza (reproduce) un canal haciendo clic en el ícono correspondiente <i data-lucide="circle-play" style="color: Limegreen; width: 18px;"></i> "Preview Channel" en la columna "Actions". 
* Activa o desactiva las casillas de verificación de los canales (check boxes) para usar los botones de edición masiva ubicados encima de la cuadrícula en los canales seleccionados, o para agregar transmisiones (streams) a los canales.
    * <i data-lucide="square-pen" style="color: white; width: 18px;"></i> Haz clic en "Edit" para editar varios canales de forma masiva.
    * <i data-lucide="square-minus" style="color: white; width: 18px;"></i> Haz clic en "Delete" para eliminar varios canales al mismo tiempo.
    * <i data-lucide="square-plus" style="color: white; width: 18px;"></i> Haz clic en "Add" para agregar canales de forma masiva. Selecciona varios streams en la tabla (Streams) para crear un nuevo canal por cada stream seleccionado.
    * <i data-lucide="ellipsis-vertical" style="color: white; width: 18px;"></i>"Haz clic en el ícono para ver opciones adicionales de edición masiva.
        * <i data-lucide="arrow-down-0-1" style="color: white; width: 18px;"></i> Selecciona "Assign #s" para asignar números de canal.
        * <i data-lucide="binary" style="color: white; width: 18px;"></i> Selecciona "Auto-Match" para hacer coincidir automáticamente los canales con sus EPG.
        * <i data-lucide="settings" style="color: white; width: 18px;"></i> Selecciona "Edit Groups" para abrir el administrador de grupos "Group Manager".
        
    * Haz clic en el ícono <i data-lucide="list-plus" style="color: RoyalBlue; width: 18px;"></i> "Add to Channel" que se encuentra en la columna "Streams Actions" para agregar ese stream a los canales seleccionados.

* Dentro de Dispatcharr, un solo canal puede estar compuesto por múltiples transmisiones (streams). El sistema inicia la reproducción utilizando la primera transmisión listada en el canal. De acuerdo con la configuración del [Proxy Settings](/Dispatcharr-Docs/system/#proxy-settings), Dispatcharr monitorea si ocurre buffering y, en caso de detectarlo, cambia automáticamente a la siguiente transmisión del canal. Este proceso de monitoreo y cambio continúa hasta agotar todas las transmisiones disponibles, garantizando una calidad de reproducción constante. <span id="fallback-streams"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#fallback-streams)
* Para cada transmisión (stream) listada dentro de un canal, Dispatcharr mostrará el origen de la transmisión tal como se define en el "M3U & EPG Manager", un enlace directo a la transmisión y una opción para previsualizarla (preview stream). <i data-lucide="eye" style="color: LightSkyBlue; width: 18px;"></i> .
    * Dispatcharr recopila estadísticas para cada stream siempre que se utilice un [Stream Profile](/Dispatcharr-Docs/system/#stream-profiles) compatible. Una vez capturadas, se mostrarán las, estadísticas [stats](/Dispatcharr-Docs/stats/#stats) como la resolución de video, fotogramas por segundo, formato del codificador de video, formato de audio, códec de audio y bitrate del stream. Para cada stream capturado, al hacer clic en ‘Show Advanced Options’ se obtiene aún más detalle sobre la calidad del stream de origen.  
    
### Streams
* Busca nombres de transmisiones (streams) haciendo clic en el encabezado de columna "Name".
* Busca por grupo de M3U haciendo clic en el encabezado de columna "Group".
* Busca por nombre de M3U haciendo clic en el encabezado de columna "M3U".
* Crea un nuevo canal haciendo clic en el ícono correspondiente <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> "Create New Channel" que se encuentra en la columna "Actions". 
* Agrega una transmisión a un canal existente haciendo clic en el botón correspondiente <i data-lucide="list-plus" style="color: RoyalBlue; width: 18px;"></i> "Add to Channel" en la columna "Actions". 
* Previsualiza (reproduce) una transmisión haciendo clic en el ícono correspondiente <i data-lucide="ellipsis-vertical" style="color: LightSkyBlue; width: 18px;"></i> en la columna "Actions", luego presiona "Preview Stream".
* Activa o desactiva las casillas de verificación (check boxes) de las transmisiones para usar los botones de edición masiva ubicados encima de la cuadrícula en las transmisiones seleccionadas.
    * <i data-lucide="square-plus" style="color: White; width: 18px;"></i> Selecciona "Add Streams to Channel" para agregar las transmisiones marcadas a los canales seleccionados.
    * <i data-lucide="square-minus" style="color: white; width: 18px;"></i> Selecciona "Remove" para eliminar transmisiones (streams) de forma masiva.
    * <i data-lucide="square-plus" style="color: White; width: 18px;"></i> Selecciona "Create Channels" para crear un nuevo canal por cada transmisión seleccionada.
    !!! nota
        Por cada transmisión (stream) seleccionada, se creará un nuevo canal correspondiente. Por ejemplo, si seleccionas 3 transmisiones (streams), se crearán 3 canales nuevos.
* <i data-lucide="square-plus" style="color: White; width: 18px;"></i> Selecciona "Create Stream" para crear una nueva transmisión que no esté asociada a ninguno de tus archivos M3U cargados.

### Links
La sección "Links" contiene opciones para ver y copiar los enlaces externos que necesita un cliente.

* <i data-lucide="tv-minimal" style="color: YellowGreen; width: 18px;"></i> <span style="color: YellowGreen;">HDHR</span> - Usa este enlace para los clientes que utilizan el formato HD Homerun.
* <i data-lucide="screen-share" style="color: SlateBlue; width: 18px;"></i> <span style="color: SlateBlue;">M3U</span> - Usa este enlace para los clientes que utilizan el formato M3U.
    * Opciones Avanzadas
        1. Omite el almacenamiento en caché de logos agregando lo siguiente a tu URL `?cachedlogos=false` (Por defecto true)
        2. Define qué valor se usará para el campo TVG-ID (Opciones: channel_number (predeterminado), tvg_id, gracenote) `?tvg_id_source=gracenote`
        3. Las URLs generadas en el archivo M3U serán el enlace directo de la primera transmisión (stream) en la lista de canales `?direct=true` (Por defecto false)
        4. Puedes combinar varias opciones `?cachedlogos=false&tvg_id_source=gracenote`
* <i data-lucide="scroll" style="color: Gray; width: 18px;"></i> <span style="color: Gray;">EPG</span> - Usa este enlace para proporcionar a tu cliente los datos de guía de programación (EPG) que coinciden con tus canales.
    * Opciones Avanzadas
        1. Omite el almacenamiento en caché de logos agregando lo siguiente a tu URL (útil para Plex). `?cachedlogos=false` 
        2. Usa los Gracenote ID’s como TVG-ID’s agregando lo siguiente a tu URL (útil para Emby) `?tvg_id_source=gracenote`
        3. Define el número de días que se incluirán en la EPG. `?days=4` (Por defecto 0 = all)
        4. Combina varias opciones. `?cachedlogos=false&tvg_id_source=gracenote&days=7`