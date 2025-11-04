For migrating from other IPTV management applications. 

##IPTV Editor

1. In dispatcharr, navigate to `Settings` > `Stream Settings` > `M3U Hash Key`
    * Set this to `URL` only. Remove all others by clicking the small X
    * Click `Save`
2. Export your IPTV Editor playlist via M3U
    * Playlist manager > Menu (small down arrow) > Show playlist info > Choose Xtream API (at top of the popup window) > Copy the M3U URL here
3. In Dispatcharr, navigate to `M3U & EPG Manager`
4. Choose `Add M3U` at the top-right
    * <b>Name</b>: Whatever you want. Many people use their provider's name for clarity
    * <b>URL</b>: This is the URL from Step 2
    * <b>Account Type</b>: Standard
    * Leave everything else as default for now
5. Give dispatcharr a couple minutes to pull in your M3U playlist. Wait until this is complete before moving forward
6. If you’re fine with bringing in the identical channel group names from your IPTV Editor setup, skip to step 11
7. Navigate to `Channels` in dispatcharr
8. Click the <i data-lucide="ellipsis-vertical" style="color: white; width: 18px;"></i> (vertical three dots) at the top right of the `Channels` section (not the streams section)
9. Click <i data-lucide="settings" style="color: white; width: 18px;"></i> Edit Groups
10. Create custom groups here for any groups you’re hoping to bring over from IPTV Editor
    * Click <i data-lucide="square-plus" style="color: skyblue; width: 18px;"></i> <span style="color: skyblue">Add Group</span>, type the name, and click the green check box to save
11. In the right-side `Streams` table, sort by group by clicking the group column header. You can type in this field to sort if you don’t want to scroll through the list
    * Select all streams for your Group 1, click <i data-lucide="square-plus" style="color: white; width: 18px;"></i> Create Channels. Select custom channel number, start with Channel 1 for your first group
12. If you previously skipped to Step 11, skip to Step 15
13. In the `Channels` section (the table to the left), select all of your newly created channels and click <i data-lucide="square-pen" style="color: white; width: 18px;"></i> Edit at the top of the table. In the Channel Group field, type the custom group you made in Step 9    
    * Click `Submit`
14. For each subsequent group you create and/or add, choose a custom channel number and make sure that channel numbers won’t ever overlap. So if your first group has 37 channels, don’t start group 2 at Channel 25
    * It is recommended that you separate groups by a wider margin such as Group 1 gets channels 1-99, Group 2 gets 100-199. Be sure to leave yourself room for future expansion
    * So if Group 1 has 300 channels, be extra generous and make it 1-499. Then 500-999. There’s no downside to having channel numbers be super high. You’re not actually using all of them, you’re just separating them for organization purposes
15. Navigate to `M3U & EPG Manager`    
16. Click the <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> (yellow pencil icon) on your M3U to edit it
17. Edit all fields in the M3U Account dialog box to match your IPTV Provider’s settings
    * <b>Name</b>: Whatever you want. Many people use their provider's name for clarity
    * <b>URL</b>: Replace the URL from IPTV Editor with the M3U or Xtream Codes (XC) URL from your provider
    * <b>Account Type</b>: You can continue as Standard or change to Xtream Codes (VOD is only pulled when using Xtream Codes)
    * <b>Enable VOD Scanning</b>: If you’d like to enable your provider’s VOD library, toggle this ON
    * <b>Username/Password</b>: Replace these with the username and password from your provider
    * <b>Max Streams</b>: Enter the maximum streams your provider allows
        * If you have multiple sets of credentials from the same provider, you can click Profiles at the bottom of this window to add them
    * Fill out the rest as you’d like
    * Click Save. This can take a few minutes. Wait until this is complete before moving forward
18. Click the <i data-lucide="refresh" style="color: royalblue; width: 18px;"></i> (blue refresh) icon on your M3U
19. To add an EPG source, click <i data-lucide="square-plus" style="color: white; width: 18px;"></i> Add EPG and supply your provider’s EPG URL
20. Navigate to `Settings` > `Stream Settings` > `M3U Hash Key`
    * This should still be set to URL only
    * Click Save
    * Click Rehash Streams. This can take a few minutes. Wait until this is complete before moving forward    
21. You’ve successfully migrated from IPTV Editor to Dispatcharr. Be sure to check out the [Discord](https://discord.gg/wfeqTRRJru) for further support