Para migrar de outros aplicativos de gerenciamento de IPTV.

## IPTV Editor

!!! warning
    Este método só é recomendado se você tiver apenas um provedor no IPTV Editor. Se tiver vários, será mais fácil começar do zero no Dispatcharr.

1. No Dispatcharr, navegue até `Settings` > `Stream Settings` > `M3U Hash Key`
    * Defina apenas como `URL`. Remova todas as outras clicando no pequeno X
    * Clique em `Save`
2. Exporte sua playlist do IPTV Editor via M3U
    * Playlist manager > Menu (seta pequena para baixo) > Show playlist info > Escolha Xtream API (no topo da janela pop-up) > Copie a URL do M3U aqui
3. No Dispatcharr, navegue até `M3U & EPG Manager`
4. Clique no botão verde `Add M3U` no canto superior direito
    * <b>Name</b>: O que você quiser. Muitas pessoas usam o nome do provedor para maior clareza
    * <b>URL</b>: Esta é a URL do Passo 2
    * <b>Account Type</b>: Standard
    * Deixe todo o restante como padrão por enquanto
5. Dê ao Dispatcharr alguns minutos para importar sua playlist M3U. Aguarde até que isso seja concluído antes de prosseguir
6. Se você estiver satisfeito em trazer os mesmos nomes de grupos de canais da sua configuração do IPTV Editor, pule para o passo 11
7. Navegue até `Channels` no Dispatcharr
8. Clique no <i data-lucide="ellipsis-vertical" style="color: white; width: 18px;"></i> (três pontos verticais) no canto superior direito da seção `Channels` (não a seção streams)
9. Clique em <i data-lucide="settings" style="color: white; width: 18px;"></i> Edit Groups
10. Crie grupos personalizados aqui para quaisquer grupos que você deseja trazer do IPTV Editor
    * Clique em <i data-lucide="square-plus" style="color: skyblue; width: 18px;"></i> <span style="color: skyblue">Add Group</span>, digite o nome e clique na caixa de verificação verde para salvar
11. Na tabela `Streams` à direita, ordene por grupo clicando no cabeçalho da coluna group. Você pode digitar neste campo para ordenar se não quiser percorrer a lista
    * Selecione todos os streams do seu Grupo 1, clique em <i data-lucide="square-plus" style="color: white; width: 18px;"></i> Create Channels. Selecione numeração personalizada de canal, começando com o Canal 1 para o seu primeiro grupo
12. Se você pulou anteriormente para o Passo 11, pule para o Passo 15
13. Na seção `Channels` (a tabela à esquerda), selecione todos os seus canais recém-criados e clique em <i data-lucide="square-pen" style="color: white; width: 18px;"></i> Edit no topo da tabela. No campo Channel Group, digite o grupo personalizado que você criou no Passo 9
    * Clique em `Submit`
14. Para cada grupo subsequente que você criar e/ou adicionar, escolha uma numeração personalizada de canal e certifique-se de que os números dos canais nunca se sobreponham. Então, se o seu primeiro grupo tem 37 canais, não comece o grupo 2 no Canal 25
    * É recomendável separar os grupos por uma margem maior, como Grupo 1 ficando com os canais 1-99, Grupo 2 com 100-199. Certifique-se de deixar espaço para expansão futura
    * Então, se o Grupo 1 tiver 300 canais, seja ainda mais generoso e faça 1-499. Depois 500-999. Não há desvantagem em ter números de canais super altos. Você não está realmente usando todos eles, apenas os separando para fins de organização
15. Navegue até `M3U & EPG Manager`
16. Clique no <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> (ícone de lápis amarelo) no seu M3U para editá-lo
17. Edite todos os campos na caixa de diálogo da Conta M3U para corresponder às configurações do seu Provedor de IPTV
    * <b>Name</b>: O que você quiser. Muitas pessoas usam o nome do provedor para maior clareza
    * <b>URL</b>: Substitua a URL do IPTV Editor pela URL M3U ou Xtream Codes (XC) do seu provedor
    * <b>Account Type</b>: Você pode continuar como Standard ou mudar para Xtream Codes (VOD só é importado ao usar Xtream Codes)
    * <b>Enable VOD Scanning</b>: Se quiser ativar a biblioteca VOD do seu provedor, ative esta opção
    * <b>Username/Password</b>: Substitua pelo nome de usuário e senha do seu provedor
    * <b>Max Streams</b>: Insira o número máximo de streams que seu provedor permite
        * Se você tiver múltiplas credenciais do mesmo provedor, pode clicar em Profiles na parte inferior desta janela para adicioná-las
    * Preencha o restante como preferir
    * Clique em Save.
18. Clique no ícone <i data-lucide="refresh-ccw" style="color: royalblue; width: 18px;"></i> (atualização azul) no seu M3U. Isso pode levar alguns minutos. Aguarde até que seja concluído antes de prosseguir
19. Para adicionar uma fonte de EPG, clique em <i data-lucide="square-plus" style="color: white; width: 18px;"></i> Add EPG e forneça a URL de EPG do seu provedor
20. Você migrou com sucesso do IPTV Editor para o Dispatcharr. Confira o [Discord](https://discord.gg/wfeqTRRJru) para suporte adicional
