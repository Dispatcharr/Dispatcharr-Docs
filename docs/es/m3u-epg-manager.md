Desde esta página puedes agregar y mantener tus cuentas M3U y EPGs

## Cuentas M3U
* Server Groups - Haz clic en este botón para abrir el administrador de Server Groups, crear, renombrar y eliminar grupos, y ver cuántas cuentas pertenecen a cada uno

!!! info "¿Qué son los server groups?"
    Los server groups son la forma de compartir límites de conexión para cuentas M3U que usan las mismas credenciales. Este es un caso de uso común:

    * Dos cuentas M3U de Dispatcharr que comparten el mismo proveedor y credenciales
        * **Standard M3U account** — Usa una playlist M3U modificada (se pueden encontrar en línea plantillas M3U curadas por terceros para varios proveedores) para Live TV
        * **Xtream Codes (XC) account** — Para VOD y grupos de canales que no están disponibles (o no son prácticos) mediante la ruta M3U

* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Add M3U" - Haz clic en este botón para agregar nuevas cuentas M3U
    * Name - Un nombre para tu cuenta M3U
    * URL - La URL M3U (no es requerida si subes un archivo M3U)
    * Account Type - Standard para URLs M3U directas, Xtream Codes para servicios basados en panel
    * Enable VOD Scanning - Activa/desactiva el escaneo de contenido VOD (solo disponible con el `Xtream Codes` Account Type)
    * Upload files - Si subes un archivo M3U local (no requerido si se usa una URL M3U)
    * Expiration Date - Define una fecha de expiración para recibir una notificación de advertencia (solo disponible con `Standard` Account Type. La expiración de Xtream Codes se obtiene automáticamente)
    * Max Streams - Define el número máximo de streams simultáneos permitidos para tu cuenta. Para ilimitado, usa 0
    * Server Group - Comparte límites de login entre cuentas de un server group. Las cuentas del mismo grupo comparten límites de conexión cuando usan el mismo login de proveedor. Los límites provienen del max streams de cada perfil de cuenta
    * User-Agent - Si quieres definir un user-agent específico para esta cuenta
    * Refresh Interval (hours) - Cada cuánto (en número de horas) se actualiza la URL M3U
        * Use cron schedule: Haz clic para cambiar a la opción `Cron Expression`
    * Cron Expression: Ingresa una expresión cron para definir el intervalo de actualización de la cuenta M3U, o haz clic en `Open Cron Builder` para recibir ayuda con una interfaz amigable
        * Use interval schedule: Haz clic para volver a `Refresh Interval (hours)`
        * Open Cron Builder: Abre el constructor interactivo amigable de expresiones cron, con botones predefinidos y editores de campos personalizados
    * Stale Stream Retention (days) - Los streams (y Groups) que no se hayan visto durante esta cantidad de días se eliminarán. Para eliminación inmediata, usa 0
    * VOD Priority - Prioridad para la selección de proveedor VOD (números más altos = mayor prioridad). Se usa cuando varios proveedores ofrecen el mismo contenido.
    * Is Active - Activa o desactiva si esta cuenta está activa
    !!! note "Nota"
        Los M3U pueden agregarse automáticamente a Dispatcharr agregando archivo(s) M3U en la carpeta `/data/m3us` si `Auto-Import Mapped Files` está habilitado en Settings > Stream Settings
