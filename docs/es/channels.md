Desde la sección de Channels (Canales) puedes crear y administrar todos los canales agregados, los streams y los enlaces externos.

## Channels
* Selecciona el “Channel Profile” haciendo clic en el menú desplegable bajo el encabezado Channels. El perfil predeterminado es “All”.
  * Crea un nuevo Channel Profile haciendo clic en el ícono <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> junto al menú desplegable.
  * Los Channel Profiles pueden utilizarse para crear subconjuntos de tu lista de canales. Cada perfil generará su propio enlace HDHR, M3U y EPG. Al crear usuarios XC, puedes seleccionar a qué Channel Profiles tendrá acceso cada usuario.
  * Para eliminar canales de un Channel Profile, haz clic en el ícono de alternar correspondiente en la columna <i data-lucide="scan-eye" style="color: white; width: 18px;"></i> para desactivarlo.
  * Para alternar varios a la vez, usa las casillas de selección de canales para elegir varios canales y luego haz clic en el ícono de alternar.
  * Para eliminar un Channel Profile, haz clic en el menú desplegable y selecciona el ícono <i data-lucide="square-minus" style="color: Red; width: 18px;"></i> junto al perfil que deseas eliminar.
  * Para duplicar un Channel Profile, haz clic en el menú desplegable y selecciona el ícono <i data-lucide="copy" style="color: LimeGreen; width: 18px;"></i> junto al perfil que deseas duplicar. Aparecerá un diálogo para asignarle un nombre.
  * Para renombrar un Channel Profile, haz clic en el menú desplegable y selecciona el ícono <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> junto al perfil que deseas renombrar.
* Haz clic en el ícono <i data-lucide="funnel" style="color: white; width: 18px;"></i> Filter para usar filtrado avanzado.
  * Hide/Show Disabled – Disponible solo cuando un Channel Profile está activo. Permite ocultar o mostrar los canales deshabilitados para el perfil seleccionado.
  * Only Empty Channels – Muestra únicamente los canales que no tienen streams asociados.
  * Has Stale Streams – Muestra únicamente los canales que tienen streams obsoletos.
* Busca nombres de canales haciendo clic en el encabezado de la columna Name.
* Filtra por EPG haciendo clic en el encabezado de la columna EPG.
* Busca por grupo de canal haciendo clic en el encabezado de la columna Group.
* Edita un canal haciendo clic en el ícono <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> “Edit Channel” en la columna Actions.
  * Channel Name – Edita el nombre del canal.
  * Channel Group – Edita el grupo del canal. Si deseas crear un grupo nuevo, haz clic en el ícono <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i>.
  * Stream Profile – Selecciona un perfil de streaming diferente al perfil predeterminado para este canal.
  * User Level Access – Define qué tipos de usuario pueden acceder al canal mediante la salida Xtream Codes.
  * Logo – Elige un logo, sube uno nuevo o usa el logo del EPG asignado.
  * Mature Content – Activa o desactiva si el canal debe marcarse como contenido para adultos. Puede ocultarse para usuarios no administradores mediante la opción Hide Mature Content en la configuración de usuarios.
  * Channel # – Edita el número del canal. Actualmente solo se aceptan enteros.
  * TVG-ID – Edita el campo TVG-ID del canal. La función Auto-match intenta mapear el EPG con este campo.
  * Gracenote StationID – Edita el ID de Gracenote del canal (normalmente números de 5 o 6 dígitos usados por el proveedor de EPG).
  * EPG – Selecciona manualmente una entrada de EPG, haz clic en Use Dummy para asignar un EPG ficticio, o haz clic en Auto Match para intentar una coincidencia automática.
* Elimina un canal haciendo clic en el ícono <i data-lucide="square-minus" style="color: red; width: 18px;"></i> “Delete channel” en la columna Actions.
* Previsualiza (reproduce) un canal haciendo clic en el ícono <i data-lucide="circle-play" style="color: Limegreen; width: 18px;"></i> “Preview channel” en la columna Actions.
* Usa las casillas de selección de canales para aplicar acciones masivas o para agregar streams a canales.
  * "<i data-lucide="square-pen" style="color: white; width: 18px;"></i> Edit" – Edición masiva de canales. <span id="bulk-editor"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#bulk-editor)

  * Channel Name – Buscar y reemplazar (compatible con regex) dentro del nombre del canal en todos los canales seleccionados.
  * EPG Operations
      * Set Names from EPG – Establece el nombre del canal según el nombre del canal del EPG asignado.
      * Set Logos from EPG – Establece el logo según el logo del EPG asignado.
      * Set TVG-IDs from EPG – Establece el TVG-ID según el TVG-ID del EPG asignado.
      * Assign Dummy EPG – Asigna un dummy EPG o elimina la asignación de EPG para los canales seleccionados.*

  * Channel Group – Establece el grupo para los canales seleccionados.
  * Logo – Establece el logo para los canales seleccionados.
  * Stream Profile – Establece el perfil de streaming para los canales seleccionados.
  * User Level Access – Establece el nivel de acceso para los canales seleccionados.
  * Mature Content – Establece la marca de contenido para adultos para los canales seleccionados.
