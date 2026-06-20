Nesta página você pode adicionar e gerenciar suas contas M3U e EPGs

## Contas M3U
* Server Groups - Clique neste botão para abrir o gerenciador de Server Groups e criar, renomear, excluir grupos e ver quantas contas pertencem a cada um

!!! info "O que são server groups?"
    Server groups são a forma de compartilhar limites de conexão para contas M3U que compartilham as mesmas credenciais. Aqui está um caso de uso comum:
    
    * Duas contas M3U do Dispatcharr que compartilham o mesmo provedor e credenciais
        * **Conta M3U Standard** — Usando uma playlist M3U modificada (templates M3U curados por terceiros podem ser encontrados online para vários provedores) para Live TV
        * **Conta Xtream Codes (XC)** — Para VOD e grupos de canais que não estão disponíveis (ou não são práticos) através do caminho M3U

* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Add M3U" - Clique neste botão para adicionar novas contas M3U
    * Name - Um nome para sua conta M3U
    * URL - A URL do M3U (não obrigatório se estiver enviando um arquivo M3U)
    * Account Type - Standard para URLs M3U diretas, Xtream Codes para serviços baseados em painel
    * Enable VOD Scanning - Ativar/desativar a varredura de conteúdo VOD (disponível apenas com o tipo de conta `Xtream Codes`)
    * Upload files - Se estiver enviando um arquivo M3U local (não obrigatório se a URL do M3U for usada)
    * Expiration Date - Defina uma data de expiração para receber uma notificação de aviso (disponível apenas com o tipo de conta `Standard`. A expiração do Xtream Codes é obtida automaticamente)
    * Max Streams - Defina um número para o máximo de streams simultâneos permitidos para sua conta. Para ilimitado, defina como 0
    * Server Group - Compartilhe limites de login entre contas em um server group. Contas no mesmo grupo compartilham limites de conexão quando usam o mesmo login de provedor. Os limites vêm do max streams de cada perfil de conta
    * User-Agent - Se quiser definir um user-agent específico para esta conta
    * Refresh Interval (hours) - Com que frequência (em horas) atualizar a URL do M3U
        * Use cron schedule: Clique para alternar para a opção `Cron Expression`
    * Cron Expression: Insira uma expressão cron para definir o intervalo de atualização da conta M3U, ou clique em `Open Cron Builder` para assistência mais amigável
        * Use interval schedule: Clique para alternar para `Refresh Interval (hours)`
        * Open Cron Builder: Abre o construtor interativo de expressões cron com botões predefinidos e editores de campos personalizados
    * Stale Stream Retention (days) - Streams (e Grupos) não vistos por este número de dias serão removidos. Para exclusão imediata, defina como 0
    * VOD Priority - Prioridade para seleção de provedor VOD (números maiores = maior prioridade). Usado quando múltiplos provedores oferecem o mesmo conteúdo.
    * Is Active - Alterne se esta conta está ativa ou não
    !!! note
        M3Us podem ser adicionados automaticamente ao Dispatcharr colocando arquivo(s) M3U na pasta `/data/m3us` e se `Auto-Import Mapped Files` estiver ativado em Settings > Stream Settings
