# Guía de Usuario

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

* Dentro de Dispatcharr, un solo canal puede estar compuesto por múltiples transmisiones (streams). El sistema inicia la reproducción utilizando la primera transmisión listada en el canal. De acuerdo con la configuración del [Proxy Settings](/Dispatcharr-Docs/user-guide/#proxy-settings), Dispatcharr monitorea si ocurre buffering y, en caso de detectarlo, cambia automáticamente a la siguiente transmisión del canal. Este proceso de monitoreo y cambio continúa hasta agotar todas las transmisiones disponibles, garantizando una calidad de reproducción constante. <span id="fallback-streams"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#fallback-streams)
* Para cada transmisión (stream) listada dentro de un canal, Dispatcharr mostrará el origen de la transmisión tal como se define en el "M3U & EPG Manager", un enlace directo a la transmisión y una opción para previsualizarla (preview stream). <i data-lucide="eye" style="color: LightSkyBlue; width: 18px;"></i> .
    * Dispatcharr recopila estadísticas para cada stream siempre que se utilice un [Stream Profile](/Dispatcharr-Docs/user-guide/#stream-profiles) compatible. Una vez capturadas, se mostrarán las, estadísticas [stats](/Dispatcharr-Docs/user-guide/#stats) como la resolución de video, fotogramas por segundo, formato del codificador de video, formato de audio, códec de audio y bitrate del stream. Para cada stream capturado, al hacer clic en ‘Show Advanced Options’ se obtiene aún más detalle sobre la calidad del stream de origen.  
    
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

---

## VODs
Visualiza, busca y reproduce contenido VOD si está disponible desde tu proveedor.
!!! nota
    Para ver contenido VOD, debes haber agregado al menos un grupo “VOD - Movies” o “VOD - Series” en el administrador de cuentas "M3U Account Manager".

---

## M3U & EPG Manager
Desde esta sección puedes agregar y administrar tus cuentas M3U y tus EPGs.
### M3U accounts 
* <i data-lucide="square-plus" style="color: White; width: 18px;"></i> "Add" - Haz clic en el botón para agregar nuevas cuentas M3U.
    * Name - Un nombre para tu cuenta M3U.
	* URL - La URL M3U (no es obligatorio si estás subiendo un archivo M3U).
	* Account Type - Selecciona "Standard" para URLs M3U directas o "Xtream Codes" para servicios basados en panel.
    * Enable VOD Scanning - Activa o desactiva el escaneo de contenido VOD (solo disponible con el tipo de cuenta Xtream Codes).
	* Upload files - Si estás subiendo un archivo M3U local (no requerido si se usa una URL M3U).
	* Max Streams - Establece un número máximo de transmisiones simultáneas permitidas para tu cuenta. Para ilimitadas, configura el valor en 0.
	* User-Agent - Si deseas definir un User-Agent específico para esta cuenta.
	* Refresh Interval (hours) - Define cada cuántas horas se actualizará la URL M3U.
	* Stale Stream Retention (days) - Las transmisiones (streams) y grupos que no se detecten durante esta cantidad de días serán eliminadas. Para eliminarlas de inmediato, configura el valor en 0.
	* VOD Priority - Define la prioridad del proveedor VOD (números más altos = mayor prioridad). Se usa cuando varios proveedores ofrecen el mismo contenido.
    * Is Active - Activa o desactiva la cuenta M3U.
	!!! nota
	    Los archivos M3U pueden agregarse automáticamente a Dispatcharr colocando los archivos M3U dentro de la carpeta `/data/m3us`, siempre que la opción `Auto-Import Mapped Files` esté habilitada en Settings > Stream Settings.
* Puedes hacer clic en los encabezados de columna para cambiar el orden de clasificación de las cuentas M3U existentes.
* Actions column
    * <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> edit icon (ícono de edición) para editar la cuenta M3U asociada.
        * Botón "Filters" - Abre el administrador de filtros "Filters Manager".
            * Haz clic en "New" para agregar filtros. Los filtros se procesan en orden y, una vez que uno coincide, no se evalúan más reglas. Puedes cambiar el orden de los filtros usando el ancla de arrastrar y soltar a la izquierda de la regla, y editarlos o eliminarlos usando los íconos a la derecha.
                * Field: Selecciona el atributo de transmisión (stream attribute) que deseas filtrar: Group, Stream Name o Stream URL.
                * Regex Pattern: Ingresa una expresión regular válida (regular expression) para hacer coincidir el campo "Field".
                * Exclude: Activa o desactiva la opción para incluir o excluir resultados según la expresión regular.
                * Case Sensitive: Activa o desactiva la sensibilidad a mayúsculas y minúsculas para la expresión regular.
            * Selecciona "Save" para agregar el filtro recién creado. 
            * Agrega filtros adicionales para refinar los valores del campo seleccionado según sea necesario.
	    * Botón "Groups" - Abre el administrador de grupos "Group Manager".
            * Automatically enable new groups discovered on future scans - Cuando está desactivado, los nuevos grupos detectados desde la fuente M3U se crearán pero quedarán deshabilitados por defecto. Puedes habilitarlos manualmente más tarde.
		    * Filtra los grupos visibles con la barra de búsqueda en la parte superior del administrador de grupos "Group Manager".
			* Ignora transmisiones (streams) de ciertos grupos deseleccionándolos.
			* Auto Channel Sync (solo para Live Groups): Cuando está habilitado, los canales se crearán automáticamente para todas las transmisiones (streams) del grupo durante las actualizaciones de M3U, y se eliminarán cuando ya no estén presentes. 
			    * Start Channel #: Establece un número de canal inicial para cada grupo a fin de organizar tus canales.
			    * Advanced Options (Opciones Avanzadas):
				    * Force Dummy EPG: Asigna un EPG ficticio al canal que coincida con el nombre del canal.
					* Override Channel Group: Define un grupo de canal diferente al seleccionado originalmente.
					* Channel Name Find & Replace (Regex): Busca y reemplaza para renombrar tus canales. Por defecto, el nombre del canal coincide con el del stream.
					* Channel Name Filter (Regex): Solo crea canales a partir de transmisiones (streams) que cumplan con los criterios del filtro.
					* Channel Profile Assignment: Te permite elegir en qué perfil(es) incluir los canales creados (por defecto All).
					* Channel Sort Order: Define el orden de clasificación de los canales creados (por defecto, el orden del proveedor).
                    * Stream Profile Assignment: Permite cambiar el perfil de transmisión para los canales creados respecto al predeterminado.
					
		* Botón "Profiles" - Permite agregar un segundo conjunto de credenciales para el mismo proveedor. <span id="m3u-profiles"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#m3u-profiles)
        !!! info
            Por ejemplo, supongamos que tienes tres cuentas que deseas agregar a Dispatcharr: dos de Provider-A y una de Provider-B. En lugar de agregar tres cuentas M3U por separado, puedes agregar Provider-A una sola vez y configurar un perfil "Profile" para usar el nombre de usuario y la contraseña de cada cuenta de Provider-A dentro de la misma cuenta M3U.   
	        1. Configura Provider-A como una cuenta M3U (Standard o Xtream Codes) en el administrador "M3U & EPG Manager".   
	        2. Haz clic en el ícono de edición amarillo correspondiente en la columna "Actions".    
	        3. Haz clic en el botón "Profiles".       
			4. Haz clic en el botón "New".    
			5. Los campos "Search Pattern (Regex)" y "Replace Pattern" funcionarán como una búsqueda y reemplazo dentro de tu archivo M3U.  
			!!! ejemplo
			    | Ejemplo URL | Search Pattern | Replace Pattern |
				| --- | --- | --- |
				| `http://provider.com/live/username1/password1/stream` | `username1/password1` | `username2/password2` |
			
	* <i data-lucide="square-minus" style="color: red; width: 18px;"></i> ícono de eliminación "delete icon" para eliminar la cuenta M3U asociada.
	* <i data-lucide="refresh-cw" style="color: RoyalBlue; width: 18px;"></i> Ícono de actualización "refresh icon" para actualizar o sincronizar manualmente la cuenta M3U asociada.
	
### EPGs
* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Add EPG" - Haz clic en esta opción para agregar una nueva fuente EPG.
    * Standard EPG Source - Para agregar una fuente estándar XMLTV EPG.
        * Name - Un nombre para tu EPG.
        * URL - La URL de tu EPG.
        * Source Type - Elige XMLTV o "Schedules Direct" dependiendo del formato que use tu proveedor de EPG.
        * API Key - Clave API asociada a tu EPG, si es requerida.
        * Refresh Interval (hours) - Define cada cuántas horas se actualizará la EPG.
        * Priority - Prioridad para mapeo de EPG (números altos = mayor prioridad).
		Se utiliza cuando múltiples EPG contienen las mismas entradas para un canal. 
        !!! nota
            Las EPG pueden agregarse automáticamente a Dispatcharr colocando los archivos EPG dentro de la carpeta `/data/epgs`, siempre que la opción `Auto-Import Mapped Files` esté habilitada en Settings > Stream Settings.
    * Dummy EPG Source - Para agregar una EPG personalizada "Dummy EPG"          
        * Name - Un nombre para tu EPG personalizada.
        * Name Source (Requerida) - Elige si se debe analizar el nombre del canal o el nombre de la transmisión (stream) asignada al canal.
        * Title Pattern (Requerida) - Patrón Regex para extraer la información del título (por ejemplo: nombres de equipos, liga). Ejemplo: `(?<league>\w+) \d+: (?<team1>.*) VS (?<team2>.*)`
        * Time Pattern (Opcional) - Extrae la hora desde los títulos de los canales. Grupos requeridos: 'hour' (1-12 o 0-23), 'minute' (0-59), 'ampm' (AM/PM - opcional para 24-hour). Ejemplos: `@ (?<hour>\d+):(?<minute>\d+)(?<ampm>AM|PM) for '8:30PM'` o `@ (?<hour>\d{1,2}):(?<minute>\d{2}) for '20:30'`
        * Date Pattern (Opcional) - Extrae la fecha desde los títulos de los canales. Grupos: 'month' (nombre o número), 'day', 'year' (opcional, por defecto, año actual). Ejemplos: `@ (?<month>\w+) (?<day>\d+)` para 'Oct 17' o `(?<month>\d+)/(?<day>\d+)/(?<year>\d+)` pora '10/17/2025'
        * Title Template (Opcional) - Da formato al título del programa usando los grupos extraídos. Usa {time} (12-hour: '10 PM') o {time24} (24-hour: '22:00'). Ejemplo: `{league} - {team1} vs {team2} @ {time}`
        * Description Template (Opcional) - Da formato a la descripción del programa usando los grupos extraídos. Usa {time} (12-hour) o {time24} (24-hour). Ejemplo: `Watch {team1} take on {team2} at {time}!`
        * Upcoming Title Template (Opcional) - Título para los programas antes del inicio del evento. Usa {time} (12-hour) o {time24} (24-hour). Ejemplo: `{team1} vs {team2} starting at {time}.`
        * Upcoming Description Template (Opcional) - Descripción para los programas previos al evento. Usa {time} (12-hour) o {time24} (24-hour). Ejemplo: `Upcoming: Watch the {league} match up where the {team1} take on the {team2} at {time}!`
        * Ended Title Template (Opcional) - Título para los programas después de que el evento ha terminado. Usa {time} (12-hour) o {time24} (24-hour). Ejemplo: `{team1} vs {team2} started at {time}.`
        * Ended Description Template (Opcional) - Descripción para los programas posteriores al evento. Usa {time} (12-hour) o {time24} (24-hour). Ejemplo: `The {league} match between {team1} and {team2} started at {time}.`
        * Event Timezone (Requerida) - Zona horaria del evento en los títulos de los canales. El horario de verano (DST) se gestiona automáticamente. Todas las zonas horarias compatibles con pytz están disponibles.
        * Output Timezone (Opcional) - Permite mostrar las horas en una zona horaria diferente a la del evento. Déjalo en blanco para usar la zona horaria del evento. Ejemplo: Evento a las 10 PM ET mostrado como 9 PM CT.
        * Program Duration (minutos) (requerido) - Duración predeterminada de cada programa.
        * Categories (Opcional) - Categorías EPG para estos programas. Separa múltiples categorías con comas (por ejemplo: Sports, Live, HD). Nota: Solo se agregan al evento principal, no a los programas de relleno previos o posteriores..
        * Include Date Tag - Incluye la etiqueta <date> en la salida del EPG con la fecha de inicio del programa (formato YYYY-MM-DD). Se añade a todos los programas.
        * Include Live Tag - Marca los programas como contenido en vivo mediante la etiqueta <live /> en la salida del EPG. Nota: Solo se agrega al evento principal, no a los programas de relleno.
        * Sample Channel Name - Prueba tus patrones y plantillas con un nombre de canal de ejemplo para previsualizar el resultado. Ingresa un nombre de canal para verificar la coincidencia del patrón y ver el formato generado.
* Puedes hacer clic en los encabezados de columna para cambiar el orden de clasificación de las EPGs existentes.
* Actions column
    * <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> "edit icon" para editar la EPG asociada.
	* <i data-lucide="square-minus" style="color: red; width: 18px;"></i> "delete icon" para eliminar la EPG asociada.
	* <i data-lucide="refresh-cw" style="color: RoyalBlue; width: 18px;"></i> "refresh icon" para actualizar o sincronizar manualmente la EPG asociada.
	
---
	
## TV Guide
* La sección "TV Guide" mostrará por defecto los canales que tengan datos de EPG cargados. 
* Puedes buscar por nombre de canal y/o filtrar por grupos y perfiles de canales.
* Haz clic en el logo de un canal para previsualizarlo. 
* Haz clic en las entradas de la guía para expandir la información del programa, previsualizar el canal o programar una grabación.
!!! nota
    Puedes realizar grabaciones por canal y horario desde la página "DVR".

---

## DVR
* La sección "DVR" te permite administrar tus grabaciones actuales y futuras, así como programar nuevas grabaciones basadas en el canal y la hora.

---

## Stats
* La sección "Stats" muestra información sobre todas las transmisiones activas, y el visualizador de eventos del sistema (System Event Viewer) incluyendo:

    * Nombre del canal "Channel Name"
	* Logo del canal "Channel Logo"
	* Perfil de transmisión "Stream Profile"
    * Tiempo de actividad de la transmisión "Stream Uptime"
	* Transmisión activa para cada canal activo (el menú desplegable permite cambiar la transmisión activa)
	* Estadísticas de la transmisión "Stream Stats" (solo disponible para ciertos [stream profiles](#stream-profiles))


        | Stream profile | Video resolution                                                          | Source frames per second                                                  | Video codec                                                               | Audio codec                                                               | Audio channel configuration                                               | Stream type (MPEGTS, HLS)                                                 | Current speed                                                             |
        | -------------- | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: |
        | ffmpeg         | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> |
        | Proxy          | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | Redirect       | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | streamlink     | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | VLC            | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | Custom ffmpeg  | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> |
		| Custom VLC     | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | 
		
		!!! nota "Nota para VLC personalizados"
		    VLC solo puede mostrar la información que está procesando, por lo que las estadísticas dependerán de tus [parámetros personalizados](https://wiki.videolan.org/VLC_command-line_help/)

	* Velocidad de transmisión (actual y promedio) "Stream bitrate — current and average"
	* Datos totales servidos por la transmisión "Total Data Served"
	* Número de espectadores "Number of Watchers"
	* Direcciones IP y User-Agents asociados
* Puedes forzar la detención de cualquier transmisión (stream) activa haciendo clic en el botón <i data-lucide="square-x" style="color: red; width: 18px;"></i> "Stop Channel".
* Eventos del Systema
* Captura las actualizaciones de M3U, las actualizaciones de EPG, los cambios de stream, los eventos de autenticación, los bloqueos de acceso de red y los errores.
* Permite filtrar y revisar eventos históricos.


---

## Plugins
Desde la página "Plugins" puedes importar, administrar y eliminar los complementos (plugins) de Dispatcharr. Las descripciones de los plugins están disponibles en [discord](https://discord.gg/Sp45V5BcxU)

* Presiona el botón "Import Plugin" para agregar un plugin, o coloca uno en la carpeta `/data/plugins` y recarga la página.
* Elimina un plugin haciendo clic en el botón <i data-lucide="trash-2" style="color: Pink; width: 18px;"></i> "Delete plugin".
* Activa o desactiva un plugin haciendo clic en el ícono de alternancia "Toggle icon" que se encuentra a la derecha del botón de eliminación.
!!! info
    ¿Interesado en desarrollar plugins? Consulta la documentación de desarrollo de plugins en el [dispatcharr github](https://github.com/Dispatcharr/Dispatcharr/blob/main/Plugins.md) 

---

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
* Table Size - Define el tamaño de las filas de los canales "Channels".
* Date format - Configura el formato de las fechas para mostrarlas como Día/Mes/Año o Mes/Día/Año.
* Time format - Configura el formato de la hora para mostrarlas en formato de 12 horas o 24 horas.

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

### Stream Settings
* Default User-Agent - Define el User-Agent predeterminado.
* Default Stream Profile - Define el perfil de transmisión "Stream Profile" predeterminado.
* Preferred Region - Establece tu región preferida.
* Auto Import Mapped Files - Activa o desactiva la opción de importar automáticamente archivos M3U o datos EPG XML desde las carpetas /data/epgs y/o /data/m3us.
* M3U Hash Key - Define cómo se generará el hash para tus listas M3U. Esto afecta la limpieza de transmisiones obsoletas "Stale Stream Cleanup".
    * La configuración predeterminada genera el hash utilizando los campos Name, URL y TVG-ID. Esto significa que si un proveedor cambia cualquiera de esos valores, Dispatcharr creará una nueva transmisión (stream). 
	* La transmisión original desaparecerá de Dispatcharr de acuerdo con el valor definido en "Stale Stream Retention" (días) dentro de la cuenta M3U.
  	!!! nota
	    Asegúrate de hacer clic en el botón `Save` después de realizar cualquier cambio en M3U Hash Key.

    !!! Ejemplo
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
| Stream Profile | [Proxy support <br>(buffer, VPN support, etc.)](#proxy-settings)          | [Fallback stream<br> support](#fallback-streams)                          | [Stream stats<br> support](#stats)                                        | Recursos del Sistema      | 
| -------------- | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-------------------: |
| ffmpeg         | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | Bajo                   |
| Proxy          | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | Muy bajo              |
| Redirect       | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | Muy bajo              |
| streamlink     | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | Bajo                   |
| VLC            | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | Bajo                   |
| Custom ffmpeg  | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | Bajo a Muy Alto      |
| Custom VLC     | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | Bajo a Muy Alto      |
!!! note
    <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> = Soportado  
	<i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i> = Parcialmente soportado  
	<i data-lucide="square-x" style="color: red; width: 18px;"></i> = No soportado  

	

* Existen 5 perfiles de transmisión predeterminados, con la posibilidad de crear tus propios perfiles personalizados
    * ffmpeg - Dispatcharr usará ffmpeg para retransmitir (proxy) los streams. No se realiza transcodificación con el perfil predeterminado de ffmpeg; únicamente se remultiplexan los streams. Utiliza más recursos del sistema que el perfil proxy.
    * Proxy - Retransmite los streams originales, permitiendo aprovechar las funciones de Dispatcharr (como transmisiones redundantes por canal) y agregando un pequeño búfer para mejorar la estabilidad. Usa menos recursos del sistema que ffmpeg.
    * Redirect - Redirige directamente la URL del stream original del archivo M3U hacia el cliente. No hay retransmisión (proxying) con este perfil.
    * streamlink - Para streams personalizados basados en los servicios compatibles con [streamlink](https://streamlink.github.io/)
    * VLC - Dispatcharr retransmitirá (proxy) los streams mediante VLC. No se realiza transcodificación con el perfil de transmisión predeterminado de VLC; únicamente se remultiplexan (remux) los streams. Utiliza más recursos del sistema que el perfil Proxy.
* Custom Stream Profiles - Crea tu propio perfil de transmisión personalizado haciendo clic en el botón "Add Stream Profile" en la página Settings.
    * Name - Un nombre para tu perfil de transmisión.
	* Command - ffmpeg o streamlink o cvlc.
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
	
### Proxy Settings
These settings affect all stream profiles with the exception of redirect

* Buffering Timeout - Tiempo máximo (en segundos) que se espera ante buffering antes de cambiar de stream.
* Buffering Speed - Umbral de velocidad por debajo del cual se considera que hay buffering (1.0 = velocidad normal).
* Buffer Chunk TTL - Tiempo de vida (en segundos) de los fragmentos en búfer; define cuánto tiempo se cachea la transmisión.
* Channel Shutdown Delay -Retardo (en segundos) antes de apagar un canal tras la desconexión del último cliente.
* Channel Initialization Grace Period -  Período de gracia (en segundos) durante la inicialización del canal.

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

---

## Avanzado

### Hardware Acceleration 
- Dispatcharr actualmente no admite aceleración por hardware de forma directa, pero puedes habilitarla utilizando perfiles de transmisión personalizados con ffmpeg.
- Esto requiere mapear tu hardware al contenedor y configurar un perfil personalizado de ffmpeg para aprovechar la aceleración. 

#### Mapping Hardware
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
	
#### Custom Stream Profiles
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

### Process Priority Configuration
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
 
### Nginx reverse proxy
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
	
    1. Configura tu reverse proxy como se muestra en la [documentación](/Dispatcharr-Docs/user-guide/#nginx-reverse-proxy)
    2. En Dispatcharr, ve a > [Network Access](/Dispatcharr-Docs/user-guide/#network-access), y restringe M3U / EPG Endpoints únicamente a tu red local (ejemplo: `192.168.1.0/24`)
    3. Crea un usuario con XC password en la página[Users](/Dispatcharr-Docs/user-guide/#users) si aún no lo has hecho 
    4. Usa el siguiente formato de enlace M3U para compartir con tus usuarios: `https://hostname/get.php?username=XCUSERNAME&password=XCPASSWORD`
    5. Y este formato para EPG: `https://hostname/xmltv.php?username=XCUSERNAME&password=XCPASSWORD`