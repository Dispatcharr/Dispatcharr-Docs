From the channels page you can create and manage all added channels, streams, and external links

## Channels	
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
    * Only Empty Channels - Check the box to show only channels with no associated streams.
    * Only Containing Stale Streams - Check the box to show only channels with stale streams.
* Search channel names by clicking in the "Name" column header
* Filter by EPG by clicking in the "EPG" column header
* Search by channel group by clicking in the "Group" column header
* Edit a channel by clicking the corresponding <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> "Edit Channel" icon under the "Actions" column 
    * Channel Name - Edit the name for your Channel
    * Channel Group - Edit the group for your channel. If you want to create and add to a new group, click the <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> icon
    * Stream Profile - Click here if you want to use something other than the default stream profile for this channel
    * User Level Access - Set which user types can access this channel via Xtream Codes output
    * Logo - Choose a logo, upload a new one, or use logo from the assigned EPG
    * Mature Content - Toggle whether to set a channel as mature content. Mature content can be hidden from non-admin users via "Hide Mature Content" toggle in [user settings](/Dispatcharr-Docs/system/#users)
    * Channel # - Edit the channel number. Currently only integers are accepted
    * TVG-ID - Edit the TVG-ID field for your channel. Auto-match tries to match episode guide to this field
    * Gracenote StationID - Edit the Gracenote ID for your channel. These are typically 5 or 6 digit numbers that Gracenote (a common EPG provider) can use to identify TV channels.
    * EPG - Click in the box to manually choose an EPG entry, click "Use Dummy" to assign a dummy EPG entry, or click "Auto Match" to attempt EPG auto-match
* Delete a channel by clicking the corresponding <i data-lucide="square-minus" style="color: red; width: 18px;"></i> "Delete channel" icon under the "Actions" column 
* Preview (play) a channel by clicking the corresponding <i data-lucide="circle-play" style="color: Limegreen; width: 18px;"></i> "Preview channel" icon under the "Actions" column 
* Toggle the channel check boxes to use the bulk editing buttons above the grid on the selected channels, or to add streams to channels
    * "<i data-lucide="square-pen" style="color: white; width: 18px;"></i> Edit" to bulk edit channels <span id="bulk-editor"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#bulk-editor)
        * Channel Name - Find and replace (regex compatible) within the channel name in all selected channels 
        * EPG Operations
            * Set Names from EPG - set the channel name for all selected channels to match the channel name from the currently assigned EPG
            * Set Logos from EPG - set the logo for all selected channels to match the channel logo from the currently assigned EPG
            * Set TVG-IDs from EPG - set the TVG-ID for all selected channels to match the channel TVG-ID from the currently assigned EPG
            * Assign Dummy EPG - set a [dummy EPG](/Dispatcharr-Docs/m3u-epg-manager/#epgs) or clear EPG assignment for all selected channels 
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
            * Matching mode "Use default settings" - Recommended for most users. Handles standard channel name variations automatically
            * Matching mode "Configure advanced options: - Add custom prefixes, suffixes, or strings to ignore
                * Ignore Prefixes - Removed from START of channel names (e.g., Prime:, Sling:, US:)
                * Ignore Suffixes - Removed from END of channel names (e.g., HD, 4K, +1)
                * Ignore Custom Strings - Removed from ANYWHERE in channel names (e.g., 24/7, LIVE)

                !!! note
                    Channel display names are not modified. These settings only affect the matching algorithm. To modify channel names, use the [bulk editor](/Dispatcharr-Docs/channels/#bulk-editor)

        * "<i data-lucide="settings" style="color: white; width: 18px;"></i> Edit Groups" to open the Group Manager
        
    * Click the <i data-lucide="list-plus" style="color: RoyalBlue; width: 18px;"></i> "Add to channel" icon under the Streams Actions column to add that stream to the selected channels

* Within Dispatcharr, a single channel can be composed of multiple streams. The system initiates playback using the first stream listed in the channel. According to the configured [Proxy Settings](/Dispatcharr-Docs/system/#proxy-settings), Dispatcharr monitors for buffering and, if detected, automatically switches to the next stream in the channel. This process of monitoring and switching continues until all streams are exhausted, ensuring consistent playback quality. <span id="fallback-streams"></span> [<i data-lucide="link" style="color: Grey; width: 18px;"></i>](#fallback-streams)
* For each stream listed within a channel, Dispatcharr will display the source of the stream as defined in the M3U & EPG Manager, a direct link to stream, and an option to preview the stream <i data-lucide="eye" style="color: LightSkyBlue; width: 18px;"></i> .
    * Dispatcharr gathers statistics for each stream provided that a compatible [Stream Profile](/Dispatcharr-Docs/system/#stream-profiles) is used. Once captured, [stats](/Dispatcharr-Docs/stats/#stats) such as video resolution, frames per second, video encoder format, audio format, audio codec, and stream bitrate will be displayed.  For each captured stream, clicking 'Show Advanced Options' provides even more detail on the quality of source stream.  
    
## Streams
* Create a new channel by clicking the corresponding <i data-lucide="square-plus" style="color: LimeGreen; width: 18px;"></i> "Create New Channel" icon under the "Actions" column 
* Add a stream to an existing channel by clicking the corresponding <i data-lucide="list-plus" style="color: RoyalBlue; width: 18px;"></i> "Add to Channel" button under the "Actions" column 
* Preview (play) a stream by clicking the corresponding <i data-lucide="ellipsis-vertical" style="color: LightSkyBlue; width: 18px;"></i> icon under the "Actions" column, then press "Preview Stream"
* Toggle the stream check boxes to use the bulk editing buttons above the grid on the selected streams
    * "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Create Channels" to create a new channel for each selected stream
    * "<i data-lucide="square-minus" style="color: white; width: 18px;"></i> Delete" to delete the selected stream(s)
* Click the <i data-lucide="funnel" style="color: white; width: 18px;"></i> Filter icon to use advanced filtering
    * Only Unassociated - Only show streams which are currently not assigned to any Channels
    * Hide Stale - Hide any streams which are stale (not available as of the last M3U account refresh).
* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Create Stream" - Create a new stream not associated with any of your uploaded M3Us
* <i data-lucide="ellipsis-vertical" style="color: White; width: 18px;"></i> (Table Settings) - Toggle Streams table columns on/off. Available columns:
    * Name (click in the column header to search)
    * Group (click in the column header to search)
    * M3U (click in the column header to search)
    * TVG-ID (click in the column header to search)
    * Stats (mouse over to see additional stats)

## Links
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