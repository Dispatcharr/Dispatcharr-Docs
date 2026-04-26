# Plugin Releases

Want to get your plugin added to this list? Check out the [plugin repository](https://github.com/Dispatcharr/Plugins/blob/main/CONTRIBUTING.md) to learn how to contribute.
## Available Plugins

| Plugin | Version | Author | License | Description |
|--------|---------|-------|---------|-------------|
| [`Channel Mapparr`](#channel-mapparr) | `1.26.1001200` | PiratesIRC | MIT | Standardizes broadcast (OTA) and premium/cable channel names using network data and channel lists. Supports M3U stream import, category organization, and fuzzy matching across 42K+ channels in 11 countries. |
| [`Dispatcharr Exporter`](#dispatcharr-exporter) | `3.0.0` | sethwv | MIT | Expose Dispatcharr metrics in Prometheus exporter-compatible format for monitoring |
| [`Dispatchwrapparr`](#dispatchwrapparr) | `1.6.1` | jordandalley | MIT | An intelligent DRM/Clearkey capable stream profile for Dispatcharr |
| [`Embyfin Stream Cleanup`](#embyfin-stream-cleanup) | `1.0.1` | sethwv | MIT | Monitors Dispatcharr client activity and terminates idle Emby/Jellyfin connections |
| [`EPG Janitor`](#epg-janitor) | `1.26.1021352` | PiratesIRC | MIT | Scans for channels with EPG assignments but no program data. Auto-matches EPG to channels using intelligent fuzzy matching with aliases, removes EPG from hidden channels, and manages EPG assignments. |
| [`Event Channel Managarr`](#event-channel-managarr) | `1.26.1152350` | PiratesIRC | MIT | Automates channel visibility by hiding channels without events and showing those with events, based on EPG data and channel names. Optionally manages dummy EPG for channels without real EPG. |
| [`IPTV Checker`](#iptv-checker) | `1.26.1081815` | PiratesIRC | MIT | A Dispatcharr Plugin that goes through a playlist to check IPTV channels |
| [`Lineuparr`](#lineuparr) | `1.26.1091027` | PiratesIRC | MIT | Mirror real-world provider channel lineups by creating channel groups, channels, and fuzzy-matching IPTV streams to them. |
| [`Stream Dripper`](#stream-dripper) | `1.0.0` | Megamannen | Artistic-2.0 | Automatically drops all active streams once per day at a configured time, with a manual drop-now button. |
| [`Stream-Mapparr`](#stream-mapparr) | `1.26.1082140` | PiratesIRC | MIT | Automatically add matching streams to channels based on name similarity and quality precedence. Supports unlimited stream matching, channel visibility management, and CSV export cleanup. |

---

### [Channel Mapparr](https://github.com/Dispatcharr/Plugins/blob/releases/zips/channel-mapparr/README.md)

**Version:** `1.26.1001200` | **Author:** PiratesIRC | **Last Updated:** Apr 10 2026, 16:07 UTC

Standardizes broadcast (OTA) and premium/cable channel names using network data and channel lists. Supports M3U stream import, category organization, and fuzzy matching across 42K+ channels in 11 countries.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1422963882548265110) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-Channel-Maparr-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`1.26.1001200`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/channel-mapparr/channel-mapparr-latest.zip)
- [All Versions (1 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/channel-mapparr)

**Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/channel-mapparr) | **Last Change:** [`11388be`](https://github.com/Dispatcharr/Plugins/commit/11388be99c171d1cf47cbbbea99cfc2b27565081)

---

### [Dispatcharr Exporter](https://github.com/Dispatcharr/Plugins/blob/releases/zips/dispatcharr-exporter/README.md)

**Version:** `3.0.0` | **Author:** sethwv | **Last Updated:** Apr 18 2026, 19:12 UTC

Expose Dispatcharr metrics in Prometheus exporter-compatible format for monitoring

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1451260201775923421) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/sethwv/dispatcharr-exporter)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.22.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`3.0.0`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/dispatcharr-exporter/dispatcharr-exporter-latest.zip)
- [All Versions (2 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/dispatcharr-exporter)

**Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/dispatcharr-exporter) | **Last Change:** [`d7eefa5`](https://github.com/Dispatcharr/Plugins/commit/d7eefa54630e8de25a980c5a894c35aa9c8e8c15)

---

### [Dispatchwrapparr](https://github.com/Dispatcharr/Plugins/blob/releases/zips/dispatchwrapparr/README.md)

**Version:** `1.6.1` | **Author:** jordandalley | **Last Updated:** Apr 16 2026, 11:17 UTC

An intelligent DRM/Clearkey capable stream profile for Dispatcharr

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1422776847703212132) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/jordandalley/dispatchwrapparr)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.21.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`1.6.1`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/dispatchwrapparr/dispatchwrapparr-latest.zip)
- [All Versions (2 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/dispatchwrapparr)

**Maintainers:** michaelmurfy | **Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/dispatchwrapparr) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/dispatchwrapparr/README.md) | **Last Change:** [`7ac9bb7`](https://github.com/Dispatcharr/Plugins/commit/7ac9bb7cacde52e3a3ba7a9a5925789c97c5f65b)

---

### [Embyfin Stream Cleanup](https://github.com/Dispatcharr/Plugins/blob/releases/zips/embyfin-stream-cleanup/README.md)

**Version:** `1.0.1` | **Author:** sethwv | **Last Updated:** Apr 18 2026, 19:34 UTC

Monitors Dispatcharr client activity and terminates idle Emby/Jellyfin connections

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1491487318832447668) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/sethwv/emby-stream-cleanup)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.22.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`1.0.1`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/embyfin-stream-cleanup/embyfin-stream-cleanup-latest.zip)
- [All Versions (2 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/embyfin-stream-cleanup)

**Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/embyfin-stream-cleanup) | **Last Change:** [`ede9f2e`](https://github.com/Dispatcharr/Plugins/commit/ede9f2ea1412434bf69c6e5e114347a6fdd7e140)

---

### [EPG Janitor](https://github.com/Dispatcharr/Plugins/blob/releases/zips/epg-janitor/README.md)

**Version:** `1.26.1021352` | **Author:** PiratesIRC | **Last Updated:** Apr 12 2026, 19:22 UTC

Scans for channels with EPG assignments but no program data. Auto-matches EPG to channels using intelligent fuzzy matching with aliases, removes EPG from hidden channels, and manages EPG assignments.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1420051973994053848) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-EPG-Janitor-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`1.26.1021352`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/epg-janitor/epg-janitor-latest.zip)
- [All Versions (1 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/epg-janitor)

**Maintainers:** PiratesIRC | **Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/epg-janitor) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/epg-janitor/README.md) | **Last Change:** [`2cf371a`](https://github.com/Dispatcharr/Plugins/commit/2cf371ad80c2219d832938067564d40b038ccd26)

---

### [Event Channel Managarr](https://github.com/Dispatcharr/Plugins/blob/releases/zips/event-channel-managarr/README.md)

**Version:** `1.26.1152350` | **Author:** PiratesIRC | **Last Updated:** Apr 26 2026, 14:37 UTC

Automates channel visibility by hiding channels without events and showing those with events, based on EPG data and channel names. Optionally manages dummy EPG for channels without real EPG.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-Event-Channel-Managarr-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`1.26.1152350`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/event-channel-managarr/event-channel-managarr-latest.zip)
- [All Versions (3 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/event-channel-managarr)

**Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/event-channel-managarr) | **Last Change:** [`18c0e37`](https://github.com/Dispatcharr/Plugins/commit/18c0e378cd16e8d752f6acb68c132092614bd697)

---

### [IPTV Checker](https://github.com/Dispatcharr/Plugins/blob/releases/zips/iptv-checker/README.md)

**Version:** `1.26.1081815` | **Author:** PiratesIRC | **Last Updated:** Apr 18 2026, 19:11 UTC

A Dispatcharr Plugin that goes through a playlist to check IPTV channels

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-IPTV-Checker-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`1.26.1081815`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/iptv-checker/iptv-checker-latest.zip)
- [All Versions (2 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/iptv-checker)

**Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/iptv-checker) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/iptv-checker/README.md) | **Last Change:** [`f7bd820`](https://github.com/Dispatcharr/Plugins/commit/f7bd8203fb613889601839954dc14bef2db1c7aa)

---

### [Lineuparr](https://github.com/Dispatcharr/Plugins/blob/releases/zips/lineuparr/README.md)

**Version:** `1.26.1091027` | **Author:** PiratesIRC | **Last Updated:** Apr 19 2026, 11:01 UTC

Mirror real-world provider channel lineups by creating channel groups, channels, and fuzzy-matching IPTV streams to them.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-Lineuparr-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`1.26.1091027`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/lineuparr/lineuparr-latest.zip)
- [All Versions (2 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/lineuparr)

**Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/lineuparr) | **Last Change:** [`9f1898e`](https://github.com/Dispatcharr/Plugins/commit/9f1898eec05b56849cbd0500cbb3561aff756bae)

---

### [Stream Dripper](https://github.com/Dispatcharr/Plugins/blob/releases/zips/stream-dripper/README.md)

**Version:** `1.0.0` | **Author:** Megamannen | **Last Updated:** Mar 29 2026, 15:51 UTC

Automatically drops all active streams once per day at a configured time, with a manual drop-now button.

[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic--2.0-blue?style=flat-square)](https://spdx.org/licenses/Artistic-2.0.html)

**Downloads:**
 [Latest Release (`1.0.0`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/stream-dripper/stream-dripper-latest.zip)
- [All Versions (1 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/stream-dripper)

**Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/stream-dripper) | **Last Change:** [`4e8f1b1`](https://github.com/Dispatcharr/Plugins/commit/4e8f1b108c1e84f60520710d13e54eb2fb519648)

---

### [Stream-Mapparr](https://github.com/Dispatcharr/Plugins/blob/releases/zips/stream-mapparr/README.md)

**Version:** `1.26.1082140` | **Author:** PiratesIRC | **Last Updated:** Apr 18 2026, 22:09 UTC

Automatically add matching streams to channels based on name similarity and quality precedence. Supports unlimited stream matching, channel visibility management, and CSV export cleanup.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Stream-Mapparr)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`1.26.1082140`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/stream-mapparr/stream-mapparr-latest.zip)
- [All Versions (2 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/stream-mapparr)

**Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/stream-mapparr) | **Last Change:** [`4812211`](https://github.com/Dispatcharr/Plugins/commit/4812211adaa1d7d67b5a2ae8154e857eab5d5b13)

---

## Using the Manifest

Fetch `manifest.json` to programmatically access plugin metadata and download URLs:

```bash
curl https://raw.githubusercontent.com/Dispatcharr/Plugins/releases/manifest.json
```

---

*Last updated: Apr 26 2026, 14:38 UTC*
