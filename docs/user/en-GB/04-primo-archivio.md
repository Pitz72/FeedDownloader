# Chapter 4: The First Archive — Step-by-Step Guide

## 4.1 Introduction to the Workflow

This chapter describes a complete workflow, from a podcast URL to an organised archive on disk. The reference scenario is the most common one: downloading the entire catalogue of a podcast for the first time.

It is recommended to read the chapter from beginning to end at least once. Once familiar with the steps, starting a new archive takes less than a minute.

---

## 4.2 Phase 1: Finding the RSS URL

The starting point is the RSS feed URL of the podcast to archive. An RSS feed is a text file in XML format that podcast services publish to distribute the list of available episodes. Every podcast has an RSS feed.

**How to find the RSS URL:**

*   **On the podcast's website:** Look for an orange icon with radio waves, or the text "RSS", "Feed", "Subscribe", or "Podcast Feed". Clicking on the element generally opens the XML file in the browser: the URL displayed in the address bar is the one to use.
*   **From a podcast app:** Applications such as Pocket Casts, Apple Podcasts, and similar often show the RSS link in the podcast information. On some apps the link is accessible via the "Share" function.
*   **From hosting services:** If the podcast is hosted on Spreaker, Podbean, Buzzsprout, or equivalent platforms, the feed URL is usually available in the publisher panel or in the podcast's public information.
*   **From a search engine:** Search for `[Podcast Name] RSS feed`. The first result often leads directly to the correct URL.

*How to recognise a valid RSS URL:* It generally ends with `.xml` or `.rss`, or contains words such as `feed`, `rss`, or `podcast` in the path. Examples: `https://www.example.com/feed.xml`, `https://feeds.spreaker.com/podcast/12345`, `https://anchor.fm/s/abc123/podcast/rss`.

---

## 4.3 Phase 2: Preparing the Destination Folder

Before analysing the feed, it is advisable to define the destination folder. It is recommended to create an organised structure from the outset.

**Recommended structure:**
```
D:\Podcast Archive\
    ├── My Podcast\
    ├── Technology Podcast\
    └── Radio Talk Show\
```

Create the specific folder for the podcast to be archived (e.g. `D:\Podcast Archive\My Podcast\`). FeedDownloader Pro will save all files from that podcast into that folder, with names defined by the rename template (see Chapter 8).

**To set the destination folder in FeedDownloader Pro:**

1.  Open **Settings → Archive** and click the **folder** icon next to the destination path field.
2.  Navigate to the created folder and select it.
3.  The configured path is always visible in the footer of the left-hand sidebar; clicking it opens the folder directly in the file manager.

*Note:* For paths on NAS or network drives, consult Chapter 7 before proceeding. The configuration for network paths has some specificities described in that chapter.

---

## 4.4 Phase 3: Analysing the Feed

With the URL ready and the destination folder set:

1.  Paste the RSS URL into the **URL field** at the top of the interface.
2.  Click **"Analyse"** (or press `Enter`).
3.  The list in the centre is populated with the episodes. For a podcast with 200–300 episodes, the operation typically takes 2–5 seconds. For very large archives (1,000+ episodes), up to 15–20 seconds may be required, as the feed's XML file can reach considerable sizes.

**In the event of an analysis error:**
*   Check that the URL is correct (no leading or trailing spaces, no missing characters).
*   Open the URL in the browser: if the browser returns an error or a blank page, the feed may be temporarily unavailable or the URL may have changed.
*   Some feeds require specific HTTP headers. In this case the software displays an error message with the HTTP code received (for example `403 Forbidden`).

---

## 4.5 Phase 4: Reading the Analysis Results

After the analysis, the list shows all episodes of the podcast.

**Items to verify:**
*   **Total number of episodes:** Visible in the list header or in the counter at the bottom. A podcast active for several years may have 300–500 episodes or more.
*   **Episodes in **"Downloaded"** status:** If the podcast has been analysed previously, most episodes will appear in this status. The database already records these files as present in the archive.
*   **Episodes with missing data:** It is possible that some episodes do not show duration or size. This indicates that the podcast producer did not include this information in the RSS file. The download proceeds correctly in any case.

---

## 4.6 Phase 5: Starting the Download

Two download modes are available.

**Mode A — Full download:**
Click **"Download All"**. The software adds all episodes in **"To Download"** status to the queue and starts the downloads in parallel. The number of simultaneous downloads depends on the thread setting (see Chapter 10; the default value is 3).

**Mode B — Selective download:**
To download only certain episodes:
1.  Select the episodes by holding `Ctrl` and clicking on each one.
2.  To select a range, click on the first episode, hold `Shift`, and click on the last.
3.  Click the **"Download Selected (N)"** button that appears in the feed header when at least one episode is selected.

---

## 4.7 Phase 6: Monitoring Progress

During the download:

*   **Download Panel:** Opens automatically on the right side of the window when the batch starts. It shows each queued episode with percentage, current speed, and estimated time to completion. For an archive of 200 episodes at an average of 64 kbps, the total data volume is approximately 2–3 GB.
*   **Status in the list:** Each row updates in real time. Episodes in progress show an individual progress bar with the completed percentage.
*   **Background execution:** It is not necessary to keep the window open. It can be closed (the programme continues to operate in the system tray) and reopened when the process has completed.

The software automatically handles retries in the event of a network error, stall detection in the case of slow servers, and integrity verification upon completion of each file. If the computer enters sleep mode, downloads are interrupted and automatically resumed when the session is restored.

---

## 4.8 Phase 7: Verifying the Completed Archive

When the Download Panel shows the batch as completed and all episodes appear in green status, the archive is ready.

**Recommended operations upon completion:**

1.  **Check for errors:** If some episodes show **"Error"** status (red), click them to open the Episode Detail Panel and read the error code. Alternatively, consult the error summary section at the bottom of the Download Panel. The most common cause is `404 Not Found`, which indicates the file was removed from the podcast server before the download.

2.  **Export a CSV summary:** Go to **Settings → Archive → Export CSV**. The generated file lists all downloaded episodes with SHA-256 hashes, sizes, and metadata (see Chapter 9).

3.  **Verify files on disk:** Open the destination folder in the file manager. Audio files are organised according to the configured rename template (see Chapter 8). The presence of `.part` files indicates interrupted downloads, which will be completed the next time the batch is started.

---

## 4.9 Updating the Archive in Future

The Database-First system simplifies archive updates. The procedure depends on whether the feed is already in the library or not.

**Feed already in the sidebar:**

1.  Click the feed in the sidebar to select it.
2.  Hover over the entry and click the sync icon, or use the **"Sync All"** button to refresh the whole library in parallel.
3.  New episodes appear as **"To Download"**; those already present remain as **"Downloaded"**.
4.  Click **"Download All"** to download only the new episodes.

**Feed not yet in the library:**

Paste the RSS URL into the URL field at the top of the interface and click **"Analyse"**: the feed is added to the library and the list is populated with the current status.

The system never downloads the same episode twice. Periodic automatic refresh can also be configured (see Chapter 10 and section 5.9).

---

*Go to Chapter 5 to learn more about feed management and OPML features.*
