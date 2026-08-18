# Chapter 3: Interface Tour

## 3.1 Anatomy of the Main Window

When FeedDownloader Pro opens, the window is organised into four functional zones:

*   **Command bar (top):** The fixed bar containing the URL field, the Analyse button, the Command Palette button and the Settings icon. When a software update is available, the persistent update indicator also appears in this bar (see Chapter 2, section 2.5). All operations for adding new feeds are initiated from here.
*   **Feed sidebar (left):** The column containing the permanent library of saved feeds, the Archive tab, synchronisation controls, and the footer showing the destination path. Its width can be adjusted by dragging the right edge.
*   **Main area (centre):** The area where the episodes of the selected feed are displayed, with the filter bar, batch controls, and the episode list.
*   **Download Panel (right, overlaid):** The panel that opens automatically when a download batch is in progress. When closed, a floating button remains visible at the bottom right to reopen it.

On first launch, with an empty library, the main area shows a guide message explaining how to add the first feed and where to configure the destination path. The message disappears automatically when the first feed is added, or manually via the × button.

---

## 3.2 The Command Bar (Top)

**URL Field:** The text bar where you enter the RSS address of the podcast to analyse. Accepts direct URLs to XML/RSS files. Supports **drag and drop**: you can drag a link directly from a browser onto this area.

**"Analyse" Button:** Starts the feed analysis. The software contacts the URL, reads the RSS file, and populates the episode list. On completion of the analysis, the feed is permanently added to the sidebar. The operation generally takes between 1 and 5 seconds, depending on the feed size and connection speed.

**Settings Icon (⚙):** Opens the settings panel. It is accessible at any time, even during an active download. For details, see Chapter 10.

---

## 3.3 The Feed Sidebar

The sidebar is the control centre of the podcast library. It contains all added feeds permanently: feeds are not lost when the software is closed.

### The Feed and Archive Tabs

At the top of the sidebar there are two tabs:

*   **Feed Tab:** Shows the library of saved feeds. This is the default view.
*   **Archive Tab:** Shows the Archive View — a table of all episodes downloaded across the entire library. See section 3.10.

### Feed library items

Each feed in the list is represented by a row showing:

*   **Thumbnail:** The podcast cover image.
*   **Title:** The name of the podcast as declared in the RSS feed.
*   **Date:** The date of the last synchronisation with the server.
*   **"TO DOWNLOAD" badge:** An indicator (e.g. `3 TO DOWNLOAD`) showing how many new episodes have been detected since the last synchronisation. New episodes are recognised via each episode's unique identifier (GUID), recorded in the database: an episode counts as new only if its GUID has never been seen before. The badge disappears after all new episodes have been downloaded.

Clicking on a list item loads that feed's episode list in the main area.

### Adding a feed

Paste the RSS URL into the URL field at the top of the interface and click "Analyse". Once the analysis is complete, the feed is automatically added to the sidebar and remains available for subsequent sessions.

### Search and sorting

*   **Feed search:** The search field in the sidebar filters feeds by name in real time. Useful with large libraries.
*   **A–Z sorting:** The sort button orders feeds alphabetically by title. Clicking it again restores the original order.

### Synchronisation

*   **Individual synchronisation:** Hovering over a feed item reveals the synchronisation icon. Clicking it causes the software to re-read the feed from the server and update the episode list with any new content.
*   **Sync All:** The "Sync All" button at the top of the sidebar updates all feeds in parallel. During the operation, each thumbnail shows its own status: spinning icon (in progress), green tick (completed), red error icon (failed). The button reports progress in real time (e.g. `Syncing… 3/7`). The statuses remain visible for 2.5 seconds after the operation, then disappear.

### Footer: destination path

At the bottom of the sidebar the destination download folder path is shown, abbreviated to the last two components (e.g. `Documents / Podcasts`). Clicking this line opens the folder in the system file manager. To change the path, use **Settings → Archive**.

### Resizing

The width of the sidebar can be adjusted by dragging the right edge (the cursor becomes a horizontal double arrow). The minimum width is 240 px, the maximum is 640 px, and the default is 360 px. The setting is remembered between sessions.

### Connection indicator

The sidebar header shows the connection status: **"Connected"** or **"Offline"**. When the connection is lost, a banner indicates that downloads are paused until it is restored; when the connection returns, the software resumes automatically and checks for new episodes.

---

## 3.4 The Episode List

After selecting a feed from the sidebar, the main area is populated with the list of available episodes for that podcast.

### Feed header

At the top of the main area the header of the selected feed is visible, with thumbnail, podcast title and episode count. The main batch controls are accessible from this header (see section 3.7).

### List columns

Each row in the list represents an episode and contains the following information:

