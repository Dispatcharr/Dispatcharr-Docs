Na página de canais você pode criar e gerenciar todos os canais adicionados, streams e links externos

## Channels	
* Escolha o "Channel Profile" clicando no menu suspenso sob o cabeçalho Channels. O perfil padrão é "All"
    * Crie um novo Channel Profile clicando no ícone <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> ao lado do menu suspenso
    * Channel Profiles podem ser usados para criar subconjuntos da sua lista de canais. Cada perfil terá seu próprio link HDHR, M3U e EPG gerado. Ao criar usuários XC, você pode selecionar quais Channel Profiles cada usuário tem acesso
    * Para remover canais de um Channel Profile, clique no ícone de toggle correspondente na coluna <i data-lucide="scan-eye" style="color: white; width: 18px;"></i> para desativá-lo
        * Para toggle em massa, use as caixas de seleção dos canais para selecionar múltiplos canais, depois clique no ícone de toggle
    * Para excluir um Channel Profile, clique no menu suspenso e selecione o ícone <i data-lucide="square-minus" style="color: Red; width: 18px;"></i> ao lado do Channel Profile que deseja excluir
    * Para duplicar um Channel Profile, clique no menu suspenso e selecione o ícone <i data-lucide="copy" style="color: LimeGreen; width: 18px;"></i> ao lado do Channel Profile que deseja duplicar. Uma caixa de diálogo será aberta para você nomeá-lo
    * Para renomear um Channel Profile, clique no menu suspenso e selecione o ícone <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> ao lado do Channel Profile que deseja renomear
* Clique no ícone <i data-lucide="funnel" style="color: white; width: 18px;"></i> Filter para usar a filtragem avançada
    * Hide/Show Disabled - Selecionável apenas quando um Channel Profile está ativo. Alterne para ocultar/exibir canais que estão desativados para o perfil selecionado
    * Only Empty Channels - Marque a caixa para mostrar apenas canais sem streams associados (linhas de canal são exibidas com tom vermelho)
    * Has Stale Streams - Marque a caixa para mostrar apenas canais com streams obsoletos (linhas de canal são exibidas com tom laranja)
    * Has Overrides - Marque a caixa para mostrar apenas canais com sobrescritas. A célula de nome de cada linha renderiza um ícone de lápis amarelo quando as sobrescritas estão ativas (tooltip lista os nomes dos campos sobrescritos)
    * Active Only - Marque a caixa para mostrar apenas canais ativos
    * Hidden Only - Marque a caixa para mostrar apenas canais ocultos
    * Show All - Marque a caixa para mostrar todos os canais
