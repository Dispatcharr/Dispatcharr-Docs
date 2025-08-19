# User Guide

## Channels
From the channels page you can create and manage all added channels, streams, and external links

### Channels	
* Choose the "Channels Profile" by clicking the drop-down menu under the Channels header. The default profile is "All"
    * Create a new Channels Profile by clicking the <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> icon next to the drop-down menu
	* Channels Profiles can be used to create subsets of your Channels list. Each profile will have it's own HDHR, M3U, and EPG link generated. When creating XC users, you can select which Channels Profiles each user has access to
	* To remove channels from a Channels Profile, click the corresponding toggle icon in the <i data-lucide="scan-eye" style="color: white; width: 18px;"></i> column to toggle it off
	    * For bulk toggling, use the channel check boxes to select multiple channels, then click the toggle icon
* Search channel names by clicking in the "Name" column header
* Search by channel group by clicking in the "Group" column header
* Edit a channel by clicking the corresponding <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> "Edit Channel" icon under the "Actions" column 
    * Channel Name - Edit the name for your Channel
	* Channel Group - Edit the group for your channel. If you want to create and add to a new group, click the <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> icon
	* Stream Profile - Click here if you want to use something other than the default stream profile for this channel
	* Logo - Choose a logo or upload a new one
	* Channel # - Edit the channel number. Currently only integers are accepted
	* TVG-ID - Edit the TVG-ID field for your channel. Auto-match tries to match episode guide to this field
	* Gracenote StationID - Edit the Gracenote ID for your channel. These are typically 5 or 6 digit numbers that Gracenote (a common EPG provider) can use to identify TV channels.
	* EPG - Click in the box to manually choose an EPG entry, or click "Use Dummy" to assign a dummy EPG entry
* Delete a channel by clicking the corresponding <i data-lucide="square-minus" style="color: red; width: 18px;"></i> "Delete channel" icon under the "Actions" column 
* Preview (play) a channel by clicking the corresponding <i data-lucide="circle-play" style="color: Limegreen; width: 18px;"></i> "Preview channel" icon under the "Actions" column 
* Toggle the channel check boxes to use the bulk editing buttons above the grid on the selected channels, or to add streams to channels
    * "<i data-lucide="square-minus" style="color: white; width: 18px;"></i> Remove" to bulk remove channels
	* "<i data-lucide="arrow-down-0-1" style="color: white; width: 18px;"></i> Assign" to assign channel numbers
	* "<i data-lucide="binary" style="color: white; width: 18px;"></i> Auto-Match" to auto match channels to EPG
    * Click the <i data-lucide="list-plus" style="color: RoyalBlue; width: 18px;"></i> "Add to channel" icon under the Streams Actions column to add that stream to the selected channels
### Streams
* Search stream names by clicking in the "Name" column header
* Search by M3U group by clicking in the "Group" column header
* Search by M3U name by clicking the "M3U" column header
* Create a new channel by clicking the corresponding <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> "Create New Channel" icon under the "Actions" column 
* Add a stream to an existing channel by clicking the corresponding <i data-lucide="list-plus" style="color: RoyalBlue; width: 18px;"></i> "Add to Channel" button under the "Actions" column 
* Preview (play) a stream by clicking the corresponding <i data-lucide="ellipsis-vertical" style="color: LightSkyBlue; width: 18px;"></i> icon under the "Actions" column, then press "Preview Stream"
* Toggle the stream check boxes to use the bulk editing buttons above the grid on the selected streams
    * "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Add streams to channel" to add the checked streams to the checked channel(s) 
    * "<i data-lucide="square-minus" style="color: white; width: 18px;"></i> Remove" to bulk remove streams
	* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Create Channels" to create a new channel for each selected stream
    !!! note
        For every selected stream, a corresponding new channel will be created. For example, if 3 streams are selected, 3 new channels will be created.
* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Create Stream" to create a new stream not associated with any of your uploaded M3Us

### Links
The "Links" section has buttons to see and copy the external links needed by a client

