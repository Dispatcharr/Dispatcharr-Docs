La sección "Stats" muestra información sobre todas lis Streams activos, y el visualizador de eventos del sistema (System Event Viewer)

* Conexiones activas (Active connections)
    * Nombre del canal (Channel name)
    * Logo del canal (Channel logo) 
    * Perfil de stream (Stream profile)
    * Tiempo activo del stream (Stream uptime)
    * Stream activo para cada canal actualmente en uso (el selector desplegable permite cambiar el stream activo)
    * Título del programa que se está reproduciendo actualmente
        * Descripción del programa expandible mediante el botón de chevron
        * Barra de progreso que muestra el tiempo transcurrido y el tiempo restante del programa en reproducción
    * Botón de vista previa del canal (Channel preview) <i data-lucide="circle-play" style="color: LimeGreen; width: 18px;"></i> (haz clic para previsualizar los streams activos)
    * Estadísticas del stream (solo disponibles con ciertos [stream profiles](/Dispatcharr-Docs/system/#stream-profiles)) 


        | Stream profile | Video resolution                                                          | Source frames per second                                                  | Video codec                                                               | Audio codec                                                               | Audio channel configuration                                               | Stream type (MPEGTS, HLS)                                                 | [Current speed](/Dispatcharr-Docs/stats/#current-speed)              |
        | -------------- | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: |
        | ffmpeg         | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> |
        | Proxy          | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | Redirect       | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | streamlink     | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | VLC            | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | Custom ffmpeg  | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> |
        | Custom VLC     | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | yt-dlp         | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> |
        
        !!! nota "Nota para VLC personalizados"
            VLC solo puede mostrar la información que está procesando, por lo que las estadísticas dependerán de tus [parámetros personalizados](https://wiki.videolan.org/VLC_command-line_help/)

        !!! info "Info <span id="current-speed"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#current-speed)"       
            La estadística Current Speed es esencialmente un cálculo de los FPS actuales frente a los FPS de la fuente. Cuando baja de 1, sabes que habrá buffering.

    * Velocidad de transmisión (actual y promedio) "Stream bitrate — current and average"
    * Datos totales servidos por la transmisión "Total Data Served"
    * Número de espectadores "Number of Watchers"
    * Direcciones IP y User-Agents asociados
    * Puedes forzar la detención de cualquier transmisión (stream) activa haciendo clic en el botón <i data-lucide="square-x" style="color: red; width: 18px;"></i> "Stop Channel".
* Eventos del Sistema
    * Captura las actualizaciones de M3U, las actualizaciones de EPG, los cambios de stream, los eventos de autenticación, los bloqueos de acceso de red y los errores.
    * Permite filtrar y revisar eventos históricos.
