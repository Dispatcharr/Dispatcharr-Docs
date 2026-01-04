# Basic Dispatcharr Setup

## Introduction

This howto is to get you up and running with a basic setup for Dispatcharr.  It makes the following assumptions:

1. You are running a Linux server of some sort.
2. You have docker-ce installed. If you don't have it installed or want to learn how, go here: [Docker Setup](https://docs.docker.com/engine/install/)
3. You have an IPTV provider of some sort. The scope of this document does not include selection of a provider or where to find them, that is on you.
4. You have some command-line knowledge of using Linux and Docker.
5. You have some sort of IPTV client.  The basic instructions on how to connect your client will be in this document but this document does not cover every single client.
6. You understand some of the concepts of IPTV.  If you are not familiar what an M3U or EPG are, or what Xtreme Codes are, please, see the definitions section at the end of this document for better understanding.

## Pre-Docker Setup

Dispatcharr is built as a Docker container.  There are other ways to compile it but that's beyond the scope of this document.  We will be using the "AIO" install, which includes Dispatcharr, Redis, and Postgres all built in.  There are other ways to do this but lets keep this simple.

1. First, we're going to create a user for Dispatcharr.  We will use this account to run the container.

    ```bash
    sudo adduser dispatcharr
    ```

2. Get the UID and GID that the user created:

    ```bash
    user@dispatcharr:~$ id dispatcharr
    ```
    It should return something like the following:
    <br/>

    ```
    uid=1000(dispatcharr) gid=1000(dispatcharr) groups=1000(dispatcharr)
    ```
  
    Keep track of that UID and GID, we're going to need it shortly.
    
3. Let us make an assumption that you're creating all of the container setup within `/opt`.  We need to create the directory for Dispatcharr and give it the proper ownership:

    ```bash
    sudo mkdir /opt/dispatcharr
    sudo chown dispatcharr:dispatcharr /opt/dispatcharr
    ```

4. Now we can begin working on the docker compose file.  Use your favorite editor to create a `docker-compose.yml` in `/opt/docker`.  Paste the following in your compose file and save it:

    ```yaml
    services:
      dispatcharr:
        image: ghcr.io/dispatcharr/dispatcharr:latest
        container_name: dispatcharr
        ports:
          - 9191:9191
        volumes:
          - /opt/dispatcharr/data
        environment:
          - DISPATCHARR_ENV=aio
          - REDIS_HOST=localhost
          - CELERY_BROKER_URL=redis://localhost:6379/0
          - DISPATCHARR_LOG_LEVEL=info
          - PUID=1000 # This should be the UID from step 2
          - PGID=1000 # This should be the GID from step 2
    ```

5. Change to the `/opt/dispatcharr` directory and do a docker compose up to pull the container and start it:

    ```bash
    cd /opt/dispatcharr
    docker compose up -d
    ```

6. Once the container is started, we can go on to initial setup of Dispatcharr!

## Dipatcharr Setup

Each of the following sections are important to the setup of Dispatcharr. They are in a specific order intentionally; each section defines what steps need to happen next to be able to set this up.

### Dispatcharr Initial Login

1. Go to your URL/IP for your Dispatcharr instance.  This should be the IP address of the host you're on, port 9191. So for example, `http://192.168.1.10:9191`. Upon first login, you will be brought to an initial login screen, asking you to create an admin account and password.

> [!TIP]
>  Do not use the username "admin" - that is a reserved account name.

    ![Initial Login](assets/first_login.png)

Once you've created your username and password, click the "Create Account" button.  

2. You need to login. Do so with the account you just created.

    ![Login](assets/login.png)

### Dispatcharr M3U Setup

M3Us come from your provider. Finding providers is not something we will cover in this guide, that is on you. M3Us define what groups of streams and what streams are available to map to channels.

1. You'll now come to the main interface.  Navigate on the left to the M3U and EPG Manager by clicking on it.

    ![Navigation](assets/nav_left.png)

2. You'll now be in the M3U and EPG manager.  Click the "Add M3U" button in the upper right corner.

3. This will pop up the below screen.  Fill out each of the fields as recommended and then click Save.

