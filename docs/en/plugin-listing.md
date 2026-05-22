# Plugin Releases

Want to get your plugin added to this list? Check out the [plugin repository](https://github.com/Dispatcharr/Plugins/blob/main/CONTRIBUTING.md) to learn how to contribute.
## Available Plugins

| Plugin | Version | Author | License | Description |
|--------|---------|-------|---------|-------------|
| [`Channel Mapparr`](#channel-mapparr) | `1.26.1001200` | PiratesIRC | MIT | Standardizes broadcast (OTA) and premium/cable channel names using network data and channel lists. Supports M3U stream import, category organization, and fuzzy matching across 42K+ channels in 11 countries. |
| [`Dispatcharr Exporter`](#dispatcharr-exporter) | `3.0.1` | sethwv | MIT | Expose Dispatcharr metrics in Prometheus exporter-compatible format for monitoring |
| [`Dispatchwrapparr`](#dispatchwrapparr) | `1.7.0` | jordandalley | MIT | An intelligent DRM/Clearkey capable stream profile for Dispatcharr |
| [`Embyfin Stream Cleanup`](#embyfin-stream-cleanup) | `1.2.0` | sethwv | MIT | Monitors Dispatcharr client activity and terminates idle Emby/Jellyfin connections |
| [`EPG Janitor`](#epg-janitor) | `1.26.1420824` | PiratesIRC | MIT | Scans for channels with EPG assignments but no program data. Auto-matches EPG to channels using intelligent fuzzy matching with aliases, removes EPG from hidden channels, and manages EPG assignments. |
| [`EPGeditARR`](#epgeditarr) | `0.2.07` | jstevenscl | MIT | Transform and clean your EPG data using regex and find/replace rules. Creates virtual copies of your sources — originals are never touched. Fills placeholder schedules for channels with no EPG, and provides a full SiriusXM toolkit: fill EPG from the community XMLTV (741 channels, sports smart blocks), sort into official lineup order, assign logos, and rename channels using the official SiriusXM API channel database. |
| [`Event Channel Managarr`](#event-channel-managarr) | `1.26.1401103` | PiratesIRC | MIT | Automates channel visibility by hiding channels without events and showing those with events, based on EPG data and channel names. Optionally manages dummy EPG for channels without real EPG. |
| [`IPTV Checker`](#iptv-checker) | `1.26.1421301` | PiratesIRC | MIT | A Dispatcharr Plugin that goes through a playlist to check IPTV channels |
| [`Lineuparr`](#lineuparr) | `1.26.1370103` | PiratesIRC | MIT | Mirror real-world provider channel lineups by creating channel groups, channels, and fuzzy-matching IPTV streams to them. |
| [`Stream Dripper`](#stream-dripper) | `1.0.0` | Megamannen | Artistic-2.0 | Automatically drops all active streams once per day at a configured time, with a manual drop-now button. |
| [`Stream-Mapparr`](#stream-mapparr) | `1.26.1082140` | PiratesIRC | MIT | Automatically add matching streams to channels based on name similarity and quality precedence. Supports unlimited stream matching, channel visibility management, and CSV export cleanup. |
| [`Waybill`](#waybill) | `1.3.0` | Matthew-Beckett | MIT | Waybill matches, renames, and organizes any streams no matter the provider. Infinitely configurable pipelines for total control. |
| [`YouTubearr`](#youtubearr) | `1.19.0` | jeff-gooch | Unlicense | Zero-dependency YouTube livestream plugin with automatic monitoring and configurable numbering |

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

**Version:** `3.0.1` | **Author:** sethwv | **Last Updated:** May 10 2026, 18:26 UTC

Expose Dispatcharr metrics in Prometheus exporter-compatible format for monitoring

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1451260201775923421) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/swvn-dispatch/dispatcharr-exporter)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.22.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`3.0.1`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/dispatcharr-exporter/dispatcharr-exporter-latest.zip)
- [All Versions (3 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/dispatcharr-exporter)

**Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/dispatcharr-exporter) | **Last Change:** [`b70abd6`](https://github.com/Dispatcharr/Plugins/commit/b70abd6df9cd520bcc28ad7fced085be135897a9)

---

### [Dispatchwrapparr](https://github.com/Dispatcharr/Plugins/blob/releases/zips/dispatchwrapparr/README.md)

**Version:** `1.7.0` | **Author:** jordandalley | **Last Updated:** May 22 2026, 04:46 UTC

An intelligent DRM/Clearkey capable stream profile for Dispatcharr

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1422776847703212132) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/jordandalley/dispatchwrapparr)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.25.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`1.7.0`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/dispatchwrapparr/dispatchwrapparr-latest.zip)
- [All Versions (4 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/dispatchwrapparr)

**Maintainers:** michaelmurfy | **Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/dispatchwrapparr) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/dispatchwrapparr/README.md) | **Last Change:** [`ef5e336`](https://github.com/Dispatcharr/Plugins/commit/ef5e336dad2396db99535c190be7e6c58d8cb2f9)

---

### [Embyfin Stream Cleanup](https://github.com/Dispatcharr/Plugins/blob/releases/zips/embyfin-stream-cleanup/README.md)

**Version:** `1.2.0` | **Author:** sethwv | **Last Updated:** May 15 2026, 17:13 UTC

Monitors Dispatcharr client activity and terminates idle Emby/Jellyfin connections

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1491487318832447668) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/swvn-dispatch/embyfin-stream-cleanup)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.22.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`1.2.0`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/embyfin-stream-cleanup/embyfin-stream-cleanup-latest.zip)
- [All Versions (6 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/embyfin-stream-cleanup)

**Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/embyfin-stream-cleanup) | **Last Change:** [`315a967`](https://github.com/Dispatcharr/Plugins/commit/315a967448ff4db469a66491ebc404bfb8e0bb42)

---

### [EPG Janitor](https://github.com/Dispatcharr/Plugins/blob/releases/zips/epg-janitor/README.md)

**Version:** `1.26.1420824` | **Author:** PiratesIRC | **Last Updated:** May 22 2026, 14:19 UTC

Scans for channels with EPG assignments but no program data. Auto-matches EPG to channels using intelligent fuzzy matching with aliases, removes EPG from hidden channels, and manages EPG assignments.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Discord](https://img.shields.io/badge/Discord-Discussion-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/channels/1340492560220684331/1420051973994053848) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-EPG-Janitor-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`1.26.1420824`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/epg-janitor/epg-janitor-latest.zip)
- [All Versions (2 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/epg-janitor)

**Maintainers:** PiratesIRC | **Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/epg-janitor) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/epg-janitor/README.md) | **Last Change:** [`a5ccaa9`](https://github.com/Dispatcharr/Plugins/commit/a5ccaa94fb0ddb806eb2ef36abef0c8a665afb8d)

---

### [EPGeditARR](https://github.com/Dispatcharr/Plugins/blob/releases/zips/epgeditarr/README.md)

**Version:** `0.2.07` | **Author:** jstevenscl | **Last Updated:** May 19 2026, 16:17 UTC

Transform and clean your EPG data using regex and find/replace rules. Creates virtual copies of your sources — originals are never touched. Fills placeholder schedules for channels with no EPG, and provides a full SiriusXM toolkit: fill EPG from the community XMLTV (741 channels, sports smart blocks), sort into official lineup order, assign logos, and rename channels using the official SiriusXM API channel database.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/jstevenscl/epgeditarr)

**Downloads:**
 [Latest Release (`0.2.07`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/epgeditarr/epgeditarr-latest.zip)
- [All Versions (3 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/epgeditarr)

**Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/epgeditarr) | **Last Change:** [`fc6f5f6`](https://github.com/Dispatcharr/Plugins/commit/fc6f5f6fff939c45828f221f47c3355b33cf4b66)

---

### [Event Channel Managarr](https://github.com/Dispatcharr/Plugins/blob/releases/zips/event-channel-managarr/README.md)

**Version:** `1.26.1401103` | **Author:** PiratesIRC | **Last Updated:** May 20 2026, 11:52 UTC

Automates channel visibility by hiding channels without events and showing those with events, based on EPG data and channel names. Optionally manages dummy EPG for channels without real EPG.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-Event-Channel-Managarr-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`1.26.1401103`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/event-channel-managarr/event-channel-managarr-latest.zip)
- [All Versions (7 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/event-channel-managarr)

**Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/event-channel-managarr) | **Last Change:** [`618a835`](https://github.com/Dispatcharr/Plugins/commit/618a835b69185ab601e3cce394cb4d9bcc0e5258)

---

### [IPTV Checker](https://github.com/Dispatcharr/Plugins/blob/releases/zips/iptv-checker/README.md)

**Version:** `1.26.1421301` | **Author:** PiratesIRC | **Last Updated:** May 22 2026, 14:18 UTC

A Dispatcharr Plugin that goes through a playlist to check IPTV channels

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-IPTV-Checker-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`1.26.1421301`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/iptv-checker/iptv-checker-latest.zip)
- [All Versions (6 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/iptv-checker)

**Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/iptv-checker) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/iptv-checker/README.md) | **Last Change:** [`c53b209`](https://github.com/Dispatcharr/Plugins/commit/c53b209e8defac59b5c28c8e25c0fc0a04f14bff)

---

### [Lineuparr](https://github.com/Dispatcharr/Plugins/blob/releases/zips/lineuparr/README.md)

**Version:** `1.26.1370103` | **Author:** PiratesIRC | **Last Updated:** May 17 2026, 18:53 UTC

Mirror real-world provider channel lineups by creating channel groups, channels, and fuzzy-matching IPTV streams to them.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PiratesIRC/Dispatcharr-Lineuparr-Plugin)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`1.26.1370103`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/lineuparr/lineuparr-latest.zip)
- [All Versions (3 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/lineuparr)

**Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/lineuparr) | **Last Change:** [`c0400ef`](https://github.com/Dispatcharr/Plugins/commit/c0400efc30fbb59172ea0886e7fc5408effeb0f7)

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

### [Waybill](https://github.com/Dispatcharr/Plugins/blob/releases/zips/waybill/README.md)

**Version:** `1.3.0` | **Author:** Matthew-Beckett | **Last Updated:** May 12 2026, 19:36 UTC

Waybill matches, renames, and organizes any streams no matter the provider. Infinitely configurable pipelines for total control.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://spdx.org/licenses/MIT.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Matthew-Beckett/waybill)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-0.23.0-brightgreen?style=flat-square) ![Dispatcharr max](https://img.shields.io/badge/Dispatcharr_max-0.24.0-orange?style=flat-square)

**Downloads:**
 [Latest Release (`1.3.0`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/waybill/waybill-latest.zip)
- [All Versions (1 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/waybill)

**Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/waybill) | **Last Change:** [`cdd18dd`](https://github.com/Dispatcharr/Plugins/commit/cdd18dd7f396035b9cd486d3e45375eed3bcc744)

---

### [YouTubearr](https://github.com/Dispatcharr/Plugins/blob/releases/zips/youtubearr/README.md)

**Version:** `1.19.0` | **Author:** jeff-gooch | **Last Updated:** May 17 2026, 16:52 UTC

Zero-dependency YouTube livestream plugin with automatic monitoring and configurable numbering

[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue?style=flat-square)](https://spdx.org/licenses/Unlicense.html) [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/jeff-gooch/youtubearr)

![Dispatcharr min](https://img.shields.io/badge/Dispatcharr_min-v0.20.0-brightgreen?style=flat-square)

**Downloads:**
 [Latest Release (`1.19.0`)](https://github.com/Dispatcharr/Plugins/raw/releases/zips/youtubearr/youtubearr-latest.zip)
- [All Versions (3 available)](https://github.com/Dispatcharr/Plugins/tree/releases/zips/youtubearr)

**Source:** [Browse](https://github.com/Dispatcharr/Plugins/tree/main/plugins/youtubearr) | [README](https://github.com/Dispatcharr/Plugins/blob/main/plugins/youtubearr/README.md) | **Last Change:** [`d468305`](https://github.com/Dispatcharr/Plugins/commit/d4683054a70509329279d4ce5e20779591bd297a)

---

## Using the Manifest

Fetch `manifest.json` to programmatically access plugin metadata and download URLs:

```bash
curl https://raw.githubusercontent.com/Dispatcharr/Plugins/releases/manifest.json
```

---

*Last updated: May 22 2026, 14:19 UTC*
