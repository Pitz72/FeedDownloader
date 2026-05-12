# ⚡ Runtime FeedDownloader Pro: Quick Start Guide

Welcome to **Runtime FeedDownloader Pro**. This guide will take you from first launch to your first complete podcast archive in under 3 minutes.

---

## 1. Feed Analysis

First, tell the software which podcast you want to archive:

1. Copy the **RSS URL** of the podcast you want to download (usually found on the podcast's website with labels like "RSS", "Feed" or "Subscribe").
2. Paste it into the **main search bar** at the top of the interface.
3. Click the **"Analyse"** button (or press `Enter`).
4. The software will query the feed and display the full list of available episodes, with title, duration and publication date. The feed is automatically added to the left sidebar for future access.

> **Tip:** You can drag and drop the URL directly onto the application window (Drag & Drop) without using the search bar.

---

## 2. Choosing the Destination

Before starting the download, choose where to save your files:

1. Go to **Settings → Archive** and click the **folder** icon next to the destination path field.
2. Select (or create) the folder where you want the archive to be organised.
3. The configured path is always visible in the footer of the left sidebar: clicking it opens the folder directly in the file manager.
4. If you are using a **NAS or network drive (SMB)**, enter the network path (e.g. `\\NAS\Podcasts\`). The software will automatically verify write access within 8 seconds, without freezing the interface.

> **Tip:** Create a dedicated folder for each podcast (e.g. `D:\Archive\PodcastName\`). FeedDownloader Pro will save files in an organised way and remember the location in its database.

---

## 3. Starting the Download

You have the feed analysed and the folder ready. Now you can download:

**Option A — Download the entire catalogue:**

1. Click the main **"Download All"** button in the episode list header.
2. The entire episode list will be added to the download queue.
3. The software will start downloading files in parallel (the number of threads is configurable in Settings).

**Option B — Selective download:**

1. In the episode list, find the episodes you are interested in.
2. Click the **download** icon (downward arrow) that appears next to the episode on hover.
3. To select multiple episodes, hold `Ctrl` and click each one (or use `Shift`+click to select a range), then click **"Download Selected (N)"**.

> **Tip:** The **Stall Detection** system monitors every download: if a server stops responding for 60 seconds, the download is automatically restarted.

---

## 4. Download Monitoring

When you start a batch, the **Download Panel** opens automatically on the right side of the window.

* **What it shows:** each episode in the queue with progress percentage, current speed (KB/s or MB/s) and estimated time to completion.
* **Cancel a single download:** hover over the episode in the panel and click the **×** button that appears.
* **Stop everything:** click the **Stop** button in the panel header.
* **Close the panel without stopping downloads:** click the **×** in the top right of the panel. A **floating button** remains visible at the bottom right: clicking it reopens the panel at any time.
* **Error log:** at the end of the batch, if some episodes failed, the panel shows an expandable summary with titles and error codes.
* **Background operation:** you can close the main window by clicking the X: the software continues working in the notification area (system tray) and downloads continue uninterrupted.

> **Tip:** Press **Ctrl+K** at any time to open the Command Palette: from there you can start "Sync all feeds", open Settings or switch to another podcast without using the mouse.

---

## 5. Export and Statistics

Once the download is complete, access **Settings** (gear icon ⚙️) for advanced features:

* **Export CSV:** Generates a spreadsheet file with the complete list of downloaded episodes (title, URL, file path, SHA-256 hash, size, bitrate).
* **Import/Export OPML:** Share your feed list with other apps or another installation of the software.
* **Archive Statistics:** View disk space used, total number of episodes and distinct podcasts in the archive.
* **Rename Template:** Customise the file name format using tokens like `{{title}}`, `{{date}}`, `{{podcast}}` for a perfectly organised archive.
* **Export M3U:** From the "Export M3U" button in the episode list header, generate a playlist with the local paths of all downloaded episodes for a podcast.

---

## Useful Tips & Troubleshooting

**The feed is not recognised:**
Make sure the URL is directly the address of the RSS file (usually ends in `.xml` or `.rss`). Some sites show an HTML page with a link to the actual feed: use that link.

**Some episodes won't download (404 error):**
The episode has been removed from the podcast server. FeedDownloader Pro will log the error in the Download Panel without blocking other downloads. This is one of the reasons why timely archiving is essential.

**NAS path unreachable:**
Make sure the NAS is powered on and reachable on the local network before starting the download. If you use SMB credentials, make sure the share is mounted (or credentials are configured in Windows).

**The software stopped the download due to "insufficient disk space":**
Free up space in the destination and restart the batch. Already downloaded files will not be re-downloaded thanks to the database.

---

*Security Guaranteed: Every URL is filtered by the 5-level anti-SSRF system before being processed.*

*Part of the Ecosystem Runtime | Digital Core — Tools built to last.*