| Number | Field | Instructions |
| ---| ---| --- |
| 1 | Name | Enter in a name here you wish to refer to your provider as.|
| 2 | URL | Enter in the M3U or XC URL from your provider |
| 3 | Account Type | Two different options here, Xtreme Codes assume you've been given an XC username and password. Standard assumes you're just using an M3U provided by your provider. |
| 4 | Create EPG | If you're using Xtreme Codes, you can turn this on to receive an EPG automatically from your provider. |
| 5 | Enable VOD Scanning | If your provider has VODs, tick this to scan for VOD groups. |
| 6 | Username | This only appears if you have Xtreme Codes; your username from your provider. |
| 7 | Password | The password from your Xtreme Codes provider. |
| 8 | Max Streams | The number of maximum streams available to be used from your provider. | 
| 9 | Refresh Interval | This is how often you'll check your M3U/XC provider for new streams and groups. |
| 10 | Stale Stream Retention | How long a stream needs to be idle/unusable before it is removed from your stream list. |

4. Dispatcharr will connect and update the M3U and note that it is "Pending Setup".  Click the yellow Edit button under "Actions"

    ![M3U Setup](assets/m3u_setup.png)

5. Click "Groups" to select what stream groups you'd like to sync.

    ![M3U Setup](assets/m3u_postsetup.png)

6. In the below image, see the table for what each setting does in a basic sense.  Recommended settings will be in the description field.  You'll want to select at least one group to sync streams down to create channels.

    ![M3U Groups](assets/m3u_groups_markedup.png)

| Number | Name | Description |
| --- | --- | --- |
| 1 | Automatic Enable New Groups | Automatically turns on any new groups that appear in your M3U from your provider. |
| 2 | Select Visible/Deselect Visible | If you use the filter field, you can do a mass select/deselect if needed. Otherwise this will select all/deselect all. |
| 3 | Named Group | This green button is a named group. If you click it, it will turn grey, this means it is off. If it is green, it is on and will sync strems. |
| 4 | Auto Channel Sync | This will automatically make channels for everything in this group.  Generally recommended you only do this on event channels. | 
| 5 | Save and Refresh | This will save what groups are passed through and sync down the streams available for you to create channels. |

### Dispatcharr EPG Setup

EPGs are used to define data for guides on an IPTV app. Finding an EPG source is beyond the scope of this guide.

1. Click on the M3U and EPG Manager in the left-hand pane.

2. Click on Add EPG and choose Standard EPG Source.

    ![Add EPG](assets/add_epg.png)

3.  Fill out the following information.

    | Number | Name | Instructions |
    | --- | --- | --- |
    | 1 | Name | This is just a descriptive name. |
    | 2 | Source Type | Generally this will be XMLTV. For the purposes of this guide, use XMLTV. |
    | 3 | Refresh Interval | Set this to a time that you know your provider will refresh. If they only update once a day, leave it as 24 hours. |
    | 4 | URL | This is the URL to the EPG. Generally it will be an XML file or Gzip. |
    | 5 | Priority | This number should be set high if you wish auto channel matching to work. If you have multiple EPGs, you'd want the "best" one to be the highest number and lesser ones to be lower. |
    | 6 | Status | Leave this checked if you wish for the EPG to be enabled. |
    | 7 | Create EPG Source | Click this when all fields are filled out. |

### Dispatcharr Channel Setup

This is where the rubber hits the road - channels allow your IPTV client to watch a stream and define things like EPG data, channel numbers, logos, etc.  This is the real meat and potatoes and honestly where you'll be spending the most time configuring.

> [!TIP]
> Plan your work, work your plan. Leave spacing between channel numbers/channel groups. For example, perhaps you want entertainment channels from 0-99, news channels from 100-199, and sports from 200-299. This should give you some room to grow if needed.


1. Click on "Channels" in the left pane.

2. You're going to get two separate panes. One is Channels, which are channels you create. Streams are what your provider hands to you that you map to channels for watching.

    ![Stream Pane](assets/create_channel.png)

    First, check a box next to a channel (1).  Then click on the "Create Channel(s)" button (2).

3. You'll be prompted to use the provider channel information or you can choose (1) Start from custom number and then (2) assign a channel number.  Finally, click (3) Create Channels and you'll have created your own channel!

    ![Channel Numbers](assets/channel_numbers.png)

    You can check multiple boxes on the stream side to be able to create multiple channels at once.  Each channel will get susequent channel numbers (so if you created a channel 20, if you have 20 in this field, it will choose channel 21, then 22, etc.)

4. Now that we have a channel, we need to configure it to look the way we want it.  In the channel pane, click the gold edit button (1) to bring up the channel edit modal.

    ![Channels Pane](assets/edit_channel.png)

5. You can change the (1) channel name here, assign or create a channel group (2), assign a custom stream profile (3), change the logo (4) or upload the logo (5), change the channel number (6), assign an EPG (7), auto-match your channels with your EPGs (8), and save the settings (9) for your channel.

    ![Channel Edit Modal](assets/channel_modal.png)

6. Now that this is done, back to our channels and streams pane.  Repeat this process for all the channels you wish to create.

