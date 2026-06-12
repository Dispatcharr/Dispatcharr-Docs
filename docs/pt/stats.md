A página Stats mostra informações sobre todos os streams ativos e o visualizador de eventos do sistema

* Conexões ativas
    * Nome do canal
    * Logo do canal
    * Perfil de stream
    * Tempo de atividade do stream
    * Stream ativo para cada canal atualmente ativo (o seletor suspenso permite alterar o stream ativo)
    * Título do programa em reprodução no momento
        * Descrição do programa expansível via botão chevron
        * Barra de progresso mostrando o tempo decorrido e restante para os programas em reprodução
    * Botão de pré-visualização do canal <i data-lucide="circle-play" style="color: LimeGreen; width: 18px;"></i> (clique para pré-visualizar os streams ativos no momento)
    * Estatísticas do stream (disponível apenas com certos [perfis de stream](/Dispatcharr-Docs/system/#stream-profiles))

        | Perfil de stream | Resolução de vídeo                                                    | Quadros por segundo da fonte                                          | Codec de vídeo                                                        | Codec de áudio                                                        | Configuração de canais de áudio                                         | Tipo de stream (MPEGTS, HLS)                                          | [Velocidade atual](/Dispatcharr-Docs/stats/#current-speed)       |
        | ---------------- | :-------------------------------------------------------------------: | :-------------------------------------------------------------------: | :-------------------------------------------------------------------: | :-------------------------------------------------------------------: | :---------------------------------------------------------------------: | :-------------------------------------------------------------------: | :---------------------------------------------------------------: |
        | ffmpeg           | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> |
        | Proxy            | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | Redirect         | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | streamlink       | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | VLC              | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | Custom ffmpeg    | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> |
        | Custom VLC       | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | yt-dlp           | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> |

        !!! note "Observação sobre Custom VLC"
            O VLC só pode gerar informações sobre o que ele próprio está processando, então as estatísticas dependerão dos seus [parâmetros personalizados](https://wiki.videolan.org/VLC_command-line_help/)

        !!! info "Informação <span id="current-speed"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#current-speed)"
            A estatística Velocidade Atual é essencialmente um cálculo do FPS atual em relação ao FPS da fonte. Quando cai abaixo de 1, você saberá que haverá buffering.

    * Taxa de bits do stream (atual e média)
    * Total de dados servidos pelo stream
    * Número de espectadores
    * Endereços IP e User-Agents associados
    * Nome de usuário do(s) usuário(s) conectado(s)
    * Formato do contêiner (mpegts ou fmp4)
    * Nome do perfil de saída (se ativo)
    * Você pode forçar a parada de qualquer stream atual clicando no botão <i data-lucide="square-x" style="color: red; width: 18px;"></i> "Stop Channel"
* Eventos do Sistema
    * Captura atualizações de M3U, atualizações de EPG, trocas de stream, eventos de autenticação, bloqueios de acesso à rede e erros.
    * Permite filtrar e revisar eventos históricos.
