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
1. Access the CLI of the container
2. Run this command to make a new directory: `mkdir /data/manualbackups`
3. Run this command to create the backup (change Backup-mm-dd-yy to a name you'd like):  
`pg_dump -h $POSTGRES_HOST -p $POSTGRES_PORT -U $POSTGRES_USER -d $POSTGRES_DB -Fc -v -f "/data/manualbackups/Backup-mm-dd-yy"`  

To Restore that backup follow these steps:  

1. Access the CLI of the container  
2. Run this command to restore the backup:  
`pg_restore --clean -h $POSTGRES_HOST -p $POSTGRES_PORT -U $POSTGRES_USER -d $POSTGRES_DB -v "/data/manualbackups/Backup-mm-dd-yy"`  
3. Restart the container  
