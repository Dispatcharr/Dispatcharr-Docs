# Getting Started

Dispatcharr can be installed using Docker on various platforms, including Windows, macOS, Proxmox, and Unraid. This guide provides detailed instructions for each method.

## Installation

See [installation guide](installation.md).

---

## Startup

After installation and starting up, open a web browser and go to `http://{your_ip_here}:9191`
Create your user account by entering a username and password that you will remember. You can optionally add an email address.
!!! note
    Email addresses are currently unused but may be used in future versions.

---

## Adding M3U and EPG
1. Add your first M3U by clicking the `Add M3U` button on the right-hand side under "Getting started".  
2. This will take you to the M3U & EPG Manager (also accessible from the navbar on the left).  
??? info "Screenshot" 
    ![Getting started](assets/getting_started.png)

1. Click the `Add` button under M3U Accounts to add an M3U  
2. Click the `Add EPG` button under EPGs to add an episode guide

??? info "Screenshot"
    ![M3U & EPG Manager](assets/m3u_epg_manager.png)
	
=== "M3U"
	- Enter a name for your M3U Account
    - Choose the account type (Xtream Codes or Standard M3U) and enter the URL (if using Xtream Codes, enter the associated username and password)   
	- You can optionally set a max number of concurrent streams allowed, or leave at 0 for unlimited.  
	- Click `Save`. 
    ??? info "Screenshot"
	    ![Adding M3U](assets/adding_m3u.png)
	- Click the corresponding <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> edit icon of the just added M3U account
	    - Click the `Groups` button and select which groups you'd like to add, then click `Save and Refresh`
	- Depending on the size of your M3U, it may take some time to load.	

	
=== "EPG"
    - Add an episode guide by clicking the `Add EPG` button under the EPGs section. .
    - Enter a name for your EPG, then enter the URL and if necessary, API key. 
    - Choose the source type, then hit "Submit".
    - Depending on the size of your EPG, it may take some time to load.
    ??? info "Screenshot"
	    ![Adding EPG](assets/adding_epg.png)

---

### Creating your first channel

- Go to the main Channels screen in the navbar. 
- If an M3U was added and successfully scanned, you should see a list of streams on the right side of the page under "Streams".  
- Find a stream in the list, or search for one by typing in the "Name" column header. 
- Press the <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> "Create New Channel" button to add the stream to a new channel.  
??? info "Screenshot" 
    ![Adding a channel](assets/adding_channel.png)
- If you'd like to add a backup stream from a different provider, find the corresponding stream in the streams list and press the <i data-lucide="list-plus" style="color: RoyalBlue; width: 18px;"></i> "Add to Channel" button under the "Actions" column

---
	
### Media Playback Setup
#### Jellyfin
##### Add TV source
- Jellyfin can accept HDHR or M3U format. 
- In Dispatcharr, navigate to the "Channels" page then click either the HDHR or M3U buttons at the top of the page, and copy the provided URL.  
=== "HDHR"
    ??? info "Screenshot"
        ![Find HDHR URL](assets/find_hdhr_url.png)
	
=== "M3U"
    ??? info "Screenshot"
        ![Find M3U URL](assets/find_m3u_url.png)

- Navigate to your Jellyfin page and click the Admin Panel Icon to manage your Jellyfin server.  
- Click "Live TV" under the Live TV section, then the '+' button next to "Tuner Devices".  
??? info "Screenshot"
    ![Jellyfin LiveTV Setup Tuner](assets/jellyfin_livetv_setup_tuner.png)
- Under 'Tuner Type', choose HD Homerun if using the HDHR URL, or M3U Tuner if using the M3U URL from Dispatcharr.  
- Paste the URL and save.  
!!! note
    If adding as M3U, leave the Simultaneous stream limit set as "0", since stream limits will be handled by Dispatcharr.  
##### Add Guide Data Source
- To add guide data from Dispatcharr, navigate to the Dispatcharr "Channels" page then click the EPG button at the top of the page and copy the provided URL.
??? info "Screenshot"
    ![Find EPG URL](assets/find_epg_url.png)
- In Jellyfin Live TV settings page, click the '+' next to "TV Guide Data Providers".
??? info "Screenshot"
    ![Jellyfin Add EPG](assets/jellyfin_add_epg.png)
- Choose 'XMLTV' and paste the URL
- EPG data will be automatically mapped.

---

#### Plex

- Plex accepts the HDHR format and can mostly find HDHR units on its own. 
- In Dispatcharr, navigate to the "Channels" page then click the HDHR button at the top of the page, and copy the provided URL.  
??? info "Screenshot" 
    ![HDHR URL](assets/find_hdhr_url.png)
