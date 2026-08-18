# Runtime FeedDownloader Pro

Version 1.4.1

The most powerful way to archive your podcasts.

## What is it

Runtime FeedDownloader Pro is a professional tool designed for archivists, publishers, and enthusiasts who need to download entire podcast catalogs for offline preservation.
Unlike standard players, this software is optimized for mass downloading (Batch), network resilience, and structured file system organization.

## Key Features

### Feed management

* **Permanent Feed Library:** Manage multiple podcasts at once with a resizable sidebar, search and A–Z sorting; feeds are saved across sessions.
* **"To Download" Badge:** Numeric indicator on each feed showing how many episodes are not yet in your archive.
* **New Episode Detection:** Based on episode GUIDs, not simple episode counts — notifications stay reliable even with "rolling window" podcasts that remove old episodes.
* **Paginated Feeds (RFC 5005):** Automatically follows links to subsequent feed pages, rebuilding the full catalog even when the provider (Apple Podcasts, Libsyn, Blubrry…) only publishes recent episodes on the first page.
* **Sync All with per-feed progress:** Refreshes all feeds in parallel; each thumbnail shows its own status in real time.
* **Automatic Feed Refresh:** Background timer (6/12/24h) with OS notifications for new episodes.

### Downloads and queue

* **Batch Download:** Download hundreds of episodes with one click, with intelligent queue management and configurable concurrency (1, 3, or 5 parallel downloads).
* **Speed Limit:** Configurable maximum download bandwidth in Settings (0 = unlimited).
* **Download Panel:** Side drawer with queue, speed (KB/s), estimated time, and error log for each batch. Floating button to reopen it without losing your downloads.
* **Speed and Estimated Time:** Shown inline for each active download in the episode row.
* **Single Cancellation:** Cancel one download from the queue without stopping the others.
* **Re-download Episode:** Re-download an episode already present in the archive.
* **Multiple Selection:** Ctrl+click / Shift+click to select ranges of episodes and download them together.

### Interface and navigation

* **Modern "Electric Azure on Deep Dark" Design:** Fully redesigned dark interface, fast and readable.
* **Command Palette (Ctrl+K):** Quick access to all main actions and saved feeds without using the mouse.
* **Episode Detail Panel:** Clicking an episode opens a panel with full metadata, archive data, and show notes.
* **Episode Sorting:** Sort the list by date, title, or duration, in addition to the original feed order.
* **Archive View:** Dedicated tab to browse, search, and sort your entire archive of downloaded episodes.
* **M3U Playlist Export:** Generates local playlists compatible with any audio player.
* **Guided Onboarding:** First-launch hints to get you started right away.

### Resilience and integrity

* **"Database-First" Engine:** The system remembers what you've downloaded regardless of files on disk (SQLite).
* **Resilient Downloads:** Connection timeout (30s) and stall detection (60s), automatic retries with exponential backoff, anti-corruption `.part` files.
* **Data Integrity:** Automatic SHA-256 calculation and audio metadata extraction (bitrate, sample rate) post-download.
* **Health Check:** Automatic restoration of episodes missing on disk with database resynchronization.

### Organization and portability

* **Real Extension:** Detects and saves the file's actual format (`.m4a`, `.ogg`, `.opus`, `.flac`…) instead of always forcing `.mp3`.
* **ID3 Tags with Cover Art:** Automatically writes ID3 tags into `.mp3` files, prioritizing the episode-specific cover art when available.
* **Rename Templates:** Customizable tokens (`{{title}}`, `{{date}}`, `{{podcast}}`) for organized file names.
* **Data Portability:** Import and export your feeds via the OPML standard. Generate detailed CSV reports of your archive.
* **Archive Migration:** Move the entire library to a new path/disk with automatic DB update.
* **NAS/SMB Support:** Native validation and timeout (8s) for network paths, with no UI freezes.

### System and security

* **Auto-Update with Notification:** Automatic updates via GitHub Releases, with a system notification when an update is available and when it is ready to install.
* **URL Security:** Anti-SSRF validation at the connection level — blocks dangerous protocols, private IPs, reserved addresses, and hostile redirects, for every feed page.
* **Smart Truncate:** Automatically renames files to avoid path length errors on Windows.
* **Performance:** Virtualized list — handles feeds with thousands of episodes without slowdowns.
* **Integrated Help:** User guide available directly within the application.

## Multilingual Certification

The software fully supports **8 languages**: Italiano (IT), English (EN), Français (FR), Deutsch (DE), Español (ES), Português (PT), Русский (RU), 中文 (ZH). The interface, system notifications, and documentation are available in all languages.

## Quick Instructions

1. **Analyze:** Paste the RSS feed URL into the main bar and press "Analyze". The feed is added to the sidebar for future access.
2. **Choose Folder:** In Settings → Archive, set the folder where files will be saved. The path is always visible in the sidebar footer.
3. **Download:** Use the "Download All" button for the entire catalog, or select episodes with Ctrl+click and use "Download Selected".
4. **Monitor:** The Download Panel opens automatically with the queue, speed, and estimated time for each file.
5. **Manage:** Use Ctrl+K for the Command Palette, or Settings (⚙) for concurrency, speed limit, templates, OPML, and archive statistics.

## System Requirements

The software is Cross-Platform and runs natively on:

* **Windows**: 10/11 (64-bit) — NSIS installer (`.exe`)
* **Linux**: Modern distributions (Ubuntu 20.04+, Debian 11+, Fedora 34+) — `.AppImage` or `.deb`
* **macOS**: 11.0 (Big Sur) or higher — supported by the code, but macOS packages are not currently distributed
* Active Internet connection

## Download

Official packages are available on [GitHub Releases](https://github.com/Ecosystem-Runtime/FeedDownloader-Releases/releases), built via GitHub Actions.

| Platform | Format | Notes |
|---|---|---|
| Windows 10/11 | `.exe` (NSIS installer) | Unsigned software — see SmartScreen note |
| Linux | `.AppImage` / `.deb` | No signing required |

**Windows — SmartScreen warning:** On first launch, Windows Defender may show a "Windows protected your PC — Unknown Publisher" screen. The software is safe. Click **More info** → **Run anyway**.

**macOS:** `.dmg` packages are not currently published; you can build the app from source.

*Developed with Electron & React technology to ensure performance and stability.*
