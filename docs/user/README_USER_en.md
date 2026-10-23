# Runtime FeedDownloader Pro

**Archive podcasts in bulk, integrity-checked, even on a NAS.** Version 1.6.0.

## What it is

Runtime FeedDownloader Pro is the **Ecosystem Runtime | Digital Core** tool for people who need to
download and keep whole podcast catalogues: archivists, newsrooms, radio stations, methodical
listeners. It is neither a player nor an aggregator: it is an archiver, built for bulk downloading,
network resilience and predictable file organisation on disk.

---

## The database-first philosophy

At the heart of the program is a **SQLite** database that remembers every downloaded episode,
rather than relying only on the files being present on disk:

1. **It remembers every download and where it is.** Each episode knows its own folder: changing
   folder or moving the archive to a NAS loses nothing.
2. **It avoids duplicates.** The same episode is never downloaded twice.
3. **It documents integrity.** For each file it records the SHA-256 fingerprint, size, bitrate and
   sample rate.

## Main features

### A desktop interface

A landscape window with side-by-side panels: the sidebar leads to the **Library**, **Downloads** and
**Archive** views and to the feeds; each panel scrolls on its own. A command palette (**Ctrl+K**),
shortcuts for everything (**Ctrl+1/2/3** for the three views), interface size from 80 to 180% and
**Reduce animations and effects**.

### Download everything, a period or a selection

In every feed’s view the filter strip always has the **Period**, with ready-made ranges and
**From**/**To** dates. The main button says exactly what it will do (“Download the 23 filtered”)
and the confirmation shows estimated space, free space and folder.

### Network resilience

* **Five attempts** per file, with growing waits.
* **Stall detection**: a transfer stuck for sixty seconds is closed and resumed.
* **`.part` files that resume** from where they stopped, checked against changes to the remote file.
* **Automatic pause when offline** and a **queue that survives the program closing**.
* **1 to 10 parallel downloads** and a **shared bandwidth limit**.

### An archive that stays current

**Check feeds** on request (**Ctrl+S**) and automatic checks every 6, 12 or 24 hours, even with the
window closed, with a notification of new episodes. With **Automatic archiving** on for a feed, new
episodes download by themselves.

### Integrity and verification

**Archive verification**, **Quick** (presence and size) or **Full** (fingerprints recomputed), with
progress and the option to stop it. **Find moved files** uses the fingerprint to find files renamed
by hand; **Accept the current files as reference** records the fingerprints of files changed on
purpose.

### File organisation

A naming template with placeholders (`{title}`, `{podcast}`, `{date}`, `{season}`, `{episode}`…),
each file’s real extension, non-destructive ID3 tags, metadata next to the files (a `.json` per
episode, `podcast.json` and the cover per podcast), CSV inventory, OPML and M3U playlists.

### Safety and networks

Anti-SSRF validation on every address, checked again on every connection and redirect. Network
paths (NAS, SMB) are checked with an eight-second limit, without ever freezing the interface.

---

## System requirements

* **Windows**: 10/11, 64-bit
* **Linux**: modern distributions (Ubuntu 22.04+, Debian 11+, Fedora 36+), `.AppImage` or `.deb`
* **macOS**: not supported — no official package; the code also builds on a Mac, but that is up to
  whoever builds it
* An internet connection for reading feeds and downloading

---

## Documentation

* **Quick start**: `QUICKSTART_en.md`
* **Full manual**: `en-GB/FeedDownloader_Pro_Manual_en-GB.pdf`, or the Markdown chapters in the same
  folder
* **Built-in guide**: from the **Guide** button in the program’s top bar

---

## Licence

Runtime FeedDownloader Pro is free software, released under the **MIT licence**: use it, study it,
modify it and redistribute it freely. The program and its documentation were written with heavy use
of large language models — Google Gemini and Anthropic Claude — under the design direction of
Simone Pizzi.

---

*Part of the Runtime Ecosystem | Digital Core — Tools built to last.*
