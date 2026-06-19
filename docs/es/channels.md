Desde la página de canales puedes crear y administrar todos los canales, streams y enlaces externos agregados.

## Canales
* Elige el "Channel Profile" haciendo clic en el menú desplegable debajo del encabezado Channels. El perfil predeterminado es "All"
    * Crea un nuevo Channel Profile haciendo clic en el ícono <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> junto al menú desplegable
    * Los Channel Profiles pueden usarse para crear subconjuntos de tu lista de Channels. Cada perfil tendrá su propio enlace HDHR, M3U y EPG generado. Al crear usuarios XC, puedes seleccionar a qué Channel Profiles tiene acceso cada usuario
    * Para quitar canales de un Channel Profile, haz clic en el ícono de alternancia correspondiente en la columna <i data-lucide="scan-eye" style="color: white; width: 18px;"></i> para desactivarlo
        * Para alternar en lote, usa las casillas de canales para seleccionar varios canales y luego haz clic en el ícono de alternancia
    * Para eliminar un Channel Profile, haz clic en el menú desplegable y selecciona el ícono <i data-lucide="square-minus" style="color: Red; width: 18px;"></i> junto al Channel Profile que deseas eliminar
    * Para duplicar un Channel Profile, haz clic en el menú desplegable y selecciona el ícono <i data-lucide="copy" style="color: LimeGreen; width: 18px;"></i> junto al Channel Profile que deseas duplicar. Aparecerá un diálogo para asignarle un nombre
    * Para renombrar un Channel Profile, haz clic en el menú desplegable y selecciona el ícono <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> junto al Channel Profile que deseas renombrar
* Haz clic en el ícono <i data-lucide="funnel" style="color: white; width: 18px;"></i> Filter para usar el filtrado avanzado
    * Hide/Show Disabled - Solo se puede seleccionar cuando un Channel Profile está activo. Alterna para ocultar/mostrar los canales deshabilitados para el perfil seleccionado
    * Only Empty Channels - Marca la casilla para mostrar solo canales sin streams asociados (las filas de canales se muestran con un tono rojo)
    * Has Stale Streams - Marca la casilla para mostrar solo canales con streams obsoletos (las filas de canales se muestran con un tono naranja)
    * Has Overrides - Marca la casilla para mostrar solo canales con overrides. La celda de nombre de cada fila muestra un ícono de lápiz amarillo cuando hay overrides activos (el tooltip lista los nombres de los campos sobrescritos)
    * Active Only - Marca la casilla para mostrar solo canales activos
    * Hidden Only - Marca la casilla para mostrar solo canales ocultos
    * Show All - Marca la casilla para mostrar todos los canales
