# Runtime FeedDownloader Pro

Version 1.6.0

## What it is

A tool for archiving podcasts properly: it downloads whole catalogues from RSS feeds and keeps them
in order, with proof of what was stored. It is not a player or an aggregator, it is an archiver. It
knows what you already have, never downloads the same file twice, resumes interrupted transfers and
records a cryptographic fingerprint of every file.

The program is free software, released under the **MIT licence**: use it, study it, modify it and
redistribute it freely.

## How the window is laid out

It is a desktop app, designed for a landscape window: panels sit **side by side** and each one
scrolls on its own.

* **At the top**, the bar with the queue status ("3 downloading", "Queue empty"), **Check feeds**,
  search (Ctrl+K), the guide and the settings.
* **On the left**, navigation: **Library**, **Downloads**, **Archive**, and below them the list of
  feeds with how many episodes are left to download and an "auto" mark on those with automatic
  archiving.
* **In the middle**, the chosen view:
  * **Library** — a table of every feed: episodes, archived, to download, space used, last check.
    Click a row to open the feed. In wide windows, on the right, the queue, the archive and the
    keyboard shortcuts.
  * **Feed** — a header with the feed's commands, an always-visible filter strip (search, status,
    **period**, duration, order) and the episode list; on the right the panel with automatic
    archiving, the download plan with the space estimate and, when you pick an episode, its
    details.
  * **Downloads** — the queue on the left; on the right the downloads interrupted when the app last
    closed, the failed ones with their reason, and this session's completed ones.
  * **Archive** — on the left search, publication period and the list of podcasts with their
    episode count (a click filters); on the right the table of everything downloaded.

Below 1280 pixels of width (or with the interface heavily enlarged) the side panels give way to
tabs and the figures become more compact, but the layout stays landscape.

## Downloading a period

In a feed's view the filter strip always shows the **Period**: pick a ready-made range (last 30 or
90 days, last 12 months, this year, last year) or the **From** and **To** dates. The main button
says exactly what it will do — "Download the 23 filtered" — and the confirmation shows the period,
the estimated space, the free space and the destination folder. The panel on the right updates the
estimate as you change the filters. Filters combine: a period with the "To download" status and a
minimum duration, for instance.

## What it does

### Feeds

* **Permanent library**, with search and alphabetical sorting in the sidebar.
* **Reliable detection.** New episodes are recognised by their GUIDs, not by counting: it works
  even with rolling-window podcasts that drop old episodes.
* **Paged feeds (RFC 5005).** It follows the links to the next pages and rebuilds the catalogue, up
  to twenty pages.
* **Check feeds.** Refreshes the whole library on request (Ctrl+S), with progress and a summary of
  what it found.
* **Automatic checks.** At regular intervals (6, 12 or 24 hours), even with the window closed to
  the notification area. When new episodes come out you get a system notification: clicking it
  opens the feed in question.
* **Automatic archiving per feed.** With the switch on, new episodes found by the checks download
  without asking. When you turn it on the app asks whether to also download the missing ones.

### Downloads

* **In bulk.** The whole feed, a period, a selection: hundreds of episodes with one command, from
  one to ten transfers in parallel.
* **Selection.** One checkbox per episode, Shift+checkbox for a range, Ctrl+A for every visible
  episode.
* **Pause and Resume.** A single download or the whole queue can be suspended without losing
  anything: the partial file stays and resuming starts from where it stopped.
* **Automatic pause without a network.** If the connection drops the queue stops by itself and
  restarts when it comes back, instead of piling up errors.
* **A queue that survives closing.** If the app closes (or crashes) with downloads queued, on
  restart the Downloads view offers to resume them.
* **Retry.** Failed downloads stay listed with their reason; retry them one by one or all together.
* **Five attempts** per file on transient errors, with growing waits.
* **Limits.** Overall maximum bandwidth (shared by every download) and maximum size per file, both
  configurable (0 = no limit).

### Archive and integrity

* **Database-first.** The program remembers what it downloaded and **into which folder**: changing
  the download folder doesn't make the existing archive "missing".
* **Robust transfers.** 30-second connection timeout, 60-second stall watchdog, `.part` files that
  allow resuming.
* **SHA-256 fingerprint** recorded for every file, together with size, bitrate and sample rate —
  computed **after** the tags are written, so it matches the file on disk.
* **Archive verification**, two ways: **Quick** (files present, with their size) and **Full**
  (fingerprints recomputed), with progress and a **Stop the check** button.
* **Find moved files.** Finds hand-renamed files by fingerprint and relinks them to the archive,
  without downloading anything again, across every folder in use.