* Puedes hacer clic en los encabezados de columna para cambiar el orden de clasificación de las cuentas M3U existentes
* Actions column
    * Ícono de edición <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> para editar la cuenta M3U asociada
        * Botón "Filters" - Abre el Filters Manager
            * Haz clic en 'New' para agregar filtros. Los filtros se procesan en orden y, una vez que hay una coincidencia, no se evalúan reglas adicionales. Los filtros pueden ordenarse usando el ancla de arrastrar y soltar a la izquierda de la regla, y editarse/eliminarse usando los íconos a la derecha de la regla
                * Field: selecciona qué atributo del stream se filtrará: "Group", "Stream Name" o "Stream URL"
                * Regex Pattern: ingresa una expresión regular válida para hacer coincidir el Field
                * Exclude: alterna para determinar inclusión/exclusión según la expresión regular
                * Case Sensitive: alterna para determinar sensibilidad a mayúsculas/minúsculas en la expresión regular
            * Selecciona 'Save' para agregar el filtro recién creado
            * Agrega filtros adicionales para refinar los valores del Field seleccionado según sea necesario

            !!! note "Nota"
                Ten en cuenta que este es un filtro de *streams*, por lo que seguirás viendo los grupos/categorías del M3U. Sin embargo, los streams excluidos no aparecerán en la tabla de streams

        * Botón "Groups" - Abre el Group Manager
            * Automatically enable new groups discovered on future scans - Cuando está deshabilitado, los grupos nuevos de la fuente M3U se crearán pero quedarán deshabilitados por defecto. Puedes habilitarlos manualmente más adelante
            * Filtra los grupos visibles con el cuadro de búsqueda en la parte superior del group manager, o haz clic en los botones de la derecha para filtrar por grupos Enabled o Disabled
            * Ignora streams de grupos deseleccionándolos
            * Auto Channel Sync (solo para grupos Live): Cuando está habilitado, se crearán automáticamente canales para todos los streams del grupo durante las actualizaciones M3U, y se eliminarán cuando los streams ya no estén presentes.
                * Channel Numbering Mode
                    * **Fixed Start Number**  (default): Comienza en un número especificado e incrementa secuencialmente
                    * **Use Provider Number**: Usa números de canal de la fuente M3U (tvg-chno), con fallback configurable si falta el número del proveedor
                    * **Next Available**: Asigna automáticamente desde 1, omitiendo todos los números de canal usados
                * Start Channel #: Define un número de canal inicial para cada grupo para organizar tus canales.
                * Advanced options:
                    * Name Transforms
                        * Channel Name Find & Replace (Regex): Busca y reemplaza para renombrar tus canales. Por defecto, el nombre del canal coincidirá con el nombre del stream
                        * Include/Exclude if name matches (Regex): Solo crea canales desde streams que coincidan con tus criterios de filtro
                    * EPG & Logo
                        * EPG source: Fuerza una fuente EPG específica. Por defecto, si se deja en blanco, se hace auto-match por tvg-id
                        * Custom Logo: Proporciona un logo personalizado o déjalo en blanco para usar el logo del stream
                    * Channel assignment
                        * Override Channel Group: Envía los canales creados automáticamente a un grupo diferente al de su fuente
                        * Channel Profiles: Limita los canales creados automáticamente a channel profiles específicos (por defecto todos cuando está en blanco)
                        * Stream Profile: Aplica un stream profile específico a todos los canales creados por este grupo
                        * Channel Sort Order: Ordena los canales dentro del grupo antes de asignar números de canal
                    * Compact numbering: Los números de canal cambian al ocultar/mostrar. Fija un número con un override de número de canal
                    
        * Botón "Profiles" - Permite agregar un segundo conjunto de credenciales para el mismo proveedor. <span id="m3u-profiles"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#m3u-profiles)
        !!! info "Información"
            Supongamos que tienes 3 cuentas que quieres agregar a Dispatcharr: 2 de Provider-A y 1 de Provider-B. En lugar de agregar tres cuentas M3U separadas, puedes agregar Provider-A una vez y configurar un perfil para usar el username y password de cada cuenta de Provider-A dentro de la misma cuenta M3U.

            === "Xtream Codes Account Type"
                1. Configura Provider-A como una cuenta M3U (Xtream Codes) en el M3U & EPG manager.
                2. Haz clic en el ícono de edición amarillo correspondiente en la columna Actions.
                3. Haz clic en el botón "Profiles".
                4. Haz clic en el botón "New".
                5. Ingresa un Name, Max Streams (si lo deseas), el New Username y el New Password

            === "Standard (M3U) Account Type"
                1. Configura Provider-A como una cuenta M3U (Standard) en el M3U & EPG manager.
                2. Haz clic en el ícono de edición amarillo correspondiente en la columna Actions.
                3. Haz clic en el botón "Profiles".
                4. Haz clic en el botón "New".
                5. Los campos "Search Pattern (Regex)" y "Replace Pattern" actuarán como búsqueda y reemplazo en tu archivo m3u.
                !!! example "Ejemplo"
                    | Example URL | Search Pattern | Replace Pattern |
                    | --- | --- | --- |
                    | `http://provider.com/live/username1/password1/stream` | `username1/password1` | `username2/password2` |
            
    * Ícono de eliminación <i data-lucide="square-minus" style="color: red; width: 18px;"></i> para quitar la cuenta M3U asociada
    * Ícono de actualización <i data-lucide="refresh-cw" style="color: RoyalBlue; width: 18px;"></i> para actualizar manualmente la cuenta M3U asociada
    
