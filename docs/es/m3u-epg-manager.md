Desde esta sección puedes agregar y administrar tus cuentas M3U y tus EPGs.

## M3U accounts 
* <i data-lucide="square-plus" style="color: White; width: 18px;"></i> "Add" - Haz clic en el botón para agregar nuevas cuentas M3U.
    * Name - Un nombre para tu cuenta M3U.
    * URL - La URL M3U (no es obligatorio si estás subiendo un archivo M3U).
    * Account Type - Selecciona "Standard" para URLs M3U directas o "Xtream Codes" para servicios basados en panel.
    * Enable VOD Scanning - Activa o desactiva el escaneo de contenido VOD (solo disponible con el tipo de cuenta Xtream Codes).
    * Upload files - Si estás subiendo un archivo M3U local (no requerido si se usa una URL M3U).
    * Expiration Date - Establece una fecha de expiración para recibir una notificación de advertencia (solo disponible con el tipo de cuenta `Standard` La expiración de Xtream Codes se obtiene automáticamente).
    * Max Streams - Establece un número máximo de transmisiones simultáneas permitidas para tu cuenta. Para ilimitadas, configura el valor en 0.
    * User-Agent - Si deseas definir un User-Agent específico para esta cuenta.
    * Refresh Interval (hours) - Define cada cuántas horas se actualizará la URL M3U.
        * Use cron schedule: Haz clic para cambiar a la opción `Cron Expression`.
    * Cron Expression: Ingresa una expresión cron para definir el intervalo de actualización de la cuenta M3U, o haz clic en `Open Cron Builder`  para obtener ayuda mediante una interfaz más sencilla.
        * Use interval schedule: Haz clic para cambiar a la opción `Refresh Interval (hours)` (hours)
        * Open Cron Builder: Abre el generador interactivo de expresiones cron, con botones predefinidos y editores de campos personalizados
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
            * 
            !!! note
                Ten en cuenta que este es un filtro de streams, por lo que seguirás viendo los grupos/categorías del M3U. Sin embargo, los streams excluidos no aparecerán en la tabla de streams. 

        * Botón "Groups" - Abre el administrador de grupos "Group Manager".
            * Automatically enable new groups discovered on future scans - Cuando está desactivado, los nuevos grupos detectados desde la fuente M3U se crearán pero quedarán deshabilitados por defecto. Puedes habilitarlos manualmente más tarde.
            * Filtra los grupos visibles con la barra de búsqueda en la parte superior del administrador de grupos "Group Manager".
            * Ignora transmisiones (streams) de ciertos grupos deseleccionándolos.
            * Auto Channel Sync (solo para Live Groups): Cuando está habilitado, los canales se crearán automáticamente para todas las transmisiones (streams) del grupo durante las actualizaciones de M3U, y se eliminarán cuando ya no estén presentes.
                * Channel Numbering Mode
                    * **Fixed Start Number**  (default): Comenzar en un número especificado e incrementar de forma secuencial
                    * **Use Provider Number**: Usar los números de canal provenientes de la fuente M3U (tvg-chno), con opción de configuración alternativa si el proveedor no incluye número
                    * **Next Available**: Asignar automáticamente comenzando desde 1, omitiendo todos los números de canal ya utilizados
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
    
