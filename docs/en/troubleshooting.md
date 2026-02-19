---
search:
  boost: 2 # (1)!
---

# Troubleshooting
## Stream Failover not working
* Check if the Stream Profile (default and/or for the channel) is set to redirect. Stream failover will not work for redirect

---

## Will you implement X new feature?
* Check existing feature requests in our [discord](https://discord.gg/Sp45V5BcxU) or [github](https://github.com/Dispatcharr/Dispatcharr/issues). If it's not already requested, feel free to request. 

---

## Does dispatcharr support hardware acceleration? 
* You can use hardware acceleration with custom ffmpeg stream profiles. This will require [mapping your hardware](/Dispatcharr-Docs/user-guide/#mapping-hardware) to the container and setting up a [custom ffmpeg stream profile](/Dispatcharr-Docs/user-guide/#custom-stream-profiles). 

---

## Logos are missing in Plex
* Plex does not support cached logos. Add `?cachedlogos=false` to the end of your EPG to bypass logo caching. 

---

## How do I output to XC API? 
* There must be at least one user set up with an [XC password](/Dispatcharr-Docs/user-guide/#users)
* For URL, use your IP address and port `http://{your_ip_here}:9191`
* Username is your user's username
* Password is the XC password set for the user

---

## How do I turn on debug logs?
* Add this to your compose/environmental variables: `DISPATCHARR_LOG_LEVEL=debug`

---

## I got new credentials (or URL) from my provider, what should I do?

### For M3U account types and Dispatcharr Version < 0.19.0:
1. Make a backup!
2. Remove URL from Settings >>> Stream Settings >>> M3U Hash Key
    1. Add all other hash options
    2. Save
3. Once re-hashing has finished, change the settings in your M3U account
4. Refresh the account
5. Once refresh is complete, change your hash settings back

### For XC account type and Dispatcharr Version >= 0.19.0
1. Change settings for your XC account (either URL, credentials or both)
2. Save and refresh 


---

## I changed my network settings and accidently locked myself out. How can I reset it?
1. Access the CLI of the container
2. cd to /app
3. Run the following command: `python manage.py reset_network_access`

--- 

## How can I make a backup of the database?
See [Backup & Restore](/Dispatcharr-Docs/user-guide/#backup-restore)

---

## How can I password protect my M3U to share over the internet?
1. Set up your reverse proxy as shown in the [docs](/Dispatcharr-Docs/user-guide/#reverse-proxies)
2. In dispatcharr at Settings > [Network Access](/Dispatcharr-Docs/user-guide/#network-access), restrict M3U / EPG Endpoints to your local network only (example: 192.168.1.0/24)
3. Set up a user with XC password on the [Users](/Dispatcharr-Docs/user-guide/#users) page if you haven't already done so
4. Use the following m3u link format to share with your users: `https://hostname/get.php?username=XCUSERNAME&password=XCPASSWORD`
5. And this format for epg: `https://hostname/xmltv.php?username=XCUSERNAME&password=XCPASSWORD`

---

## Why are there connections showing on the dispatcharr stats page when no one is watching or connected?
This is a tricky issue that the dispatcharr team has been trying to nail down, however there are some reasons that have been identified:

* A bug or error in the client that fails to close the connection to dispatcharr
* Passing dispatcharr through a Cloudflare tunnel. Some of our users have found changing the following Cloudflare settings to be helpful:
    * Idle Connection Expiration - 10 seconds
    * Max TCP Keepalives - 3 seconds
    * TCP Keepalive Interval - 10 seconds
    * In dispatcharr, set the [Channel Shutdown Delay](/Dispatcharr-Docs/user-guide/#proxy-settings) to 3 seconds

If you can reliably reproduce this issue and believe it isn't due to one of the reasons listed above, please reproduce it while capturing [debug logs](/Dispatcharr-Docs/troubleshooting/#how-do-i-turn-on-debug-logs) and submit an issue on our [Github](https://github.com/Dispatcharr/Dispatcharr) or share with the team in our [Discord](https://discord.gg/Sp45V5BcxU) channel

---

## How do I update my container (using compose)?
1. Open a terminal on the host
2. Run the following command: `docker compose -f /path/to/docker-compose.yml pull`
3. Run the following command: `docker compose -f /path/to/docker-compose.yml up -d`

---

## I'm getting a message about hardware support for NumPy. What should I do?
If you're running a QEMU/KVM based Hypervisor (such as Proxmox), change your VM hardware type to "Host" or to "x86_v2" from "q35"

If you're running on old hardware (processor from ~2009 or older), add the following under your "environment" section in your docker compose:
`      - USE_LEGACY_NUMPY=true`

---

## How do I access VOD?
To use Video-on-Demand (VOD), you must import your IPTV account *into* Dispatcharr with the Xtream Codes [account type](/Dispatcharr-Docs/user-guide/#m3u-accounts) and credentials. Some sources refer to this as "API" as well.

To use VOD in a third party client/app, you must also export *out of* Dispatcharr using Xtream Codes credentials. (see: [How do I output to XC API?](/Dispatcharr-Docs/troubleshooting/#how-do-i-output-to-xc-api))

Dispatcharr's XC credentials can be setup in the Users tab. Create/edit a new/existing user and enter a password in the field labeled XC Password.

If your client/app supports the use of XC credentials, it will ask for an API or URL, username, and password. Enter the URL you use to access Dispatcharr (LAN IP:Port or reverse proxy), the username from the Users tab, and the XC Password created for the user. 

---

## Multicast streams are not working
Multicast streams require dispatcharr to be run in [host network mode](https://docs.docker.com/engine/network/drivers/host/) or use [macvlan](https://docs.docker.com/engine/network/drivers/macvlan/). 

Additionally, if multiple network interfaces are available, you should add `?localaddr=[interface-ip]` to the end of your stream URL.

!!! example
    `udp://239.1.2.3:4567?localaddr=0.0.0.0`
    
---

## How do I remove all VOD from dispatcharr?
1. In the [M3U & EPG manager](/Dispatcharr-Docs/user-guide/#m3u-epg-manager) page, click the <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> edit icon for any account that provides VOD (only XC account types can provide it)
2. Toggle `Enable VOD Scanning` on
3. Click the `Groups` button
4. Under the `VOD - Movies` and `VOD - Series` tabs, deselect all Groups
5. Click `Save and Refresh`
6. After the refresh completes, toggle the `Enable VOD Scanning` option off
7. Repeat for any other accounts if necessary

---

## How do I create and set a systemwide custom profile in Dispatcharr?

1. Within the Dispatcharr GUI, select Settings on the left side of the screen.
2. Follow these steps:
    1. Click Streaming Profiles.
    2. Click Add Stream Profile.
    3. In the Name section, provide a unique name.
    4. In the Command section, enter ffmpeg, streamlink, or cvlc.
    5. In the Parameters section, enter your desired parameters.
    > :memo: **Note:** Community ffmpeg profiles can be found in the ⁠🔀・stream-profiles section of the Dispatcharr Discord
    6. In the User-Agent field, leave it blank.
    7. Click Submit to save your changes.
4. Select Stream Settings, then use the drop-down menu on the right under Default Stream Profile.
5. Select the newly created stream profile you created in Step 2.
6. Click Save.

---

## Use of Auto Channel Sync

Auto channel sync should ONLY be used for event groups where the channel names are updated to show the event name.  Using on regular channel groups might feel like a cheat code to add all your channels but you lose the ability to customize name, logo, epg etc. as the next refresh will wipe all the changes.  You also lose the ability to add backup and failover streams.

If you want all the channels from a regular group added select the group on the streams table, select all then press Create Channels at the top. 

---

## I'm getting a message about hardware support for NumPy. What should I do?

Upgrade your Dispatcharr - this was fixed in 0.18.0.

---