## EPGs
* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Add EPG" - Haz clic en este botón para agregar una nueva EPG
    * Standard EPG Source - Para agregar una fuente EPG XMLTV estándar
        * Name - Un nombre para tu EPG
        * URL - La URL de tu EPG (puede ser xml o xml comprimido como .gz o .zip)
        * Source Type - Elige XMLTV o Schedules Direct según el formato de tu proveedor EPG
        * Refresh Interval (hours) - Cada cuánto (en número de horas) se actualiza la EPG
            * Use cron schedule: Haz clic para cambiar a la opción `Cron Expression`
        * Cron Expression: Ingresa una expresión cron para definir el intervalo de actualización de la cuenta EPG, o haz clic en `Open Cron Builder` para recibir ayuda con una interfaz amigable
            * Use interval schedule: Haz clic para volver a `Refresh Interval (hours)`
            * Open Cron Builder: Abre el constructor interactivo amigable de expresiones cron, con botones predefinidos y editores de campos personalizados
        * Priority - Prioridad para coincidencia de EPG (números más altos = mayor prioridad). Se usa cuando varias fuentes EPG tienen entradas coincidentes para un canal.
        !!! note "Nota"
            Las EPGs pueden agregarse automáticamente a Dispatcharr agregando archivo(s) EPG en la carpeta `/data/epgs` si `Auto-Import Mapped Files` está habilitado en Settings > Stream Settings ((el tipo de archivo debe ser xml o xml comprimido como .gz o .zip))
    * Dummy EPG Source - Para agregar una dummy EPG personalizada
        * Name - Un nombre para tu dummy EPG personalizada
        * Pattern configuration
            * Name Source (Required) - Elige si se debe analizar el nombre del canal o el nombre de un stream asignado al canal
            * Title Pattern (Required) - Patrón regex para extraer información del título (por ejemplo, nombres de equipos, liga). Ejemplo: `(?<league>\w+) \d+: (?<team1>.*) VS (?<team2>.*)`
            * Time Pattern (Optional) - Extrae la hora desde títulos de canales. Grupos requeridos: 'hour' (1-12 o 0-23), 'minute' (0-59), 'ampm' (AM/PM - opcional para 24-hour). Ejemplos: `@ (?<hour>\d+):(?<minute>\d+)(?<ampm>AM|PM) for '8:30PM'` OR `@ (?<hour>\d{1,2}):(?<minute>\d{2}) for '20:30'`
            * Date Pattern (Optional) - Extrae la fecha desde títulos de canales. Grupos: 'month' (nombre o número), 'day', 'year' (opcional, por defecto el año actual). Ejemplos: `@ (?<month>\w+) (?<day>\d+)` for 'Oct 17' OR `(?<month>\d+)/(?<day>\d+)/(?<year>\d+)` for '10/17/2025'
        * Output templates
            * Title Template (Optional) - Da formato al título EPG usando los grupos extraídos. Usa {time} (12-hour: '10 PM') o {time24} (24-hour: '22:00'). Ejemplo: `{league} - {team1} vs {team2} @ {time}`
            * Subtitle Template (Optional) - Da formato al subtítulo EPG usando los grupos extraídos. Ejemplo: `{starttime} - {endtime}`
            * Description Template (Optional) - Da formato a la descripción EPG usando los grupos extraídos. Usa {time} (12-hour) o {time24} (24-hour). Ejemplo: `Watch {team1} take on {team2} at {time}!`
        * Upcoming/Ended Templates
            * Upcoming Title Template (Optional) - Título para programas antes de que empiece el evento. Usa {time} (12-hour) o {time24} (24-hour). Ejemplo: `{team1} vs {team2} starting at {time}.`
            * Upcoming Description Template (Optional) - Descripción para programas antes del evento. Usa {time} (12-hour) o {time24} (24-hour). Ejemplo: `Upcoming: Watch the {league} match up where the {team1} take on the {team2} at {time}!`
            * Ended Title Template (Optional) - Título para programas después de que el evento terminó. Usa {time} (12-hour) o {time24} (24-hour). Ejemplo: `{team1} vs {team2} started at {time}.`
            * Ended Description Template (Optional) - Descripción para programas después del evento. Usa {time} (12-hour) o {time24} (24-hour). Ejemplo: `The {league} match between {team1} and {team2} started at {time}.`
        * Fallback Templates
            * Fallback Title Template (Optional) - Título personalizado cuando los patrones no coinciden. Si está vacío, usa el nombre del canal/stream.
            * Fallback Description Template (Optional) - Descripción personalizada cuando los patrones no coinciden. Si está vacío, usa mensajes placeholder integrados.
        * EPG Settings
            * Event Timezone (Required) - La timezone de las horas del evento en los títulos de tus canales. DST (Daylight Saving Time) se maneja automáticamente. Todas las timezones soportadas por pytz están disponibles.
            * Output Timezone (Optional) - Muestra las horas en una timezone diferente a la del evento. Déjalo vacío para usar la timezone del evento. Ejemplo: evento a las 10 PM ET mostrado como 9 PM CT.
            * Program Duration (minutes) (required) - Duración predeterminada para cada programa
            * Categories (Optional) - Categorías EPG para estos programas. Usa comas para separar varias (por ejemplo, Sports, Live, HD). Nota: Solo se agregan al evento principal, no a programas de relleno upcoming/ended.
            * Channel Logo URL (Optional) - Construye una URL para el logo del canal usando grupos regex. Ejemplo: https://example.com/logos/{league_normalize}/{team1_normalize}.png. Usa {groupname_normalize} para URLs más limpias (solo alfanuméricas, en minúsculas). Esto se usará como el <icon> del canal en la salida EPG.
            * Program Poster URL (Optional) - Construye una URL para el poster/icon del programa usando grupos regex. Ejemplo: https://example.com/posters/{team1_normalize}-vs-{team2_normalize}.jpg. Usa {groupname_normalize} para URLs más limpias (solo alfanuméricas, en minúsculas). Esto se usará como el <icon> del programa en la salida EPG.
            * Include Date Tag - Incluye la etiqueta <date> en la salida EPG con la fecha de inicio del programa (formato YYYY-MM-DD). Se agrega a todos los programas.
            * Include Live Tag - Marca programas como contenido live con la etiqueta <live /> en la salida EPG. Nota: Solo se agrega al evento principal, no a programas de relleno upcoming/ended.
            * Include New Tag - Marca programas como contenido nuevo con la etiqueta <new /> en la salida EPG. Nota: Solo se agrega al evento principal, no a programas de relleno upcoming/ended.
        * Sample Channel Name - Prueba tus patrones y templates con un nombre de canal de muestra para previsualizar la salida. Ingresa un nombre de canal de muestra para probar la coincidencia de patrones y ver la salida formateada
* Puedes hacer clic en los encabezados de columna para cambiar el orden de clasificación de las EPGs existentes
* Actions column
    * Ícono de edición <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> para editar la EPG asociada
    * Ícono de eliminación <i data-lucide="square-minus" style="color: red; width: 18px;"></i> para quitar la EPG asociada
    * Ícono de actualización <i data-lucide="refresh-cw" style="color: RoyalBlue; width: 18px;"></i> para actualizar manualmente la EPG asociada
