# Chapter 4: Your first archive, step by step

## 4.1 The route

This chapter follows a whole route: from a podcast’s address to a folder of tidy audio files on
disk. The scenario is the most common one: downloading a programme’s catalogue for the first time,
all of it or just a period.

It is worth reading once from start to finish. Once you have the hang of it, starting a new archive
takes less than a minute.

---

## 4.2 Finding the feed address

You start from the podcast’s RSS address. An RSS feed is an XML text file that the publisher puts
online to list the available episodes: every podcast has one, even when it does not advertise it.

Where to look:

* **On the podcast’s website.** An orange icon with waves, or the words RSS, Feed, Subscribe,
  Podcast Feed. Clicking usually opens the XML file in the browser: the address in the bar is the
  one you need.
* **In a listening app.** Pocket Casts, Apple Podcasts and the like often show the RSS link in the
  programme’s information, sometimes under Share.
* **On the hosting platform.** Spreaker, Podbean, Buzzsprout and similar services publish the feed
  address on the podcast page or in the producer’s dashboard.
* **With a search engine.** Searching for `[podcast name] RSS feed` often finds it first time.

A valid RSS address usually ends in `.xml` or `.rss`, or has `feed`, `rss` or `podcast` in its
path. For example: `https://www.example.com/feed.xml`, `https://feeds.spreaker.com/podcast/12345`,
`https://anchor.fm/s/abc123/podcast/rss`.

---

## 4.3 Choosing the download folder

Before adding the feed, decide where the files will go. Inside the download folder the program
creates a subfolder for each podcast by itself, and saves the files there with the names set by the
template (chapter 8):

```text
D:\Podcast Archive\
    ├── My Podcast\
    ├── Tech Podcast\
    └── Radio Talk Show\
```

Without an explicit choice, the folder is `Documents\FeedDownloader\downloads`. To change it:

1. Open **Settings → Downloads** (the gear at the top right, or **Ctrl+,**).
2. Press **Change folder** in the **Download folder** section.
3. Choose the folder and confirm. The program checks it can write there and confirms with
   *Download folder updated.*

If the archive already holds episodes, the program asks what to do with them: move them to the new
folder, or leave them where they are and use the new one only for future downloads (chapter 9,
section 9.8). For a first archive the question does not appear.

*If the archive lives on a NAS or a network drive*, read chapter 7 before going on: those paths
need a little extra care.

---

## 4.4 Adding the feed

1. Press **Add feed** at the bottom of the sidebar, or **Ctrl+N**.
2. Paste the address into the **Feed address** field. The `https://` prefix may be left out, and
   addresses starting with `feed:` or `podcast:` are converted automatically.
3. Press **Analyse**, or just `Enter`. For a 200- or 300-episode podcast a few seconds are enough;
   catalogues of over a thousand, or split across many pages, can take fifteen to thirty.
4. The preview appears: cover, title, number of episodes and the range covered (*from … to …*),
   with the start of the description. This is the moment to check it is the right podcast.
5. If you like, switch on **Automatic archiving** here: new episodes found by the periodic checks
   will download without asking (chapter 5, section 5.10).
6. Press **Add to library**. The feed joins the sidebar and its view opens.

If the feed is already in the library, the preview says so and the button becomes **Open feed**.

**Two shortcuts.** You can drag an address from the browser straight onto the program’s window:
**Add a feed** opens with the analysis already running. And if you already have a podcast list in
another application, you can bring it in with **Import from OPML** (chapter 5, section 5.5).

If the analysis fails, the reason appears under the field, for instance *The address leads to a web
page, not to an RSS feed.* or *The server is not answering. Check the connection.* Chapter 11 lists
every message and what it means.

---

## 4.5 Reading the feed view

With the feed open, look at three things.

* **The figures** in the header: **Episodes**, **Archived**, **To download** and **Space used**. A
  programme that has been running for a few years easily has a few hundred episodes.
* **Episodes already archived**, if the feed was worked on in the past: the database knows them and
  will not download them again. The **Archived** filter shows them all together.
* **Episodes with no duration or size**: the feed simply does not declare them. They download just
  the same, with no consequence; the space estimate uses an average value for them.

---

## 4.6 Choosing what to download

