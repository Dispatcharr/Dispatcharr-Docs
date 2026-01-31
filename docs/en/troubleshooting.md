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
1. Make a backup!
2. Remove URL from Settings >>> Stream Settings >>> M3U Hash Key
    * Add all other hash options
3. Once re-hashing has finished, change the settings in your M3U account
4. Refresh the account
5. Once refresh is complete, change your hash settings back

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

---

## Multicast streams are not working
Multicast streams require dispatcharr to be run in [host network mode](https://docs.docker.com/engine/network/drivers/host/) or use [macvlan](https://docs.docker.com/engine/network/drivers/macvlan/). 

Additionally, if multiple network interfaces are available, you should add `?localaddr=[interface-ip]` to the end of your stream URL.

!!! example
    `udp://239.1.2.3:4567?localaddr=0.0.0.0`
    
---

## Jellyfin EPG not importing or shows "No guide data"

Jellyfin requires the EPG channel ID to match a specific format. If your EPG data isn't appearing:

1. **Check the TVG-ID format**: Jellyfin prefers descriptive channel IDs like `BBC1.uk` rather than numeric IDs like `1`
2. In Dispatcharr, go to Channels and set the **TVG-ID Source** to use TVG-ID instead of channel number
3. Alternatively, add `?tvg_id_source=tvg_id` to your EPG URL:
    ```
    http://your-dispatcharr:9191/output/epg?tvg_id_source=tvg_id
    ```
4. Refresh your guide data in Jellyfin after making changes

!!! tip
    If channels have no tvg-id set, Dispatcharr will use the channel number by default. Ensure your channels have proper TVG-IDs assigned for best Jellyfin compatibility.

*Related: [#583](https://github.com/Dispatcharr/Dispatcharr/issues/583)*

!!! note "Jellyfin categories"
    Jellyfin categories (Sports, News, Movies, etc.) are passed through automatically if your source EPG includes them—no special configuration is needed in Dispatcharr. ([#538](https://github.com/Dispatcharr/Dispatcharr/issues/538))

---

## Adding multiple Dispatcharr instances to Plex

Plex identifies tuners by their device ID. If you're running multiple Dispatcharr instances (e.g., one with VPN, one without), Plex may have trouble distinguishing them or hang during tuner setup.

**Recommended Solution**: Use Channel Profiles instead of multiple Dispatcharr instances

1. In Dispatcharr, go to the Channels page
2. Create a new Channel Profile for each "virtual tuner" you need
3. Add each Channel Profile to Plex as a separate HDHR device
4. Each profile generates its own unique HDHR, M3U, and EPG URLs

**Alternative workaround**: If you must use multiple instances:

1. Use the M3U output from one instance as an M3U source in the other
2. Add only one instance directly to Plex via HDHR
3. The consolidated instance will contain channels from both

See [Channel Profiles](/Dispatcharr-Docs/user-guide/#channels) for more details on setting up profiles.

*Related: [#734](https://github.com/Dispatcharr/Dispatcharr/issues/734)*

---

## Xtream Codes apps not working through reverse proxy

Some IPTV apps using Xtream Codes API (like IPTV Smarters, TiviMate) may fail when accessing Dispatcharr through a reverse proxy, especially from outside your network.

**Symptoms**:

* App works on local network but fails remotely
* Login works but channels don't play
* Streams timeout or show connection errors

**Cause**: These apps construct URLs using `/live/username/password/` paths that your reverse proxy may not be forwarding.

**Solution**: Update your nginx configuration to include the `/live/` endpoint:

```nginx
location /live/ {
    proxy_pass http://dispatcharr:9191/live/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-Port $server_port;
}
```

Make sure you also have the standard proxy location blocks for `/`, `/api/`, `/proxy/`, etc.

!!! note
    The example nginx config in the [Reverse Proxies](/Dispatcharr-Docs/user-guide/#reverse-proxies) section should work for most setups. If you've customized it, ensure all required endpoints are being proxied.

*Related: [#839](https://github.com/Dispatcharr/Dispatcharr/issues/839)*

---

## EPG shows wrong data or is "off-by-one"

If your EPG data appears correct in Dispatcharr but shows the wrong programs in your client (e.g., displaying data from a different channel), this is usually caused by **overlapping channel numbers**.

**Cause**: When using Auto Channel Sync, the default starting channel number is 1 for all groups. If multiple groups start at 1, channels will have duplicate numbers, confusing clients when matching EPG data.

**Solution**:

1. Go to M3U & EPG Manager
2. Edit your M3U account and click "Groups"
3. For each group using Auto Channel Sync, set a unique **Start Channel #** (e.g., Group A starts at 1, Group B at 100, Group C at 200)
4. Save and refresh

!!! tip
    Plan your channel number ranges ahead of time to avoid overlaps. For example, allocate 1-99 for local channels, 100-199 for sports, 200-299 for movies, etc.

*Related: [#563](https://github.com/Dispatcharr/Dispatcharr/issues/563)*

---

## How do I remove all VOD from dispatcharr?
1. In the [M3U & EPG manager](/Dispatcharr-Docs/user-guide/#m3u-epg-manager) page, click the <i data-lucide="square-pen" style="color: gold; width: 18px;"></i> edit icon for any account that provides VOD (only XC account types can provide it)
2. Toggle `Enable VOD Scanning` on
3. Click the `Groups` button
4. Under the `VOD - Movies` and `VOD - Series` tabs, deselect all Groups
5. Click `Save and Refresh`
6. After the refresh completes, toggle the `Enable VOD Scanning` option off
7. Repeat for any other accounts if necessary