* <i data-lucide="tv-minimal" style="color: YellowGreen; width: 18px;"></i> <span style="color: YellowGreen;">HDHR</span> - Use this link for clients that use HD Homerun format
* <i data-lucide="screen-share" style="color: SlateBlue; width: 18px;"></i> <span style="color: SlateBlue;">M3U</span> - Use this link for clients that use M3U format
    * Advanced options
	    1. Bypass logo caching by adding the following to your URL `?cachedlogos=false` (Default true)
		2. Set what is used for the TVG-ID field (Options: channel_number (default), tvg_id, gracenote) `?tvg_id_source=gracenote`
		3. URLs output in the M3U will be the direct URL from the first stream in the channel list `?direct=true` (Default false)
		4. Combine multiple options `?cachedlogos=false&tvg_id_source=gracenote`
* <i data-lucide="scroll" style="color: Gray; width: 18px;"></i> <span style="color: Gray;">EPG</span> - Use this link to provide your client with episode guide data that matches your channels
    * Advanced options
	    1. Bypass logo caching by adding the following to your URL (useful for Plex) `?cachedlogos=false` 
		2. Use Gracenote ID's for TVG-ID's by adding the following to your URL (useful for Emby) `?tvg_id_source=gracenote`
		3. Number of days to output the epg for `?days=4` (Default 0 = all)
		4. Combine multiple options `?cachedlogos=false&tvg_id_source=gracenote&days=7`

---

## M3U & EPG Manager
From this page you can add and maintain your M3U accounts and EPGs
### M3U accounts
* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Add" - Click this button to add new M3U accounts 
    * Name - A name for your M3U account
	* URL - The M3U URL (not required if uploading an M3U file)
	* Account Type - Standard for direct M3U URLs, Xtream Codes for panel-based services
	* Upload files - If uploading a local M3U file (not required if M3U URL is used)
	* Max Streams - Set a number for the max number of concurrent streams allowed for your account. For unlimited, set to 0
	* User-Agent - If you want to set a specific user-agent for this account
	* Refresh Interval (hours) - How often (in number of hours) to refresh the M3U URL
	* Stale Stream Retention (days) - Streams not seen for this many days will be removed.  For immediate deletion, set to 0
	* Active - Toggle whether this account is active or not
	!!! note
	    M3Us can be automatically added into dispatcharr by adding M3U file(s) into the `/data/m3us` folder and if `Auto-Import Mapped Files` is enabled under Settings > Stream Settings
* You can click column headers to change the sort order of existing M3U accounts
* Actions column
    * <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> edit icon to edit the associated M3U account
        * "Filters" button - Opens the Filters Manager
            * Click 'New' to add filters.  Filters process in order, and once matched no additional rules are evaluated.  Filters may be ordered using the drag-and-drop anchor to the left of the rule, and edited/deleted using the icons to the right of the rule. 
                * Field: selects which stream attribute to filter on: "Group", "Stream Name" or "Stream URL"
                * Regex Pattern: enter a valid regular expression to match the Field to
                * Exclude: toggle to determine include/exclude based on the regular expression
                * Case Sensitive: toggle to determine case sensitivity for the regular expression
            * Select 'Save' to add the newly created filter 
            * Add additional filters to refine the selected Field values as needed.
	    * "Groups" button - Opens the Group Manager
		    * Filter visible groups with the search box at the top of the group manager
			* Ignore streams from groups by de-selecting them
			* Auto Channel Sync: When enabled, channels will be automatically created for all streams in the group during M3U updates, and removed when streams are no longer present. 
			    * Start Channel #: Set a starting channel number for each group to organize your channels.
			    * Advanced options:
				    * Force Dummy EPG: Sets a dummy EPG for the channel that matches the channel name
					* Override Channel Group: Set a channel group for the created channels that differs from the group you selected
					* Channel Name Find & Replace (Regex): Search and replace to rename your channels. By default the channel name will match the stream name
					* Channel Name Filter (Regex): Only create channels from streams which match your filter criteria
					* Channel Profile Assignment: Allows you to choose which profile(s) to include the created channels in (default All)
					* Channel Sort Order: Choose the sort order for your created channels (Provider order is default)
					
		* "Profiles" button - Allows you to add a second set of credentials for the same provider. 
        !!! info
            Let's say you have 3 accounts you want to add to dispatcharr. 2 from Provider-A and 1 from Provider-B. Rather than adding three separate M3U accounts, you could add Provider-A once and set up a profile to use the username and password from each Provider-A account under the same M3U account.  
	        1. Set up Provider-A as an M3U account in the M3U & EPG manager.  
			2. Click the corresponding yellow edit icon under the Actions column.  
			3. Click the "Profiles" button.  
			4. Click the "New" button.  
			5. The "Search Pattern (Regex)" and "Replace Pattern" fields will act as a search and replace in your m3u file.  
			!!! example
			    | Example URL | Search Pattern | Replace Pattern |
				| --- | --- | --- |
				| `http://provider.com/live/username1/password1/stream` | `username1/password1` | `username2/password2` |
			
	* <i data-lucide="square-minus" style="color: red; width: 18px;"></i> delete icon to remove the associated M3U account
	* <i data-lucide="refresh-cw" style="color: RoyalBlue; width: 18px;"></i> refresh icon to manually refresh/update the associated M3U account
	
