# Chapter 5: Managing feeds

## 5.1 What an RSS feed is

An RSS feed is an XML document a podcast publishes so that programs can read its list of episodes.
When a new episode comes out, the publisher adds an entry to that document; readers fetch it again
from time to time and notice the change.

For FeedDownloader Pro the feed is the source of everything: it holds the list of episodes, the
addresses of the audio files, the metadata (title, date, duration, numbering, description, cover)
and general information about the programme.

You do not need to know its internal structure to use the software. It does help to understand why
data is sometimes missing from the list: almost always, the feed does not declare it.

---

## 5.2 Well-made feeds and problem feeds

Standards compliance, in the podcast world, is more an aspiration than a rule.

**Well-formed feed.** It follows RSS 2.0 or Atom, declares title, link, date and audio address with
its MIME type, and perhaps adds iTunes or Podcast Index tags for duration, cover, season and
episode. The program reads it without trouble.

**Incomplete feed.** Optional fields such as duration, size, numbering or episode cover are missing.
The files download all the same, but some information in the list will stay blank.

**Feed with unreachable audio.** The document reads fine, but the file addresses point to resources
that have gone. It happens a lot with abandoned or migrated programmes. The episodes end up among
the failed ones after the download attempt.

**Password-protected feeds.** Some private podcasts ask for HTTP Basic credentials. You can put them
straight into the address: `https://user:password@www.example.com/feed.xml`. The credentials then
stay written in the address saved in the library and in OPML exports.

---

## 5.3 What happens when you press Analyse

In order:

1. **Address check.** Correct syntax and passing the checks against SSRF attacks (chapter 10,
   section 10.8).
2. **Request to the server.** The program introduces itself with a recognisable name
   (`RuntimeFeedDownloader`) and gives up after fifteen seconds without an answer. The same address
   cannot be requested twice less than three seconds apart.
3. **Reading the document.** It reads RSS or Atom and tolerates the commonest deviations: undeclared
   encoding, missing tags, made-up namespaces. If the address leads to a web page rather than a
   feed, it says so.
4. **Further pages.** If the feed is split into linked pages, it follows them and rebuilds the
   catalogue (section 5.8).
5. **Preview.** The **Add a feed** window shows cover, title, number of episodes and the range
   covered.
6. **Joining the library.** With **Add to library** the feed joins the sidebar. At that moment the
   program records the unique identifiers of the episodes present, the GUIDs: they become the
   reference for recognising, in later checks, which episodes are new.

To recognise episodes already archived, the program uses the GUID; when the feed does not declare
one, the audio file’s address stands in for it.

The feed it has read stays in memory for five minutes: reopening it within that time does not send
a new request to the server. **Refresh**, in the feed header, bypasses that copy and reads it again
at once.

---

## 5.4 The feed library

Feeds you add stay saved: there is no need to paste addresses again at every launch. The library
shows in two places.

* **In the sidebar**, with cover, title and a status line: **N to download**, **All archived** or
  **Not checked yet**, and the **auto** mark for automatic archiving. Above the list are **Search
  feeds…** and **Sort A to Z** (chapter 3, section 3.3).
* **In the Library view**, as a sortable table with episodes, archived, to download, space used and
  date of the last check (chapter 3, section 3.4).

The count of episodes to download comes from comparing the feed’s episodes with those recorded in
the archive.

### Removing a feed

1. Open the feed.
2. Press **Remove** in the header (the bin icon in narrower windows).
3. Confirm with **Remove feed**.

Removal deletes the feed from the library but **does not touch the audio files already downloaded**
or their records: the episodes stay in the Archive view.

*On privacy.* The library lives only in the local database. The program sends your feeds to no one.

---

## 5.5 Importing feeds from an OPML file

OPML is the format podcast applications use to exchange subscription lists. A library kept in
Pocket Casts, Overcast, AntennaPod or similar can be exported and brought in here.

1. Press **Import from OPML**: you will find it at the bottom of the sidebar, in the Library view,
   in the **Add a feed** window, in **Settings → Archive** and in the command palette.
2. Choose the `.opml` (or `.xml`) file.
3. The program adds the feeds it finds to the library and confirms it (*12 new feeds imported.*).

Straight afterwards a check of every feed starts, fetching real titles, covers and counts in place
of the names written in the OPML file.

Worth knowing:

* importing **does not change feeds already in the library**: if an address is already there, it
  stays as it was (*No new feeds: they were all in the library already.*);
* only HTTP and HTTPS addresses that pass the same safety checks as a typed address are accepted;
* an OPML file can hold at most 2,000 feeds and weigh at most 5 MB.

*If the import fails* (*The OPML file could not be read.*), open the file in a text editor and look
for `<outline type="rss" xmlUrl="...">` lines: some applications use proprietary variants of the
format and leave exactly those out.

---

## 5.6 Exporting the library to OPML

Exporting lets you keep a copy of the list, move it to another installation or follow the same
programmes in a listening app.

1. Open **Settings → Archive**, section **Feed list (OPML)**.
2. Press **Export to OPML** and choose a name and location (`feeds.opml` by default).

