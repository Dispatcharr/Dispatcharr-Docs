## Conexões
Na página de Conexões você pode criar e gerenciar webhooks orientados a eventos e execução de scripts

Clique em <i data-lucide="square-plus" style="color: White; width: 18px;"></i> New Connection para criar um novo webhook ou execução de script orientada a eventos

* Suporta múltiplos tipos de eventos incluindo:
    * Ciclo de vida do canal (start, stop, reconnect, error, failover)
    * Operações de stream (switch),
    * Eventos de gravação (start, end)
    * Atualizações de dados (EPG, M3U)
    * Atividade de cliente (connect, disconnect)
    * Eventos de segurança (login failed, EPG/M3U blocked)
    * Reprodução VOD (start, stop)

Os dados do evento estão disponíveis como variáveis de ambiente em scripts (com prefixo DISPATCHARR_), payloads POST para webhooks e payloads de execução de plugins

!!! info
    Scripts devem ser colocados em `data/scripts` e devem ter permissões de execução

??? example "Exemplo de Script (clique para ver)"
    ```python
    #!/usr/bin/env python3

    import requests
    import json
    import os
    import re

    webhook_url = ""

    message = ["Test event from Dispatcharr!"]

    for key, value in os.environ.items():
    #    if not re.search(r"DISPATCHARR_", key):
    #        continue

        key = key.replace("DISPATCHARR_", "").replace("_", " ").lower()
        message.append(f"{key} = {value}")

    # The data to be sent in the POST request
    # 'content' is the key for a basic message.
    # Please leave this thats how the project works!
    data = {
        "content": "\n".join(message)
    }

    # The headers to specify the content type
    headers = {
        "Content-Type": "application/json"
    }

    # Send the POST request
    response = requests.post(webhook_url, data=json.dumps(data), headers=headers)

    # Check if the request was successful
    if response.status_code == 204:
        print("Message sent successfully!")
    else:
        print(f"Failed to send message. Status code: {response.status_code}")
        print(response.text)
    ```

## Templates de Payload para Webhooks