### EPGs
* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Add EPG" - Click this button to add a new EPG
    * Name - A name for your EPG
	* URL - The URL for your EPG 
	* API Key - API key associated with your EPG, if required
	* Source Type - Choose XMLTV or Schedules Direct depending on your EPG provider format
	* Refresh Interval (hours) - How often (in number of hours) to refresh the EPG
    !!! note
	    EPGs can be automatically added into dispatcharr by adding EPG file(s) into the `/data/epgs` folder and if `Auto-Import Mapped Files` is enabled under Settings > Stream Settings
* You can click column headers to change the sort order of existing EPGs
* Actions column
    * <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> edit icon to edit the associated EPG
	* <i data-lucide="square-minus" style="color: red; width: 18px;"></i> delete icon to remove the associated EPG
	* <i data-lucide="refresh-cw" style="color: RoyalBlue; width: 18px;"></i> refresh icon to manually refresh/update the associated EPG
	
---
	
## TV Guide
* The TV Guide page will by default display channels for which there is EPG data loaded. 
* You can search by channel name and/or filter by channel groups and profiles.
* Click a channel logo to preview the channel. 
* Click guide entries to expand guide data, preview the channel, or set to record.
!!! note
    You can record by channel and time from the DVR page

---

## DVR
* The DVR page allows you to manage your current and future recordings and set new recordings based on channel and time.

---

## Stats
* The Stats page shows info on all active streams
    * Channel name
	* Channel logo
	* Stream profile
    * Stream uptime
	* Active stream for each currently active channel (drop down selector allows you to change the active stream)
	* Stream stats (only available for ffmpeg or custom ffmpeg stream profiles)
	    * Video resolution
		* Source frames per second
		* Video codec
		* Audio codec
		* Audio channel configuration
		* Stream type (MPEGTS, HLS)
		* Current speed
	* Stream speed (current and average)
	* Stream total data served
	* Number of watchers
	* IP addresses and associated User-Agents
* You can force stop any current streams by clicking the <i data-lucide="square-x" style="color: red; width: 18px;"></i> "Stop Channel" button

---

## Users
From the Users page you can create and manage all Dispatcharr users. There are 3 types of users:

1. Admin
	* Has total access in Dispatcharr
    * XC login enabled only if an XC Password is set for the user
2. Standard User
	* Has access to Dispatcharr UI, but only the Channels, TV Guide, and Settings pages
	* May allow access to all Channel Profiles or restrict to a subset
	* In Settings, only able to change UI settings
	* XC login enabled only if an XC Password is set for the user
3. Streamer
	* No access to the Dispatcharr UI
	* This user level is for XC login only

---

## Logo Manager
From the Logo Manager page you can upload and manage logos.  
!!! info
    Dispatcharr will also automatically scan `/data/logos` for existing files

---
	
## Settings

### Stream Settings
* Default User-Agent - Set the default User-Agent
* Default Stream Profile - Set the default Stream Profile
* Preferred Region - Set your preferred region
* Auto Import Mapped Files - Toggle on/off auto-importing of M3U files or EPG xml data from /data/epgs and/or /data/m3us
* M3U Hash Key - Set how to hash your M3U. This affects the Stale stream cleanup.
    * The default setting hashes on name, URL, and TVG-ID. That means that a provider change to a source stream that changes name, URL, or TVG-ID will result in a new stream being created in Dispatcharr. 
	* The original stream will disappear from Dispatcharr according to your Stale Stream Retention (days) setting for your M3U account
    !!! example
        Your provider regularly changes the names of certain PPV streams, but you have channels set up for these streams and don't want the stream to be deleted due to stale stream cleanup. Since the provider is changing the stream name, but not the URL or TVG-ID, you set your M3U hash key to `URL` and `TVG-ID` only
	