Any application that supports the standard can read the file produced.

---

## 5.7 Exporting an M3U playlist

**Export M3U playlist**, in the feed header, creates an `.m3u` playlist with the paths of that
podcast’s archived files, newest to oldest by publication date, and opens the save dialog. The paths
point to each file’s real location, even when different files sit in different folders.

If there is nothing in the archive yet for that podcast, the program says so (*No archived episodes
to put in the playlist.*) instead of creating an empty file.

---

## 5.8 Very large feeds

Long-running podcasts and radio archives easily reach thousands of episodes.

**RFC 5005 paging.** Many platforms put only the recent episodes in the feed and split the rest into
pages linked to each other with a `rel="next"` link. The program follows those links by itself and
rebuilds the catalogue into a single list. Each page goes through the same safety checks as an
address typed by hand, and a broken page does not lose the ones already read. The number of pages
followed stops at twenty: a safety cap against feeds that send each other round in circles, which
on huge catalogues means the oldest part may be left out.

**Analysis takes longer.** Two thousand episodes, or a feed split into many pages, can take fifteen
to thirty seconds. That is normal.

**The list stays light.** Even with thousands of entries, only the rows visible on screen are drawn.

**Space.** Two thousand episodes of fifty-odd megabytes come to around a hundred gigabytes: the
**What will be downloaded** panel and the confirmation window show the estimate before you start.

---

## 5.9 Checking feeds

Checking a feed means reading it from the server again and comparing its episodes with those
already seen. The program does it on four occasions:

* **at launch**, a few seconds after opening;
* **at regular intervals**, according to **Settings → General → Automatic feed checks**: every 6
  hours (default), every 12 or every 24, or **Never (manual only)**. The count starts at program
  launch, or when you change the interval, and the change applies at once;
* **when the connection returns**, after an interruption;
* **on request**, with **Check feeds** (top bar, Library view, command palette or **Ctrl+S**).

Checks carry on even with the window closed to the notification area. The program reads five feeds
at a time and, where the server allows it, asks only whether the feed has changed: an unchanged feed
is not downloaded again.

**How a new episode is recognised.** By its GUID, not by counting: an episode is new only if its
identifier has never been seen before. This works even with “rolling window” podcasts that drop old
episodes as they publish new ones. The first time the program checks a feed with no reference, for
instance one just imported from OPML, it records the episodes present without announcing them as
new.

**What happens next.** The check **downloads nothing**, except for feeds with automatic archiving
(section 5.10). It just updates the counts and reports what is new:

* a check started by hand answers with an in-app notice, for instance *5 new episodes found. 2 being
  archived automatically.* or *14 feeds checked: no new episodes.*, with the number of unreachable
  feeds if any;
* a background check sends a system notification, in the interface language (*5 new episodes found
  in 2 podcasts.*). The notification is clickable: it brings the program to the front and, if the
  news concerns a single podcast, opens that feed directly.

**Addresses that change.** When a feed answers with a permanent move (a 301 or 308 redirect), the
program updates the saved address and carries the history across, so later checks go straight to
the new location.

---

## 5.10 Automatic archiving per feed

This is how you follow a podcast without lifting a finger: with the switch on, new episodes found by
the checks download by themselves.

### Turning it on

* When adding the feed, with the **Automatic archiving** switch in the **Add a feed** preview.
* Later, with the **Automatic archiving** switch in the right-hand panel of the feed view (in the
  action bar, in windows narrower than 1280 pixels).

If the feed already has published episodes that are not archived, the program asks what to do with
them when you switch it on, in the *Turn on automatic archiving?* window:

* **Turn on and download the N missing**: switches automatic archiving on and prepares the download
  of the missing episodes, with the usual confirmation of space and folder;
* **New ones only**: switches automatic archiving on and leaves the back catalogue alone.

Feeds with automatic archiving on carry the **auto** mark in the sidebar and in the Library, and the
**Automatic archiving** badge in the header.

### How it works

Whenever a check (at launch, periodic, when the network returns or with **Check feeds**) finds new
episodes in that feed, it queues them without asking. The same happens when you open or refresh the
feed by hand: new episodes are not “used up” by reading the feed, they are queued.

The system notification and the in-app notice report how many episodes went to automatic archiving.
The downloads follow the usual rules: parallel downloads, bandwidth limit, automatic pause when
offline.

### Turning it off

Just switch it off. Episodes already queued stay queued; from then on, new episodes are only
reported again.

---

## 5.11 Working with many feeds

There is no limit to the number of podcasts in the library, and they all stay available from one
session to the next.

* To find one: **Search feeds…** in the sidebar, or the command palette (**Ctrl+K**), which filters
  feeds by title.
* For the big picture: the **Library** view, sortable by column. Sorting by **To download** puts the
  feeds with the biggest backlog at the top; sorting by **Last checked** brings out the ones that
  have not answered for a while.
* To refresh them all: **Check feeds**.

At launch no feed is open: the program shows the Library and waits.

---

*Chapter 6 explains how the download engine works.*
