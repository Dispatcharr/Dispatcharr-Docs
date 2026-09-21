
[![Dispatcharr UI](assets/dispatcharr_ui_beta.png)](getting-started.md)

<div class="grid cards" markdown>

- :material-github: [__Github__ repository](https://github.com/Dispatcharr/Dispatcharr)
- :octicons-container-16: [__GH Container__ images](https://github.com/Dispatcharr/Dispatcharr/pkgs/container/dispatcharr)
- :fontawesome-regular-circle-play: [__Getting__ started](installation.md)
- :material-cog: [__Configuration__](system.md)


</div>
## Overview
Dispatcharr (pronounced like "dispatcher") is an open-source IPTV, EPG, and VOD management platform. It acts as a playlist (M3U/M3U8) editor and stream proxy, letting you curate complex playlists and serve them to Emby, Plex, Jellyfin, ChannelsDVR, or any other compatible client from a single self-hosted application.

Think of it as the \*arr family's IPTV cousin: simple, smart, and built for people who want reliability and flexibility.

Dispatcharr helps you...

- Collect, organize, and serve your IPTV streams, with an unlimited number of M3U and EPG sources.
- Manage EPG (Electronic Program Guide) data, from XMLTV, Schedules Direct, or generated dummy guides.
- Perform advanced filtering, playlist importing, and re-streaming.
- Stream movies and series on demand, with IMDB/TMDB metadata.
- Record live TV with a built-in DVR.
- Give family and friends their own accounts with scoped access.
- Expose a friendly front-end for interfacing with your streams, all from a single self-hosted solution.

## Features

**Streaming and proxying**

- __Proxy streaming engine__: stream more reliably with fewer provider connections, multiple clients on a single backend stream, and automatic failover to backup sources when a stream fails or buffering is detected.
- __Stream profiles__: choose how Dispatcharr connects to backend streams (VLC, FFmpeg, Streamlink, or a custom command).
- __Output profiles__: transcode what stream profiles deliver before it reaches the client (for example AC3 for media servers or AAC for browsers), with fMP4 or MPEG-TS container selection.
- __VPN-friendly__: run Dispatcharr behind a VPN container such as Gluetun so all provider traffic uses one VPN connection, and clients get geo-blocked content without needing their own VPN.

**Content and guide data**

- __M3U and Xtream Codes__: import, filter, and organize playlists from multiple backends.
- __EPG matching and generation__: XMLTV, Schedules Direct, or dummy guides, with auto-match to map guide data to your channels.
- __Video on Demand__: browse and stream movies and series with rich metadata.
- __Catch-up / timeshift__: replay recent programs from Xtream Codes providers that advertise archives, with per-user and global controls.

**Recording and output**

- __Built-in DVR__: schedule one-time or recurring recordings from the TV Guide, manage series rules, optionally strip commercials with Comskip, and watch recordings while they are still in progress.
- __Multi-format output__: M3U, XMLTV, Xtream Codes API, and HDHomeRun device emulation.
- __Media center integration__: HDHomeRun emulation lets Plex, Emby, and Jellyfin discover Dispatcharr as a live TV tuner and record into their own DVR libraries. ChannelsDVR is supported as well.

**Management and extensibility**

- __Real-time stats dashboard__: monitor live, VOD, and catch-up sessions, client connections, bandwidth, buffering events, and stream health.
- __Multi-user and access control__: granular per-user permissions over channels, profiles, and features, plus network-based access restrictions. Share streams via M3U or the Xtream Codes API.
- __Plugin system__: automate tasks, connect to external services, or add new workflows.
- __Fully self-hosted__: total control, no third-party dependencies.

## License (GNU AGPL v3.0)

This project is licensed under [GNU AGPL v3.0](https://www.gnu.org/licenses/agpl-3.0.html).

* Use & Modify - Anyone can use, study, and modify the software.
* Share Source - If you distribute the software or run a modified version as a service, the corresponding source code must be made available.
* Keep It Open - Derivative works must remain under the same AGPL license.

## Contributing
Pull requests, issue reports, and feature suggestions are welcome! We only ask that:

You agree to respect the GNU AGPL v3.0 license.
You follow best practices and the coding standards used in the project.
You’re respectful of all contributors in your communications.

Your contributions—code, documentation, or even bug reports—are greatly appreciated!