* Busca nombres de canales haciendo clic en el encabezado de la columna "Name"
* Filtra por EPG haciendo clic en el encabezado de la columna "EPG"
* Busca por grupo de canal haciendo clic en el encabezado de la columna "Group"
* Edita un canal haciendo clic en el ícono correspondiente <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> "Edit Channel" en la columna "Actions"
    * Channel Name - Edita el nombre de tu canal
    * Channel # - Edita el número del canal
    * Channel Group - Edita el grupo de tu canal. Si quieres crear y agregar a un grupo nuevo, haz clic en el ícono <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i>
    * Logo - Elige un logo, sube uno nuevo o usa el logo del EPG asignado
    * TVG-ID - Edita el campo TVG-ID de tu canal. Auto-match intenta hacer coincidir la guía de episodios con este campo
    * Gracenote StationID - Edita el Gracenote ID de tu canal. Normalmente son números de 5 o 6 dígitos que Gracenote (un proveedor común de EPG) puede usar para identificar canales de TV.
    * EPG - Haz clic en el cuadro para elegir manualmente una entrada de EPG, haz clic en "Use Dummy" para asignar una entrada EPG ficticia, o haz clic en "Auto Match" para intentar una coincidencia automática de EPG
    * Stream Profile - Haz clic aquí si quieres usar algo distinto al stream profile predeterminado para este canal
    * User Level Access - Define qué tipos de usuario pueden acceder a este canal mediante la salida Xtream Codes
    * Mature Content - Alterna si un canal se debe marcar como contenido para adultos. El contenido para adultos puede ocultarse a usuarios no administradores mediante la opción "Hide Mature Content" en [configuración de usuarios](/Dispatcharr-Docs/system/#users)
    * Hidden - Alterna si se debe excluir un canal de todas las salidas (HDHR, M3U, EPG, XC) sin eliminarlo
* Elimina un canal haciendo clic en el ícono correspondiente <i data-lucide="square-minus" style="color: red; width: 18px;"></i> "Delete channel" en la columna "Actions"
* Previsualiza (reproduce) un canal haciendo clic en el ícono correspondiente <i data-lucide="circle-play" style="color: Limegreen; width: 18px;"></i> "Preview channel" en la columna "Actions"
* Activa las casillas de canales para usar los botones de edición masiva sobre la cuadrícula en los canales seleccionados, o para agregar streams a canales
    * "<i data-lucide="square-pen" style="color: white; width: 18px;"></i> Edit" para editar canales en lote <span id="bulk-editor"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#bulk-editor)
        * Channel Name - Buscar y reemplazar (compatible con regex) dentro del nombre del canal en todos los canales seleccionados
        * EPG Operations
            * Set Names from EPG - establece el nombre de canal de todos los canales seleccionados para que coincida con el nombre de canal del EPG asignado actualmente
            * Set Logos from EPG - establece el logo de todos los canales seleccionados para que coincida con el logo de canal del EPG asignado actualmente
            * Set TVG-IDs from EPG - establece el TVG-ID de todos los canales seleccionados para que coincida con el TVG-ID de canal del EPG asignado actualmente
            * Assign Dummy EPG - establece un [dummy EPG](/Dispatcharr-Docs/m3u-epg-manager/#epgs) o borra la asignación de EPG para todos los canales seleccionados
        * Channel Group - Establece el grupo de canal para todos los canales seleccionados
        * Logo - Establece el logo para todos los canales seleccionados
        * Stream Profile - Establece el stream profile para todos los canales seleccionados
        * User Level Access - Establece el nivel de acceso de usuario para todos los canales seleccionados
        * Mature Content - Establece la marca de contenido para adultos para todos los canales seleccionados
    * "<i data-lucide="square-minus" style="color: white; width: 18px;"></i> Delete" para eliminar canales en lote
    * "<i data-lucide="square-plus" style="color: white; width: 18px;"></i> Add" para agregar canales en lote. Selecciona varios Streams en la tabla "Streams" para crear un canal nuevo por cada stream seleccionado.
    * "<i data-lucide="ellipsis-vertical" style="color: white; width: 18px;"></i>" para ver opciones adicionales de edición masiva
        * "<i data-lucide="pin-off" style="color: white; width: 18px;"></i> Pin Headers" para fijar los encabezados de columna de modo que sigan visibles al desplazarte
        * "<i data-lucide="lock" style="color: white; width: 18px;"></i> Unlock for Editing" para desbloquear la tabla Channels, lo que permite editar rápidamente campos del canal (nombre, número, grupo, EPG, logo) directamente en la tabla sin abrir un modal. Esto también permite reordenar canales (y sus números de canal asociados) con arrastrar y soltar.
        * "<i data-lucide="arrow-down-0-1" style="color: white; width: 18px;"></i> Assign #s" para asignar números de canal
        * "<i data-lucide="binary" style="color: white; width: 18px;"></i> Auto-Match" para hacer coincidir canales automáticamente con EPG
            * Modo de coincidencia "Use default settings" - Recomendado para la mayoría de los usuarios. Maneja automáticamente variaciones estándar de nombres de canales
            * Modo de coincidencia "Configure advanced options: - Agrega prefijos, sufijos o cadenas personalizadas para ignorar
                * Ignore Prefixes - Se eliminan del INICIO de los nombres de canal (por ejemplo, Prime:, Sling:, US:)
                * Ignore Suffixes - Se eliminan del FINAL de los nombres de canal (por ejemplo, HD, 4K, +1)
                * Ignore Custom Strings - Se eliminan de CUALQUIER PARTE de los nombres de canal (por ejemplo, 24/7, LIVE)

                !!! note "Nota"
                    Los nombres visibles de los canales no se modifican. Estas opciones solo afectan el algoritmo de coincidencia. Para modificar nombres de canal, usa el [editor masivo](/Dispatcharr-Docs/channels/#bulk-editor)

        * "<i data-lucide="settings" style="color: white; width: 18px;"></i> Edit Groups" para abrir el Group Manager

    * Haz clic en el ícono <i data-lucide="list-plus" style="color: RoyalBlue; width: 18px;"></i> "Add to channel" en la columna Streams Actions para agregar ese stream a los canales seleccionados

* <span id="fallback-streams"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#fallback-streams) Dentro de Dispatcharr, un solo canal puede estar compuesto por múltiples streams. El sistema inicia la reproducción usando el primer stream listado en el canal. De acuerdo con los [Proxy Settings](/Dispatcharr-Docs/system/#proxy-settings) configurados, Dispatcharr monitorea si hay buffering y, si lo detecta, cambia automáticamente al siguiente stream del canal. Este proceso de monitoreo y cambio continúa hasta que se agotan todos los streams, lo que ayuda a mantener una calidad de reproducción consistente.
* Para cada stream listado dentro de un canal, Dispatcharr mostrará la fuente del stream según se define en el M3U & EPG Manager, un enlace directo al stream y una opción para previsualizar el stream <i data-lucide="eye" style="color: LightSkyBlue; width: 18px;"></i> .
    * Dispatcharr recopila estadísticas para cada stream siempre que se use un [Stream Profile](/Dispatcharr-Docs/system/#stream-profiles) compatible. Una vez capturadas, se mostrarán [stats](/Dispatcharr-Docs/stats/#stats) como resolución de video, fotogramas por segundo, formato del codificador de video, formato de audio, códec de audio y bitrate del stream. Para cada stream capturado, al hacer clic en 'Show Advanced Options' se obtiene aún más detalle sobre la calidad del stream de origen.
    
## Streams
* Crea un nuevo canal haciendo clic en el ícono correspondiente <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> "Create New Channel" en la columna "Actions"
* Agrega un stream a un canal existente haciendo clic en el botón correspondiente <i data-lucide="list-plus" style="color: RoyalBlue; width: 18px;"></i> "Add to Channel" en la columna "Actions"
* Previsualiza (reproduce) un stream haciendo clic en el ícono correspondiente <i data-lucide="ellipsis-vertical" style="color: LightSkyBlue; width: 18px;"></i> en la columna "Actions", y luego presiona "Preview Stream"
* Activa las casillas de streams para usar los botones de edición masiva sobre la cuadrícula en los streams seleccionados
    * "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Create Channels" para crear un canal nuevo por cada stream seleccionado
    * "<i data-lucide="square-minus" style="color: white; width: 18px;"></i> Delete" para eliminar los stream(s) seleccionados
* Haz clic en el ícono <i data-lucide="funnel" style="color: white; width: 18px;"></i> Filter para usar el filtrado avanzado
    * Only Unassociated - Muestra solo streams que actualmente no están asignados a ningún canal
    * Hide Stale - Oculta los streams obsoletos (no disponibles desde la última actualización de la cuenta M3U). Las filas de streams obsoletos se resaltarán con un tono rojo
* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Create Stream" - Crea un nuevo stream que no esté asociado con ninguno de tus M3U cargados
* <i data-lucide="ellipsis-vertical" style="color: White; width: 18px;"></i> (Table Settings) - Activa o desactiva columnas de la tabla Streams. Columnas disponibles:
    * Name (haz clic en el encabezado de la columna para buscar)
    * Group (haz clic en el encabezado de la columna para buscar)
    * M3U (haz clic en el encabezado de la columna para buscar)
    * TVG-ID (haz clic en el encabezado de la columna para buscar)
    * Stats (pasa el cursor para ver estadísticas adicionales)

## Enlaces
La sección "Links" tiene botones para ver y copiar los enlaces externos que necesita un cliente

* <i data-lucide="tv-minimal" style="color: YellowGreen; width: 18px;"></i> <span style="color: YellowGreen;">HDHR</span> - Usa este enlace para clientes que usan el formato HD Homerun
    * Advanced options - Estas opciones modificarán la URL generada; asegúrate de copiar la URL *después* de cambiar cualquier opción
        * Output Profile - Elige un [output profile](/Dispatcharr-Docs/system/#output-profiles) para sobrescribir el stream profile predeterminado de los clientes que acceden a streams con este enlace
* <i data-lucide="screen-share" style="color: SlateBlue; width: 18px;"></i> <span style="color: SlateBlue;">M3U</span> - Usa este enlace para clientes que usan el formato M3U
    * Advanced options - Estas opciones modificarán la URL generada; asegúrate de copiar la URL *después* de cambiar cualquier opción
        * Use cached logos - Sirve los logos de canales mediante proxy a través de Dispatcharr
        * Direct stream URLs - Omite el proxy de Dispatcharr; el cliente se conecta directamente a la fuente
        * TVG-ID Source - Valor usado como atributo tvg-id en el M3U
        * Output Format - Formato de contenedor para los streams incluidos en este M3U
        * Output Profile - Elige un [output profile](/Dispatcharr-Docs/system/#output-profiles) para sobrescribir el stream profile predeterminado de los clientes que acceden a streams con este enlace
* <i data-lucide="scroll" style="color: Gray; width: 18px;"></i> <span style="color: Gray;">EPG</span> - Usa este enlace para proporcionar a tu cliente datos de guía de episodios que coincidan con tus canales
    * Advanced options - Estas opciones modificarán la URL generada; asegúrate de copiar la URL *después* de cambiar cualquier opción
        * Use cached logos - Sirve los logos de canales mediante proxy a través de Dispatcharr
        * TVG-ID Source - Valor usado para hacer coincidir canales EPG con streams M3U
        * Days forward - Limita la EPG a esta cantidad de días futuros; 0 devuelve todos los datos disponibles
        * Days back - Incluye esta cantidad de días pasados de datos EPG (máx. 30); 0 no devuelve ninguno