*   **Title:** The name of the episode as defined in the RSS feed.
*   **Date:** The original publication date of the episode.
*   **Duration:** The duration of the episode (when available in the feed).
*   **Size:** The file size. Before download, the value is declarative (taken from the feed); after download, it reflects the actual file size.
*   **Status:** The visual status indicator for the individual episode. See section 3.5.

### Filter bar

Below the feed header there is a filter bar that allows you to narrow the displayed episodes:

*   **Text search:** Filters by keywords in the title (AND logic: all entered terms must be present). The filter is automatically cleared when changing feed.
*   **Status filter:** Quick buttons to show only episodes in a given status: **"All"**, **"Not Downloaded"**, **"Downloaded"**.
*   **Date filter:** "From" and "to" date fields to limit the list to a publication date range.
*   **Duration filter:** Limits the list to episodes with a duration between a minimum and maximum (in minutes).
*   **Sort:** Opens a panel with five sort options — feed order (default), newest date, oldest date, longest duration, shortest duration.

All filters are automatically cleared when a different feed is selected.

### Multiple selection

You can select multiple episodes simultaneously to start their download in bulk:

*   **Ctrl+click:** adds or removes the episode from the selection individually.
*   **Shift+click:** selects the range between the last selected episode and the clicked one.
*   A checkbox appears on hover for unselected episodes and always for selected episodes.

When at least one episode is selected, the **"Download Selected (N)"** button appears in the feed header. The selection is cleared when changing feed and after starting the download.

---

## 3.5 Episode Statuses

Each episode in the list is marked with a status indicator. Understanding these statuses is essential for correctly interpreting the state of the archive.

| Status | Label in the list | Meaning |
|--------|-------------------|---------|
| **Not downloaded** | **"NEW"** tag | The episode is present in the feed but has never been downloaded. |
| **Queued** | "queued" entry in the Download Panel | The episode is awaiting its turn in the download queue. |
| **Paused** | "paused" entry in the Download Panel | The download has been suspended by the user and can resume from where it stopped. |
| **In progress** | Animated progress bar | The download is active. The row shows percentage and speed in real time. |
| **Error** | Error summary in the Download Panel | The download failed after all automatic retries. |
| **Downloaded** | **"ARCHIVED"** tag | The file is in the database: downloaded and verified, in this session or a previous one. |

*Note on the **"Downloaded"** status:* This status is the result of the Database-First philosophy. When analysing a feed that has previously been processed, most episodes will show the **"ARCHIVED"** tag: the software already knows they are present in the archive. Only episodes published after the last download will appear with the **"NEW"** tag.

---

## 3.6 Individual Download Controls

On the right of each row in the list, when hovering, episode-specific control buttons appear. The visible buttons vary according to the status:

**For all episodes:**

*   **Copy title** (document icon): Copies the episode title to the system clipboard.
*   **Checkbox:** For multiple selection (see section 3.4).

**For To Download or Error episodes:**

*   **Download** (downward arrow): Adds the individual episode to the download queue.

**For Downloaded episodes ("ARCHIVED" tag):**

*   **Re-download** (downward arrow): Adds the episode to the queue again, overwriting the existing file.
*   **Forget download** (refresh icon): Clears the episode status, returning it to not-downloaded without deleting the file from disk.
*   **Open Folder** (folder icon): Opens the system file manager at the location of the downloaded file.

**Interaction with the Detail Panel:**
A **single click** on the episode row opens the Detail Panel (see section 3.9) with complete metadata and contextual actions. Ctrl+click and Shift+click are reserved exclusively for multiple selection and do not open the panel.

---

## 3.7 Batch Controls

Batch controls operate on the entire download queue, not on individual episodes. They are located in the feed header, above the filter bar.

**"Download All":** Adds all episodes with the **"NEW"** tag to the queue. Episodes already in the database are excluded automatically. The Download Panel opens automatically on launch.

**"Download Selected (N)":** Appears when at least one episode is selected. Starts the download exclusively for the selected episodes.

**"Stop download":** Sends a cancellation signal to all active downloads and empties the queue. Files already completed remain in the database. `.part` files are deleted. Interrupted episodes will appear again with the **"NEW"** tag. For a temporary suspension (without losing progress), use **"Pause"** in the Download Panel instead (see section 3.8).

**"Export M3U":** Generates a playlist in `.m3u` format with the absolute local paths of all downloaded episodes for that podcast. Opens a native save dialogue. The button is only available when there are downloaded episodes for the current feed.

**"Open folder"** (folder icon in the header): Opens the file manager in the destination folder for the current feed.

---

## 3.8 The Download Panel

The Download Panel is the monitoring and control centre for all downloads in progress. It replaces the previous fixed progress bar at the bottom of the interface.

### Opening and closing

The panel opens **automatically** when each batch is started. When closed, the **floating button** (circular icon) is visible in the bottom-right corner of the window: clicking it reopens the panel. Closing the panel does not interrupt downloads in progress.