## EPGs
* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Add EPG" - Haz clic en esta opción para agregar una nueva fuente EPG.
    * Standard EPG Source - Para agregar una fuente estándar XMLTV EPG.
        * Name - Un nombre para tu EPG.
        * URL - La URL de tu EPG.
        * Source Type - Elige XMLTV o "Schedules Direct" dependiendo del formato que use tu proveedor de EPG.
        * API Key - Clave API asociada a tu EPG, si es requerida.
        * Refresh Interval (hours) - Define cada cuántas horas se actualizará la EPG.
            * Use cron schedule: Haz clic para cambiar a la opción `Cron Expression`
        * Cron Expression: Ingresa una expresión cron para definir el intervalo de actualización de la cuenta EPG, o haz clic en `Open Cron Builder` para obtener ayuda mediante una interfaz más sencilla
            * Use interval schedule: Haz clic para cambiar a la opción `Refresh Interval (hours)`
            * Open Cron Builder: Abre el generador interactivo de expresiones cron con botones predefinidos y editores de campos personalizados.
        * Priority - Prioridad para mapeo de EPG (números altos = mayor prioridad).
        Se utiliza cuando múltiples EPG contienen las mismas entradas para un canal. 
        !!! nota
            Las EPG pueden agregarse automáticamente a Dispatcharr colocando los archivos EPG dentro de la carpeta `/data/epgs`, siempre que la opción `Auto-Import Mapped Files` esté habilitada en Settings > Stream Settings.
    * Dummy EPG Source - Para agregar una EPG personalizada "Dummy EPG"          
        * Name - Un nombre para tu EPG personalizada.
        * Pattern configuration
            * Name Source (Requerida) - Elige si se debe analizar el nombre del canal o el nombre de la transmisión (stream) asignada al canal.
            * Title Pattern (Requerida) - Patrón Regex para extraer la información del título (por ejemplo: nombres de equipos, liga). Ejemplo: `(?<league>\w+) \d+: (?<team1>.*) VS (?<team2>.*)`
            * Time Pattern (Opcional) - Extrae la hora desde los títulos de los canales. Grupos requeridos: 'hour' (1-12 o 0-23), 'minute' (0-59), 'ampm' (AM/PM - opcional para 24-hour). Ejemplos: `@ (?<hour>\d+):(?<minute>\d+)(?<ampm>AM|PM) for '8:30PM'` o `@ (?<hour>\d{1,2}):(?<minute>\d{2}) for '20:30'`
            * Date Pattern (Opcional) - Extrae la fecha desde los títulos de los canales. Grupos: 'month' (nombre o número), 'day', 'year' (opcional, por defecto, año actual). Ejemplos: `@ (?<month>\w+) (?<day>\d+)` para 'Oct 17' o `(?<month>\d+)/(?<day>\d+)/(?<year>\d+)` pora '10/17/2025'
        * Output templates
            * Title Template (Opcional) - Da formato al título del programa usando los grupos extraídos. Usa {time} (12-hour: '10 PM') o {time24} (24-hour: '22:00'). Ejemplo: `{league} - {team1} vs {team2} @ {time}`
            * Description Template (Opcional) - Da formato a la descripción del programa usando los grupos extraídos. Usa {time} (12-hour) o {time24} (24-hour). Ejemplo: `Watch {team1} take on {team2} at {time}!`
        * Upcoming/Ended Templates
            * Upcoming Title Template (Opcional) - Título para los programas antes del inicio del evento. Usa {time} (12-hour) o {time24} (24-hour). Ejemplo: `{team1} vs {team2} starting at {time}.`
            * Upcoming Description Template (Opcional) - Descripción para los programas previos al evento. Usa {time} (12-hour) o {time24} (24-hour). Ejemplo: `Upcoming: Watch the {league} match up where the {team1} take on the {team2} at {time}!`
            * Ended Title Template (Opcional) - Título para los programas después de que el evento ha terminado. Usa {time} (12-hour) o {time24} (24-hour). Ejemplo: `{team1} vs {team2} started at {time}.`
            * Ended Description Template (Opcional) - Descripción para los programas posteriores al evento. Usa {time} (12-hour) o {time24} (24-hour). Ejemplo: `The {league} match between {team1} and {team2} started at {time}.`
        * Fallback Templates
            * Fallback Title Template (Optional) - Título personalizado cuando los patrones no coinciden. Si se deja vacío, se usa el nombre del canal o del stream.
            * Fallback Description Template (Optional) - Descripción personalizada cuando los patrones no coinciden. Si se deja vacío, se usan los mensajes de marcador de posición integrados.
        * EPG Settings
            * Event Timezone (Requerida) - Zona horaria del evento en los títulos de los canales. El horario de verano (DST) se gestiona automáticamente. Todas las zonas horarias compatibles con pytz están disponibles.
            * Output Timezone (Opcional) - Permite mostrar las horas en una zona horaria diferente a la del evento. Déjalo en blanco para usar la zona horaria del evento. Ejemplo: Evento a las 10 PM ET mostrado como 9 PM CT.
            * Program Duration (minutos) (requerido) - Duración predeterminada de cada programa.
            * Categories (Opcional) - Categorías EPG para estos programas. Separa múltiples categorías con comas (por ejemplo: Sports, Live, HD). Nota: Solo se agregan al evento principal, no a los programas de relleno previos o posteriores.
            * Channel Logo URL (Optional) - Construye una URL para el logo del canal usando grupos de regex. Ejemplo: https://example.com/logos/{league_normalize}/{team1_normalize}.png. Usa {groupname_normalize} para URLs más limpias (solo caracteres alfanuméricos, en minúsculas). Esto se usará como el <icon> del canal en la salida del EPG.
            * Program Poster URL (Optional) - Construye una URL para el póster o icono del programa usando grupos de regex. Ejemplo: https://example.com/posters/{team1_normalize}-vs-{team2_normalize}.jpg. Usa{groupname_normalize} para URLs más limpias (solo caracteres alfanuméricos, en minúsculas). Esto se usará como el <icon> del programa en la salida del EPG.
            * Include Date Tag - Incluye la etiqueta <date> en la salida del EPG con la fecha de inicio del programa (formato YYYY-MM-DD). Se añade a todos los programas.
            * Include Live Tag - Marca los programas como contenido en vivo mediante la etiqueta <live /> en la salida del EPG. Nota: Solo se agrega al evento principal, no a los programas de relleno.
            * Include New Tag - Marca los programas como contenido nuevo utilizando la etiqueta <new /> en la salida del EPG. Nota: Solo se agrega al evento principal, no a los programas de relleno previos o posteriores.
        * Sample Channel Name - Prueba tus patrones y plantillas con un nombre de canal de ejemplo para previsualizar el resultado. Ingresa un nombre de canal para verificar la coincidencia del patrón y ver el formato generado.
* Puedes hacer clic en los encabezados de columna para cambiar el orden de clasificación de las EPGs existentes.
* Actions column
    * <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> "edit icon" para editar la EPG asociada.
    * <i data-lucide="square-minus" style="color: red; width: 18px;"></i> "delete icon" para eliminar la EPG asociada.
    * <i data-lucide="refresh-cw" style="color: RoyalBlue; width: 18px;"></i> "refresh icon" para actualizar o sincronizar manualmente la EPG asociada.