The main button, above the list, always takes the episodes **shown** that are neither archived nor
already queued, and says so on its label. There are three ways to use it.

### The whole catalogue

With no filters active the button reads **Download the N missing**: it takes every episode not yet
archived.

### A period

To download “from day X to day Y”:

1. In the filter strip, open the **Period** menu and choose a ready-made range (**Last 30 days**,
   **Last 90 days**, **Last 12 months**, **This year**, **Last year**), or fill in the **From** and
   **To** dates.
2. If you like, combine other filters: the **To download** status, a minimum duration, a word in the
   title.
3. The button becomes **Download the N filtered**, and the **What will be downloaded** panel on the
   right shows the number of episodes, the estimated space and the period.

### A selection

Tick the checkboxes of the episodes you want; **Shift** + click on a checkbox takes a range,
**Ctrl+A** every visible one. **Download the N selected** appears.

For a single episode, the download icon on its row is enough, or **Download** in the details.

---

## 4.7 Confirming and starting

For more than one episode the program asks for confirmation. The *Download N episodes?* window
shows:

* how many episodes go into the queue and from which podcast;
* the **Period**, if a date filter is active;
* the **Estimated space** and the **Free space** on the destination disk;
* the **Folder** the files will go to.

If the free space may not be enough (less than one and a fifth times the estimate), the window says
so in yellow. If less than 200 MB is left on the disk, the program starts nothing and says so:
*Almost no space left (… free): downloads not started.*

Pressing **Queue** starts the downloads, as many at a time as set in **Settings → Downloads →
Parallel downloads**: three unless you change it (chapter 6).

The space estimate uses the size declared by the feed; where that is missing, it works it out from
the duration (at 192 kbps), and without that either it counts 45 minutes per episode.

---

## 4.8 Following progress

The top bar always tells you how many downloads are running and how far the run has got (*3
downloading · 47 of 312*). Rows in the episode list show their own bar, with percentage, speed and
time left.

For the full picture there is the **Downloads** view (**Ctrl+2**, or click the queue status): the
queue with its pause and cancel controls, the failed downloads with their reason, this session’s
completed ones.

You do not need to keep the window open: close it and the program stays in the notification area
and keeps working. When the batch ends, a system notification arrives (*Download complete: 312 files
downloaded.*).

During the batch the software handles retries after network errors, stalls and the check of every
completed file. If the connection drops, the queue pauses by itself and starts again when the
network is back. If the computer goes to sleep, on waking the stall watch closes the frozen
transfers and the retry cycle usually recovers; episodes that had already used up their five
attempts end up among the failed ones, from where **Retry all** puts them back in the queue.

---

## 4.9 Checking the result

When the queue empties, three things remain.

**Check the failed downloads.** In the **Downloads** view, the **Failed** section lists the missed
episodes with their reason. The most common is *The file no longer exists on the server (404).*, a
file removed before the program could fetch it. **Retry all (N)** puts them back in the queue in one
go.

**Look at the disk.** **Open folder**, in the feed header, opens the podcast’s folder. The files
carry the names set by the template (chapter 8). If you find `.part` files, those transfers were
interrupted or paused: queue the same episodes again and they resume where they stopped. Orphaned
ones are removed from **Settings → Archive → Clean temporary files**.

**Export the inventory.** In the **Archive** view, **Export CSV** produces the full list of archived
episodes with SHA-256 fingerprint, sizes, metadata and folder (chapter 9).

---

## 4.10 Keeping the archive up to date

This is where the database-first approach pays off: the program always knows what it owns, and the
same episode is never downloaded twice.

* **By hand.** **Check feeds** (top bar, or **Ctrl+S**) reads the whole library again. Feeds with new
  episodes show *N to download* in the sidebar and in the Library; open the feed and **Download the N
  missing** takes only those. For a single feed there is **Refresh** in its header.
* **By itself.** The program checks every feed at launch and then every six hours, even with the
  window closed (change the interval in **Settings → General**). When it finds new episodes it sends
  a system notification.
* **Hands-off.** With **Automatic archiving** on for a feed, new episodes found by the checks queue
  themselves (chapter 5, section 5.10). It is the simplest way to follow a podcast over time.

---

*Chapter 5 goes into managing feeds, OPML files and checks in detail.*