* Você pode clicar nos cabeçalhos das colunas para alterar a ordem de classificação das contas M3U existentes
* Coluna Actions
    * <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> ícone de edição para editar a conta M3U associada
        * Botão "Filters" - Abre o Gerenciador de Filtros
            * Clique em 'New' para adicionar filtros. Os filtros processam em ordem, e uma vez correspondido, nenhuma regra adicional é avaliada. Os filtros podem ser ordenados usando a âncora de arrastar e soltar à esquerda da regra, e editados/excluídos usando os ícones à direita da regra
                * Field: seleciona qual atributo do stream filtrar: "Group", "Stream Name" ou "Stream URL"
                * Regex Pattern: insira uma expressão regular válida para corresponder ao Campo
                * Exclude: alterne para determinar incluir/excluir com base na expressão regular
                * Case Sensitive: alterne para determinar sensibilidade a maiúsculas/minúsculas para a expressão regular
            * Selecione 'Save' para adicionar o filtro recém-criado
            * Adicione filtros adicionais para refinar os valores do Campo selecionado conforme necessário
            
            !!! note
                Lembre-se de que este é um filtro de *stream*, então você ainda verá os grupos/categorias aparecerem para o M3U. No entanto, streams excluídos não aparecerão na tabela de streams

        * Botão "Groups" - Abre o Gerenciador de Grupos
            * Automatically enable new groups discovered on future scans - Quando desativado, novos grupos da fonte M3U serão criados mas desativados por padrão. Você pode ativá-los manualmente depois
            * Filtre grupos visíveis com a caixa de pesquisa no topo do gerenciador de grupos, ou clique nos botões à direita para filtrar por grupos Ativados ou Desativados
            * Ignore streams from groups desmarcando-os
            * Auto Channel Sync (apenas para grupos Live): Quando ativado, canais serão criados automaticamente para todos os streams do grupo durante atualizações do M3U, e removidos quando os streams não estiverem mais presentes.
                * Channel Numbering Mode
                    * **Fixed Start Number** (padrão): Começa em um número especificado e incrementa sequencialmente
                    * **Use Provider Number**: Usa números de canal da fonte M3U (tvg-chno), com fallback configurável se o número do provedor estiver ausente
                    * **Next Available**: Atribuição automática começando em 1, pulando todos os números de canal já usados
                * Start Channel #: Defina um número de canal inicial para cada grupo para organizar seus canais.
                * Opções avançadas:
                    * Name Transforms
                        * Channel Name Find & Replace (Regex): Pesquisar e substituir para renomear seus canais. Por padrão, o nome do canal corresponderá ao nome do stream
                        * Include/Exclude if name matches (Regex): Crie canais apenas a partir de streams que correspondam aos seus critérios de filtro
                    * EPG & Logo
                        * EPG source: Forçar uma fonte EPG específica. Padrão é auto-match por tvg-id se vazio
                        * Custom Logo: Forneça um logo personalizado ou deixe em branco para usar o logo do stream
                    * Channel assignment
                        * Override Channel Group: Envie canais criados automaticamente para um grupo diferente da sua fonte
                        * Channel Profiles: Limite canais criados automaticamente a perfis de canal específicos (padrão é todos quando vazio)
                        * Stream Profile: Aplique um perfil de stream específico a todos os canais criados por este grupo
                        * Channel Sort Order: Ordene canais dentro do grupo antes de atribuir números de canal
                    * Compact numbering: Números de canal mudam ao ocultar/exibir. Fixe um número com uma sobrescrita de número de canal
                    
        * Botão "Profiles" - Permite adicionar um segundo conjunto de credenciais para o mesmo provedor. <span id="m3u-profiles"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#m3u-profiles)
        !!! info
            Digamos que você tenha 3 contas para adicionar ao Dispatcharr. 2 do Provedor-A e 1 do Provedor-B. Em vez de adicionar três contas M3U separadas, você pode adicionar o Provedor-A uma vez e configurar um perfil para usar o nome de usuário e senha de cada conta do Provedor-A sob a mesma conta M3U.

            === "Tipo de Conta Xtream Codes"
                1. Configure o Provedor-A como uma conta M3U (Xtream Codes) no gerenciador M3U & EPG.
                2. Clique no ícone de edição amarelo correspondente sob a coluna Actions.
                3. Clique no botão "Profiles".
                4. Clique no botão "New".
                5. Insira um Name, Max Streams (se desejado), o novo Username e nova Password

            === "Tipo de Conta Standard (M3U)"
                1. Configure o Provedor-A como uma conta M3U (Standard) no gerenciador M3U & EPG.
                2. Clique no ícone de edição amarelo correspondente sob a coluna Actions.
                3. Clique no botão "Profiles".
                4. Clique no botão "New".
                5. Os campos "Search Pattern (Regex)" e "Replace Pattern" funcionarão como pesquisar e substituir no seu arquivo m3u.
                !!! example
                    | URL Exemplo | Search Pattern | Replace Pattern |
                    | --- | --- | --- |
                    | `http://provider.com/live/username1/password1/stream` | `username1/password1` | `username2/password2` |
            
    * <i data-lucide="square-minus" style="color: red; width: 18px;"></i> ícone de exclusão para remover a conta M3U associada
    * <i data-lucide="refresh-cw" style="color: RoyalBlue; width: 18px;"></i> ícone de atualização para atualizar manualmente a conta M3U associada
    
