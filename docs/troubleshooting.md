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

## Logos are missing in Plex
* Plex does not support cached logos. Add `?cachedlogos=false` to the end of your EPG to bypass logo caching. 

## How do I output to XC API? 
* There must be at least one user set up with an [XC password](/Dispatcharr-Docs/user-guide/#users)
* For URL, use your IP address and port `http://{your_ip_here}:9191`
* Username is your user's username
* Password is XC password set for the user