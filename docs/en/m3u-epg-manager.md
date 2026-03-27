From this page you can add and maintain your M3U accounts and EPGs

## M3U accounts
* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Add" - Click this button to add new M3U accounts 
    * Name - A name for your M3U account
    * URL - The M3U URL (not required if uploading an M3U file)
    * Account Type - Standard for direct M3U URLs, Xtream Codes for panel-based services
    * Enable VOD Scanning - Toggle on/off scanning for VOD content (only available with the `Xtream Codes` Account Type)
    * Upload files - If uploading a local M3U file (not required if M3U URL is used)
    * Expiration Date - Set an expiration date to receive a warning notification (only available with `Standard` Account Type. Xtream Codes expiration is pulled automatically)
    * Max Streams - Set a number for the max number of concurrent streams allowed for your account. For unlimited, set to 0
    * User-Agent - If you want to set a specific user-agent for this account
    * Refresh Interval (hours) - How often (in number of hours) to refresh the M3U URL
        * Use cron schedule: Click to switch over to `Cron Expression` option
    * Cron Expression: Enter a cron expression to define the M3U account refresh interval, or click `Open Cron Builder` for user-friendly assistance
        * Use interval schedule: Click to switch over to `Refresh Interval (hours)`
        * Open Cron Builder: Opens the user-friendly interactive cron expression builder with preset buttons and custom field editors
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
            
            !!! note
                Keep in mind this is a *stream* filter so you will still see the groups/categories show up for the M3U. However, excluded streams will not appear in the streams table

        * "Groups" button - Opens the Group Manager
            * Automatically enable new groups discovered on future scans - When disabled, new groups from the M3U source will be created but disabled by default. You can enable them manually later.
            * Filter visible groups with the search box at the top of the group manager
            * Ignore streams from groups by de-selecting them
            * Auto Channel Sync (for Live groups only): When enabled, channels will be automatically created for all streams in the group during M3U updates, and removed when streams are no longer present. 
                * Channel Numbering Mode
                    * **Fixed Start Number**  (default): Start at a specified number and increment sequentially
                    * **Use Provider Number**: Use channel numbers from the M3U source (tvg-chno), with configurable fallback if provider number is missing
                    * **Next Available**: Auto-assign starting from 1, skipping all used channel numbers
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
    
## EPGs
* "<i data-lucide="square-plus" style="color: White; width: 18px;"></i> Add EPG" - Click this button to add a new EPG
    * Standard EPG Source - To add a standard XMLTV EPG source
        * Name - A name for your EPG
        * URL - The URL for your EPG (may be xml or compressed xml as .gz or .zip)
        * Source Type - Choose XMLTV or Schedules Direct depending on your EPG provider format
        * API Key - API key for services that require authentication
        * Refresh Interval (hours) - How often (in number of hours) to refresh the EPG
            * Use cron schedule: Click to switch over to `Cron Expression` option
        * Cron Expression: Enter a cron expression to define the EPG account refresh interval, or click `Open Cron Builder` for user-friendly assistance
            * Use interval schedule: Click to switch over to `Refresh Interval (hours)`
            * Open Cron Builder: Opens the user-friendly interactive cron expression builder with preset buttons and custom field editors
        * Priority - Priority for EPG matching (higher numbers = higher priority). Used when multiple EPG sources have matching entries for a channel.
        !!! note
            EPGs can be automatically added into dispatcharr by adding EPG file(s) into the `/data/epgs` folder and if `Auto-Import Mapped Files` is enabled under Settings > Stream Settings ((file type must be xml or compressed xml as .gz or .zip))
    * Dummy EPG Source - To add a customized dummy EPG          
        * Name - A name for your custom dummy EPG
        * Pattern configuration
            * Name Source (Required) - Choose whether to parse the channel name or a stream name assigned to the channel
            * Title Pattern (Required) - Regex pattern to extract title information (e.g., team names, league). Example: `(?<league>\w+) \d+: (?<team1>.*) VS (?<team2>.*)`
            * Time Pattern (Optional) - Extract time from channel titles. Required groups: 'hour' (1-12 or 0-23), 'minute' (0-59), 'ampm' (AM/PM - optional for 24-hour). Examples: `@ (?<hour>\d+):(?<minute>\d+)(?<ampm>AM|PM) for '8:30PM'` OR `@ (?<hour>\d{1,2}):(?<minute>\d{2}) for '20:30'`
            * Date Pattern (Optional) - Extract date from channel titles. Groups: 'month' (name or number), 'day', 'year' (optional, defaults to current year). Examples: `@ (?<month>\w+) (?<day>\d+)` for 'Oct 17' OR `(?<month>\d+)/(?<day>\d+)/(?<year>\d+)` for '10/17/2025'
        * Output templates
            * Title Template (Optional) - Format the EPG title using extracted groups. Use {time} (12-hour: '10 PM') or {time24} (24-hour: '22:00'). Example: `{league} - {team1} vs {team2} @ {time}`
            * Subtitle Template (Optional) - Format the EPG subtitle using extracted groups. Example: `{starttime} - {endtime}`
            * Description Template (Optional) - Format the EPG description using extracted groups. Use {time} (12-hour) or {time24} (24-hour). Example: `Watch {team1} take on {team2} at {time}!`
        * Upcoming/Ended Templates
            * Upcoming Title Template (Optional) - Title for programs before the event starts. Use {time} (12-hour) or {time24} (24-hour). Example: `{team1} vs {team2} starting at {time}.`
            * Upcoming Description Template (Optional) - Description for programs before the event. Use {time} (12-hour) or {time24} (24-hour). Example: `Upcoming: Watch the {league} match up where the {team1} take on the {team2} at {time}!`
            * Ended Title Template (Optional) - Title for programs after the event has ended. Use {time} (12-hour) or {time24} (24-hour). Example: `{team1} vs {team2} started at {time}.`
            * Ended Description Template (Optional) - Description for programs after the event. Use {time} (12-hour) or {time24} (24-hour). Example: `The {league} match between {team1} and {team2} started at {time}.`
        * Fallback Templates
            * Fallback Title Template (Optional) - Custom title when patterns don't match. If empty, uses the channel/stream name.
            * Fallback Description Template (Optional) - Custom description when patterns don't match. If empty, uses built-in placeholder messages.
        * EPG Settings
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