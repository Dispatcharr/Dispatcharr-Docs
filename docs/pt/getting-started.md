# Primeiros Passos

O Dispatcharr pode ser instalado usando Docker em várias plataformas, incluindo Windows, macOS, Proxmox e Unraid. Este guia fornece instruções detalhadas para cada método.

## Instalação

Consulte o [guia de instalação](installation.md).

---

## Inicialização

Após a instalação e inicialização, abra um navegador e acesse `http://{seu_ip_aqui}:9191`
Crie sua conta de usuário inserindo um nome de usuário e senha que você lembrará. Opcionalmente, você pode adicionar um endereço de e-mail.
!!! note
    Endereços de e-mail atualmente não são utilizados, mas podem ser usados em versões futuras.

---

## Adicionando M3U e EPG
1. Adicione seu primeiro M3U clicando no botão `Add M3U` no lado direito sob "Getting started".
2. Isso o levará ao M3U & EPG Manager (também acessível pela barra de navegação à esquerda).
??? info "Captura de tela" 
    ![Getting started](assets/getting_started.png)

1. Clique no botão `Add` sob M3U Accounts para adicionar um M3U
2. Clique no botão `Add EPG` sob EPGs para adicionar um guia de programação

??? info "Captura de tela"
    ![M3U & EPG Manager](assets/m3u_epg_manager.png)
	
=== "M3U"
	- Insira um nome para sua Conta M3U
    - Escolha o tipo de conta (Xtream Codes ou Standard M3U) e insira a URL (se estiver usando Xtream Codes, insira o nome de usuário e senha associados)
	- Opcionalmente, você pode definir um número máximo de streams simultâneos permitidos, ou deixar em 0 para ilimitado.
	- Clique em `Save`.
    ??? info "Captura de tela"
	    ![Adding M3U](assets/adding_m3u.png)
	- Clique no ícone de edição <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> correspondente da conta M3U recém-adicionada
	    - Clique no botão `Groups` e selecione quais grupos você gostaria de adicionar, depois clique em `Save and Refresh`
	- Dependendo do tamanho do seu M3U, pode levar algum tempo para carregar.	

	
=== "EPG"
    - Adicione um guia de programação clicando no botão `Add EPG` sob a seção EPGs.
    - Insira um nome para seu EPG, depois insira a URL e, se necessário, a chave de API.
    - Escolha o tipo de fonte, depois clique em "Submit".
    - Dependendo do tamanho do seu EPG, pode levar algum tempo para carregar.
    ??? info "Captura de tela"
	    ![Adding EPG](assets/adding_epg.png)

---

### Criando seu primeiro canal

- Vá para a tela principal de Channels na barra de navegação.
- Se um M3U foi adicionado e escaneado com sucesso, você deve ver uma lista de streams no lado direito da página sob "Streams".
- Encontre um stream na lista, ou pesquise um digitando no cabeçalho da coluna "Name".
- Pressione o botão <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> "Create New Channel" para adicionar o stream a um novo canal.
??? info "Captura de tela" 
    ![Adding a channel](assets/adding_channel.png)
- Se quiser adicionar um stream de backup de um provedor diferente, encontre o stream correspondente na lista de streams e pressione o botão <i data-lucide="list-plus" style="color: RoyalBlue; width: 18px;"></i> "Add to Channel" sob a coluna "Actions"

---
	
### Configuração de Reprodução de Mídia
#### Jellyfin
##### Adicionar fonte de TV
- O Jellyfin pode aceitar o formato HDHR ou M3U.
- No Dispatcharr, navegue até a página "Channels" e clique nos botões HDHR ou M3U no topo da página, e copie a URL fornecida.
=== "HDHR"
    ??? info "Captura de tela"
        ![Find HDHR URL](assets/find_hdhr_url.png)
	
=== "M3U"
    ??? info "Captura de tela"
        ![Find M3U URL](assets/find_m3u_url.png)

- Navegue até sua página do Jellyfin e clique no Ícone do Painel Admin para gerenciar seu servidor Jellyfin.
- Clique em "Live TV" sob a seção Live TV, depois no botão '+' ao lado de "Tuner Devices".
??? info "Captura de tela"
    ![Jellyfin LiveTV Setup Tuner](assets/jellyfin_livetv_setup_tuner.png)
- Em 'Tuner Type', escolha HD Homerun se estiver usando a URL HDHR, ou M3U Tuner se estiver usando a URL M3U do Dispatcharr.
- Cole a URL e salve.
!!! note
    Se estiver adicionando como M3U, deixe o limite de streams simultâneos definido como "0", pois os limites de stream serão gerenciados pelo Dispatcharr.
##### Adicionar Fonte de Dados do Guia
- Para adicionar dados do guia do Dispatcharr, navegue até a página "Channels" do Dispatcharr, clique no botão EPG no topo da página e copie a URL fornecida.
??? info "Captura de tela"
    ![Find EPG URL](assets/find_epg_url.png)
- Na página de configurações de Live TV do Jellyfin, clique no '+' ao lado de "TV Guide Data Providers".
??? info "Captura de tela"
    ![Jellyfin Add EPG](assets/jellyfin_add_epg.png)
- Escolha 'XMLTV' e cole a URL
- Os dados de EPG serão mapeados automaticamente.

---

#### Plex

- O Plex aceita o formato HDHR e pode encontrar unidades HDHR automaticamente na maioria das vezes.
- No Dispatcharr, navegue até a página "Channels" e clique no botão HDHR no topo da página, e copie a URL fornecida.
??? info "Captura de tela" 
    ![HDHR URL](assets/find_hdhr_url.png)