Ao criar uma conexão webhook, você pode opcionalmente fornecer um **template de payload**. O template é renderizado com a [linguagem de template Django](https://docs.djangoproject.com/en/stable/ref/templates/language/) (o texto de ajuda menciona Jinja2, mas o motor é do Django). Variáveis do payload do evento são expostas diretamente no contexto do template — referencie-as como `{{ variable_name }}`.

Se o template renderizado for analisado como JSON válido, o Dispatcharr força `Content-Type: application/json` na requisição de saída. Caso contrário, a string renderizada é enviada via POST como está, usando quaisquer cabeçalhos que você definiu na conexão.

!!! warning
    Se você **deixar o template em branco**, o dict bruto do payload do evento é passado para `requests.post(..., data=<dict>)`, que o codifica como `application/x-www-form-urlencoded` (ex.: `channel_name=CNN&stream_name=...`). **Não** é enviado como JSON. Se você quer JSON, forneça um template — mesmo um trivial como `{{ payload|default:"" }}` também não funcionará; você deve renderizar o body você mesmo, ex.: `{"channel": "{{ channel_name }}"}`.

### Variáveis auto-injetadas (eventos com contexto de canal)

Qualquer evento que carrega um `channel_id` é enriquecido no momento do envio com os seguintes campos (obtidos do registro do canal, do stream atualmente em reprodução e do M3U/perfil no Redis):

| Variável | Descrição |
| --- | --- |
| `channel_name` | Nome de exibição do canal |
| `stream_name` | Nome do stream atualmente em reprodução |
| `stream_url` | URL upstream do stream atualmente em reprodução |
| `channel_url` | Alias de `stream_url` |
| `provider_name` | Nome da conta M3U que suporta o stream ativo |
| `profile_used` | Nome do StreamProfile aplicado ao stream ativo |

!!! warning "Valores falsy são removidos antes da renderização"
    Qualquer chave do payload cujo valor seja falsy sob a veracidade Python — `None`, `""`, `0`, `0.0`, `False`, `[]` vazio, `{}` vazio — é **excluída do payload antes do template ser renderizado**. Isso significa que campos numéricos e booleanos também podem desaparecer: ex.: `bytes_written=0` em `recording_end` ou `interrupted=False` estarão ambos ausentes, não presentes-com-zero. Se um campo pode estar ausente, proteja-o com um default: `{{ stream_name|default:"-" }}`. Caso contrário, uma variável indefinida será renderizada como uma string vazia e pode produzir JSON inválido.

!!! warning "Escape variáveis que vão dentro de strings JSON"
    O motor de template do Django faz escape HTML de `<`, `>`, `&`, `"`, `'` por padrão, mas **não** faz escape de barras invertidas ou quebras de linha. Isso significa:

    - **Uma URL com parâmetros de query `&`** renderizada como `"url": "{{ stream_url }}"` produz `"url": "http://host/?a=1&amp;b=2"` — o JSON é analisado corretamente, mas o receptor recebe uma URL com `&amp;` literal.
    - **Um `error_message` contendo quebra de linha ou barra invertida** (muito comum em texto de exceção) produz JSON inválido.

    O padrão seguro para qualquer variável que vai dentro de uma string JSON é o filtro `escapejs`, que faz escape de tudo que é perigoso em contexto de string JS/JSON (aspas, barras invertidas, quebras de linha, `<`, `>`, `&`) como sequências `\uXXXX`. A saída parece ruidosa, mas é inequívoca após `JSON.parse`:

    ```jinja
    "url": "{{ stream_url|escapejs }}"
    "detail": "{{ error_message|escapejs }}"
    ```

    Para alvos de **texto puro** como bodies de linha ntfy, você pode usar `|safe` em cada variável para ignorar o autoescape e evitar ruído no estilo `&lt;` na mensagem renderizada.

### Variáveis por evento

As tabelas abaixo listam as variáveis que cada evento fornece _além dos_ campos auto-injetados acima (quando aplicável).

#### `channel_start` — Canal Iniciado
| Variável | Descrição |
| --- | --- |
| `channel_name` | Nome do canal |
| `stream_name` | Nome do stream |
| `stream_id` | ID interno do stream |

#### `channel_stop` — Canal Parado
| Variável | Descrição |
| --- | --- |
| `channel_name` | Nome do canal |
| `runtime` | Tempo total de execução em segundos |
| `total_bytes` | Total de bytes transmitidos |

#### `channel_reconnect` — Canal Reconectado
| Variável | Descrição |
| --- | --- |
| `channel_name` | Nome do canal |
| `attempt` | Número da tentativa de reconexão atual |
| `max_attempts` | Máximo de tentativas configuradas |

#### `channel_error` — Erro de Canal
| Variável | Descrição |
| --- | --- |
| `channel_name` | Nome do canal |
| `error_type` | Um de `connection_failed`, `connection_exception` |
| `url` | Primeiros 100 caracteres da URL do stream |
| `attempts` | Quantas tentativas foram feitas antes de desistir |
| `error_message` | Detalhe da exceção (apenas em `connection_exception`) |

#### `channel_failover` — Failover de Canal
| Variável | Descrição |
| --- | --- |
| `channel_name` | Nome do canal |
| `reason` | Por que o failover foi acionado (ex.: `buffering_timeout`) |
| `duration` | Quanto tempo a condição de falha persistiu antes do failover |

#### `stream_switch` — Troca de Stream
| Variável | Descrição |
| --- | --- |
| `channel_name` | Nome do canal |
| `new_url` | Primeiros 100 caracteres da nova URL do stream |
| `stream_id` | Novo ID do stream |

#### `recording_start` — Gravação Iniciada
| Variável | Descrição |
| --- | --- |
| `channel_name` | Nome do canal |
| `recording_id` | ID da linha de gravação |

#### `recording_end` — Gravação Encerrada
| Variável | Descrição |
| --- | --- |
| `channel_name` | Nome do canal |
| `recording_id` | ID da linha de gravação |
| `interrupted` | `True` se a gravação terminou antecipadamente |
| `bytes_written` | Total de bytes escritos no disco |

#### `epg_refresh` — EPG Atualizado
| Variável | Descrição |
| --- | --- |
| `source_name` | Nome da fonte EPG |
| `programs` | Número de programas ingeridos |
| `channels` | Número de canais com programas |
| `skipped_programs` | Programas ignorados durante a análise |
| `unmapped_channels` | Canais EPG sem canal Dispatcharr correspondente |

#### `m3u_refresh` — M3U Atualizado
| Variável | Descrição |
| --- | --- |
| `account_name` | Nome da conta M3U |
| `elapsed_time` | Duração da atualização em segundos (arredondado para 2dp) |
| `streams_created` | Novos streams adicionados nesta atualização |
| `streams_updated` | Streams existentes atualizados |
| `streams_deleted` | Streams removidos porque o provedor os retirou |
| `total_processed` | Total de streams vistos na playlist |

#### `client_connect` — Cliente Conectado
| Variável | Descrição |
| --- | --- |
| `channel_name` | Nome do canal |
| `client_ip` | Endereço IP do cliente |
| `client_id` | ID interno do cliente por conexão |
| `user_agent` | User-Agent do cliente (truncado para 100 caracteres) |
| `username` | Nome de usuário autenticado, se houver |

#### `client_disconnect` — Cliente Desconectado
| Variável | Descrição |
| --- | --- |
| `channel_name` | Nome do canal |
| `client_ip` | Endereço IP do cliente |
| `client_id` | ID interno do cliente por conexão |
| `user_agent` | User-Agent do cliente (truncado para 100 caracteres) |
| `duration` | Duração da sessão em segundos (arredondado para 2dp) |
| `bytes_sent` | Bytes entregues a este cliente |
| `username` | Nome de usuário autenticado, se houver |

#### `login_failed` — Login Falhou
| Variável | Descrição |
| --- | --- |
| `user` | Nome de usuário submetido (ou `unknown` / `token_refresh`) |
| `client_ip` | Endereço IP do cliente |
| `user_agent` | User-Agent do cliente |
| `reason` | Motivo da falha (credenciais inválidas, acesso à rede negado, etc.) |

#### `epg_blocked` — EPG Bloqueado
| Variável | Descrição |
| --- | --- |
| `profile` | Nome do perfil de saída (ou `all`) |
| `reason` | Por que a requisição foi bloqueada |
| `client_ip` | Endereço IP do cliente |
| `user_agent` | User-Agent do cliente |

#### `m3u_blocked` — M3U Bloqueado
| Variável | Descrição |
| --- | --- |
| `profile` | Nome do perfil de saída (ou `all`) — presente no caminho padrão M3U |
| `user` | Nome de usuário submetido — presente no caminho da API Xtream Codes |
| `reason` | Por que a requisição foi bloqueada |
| `client_ip` | Endereço IP do cliente |
| `user_agent` | User-Agent do cliente |

#### `vod_start` / `vod_stop` — VOD Iniciado / VOD Parado
| Variável | Descrição |
| --- | --- |
| `content_name` | Título do VOD |
| `content_uuid` | UUID do conteúdo VOD (compartilhado pelo par start/stop correspondente) |
| `client_ip` | Endereço IP do cliente |
| `username` | Nome de usuário autenticado, se houver |

### Armadilhas

* **Valores falsy desaparecem.** Conforme observado acima, o Dispatcharr exclui qualquer chave do payload cujo valor esteja vazio antes da renderização. Sempre use `{{ var|default:"-" }}` (ou envolva campos em `{% if var %}…{% endif %}`) para manter seu JSON válido.
* **Campos de contexto de canal podem estar ausentes em alguns eventos.** `stream_name` / `stream_url` / `channel_url` / `provider_name` / `profile_used` são populados a partir de uma linha `Stream`. O dispatcher usa um `stream_id` explícito do local da chamada se um foi passado (verdadeiro para `channel_start` e `stream_switch`); caso contrário, faz fallback para a chave Redis `channel_stream:<channel.id>`. Se nenhum produzir um stream, todos os cinco campos são `None` e são removidos antes da renderização. Na prática, isso afeta eventos como `channel_stop`, `channel_reconnect`, `channel_error`, `channel_failover`, `recording_start`, `recording_end`, `client_connect` e `client_disconnect` quando o estado Redis do stream ao vivo já foi limpo.
* **Alguns eventos registrados não acionam webhooks.** `login_success`, `logout`, `m3u_download`, `epg_download` e `channel_buffering` são gravados no log de Eventos do Sistema, mas **não** estão no registro de eventos webhook, então assinaturas nesses eventos nunca serão acionadas.
* **O UUID do Canal não é exposto aos templates.** A camada de envio aceita um argumento `channel_id` internamente e o usa como chave de busca UUID para a linha `Channel`, mas o valor é consumido nesse ponto e **não** é adicionado ao contexto do template. `{{ channel_id }}` em um template de payload é renderizado como uma string vazia. Use `{{ channel_name }}` para identificar o canal.
* **Nenhuma assinatura HMAC está integrada.** Se seu receptor precisa autenticar o webhook, coloque um segredo compartilhado longo nos cabeçalhos da conexão (ex.: `X-Auth-Token`) e valide-o no lado receptor.

### Exemplos práticos

#### Discord — início / parada de canal
Use **duas assinaturas separadas** com rótulos fixos — não tente detectar start vs. stop a partir da veracidade de `total_bytes`/`runtime`, porque uma sessão legítima de 0 bytes seria reduzida a nada e classificada incorretamente.

Para `channel_start`:

```jinja
{
  "username": "Dispatcharr",
  "embeds": [{
    "title": "{{ channel_name|default:"Unknown"|escapejs }} started",
    "fields": [
      {"name": "Stream",   "value": "{{ stream_name|default:"-"|escapejs }}",   "inline": true},
      {"name": "Provider", "value": "{{ provider_name|default:"-"|escapejs }}", "inline": true},
      {"name": "Profile",  "value": "{{ profile_used|default:"-"|escapejs }}",  "inline": true}
    ]
  }]
}
```

Para `channel_stop`:

```jinja
{
  "username": "Dispatcharr",
  "embeds": [{
    "title": "{{ channel_name|default:"Unknown"|escapejs }} stopped",
    "fields": [
      {"name": "Stream",      "value": "{{ stream_name|default:"-"|escapejs }}", "inline": true},
      {"name": "Provider",    "value": "{{ provider_name|default:"-"|escapejs }}", "inline": true},
      {"name": "Runtime (s)", "value": "{{ runtime|default:0 }}", "inline": true},
      {"name": "Bytes",       "value": "{{ total_bytes|default:0 }}", "inline": true}
    ]
  }]
}
```

#### Slack — alertas de erro / failover / reconexão
Um webhook do Slack cobre todos os três eventos da classe de erro. Note o filtro `|escapejs` em cada valor de variável — sem ele, um `error_message` que contenha quebra de linha ou barra invertida (muito comum em texto bruto de exceção Python) produzirá JSON inválido e a entrega falhará:

```jinja
{
  "text": ":warning: *{{ channel_name|escapejs }}* — {% if error_type %}{{ error_type|escapejs }}{% elif reason %}{{ reason|escapejs }}{% else %}reconnect {{ attempt }}/{{ max_attempts }}{% endif %}",
  "attachments": [{
    "color": "warning",
    "fields": [
      {"title": "Provider", "value": "{{ provider_name|default:"-"|escapejs }}", "short": true},
      {"title": "Stream",   "value": "{{ stream_name|default:"-"|escapejs }}",   "short": true}
      {% if error_message %},{"title": "Detail", "value": "{{ error_message|escapejs }}", "short": false}{% endif %}
    ]
  }]
}
```

#### ntfy / Gotify / Pushover — push mobile para eventos de segurança
Assine `login_failed`, `m3u_blocked`, `epg_blocked` para um tópico ntfy. O ntfy aceita um body de texto puro, então o template não precisa ser JSON:

```jinja
{{ user|default:"unknown" }} from {{ client_ip }} — {{ reason }}
```

O nome do evento em si **não** está no contexto do template (apenas o dict do payload está), então inclua-o nos cabeçalhos da conexão, junto com outros metadados do ntfy:

```json
{"Title": "Dispatcharr security alert", "Priority": "high", "Tags": "warning"}
```

#### Home Assistant — estado de now-playing
Use **duas assinaturas separadas** com valores `state` fixos (mesmo motivo do Discord). Note `|escapejs` em `stream_url` — sem ele, uma URL com parâmetros de query `&` (toda URL Xtream/HLS) seria renderizada como `&amp;` e o HA armazenaria a URL quebrada.

Para `channel_start` e `stream_switch`:

```jinja
{
  "state": "playing",
  "channel":  "{{ channel_name|escapejs }}",
  "stream":   "{{ stream_name|escapejs }}",
  "provider": "{{ provider_name|escapejs }}",
  "url":      "{{ stream_url|escapejs }}"
}
```

Para `channel_stop`:

```jinja
{
  "state": "idle",
  "channel": "{{ channel_name|escapejs }}"
}
```

Conduza um `input_text` ou sensor de template a partir da automação webhook no lado do HA.

#### InfluxDB — métricas de saúde do provedor
Envie `m3u_refresh` e `epg_refresh` para um endpoint de escrita HTTP do InfluxDB como protocolo de linha InfluxDB — texto puro, não JSON, então o caminho de detecção JSON não será acionado. Os dois eventos não compartilham nomes de campos, então use uma assinatura com um template para cada.

!!! warning
    O protocolo de linha do InfluxDB requer que valores de tag escapem espaços, vírgulas e `=`. O Django não tem filtro de protocolo de linha integrado, então a solução simples é `|cut:" "|cut:","|cut:"="` para remover esses caracteres da tag. A alternativa limpa é renomear suas contas M3U / fontes EPG para serem apenas alfanumérico+traço.

Para `m3u_refresh`:

```jinja
m3u_refresh,account={{ account_name|cut:" "|cut:","|cut:"=" }} created={{ streams_created|default:0 }},updated={{ streams_updated|default:0 }},deleted={{ streams_deleted|default:0 }},elapsed={{ elapsed_time|default:0 }}
```

Para `epg_refresh`:

```jinja
epg_refresh,source={{ source_name|cut:" "|cut:","|cut:"=" }} programs={{ programs|default:0 }},channels={{ channels|default:0 }},skipped={{ skipped_programs|default:0 }},unmapped={{ unmapped_channels|default:0 }}
```

## Logs
Conexões acionadas, suas respostas e quaisquer erros serão registrados aqui
