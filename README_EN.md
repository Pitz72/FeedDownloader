# Runtime FeedDownloader Pro

Version 1.5.0

## What it is

A tool for archiving podcasts properly: it downloads whole catalogues from RSS feeds and keeps them
in order, with proof of what was stored. It is not a player, it is an archiver. It knows what you
already have, never downloads the same file twice, resumes interrupted transfers and records a
cryptographic fingerprint of every file.

The program is free and may be redistributed freely.

## What it does

### Feeds

* **Permanent library.** Feeds stay saved between sessions, with search, sorting and a resizable
  sidebar.
* **NOT DOWNLOADED badge.** For each feed, how many episodes are still missing from your archive.
* **Reliable detection.** New episodes are recognised by their GUIDs rather than by counting, so it
  works with rolling-window podcasts that drop older instalments.
* **Paginated feeds (RFC 5005).** The program follows the links to further pages and rebuilds the
  catalogue, up to twenty pages.
* **Sync All.** Refreshes the whole library in parallel, showing the state on each cover.
* **Automatic checks.** At startup, on a regular interval (6, 12 or 24 hours) and whenever the
  connection comes back. When new episodes appear you get a system notification: clicking it opens
  the feed in question.

### Downloads

* **Batches.** Hundreds of episodes in one command, a managed queue, one to five transfers at once.
* **Pause and Resume.** A single download or the whole queue can be suspended without losing
  anything: the partial file stays and the transfer picks up where it stopped.
* **Retry failed.** At the end of a batch, one command re-queues every episode that went wrong.
* **Cancel one.** Drop a single download from the queue without disturbing the others.
* **Multiple selection.** Ctrl+click and Shift+click to pick ranges.
* **Caps.** Maximum overall speed and maximum size per file, both configurable (0 = no limit).

### Interface

* **Command palette (Ctrl+K).** Actions, feeds and episodes of the open feed, without the mouse.
* **Detail panel.** One click on an episode opens metadata, archive data and show notes.
* **Archive view.** Every downloaded episode in a single table, searchable and sortable.
* **Export M3U.** Local playlists for any audio player.
* **Minimise to the notification area.** Close the window and the work carries on in the background.
* **Release notes in the app.** They are readable from the settings, and appear by themselves on the
  first run after an update.

### Integrity

* **Database-first.** The program remembers what it downloaded even when files move (SQLite).
* **Robust transfers.** A 30-second connection timeout, a 60-second stall watchdog, three attempts
  with growing back-off, and `.part` files that make resuming possible.
* **SHA-256 fingerprint** computed for every file and recorded, along with bitrate and sample rate.
* **Archive health check.** Finds the files that went missing and re-hashes those still present,
  flagging anything that no longer matches.
* **Repair archive.** Finds manually renamed files by checksum and re-links them to the archive,
  without downloading anything again.
* **Database restore.** If the database gets damaged, on the next run the program offers to recover
  feeds, archive and history from the backup it set aside.
* **Non-audio responses refused.** When a server answers with a web page instead of the file, the
  download is rejected rather than saved as rubbish.

### Organisation

* **Real extensions.** `.m4a`, `.ogg`, `.opus` and `.flac` keep their own extension instead of being
  forced into `.mp3`.
* **ID3 tags with cover art**, preferring the episode image when the feed provides one.
* **Naming template.** Tokens `{title}`, `{podcast}`, `{date}`, `{year}`, `{month}`, `{day}`.
* **Sidecar `.json` files** beside each audio file, when you need the metadata outside the database.
* **OPML and CSV.** Import and export the feed list, export the full archive inventory.
* **Migration.** Move the whole library to another disk while keeping the archive in step.
* **NAS and SMB.** Network paths are checked with an eight-second limit, and the interface never
  freezes.

### System

* **Updates with consent.** The program reports a new version but downloads nothing on its own:
  first **Download**, then **Restart & Install**. Nothing is installed on exit.
* **Address defences.** Every URL goes through anti-SSRF checks: HTTP and HTTPS only, no internal or
  reserved addresses, and the resolved IP is verified again on every connection and redirect.
* **Safe filenames.** Forbidden characters are removed and paths shortened so Windows limits are
  never hit.
* **Virtualised lists.** Even with thousands of episodes the window stays smooth.
* **Full PDF manual**, reachable from the in-app guide.

## Languages

Interface, notifications and manuals are available in **Italian** and **English**.

## Getting started

1. **Analyze.** Paste the RSS address into the top bar and press **Analyze**. The feed joins the
   library.
2. **Pick a folder.** Use the folder icon in the command bar, or **Settings → Download**. The path
   stays visible at the bottom of the sidebar.
3. **Download.** **Download All** for the whole catalogue (it acts on the episodes currently
   visible, so filters matter), or select with Ctrl+click and use **Download Selected**.
4. **Watch.** The download panel opens by itself: queue, percentages, speeds and the pause controls.
5. **Tune.** Ctrl+K for the palette, the gear icon for parallel downloads, caps, template, OPML and
   archive statistics.

## Requirements

* **Windows** 10 or 11, 64-bit, `.exe` installer
* **Modern Linux** (Ubuntu 22.04+, Debian 11+, Fedora 36+), `.AppImage` or `.deb`
* **macOS**: not supported. The source builds on a Mac, but there are no official packages and
  building it is your own responsibility.
* An internet connection

## Where to get it

Packages live on
[GitHub Releases](https://github.com/Ecosystem-Runtime/FeedDownloader-Releases/releases) and are
produced automatically by the build pipeline.

**SmartScreen warning (Windows).** On first run Windows may show "Windows protected your PC",
because the program carries no commercial signature. Continue with **More info** → **Run anyway**.

*Built with Electron and React.*
