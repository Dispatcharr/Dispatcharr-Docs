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
* We plan on adding direct hardware acceleration support in future releases. For now, you can use hardware acceleration with custom ffmpeg stream profiles. This will require [mapping your hardware](/Dispatcharr-Docs/user-guide/#mapping-hardware) to the container and setting up a [custom ffmpeg stream profile](/Dispatcharr-Docs/user-guide/#custom-stream-profiles). 