# ⚡ Runtime FeedDownloader Pro: Quick Start Guide

Welcome to **Runtime FeedDownloader Pro**. This guide will take you from first launch to your first complete podcast archive in under 3 minutes.

---

## 1. Feed Analysis

First, tell the software which podcast you want to archive:

1. Copy the **RSS URL** of the podcast you want to download (usually found on the podcast's website with labels like "RSS", "Feed" or "Subscribe").
2. Paste it into the **main search bar** at the top of the interface.
3. Click the **"Analyze"** button (or press `Enter`).
4. The software will query the feed and display the full list of available episodes, with title, duration and publication date.

> **Tip:** You can drag and drop the URL directly onto the application window (Drag & Drop) without using the search bar.

---

## 2. Choosing the Destination

Before starting the download, choose where to save your files:

1. Click the **folder** icon next to the destination path field.
2. Select (or create) the folder where you want the archive to be organized.
3. If you are using a **NAS or network drive (SMB)**, enter the network path (e.g. `\\NAS\Podcasts\`). The software will automatically verify write access within 8 seconds, without freezing the interface.

> **Tip:** Create a dedicated folder for each podcast (e.g. `D:\Archive\PodcastName\`). FeedDownloader Pro will save files in an organized way and remember the location in its database.

---

## 3. Starting the Download

You have the feed analyzed and the folder ready. Now you can download:

**Option A — Download the entire catalog:**
1. Click the main **"Download All"** button.
2. The entire episode list will be added to the download queue.
3. The software will start downloading files in parallel (the number of threads is configurable in Settings).

**Option B — Selective download:**
1. In the episode list, find the one you are interested in.
2. Click the **download** icon (downward arrow) next to the episode.
3. You can select multiple episodes by holding `Ctrl` and then start them together.

> **Tip:** The **Stall Detection** system monitors every download: if a server stops responding for 60 seconds, the download is automatically restarted. You won't need to manually check the queue.

---

## 4. Queue Management

While FeedDownloader Pro works, you have full control:

- **Global Progress Bar:** Visible at the bottom of the interface, shows the progress of the entire batch (completed / total files, average speed).
- **Pause / Resume:** Click the **Pause** button to suspend all downloads. When ready, click **Resume**.
- **Stop:** Stops the batch. Already completed files are kept in the database. On the next launch, FeedDownloader Pro will recognize already downloaded files and avoid duplicates.
- **Tray Icon (Notification Area):** You can close the main window: the software will continue working in the background. The icon in the notification area (system tray) allows you to reopen the app or stop downloads at any time.

---

## 5. Export and Statistics

Once the download is complete, access **Settings** (gear icon ⚙️) for advanced features:

- **Export CSV:** Generates a spreadsheet file with the complete list of downloaded episodes (title, URL, file path, SHA-256 hash, size, bitrate).
- **Import/Export OPML:** Share your feed list with other apps or other software users.
- **Archive Statistics:** View disk space used, total number of episodes and the integrity summary (files verified via SHA-256).
- **Rename Template:** Customize the file name format using tokens like `{{title}}`, `{{date}}`, `{{podcast}}` for a perfectly organized archive.

---

## Useful Tips & Troubleshooting

**The feed is not recognized:**
Make sure the URL is directly the address of the RSS file (usually ends in `.xml` or `.rss`). Some sites show an HTML page with a link to the actual feed: use that link.

**Some episodes won't download (404 error):**
The episode has been removed from the podcast server. FeedDownloader Pro will log the error in the database without blocking other downloads. This is one of the reasons why timely archiving is essential.

**NAS path unreachable:**
Make sure the NAS is powered on and reachable on the local network before starting the download. If you use SMB credentials, make sure the share is mounted (or credentials are configured in Windows).

**The software stopped the download due to "insufficient disk space":**
Free up space in the destination and restart the batch. Already downloaded files will not be re-downloaded thanks to the database.

---

*Security Guaranteed: Every URL is filtered by the 5-level anti-SSRF system before being processed.*

*Part of the Ecosystem Runtime | Digital Core — Tools built to last.*
