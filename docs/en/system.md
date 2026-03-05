## Users
From the Users page you can create and manage all Dispatcharr users. There are 3 types of users:

1. Admin
    * Has total access in Dispatcharr
    * XC login enabled only if an XC Password is set for the user
2. Standard User
    * Has access to Dispatcharr UI, but only the Channels, TV Guide, and Settings pages
        * Dispatcharr UI access is granted for all channels
    * May allow access to all Channel Profiles or restrict to a subset
        * Restrictions apply only for access via XC
    * In Settings, only able to change UI settings
    * XC login enabled only if an XC Password is set for the user
    * Optionally hide channels marked as "Mature Content" in user settings
3. Streamer
    * No access to the Dispatcharr UI
    * This user level is for XC login only
    * Optionally hide channels marked as "Mature Content" in user settings

## Logo Manager
From the Logo Manager page you can upload and manage logos.  
!!! info
    Dispatcharr will also automatically scan `/data/logos` for existing files

## Settings

### UI Settings
* Table Size - Set the size of the channel rows in "Channels"
* Pin Table Headers - Toggles whether to keep table headers visible when scrolling
* Date format - Set the display of dates to either Day/Month/Year or Month/Day/Year
* Time format - Set the display of time to either 12 hour or 24 hour format

### DVR
* Enable Comskip (remove commercials after recording) - Toggle on or off
* Custom comskip.ini path - Enter a custom path or leave blank to use the built-in defaults.
* Select comskip.ini - Click this button to select, upload, and use a custom comskip.ini to dispatcharr
* Start early (minutes) - Begin recording this many minutes before the scheduled start.
* End late (minutes) - Continue recording this many minutes after the scheduled end.
* TV Path Template - Supports `{show}`, `{season}`, `{episode}`, `{sub_title}`, `{channel}`, `{year}`, `{start}`, `{end}`. Use format specifiers like `{season:02d}`. Relative paths are under your library dir.
* TV Fallback Template - Template used when an episode has no season/episode. Supports `{show}`, `{start}`, `{end}`, `{channel}`, `{year}`.
* Movie Path Template - Supports `{title}`, `{year}`, `{channel}`, `{start}`, `{end}`. Relative paths are under your library dir.
* Movie Fallback Template - Template used when movie metadata is incomplete. Supports `{start}`, `{end}`, `{channel}`.

### Stream Settings
* Default User-Agent - Set the default User-Agent
* Default Stream Profile - Set the default Stream Profile
* Preferred Region - Set your preferred region
* Auto Import Mapped Files - Toggle on/off auto-importing of M3U files or EPG xml data from /data/epgs and/or /data/m3us
* M3U Hash Key - Set how to hash your M3U. This affects the Stale stream cleanup.
    * The default setting hashes on URL. Available options include:
        * Name
        * URL - For XC accounts, the stream hash uses the stable stream_id instead of the URL when hashing, ensuring XC streams maintain their identity and channel associations even when account credentials or server URLs change
        * TVG-ID
        * M3U ID
        * Group
    * The original stream will disappear from Dispatcharr according to your Stale Stream Retention (days) setting for your M3U account
    !!! note
        Make sure to click the `Save` button after making any changes to the M3U Hash Key.
    !!! example
        Your provider regularly changes the names of certain PPV streams, but you have channels set up for these streams and don't want the stream to be deleted due to stale stream cleanup. Since the provider is changing the stream name, but not the URL or TVG-ID, you set your M3U hash key to `URL` and `TVG-ID` only

### System settings
Configure how many system events (channel start/stop, buffering, etc.) to keep in the database. Events are displayed on the Stats page.

* Maximum System Events - Number of events to retain (minimum: 10, maximum: 1000)
    
### User-Agents
In the context of IPTV, a user agent is a string of text that identifies the client application (e.g., a player like Kodi or VLC) to the IPTV server. It's included in the HTTP headers of requests sent by the client to the server, informing the server about the type of device and software used to access the IPTV stream. Default Dispatcharr User-Agents are available for VLC, Chrome, and TiviMate.  

* Add your own User-Agent by clicking the "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Add User-Agent" button on the Settings page
    * Name - a name for your user-agent
    * User-Agent - The text to include for your user-agent string
    * Description - (Optional) a description of the user-agent for your own use

