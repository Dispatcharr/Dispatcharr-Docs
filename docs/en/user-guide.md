# User Guide

## Channels
From the channels page you can create and manage all added channels, streams, and external links

### Channels	
* Choose the "Channel Profile" by clicking the drop-down menu under the Channels header. The default profile is "All"
    * Create a new Channel Profile by clicking the <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> icon next to the drop-down menu
	* Channel Profiles can be used to create subsets of your Channels list. Each profile will have it's own HDHR, M3U, and EPG link generated. When creating XC users, you can select which Channel Profiles each user has access to
	* To remove channels from a Channel Profile, click the corresponding toggle icon in the <i data-lucide="scan-eye" style="color: white; width: 18px;"></i> column to toggle it off
	    * For bulk toggling, use the channel check boxes to select multiple channels, then click the toggle icon
    * To delete a Channel Profile, click the drop-down menu and select the <i data-lucide="square-minus" style="color: Red; width: 18px;"></i> icon next to the Channel Profile that you wish to delete
    * To duplicate a Channel Profile, click the drop-down menu and select the <i data-lucide="copy" style="color: LimeGreen; width: 18px;"></i> icon next to the Channel Profile that you wish to duplicate. A dialog will pop up for you to name it
    * To rename a Channel Profile, click the drop-down menu and select the <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> icon next to the Channel Profile that you wish to rename
* Click the <i data-lucide="funnel" style="color: white; width: 18px;"></i> Filter icon to use advanced filtering
    * Hide/Show Disabled - Selectable only when a Channel profile is active. Toggle to hide/show any channels which are disabled for the selected profile
	* Only empty channels - Check the box to show only channels with no associated streams. 
