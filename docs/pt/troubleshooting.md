---
search:
  boost: 2 # (1)!
---

# Solução de Problemas
## Stream Failover não funciona
Verifique se o Stream Profile (padrão e/ou do canal) está definido como redirect. O failover de stream não funcionará com redirect

---

## Vocês vão implementar o recurso X?
Verifique solicitações de recursos existentes no nosso [discord](https://discord.gg/Sp45V5BcxU) ou [github](https://github.com/Dispatcharr/Dispatcharr/issues). Se ainda não foi solicitado, fique à vontade para solicitar.

---

## O Dispatcharr suporta aceleração de hardware?
Você pode usar aceleração de hardware com perfis de stream ffmpeg personalizados. Isso requer [mapear seu hardware](/Dispatcharr-Docs/advanced/#mapping-hardware) para o contêiner e configurar um [perfil de stream ffmpeg personalizado](/Dispatcharr-Docs/advanced/#custom-stream-profiles).

---

## Logos estão faltando no Plex
O Plex não suporta logos em cache. Adicione `?cachedlogos=false` ao final do seu EPG para ignorar o cache de logos.

* Se você enviou seus próprios logos para o Dispatcharr e quer servi-los ao Plex, eles só serão exibidos se servidos via https, o que requer a configuração de [proxy reverso](/Dispatcharr-Docs/advanced/#reverse-proxies)

---

## Como faço para saída via XC API?
* Deve haver pelo menos um usuário configurado com uma [senha XC](/Dispatcharr-Docs/system/#users)
* Para URL, use seu endereço IP e porta `http://{seu_ip_aqui}:9191`
* Username é o nome de usuário do seu usuário
* Password é a senha XC definida para o usuário

---

## Como ativo os logs de depuração?
* Adicione isso ao seu compose/variáveis de ambiente: `DISPATCHARR_LOG_LEVEL=debug`

---

## Recebi novas credenciais (ou URL) do meu provedor, o que devo fazer?

### Para tipos de conta M3U e Dispatcharr Versão < 0.19.0:
1. Faça um backup!
2. Remova URL de Settings >>> Stream Settings >>> M3U Hash Key
    1. Adicione todas as outras opções de hash
    2. Save
3. Uma vez que o re-hashing estiver concluído, altere as configurações na sua conta M3U
4. Atualize a conta
5. Uma vez que a atualização estiver concluída, reverta suas configurações de hash

### Para tipo de conta XC e Dispatcharr Versão >= 0.19.0
1. Altere as configurações da sua conta XC (URL, credenciais ou ambos)
2. Salve e atualize


---

## Alterei minhas configurações de rede e acidentalmente me bloqueei. Como posso redefinir?
1. Acesse o CLI do contêiner
2. cd para /app
3. Execute o seguinte comando: `python manage.py reset_network_access`

--- 

## Como posso fazer um backup do banco de dados?
Consulte [Backup e Restauração](/Dispatcharr-Docs/system/#backup-restore)

---

## Como posso proteger meu M3U com senha para compartilhar pela internet?
1. Configure seu proxy reverso conforme mostrado na [documentação](/Dispatcharr-Docs/advanced/#reverse-proxies)
2. No Dispatcharr em Settings > [Network Access](/Dispatcharr-Docs/system/#network-access), restrinja os M3U / EPG Endpoints apenas à sua rede local (exemplo: 192.168.1.0/24)
3. Configure um usuário com senha XC na página [Users](/Dispatcharr-Docs/system/#users) se ainda não o fez
4. Use o seguinte formato de link m3u para compartilhar com seus usuários: `https://hostname/get.php?username=XCUSERNAME&password=XCPASSWORD`
5. E este formato para epg: `https://hostname/xmltv.php?username=XCUSERNAME&password=XCPASSWORD`

---

## Por que há conexões aparecendo na página de stats do Dispatcharr quando ninguém está assistindo ou conectado?
Este é um problema complexo que a equipe do Dispatcharr tem tentado resolver, no entanto, algumas causas foram identificadas:

* Um bug ou erro no cliente que não fecha a conexão com o Dispatcharr
* Passar o Dispatcharr por um túnel Cloudflare. Alguns dos nossos usuários acharam útil alterar as seguintes configurações do Cloudflare:
    * Idle Connection Expiration - 10 segundos
    * Max TCP Keepalives - 3 segundos
    * TCP Keepalive Interval - 10 segundos
    * No Dispatcharr, defina o [Channel Shutdown Delay](/Dispatcharr-Docs/system/#proxy-settings) para 3 segundos

Se você consegue reproduzir este problema de forma confiável e acredita que não é devido a uma das razões listadas acima, por favor reproduza-o capturando [logs de depuração](/Dispatcharr-Docs/troubleshooting/#how-do-i-turn-on-debug-logs) e envie uma issue no nosso [Github](https://github.com/Dispatcharr/Dispatcharr) ou compartilhe com a equipe no nosso canal [Discord](https://discord.gg/Sp45V5BcxU)

---

## Como atualizo meu contêiner (usando compose)?
1. Abra um terminal no host
2. Execute o seguinte comando: `docker compose -f /caminho/para/docker-compose.yml pull`
3. Execute o seguinte comando: `docker compose -f /caminho/para/docker-compose.yml up -d`

---

## Estou recebendo uma mensagem sobre suporte de hardware para NumPy. O que devo fazer?
Se você está executando um Hypervisor baseado em QEMU/KVM (como Proxmox), altere o tipo de hardware da VM para "Host" ou para "x86_v2" em vez de "q35"

Se você está executando em hardware antigo (processador de ~2009 ou mais antigo), adicione o seguinte na seção "environment" do seu docker compose:
`      - USE_LEGACY_NUMPY=true`

---

## Como acesso o VOD?
Para usar Video-on-Demand (VOD), você deve importar sua conta IPTV *para dentro* do Dispatcharr com o [tipo de conta](/Dispatcharr-Docs/m3u-epg-manager/#m3u-accounts) e credenciais Xtream Codes. Algumas fontes referem-se a isso como "API" também.

Para usar VOD em um cliente/app de terceiros, você também deve exportar *para fora* do Dispatcharr usando credenciais Xtream Codes. (veja: [Como faço para saída via XC API?](/Dispatcharr-Docs/troubleshooting/#how-do-i-output-to-xc-api))

As credenciais XC do Dispatcharr podem ser configuradas na aba Users. Crie/edite um usuário novo/existente e insira uma senha no campo rotulado XC Password.

Se seu cliente/app suporta o uso de credenciais XC, ele pedirá uma API ou URL, nome de usuário e senha. Insira a URL que você usa para acessar o Dispatcharr (IP LAN:Porta ou proxy reverso), o nome de usuário da aba Users e a Senha XC criada para o usuário.

---

## Streams multicast não funcionam
Streams multicast requerem que o Dispatcharr seja executado em [modo de rede host](https://docs.docker.com/engine/network/drivers/host/) ou use [macvlan](https://docs.docker.com/engine/network/drivers/macvlan/).

Além disso, se múltiplas interfaces de rede estiverem disponíveis, você precisará especificar uma interface com um dos dois métodos seguintes:

1. Adicione o argumento `-localaddr [interface-ip]` a um perfil de stream ffmpeg personalizado
2. Anexe `?localaddr=[interface-ip]` ao argumento existente `-i {streamUrl}` em um perfil de stream ffmpeg personalizado

!!! example "Exemplo 1"
    `-localaddr 192.168.86.1 -i {streamUrl} -user_agent {userAgent} -i {streamUrl} -c copy -f mpegts pipe:1`

!!! example "Exemplo 2"
    `-i {streamUrl}?localaddr=192.168.86.1 -user_agent {userAgent} -i {streamUrl} -c copy -f mpegts pipe:1`
    
---

## Como removo todo o VOD do Dispatcharr?
1. Na página [M3U & EPG manager](/Dispatcharr-Docs/m3u-epg-manager/#m3u-epg-manager), clique no ícone de edição <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> para qualquer conta que forneça VOD (apenas tipos de conta XC podem fornecer)
2. Ative `Enable VOD Scanning`
3. Clique no botão `Groups`
4. Nas abas `VOD - Movies` e `VOD - Series`, desmarque todos os Grupos
5. Clique em `Save and Refresh`
6. Após a atualização ser concluída, desative a opção `Enable VOD Scanning`
7. Repita para outras contas se necessário

---

## Como crio e defino um perfil personalizado global no Dispatcharr?

1. Na interface do Dispatcharr, selecione Settings no lado esquerdo da tela.
2. Siga estes passos:
    1. Clique em Streaming Profiles.
    2. Clique em Add Stream Profile.
    3. Na seção Name, forneça um nome único.
    4. Na seção Command, insira ffmpeg, streamlink ou cvlc.
    5. Na seção Parameters, insira os parâmetros desejados.
    > :memo: **Nota:** Perfis ffmpeg da comunidade podem ser encontrados na seção ⁠🔀・stream-profiles do [discord](https://discord.gg/Sp45V5BcxU) do Dispatcharr
    6. No campo User-Agent, deixe em branco.
    7. Clique em Submit para salvar suas alterações.
4. Selecione Stream Settings, depois use o menu suspenso à direita sob Default Stream Profile.
5. Selecione o perfil de stream recém-criado no Passo 2.
6. Clique em Save.

---

## Uso do Auto Channel Sync

O auto channel sync é recomendado para grupos de eventos onde os nomes dos canais são atualizados para mostrar o nome do evento. O uso em grupos de canais regulares pode parecer um atalho para adicionar rapidamente todos os seus canais, mas você perde a capacidade de personalizar o canal (nome, logo, EPG, streams de failover, etc.), pois a próxima atualização apagará todas as alterações.

Se você quer adicionar rapidamente todos os canais de um grupo regular, filtre pelo grupo na tabela de streams, selecione todos, depois pressione `Create Channels` no topo.

---

## Por que contas XC criadas no Dispatcharr mostram expiração de 90 dias e como posso corrigir isso?
Não há necessidade de corrigir ou alterar isso. A expiração de 90 dias é perpétua, renovando a cada atualização.

---

## Onde as gravações do DVR são salvas?
As gravações são salvas na pasta `/data/recordings` de acordo com suas [configurações de template](/Dispatcharr-Docs/system/#dvr). Você pode querer usar bind mounts do docker compose para salvar gravações em um local diferente no seu host

!!! example
    ```yaml
    volumes:
      - dispatcharr_data:/data
      - host_path/media:/data/recordings
    ```
