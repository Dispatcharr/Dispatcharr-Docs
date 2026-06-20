## Usuários
Na página de Usuários você pode criar e gerenciar todos os usuários do Dispatcharr. Existem 3 tipos de usuários:

1. Admin
    * Tem acesso total no Dispatcharr
    * Login XC ativado apenas se uma Senha XC estiver definida para o usuário
2. Standard User
    * Tem acesso à interface do Dispatcharr, mas apenas às páginas Channels, TV Guide e Settings
        * Acesso à interface do Dispatcharr é concedido para todos os canais
    * Pode permitir acesso a todos os Channel Profiles ou restringir a um subconjunto
        * Restrições se aplicam apenas para acesso via XC
    * Em Settings, só pode alterar configurações de interface
    * Login XC ativado apenas se uma Senha XC estiver definida para o usuário
    * Opcionalmente oculta canais marcados como "Mature Content" nas configurações do usuário
    * Opcionalmente define limites de stream nas configurações do usuário
3. Streamer
    * Sem acesso à interface do Dispatcharr
    * Este nível de usuário é apenas para login XC
    * Opcionalmente oculta canais marcados como "Mature Content" nas configurações do usuário
    * Opcionalmente define limites de stream nas configurações do usuário

!!! note
    * Os padrões de EPG de cada usuário podem ser definidos na aba "EPG Defaults" daquele usuário, permitindo especificar quantos dias passados e futuros de dados de EPG incluir
    * Na aba `API & XC` do usuário, você pode definir as seguintes opções
        * XC Password - (deixe em branco para sem acesso XC)
        * Output Format Override - Sobrescreve o formato de saída padrão do sistema para este usuário. Limpe para usar o padrão do sistema
        * Output Profile Override - Perfil de transcodificação pré-entrega aplicado aos streams para este usuário. Limpe para não usar transcodificação
        * Allowed IPs - Restringe todo o acesso para este usuário por IP. Deixe vazio para herdar as configurações globais

## Gerenciador de Logos
Na página do Gerenciador de Logos você pode enviar e gerenciar logos.
!!! info
    O Dispatcharr também escaneará automaticamente `/data/logos` para arquivos existentes

## Configurações

### Configurações de Interface
* Table Size - Defina o tamanho das linhas de canal em "Channels"
* Pin Table Headers - Alterna se deve manter os cabeçalhos da tabela visíveis ao rolar
* Time format - Defina a exibição do horário para formato de 12 horas ou 24 horas
* Date format - Defina a exibição de datas para Dia/Mês/Ano ou Mês/Dia/Ano
* Time Zone - Defina seu fuso horário preferido
* Web Player Output Profile - Perfil de saída aplicado ao pré-visualizar streams no player do navegador
* Navigation - Arraste e solte para reordenar os itens da barra de navegação lateral, ou clique no <i data-lucide="eye" style="color: LightGray; width: 18px;"></i> para alternar a visibilidade
    * System não pode ser ocultado
    * Clique no botão `Reset to Default` na parte inferior da seção Navigation para restaurar os padrões

### DVR
* Enable Comskip (remover comerciais após gravação) - Ativar ou desativar
* Custom comskip.ini path - Insira um caminho personalizado ou deixe em branco para usar os padrões integrados.
* Select comskip.ini - Clique neste botão para selecionar, enviar e usar um comskip.ini personalizado no Dispatcharr
* Start early (minutes) - Comece a gravar este número de minutos antes do início agendado.
* End late (minutes) - Continue gravando este número de minutos após o fim agendado.
* TV Path Template - Suporta `{show}`, `{season}`, `{episode}`, `{sub_title}`, `{channel}`, `{year}`, `{start}`, `{end}`. Use especificadores de formato como `{season:02d}`. Caminhos relativos ficam sob seu diretório de biblioteca.
* TV Fallback Template - Template usado quando um episódio não tem temporada/episódio. Suporta `{show}`, `{start}`, `{end}`, `{channel}`, `{year}`.
* Movie Path Template - Suporta `{title}`, `{year}`, `{channel}`, `{start}`, `{end}`. Caminhos relativos ficam sob seu diretório de biblioteca.
* Movie Fallback Template - Template usado quando os metadados do filme estão incompletos. Suporta `{start}`, `{end}`, `{channel}`.