## EPGs
* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Add EPG" - Clique neste botão para adicionar um novo EPG
    * Standard EPG Source - Para adicionar uma fonte EPG XMLTV padrão
        * Name - Um nome para seu EPG
        * URL - A URL do seu EPG (pode ser xml ou xml compactado como .gz ou .zip)
        * Source Type - Escolha XMLTV ou Schedules Direct dependendo do formato do seu provedor de EPG
        * Refresh Interval (hours) - Com que frequência (em horas) atualizar o EPG
            * Use cron schedule: Clique para alternar para a opção `Cron Expression`
        * Cron Expression: Insira uma expressão cron para definir o intervalo de atualização da conta EPG, ou clique em `Open Cron Builder` para assistência mais amigável
            * Use interval schedule: Clique para alternar para `Refresh Interval (hours)`
            * Open Cron Builder: Abre o construtor interativo de expressões cron com botões predefinidos e editores de campos personalizados
        * Priority - Prioridade para correspondência de EPG (números maiores = maior prioridade). Usado quando múltiplas fontes de EPG têm entradas correspondentes para um canal.
        !!! note
            EPGs podem ser adicionados automaticamente ao Dispatcharr colocando arquivo(s) EPG na pasta `/data/epgs` e se `Auto-Import Mapped Files` estiver ativado em Settings > Stream Settings (o tipo de arquivo deve ser xml ou xml compactado como .gz ou .zip)
    * Dummy EPG Source - Para adicionar um EPG fictício personalizado
        * Name - Um nome para seu EPG fictício personalizado
        * Pattern configuration
            * Name Source (Obrigatório) - Escolha se deve analisar o nome do canal ou um nome de stream atribuído ao canal
            * Title Pattern (Obrigatório) - Padrão regex para extrair informações do título (ex.: nomes de times, liga). Exemplo: `(?<league>\w+) \d+: (?<team1>.*) VS (?<team2>.*)`
            * Time Pattern (Opcional) - Extraia o horário dos títulos dos canais. Grupos obrigatórios: 'hour' (1-12 ou 0-23), 'minute' (0-59), 'ampm' (AM/PM - opcional para 24 horas). Exemplos: `@ (?<hour>\d+):(?<minute>\d+)(?<ampm>AM|PM) para '8:30PM'` OU `@ (?<hour>\d{1,2}):(?<minute>\d{2}) para '20:30'`
            * Date Pattern (Opcional) - Extraia a data dos títulos dos canais. Grupos: 'month' (nome ou número), 'day', 'year' (opcional, padrão é o ano atual). Exemplos: `@ (?<month>\w+) (?<day>\d+)` para 'Oct 17' OU `(?<month>\d+)/(?<day>\d+)/(?<year>\d+)` para '10/17/2025'
        * Output templates
            * Title Template (Opcional) - Formate o título do EPG usando grupos extraídos. Use {time} (12 horas: '10 PM') ou {time24} (24 horas: '22:00'). Exemplo: `{league} - {team1} vs {team2} @ {time}`
            * Subtitle Template (Opcional) - Formate o subtítulo do EPG usando grupos extraídos. Exemplo: `{starttime} - {endtime}`
            * Description Template (Opcional) - Formate a descrição do EPG usando grupos extraídos. Use {time} (12 horas) ou {time24} (24 horas). Exemplo: `Assista {team1} enfrentar {team2} às {time}!`
        * Upcoming/Ended Templates
            * Upcoming Title Template (Opcional) - Título para programas antes do evento começar. Use {time} (12 horas) ou {time24} (24 horas). Exemplo: `{team1} vs {team2} começando às {time}.`
            * Upcoming Description Template (Opcional) - Descrição para programas antes do evento. Use {time} (12 horas) ou {time24} (24 horas). Exemplo: `Em breve: Assista o confronto da {league} onde o {team1} enfrenta o {team2} às {time}!`
            * Ended Title Template (Opcional) - Título para programas após o evento terminar. Use {time} (12 horas) ou {time24} (24 horas). Exemplo: `{team1} vs {team2} começou às {time}.`
            * Ended Description Template (Opcional) - Descrição para programas após o evento. Use {time} (12 horas) ou {time24} (24 horas). Exemplo: `A partida da {league} entre {team1} e {team2} começou às {time}.`
        * Fallback Templates
            * Fallback Title Template (Opcional) - Título personalizado quando os padrões não correspondem. Se vazio, usa o nome do canal/stream.
            * Fallback Description Template (Opcional) - Descrição personalizada quando os padrões não correspondem. Se vazio, usa mensagens placeholder integradas.
        * EPG Settings
            * Event Timezone (Obrigatório) - O fuso horário dos horários dos eventos nos títulos dos seus canais. DST (Horário de Verão) é tratado automaticamente! Todos os fusos horários suportados pelo pytz estão disponíveis.
            * Output Timezone (Opcional) - Exiba horários em um fuso horário diferente do fuso horário do evento. Deixe vazio para usar o fuso horário do evento. Exemplo: Evento às 22h ET exibido como 21h CT.
            * Program Duration (minutes) (obrigatório) - Duração padrão para cada programa
            * Categories (Opcional) - Categorias EPG para estes programas. Use vírgulas para separar múltiplas (ex.: Sports, Live, HD). Nota: Adicionado apenas ao evento principal, não aos programas de preenchimento upcoming/ended.
            * Channel Logo URL (Opcional) - Construa uma URL para o logo do canal usando grupos regex. Exemplo: https://example.com/logos/{league_normalize}/{team1_normalize}.png. Use {groupname_normalize} para URLs mais limpas (apenas alfanumérico, minúsculas). Isso será usado como o <icon> do canal na saída do EPG.
            * Program Poster URL (Opcional) - Construa uma URL para o poster/ícone do programa usando grupos regex. Exemplo: https://example.com/posters/{team1_normalize}-vs-{team2_normalize}.jpg. Use {groupname_normalize} para URLs mais limpas (apenas alfanumérico, minúsculas). Isso será usado como o <icon> do programa na saída do EPG.
            * Include Date Tag - Inclua a tag <date> na saída do EPG com a data de início do programa (formato YYYY-MM-DD). Adicionado a todos os programas.
            * Include Live Tag - Marque programas como conteúdo ao vivo com a tag <live /> na saída do EPG. Nota: Adicionado apenas ao evento principal, não aos programas de preenchimento upcoming/ended.
            * Include New Tag - Marque programas como conteúdo novo com a tag <new /> na saída do EPG. Nota: Adicionado apenas ao evento principal, não aos programas de preenchimento upcoming/ended.
        * Sample Channel Name - Teste seus padrões e templates com um nome de canal de exemplo para visualizar a saída. Insira um nome de canal de exemplo para testar a correspondência de padrões e ver a saída formatada
* Você pode clicar nos cabeçalhos das colunas para alterar a ordem de classificação dos EPGs existentes
* Coluna Actions
    * <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> ícone de edição para editar o EPG associado
    * <i data-lucide="square-minus" style="color: red; width: 18px;"></i> ícone de exclusão para remover o EPG associado
    * <i data-lucide="refresh-cw" style="color: RoyalBlue; width: 18px;"></i> ícone de atualização para atualizar manualmente o EPG associado