* Pesquise nomes de canais clicando no cabeçalho da coluna "Name"
* Filtre por EPG clicando no cabeçalho da coluna "EPG"
* Pesquise por grupo de canais clicando no cabeçalho da coluna "Group"
* Edite um canal clicando no ícone <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> "Edit Channel" correspondente sob a coluna "Actions"
    * Channel Name - Edite o nome do seu canal
    * Channel # - Edite o número do canal
    * Channel Group - Edite o grupo do seu canal. Se quiser criar e adicionar a um novo grupo, clique no ícone <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i>
    * Logo - Escolha um logo, envie um novo ou use o logo do EPG atribuído
    * TVG-ID - Edite o campo TVG-ID do seu canal. O auto-match tenta corresponder o guia de programação a este campo
    * Gracenote StationID - Edite o ID Gracenote do seu canal. Estes são tipicamente números de 5 ou 6 dígitos que o Gracenote (um provedor comum de EPG) pode usar para identificar canais de TV.
    * EPG - Clique na caixa para escolher manualmente uma entrada de EPG, clique em "Use Dummy" para atribuir uma entrada de EPG fictícia, ou clique em "Auto Match" para tentar o auto-match de EPG
    * Stream Profile - Clique aqui se quiser usar algo diferente do perfil de stream padrão para este canal
    * User Level Access - Defina quais tipos de usuário podem acessar este canal via saída Xtream Codes
    * Mature Content - Alterne para definir um canal como conteúdo adulto. Conteúdo adulto pode ser ocultado de usuários não-administradores via toggle "Hide Mature Content" nas [configurações de usuário](/Dispatcharr-Docs/system/#users)
    * Hidden - Alterne para excluir um canal de todas as saídas (HDHR, M3U, EPG, XC) sem excluí-lo
* Exclua um canal clicando no ícone <i data-lucide="square-minus" style="color: red; width: 18px;"></i> "Delete channel" correspondente sob a coluna "Actions"
* Pré-visualize (reproduza) um canal clicando no ícone <i data-lucide="circle-play" style="color: Limegreen; width: 18px;"></i> "Preview channel" correspondente sob a coluna "Actions"
* Alterne as caixas de seleção dos canais para usar os botões de edição em massa acima da grade nos canais selecionados, ou para adicionar streams aos canais
    * "<i data-lucide="square-pen" style="color: white; width: 18px;"></i> Edit" para editar canais em massa <span id="bulk-editor"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#bulk-editor)
        * Channel Name - Localizar e substituir (compatível com regex) dentro do nome do canal em todos os canais selecionados
        * EPG Operations
            * Set Names from EPG - define o nome do canal para todos os canais selecionados para corresponder ao nome do canal do EPG atualmente atribuído
            * Set Logos from EPG - define o logo para todos os canais selecionados para corresponder ao logo do canal do EPG atualmente atribuído
            * Set TVG-IDs from EPG - define o TVG-ID para todos os canais selecionados para corresponder ao TVG-ID do canal do EPG atualmente atribuído
            * Assign Dummy EPG - define um [EPG fictício](/Dispatcharr-Docs/m3u-epg-manager/#epgs) ou limpa a atribuição de EPG para todos os canais selecionados
        * Channel Group - Define o grupo do canal para todos os canais selecionados
        * Logo - Define o logo para todos os canais selecionados
        * Stream Profile - Define o perfil de stream para todos os canais selecionados
        * User Level Access - Define o nível de acesso do usuário para todos os canais selecionados
        * Mature Content - Define o sinalizador de conteúdo adulto para todos os canais selecionados
    * "<i data-lucide="square-minus" style="color: white; width: 18px;"></i> Delete" para excluir canais em massa
    * "<i data-lucide="square-plus" style="color: white; width: 18px;"></i> Add" para adicionar canais em massa. Selecione múltiplos streams na tabela "Streams" para criar um novo canal para cada stream selecionado.
    * "<i data-lucide="ellipsis-vertical" style="color: white; width: 18px;"></i>" para ver opções adicionais de edição em massa
        * "<i data-lucide="pin-off" style="color: white; width: 18px;"></i> Pin Headers" para fixar os cabeçalhos das colunas para que fiquem visíveis mesmo ao rolar
        * "<i data-lucide="lock" style="color: white; width: 18px;"></i> Unlock for Editing" para desbloquear a tabela de canais, permitindo que os usuários editem rapidamente os campos do canal (nome, número, grupo, EPG, logo) diretamente na tabela sem abrir um modal. Isso também permite reordenar canais (e números de canal associados) com arrastar e soltar.
        * "<i data-lucide="arrow-down-0-1" style="color: white; width: 18px;"></i> Assign #s" para atribuir números de canal
        * "<i data-lucide="binary" style="color: white; width: 18px;"></i> Auto-Match" para corresponder automaticamente canais ao EPG
            * Modo de correspondência "Use default settings" - Recomendado para a maioria dos usuários. Lida com variações padrão de nomes de canais automaticamente
            * Modo de correspondência "Configure advanced options: - Adicione prefixos, sufixos ou strings personalizados para ignorar
                * Ignore Prefixes - Removidos do INÍCIO dos nomes dos canais (ex.: Prime:, Sling:, US:)
                * Ignore Suffixes - Removidos do FIM dos nomes dos canais (ex.: HD, 4K, +1)
                * Ignore Custom Strings - Removidos de QUALQUER LUGAR nos nomes dos canais (ex.: 24/7, LIVE)

                !!! note
                    Os nomes de exibição dos canais não são modificados. Essas configurações afetam apenas o algoritmo de correspondência. Para modificar nomes de canais, use o [editor em massa](/Dispatcharr-Docs/channels/#bulk-editor)

        * "<i data-lucide="settings" style="color: white; width: 18px;"></i> Edit Groups" para abrir o Gerenciador de Grupos
        
    * Clique no ícone <i data-lucide="list-plus" style="color: RoyalBlue; width: 18px;"></i> "Add to channel" sob a coluna Actions dos Streams para adicionar esse stream aos canais selecionados

* <span id="fallback-streams"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#fallback-streams) No Dispatcharr, um único canal pode ser composto por múltiplos streams. O sistema inicia a reprodução usando o primeiro stream listado no canal. De acordo com as [Configurações de Proxy](/Dispatcharr-Docs/system/#proxy-settings) configuradas, o Dispatcharr monitora buffering e, se detectado, troca automaticamente para o próximo stream do canal. Este processo de monitoramento e troca continua até que todos os streams sejam esgotados, garantindo qualidade de reprodução consistente.
* Para cada stream listado dentro de um canal, o Dispatcharr exibirá a fonte do stream conforme definido no M3U & EPG Manager, um link direto para o stream e uma opção para pré-visualizar o stream <i data-lucide="eye" style="color: LightSkyBlue; width: 18px;"></i> .
    * O Dispatcharr coleta estatísticas para cada stream desde que um [Perfil de Stream](/Dispatcharr-Docs/system/#stream-profiles) compatível seja usado. Uma vez capturadas, [estatísticas](/Dispatcharr-Docs/stats/#stats) como resolução de vídeo, quadros por segundo, formato do codificador de vídeo, formato de áudio, codec de áudio e taxa de bits do stream serão exibidas. Para cada stream capturado, clicar em 'Show Advanced Options' fornece ainda mais detalhes sobre a qualidade do stream de origem.
    
## Streams
* Crie um novo canal clicando no ícone <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> "Create New Channel" correspondente sob a coluna "Actions"
* Adicione um stream a um canal existente clicando no botão <i data-lucide="list-plus" style="color: RoyalBlue; width: 18px;"></i> "Add to Channel" correspondente sob a coluna "Actions"
* Pré-visualize (reproduza) um stream clicando no ícone <i data-lucide="ellipsis-vertical" style="color: LightSkyBlue; width: 18px;"></i> correspondente sob a coluna "Actions", depois pressione "Preview Stream"
* Alterne as caixas de seleção dos streams para usar os botões de edição em massa acima da grade nos streams selecionados
    * "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Create Channels" para criar um novo canal para cada stream selecionado
    * "<i data-lucide="square-minus" style="color: white; width: 18px;"></i> Delete" para excluir o(s) stream(s) selecionado(s)
* Clique no ícone <i data-lucide="funnel" style="color: white; width: 18px;"></i> Filter para usar a filtragem avançada
    * Only Unassociated - Mostrar apenas streams que atualmente não estão atribuídos a nenhum canal
    * Hide Stale - Ocultar streams obsoletos (não disponíveis desde a última atualização da conta M3U). Linhas de streams obsoletos serão destacadas com tom vermelho
* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Create Stream" - Criar um novo stream não associado a nenhum dos seus M3Us enviados
* <i data-lucide="ellipsis-vertical" style="color: White; width: 18px;"></i> (Table Settings) - Alternar colunas da tabela de Streams. Colunas disponíveis:
    * Name (clique no cabeçalho da coluna para pesquisar)
    * Group (clique no cabeçalho da coluna para pesquisar)
    * M3U (clique no cabeçalho da coluna para pesquisar)
    * TVG-ID (clique no cabeçalho da coluna para pesquisar)
    * Stats (passe o mouse para ver estatísticas adicionais)

## Links
A seção "Links" possui botões para ver e copiar os links externos necessários para um cliente

* <i data-lucide="tv-minimal" style="color: YellowGreen; width: 18px;"></i> <span style="color: YellowGreen;">HDHR</span> - Use este link para clientes que usam o formato HD Homerun
    * Opções avançadas - Estas opções modificarão a URL gerada, certifique-se de copiar a URL *após* fazer quaisquer alterações nas opções
        * Output Profile - Escolha um [perfil de saída](/Dispatcharr-Docs/system/#output-profiles) para sobrescrever o perfil de stream padrão para clientes que acessam streams com este link
* <i data-lucide="screen-share" style="color: SlateBlue; width: 18px;"></i> <span style="color: SlateBlue;">M3U</span> - Use este link para clientes que usam o formato M3U
    * Opções avançadas - Estas opções modificarão a URL gerada, certifique-se de copiar a URL *após* fazer quaisquer alterações nas opções
        * Use cached logos - Proxy de logos dos canais através do Dispatcharr
        * Direct stream URLs - Ignora o proxy do Dispatcharr; o cliente se conecta diretamente à fonte
        * TVG-ID Source - Valor usado como atributo tvg-id no M3U
        * Output Format - Formato do contêiner para streams incorporados neste M3U
        * Output Profile - Escolha um [perfil de saída](/Dispatcharr-Docs/system/#output-profiles) para sobrescrever o perfil de stream padrão para clientes que acessam streams com este link
* <i data-lucide="scroll" style="color: Gray; width: 18px;"></i> <span style="color: Gray;">EPG</span> - Use este link para fornecer ao seu cliente dados do guia de programação que correspondam aos seus canais
    * Opções avançadas - Estas opções modificarão a URL gerada, certifique-se de copiar a URL *após* fazer quaisquer alterações nas opções
        * Use cached logos - Proxy de logos dos canais através do Dispatcharr
        * TVG-ID Source - Valor usado para corresponder canais do EPG aos streams do M3U
        * Days forward - Limitar o EPG a este número de dias futuros; 0 retorna todos os dados disponíveis
        * Days back - Incluir este número de dias passados de dados do EPG (máximo 30); 0 retorna nenhum