!!! note 
    <span id="recording-location"></span>[<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#recording-location) As gravações são salvas na pasta `/data/recordings` de acordo com suas configurações de template. Você pode querer usar bind mounts do docker compose para salvar gravações em um local diferente no seu host

    !!! example
        ```yaml
        volumes:
          - dispatcharr_data:/data
          - host_path/media:/data/recordings
        ```

### Configurações de Stream
* Default User-Agent - Defina o User-Agent padrão
* Default Stream Profile - Defina o Perfil de Stream padrão
* Default Output Format - Formato do contêiner usado ao fazer proxy de streams. MPEG-TS é amplamente compatível com players de mídia e dispositivos; fMP4 tem melhor suporte para codecs modernos como AV1 e é preferido por alguns clientes mais recentes
* HDHR Default Output Profile - Um perfil de saída que é aplicado a todas as URLs de stream HDHR por padrão (pode ser sobrescrito modificando a URL de saída HDHR). Quando limpo, os streams são servidos como estão (pass-through)
* M3U Hash Key - Defina como fazer o hash do seu M3U. Isso afeta a limpeza de streams obsoletos.
    * A configuração padrão faz hash na URL. As opções disponíveis incluem:
        * Name
        * URL - Para contas XC, o hash do stream usa o stream_id estável em vez da URL ao fazer o hash, garantindo que streams XC mantenham sua identidade e associações de canal mesmo quando as credenciais da conta ou URLs do servidor mudam
        * TVG-ID
        * M3U ID
        * Group
    * O stream original desaparecerá do Dispatcharr de acordo com sua configuração de Stale Stream Retention (days) para sua conta M3U
    !!! note
        Certifique-se de clicar no botão `Save` após fazer quaisquer alterações na M3U Hash Key.
    !!! example
        Seu provedor muda regularmente os nomes de certos streams PPV, mas você tem canais configurados para esses streams e não quer que o stream seja excluído devido à limpeza de streams obsoletos. Como o provedor está mudando o nome do stream, mas não a URL ou TVG-ID, você define sua chave de hash M3U para apenas `URL` e `TVG-ID`

### Configurações do Sistema
* Maximum System Events - Configure quantos eventos do sistema (início/parada de canal, buffering, etc.) manter no banco de dados (mínimo: 10, máximo: 1000). Os eventos são exibidos na página Stats.
* Preferred Region - Defina sua região preferida
* Auto Import Mapped Files - Ativar/desativar importação automática de arquivos M3U ou dados xml de EPG de /data/epgs e/ou /data/m3us
    
### Segurança de Conexão
Exibe o status atual de criptografia TLS para conexões Redis e PostgreSQL. Esta seção é visível apenas no [modo de implantação modular](/Dispatcharr-Docs/installation/#modular-deployment).

* **Encryption** - Se o TLS está ativado para a conexão
* **Server Verification** (Redis) / **Verification Mode** (PostgreSQL) - Se a identidade do servidor é verificada usando um certificado CA
* **Mutual TLS** - Se o Dispatcharr autentica no servidor usando um certificado de cliente

!!! note
    Segurança de Conexão é somente leitura. O TLS é configurado via variáveis de ambiente no arquivo docker compose. Consulte [Segurança de Conexão](/Dispatcharr-Docs/advanced/#connection-security) na seção Avançado para detalhes de configuração.

### User-Agents
No contexto de IPTV, um user agent é uma string de texto que identifica o aplicativo cliente (ex.: um player como Kodi ou VLC) ao servidor IPTV. Está incluído nos cabeçalhos HTTP das requisições enviadas pelo cliente ao servidor, informando o servidor sobre o tipo de dispositivo e software usado para acessar o stream IPTV. User-Agents padrão do Dispatcharr estão disponíveis para VLC, Chrome e TiviMate.

* Adicione seu próprio User-Agent clicando no botão "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Add User-Agent" na página de Configurações
    * Name - um nome para seu user-agent
    * User-Agent - O texto para incluir na string do seu user-agent
    * Description - (Opcional) uma descrição do user-agent para seu próprio uso

### Perfis de Stream
| Perfil de Stream | [Suporte a Proxy <br>(buffer, suporte VPN, etc.)](/Dispatcharr-Docs/system/#proxy-settings) | [Suporte a streams<br> de fallback](/Dispatcharr-Docs/channels/#fallback-streams) | [Suporte a stats<br> de stream](/Dispatcharr-Docs/stats/#stats) | Recursos do sistema |
| ---------------- | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-------------------: |
| ffmpeg           | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | Baixo                 |
| Proxy            | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | Muito baixo           |
| Redirect         | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | Muito baixo           |
| streamlink       | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | Baixo                 |
| VLC              | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | Baixo                 |
| Custom ffmpeg    | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | Baixo a Muito Alto    |
| Custom VLC       | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | Baixo a Muito Alto    |
| yt-dlp           | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | Baixo                 |

!!! note
    <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> = Suporte completo
    <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i> = Suporte parcial
    <i data-lucide="square-x" style="color: red; width: 18px;"></i> = Sem suporte

* Existem 5 perfis de stream padrão com a capacidade de criar seus próprios perfis personalizados
    * ffmpeg - O Dispatcharr fará proxy de streams via ffmpeg. Nenhuma transcodificação ocorre com o perfil de stream ffmpeg padrão, ele apenas faz remux dos streams. Usa mais recursos do sistema que o proxy
    * Proxy - Faz proxy dos streams originais, permitindo que você use os recursos do Dispatcharr (streams redundantes por canal), e adiciona um leve buffer para ajudar na estabilidade do stream. Usa menos recursos do sistema que o ffmpeg.
        
        !!! note
            O Proxy faz fallback para o perfil de stream ffmpeg padrão se o stream de origem não for mpegts
            
    * Redirect - Redireciona a URL original do stream M3U para o seu cliente. Não há proxy com este perfil
    * streamlink - Para streams personalizados baseados nos serviços suportados pelo [streamlink](https://streamlink.github.io/)
    * VLC - O Dispatcharr fará proxy de streams via VLC. Nenhuma transcodificação ocorre com o perfil de stream VLC padrão, ele apenas faz remux dos streams. Usa mais recursos do sistema que o proxy
* Perfis de Stream Personalizados - crie seu próprio perfil de stream personalizado clicando no botão "Add Stream Profile" na página de Configurações
    * Name - um nome para seu perfil de stream
    * Command - FFmpeg, Streamlink, VLC, yt-dlp, ou Custom
    * Custom Command (apenas para Custom) - Insira o nome do executável (ex.: ffmpeg) ou o caminho completo (ex.: /usr/local/bin/mycmd)
    * Parameters - Defina seus parâmetros personalizados para [FFmpeg](https://ffmpeg.org/ffmpeg.html), [Streamlink](https://streamlink.github.io/cli.html), [VLC](https://wiki.videolan.org/VLC_command-line_help/) ou [yt-dlp](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#output-template)
    * User-Agent - Defina o user-agent padrão para este perfil de stream

### Perfis de Saída
Os perfis de saída pegam a saída do perfil de stream e transcodificam para qualquer cliente que solicitar um perfil de saída. Permite personalizar a saída do stream via URL HDHR, URL M3U e/ou por usuário XC. Um processo de transcodificação é executado por par (canal, perfil) ativo e todos os clientes solicitantes compartilham o buffer de saída resultante.

!!! note "Caso de uso comum"
    Um perfil que converte áudio AC3 para AAC para clientes de navegador e mobile enquanto o stream nativo (AC3 intacto) continua servindo Plex/Emby/Jellyfin.

Ao contrário dos perfis de stream, os perfis de saída precisam usar `pipe:0` como entrada e `pipe:1` como saída nos parâmetros do ffmpeg. A saída deve estar no formato MPEG-TS (`-f mpegts`).

!!! example
    `-i pipe:0 -c:v libx264 -b:v 2000k -vf scale=-2:720 -c:a copy -f mpegts pipe:1`

### Acesso à Rede
Permite restringir o acesso ao Dispatcharr por faixa CIDR. Você pode inserir múltiplas faixas CIDR separadas por vírgulas. 0.0.0.0/0 permite todos os IPs
!!! example
    | Faixa CIDR     | Número de IPs | Exemplo de intervalo            |
    | -------------- | :-----------: | ----------------------------- |
    | 192.168.1.0/32 | 1             | 192.168.1.0 (IP único)         |
    | 192.168.1.0/24 | 256           | 192.168.1.0 - 192.168.1.255   |
    | 192.168.1.0/16 | 65.536        | 192.168.0.0 - 192.168.255.255 |
    
* M3U / EPG Endpoints - Limita o acesso às URLs M3U, EPG e HDHR (configuração padrão permite acesso apenas em redes locais)
* Stream Endpoints - Limita o acesso à rede para URLs de stream, incluindo URLs de stream XC
* XC API - Limita o acesso à API XC
* UI - Limita o acesso à interface do Dispatcharr
    
!!! tip
    Para bloquear totalmente o acesso para qualquer um dos itens acima, use o endereço `127.0.0.1/32` (NÃO use para UI!)
    
    
### Configurações de Proxy
Estas configurações afetam todos os perfis de stream com exceção do redirect

* Buffering Timeout - Tempo máximo (em segundos) para esperar buffering antes de trocar de stream
* Buffering Speed - Limiar de velocidade abaixo do qual o buffering é detectado (1.0 = velocidade normal)
* Buffer Chunk TTL - Tempo de vida para chunks de buffer em segundos (por quanto tempo os dados do stream são armazenados em cache)
* Channel Shutdown Delay - Atraso em segundos antes de desligar um canal após o último cliente se desconectar
* Channel Initialization Grace Period - Período de carência em segundos durante a inicialização do canal
* New Client Buffer (seconds) - Segundos de buffer recebido para começar atrás do ao vivo quando um novo cliente se conecta (0 = começa no ao vivo). Nota: este é o tempo de recebimento do chunk, não a duração do vídeo

### Backup e Restauração
Criar, agendar e restaurar backups

* Schedule backups - Ative para definir uma programação regular de backups
* Advanced (Cron Expression) - Ative para definir uma expressão cron para backups agendados. Expressões cron permitem controle mais granular sobre as programações de backup.

    !!! examples
        `0 3 * * *` - Todos os dias às 3:00 da manhã
        `0 2 * * 0` - Todo domingo às 2:00 da manhã
        `0 */6 * * *` - A cada 6 horas
        `30 14 1 * *` - Dia 1 de cada mês às 14:30
        
* Retention - O número de backups a manter. O backup mais antigo será excluído quando um novo backup for criado que exceda este número. Defina como 0 para reter todos os backups antigos.

### Limites de Usuário
* Terminate on Limit Exceeded - Marque para ativar limites de stream do usuário com base nos critérios abaixo
* Prioritize Single Client Channels - preferir liberar streams em canais que apenas aquele usuário está assistindo
* Ignore Same-Channel Connections - contar múltiplas conexões ao mesmo canal ao vivo como um stream para o limite
* Terminate Oldest - Marque para priorizar a finalização do stream mais antigo quando os limites forem excedidos. Desmarcado prioriza o stream mais recente