- Navegue até sua página do Plex e clique no ícone de Configurações para gerenciar seu servidor Plex.
- Role até `Manage` e clique em `Live TV & DVR`, depois `Set Up Plex Tuner`.
- O Plex deve encontrar automaticamente sua instância do Dispatcharr, mas se não encontrar, clique em `Don't see your HDHomeRun device? Enter its network address manually` e insira a URL HDHR que você copiou do Dispatcharr e pressione `Connect`.
??? info "Captura de tela" 
    ![Plex Live TV Automatic](assets/add_hdhr_plex.png){style="height:70vmin"}
	
- O Plex fornecerá o EPG deles se suportar seu país e código postal. Se eles não fornecerem EPG para você ou se quiser usar o seu próprio, você pode adicionar o EPG do Dispatcharr.
!!! warning
    Observe que, se o EPG do Plex não existir para sua região, você será obrigado a fornecer o seu próprio antes de continuar.

??? info "Captura de tela"
    ![Plex Add EPG](assets/add_epg_plex.png){style="height:70vmin"}

- Agora você pode mapear o EPG para os canais se algum não foi correspondido automaticamente.
??? info "Captura de tela"
    ![Map EPG Plex](assets/map_epg_plex.png){style="height:70vmin"}
- Pressione `Continue` e o Plex carregará os canais e dados de EPG
!!! note "Logos faltando?"
    Adicione `?cachedlogos=false` ao final do seu EPG para ignorar o cache de logos, que o Plex atualmente não suporta.
	
---

#### ChannelsDVR
- No Dispatcharr, navegue até a página "Channels" e clique no botão M3U no topo da página, e copie a URL fornecida.
??? info "Captura de tela"
	![Find M3U URL](assets/find_m3u_url.png)
	
- Navegue até a página do seu servidor ChannelsDVR e vá para "Settings" e selecione "Sources"
??? info "Captura de tela"
	![ChannelsDVR Select Sources](assets/channelsdvr_sources.png)
	
- Em Live TV pressione o botão verde "Add Source"
??? info "Captura de tela"
	![ChannelsDVR Add Source](assets/channelsdvr_addsource.png)
	
- No pop-up escolha Custom Channels
??? info "Captura de tela"
	![ChannelsDVR Custom Channels](assets/channelsdvr_customchannels.png)

- No menu Custom Channels use as seguintes opções:
    - Nickname: Adicione um nome para seu M3U
    - Stream Format: MPEG-TS
    - Source: Use URL e cole o link M3U do Dispatcharr
    - Options: 
	    - Refresh URL daily
	    - Prefer channel-number from M3U
		- Prefer channel logos from M3U se quiser usar os logos exibidos/gerenciados no Dispatcharr
		- No Stream Limit (o Dispatcharr gerencia os limites de stream)
    - XMLTV Guide Data:
        - Se você definiu um Gracenote ID em cada canal e quer que o ChannelsDVR construa um guia completo de 14 dias usando os dados deles, não adicione um guia e pressione Save.
        - Se quiser usar os Dados do Guia do Dispatcharr, coloque o link EPG do Dispatcharr, selecione a frequência de atualização e pressione Save.
		??? info "Captura de tela"
	        ![ChannelsDVR Custom Channels options](assets/channelsdvr_customchannels_2.png)
		
---

#### Emby
##### Adicionar fonte de TV
- O Emby pode aceitar o formato HDHR ou M3U.
- No Dispatcharr, navegue até a página "Channels" e clique nos botões HDHR ou M3U no topo da página, e copie a URL fornecida.
=== "HDHR"
    ??? info "Captura de tela"
        ![Find HDHR URL](assets/find_hdhr_url.png)
	
=== "M3U"
    ??? info "Captura de tela"
        ![Find M3U URL](assets/find_m3u_url.png)
- Navegue até sua página do Emby e clique no ícone de Configurações para gerenciar seu servidor Emby.
- Clique em "Live TV", depois "Add TV source".
- Escolha HD Homerun se estiver usando a URL HDHR, ou M3U se estiver usando a URL M3U do Dispatcharr.
- Cole a URL e salve.
!!! note
    Se estiver adicionando como M3U, deixe o limite de streams simultâneos definido como "0", pois os limites de stream serão gerenciados pelo Dispatcharr.
##### Adicionar Fonte de Dados do Guia
- Você pode usar os dados do guia fornecidos pelo Emby, dados do guia do Dispatcharr, ou uma combinação de ambos.
  - Para adicionar dados do guia fornecidos pelo Emby, clique em "Add Guide Data Source", escolha seu país, depois escolha "Emby Guide Data" sob Guide Data Source e clique em Next.
  - Siga as instruções fornecidas para encontrar os dados de canal que você precisa. Você pode adicionar múltiplas fontes de Emby Guide Data se necessário.
  - O Emby tentará corresponder canais aos dados do guia, mas pode ser necessário mapear manualmente os dados do guia para seus canais. Você pode fazer isso em "Live TV" > Channels, ou no gerenciador de metadados do Emby.
  - Para adicionar dados do guia do Dispatcharr, navegue até a página "Channels" do Dispatcharr, clique no botão EPG no topo da página e copie a URL fornecida.
  - Na página de configurações de Live TV do Emby, clique em "Add Guide Data Source", escolha seu país, depois escolha "XMLTV" Guide Data Source e clique em Next.
  - Os dados de EPG serão mapeados automaticamente.