### Stream Profiles
| Stream Profile | [Proxy support <br>(buffer, VPN support, etc.)](/Dispatcharr-Docs/system/#proxy-settings)          | [Fallback stream<br> support](/Dispatcharr-Docs/channels/#fallback-streams)                          | [Stream stats<br> support](/Dispatcharr-Docs/stats/#stats)                                        | System resources      | 
| -------------- | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-------------------: |
| ffmpeg         | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | Low                   |
| Proxy          | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | Very low              |
| Redirect       | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | Very low              |
| streamlink     | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | Low                   |
| VLC            | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | Low                   |
| Custom ffmpeg  | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | Low to Very High      |
| Custom VLC     | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | Low to Very High      |
| yt-dlp         | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | Low                   |

!!! note
    <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> = Full support  
    <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i> = Partial support  
    <i data-lucide="square-x" style="color: red; width: 18px;"></i> = Unsupported  

* There are 5 default stream profiles with the ability to create your own custom ones
    * ffmpeg - Dispatcharr will proxy streams via ffmpeg. No transcoding takes place with the default ffmpeg stream profile, it will just remux streams. Uses more system resources than proxy
    * Proxy - Proxies the original streams, allowing you to use Dispatcharr features (redundant streams per channel), and adds a slight buffer to help with stream stability. Uses fewer system resources than ffmpeg. 
        
        !!! note
            Proxy falls back to the ffmpeg default stream profile if the source stream is not mpegts
            
    * Redirect - Redirects the original M3U stream URL to your client. There is no proxying with this profile
    * streamlink - For custom streams based on the services supported by [streamlink](https://streamlink.github.io/)
    * VLC - Dispatcharr will proxy streams via VLC. No transcoding takes place with the default VLC stream profile, it will just remux streams. Uses more system resources than proxy
* Custom Stream Profiles - create your own custom stream profile by clicking the "Add Stream Profile" button on the Settings page
    * Name - a name for your stream profile
    * Command - FFmpeg, Streamlink, VLC, yt-dlp, or Custom
    * Custom Command (only for Custom) - Enter the executable name (e.g. ffmpeg) or full path (e.g. /usr/local/bin/mycmd)
    * Parameters - Set your custom [FFmpeg](https://ffmpeg.org/ffmpeg.html), [Streamlink](https://streamlink.github.io/cli.html), [VLC](https://wiki.videolan.org/VLC_command-line_help/), or [yt-dlp](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#output-template) parameters
    * User-Agent - Set the default user-agent for this stream profile
    
### Network Access
Allows you to restrict access to Dispatcharr by CIDR range. You may enter multiple CIDR ranges separated by commas. 0.0.0.0/0 allows all IPs
!!! example
    | CIDR Range     | Number of IPs | Range example                 |
    | -------------- | :-----------: | ----------------------------- |
    | 192.168.1.0/32 | 1             | 192.168.1.0 (single IP)       |
    | 192.168.1.0/24 | 256           | 192.168.1.0 - 192.168.1.255   |
    | 192.168.1.0/16 | 65,536        | 192.168.0.0 - 192.168.255.255 |
    
* M3U / EPG Endpoints - Limit access to M3U, EPG, and HDHR URLs (default setting allows access on local networks only)
* Stream Endpoints - Limit network access to stream URLs, including XC stream URLs
* XC API - Limit access to the XC API
* UI - Limit access to the Dispatcharr UI 
    
!!! tip
    To block access entirely for any of the above, use the address `127.0.0.1/32` (do NOT use for UI!)
    
    
### Proxy Settings
These settings affect all stream profiles with the exception of redirect

* Buffering Timeout - Maximum time (in seconds) to wait for buffering before switching streams
* Buffering Speed - Speed threshold below which buffering is detected (1.0 = normal speed)
* Buffer Chunk TTL - Time-to-live for buffer chunks in seconds (how long stream data is cached)
* Channel Shutdown Delay - Delay in seconds before shutting down a channel after last client disconnects
* Channel Initialization Grace Period - Grace period in seconds during channel initialization 

### Backup & Restore
Create, schedule, and restore backups

* Schedule backups - Enable to set a regular backup schedule
* Advanced (Cron Expression) - Enable to set a cron expression for scheduled backups. Cron expressions allow for more granular control over backup schedules.  

    !!! examples
        `0 3 * * *` - Every day at 3:00 AM  
        `0 2 * * 0` - Every Sunday at 2:00 AM  
        `0 */6 * * *` - Every 6 hours  
        `30 14 1 * *` - 1st of every month at 2:30 PM  
        
* Retention - The number of backups to keep. The oldest backup will be deleted when a new backup is created that exceeds this number. Set as 0 to retain all old backups.  