### User-Agents
* In the context of IPTV, a user agent is a string of text that identifies the client application (e.g., a player like Kodi or VLC) to the IPTV server. It's included in the HTTP headers of requests sent by the client to the server, informing the server about the type of device and software used to access the IPTV stream.
* Default Dispatcharr User-Agents are available for VLC, Chrome, and TiviMate
* Add your own User-Agent by clicking the "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Add User-Agent" button on the Settings page
    * Name - a name for your user-agent
	* User-Agent - The text to include for your user-agent string
	* Description - (Optional) a description of the user-agent for your own use

### Stream Profiles
* There are 4 default stream profiles with the ability to create your own custom ones
    * ffmpeg - Dispatcharr will proxy streams via ffmpeg. No transcoding takes place with the default ffmpeg stream profile, it will just remux streams. Uses more system resources than proxy
    * Proxy - Proxies the original streams, allowing you to use Dispatcharr features (redundant streams per channel), and adds a slight buffer to help with stream stability. Uses fewer system resources than ffmpeg
    * Redirect - Redirects the original M3U stream URL to your client. There is no proxying with this profile
    * streamlink - For custom streams based on the services supported by [streamlink](https://streamlink.github.io/)
* Custom Stream Profiles - create your own custom stream profile by clicking the "Add Stream Profile" button on the Settings page
    * Name - a name for your stream profile
	* Command - ffmpeg or streamlink
	* Parameters - Set your custom [ffmpeg](https://ffmpeg.org/ffmpeg.html) or [streamlink](https://streamlink.github.io/cli.html) parameters
	* User-Agent - Set the default user-agent for this stream profile
	
### Network Access
Allows you to restrict access to Dispatcharr by CIDR range. You may enter multiple CIDR ranges separated by commas. Default 0.0.0.0/0 allows all IPs
!!! example
    | CIDR Range     | Number of IPs | Range example                 |
	| -------------- | :-----------: | ----------------------------- |
	| 192.168.1.0/32 | 1             | 192.168.1.0 (single IP)       |
	| 192.168.1.0/24 | 256           | 192.168.1.0 - 192.168.1.255   |
	| 192.168.1.0/16 | 65,536        | 192.168.0.0 - 192.168.255.255 |
	
* M3U / EPG Endpoints - Limit access to M3U, EPG, and HDHR URLs
* Stream Endpoints - Limit network access to stream URLs, including XC stream URLs
* XC API - Limit access to the XC API
* UI - Limit access to the Dispatcharr UI 
	
### Proxy Settings
These settings affect all stream profiles with the exception of redirect

* Buffering Timeout - Maximum time (in seconds) to wait for buffering before switching streams
* Buffering Speed - Speed threshold below which buffering is detected (1.0 = normal speed)
* Buffer Chunk TTL - Time-to-live for buffer chunks in seconds (how long stream data is cached)
* Channel Shutdown Delay - Delay in seconds before shutting down a channel after last client disconnects
* Channel Initialization Grace Period - Grace period in seconds during channel initialization 
---

## Advanced

### Hardware Acceleration 
- Dispatcharr does not currently support hardware acceleration directly, but you can use hardware acceleration with custom ffmpeg stream profiles. 
- This will require mapping your hardware to the container and setting up a custom ffmpeg stream profile. 

#### Mapping Hardware
=== "NVIDIA"
    - Install the [NVIDIA Container toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
    - Add a deploy section to your docker-compose.yml
	??? example
	    ```
		services:
		  dispatcharr:
			# build:
			#   context: .
			#   dockerfile: Dockerfile
			image: ghcr.io/dispatcharr/dispatcharr:latest
			container_name: dispatcharr
			ports:
			  - 9191:9191
			volumes:
			  - dispatcharr_data:/data
			environment:
			  - DISPATCHARR_ENV=aio
			  - REDIS_HOST=localhost
			  - CELERY_BROKER_URL=redis://localhost:6379/0
			deploy:
			  resources:
				reservations:
				  devices:
					- driver: nvidia
					  count: all
					  capabilities: [gpu]
		volumes:
		  dispatcharr_data:
		```

=== "Intel"  
    - Add a devices section to your docker-compose.yml
	??? example
	    ```
		services:
		  dispatcharr:
			# build:
			#   context: .
			#   dockerfile: Dockerfile
			image: ghcr.io/dispatcharr/dispatcharr:latest
			container_name: dispatcharr
			ports:
			  - 9191:9191
			volumes:
			  - dispatcharr_data:/data
			environment:
			  - DISPATCHARR_ENV=aio
			  - REDIS_HOST=localhost
			  - CELERY_BROKER_URL=redis://localhost:6379/0
			devices:
			  - /dev/dri:/dev/dri

		volumes:
		  dispatcharr_data:
		```
		
=== "NVIDIA (Unraid)"
    - Install the NVIDIA Driver Package plugin from community apps if not already installed
    - Edit the Dispatcharr docker container in Unraid
        - Toggle Advanced View On
        - Go to Extra Parameters
            - Add `--runtime=nvidia`
        - Scroll down and click "Add another Path, Port, Variable, Label or Device"
		    - Config Type: Variable
		    - Name: `NVIDIA_VISIBLE_DEVICES`
			- Key: `NVIDIA_VISIBLE_DEVICES`
			- Value: `all`
		- Click Save
		- Again click "Add another Path, Port, Variable, Label or Device"
		    - Config Type: Variable
		    - Name: `NVIDIA_DRIVER_CAPABILITIES`
			- Key: `NVIDIA_DRIVER_CAPABILITIES`
			- Value: `all`
		- Click Save

=== "Intel (Unraid)"
    - Edit the Dispatcharr docker container in Unraid
	- Scroll down and click "Add another Path, Port, Variable, Label or Device"
		- Config Type: Device
		- Name: `/dev/dri`
		- Key: `/dev/dri`
		- Description: `Intel GPU`
    - Click Save
	
#### Custom Stream Profiles
- Open Dispatcharr
- Navigate to Settings > Add Stream Profile
    - Name it anything you like
	- Command `ffmpeg`
    - Parameters will vary based on your hardware type and streaming needs
	    - See [ffmpeg docs](https://ffmpeg.org/ffmpeg.html) for more
	- Visit our [discord](https://discord.gg/Sp45V5BcxU) for more user-submitted ffmpeg parameters
	=== "NVIDIA"
	    !!! example
	        - Parameters: `-user_agent {userAgent} -hwaccel cuda -i {streamUrl} -c:v h264_nvenc -c:a copy -f mpegts pipe:1`
	
	=== "Intel VAAPI"
		!!! example
		    - Parameters: `-user_agent {userAgent} -hwaccel vaapi -hwaccel_output_format vaapi -hwaccel_device /dev/dri/renderD128 -i {streamUrl} -c:a aac -c:v h264_vaapi -f mpegts pipe:1`
		
    === "Intel QSV"
		!!! example
		    - Parameters: `-hwaccel qsv -user_agent {userAgent} -i {streamUrl} -c:v h264_qsv -c:a aac -f mpegts pipe:1`

### Nginx reverse proxy
HTTPS config example (streams only)
```
# Dispatcharr HTTPS DynuDNS
server {
	listen 443 ssl;
	server_name dispatcharr.yourdomain.com;  #Adjust for your domain

	ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
	ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
	
	location /proxy/ts/stream/ {
		allow all;  # Allow everyone else
		proxy_pass http://ubuntuserver:9191;  # Adjust for your server name or IP
		proxy_set_header Host $host:443;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto $scheme;
		# CORS settings
		add_header 'Access-Control-Allow-Origin' '*';
		add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
		add_header 'Access-Control-Allow-Headers' 'Origin, Content-Type, Accept';
	}

	location / {
		allow 10.0.0.0/22;  # Allow the entire network, adjust for your network
		allow 10.1.0.0/24;  # Allow Wireguard, adjust for your network
		deny all;  # Deny everyone else
		proxy_pass http://ubuntuserver:9191;  # Adjust for your server name or IP
		# WebSocket headers
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "Upgrade";
		proxy_set_header Host $host:443;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto $scheme;
		# CORS settings
		add_header 'Access-Control-Allow-Origin' '*';
		add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
		add_header 'Access-Control-Allow-Headers' 'Origin, Content-Type, Accept';
	}
}  
```

