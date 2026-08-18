# Chapter 5: Managing feeds

## 5.1 What an RSS feed is

An RSS feed is an XML document a podcast publishes so that programs can read its list of episodes.
When a new instalment comes out, the publisher adds an entry to that document; readers re-read it
now and then and notice the addition.

For FeedDownloader Pro the feed is the source of everything: it carries the episode list, the
addresses of the audio files, the metadata (title, date, duration, description, cover art) and the
general information about the programme.

You do not need to know its internal structure to use the software. It does help, though, in
understanding why data is sometimes missing from the list: nearly always it is the feed that fails
to declare it.

---

## 5.2 Well-made feeds and awkward ones

Standards compliance, in the podcast world, is an aspiration rather than a rule.

**A well-formed feed.** It respects RSS 2.0 or Atom, declares title, link, date and audio address
with its MIME type, and may add iTunes or Podcast Index tags for duration, cover art and seasons.
The program reads it without fuss.

**An incomplete feed.** Optional fields such as duration, size or episode artwork are missing. The
files download the same, but some information stays blank in the list.

**A feed with unreachable audio.** The document reads fine, but the file addresses point at
resources that are gone. This happens often with abandoned programmes or ones that moved elsewhere.
The episodes end in error after the download attempt.

**Password-protected feeds.** Some private podcasts ask for HTTP Basic credentials. You can put
them straight into the address: `https://user:password@www.example.com/feed.xml`.

---

## 5.3 What happens when you press Analyze

In sequence:

1.  **Address check.** Correct syntax, and clearance from the checks against SSRF attacks
    (chapter 10).
2.  **Request to the server.** The program identifies itself with an ordinary user agent and gives
    up after fifteen seconds of silence.
3.  **Reading the document.** It reads RSS or Atom and tolerates the common deviations: undeclared
    encoding, missing tags, invented namespaces.
4.  **Comparison with the archive.** Each episode is looked up in the database through its unique
    identifier, the GUID; when the feed does not declare one, the audio file address stands in for
    it.
5.  **Filling the list.** Every episode appears with its own state.
6.  **Entry into the library.** The feed joins the sidebar if it was not there already; if it was,
    the episode count is updated.

---

## 5.4 The feed library

Analysed feeds stay saved in the sidebar: there is no need to paste the addresses again at every
launch.

### What each row shows

Cover art, title, date of the last sync and, when there are episodes never downloaded, the
**TO DOWNLOAD** badge with a count. The count comes from comparing the feed’s GUIDs with the ones
already on record. A click loads the episodes into the main area.

### Removing a feed

Hover over the row and a bin icon appears, which asks for confirmation. Removal deletes the feed
from the library but **does not touch the audio files already downloaded**, nor their records: the
episodes remain visible in the Archive view.

### Search and sorting

The field at the top filters by name as you type. The sort button puts the feeds in alphabetical
order and, pressed again, restores the original order.

*On privacy.* The library lives only in the local database. The program does not send your feeds to
anyone.

---

## 5.5 Importing feeds from an OPML file

OPML is the format podcast applications use to exchange subscription lists. If you have a library
in Pocket Casts, Overcast, AntennaPod or similar, you can export it and bring it in here.

1.  Open **Settings → Archive**, section **Data & Portability**.
2.  Press **Import Feeds (OPML)** and choose the `.opml` file.
3.  The program reads it and adds the feeds it finds to the library.

*If the import fails*, it is worth opening the file in a text editor and looking for lines like
`<outline type="rss" xmlUrl="...">`: some applications use proprietary variants of the format and
leave exactly those out.

---

## 5.6 Exporting the library to OPML

Exporting is for keeping a copy of the list, moving it to another installation, or following the
same programmes in a listening app.

1.  Open **Settings → Archive**, section **Data & Portability**.
2.  Press **Export Feeds (OPML)** and choose a name and location.

The resulting file can be read by any application that supports the standard.

---

## 5.7 Very large feeds

Long-running podcasts and radio archives easily reach thousands of episodes.

**RFC 5005 pagination.** Many platforms publish only recent instalments in the feed and break the
rest into pages linked to each other with `rel="next"`. The program follows those links by itself
and reassembles the catalogue into a single list. Each page goes through the same security checks
as an address typed by hand. The number of pages followed stops at twenty: a safety ceiling against
feeds that refer to one another endlessly, which on enormous catalogues means the oldest part may
be left out.

**Analysis takes longer.** Two thousand episodes, or a feed split across many pages, can need
fifteen to thirty seconds. That is normal.

**The list stays light.** Even with thousands of entries, only the rows visible on screen are
drawn.

**Space.** Two thousand episodes at fifty megabytes apiece make a hundred gigabytes: worth counting
before you start.

---

## 5.8 Working with many feeds

There is no limit to the number of podcasts in the library, and they all stay available from one
session to the next.

A click on a feed in the sidebar loads its episodes immediately. At startup no feed is selected:
the program does not remember the last one open, it shows the library and waits.

To refresh them: the sync icon on an individual row re-reads that feed; **Sync All** re-reads them
all in parallel, showing the state on each cover and flagging the news at the end with the
**TO DOWNLOAD** badge.

For scheduled refreshing, with nothing for you to do, see the next section.

---

## 5.9 Automatic refresh

The program checks the feeds by itself: at startup, then at regular intervals, and every time the
connection returns after an outage.

You choose the interval in **Settings → General → Automatic Feed Refresh**.

| Option | Behaviour |
|--------|-----------|
| Disabled | No cyclical checks; the one at startup remains. |
| 6 hours (default) | Every feed re-read every six hours. |
| 12 hours | Re-read every twelve hours. |
| 24 hours | Re-read once a day. |

The change takes effect at once, with no restart. The count starts again from the program launch.

Automatic refresh **downloads nothing**: it only looks for new episodes. When it finds some, it
sends a system notification with the summary, in the interface language. The notification is
clickable: it brings the program to the front and, if the news concerns a single podcast, opens
that feed directly. To download them you then use the normal commands.

---

*Chapter 6 explains how the download engine works.*