* Search channel names by clicking in the "Name" column header
* Filter by EPG by clicking in the "EPG" column header
* Search by channel group by clicking in the "Group" column header
* Edit a channel by clicking the corresponding <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> "Edit Channel" icon under the "Actions" column 
    * Channel Name - Edit the name for your Channel
	* Channel Group - Edit the group for your channel. If you want to create and add to a new group, click the <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> icon
	* Stream Profile - Click here if you want to use something other than the default stream profile for this channel
    * User Level Access - Set which user types can access this channel via Xtream Codes output
	* Logo - Choose a logo, upload a new one, or use logo from the assigned EPG
    * Mature Content - Toggle whether to set a channel as mature content. Mature content can be hidden from non-admin users via "Hide Mature Content" toggle in [user settings](/Dispatcharr-Docs/user-guide/#users)
	* Channel # - Edit the channel number. Currently only integers are accepted
	* TVG-ID - Edit the TVG-ID field for your channel. Auto-match tries to match episode guide to this field
	* Gracenote StationID - Edit the Gracenote ID for your channel. These are typically 5 or 6 digit numbers that Gracenote (a common EPG provider) can use to identify TV channels.
	* EPG - Click in the box to manually choose an EPG entry, click "Use Dummy" to assign a dummy EPG entry, or click "Auto Match" to attempt EPG auto-match
* Delete a channel by clicking the corresponding <i data-lucide="square-minus" style="color: red; width: 18px;"></i> "Delete channel" icon under the "Actions" column 
* Preview (play) a channel by clicking the corresponding <i data-lucide="circle-play" style="color: Limegreen; width: 18px;"></i> "Preview channel" icon under the "Actions" column 
* Toggle the channel check boxes to use the bulk editing buttons above the grid on the selected channels, or to add streams to channels
    * "<i data-lucide="square-pen" style="color: white; width: 18px;"></i> Edit" to bulk edit channels
        * Channel Name - Find and replace (regex compatible) within the channel name in all selected channels
        * EPG Operations
            * Set Names from EPG - set the channel name for all selected channels to match the channel name from the currently assigned EPG
            * Set Logos from EPG - set the logo for all selected channels to match the channel logo from the currently assigned EPG
            * Set TVG-IDs from EPG - set the TVG-ID for all selected channels to match the channel TVG-ID from the currently assigned EPG
            * Assign Dummy EPG - set a [dummy EPG](/Dispatcharr-Docs/user-guide/#epgs) or clear EPG assignment for all selected channels 
        * Channel Group - Set the channel group for all selected channels
        * Logo - Set the logo for all selected channels
        * Stream Profile - Set the stream profile for all selected channels
        * User Level Access - Set the user level access for all selected channels
        * Mature Content - Set the mature content flag for all selected channels
    * "<i data-lucide="square-minus" style="color: white; width: 18px;"></i> Delete" to bulk delete channels
    * "<i data-lucide="square-plus" style="color: white; width: 18px;"></i> Add" to bulk Add channels. Select multiple Streams under the "Streams" table to create a new channel for each selected stream.
	* "<i data-lucide="ellipsis-vertical" style="color: white; width: 18px;"></i>" to see additional bulk editing options
        * "<i data-lucide="pin-off" style="color: white; width: 18px;"></i> Pin Headers" to pin column headers so they are visible even while scrolling
        * "<i data-lucide="lock" style="color: white; width: 18px;"></i> Unlock for Editing" to unlock the Channels table, allowing users to quickly edit channel fields (name, number, group, EPG, logo) directly in the table without opening a modal. This also allows re-ordering of channels (and associated channel numbers) with drag-and-drop.
        * "<i data-lucide="arrow-down-0-1" style="color: white; width: 18px;"></i> Assign #s" to assign channel numbers
        * "<i data-lucide="binary" style="color: white; width: 18px;"></i> Auto-Match" to auto match channels to EPG
        * "<i data-lucide="settings" style="color: white; width: 18px;"></i> Edit Groups" to open the Group Manager
        
    * Click the <i data-lucide="list-plus" style="color: RoyalBlue; width: 18px;"></i> "Add to channel" icon under the Streams Actions column to add that stream to the selected channels

* Within Dispatcharr, a single channel can be composed of multiple streams. The system initiates playback using the first stream listed in the channel. According to the configured [Proxy Settings](/Dispatcharr-Docs/user-guide/#proxy-settings), Dispatcharr monitors for buffering and, if detected, automatically switches to the next stream in the channel. This process of monitoring and switching continues until all streams are exhausted, ensuring consistent playback quality. <span id="fallback-streams"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#fallback-streams)
* For each stream listed within a channel, Dispatcharr will display the source of the stream as defined in the M3U & EPG Manager, a direct link to stream, and an option to preview the stream <i data-lucide="eye" style="color: LightSkyBlue; width: 18px;"></i> .
    * Dispatcharr gathers statistics for each stream provided that a compatible [Stream Profile](/Dispatcharr-Docs/user-guide/#stream-profiles) is used. Once captured, [stats](/Dispatcharr-Docs/user-guide/#stats) such as video resolution, frames per second, video encoder format, audio format, audio codec, and stream bitrate will be displayed.  For each captured stream, clicking 'Show Advanced Options' provides even more detail on the quality of source stream.  
    
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
* Click the <i data-lucide="funnel" style="color: white; width: 18px;"></i> Filter icon to use advanced filtering
    * Only Unassociated - Only show streams which are currently not assigned to any Channels
	* Hide Stale - Hide any streams which are stale (not available as of the last M3U account refresh).
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

## VODs
View, search, and play VOD content if available from your provider
!!! note
    To view VOD content you must have added at least one "VOD - Movies" or "VOD - Series" group in the M3U account manager

---

## M3U & EPG Manager
From this page you can add and maintain your M3U accounts and EPGs
### M3U accounts
* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Add" - Click this button to add new M3U accounts 
    * Name - A name for your M3U account
	* URL - The M3U URL (not required if uploading an M3U file)
	* Account Type - Standard for direct M3U URLs, Xtream Codes for panel-based services
    * Enable VOD Scanning - Toggle on/off scanning for VOD content (only available with the `Xtream Codes` Account Type)
	* Upload files - If uploading a local M3U file (not required if M3U URL is used)
	* Max Streams - Set a number for the max number of concurrent streams allowed for your account. For unlimited, set to 0
	* User-Agent - If you want to set a specific user-agent for this account
	* Refresh Interval (hours) - How often (in number of hours) to refresh the M3U URL
	* Stale Stream Retention (days) - Streams (and Groups) not seen for this many days will be removed.  For immediate deletion, set to 0
	* VOD Priority - Priority for VOD provider selection (higher numbers = higher priority). Used when multiple providers offer the same content.
    * Is Active - Toggle whether this account is active or not
	!!! note
	    M3Us can be automatically added into dispatcharr by adding M3U file(s) into the `/data/m3us` folder and if `Auto-Import Mapped Files` is enabled under Settings > Stream Settings
* You can click column headers to change the sort order of existing M3U accounts
* Actions column
    * <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> edit icon to edit the associated M3U account
        * "Filters" button - Opens the Filters Manager
            * Click 'New' to add filters.  Filters process in order, and once matched no additional rules are evaluated.  Filters may be ordered using the drag-and-drop anchor to the left of the rule, and edited/deleted using the icons to the right of the rule
                * Field: selects which stream attribute to filter on: "Group", "Stream Name" or "Stream URL"
                * Regex Pattern: enter a valid regular expression to match the Field to
                * Exclude: toggle to determine include/exclude based on the regular expression
                * Case Sensitive: toggle to determine case sensitivity for the regular expression
            * Select 'Save' to add the newly created filter 
            * Add additional filters to refine the selected Field values as needed
	    * "Groups" button - Opens the Group Manager
            * Automatically enable new groups discovered on future scans - When disabled, new groups from the M3U source will be created but disabled by default. You can enable them manually later.
		    * Filter visible groups with the search box at the top of the group manager
			* Ignore streams from groups by de-selecting them
			* Auto Channel Sync (for Live groups only): When enabled, channels will be automatically created for all streams in the group during M3U updates, and removed when streams are no longer present. 
			    * Start Channel #: Set a starting channel number for each group to organize your channels.
			    * Advanced options:
				    * Force Dummy EPG: Sets a dummy EPG for the channel that matches the channel name
					* Override Channel Group: Set a channel group for the created channels that differs from the group you selected
					* Channel Name Find & Replace (Regex): Search and replace to rename your channels. By default the channel name will match the stream name
					* Channel Name Filter (Regex): Only create channels from streams which match your filter criteria
					* Channel Profile Assignment: Allows you to choose which profile(s) to include the created channels in (default All)
					* Channel Sort Order: Choose the sort order for your created channels (Provider order is default)
                    * Stream Profile Assignment: Allows you to change the stream profile for the created channels from default.
					
		* "Profiles" button - Allows you to add a second set of credentials for the same provider. <span id="m3u-profiles"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#m3u-profiles)
        !!! info
            Let's say you have 3 accounts you want to add to dispatcharr. 2 from Provider-A and 1 from Provider-B. Rather than adding three separate M3U accounts, you could add Provider-A once and set up a profile to use the username and password from each Provider-A account under the same M3U account.  
	        1. Set up Provider-A as an M3U account (Standard or Xtream Codes) in the M3U & EPG manager.  
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
    * Standard EPG Source - To add a standard XMLTV EPG source
        * Name - A name for your EPG
        * URL - The URL for your EPG 
        * Source Type - Choose XMLTV or Schedules Direct depending on your EPG provider format
        * API Key - API key for services that require authentication
        * Refresh Interval (hours) - How often (in number of hours) to refresh the EPG
        * Priority - Priority for EPG matching (higher numbers = higher priority). Used when multiple EPG sources have matching entries for a channel.
        !!! note
            EPGs can be automatically added into dispatcharr by adding EPG file(s) into the `/data/epgs` folder and if `Auto-Import Mapped Files` is enabled under Settings > Stream Settings
    * Dummy EPG Source - To add a customized dummy EPG          
        * Name - A name for your custom dummy EPG
        * Name Source (Required) - Choose whether to parse the channel name or a stream name assigned to the channel
        * Title Pattern (Required) - Regex pattern to extract title information (e.g., team names, league). Example: `(?<league>\w+) \d+: (?<team1>.*) VS (?<team2>.*)`
        * Time Pattern (Optional) - Extract time from channel titles. Required groups: 'hour' (1-12 or 0-23), 'minute' (0-59), 'ampm' (AM/PM - optional for 24-hour). Examples: `@ (?<hour>\d+):(?<minute>\d+)(?<ampm>AM|PM) for '8:30PM'` OR `@ (?<hour>\d{1,2}):(?<minute>\d{2}) for '20:30'`
        * Date Pattern (Optional) - Extract date from channel titles. Groups: 'month' (name or number), 'day', 'year' (optional, defaults to current year). Examples: `@ (?<month>\w+) (?<day>\d+)` for 'Oct 17' OR `(?<month>\d+)/(?<day>\d+)/(?<year>\d+)` for '10/17/2025'
        * Title Template (Optional) - Format the EPG title using extracted groups. Use {time} (12-hour: '10 PM') or {time24} (24-hour: '22:00'). Example: `{league} - {team1} vs {team2} @ {time}`
        * Description Template (Optional) - Format the EPG description using extracted groups. Use {time} (12-hour) or {time24} (24-hour). Example: `Watch {team1} take on {team2} at {time}!`
        * Upcoming Title Template (Optional) - Title for programs before the event starts. Use {time} (12-hour) or {time24} (24-hour). Example: `{team1} vs {team2} starting at {time}.`
        * Upcoming Description Template (Optional) - Description for programs before the event. Use {time} (12-hour) or {time24} (24-hour). Example: `Upcoming: Watch the {league} match up where the {team1} take on the {team2} at {time}!`
        * Ended Title Template (Optional) - Title for programs after the event has ended. Use {time} (12-hour) or {time24} (24-hour). Example: `{team1} vs {team2} started at {time}.`
        * Ended Description Template (Optional) - Description for programs after the event. Use {time} (12-hour) or {time24} (24-hour). Example: `The {league} match between {team1} and {team2} started at {time}.`
        * Fallback Title Template (Optional) - Custom title when patterns don't match. If empty, uses the channel/stream name.
        * Fallback Description Template (Optional) - Custom description when patterns don't match. If empty, uses built-in placeholder messages.
        * Event Timezone (Required) - The timezone of the event times in your channel titles. DST (Daylight Saving Time) is handled automatically! All timezones supported by pytz are available.
        * Output Timezone (Optional) - Display times in a different timezone than the event timezone. Leave empty to use the event timezone. Example: Event at 10 PM ET displayed as 9 PM CT.
        * Program Duration (minutes) (required) - Default duration for each program
        * Categories (Optional) - EPG categories for these programs. Use commas to separate multiple (e.g., Sports, Live, HD). Note: Only added to the main event, not upcoming/ended filler programs.
        * Channel Logo URL (Optional) - Build a URL for the channel logo using regex groups. Example: https://example.com/logos/{league_normalize}/{team1_normalize}.png. Use {groupname_normalize} for cleaner URLs (alphanumeric-only, lowercase). This will be used as the channel <icon> in the EPG output.
        * Program Poster URL (Optional) - Build a URL for the program poster/icon using regex groups. Example: https://example.com/posters/{team1_normalize}-vs-{team2_normalize}.jpg. Use {groupname_normalize} for cleaner URLs (alphanumeric-only, lowercase). This will be used as the program <icon> in the EPG output.
        * Include Date Tag - Include the <date> tag in EPG output with the program's start date (YYYY-MM-DD format). Added to all programs.
        * Include Live Tag - Mark programs as live content with the <live /> tag in EPG output. Note: Only added to the main event, not upcoming/ended filler programs.
        * Include New Tag - Mark programs as new content with the <new /> tag in EPG output. Note: Only added to the main event, not upcoming/ended filler programs.
        * Sample Channel Name - Test your patterns and templates with a sample channel name to preview the output. Enter a sample channel name to test pattern matching and see the formatted output
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
The Stats page shows info on all active streams and the system event viewer

* Active connections
    * Channel name
	* Channel logo
	* Stream profile
    * Stream uptime
	* Active stream for each currently active channel (drop down selector allows you to change the active stream)
    * Currently playing program title
        * Expandable program description via chevron button
        * Progress bar showing elapsed and remaining time for curently playing programs
    * Channel preview button <i data-lucide="circle-play" style="color: LimeGreen; width: 18px;"></i> (click to preview currently active streams)
	* Stream stats (only available with certain [stream profiles](#stream-profiles)) 

        | Stream profile | Video resolution                                                          | Source frames per second                                                  | Video codec                                                               | Audio codec                                                               | Audio channel configuration                                               | Stream type (MPEGTS, HLS)                                                 | [Current speed](/Dispatcharr-Docs/user-guide/#current-speed)              |
        | -------------- | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: |
        | ffmpeg         | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> |
        | Proxy          | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | Redirect       | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | streamlink     | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | VLC            | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
        | Custom ffmpeg  | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> |
		| Custom VLC     | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           |
		
		!!! note "Note for Custom VLC"
		    VLC can only output information it is affecting, so stats will depend on your [custom parameters](https://wiki.videolan.org/VLC_command-line_help/)
		
        !!! info "Info <span id="current-speed"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#curent-speed)"
            The Current Speed stat is essentially a calculation of current FPS vs source FPS. When it drops below 1 you know there will be buffering. 
        
	* Stream bitrate (current and average)
	* Stream total data served
	* Number of watchers
	* IP addresses and associated User-Agents
    * You can force stop any current streams by clicking the <i data-lucide="square-x" style="color: red; width: 18px;"></i> "Stop Channel" button
* System Events
    * Captures M3U refreshes, EPG updates, stream switches, authentication events, network access blocks, and errors.
    * Allows filtering and reviewing historical events.

---

## Plugins
From the plugins page you can import, manage, and delete dispatcharr plugins. Plugin descriptions are available on [discord](https://discord.gg/Sp45V5BcxU)

* Press the "Import Plugin" button to add a plugin, or load one into `/data/plugins` and reload.
* Remove a plugin by clicking the <i data-lucide="trash-2" style="color: Pink; width: 18px;"></i> Delete plugin button
* Enable/disable a plugin by clicking the Toggle icon to the right of the Delete plugin button
!!! info
    Interested in plugin development? View plugin development documentation on the [dispatcharr github](https://github.com/Dispatcharr/Dispatcharr/blob/main/Plugins.md) 

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
    * Optionally hide channels marked as "Mature Content" in user settings
3. Streamer
	* No access to the Dispatcharr UI
	* This user level is for XC login only
    * Optionally hide channels marked as "Mature Content" in user settings

---

## Logo Manager
From the Logo Manager page you can upload and manage logos.  
!!! info
    Dispatcharr will also automatically scan `/data/logos` for existing files

---
	
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
    * The default setting hashes on URL. That means that a provider change to a source stream that changes URL will result in a new stream being created in Dispatcharr. 
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
| Stream Profile | [Proxy support <br>(buffer, VPN support, etc.)](#proxy-settings)          | [Fallback stream<br> support](#fallback-streams)                          | [Stream stats<br> support](#stats)                                        | System resources      | 
| -------------- | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-------------------: |
| ffmpeg         | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | Low                   |
| Proxy          | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | Very low              |
| Redirect       | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | <i data-lucide="square-x" style="color: red; width: 18px;"></i>           | Very low              |
| streamlink     | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | Low                   |
| VLC            | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | Low                   |
| Custom ffmpeg  | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | Low to Very High      |
| Custom VLC     | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="square-check" style="color: limegreen; width: 18px;"></i> | <i data-lucide="triangle-alert" style="color: yellow; width: 18px;"></i>  | Low to Very High      |
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
	* Command - `ffmpeg`, `streamlink`, or `cvlc` (for custom VLC stream profiles)
	* Parameters - Set your custom [ffmpeg](https://ffmpeg.org/ffmpeg.html), [streamlink](https://streamlink.github.io/cli.html), or [VLC](https://wiki.videolan.org/VLC_command-line_help/) parameters
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

### Process Priority Configuration
Optional environment variables to adjust priority of various tasks. Lower values = higher priority. Range: -20 (highest) to 19 (lowest). Negative values require `cap_add: SYS_NICE`  

- `UWSGI_NICE_LEVEL` - Set priority for uWSGI, FFmpeg, and streaming. Default priority is 0, recommend -5 for high priority 
- `CELERY_NICE_LEVEL` - Set priority for Celery, EPG, and other background tasks. Default priority is 5 

!!! example
    ```yaml
        environment:
          - UWSGI_NICE_LEVEL=-5
          - CELERY_NICE_LEVEL=5

        cap_add:
          - SYS_NICE
    ```
 
### Reverse Proxies
#### Nginx
HTTPS config example (streams only via https, WebUI via local network and Wireguard)

??? example "Example (click to see)"
    ```nginx
    # Dispatcharr HTTPS DynuDNS
    server {
        listen 443 ssl;
        server_name dispatcharr.your.domain.com;  #Adjust for your domain

        ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
        
        location ~ ^(/proxy/(vod|ts)/(stream|movie|episode)|/player_api.php|/xmltv.php|/api/channels/logos/.*/cache|/(live|movie|series)/[^/]+/.*) { 
            allow all;  # Allow everyone else
            proxy_pass http://dispatcharrserver:9191;  # Adjust for your server name or IP
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
            allow 10.0.0.0/22;  # Allow the local network, adjust for your network
            allow 10.1.0.0/24;  # Allow Wireguard, adjust for your network
            deny all;  # Deny everyone else
            proxy_pass http://dispatcharrserver:9191;  # Adjust for your server name or IP
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

!!! note "Tip"
    Even with a properly configured reverse proxy, your M3U output will by default be available over the internet. Follow these best practices to block standard M3U access and allow only with a specified username and password. 
	
    1. Set up your reverse proxy as shown in the [docs](/Dispatcharr-Docs/user-guide/#nginx-reverse-proxy)
    2. In dispatcharr at Settings > [Network Access](/Dispatcharr-Docs/user-guide/#network-access), restrict M3U / EPG Endpoints to your local network only (example: 192.168.1.0/24)
    3. Set up a user with XC password on the [Users](/Dispatcharr-Docs/user-guide/#users) page if you haven't already done so
    4. Use the following m3u link format to share with your users: `https://hostname/get.php?username=XCUSERNAME&password=XCPASSWORD`
    5. And this format for epg: `https://hostname/xmltv.php?username=XCUSERNAME&password=XCPASSWORD`
    
#### Pangolin
* Create your resource just as you would any other in Pangolin
* If you're hosting Dispatcharr on the same VPS (if you're using a VPS) as Pangolin, be sure to set it as a local resource and use 172.XX.X.X as the IP, then enter the port. Otherwise set it up normally
* If you'd like to enable Pangolin's SSO for this resource for security, do so in the Authentication tab of your new Dispatcharr resource

To allow Dispatcharr to connect to clients when secured behind Pangolin SSO or another IdP you've added, you need to create Bypass Rules. See below for the list of rules required. Once you save the below rules, Dispatcharr's WebUI will be secured behind your SSO while apps and services will be able to connect via XC

* The "Action" will be "Bypass Auth" for all of them
* The "Match Type" will be "Path" for all of them

??? example "Bypass rules" (click to see)
    * ```/player_api.php/*```
    * ```/get.php/*```
    * ```/xmltv.php/*```
    * ```/*/*/*.ts```
    * ```/proxy/ts/stream/*```
    * ```/proxy/vod/episode/*```
    * ```/proxy/vod/movie/*```
    * ```/api/channels/logos/*/cache/```
    * ```/live/*/*```
    * ```/movie/*/*```
    * ```/series/*/*```

    **(Optional for HDHR, M3U, and/or EPG URL access, not required if using XC. If you're using HDHR, you need for further restrict it in dispatcharr's [Settings > Network Access > M3U / EPG Endpoints)](/Dispatcharr-Docs/user-guide/#network-access)**  
    
    * ```/hdhr/*```
    * ```/output/m3u/*```
    * ```/output/epg/*```

* If you'd like to set up GeoBlock for any/all resources, refer to Pangolin's [official documentation](https://docs.pangolin.net/self-host/advanced/enable-geoblocking) for guidance

* Test your new setup by navigating to Dispatcharr in an incognito or private window. You should now be met with your Pangolin login dashboard when accessing the WebUI when you're not authenticated, however your clients will still be able to connect to allow streaming

