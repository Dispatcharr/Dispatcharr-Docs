# User Guide

## Channels
From the channels page you can create and manage all added channels, streams, and external links

###Channels	
* Search channel names by clicking in the "Name" column header
* Search by channel group by clicking in the "Group" column header
* Edit a channel by clicking the corresponding yellow "Edit channel" icon under the "Actions" column 
* Delete a channel by clicking the corresponding red "Delete channel" icon under the "Actions" column 
* Preview (play) a channel by clicking the corresponding green "Preview channel" icon under the "Actions" column 
* Toggle the channel check boxes to use the bulk editing buttons above the grid on the selected channels, or to add streams to channels
    * "Remove" to bulk remove channels
	* "Assign" to assign channel numbers
    !!! warning
        Currently channel number will start with 1 and auto-increment by 1 for each selected channel. This feature is still under development
	* "Auto-Match" to auto match channels to EPG
    !!! warning
		This feature is still under development
    * Click the blue "Add to channel" icon under the Streams Actions column to add that stream to the selected channels
###Streams
* Search stream names by clicking in the "Name" column header
* Search by M3U group by clicking in the "Group" column header
* Search by M3U name by clicking the "M3U" column header
* Create a new channel by clicking the corresponding green "Create New Channel" icon under the "Actions" column 
* Add a stream to an existing channel by clicking the corresponding blue "Add to Channel" button under the "Actions" column 
* Preview (play) a stream by clicking the corresponding three dot icon under the "Actions" column, then press "Preview Stream"
* Toggle the stream check boxes to use the bulk editing buttons above the grid on the selected streams
    * "Add streams to channel" to add the checked streams to the checked channel(s) 
    * "Remove" to bulk remove streams
	* "Create Channels" to create a new channel for each selected stream
    !!! note
        For every selected stream, a corresponding new channel will be created. For example, if 3 streams are selected, 3 new channels will be created.
* "Create Stream" to create a new stream not associated with any of your uploaded M3Us

###Links
The "Links" section has buttons to see and copy the external links needed by a client

* HDHR - Use this link for clients that use HD Homerun format
* M3U - Use this link for clients that use M3U format
* EPG - Use this link to provide your client with episode guide data that matches your channels

---

## M3U & EPG Manager
From this page you can add and maintain your M3U accounts and EPGs
###M3U accounts
* "Add" - Click this button to add new M3U accounts 
    * Name - A name for your M3U account
	* URL - The M3U URL (not required if uploading an M3U file)
	* Upload files - If uploading a local M3U file (not required if M3U URL is used)
	* Max Streams - Set a number for the max number of concurrent streams allowed for your M3U. For unlimited, set to 0
	* User-Agent - If you want to set a specific user-agent for this M3U account
	* Refresh Interval (hours) - How often (in number of hours) to refresh the M3U URL
	* Is Active - Toggle whether this M3U account is active or not
* You can click column headers to change the sort order of existing M3U accounts
* Actions column
    * Yellow edit icon to edit the associated M3U account
	    * "Groups" button - Allows you to filter streams from the M3U based on the listed groups
		* "Profiles" button - Allows you to add a second set of credentials for the same provider. 
        !!! example
            Let's say you have 3 accounts you want to add to dispatcharr. 2 from Provider-A and 1 from Provider-B. Rather than adding three separate M3U accounts, you could add Provider-A once and set up a profile to use the username and password from each Provider-A account under the same M3U account.  
	        1. Set up Provider-A as an M3U account in the M3U & EPG manager.  
			2. Click the corresponding yellow edit icon under the Actions column.  
			3. Click the "Profiles" button.  
			4. Click the "New" button.  
			5. Copy the text under "Search" at the bottom of the dialog box, and paste into the "Search" box.   
			6. Paste the same text into the "Replace" box. Within the text, you should see something like "username=XXXXXXX&password=YYYYYYY".  
			7. Replace the XXXXXXX and YYYYYYY with the username and password with the credentials from your second Provider-A account.  
	
	
	* Red delete icon to remove the associated M3U account
	* Blue refresh icon to manually refresh/update the associated M3U account
	
### EPGs
* "Add EPG" - Click this button to add a new EPG
    * Name - A name for your EPG
	* URL - The URL for your EPG 
	* API Key - API key associated with your EPG, if required
	* Source Type - Choose XMLTV or Schedules Direct depending on your EPG provider format
	* Refresh Interval (hours) - How often (in number of hours) to refresh the EPG
* You can click column headers to change the sort order of existing EPGs
* Actions column
    * Yellow edit icon to edit the associated EPG
	* Red delete icon to remove the associated EPG
	* Blue refresh icon to manually refresh/update the associated EPG
	
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
	* Stream profile
    * Stream uptime
	* Stream speed (current and average)
	* Stream total data served
	* Number of watchers
	* IP addresses and associated User-Agents
* You can force stop any current streams by clicking the red "Stop Channel" button

---

## Settings
* Default User-Agent - Set the default User-Agent
* Default Stream Profile - Set the default Stream Profile
* Preferred Region - Set your preferred region
* Auto Import Mapped Files - Toggle on/off auto-importing of M3U files or EPG xml data from /data/epgs and/or /data/m3us

###Stream Profiles
* There are 4 default stream profiles with the ability to create your own custom ones
    * ffmpeg - Dispatcharr will proxy streams via ffmpeg. No transcoding takes place with the default ffmpeg stream profile, it just copies the original audio and video streams. Uses more CPU than proxy
    * Proxy - Proxies the original streams, allowing you to use Dispatcharr features (redundant streams per channel) with less CPU usage
    * Redirect - Redirects the original M3U stream URL to your client. There is no proxying with this profile
    * streamlink - For custom streams based on the services supported by [streamlink](https://streamlink.github.io/)
* Custom Stream Profiles - create your own custom stream profile by clicking the "Add Stream Profile" button on the Settings page
    * Name - a name for your stream profile
	* Command - ffmpeg or streamlink
	* Parameters - Set your custom [ffmpeg](https://ffmpeg.org/ffmpeg.html) or [streamlink](https://streamlink.github.io/cli.html) parameters
	* User-Agent - Set the default user-agent for this stream profile
	
###User-Agents
* In the context of IPTV, a user agent is a string of text that identifies the client application (e.g., a player like Kodi or VLC) to the IPTV server. It's included in the HTTP headers of requests sent by the client to the server, informing the server about the type of device and software used to access the IPTV stream.
* Default Dispatcharr User-Agents are available for VLC, Chrome, and TiviMate
* Add your own User-Agent by clicking the "Add User-Agent" button on the Settings page
    * Name - a name for your user-agent
	* User-Agent - The text to include for your user-agent string
	* Description - (Optional) a description of the user-agent for your own use