"<i data-lucide="square-minus" style="color: white; width: 18px;"></i> Delete" – Elimina múltiples canales.
"<i data-lucide="square-plus" style="color: white; width: 18px;"></i> Add" – Agrega canales en masa creando un nuevo canal por cada stream seleccionado en la tabla Streams.
Opciones adicionales de edición masiva
  * "<i data-lucide="pin-off" style="color: white; width: 18px;"></i> Pin Headers" – Fija los encabezados de columna para que permanezcan visibles al desplazarse.
  * "<i data-lucide="lock" style="color: white; width: 18px;"></i> Unlock for Editing" – Desbloquea la tabla Channels, permitiendo editar campos directamente en la tabla (nombre, número, grupo, EPG, logo) sin abrir una ventana modal. También permite reordenar canales mediante arrastrar y soltar.
  * "<i data-lucide="arrow-down-0-1" style="color: white; width: 18px;"></i> Assign #s" – Asigna números de canal automáticamente.
  * "<i data-lucide="binary" style="color: white; width: 18px;"></i> Auto-Match" – Mapea automáticamente los canales con el EPG.

  * Modos de mapeo "Use default settings" – Recomendado para la mayoría de los usuarios; maneja variaciones comunes de nombres de canales automáticamente.
  * Configure advanced options – Permite añadir prefijos, sufijos o cadenas personalizadas a ignorar.
    * Ignore Prefixes – Eliminados del inicio del nombre del canal (ej. Prime:, Sling:, US:).
    * Ignore Suffixes – Eliminados del final del nombre del canal (ej. HD, 4K, +1).
    * Ignore Custom Strings – Eliminados en cualquier parte del nombre del canal (ej. 24/7, LIVE).

    !!! Nota:
        Los nombres visibles de los canales no se modifican. Estas opciones solo afectan el algoritmo de coincidencia. Para modificar nombres de canales, utiliza el editor masivo [bulk editor](/Dispatcharr-Docs/channels/#bulk-editor)

   * "<i data-lucide="settings" style="color: white; width: 18px;"></i> Edit Groups" – Abre el Group Manager.
  * Haz clic en el ícono <i data-lucide="list-plus" style="color: RoyalBlue; width: 18px;"></i> "Add to Channel" que se encuentra en la columna "Streams Actions" para agregar ese stream a los canales seleccionados.

* Dentro de Dispatcharr, un solo canal puede estar compuesto por múltiples transmisiones (streams). El sistema inicia la reproducción utilizando la primera transmisión listada en el canal. De acuerdo con la configuración del [Proxy Settings](/Dispatcharr-Docs/system/#proxy-settings), Dispatcharr monitorea si ocurre buffering y, en caso de detectarlo, cambia automáticamente a la siguiente transmisión del canal. Este proceso de monitoreo y cambio continúa hasta agotar todas las transmisiones disponibles, garantizando una calidad de reproducción constante. <span id="fallback-streams"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#fallback-streams)
* Para cada Stream listado dentro de un canal, Dispatcharr mostrará el origen de la transmisión tal como se define en el "M3U & EPG Manager", un enlace directo a la transmisión y una opción para previsualizarla (preview stream). <i data-lucide="eye" style="color: LightSkyBlue; width: 18px;"></i> .
    * Dispatcharr recopila estadísticas para cada stream siempre que se utilice un [Stream Profile](/Dispatcharr-Docs/system/#stream-profiles) compatible. Una vez capturadas, se mostrarán las, estadísticas [stats](/Dispatcharr-Docs/stats/#stats) como la resolución de video, fotogramas por segundo, formato del codificador de video, formato de audio, códec de audio y bitrate del stream. Para cada stream capturado, al hacer clic en ‘Show Advanced Options’ se obtiene aún más detalle sobre la calidad del stream de origen.  
    
## Streams
* Crea un nuevo canal haciendo clic en el ícono correspondiente <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> "Create New Channel" en la columna "Actions". 
* Crea un nuevo canal haciendo clic en el ícono correspondiente <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> "Create New Channel" que se encuentra en la columna "Actions". 
* Agrega un Stream a un canal existente haciendo clic en el botón correspondiente <i data-lucide="list-plus" style="color: RoyalBlue; width: 18px;"></i> "Add to Channel" en la columna "Actions". 
* Previsualiza (play) un Stream haciendo clic en el ícono correspondiente <i data-lucide="ellipsis-vertical" style="color: LightSkyBlue; width: 18px;"></i> en la columna "Actions", luego presiona "Preview Stream".
* Activa o desactiva las casillas de verificación (check boxes) de las transmisiones para usar los botones de edición masiva ubicados encima de la cuadrícula en las transmisiones seleccionadas.
  * "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Create Channels" para crear un nuevo canal para cada stream seleccionado.
  * "<i data-lucide="square-minus" style="color: white; width: 18px;"></i> Delete" para eliminar el/los stream(s) seleccionados.
  * Haz clic en el ícono <i data-lucide="funnel" style="color: white; width: 18px;"></i> Filter para usar filtrado avanzado.
  * Only Unassociated – Muestra únicamente los streams que actualmente no están asignados a ningún canal.
  * Hide Stale – Oculta cualquier stream que esté desactualizado (no disponible según la última actualización de la cuenta M3U).
* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Create Stream" – Crea un nuevo stream que no esté asociado con ninguno de tus M3U cargados.
* <i data-lucide="ellipsis-vertical" style="color: White; width: 18px;"></i> (Table Settings) – Activa o desactiva las columnas de la tabla Streams. Columnas disponibles:
  * Name (haz clic en el encabezado de la columna para buscar)
  * Group (haz clic en el encabezado de la columna para buscar)
  * M3U (haz clic en el encabezado de la columna para buscar)
  * TVG-ID (haz clic en el encabezado de la columna para buscar)
  * Stats (pasa el cursor para ver estadísticas adicionales)    

## Links
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