### Panel structure

*   **Header:** Shows the completed/total file counter (e.g. `47 / 312`) and the global queue controls: the **"Pause"** button (suspends the entire queue; it becomes **"Resume"** while the queue is paused, and the header shows **"Queue paused"**), the **"Stop download"** button to interrupt all downloads permanently, and the × button to close the panel.
*   **Queue list:** Each download in progress or waiting is represented by a row with: episode title, podcast name, progress percentage, current speed (KB/s or MB/s), individual progress bar. If the server does not declare the file size (no `Content-Length` header), the bar becomes **indeterminate** (a continuous animation) and shows the bytes received. Hovering over the row reveals the **"Pause"** button (or **"Resume"** if paused) and the × (**"Cancel download"**) button for that individual episode.
*   **Non-destructive pause:** Pausing — a single download or the whole queue — keeps the partial `.part` file: on resume, the transfer continues **from where it left off**, without starting over.
*   **Errors section:** At the end of the batch, if one or more downloads failed, an expandable summary appears at the bottom of the panel with the list of undownloaded episodes and their error code, together with the **"Retry failed"** button, which re-queues all failed episodes in a single click.

---

## 3.9 The Episode Detail Panel

The Detail Panel provides an in-depth view of a single episode: metadata, actions, and — if the episode is already in the archive — technical data from the downloaded file.

### Opening the Detail Panel

A **single click** on any row in the episode list opens the panel, which slides in from the right side of the window (below the command bar). The panel closes automatically when a different feed is selected in the sidebar.

*Note:* Ctrl+click and Shift+click are reserved for multiple selection and do not open the panel.

### Panel contents

*   **Basic metadata:** Publication date, declared duration, file size as indicated in the feed.
*   **Contextual actions:** The available buttons vary according to the episode status: Download, Re-download, Forget download, Open Folder.
*   **Archive data** (visible only if the episode has already been downloaded): Date and time of download, actual file size, bitrate, sample rate, filename on disk, SHA-256 checksum.
*   **Source link:** The original URL of the audio file in the RSS feed, with a button to copy it to the clipboard.
*   **Episode notes:** The episode's descriptive text extracted from the feed (show notes), presented in clean text format.

---

## 3.10 The Archive View

The Archive View is accessible via the **Archive** tab in the sidebar. Unlike the episode list, which shows only the episodes of one feed at a time, the Archive View collects in a single table **all episodes downloaded across the entire library**, regardless of which podcast they belong to.

### Features

*   **Search:** The search field filters by episode title or podcast name.
*   **Podcast filter:** The dropdown menu allows you to limit the display to the episodes of a single podcast.
*   **Sorting:** The table can be sorted by download date, publication date, file size and bitrate.
*   **Statistics:** The Archive View header shows the total number of downloaded files, the number of distinct podcasts, and the total archive size in gigabytes.
*   **Show in folder:** Hovering over a row reveals the button that opens the file manager at the file's location on disk.

The Archive View updates automatically when each download completes.

---

## 3.11 The Command Palette (Ctrl+K)

The Command Palette is a quick-access tool that allows you to reach any main function of the software without using the mouse.

### Opening the Command Palette

The **Ctrl+K** shortcut (from anywhere in the app, even during a download) opens an overlay with a central search field.

### Navigation

*   **Typing** in the search field filters actions and feeds in real time.
*   **↑↓ arrows** move the selection between results.
*   **Enter** executes the selected action.
*   **Esc** closes the palette without executing any action.

### Contents

*   **"Actions" group:** Five fixed commands always available: *Open Settings*, *Sync All*, *Add Feed* (focuses the URL field), *Go to Archive*, *Go to Feeds*.
*   **"Feeds" group:** When the search field is empty, shows the first feeds in the library. Typing filters feeds by title. Selecting a feed from the palette loads it directly into the main area.
*   **"Episodes (current feed)" group:** As you type, the palette also searches the episode titles of the currently open feed. Selecting an episode filters the list to that title.

---

## 3.12 The System Tray Icon

When the main window is closed by clicking the X, FeedDownloader Pro does not terminate the process: it minimises to the system notification area (system tray, near the clock). This behaviour is intentional: downloads and the automatic new-episode check continue in the background whilst the window is not visible.

**Interacting with the tray icon:**

*   **Clicking the icon:** Shows or hides the main window.
*   **Context menu (right-click):** Contains two entries — **"Show"** (brings the main window back to the foreground) and **"Quit"** (closes the programme and stops all active downloads).

*Practical note:* To run a large download without keeping the window open, start the batch, close the window, and leave the computer running. The archive will be available once the process completes.

---

*Go to Chapter 4 for a complete workflow from the first analysis to download.*