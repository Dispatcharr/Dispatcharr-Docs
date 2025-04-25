# Getting Started

Dispatcharr can be installed using Docker on various platforms, including Windows, macOS, Proxmox, and Unraid. This guide provides detailed instructions for each method.

## Installation

See [installation guide](installation.md).

---

## Startup

After installation and starting up, open a web browser and go to `http://{your_ip_here}:9191`
Create your user account by entering a username and password that you will remember. You can optionally add an email address.

## Adding M3U and EPG

![Getting started](assets/getting_started.png)
(1) Add your first M3U by clicking the "Add M3U" button on the right-hand side under "Getting started".  
(2) This will take you to the M3U & EPG Manager (also accessible from the navbar on the left).  

![M3U & EPG Manager](assets/m3u_epg_manager.png)
(3) Click the Add button under M3U Accounts.  Enter a name for your M3U, then enter the M3U URL or upload your M3U file.  You can optionally set a max number of concurrent streams allowed, or leave at 0 for unlimited.  Click "Save". Depending on the size of your M3U, it may take some time to load.

(4) Add an episode guide by clicking the "Add EPG" button under the EPGs section. Enter a name for your EPG, then enter the URL and if necessary, API key. Choose the source type, then hit "Submit".
Depending on the size of your EPG, it may take some time to load.

### Creating your first channel

Click back to the main Channels screen in the navbar. If your M3U was added and successfully scanned, you should see a list of streams on the right side of the page under "Streams".  
Find a stream in the list, or search for one by typing in the "Name" column header. Press the green [+] create new channel button to add the stream to a new channel.

### Media Playback Setup
#### Jellyfin
add content here

#### Plex
add content here

#### ChannelsDVR
add content here

#### Emby

Emby can accept HDHR or M3U format. In Dispatcharr, navigate to the "Channels" page then click either the HDHR or M3U buttons at the top of the page, and copy the provided URL.  

Navigate to your Emby page and click the Settings icon to manage your emby server.  Click "Live TV", then "Add TV source".  Choose HD Homerun if using the HDHR URL, or M3U if using the M3U URL from Dispatcharr.  Paste the URL and save.  
> If adding as M3U in Emby, leave the Simultaneous stream limit set as "0", since stream limits will be handled by Dispatcharr.
