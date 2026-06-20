# Releases de Plugins

Quer adicionar seu plugin a esta lista? Confira o [repositório de plugins](https://github.com/Dispatcharr/Plugins/blob/main/CONTRIBUTING.md) para aprender como contribuir.
## Plugins Disponíveis

| Plugin | Versão | Autor | Licença | Descrição |
|--------|---------|-------|---------|-------------|
| [`Channel Mapparr`](#channel-mapparr) | `1.26.1651015` | PiratesIRC | MIT | Padroniza nomes de canais de broadcast (OTA) e premium/cabo usando dados de rede e listas de canais. Suporta importação de streams M3U, organização por categorias e fuzzy matching em mais de 42 mil canais em 11 países. |
| [`Dispatcharr Exporter`](#dispatcharr-exporter) | `3.0.1` | sethwv | MIT | Expõe métricas do Dispatcharr em formato compatível com exporter Prometheus para monitoramento |
| [`Ranked Matchups (Top Games)`](#ranked-matchups-top-games-) | `1.8.0` | Jacob-Lasky | MIT | Curador de jogos interessantes entre esportes. Puxa próximos jogos por esporte ativado, pontua por interesse, combina com canais do Dispatcharr via EPG e renomeia+agrupa em um perfil de canal Top Matchups para que seu guia mostre apenas os jogos que valem a pena assistir. Canais são numerados por horário de início, então a lista ordena do mais próximo e o guia vincula corretamente tanto na saída M3U/EPG padrão quanto na API Xtream Codes sem configurações especiais. |
| [`Dispatchwrapparr`](#dispatchwrapparr) | `1.7.4` | jordandalley | MIT | Um perfil de stream inteligente com capacidade DRM/Clearkey para Dispatcharr |
| [`Embyfin Stream Cleanup`](#embyfin-stream-cleanup) | `1.2.0` | sethwv | MIT | Monitora atividade de clientes do Dispatcharr e encerra conexões ociosas do Emby/Jellyfin |
| [`EPG Janitor`](#epg-janitor) | `1.26.1660712` | PiratesIRC | MIT | Escaneia canais com atribuições de EPG mas sem dados de programação. Auto-combina EPG com canais usando fuzzy matching inteligente com aliases, remove EPG de canais ocultos e gerencia atribuições de EPG. |
| [`EPGeditARR`](#epgeditarr) | `0.2.07` | jstevenscl | MIT | Transforme e limpe seus dados de EPG usando regex e regras de localizar/substituir. Cria cópias virtuais das suas fontes — originais nunca são tocadas. Preenche programações placeholder para canais sem EPG e fornece um kit completo SiriusXM: preenche EPG do XMLTV da comunidade (741 canais, blocos esportivos inteligentes), ordena na ordem oficial da lineup, atribui logos e renomeia canais usando o banco de dados oficial de canais da API SiriusXM. |
| [`Event Channel Managarr`](#event-channel-managarr) | `1.26.1641827` | PiratesIRC | MIT | Automatiza visibilidade de canais ocultando canais sem eventos e mostrando aqueles com eventos, baseado em dados de EPG e nomes de canais. Opcionalmente gerencia EPG dummy para canais sem EPG real. |
| [`IPTV Checker`](#iptv-checker) | `1.26.1582047` | PiratesIRC | MIT | Um Plugin do Dispatcharr que percorre uma playlist para verificar canais IPTV |
| [`Lineuparr`](#lineuparr) | `1.26.1641222` | PiratesIRC | MIT | Espelha lineups de canais de provedores do mundo real criando grupos de canais, canais e fazendo fuzzy matching de streams IPTV para eles. |
| [`Multiview`](#multiview) | `0.1.0` | sethwv | MIT | Combine múltiplos streams de canais do Dispatcharr em saídas multi-view usando FFmpeg |
| [`Stream Dripper`](#stream-dripper) | `1.0.0` | Megamannen | Artistic-2.0 | Automaticamente derruba todos os streams ativos uma vez por dia em um horário configurado, com um botão para derrubar manualmente agora. |
| [`Stream-Mapparr`](#stream-mapparr) | `1.26.1650116` | PiratesIRC | MIT | Automaticamente adiciona streams correspondentes aos canais baseado em similaridade de nome e precedência de qualidade. Suporta matching ilimitado de streams, gerenciamento de visibilidade de canais e limpeza de exportação CSV. |
| [`Telegram Alerts`](#telegram-alerts) | `0.4.5` | R3XCHRIS | MIT | Envia eventos de canal/stream/VOD do Dispatcharr para um chat do Telegram via bot. Inclui ação de teste manual, toggles por evento e um relatório diário opcional via cron (IP público + geo + speedtest + atividade + saúde das fontes). |
| [`Tickarr`](#tickarr) | `0.1.02` | jstevenscl | MIT | Overlays de texto dinâmico para canais IPTV - SiriusXM Now Playing, Sports Ticker, Texto Personalizado |
| [`Twitcharr`](#twitcharr) | `1.3.0` | eliasbruno124-dev | MIT | Plugin de live-TV da Twitch para Dispatcharr com canais automáticos, streams, dados de guia XMLTV e reprodução via Streamlink. |
| [`VOD to Media Library`](#vod-to-media-library) | `1.15.2` | R3XCHRIS | MIT | Gera arquivos .strm (com metadados NFO opcionais) do seu catálogo VOD do Dispatcharr para que Jellyfin / Emby / Kodi / ChannelsDVR possam indexar seus filmes e séries. Adiciona uma varredura automática via cron que pega episódios recém-adicionados nightly. Layout de pasta aninhada por categoria opcional para bibliotecas organizadas por gênero. |
| [`Waybill`](#waybill) | `1.3.0` | Matthew-Beckett | MIT | Waybill combina, renomeia e organiza qualquer stream não importa o provedor. Pipelines infinitamente configuráveis para controle total. |
| [`YouTubearr`](#youtubearr) | `1.20.0` | jeff-gooch | Unlicense | Plugin de livestream do YouTube sem dependências com monitoramento automático e numeração configurável |

---

### [Channel Mapparr](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/channel-mapparr/README.md)

**Versão:** `1.26.1651015` | **Autor:** PiratesIRC | **Última Atualização:** Jun 14 2026, 17:07 UTC

Padroniza nomes de canais de broadcast (OTA) e premium/cabo usando dados de rede e listas de canais. Suporta importação de streams M3U, organização por categorias e fuzzy matching em mais de 42 mil canais em 11 países.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1422963882548265110) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-Channel-Maparr-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Release (`1.26.1651015`)](https://github.com/Dispatcharr/Plugins/releases/download/channel-mapparr-1.26.1651015/channel-mapparr-1.26.1651015.zip)
- [Todas as Versões (3 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/channel-mapparr)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/channel-mapparr) | **Última Alteração:** [`7a91063`](https://github.com/Dispatcharr/Plugins/commit/7a910634c7472b5b43c8bf7cff854541cb4be4df)

---

### [Dispatcharr Exporter](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/dispatcharr-exporter/README.md)

**Versão:** `3.0.1` | **Autor:** sethwv | **Última Atualização:** May 10 2026, 18:26 UTC

Expõe métricas do Dispatcharr em formato compatível com exporter Prometheus para monitoramento

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1451260201775923421) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/swvn-dispatch/dispatcharr-exporter)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.22.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Release (`3.0.1`)](https://github.com/Dispatcharr/Plugins/releases/download/dispatcharr-exporter-3.0.1/dispatcharr-exporter-3.0.1.zip)
- [Todas as Versões (3 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/dispatcharr-exporter)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/dispatcharr-exporter) | **Última Alteração:** [`b70abd6`](https://github.com/Dispatcharr/Plugins/commit/b70abd6df9cd520bcc28ad7fced085be135897a9)

---

### [Ranked Matchups (Top Games)](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/dispatcharr-ranked-matchups/README.md)

**Versão:** `1.8.0` | **Autor:** Jacob-Lasky | **Última Atualização:** Jun 19 2026, 13:00 UTC

Curador de jogos interessantes entre esportes. Puxa próximos jogos por esporte ativado, pontua por interesse, combina com canais do Dispatcharr via EPG e renomeia+agrupa em um perfil de canal Top Matchups para que seu guia mostre apenas os jogos que valem a pena assistir. Canais são numerados por horário de início, então a lista ordena do mais próximo e o guia vincula corretamente tanto na saída M3U/EPG padrão quanto na API Xtream Codes sem configurações especiais.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Jacob-Lasky/dispatcharr_ranked_matchups)

**Downloads:**
- [Último Release (`1.8.0`)](https://github.com/Dispatcharr/Plugins/releases/download/dispatcharr-ranked-matchups-1.8.0/dispatcharr-ranked-matchups-1.8.0.zip)
- [Todas as Versões (6 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/dispatcharr-ranked-matchups)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/dispatcharr-ranked-matchups) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/dispatcharr-ranked-matchups/README.md) | **Última Alteração:** [`625294e`](https://github.com/Dispatcharr/Plugins/commit/625294e082158bfb51aed378dfcb33150595195c)

---

### [Dispatchwrapparr](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/dispatchwrapparr/README.md)

**Versão:** `1.7.4` | **Autor:** jordandalley | **Última Atualização:** Jun 14 2026, 23:09 UTC

Um perfil de stream inteligente com capacidade DRM/Clearkey para Dispatcharr

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1422776847703212132) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/jordandalley/dispatchwrapparr)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.25.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Release (`1.7.4`)](https://github.com/Dispatcharr/Plugins/releases/download/dispatchwrapparr-1.7.4/dispatchwrapparr-1.7.4.zip)
- [Todas as Versões (8 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/dispatchwrapparr)

**Mantenedores:** michaelmurfy | **Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/dispatchwrapparr) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/dispatchwrapparr/README.md) | **Última Alteração:** [`ee12e6a`](https://github.com/Dispatcharr/Plugins/commit/ee12e6a51c08f7cacf436b528c10ad2faec9b2dd)

---

### [Embyfin Stream Cleanup](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/embyfin-stream-cleanup/README.md)

**Versão:** `1.2.0` | **Autor:** sethwv | **Última Atualização:** May 15 2026, 17:13 UTC

Monitora atividade de clientes do Dispatcharr e encerra conexões ociosas do Emby/Jellyfin

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1491487318832447668) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/swvn-dispatch/embyfin-stream-cleanup)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.22.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Release (`1.2.0`)](https://github.com/Dispatcharr/Plugins/releases/download/embyfin-stream-cleanup-1.2.0/embyfin-stream-cleanup-1.2.0.zip)
- [Todas as Versões (6 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/embyfin-stream-cleanup)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/embyfin-stream-cleanup) | **Última Alteração:** [`315a967`](https://github.com/Dispatcharr/Plugins/commit/315a967448ff4db469a66491ebc404bfb8e0bb42)

---

### [EPG Janitor](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/epg-janitor/README.md)

**Versão:** `1.26.1660712` | **Autor:** PiratesIRC | **Última Atualização:** Jun 15 2026, 14:20 UTC

Escaneia canais com atribuições de EPG mas sem dados de programação. Auto-combina EPG com canais usando fuzzy matching inteligente com aliases, remove EPG de canais ocultos e gerencia atribuições de EPG.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1420051973994053848) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-EPG-Janitor-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Release (`1.26.1660712`)](https://github.com/Dispatcharr/Plugins/releases/download/epg-janitor-1.26.1660712/epg-janitor-1.26.1660712.zip)
- [Todas as Versões (3 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/epg-janitor)

**Mantenedores:** PiratesIRC | **Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/epg-janitor) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/epg-janitor/README.md) | **Última Alteração:** [`dba280a`](https://github.com/Dispatcharr/Plugins/commit/dba280a1d4493541da20ace73c736ac6ecb7f842)

---

### [EPGeditARR](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/epgeditarr/README.md)

**Versão:** `0.2.07` | **Autor:** jstevenscl | **Última Atualização:** May 19 2026, 16:17 UTC

Transforme e limpe seus dados de EPG usando regex e regras de localizar/substituir. Cria cópias virtuais das suas fontes — originais nunca são tocadas. Preenche programações placeholder para canais sem EPG e fornece um kit completo SiriusXM: preenche EPG do XMLTV da comunidade (741 canais, blocos esportivos inteligentes), ordena na ordem oficial da lineup, atribui logos e renomeia canais usando o banco de dados oficial de canais da API SiriusXM.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/jstevenscl/epgeditarr)

**Downloads:**
- [Último Release (`0.2.07`)](https://github.com/Dispatcharr/Plugins/releases/download/epgeditarr-0.2.07/epgeditarr-0.2.07.zip)
- [Todas as Versões (3 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/epgeditarr)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/epgeditarr) | **Última Alteração:** [`fc6f5f6`](https://github.com/Dispatcharr/Plugins/commit/fc6f5f6fff939c45828f221f47c3355b33cf4b66)

---

### [Event Channel Managarr](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/event-channel-managarr/README.md)

**Versão:** `1.26.1641827` | **Autor:** PiratesIRC | **Última Atualização:** Jun 13 2026, 19:03 UTC

Automatiza visibilidade de canais ocultando canais sem eventos e mostrando aqueles com eventos, baseado em dados de EPG e nomes de canais. Opcionalmente gerencia EPG dummy para canais sem EPG real.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-Event-Channel-Managarr-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Release (`1.26.1641827`)](https://github.com/Dispatcharr/Plugins/releases/download/event-channel-managarr-1.26.1641827/event-channel-managarr-1.26.1641827.zip)
- [Todas as Versões (9 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/event-channel-managarr)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/event-channel-managarr) | **Última Alteração:** [`a89fb63`](https://github.com/Dispatcharr/Plugins/commit/a89fb636061e67819dfe9267df9f278a649c2fca)

---

### [IPTV Checker](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/iptv-checker/README.md)

**Versão:** `1.26.1582047` | **Autor:** PiratesIRC | **Última Atualização:** Jun 08 2026, 00:12 UTC

Um Plugin do Dispatcharr que percorre uma playlist para verificar canais IPTV

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-IPTV-Checker-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Release (`1.26.1582047`)](https://github.com/Dispatcharr/Plugins/releases/download/iptv-checker-1.26.1582047/iptv-checker-1.26.1582047.zip)
- [Todas as Versões (7 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/iptv-checker)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/iptv-checker) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/iptv-checker/README.md) | **Última Alteração:** [`78654d4`](https://github.com/Dispatcharr/Plugins/commit/78654d4e375d24bd55d49a800bf417c63e155c17)

---

### [Lineuparr](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/lineuparr/README.md)

**Versão:** `1.26.1641222` | **Autor:** PiratesIRC | **Última Atualização:** Jun 13 2026, 13:21 UTC

Espelha lineups de canais de provedores do mundo real criando grupos de canais, canais e fazendo fuzzy matching de streams IPTV para eles.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-Lineuparr-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Release (`1.26.1641222`)](https://github.com/Dispatcharr/Plugins/releases/download/lineuparr-1.26.1641222/lineuparr-1.26.1641222.zip)
- [Todas as Versões (6 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/lineuparr)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/lineuparr) | **Última Alteração:** [`c9b8a7b`](https://github.com/Dispatcharr/Plugins/commit/c9b8a7bca055605d573865e1016d073155bbc31e)

---

### [Multiview](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/multiview/README.md)

**Versão:** `0.1.0` | **Autor:** sethwv | **Última Atualização:** Jun 04 2026, 16:03 UTC

Combine múltiplos streams de canais do Dispatcharr em saídas multi-view usando FFmpeg

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1509200002407465001) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/swvn-dispatch/dispatcharr-multiview)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.22.0-brightgreen?style=flat-square) ![Dispatcharr max](https://img.shields.io/badge/Dispatcharr_max-v0.25.1-orange?style=flat-square)

**Downloads:**
- [Último Release (`0.1.0`)](https://github.com/Dispatcharr/Plugins/releases/download/multiview-0.1.0/multiview-0.1.0.zip)
- [Todas as Versões (1 disponível)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/multiview)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/multiview) | **Última Alteração:** [`5bddf4e`](https://github.com/Dispatcharr/Plugins/commit/5bddf4e19c75244ea27e321d8a178b1a3107dece)

---

### [Stream Dripper](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/stream-dripper/README.md)

**Versão:** `1.0.0` | **Autor:** Megamannen | **Última Atualização:** Mar 29 2026, 15:51 UTC

Automaticamente derruba todos os streams ativos uma vez por dia em um horário configurado, com um botão para derrubar manualmente agora.

[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic--2.0-blue?style=flat-square)](https://spdx.org/licenses/Artistic-2.0.html)

**Downloads:**
- [Último Release (`1.0.0`)](https://github.com/Dispatcharr/Plugins/releases/download/stream-dripper-1.0.0/stream-dripper-1.0.0.zip)
- [Todas as Versões (1 disponível)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/stream-dripper)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/stream-dripper) | **Última Alteração:** [`4e8f1b1`](https://github.com/Dispatcharr/Plugins/commit/4e8f1b108c1e84f60520710d13e54eb2fb519648)

---

### [Stream-Mapparr](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/stream-mapparr/README.md)

**Versão:** `1.26.1650116` | **Autor:** PiratesIRC | **Última Atualização:** Jun 14 2026, 02:51 UTC

Automaticamente adiciona streams correspondentes aos canais baseado em similaridade de nome e precedência de qualidade. Suporta matching ilimitado de streams, gerenciamento de visibilidade de canais e limpeza de exportação CSV.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Stream-Mapparr)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Release (`1.26.1650116`)](https://github.com/Dispatcharr/Plugins/releases/download/stream-mapparr-1.26.1650116/stream-mapparr-1.26.1650116.zip)
- [Todas as Versões (3 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/stream-mapparr)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/stream-mapparr) | **Última Alteração:** [`6b5cd91`](https://github.com/Dispatcharr/Plugins/commit/6b5cd911df84ce09734de70f2b33e03afe82f998)

---

### [Telegram Alerts](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/telegram-alerts/README.md)

**Versão:** `0.4.5` | **Autor:** R3XCHRIS | **Última Atualização:** Jun 01 2026, 20:07 UTC

Envia eventos de canal/stream/VOD do Dispatcharr para um chat do Telegram via bot. Inclui ação de teste manual, toggles por evento e um relatório diário opcional via cron (IP público + geo + speedtest + atividade + saúde das fontes).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/R3XCHRIS/telegram-alerts)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Release (`0.4.5`)](https://github.com/Dispatcharr/Plugins/releases/download/telegram-alerts-0.4.5/telegram-alerts-0.4.5.zip)
- [Todas as Versões (1 disponível)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/telegram-alerts)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/telegram-alerts) | **Última Alteração:** [`04aa4f4`](https://github.com/Dispatcharr/Plugins/commit/04aa4f43926c2ca7cefc5c802166a02fe43b3500)

---

### [Tickarr](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/tickarr/README.md)

**Versão:** `0.1.02` | **Autor:** jstevenscl | **Última Atualização:** Jun 15 2026, 16:11 UTC

Overlays de texto dinâmico para canais IPTV - SiriusXM Now Playing, Sports Ticker, Texto Personalizado

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/jstevenscl/tickarr)

**Downloads:**
- [Último Release (`0.1.02`)](https://github.com/Dispatcharr/Plugins/releases/download/tickarr-0.1.02/tickarr-0.1.02.zip)
- [Todas as Versões (3 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/tickarr)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/tickarr) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/tickarr/README.md) | **Última Alteração:** [`f5dbb97`](https://github.com/Dispatcharr/Plugins/commit/f5dbb97e03072d1f480148f4e2e4105284f847ac)

---

### [Twitcharr](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/twitcharr/README.md)

**Versão:** `1.3.0` | **Autor:** eliasbruno124-dev | **Última Atualização:** Jun 15 2026, 14:20 UTC

Plugin de live-TV da Twitch para Dispatcharr com canais automáticos, streams, dados de guia XMLTV e reprodução via Streamlink.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/eliasbruno124-dev/Twitcharr)

**Downloads:**
- [Último Release (`1.3.0`)](https://github.com/Dispatcharr/Plugins/releases/download/twitcharr-1.3.0/twitcharr-1.3.0.zip)
- [Todas as Versões (2 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/twitcharr)

**Mantenedores:** eliasbruno124-dev | **Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/twitcharr) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/twitcharr/README.md) | **Última Alteração:** [`f7bca5e`](https://github.com/Dispatcharr/Plugins/commit/f7bca5e4f5ce34958d6ec2b906e59d2cf81a54b7)

---

### [VOD to Media Library](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/vod2mlib/README.md)

**Versão:** `1.15.2` | **Autor:** R3XCHRIS | **Última Atualização:** Jun 11 2026, 14:01 UTC

Gera arquivos .strm (com metadados NFO opcionais) do seu catálogo VOD do Dispatcharr para que Jellyfin / Emby / Kodi / ChannelsDVR possam indexar seus filmes e séries. Adiciona uma varredura automática via cron que pega episódios recém-adicionados nightly. Layout de pasta aninhada por categoria opcional para bibliotecas organizadas por gênero.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/R3XCHRIS/VOD2MLIB)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.24.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Release (`1.15.2`)](https://github.com/Dispatcharr/Plugins/releases/download/vod2mlib-1.15.2/vod2mlib-1.15.2.zip)
- [Todas as Versões (4 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/vod2mlib)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/vod2mlib) | **Última Alteração:** [`142c867`](https://github.com/Dispatcharr/Plugins/commit/142c8676b719565bb8453c4c3cfa3bd2efd053ff)

---

### [Waybill](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/waybill/README.md)

**Versão:** `1.3.0` | **Autor:** Matthew-Beckett | **Última Atualização:** May 12 2026, 19:36 UTC

Waybill combina, renomeia e organiza qualquer stream não importa o provedor. Pipelines infinitamente configuráveis para controle total.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Matthew-Beckett/waybill)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-0.23.0-brightgreen?style=flat-square) ![Dispatcharr max](https://img.shields.io/badge/Dispatcharr_max-0.24.0-orange?style=flat-square)

**Downloads:**
- [Último Release (`1.3.0`)](https://github.com/Dispatcharr/Plugins/releases/download/waybill-1.3.0/waybill-1.3.0.zip)
- [Todas as Versões (1 disponível)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/waybill)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/waybill) | **Última Alteração:** [`cdd18dd`](https://github.com/Dispatcharr/Plugins/commit/cdd18dd7f396035b9cd486d3e45375eed3bcc744)

---

### [YouTubearr](https://github.com/Dispatcharr/Plugins/blob/releases/metadata/youtubearr/README.md)

**Versão:** `1.20.0` | **Autor:** jeff-gooch | **Última Atualização:** Jun 06 2026, 20:08 UTC

Plugin de livestream do YouTube sem dependências com monitoramento automático e numeração configurável

[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue?style=flat-square)](https://spdx.org/licenses/Unlicense.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/jeff-gooch/youtubearr)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
- [Último Release (`1.20.0`)](https://github.com/Dispatcharr/Plugins/releases/download/youtubearr-1.20.0/youtubearr-1.20.0.zip)
- [Todas as Versões (4 disponíveis)](https://github.com/Dispatcharr/Plugins/tree/releases/metadata/youtubearr)

**Fonte:** [Navegar](https://github.com/Dispatcharr/Plugins/tree/main/plugins/youtubearr) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/youtubearr/README.md) | **Última Alteração:** [`0900a37`](https://github.com/Dispatcharr/Plugins/commit/0900a376c840979b09ee5d3834e468d7c117094b)

---

## Usando o Manifest

Busque `manifest.json` para acessar programaticamente metadados de plugins e URLs de download:

```bash
curl https://raw.githubusercontent.com/Dispatcharr/Plugins/releases/manifest.json
```

---

*Última atualização: Jun 19 2026, 13:01 UTC*