- Navigate to your Plex page and click the Settings icon to manage your plex server.  
- Scroll down to `Manage` and click `Live TV & DVR`, then `Set Up Plex Tuner`.
- Plex should automatically find your Dispatcharr instance, but if it doesn't click the `Don't see your HDHomeRun device? Enter its network address manually` and enter the HDHR URL you copied from Dispatcharr and press `Connect`.
??? info "Screenshot" 
    ![Plex Live TV Automatic](assets/add_hdhr_plex.png){style="height:70vmin"}
	
- Plex will provide you with their EPG if they support your country and postal code. If they do not provide EPG for you or if you want to use your own you can add EPG from Dispatcharr.
!!! warning
    Please note, if plex EPG does not exist for your area you will be forced to provide your own before you can continue.

??? info "Screenshot"
    ![Plex Add EPG](assets/add_epg_plex.png){style="height:70vmin"}

- You can now map the epg to channels if any did not automatically match.
??? info "Screenshot"
    ![Map EPG Plex](assets/map_epg_plex.png){style="height:70vmin"}
- Press `Continue` and plex will now load in the channels and EPG data
!!! note "Missing logos?"
    Add `?cachedlogos=false` to the end of your EPG to bypass logo caching which Plex does not currently support. 
	
---

#### ChannelsDVR
- In Dispatcharr, navigate to the "Channels" page then click the M3U button at the top of the page, and copy the provided URL. 
??? info "Screenshot"
	![Find M3U URL](assets/find_m3u_url.png)
	
- Navigate to your ChannelsDVR server page and go to "Settings" and select "Sources"
??? info "Screenshot"
	![ChannelsDVR Select Sources](assets/channelsdvr_sources.png)
	
- Under Live TV press the green button "Add Source"
??? info "Screenshot"
	![ChannelsDVR Add Source](assets/channelsdvr_addsource.png)
	
- On the popup choose Custom Channels
??? info "Screenshot"
	![ChannelsDVR Custom Channels](assets/channelsdvr_customchannels.png)

- On the Custom Channels menu use the following options:
    - Nickname: Add a name for your M3U
    - Stream Format: MPEG-TS
    - Source: Use URL and paste the M3U link from Dispatcharr
    - Options: 
	    - Refresh URL daily
	    - Prefer channel-number from M3U
		- Prefer channel logos from M3U if you want to use logos shown/managed in Dispatcharr
		- No Stream Limit (Dispatcharr manages the stream limits)
    - XMLTV Guide Data:
        - If you set a Gracenote ID in every channel and want ChannelsDVR to build a full 14 day guide using their data then do not add a guide and press Save.
        - If you want to use the Guide Data from Dispatcharr then put the EPG link from Dispatcharr, select the refresh frequency, and press Save.
		??? info "Screenshot"
	        ![ChannelsDVR Custom Channels options](assets/channelsdvr_customchannels_2.png)
		
---

#### Emby
##### Add TV source
- Emby can accept HDHR or M3U format. 
- In Dispatcharr, navigate to the "Channels" page then click either the HDHR or M3U buttons at the top of the page, and copy the provided URL.  
=== "HDHR"
    ??? info "Screenshot"
        ![Find HDHR URL](assets/find_hdhr_url.png)
	
=== "M3U"
    ??? info "Screenshot"
        ![Find M3U URL](assets/find_m3u_url.png)
- Navigate to your Emby page and click the Settings icon to manage your emby server.  
- Click "Live TV", then "Add TV source".  
- Choose HD Homerun if using the HDHR URL, or M3U if using the M3U URL from Dispatcharr.  
- Paste the URL and save.  
!!! note
    If adding as M3U, leave the Simultaneous stream limit set as "0", since stream limits will be handled by Dispatcharr.  
##### Add Guide Data Source
- You can use Emby provided guide data, guide data from dispatcharr, or a combination of both.
  - To add Emby provided guide data, click "Add Guide Data Source", choose your country, then choose "Emby Guide Data" under Guide Data Source and hit Next.
  - Follow the provided prompts to find the channel data you need. You may add multiple Emby Guide Data sources if needed.
  - Emby will attempt to match channels to guide data, but you may need to manually map the guide data to your channels. You can do so at "Live TV" > Channels, or in the Emby metadata manager.
  - To add guide data from dispatcharr, navigate to the dispatcharr "Channels" page then click the EPG button at the top of the page and copy the provided URL.
  - In Emby Live TV settings page, click "Add Guide Data Source", choose your country, then choose "XMLTV" Guide Data Source and hit Next.
  - EPG data will be automatically mapped.
