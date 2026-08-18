# Chapter 4: Your first archive, step by step

## 4.1 What we are going to do

This chapter follows a whole run: from a podcast’s address to a folder of tidy audio files on disk.
The scenario is the most common one — downloading a programme’s complete catalogue for the first
time.

It is worth reading once from beginning to end. Once you have the hang of it, opening a new archive
takes under a minute.

---

## 4.2 Finding the feed address

Everything starts from the podcast’s RSS address. An RSS feed is a text file in XML format that the
publisher puts online to list the available episodes: every podcast has one, even when it is not
advertised.

Where to look:

*   **On the podcast website.** An orange icon with waves, or the words RSS, Feed, Subscribe,
    Podcast Feed. Clicking it usually opens the XML file in the browser: the address in the bar is
    the one you need.
*   **In a listening app.** Pocket Casts, Apple Podcasts and the like often show the RSS link in
    the programme information, sometimes tucked under Share.
*   **On the hosting platform.** Spreaker, Podbean, Buzzsprout and similar services publish the
    feed address on the podcast page or in the producer’s dashboard.
*   **With a search engine.** Searching `[podcast name] RSS feed` often gets you there first time.

A valid RSS address usually ends in `.xml` or `.rss`, or contains `feed`, `rss` or `podcast` in the
path. For example: `https://www.example.com/feed.xml`,
`https://feeds.spreaker.com/podcast/12345`, `https://anchor.fm/s/abc123/podcast/rss`.

---

## 4.3 Preparing the destination folder

Before analysing the feed it is worth deciding where the files will go, and giving yourself a
structure from the start.

```
D:\Podcast Archive\
    ├── My Podcast\
    ├── Technology Podcast\
    └── Radio Talk Show\
```

The program creates the subfolder named after the podcast inside your chosen destination, and saves
the files there under the names the template decides (chapter 8).

To set the destination:

1.  Press the **folder** icon in the command bar at the top, or open **Settings → Download** and
    use the icon next to **Download Path**.
2.  Choose the folder and confirm.
3.  The path stays visible at the bottom of the sidebar; a click opens it in the file manager.

*If the archive lives on a NAS or a network drive*, read chapter 7 before going further: those
paths need a little more care.

---

## 4.4 Analysing the feed

With the address ready and the folder set:

1.  Paste the address into the **URL field** at the top.
2.  Press **Analyze**, or simply `Enter`.
3.  The list fills up. A podcast of 200 or 300 episodes takes a few seconds; catalogues past the
    thousand mark can need fifteen or twenty, because the XML file to read is big.

If the analysis fails, in order of likelihood: the address contains a stray space or character; the
feed is temporarily unreachable, which is worth testing in a browser; the server answers with an
HTTP code that the program reports in the error message, typically `403 Forbidden` for feeds that
demand particular headers.

---

## 4.5 Reading the results

Once the analysis is done, the list shows the catalogue.

Three things are worth a look. The **episode count**, at the top of the list: a programme running
for a few years easily has a few hundred. The episodes already **ARCHIVED**, if the feed had been
worked through before: the database knows those and will not fetch them again. And the episodes
**without duration or size**, which simply do not declare them in the feed: they download the same
as any other, with no consequences.

---

## 4.6 Starting the download

There are two routes.

**The whole catalogue.** Press **Download All**: the program asks for confirmation, checks free
space and queues every episode never downloaded. Note one useful detail: it acts on the episodes
**visible at that moment**, so with a filter active it downloads only those. Downloads run in
parallel, three at a time unless **Parallel Downloads** says otherwise (chapter 10).

**A few episodes only.** Select them with `Ctrl` and a click on each, or with `Shift` for a range,
and press **Download Selected (N)** in the feed header.

---

## 4.7 Following progress

The **download panel** opens by itself on the right and shows each episode with its percentage,
speed and estimated time. As an order of magnitude: two hundred episodes at 64 kbps take between
two and three gigabytes.

The rows in the list update in real time. There is no need to keep the window open: close it and
the program stays in the notification area and carries on working.

During the batch the software handles retries after network errors, stalls and the verification of
each completed file by itself. If the computer suspends, transfers are cut off: on waking, stall
detection closes the frozen transfers and the retry cycle usually recovers, but any episode that
had already used up its three attempts ends in error. Put those back in the queue with **Retry
failed**.

---

## 4.8 Checking the archive

When the panel declares the batch complete, three things remain.

**Check the errors.** The summary at the bottom of the download panel lists the missed episodes
with their codes. The most frequent is `EPISODE_NOT_FOUND`, meaning a file pulled from the server
before we could get it. To requeue every failure in one go there is **Retry failed**.

**Export the inventory.** **Settings → Archive → Export Inventory (CSV)** gives you the full list
of archived episodes with SHA-256 checksums, sizes and metadata (chapter 9).

**Take a look at the disk.** The files sit in the destination folder, named according to the
template (chapter 8). If you find `.part` files, those transfers were interrupted or suspended:
requeue the same episodes and they resume from where they stopped. Orphaned ones can be cleared
from **Settings → Advanced → Clean temporary files**.

---

## 4.9 Keeping the archive up to date

This is where the database-first design earns its keep: the program always knows what it holds.

For a feed already in the library, select it and press the sync icon, or use **Sync All** for the
whole library. New episodes appear with the **NEW** tag and the feed shows the **TO DOWNLOAD**
badge in the sidebar; the ones you already have stay **ARCHIVED**. At that point **Download All**
takes only the new ones. Alternatively, **Sync New** does both at once: it re-reads the feed and
immediately queues what is missing.

For a feed not yet in the library, paste the address into the URL field and press **Analyze**: it
joins the library and the list shows straight away what is missing.

The same episode is never downloaded twice. The automatic check for new episodes runs every six
hours out of the box (chapter 10 and section 5.9).

---

*Chapter 5 goes into feed management and OPML files in detail.*