This is the most basic setup you can do.  At this point, Dispatcharr is ready for you to consume your channels with a client.  See below for how to configure your client.

### Dispatchar User Configuration

Users are available for two purposes: one, for administration and configuration of Dispatcharr and two, for Xtreme Code configuration.  This tells you how to configure an Xtreme Code user.

1. Click on the Users button on the left side pane.

2. This will bring up the users panel.  You can edit (1) your user account or (2) add a New User.  Lets add a new user.  Click that Add User button.

    ![Users Panel](assets/users_panel.png)

3. Below is the Add User modal.  You're going to need to create a new username (1).  Then you'll create an Xtreme Codes password (2).  Do not set a password in the standard password field, this is only to be used for consuming IPTV services via Dispatcharr.  Finally, choose (3) Save to create the user account.

    ![Add User Modal](assets/add_user_modal.png)

You are now ready to connect to your Dispatcharr with a client.

## Client Connections

### Connecting an IPTV Client

Ultimately, users only need a couple items to connect as long as you've got an XC username and XC password, they're good to go.  That said, some clients/tools don't accept Xtreme Codes and you'll have to give an M3U URL and EPG URL.  We'll cover those separately.  

For now, you really only need to provide the URL to your dispatcharr (http://yourhost:9191) and the username and XC password you just created.

There are plenty of options for clients, such as [Tivimate](https://tivimate.com/), [UHF](https://www.uhfapp.com/), or [iMPlayer](https://implayer.tv/home).  Feel free to try any of them as they are free.  Advanced features for those clients are something each charges for.

### Connecting Emby

[Emby](https://emby.media/) is a media aggregator similar to Plex.  It definitely handles IPTV better than Plex, however.  Setting Emby up is outside the scope of this document and this assumes you've already got Emby running.

1. We need to go back into Dispatcharr.  You'll want to go into the Channels button on the left-hand pane.

2. In the channels pane, at the top of the screen will be the following buttons.  You're going to need to use these to get Emby setup.

    ![M3U Buttons](assets/channels_buttons.png)

3. Click the "M3U" button and copy the URL out to something like a notepad document.

    ![M3U URL](assets/m3u_url.png)

4. Click the "EPG" button and copy the URL out to something like a notepad document.

    ![EPG URL](assets/epg_url.png)

5. Open Emby and go into the administration configuration.  Choose "Live TV" like the image below.

    ![Emby Side Panel](assets/emby_livetv.png)

6. Click the "Add TV Source" button

    ![Emby Add TV Source](assets/emby_tv_source.png)

7. Enter in the M3U you copied in step 3 in the File or url field (1), then check the box for "Allow mapping to guide data using channel numbers" (2) and then click "Save".

    ![Emby Add M3U](assets/emby_add_m3u.png)

8. Click on "Add Guide Data Source"

9. Choose your Country (1) and then choose XmlTV (2) and click Next (3).

    ![Emby Add EPG](assets/emby_add_epg1.png)

10. Enter in your (1) EPG URL from step 4. Then you can choose to only enable it for specific tuners (2).  Click Save when done.

    ![Emby Set Config](assets/emby_add_epg2.png)

12. Click on "Refresh Guide Data" and once it is complete, Live TV is enabled!

## Definitions
M3U8 or M3U
: Think of this as the stream definition from your provider.  It gives you all of the streams, the groups they're associated with, and the URLs for those streams.

M3U Group
: A grouping of stream types.  For example, might be "Sports" or "Documentaries" or "News".  Can be a unicode name (can contain Emoji, for example)

EPG (Electronic Programming Guide)
: Contains all of the data for a guide setup so that you know what is on a specific channel at a specific time.  Usually contains multiple days of data as well as multiple time slots for programs.

Xtreme Codes API
: Usually a username and password provided to you by your IPTV provider.  This makes connections to the IPTV provider's Xtreme Codes API to download the M3U and EPG data instead of having to provide individual EPG and M3U URLs.  Often will be shortened to "XC"

Stream
: The URL to a specific stream from your IPTV provider.  Usually encapsulated inside of an M3U or Xtreme Code login.

Channel
: A named and numbered channel (think of TV channel) that contains one or more streams (in the case of failover).  Used by IPTV clients to create a guide of what is on and what channels are available.  Numbers can be integers (1, for example) or floats (1.1 for example).

Channel Profile
: Contains multiple channels.  Channels can be shown or hidden on a per-profile basis, which allows you to configure different lists of channels on a per-user basis.

VOD
: Videos on Demand - provided via Xtreme Codes, your provider may offer these.