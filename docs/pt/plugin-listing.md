# Lançamentos de Plugins

Quer adicionar seu plugin a esta lista? Consulte o [repositório de plugins](https://github.com/Dispatcharr/Plugins/blob/main/CONTRIBUTING.md) para aprender como contribuir.
## Plugins Disponíveis

| Plugin | Versão | Autor | Licença | Descrição |
|--------|--------|-------|---------|-------------|
| [`Channel Mapparr`](#channel-mapparr) | `1.26.1430910` | PiratesIRC | MIT | Padroniza nomes de canais broadcast (OTA) e premium/a cabo usando dados de rede e listas de canais. Suporta importação de streams M3U, organização por categoria e correspondência fuzzy em mais de 42K canais em 11 países. |
| [`Dispatcharr Exporter`](#dispatcharr-exporter) | `3.0.1` | sethwv | MIT | Expõe métricas do Dispatcharr em formato compatível com Prometheus exporter para monitoramento |
| [`Dispatchwrapparr`](#dispatchwrapparr) | `1.7.3` | jordandalley | MIT | Um perfil de stream inteligente com suporte a DRM/Clearkey para o Dispatcharr |
| [`Embyfin Stream Cleanup`](#embyfin-stream-cleanup) | `1.2.0` | sethwv | MIT | Monitora a atividade de clientes do Dispatcharr e encerra conexões ociosas do Emby/Jellyfin |
| [`EPG Janitor`](#epg-janitor) | `1.26.1420824` | PiratesIRC | MIT | Escaneia canais com atribuições de EPG mas sem dados de programação. Faz auto-match de EPG para canais usando correspondência fuzzy inteligente com aliases, remove EPG de canais ocultos e gerencia atribuições de EPG. |
| [`EPGeditARR`](#epgeditarr) | `0.2.07` | jstevenscl | MIT | Transforme e limpe seus dados de EPG usando regex e regras de localizar/substituir. Cria cópias virtuais das suas fontes — os originais nunca são alterados. Preenche programações placeholder para canais sem EPG e fornece um kit completo para SiriusXM: preenche EPG a partir do XMLTV da comunidade (741 canais, blocos esportivos inteligentes), ordena na ordem oficial da grade, atribui logos e renomeia canais usando o banco de dados oficial da API do SiriusXM. |
| [`Event Channel Managarr`](#event-channel-managarr) | `1.26.1401103` | PiratesIRC | MIT | Automatiza a visibilidade dos canais ocultando canais sem eventos e mostrando aqueles com eventos, com base em dados de EPG e nomes de canais. Opcionalmente gerencia EPG fictício para canais sem EPG real. |
| [`IPTV Checker`](#iptv-checker) | `1.26.1582047` | PiratesIRC | MIT | Um Plugin do Dispatcharr que percorre uma playlist para verificar canais IPTV |
| [`Lineuparr`](#lineuparr) | `1.26.1431300` | PiratesIRC | MIT | Espelhe grades de canais de provedores do mundo real criando grupos de canais, canais e correspondência fuzzy de streams IPTV a eles. |
| [`Multiview`](#multiview) | `0.1.0` | sethwv | MIT | Componha múltiplos streams de canais do Dispatcharr em saídas multi-view usando FFmpeg |
| [`Stream Dripper`](#stream-dripper) | `1.0.0` | Megamannen | Artistic-2.0 | Encerra automaticamente todos os streams ativos uma vez por dia em um horário configurado, com um botão manual de encerramento imediato. |
| [`Stream-Mapparr`](#stream-mapparr) | `1.26.1082140` | PiratesIRC | MIT | Adicione automaticamente streams correspondentes aos canais com base na similaridade de nome e precedência de qualidade. Suporta correspondência ilimitada de streams, gerenciamento de visibilidade de canais e limpeza de exportação CSV. |
| [`Telegram Alerts`](#telegram-alerts) | `0.4.5` | R3XCHRIS | MIT | Envie eventos de canal/stream/VOD do Dispatcharr para um chat do Telegram via bot. Inclui ação de teste manual, toggles por evento e um relatório diário opcional via cron (IP público + geo + speedtest + atividade + saúde das fontes). |
| [`Tickarr`](#tickarr) | `0.1.01` | jstevenscl | MIT | Sobreposições de texto dinâmicas para canais IPTV - SiriusXM Now Playing, Sports Ticker, Texto Personalizado |
| [`Twitcharr`](#twitcharr) | `1.2.25` | eliasbruno124-dev | MIT | Plugin de TV ao vivo da Twitch para o Dispatcharr com canais automáticos, streams, dados de guia XMLTV e reprodução via Streamlink. |
| [`VOD to Media Library`](#vod-to-media-library) | `1.15.1` | R3XCHRIS | MIT | Gere arquivos .strm (com metadados NFO opcionais) do seu catálogo VOD do Dispatcharr para que Jellyfin / Emby / Kodi / ChannelsDVR possam indexar seus filmes e séries. Adiciona um auto-rescan via cron que captura episódios recém-adicionados diariamente. Layout de pastas aninhadas por categoria opcional para bibliotecas organizadas por gênero. |
| [`Waybill`](#waybill) | `1.3.0` | Matthew-Beckett | MIT | Waybill corresponde, renomeia e organiza quaisquer streams independente do provedor. Pipelines infinitamente configuráveis para controle total. |
| [`YouTubearr`](#youtubearr) | `1.20.0` | jeff-gooch | Unlicense | Plugin de livestream do YouTube sem dependências com monitoramento automático e numeração configurável |

---

### [Channel Mapparr](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/channel-mapparr/README.md)

**Versão:** `1.26.1430910` | **Autor:** PiratesIRC | **Última Atualização:** 23 Mai 2026, 17:06 UTC

Padroniza nomes de canais broadcast (OTA) e premium/a cabo usando dados de rede e listas de canais. Suporta importação de streams M3U, organização por categoria e correspondência fuzzy em mais de 42K canais em 11 países.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1422963882548265110) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-Channel-Maparr-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Lançamento (`1.26.1430910`)](https://github.com/Dispatcharr/Plugins/releases/download/channel-mapparr-1.26.1430910/channel-mapparr-1.26.1430910.zip)
- [Todas as Versões (2 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/channel-mapparr)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/channel-mapparr) | **Última Alteração:** [`309559e`](https://github.com/Dispatcharr/Plugins/commit/309559e7795e3c0447f90067e0c011d8c1eb9d45)

---

### [Dispatcharr Exporter](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/dispatcharr-exporter/README.md)

**Versão:** `3.0.1` | **Autor:** sethwv | **Última Atualização:** 10 Mai 2026, 18:26 UTC

Expõe métricas do Dispatcharr em formato compatível com Prometheus exporter para monitoramento

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1451260201775923421) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/swvn-dispatch/dispatcharr-exporter)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.22.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Lançamento (`3.0.1`)](https://github.com/Dispatcharr/Plugins/releases/download/dispatcharr-exporter-3.0.1/dispatcharr-exporter-3.0.1.zip)
- [Todas as Versões (3 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/dispatcharr-exporter)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/dispatcharr-exporter) | **Última Alteração:** [`b70abd6`](https://github.com/Dispatcharr/Plugins/commit/b70abd6df9cd520bcc28ad7fced085be135897a9)

---

### [Dispatchwrapparr](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/dispatchwrapparr/README.md)

**Versão:** `1.7.3` | **Autor:** jordandalley | **Última Atualização:** 07 Jun 2026, 12:42 UTC

Um perfil de stream inteligente com suporte a DRM/Clearkey para o Dispatcharr

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1422776847703212132) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/jordandalley/dispatchwrapparr)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.25.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Lançamento (`1.7.3`)](https://github.com/Dispatcharr/Plugins/releases/download/dispatchwrapparr-1.7.3/dispatchwrapparr-1.7.3.zip)
- [Todas as Versões (7 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/dispatchwrapparr)

**Mantenedores:** michaelmurfy | **Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/dispatchwrapparr) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/dispatchwrapparr/README.md) | **Última Alteração:** [`bc522f1`](https://github.com/Dispatcharr/Plugins/commit/bc522f1f01c094273bded4b7b66350dc62d039fa)

---

### [Embyfin Stream Cleanup](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/embyfin-stream-cleanup/README.md)

**Versão:** `1.2.0` | **Autor:** sethwv | **Última Atualização:** 15 Mai 2026, 17:13 UTC

Monitora a atividade de clientes do Dispatcharr e encerra conexões ociosas do Emby/Jellyfin

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1491487318832447668) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/swvn-dispatch/embyfin-stream-cleanup)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.22.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Lançamento (`1.2.0`)](https://github.com/Dispatcharr/Plugins/releases/download/embyfin-stream-cleanup-1.2.0/embyfin-stream-cleanup-1.2.0.zip)
- [Todas as Versões (6 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/embyfin-stream-cleanup)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/embyfin-stream-cleanup) | **Última Alteração:** [`315a967`](https://github.com/Dispatcharr/Plugins/commit/315a967448ff4db469a66491ebc404bfb8e0bb42)

---

### [EPG Janitor](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/epg-janitor/README.md)

**Versão:** `1.26.1420824` | **Autor:** PiratesIRC | **Última Atualização:** 22 Mai 2026, 14:19 UTC

Escaneia canais com atribuições de EPG mas sem dados de programação. Faz auto-match de EPG para canais usando correspondência fuzzy inteligente com aliases, remove EPG de canais ocultos e gerencia atribuições de EPG.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1420051973994053848) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-EPG-Janitor-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Lançamento (`1.26.1420824`)](https://github.com/Dispatcharr/Plugins/releases/download/epg-janitor-1.26.1420824/epg-janitor-1.26.1420824.zip)
- [Todas as Versões (2 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/epg-janitor)

**Mantenedores:** PiratesIRC | **Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/epg-janitor) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/epg-janitor/README.md) | **Última Alteração:** [`a5ccaa9`](https://github.com/Dispatcharr/Plugins/commit/a5ccaa94fb0ddb806eb2ef36abef0c8a665afb8d)

---

### [EPGeditARR](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/epgeditarr/README.md)

**Versão:** `0.2.07` | **Autor:** jstevenscl | **Última Atualização:** 19 Mai 2026, 16:17 UTC

Transforme e limpe seus dados de EPG usando regex e regras de localizar/substituir. Cria cópias virtuais das suas fontes — os originais nunca são alterados. Preenche programações placeholder para canais sem EPG e fornece um kit completo para SiriusXM: preenche EPG a partir do XMLTV da comunidade (741 canais, blocos esportivos inteligentes), ordena na ordem oficial da grade, atribui logos e renomeia canais usando o banco de dados oficial da API do SiriusXM.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/jstevenscl/epgeditarr)

**Downloads:**
- [Último Lançamento (`0.2.07`)](https://github.com/Dispatcharr/Plugins/releases/download/epgeditarr-0.2.07/epgeditarr-0.2.07.zip)
- [Todas as Versões (3 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/epgeditarr)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/epgeditarr) | **Última Alteração:** [`fc6f5f6`](https://github.com/Dispatcharr/Plugins/commit/fc6f5f6fff939c45828f221f47c3355b33cf4b66)

---

### [Event Channel Managarr](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/event-channel-managarr/README.md)

**Versão:** `1.26.1401103` | **Autor:** PiratesIRC | **Última Atualização:** 20 Mai 2026, 11:52 UTC

Automatiza a visibilidade dos canais ocultando canais sem eventos e mostrando aqueles com eventos, com base em dados de EPG e nomes de canais. Opcionalmente gerencia EPG fictício para canais sem EPG real.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-Event-Channel-Managarr-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Lançamento (`1.26.1401103`)](https://github.com/Dispatcharr/Plugins/releases/download/event-channel-managarr-1.26.1401103/event-channel-managarr-1.26.1401103.zip)
- [Todas as Versões (7 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/event-channel-managarr)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/event-channel-managarr) | **Última Alteração:** [`618a835`](https://github.com/Dispatcharr/Plugins/commit/618a835b69185ab601e3cce394cb4d9bcc0e5258)

---

### [IPTV Checker](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/iptv-checker/README.md)

**Versão:** `1.26.1582047` | **Autor:** PiratesIRC | **Última Atualização:** 08 Jun 2026, 00:12 UTC

Um Plugin do Dispatcharr que percorre uma playlist para verificar canais IPTV

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-IPTV-Checker-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Lançamento (`1.26.1582047`)](https://github.com/Dispatcharr/Plugins/releases/download/iptv-checker-1.26.1582047/iptv-checker-1.26.1582047.zip)
- [Todas as Versões (7 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/iptv-checker)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/iptv-checker) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/iptv-checker/README.md) | **Última Alteração:** [`78654d4`](https://github.com/Dispatcharr/Plugins/commit/78654d4e375d24bd55d49a800bf417c63e155c17)

---

### [Lineuparr](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/lineuparr/README.md)

**Versão:** `1.26.1431300` | **Autor:** PiratesIRC | **Última Atualização:** 23 Mai 2026, 17:06 UTC

Espelhe grades de canais de provedores do mundo real criando grupos de canais, canais e correspondência fuzzy de streams IPTV a eles.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-Lineuparr-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Lançamento (`1.26.1431300`)](https://github.com/Dispatcharr/Plugins/releases/download/lineuparr-1.26.1431300/lineuparr-1.26.1431300.zip)
- [Todas as Versões (5 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/lineuparr)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/lineuparr) | **Última Alteração:** [`3924cbe`](https://github.com/Dispatcharr/Plugins/commit/3924cbe182e994de221ef776a7c151c5e7bc2c2e)

---

### [Multiview](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/multiview/README.md)

**Versão:** `0.1.0` | **Autor:** sethwv | **Última Atualização:** 04 Jun 2026, 16:03 UTC

Componha múltiplos streams de canais do Dispatcharr em saídas multi-view usando FFmpeg

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1509200002407465001) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/swvn-dispatch/dispatcharr-multiview)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.22.0-brightgreen?style=flat-square) ![Dispatcharr max](https://img.shields.io/badge/Dispatcharr_max-v0.25.1-orange?style=flat-square)

**Downloads:**
- [Último Lançamento (`0.1.0`)](https://github.com/Dispatcharr/Plugins/releases/download/multiview-0.1.0/multiview-0.1.0.zip)
- [Todas as Versões (1 disponível)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/multiview)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/multiview) | **Última Alteração:** [`5bddf4e`](https://github.com/Dispatcharr/Plugins/commit/5bddf4e19c75244ea27e321d8a178b1a3107dece)

---

### [Stream Dripper](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/stream-dripper/README.md)

**Versão:** `1.0.0` | **Autor:** Megamannen | **Última Atualização:** 29 Mar 2026, 15:51 UTC

Encerra automaticamente todos os streams ativos uma vez por dia em um horário configurado, com um botão manual de encerramento imediato.

[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic--2.0-blue?style=flat-square)](https://spdx.org/licenses/Artistic-2.0.html)

**Downloads:**
- [Último Lançamento (`1.0.0`)](https://github.com/Dispatcharr/Plugins/releases/download/stream-dripper-1.0.0/stream-dripper-1.0.0.zip)
- [Todas as Versões (1 disponível)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/stream-dripper)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/stream-dripper) | **Última Alteração:** [`4e8f1b1`](https://github.com/Dispatcharr/Plugins/commit/4e8f1b108c1e84f60520710d13e54eb2fb519648)

---

### [Stream-Mapparr](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/stream-mapparr/README.md)

**Versão:** `1.26.1082140` | **Autor:** PiratesIRC | **Última Atualização:** 18 Abr 2026, 22:09 UTC

Adicione automaticamente streams correspondentes aos canais com base na similaridade de nome e precedência de qualidade. Suporta correspondência ilimitada de streams, gerenciamento de visibilidade de canais e limpeza de exportação CSV.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Stream-Mapparr)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Lançamento (`1.26.1082140`)](https://github.com/Dispatcharr/Plugins/releases/download/stream-mapparr-1.26.1082140/stream-mapparr-1.26.1082140.zip)
- [Todas as Versões (2 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/stream-mapparr)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/stream-mapparr) | **Última Alteração:** [`4812211`](https://github.com/Dispatcharr/Plugins/commit/4812211adaa1d7d67b5a2ae8154e857eab5d5b13)

---

### [Telegram Alerts](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/telegram-alerts/README.md)

**Versão:** `0.4.5` | **Autor:** R3XCHRIS | **Última Atualização:** 01 Jun 2026, 20:07 UTC

Envie eventos de canal/stream/VOD do Dispatcharr para um chat do Telegram via bot. Inclui ação de teste manual, toggles por evento e um relatório diário opcional via cron (IP público + geo + speedtest + atividade + saúde das fontes).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/R3XCHRIS/telegram-alerts)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Lançamento (`0.4.5`)](https://github.com/Dispatcharr/Plugins/releases/download/telegram-alerts-0.4.5/telegram-alerts-0.4.5.zip)
- [Todas as Versões (1 disponível)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/telegram-alerts)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/telegram-alerts) | **Última Alteração:** [`04aa4f4`](https://github.com/Dispatcharr/Plugins/commit/04aa4f43926c2ca7cefc5c802166a02fe43b3500)

---

### [Tickarr](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/tickarr/README.md)

**Versão:** `0.1.01` | **Autor:** jstevenscl | **Última Atualização:** 02 Jun 2026, 21:10 UTC

Sobreposições de texto dinâmicas para canais IPTV - SiriusXM Now Playing, Sports Ticker, Texto Personalizado

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/jstevenscl/tickarr)

**Downloads:**
- [Último Lançamento (`0.1.01`)](https://github.com/Dispatcharr/Plugins/releases/download/tickarr-0.1.01/tickarr-0.1.01.zip)
- [Todas as Versões (2 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/tickarr)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/tickarr) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/tickarr/README.md) | **Última Alteração:** [`489bbb5`](https://github.com/Dispatcharr/Plugins/commit/489bbb5253740ef509a4dd8d8545f03971b289e8)

---

### [Twitcharr](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/twitcharr/README.md)

**Versão:** `1.2.25` | **Autor:** eliasbruno124-dev | **Última Atualização:** 02 Jun 2026, 17:16 UTC

Plugin de TV ao vivo da Twitch para o Dispatcharr com canais automáticos, streams, dados de guia XMLTV e reprodução via Streamlink.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/eliasbruno124-dev/Twitcharr)

**Downloads:**
- [Último Lançamento (`1.2.25`)](https://github.com/Dispatcharr/Plugins/releases/download/twitcharr-1.2.25/twitcharr-1.2.25.zip)
- [Todas as Versões (1 disponível)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/twitcharr)

**Mantenedores:** eliasbruno124-dev | **Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/twitcharr) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/twitcharr/README.md) | **Última Alteração:** [`ff09842`](https://github.com/Dispatcharr/Plugins/commit/ff09842b40864d9a56364f45b9c86618895b6206)

---

### [VOD to Media Library](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/vod2mlib/README.md)

**Versão:** `1.15.1` | **Autor:** R3XCHRIS | **Última Atualização:** 05 Jun 2026, 16:49 UTC

Gere arquivos .strm (com metadados NFO opcionais) do seu catálogo VOD do Dispatcharr para que Jellyfin / Emby / Kodi / ChannelsDVR possam indexar seus filmes e séries. Adiciona um auto-rescan via cron que captura episódios recém-adicionados diariamente. Layout de pastas aninhadas por categoria opcional para bibliotecas organizadas por gênero.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/R3XCHRIS/VOD2MLIB)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.24.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Lançamento (`1.15.1`)](https://github.com/Dispatcharr/Plugins/releases/download/vod2mlib-1.15.1/vod2mlib-1.15.1.zip)
- [Todas as Versões (3 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/vod2mlib)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/vod2mlib) | **Última Alteração:** [`c3df2a3`](https://github.com/Dispatcharr/Plugins/commit/c3df2a35d89fa79c6acaf600c2909684a7fb4c61)

---

### [Waybill](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/waybill/README.md)

**Versão:** `1.3.0` | **Autor:** Matthew-Beckett | **Última Atualização:** 12 Mai 2026, 19:36 UTC

Waybill corresponde, renomeia e organiza quaisquer streams independente do provedor. Pipelines infinitamente configuráveis para controle total.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Matthew-Beckett/waybill)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-0.23.0-brightgreen?style=flat-square) ![Dispatcharr max](https://img.shields.io/badge/Dispatcharr_max-0.24.0-orange?style=flat-square)

**Downloads:**
- [Último Lançamento (`1.3.0`)](https://github.com/Dispatcharr/Plugins/releases/download/waybill-1.3.0/waybill-1.3.0.zip)
- [Todas as Versões (1 disponível)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/waybill)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/waybill) | **Última Alteração:** [`cdd18dd`](https://github.com/Dispatcharr/Plugins/commit/cdd18dd7f396035b9cd486d3e45375eed3bcc744)

---

### [YouTubearr](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/youtubearr/README.md)

**Versão:** `1.20.0` | **Autor:** jeff-gooch | **Última Atualização:** 06 Jun 2026, 20:08 UTC

Plugin de livestream do YouTube sem dependências com monitoramento automático e numeração configurável

[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue?style=flat-square)](https://spdx.org/licenses/Unlicense.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/jeff-gooch/youtubearr)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Lançamento (`1.20.0`)](https://github.com/Dispatcharr/Plugins/releases/download/youtubearr-1.20.0/youtubearr-1.20.0.zip)
- [Todas as Versões (4 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/youtubearr)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/youtubearr) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/youtubearr/README.md) | **Última Alteração:** [`0900a37`](https://github.com/Dispatcharr/Plugins/commit/0900a376c840979b09ee5d3834e468d7c117094b)

---

## Usando o Manifesto

Busque `manifest.json` para acessar programaticamente os metadados dos plugins e URLs de download:

```bash
curl https://raw.githubusercontent.com/Dispatcharr/Plugins/releases/manifest.json
```

---

*Última atualização: 08 Jun 2026, 00:13 UTC*