* **Accept the current files as reference.** For files changed on purpose (re-tagged, say), the
  verification can record their new fingerprint.
* **Database recovery.** If the database gets damaged, on startup the program offers to recover
  feeds, archive and history from the backup it set aside.
* **Non-audio content refused.** If the server sends a web page instead of the file, the download is
  rejected rather than saving rubbish.

### File organisation

* **Real extension.** `.m4a`, `.ogg`, `.opus` and `.flac` keep their extension, even when the
  address doesn't show it (the type declared by the feed is used).
* **ID3 tags** with title, podcast, year and cover. The publisher's tags (chapters, comments) stay;
  the cover is added only when the file has none.
* **Naming template.** Placeholders `{title}`, `{podcast}`, `{date}`, `{year}`, `{month}`, `{day}`,
  `{season}`, `{episode}`.
* **Metadata next to the files.** When on, a `.json` per episode with title, date, notes,
  numbering, addresses and fingerprint; a `podcast.json` and the cover per podcast. The archive
  stays readable even when the feed disappears.
* **OPML and CSV.** Import and export the feed list (importing never changes feeds already there);
  export the full archive inventory, with folder and addresses.
* **Export M3U** per feed, in publication order.
* **Move the archive** to another drive, or use the new folder **for new downloads only** and leave
  the archive where it is.
* **NAS and SMB.** Network paths are checked with an eight-second limit, never freezing the
  interface.

### Accessibility

* Contrast checked against WCAG 2.2 AA on every colour pair, text never below 12 pixels, keyboard
  focus always visible, every command reachable from the keyboard.
* **Interface size** from 80 to 180% (also with Ctrl + and Ctrl −, Ctrl 0 to go back to 100%).
* **Reduce animations** in the settings, on top of the operating system's preference.
* Works with Windows high-contrast mode.

### System

* **Updates with consent.** The program tells you about a new version but downloads nothing on its
  own: first **Download**, then **Restart and install**.
* **No third-party requests at startup.** The interface fonts ship with the app.
* **Address defences.** Every URL goes through anti-SSRF checks: HTTP and HTTPS only, no internal
  or reserved addresses, IP verified on every connection and every redirect.
* **Safe file names.** Forbidden characters removed and paths shortened to stay within Windows
  limits.
* **Minimise to the notification area.** Closing the window keeps the work going in the background.
* **What's new in this version** inside the app, shown by itself on the first start after an
  update.

## Keyboard shortcuts

* **Ctrl K** — search actions, feeds and episodes
* **Ctrl N** — add a feed
* **Ctrl S** — check every feed
* **Ctrl F** — search the open view
* **Ctrl A** — select every visible episode
* **Ctrl 1 · 2 · 3** — Library · Downloads · Archive
* **Ctrl + / Ctrl − / Ctrl 0** — enlarge, shrink, normal size
* **Ctrl ,** — settings

## Languages

Interface, notifications and manuals are available in **Italian** and **English**.

## Getting started

1. **Add a feed.** **Add feed** (Ctrl+N) at the bottom of the sidebar: paste the RSS address, press
   **Analyse**, then **Add to library**. You can also drag an address from the browser onto the
   window, or import an OPML file.
2. **Pick the folder.** **Settings → Downloads → Change folder**: a local or external drive, or a
   network folder.
3. **Choose what to download.** In the feed: everything, a **period**, or a selection with the
   checkboxes. The main button says how many episodes it will take; the confirmation shows the
   space.
4. **Follow the work.** The **Downloads** view (Ctrl+2) shows the queue with percentages, speeds and
   pause controls; the top bar always says how many downloads are running.
5. **Keep the archive current.** Turn on **automatic archiving** for the feeds you want to follow
   and choose how often to check them in **Settings → General**.

## Requirements

* **Windows** 10 or 11, 64-bit, `.exe` installer
* **Modern Linux** (Ubuntu 22.04+, Debian 11+, Fedora 36+), `.AppImage` or `.deb`
* **macOS**: not supported. The source builds on a Mac, but there are no official packages and
  building it is your own responsibility.
* An internet connection

## Where to get it

Packages live on
[GitHub Releases](https://github.com/Pitz72/FeedDownloader/releases) and are
produced by the build pipeline of the project's public repository.

**SmartScreen warning (Windows).** On first run Windows may show "Windows protected your PC",
because the program carries no commercial signature. Continue with **More info** → **Run anyway**.

*Built with Electron and React. MIT licence — © 2026 Simone Pizzi, Runtime Radio.*

*The code and this documentation were written with heavy use of large language models — Google
Gemini and Anthropic Claude — under the design direction of Simone Pizzi, who made and checked
every decision.*
