# Chapter 3: Interface Tour

## 3.1 Anatomy of the Main Window

When FeedDownloader Pro opens, the window is organised into four functional zones:

*   **Command bar (top):** The fixed bar containing the URL field, the Analyse button and the Settings icon. All operations for adding new feeds are initiated from here.
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
*   **New episodes badge:** A numeric indicator showing how many episodes have been published since the last download. The badge disappears after all new episodes have been downloaded.

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

The width of the sidebar can be adjusted by dragging the right edge (the cursor becomes a horizontal double arrow). The minimum width is 240 px, the maximum is 640 px, and the default is 456 px. The setting is remembered between sessions.

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
*   **Status filter:** Quick buttons to show only episodes in a given status: All, New (not downloaded), Downloaded, Errors.
*   **Date filter:** "From" and "to" date fields to limit the list to a publication date range.
*   **Duration filter:** Limits the list to episodes with a duration between a minimum and maximum (in minutes).
*   **Sort:** Opens a panel with five sort options — feed order (default), newest date, oldest date, longest duration, shortest duration.

All filters are automatically cleared when a different feed is selected.

### Multiple selection

You can select multiple episodes simultaneously to start their download in bulk:

*   **Ctrl+click** (or Cmd+click on macOS): adds or removes the episode from the selection individually.
*   **Shift+click:** selects the range between the last selected episode and the clicked one.
*   A checkbox appears on hover for unselected episodes and always for selected episodes.

When at least one episode is selected, the **"Download Selected (N)"** button appears in the feed header. The selection is cleared when changing feed and after starting the download.

---

## 3.5 Episode Statuses

Each episode in the list is marked with a status indicator. Understanding these statuses is essential for correctly interpreting the state of the archive.

| Status | Colour | Meaning |
|--------|--------|---------|
| **To Download** | Grey | The episode is present in the feed but has never been downloaded. |
| **Queued** | Blue | The episode has been added to the queue and is awaiting its turn in the Download Panel. |
| **In Progress** | Animated light blue | The download is in progress. The row shows percentage, speed and estimated time in real time. |
| **Completed** | Green | The file has been downloaded, renamed and verified correctly. |
| **Error** | Red | The download failed after all automatic retries. |
| **Downloaded** | Muted green | The database already records this episode as downloaded in a previous session. |

*Note on **"Downloaded"** status:* This status is the result of the Database-First philosophy. When analysing a feed that has previously been processed, most episodes will appear in this status: the software already knows they are present in the archive. Only episodes published after the last download will appear as **"To Download"**.

---

## 3.6 Individual Download Controls

On the right of each row in the list, when hovering, episode-specific control buttons appear. The visible buttons vary according to the status:

**For all episodes:**
*   **Copy title** (document icon): Copies the episode title to the system clipboard.
*   **Checkbox:** For multiple selection (see section 3.4).

**For To Download or Error episodes:**
*   **Download** (downward arrow): Adds the individual episode to the download queue.

**For Completed or Downloaded episodes:**
*   **Re-download** (downward arrow): Adds the episode to the queue again, overwriting the existing file.
*   **Reset status** (refresh icon): Clears the episode status, returning it to "To Download" without deleting the file from disk. Useful to force a new analysis.
*   **Open folder** (folder icon): Opens the system file manager at the location of the downloaded file.

**Interaction with the Detail Panel:**
A **single click** on the episode row opens the Detail Panel (see section 3.9) with complete metadata and contextual actions. Ctrl+click and Shift+click are reserved exclusively for multiple selection and do not open the panel.

---

## 3.7 Batch Controls

Batch controls operate on the entire download queue, not on individual episodes. They are located in the feed header, above the filter bar.

**"Download All":** Adds all episodes in **"To Download"** status to the queue. Episodes already in the database are excluded automatically. The Download Panel opens automatically on launch.

**"Download Selected (N)":** Appears when at least one episode is selected. Starts the download exclusively for the selected episodes.

**"Stop":** Sends a cancellation signal to all active downloads and empties the queue. Files already completed remain in the database. `.part` files are deleted. On the next analysis, interrupted episodes will appear again as **"To Download"**.

**"Export M3U":** Generates a playlist in `.m3u` format with the absolute local paths of all downloaded episodes for that podcast. Opens a native save dialogue. The button is only available when there are downloaded episodes for the current feed.

**"Open folder"** (folder icon in the header): Opens the file manager in the destination folder for the current feed.

---

## 3.8 The Download Panel

The Download Panel is the monitoring and control centre for all downloads in progress. It replaces the previous fixed progress bar at the bottom of the interface.

### Opening and closing

The panel opens **automatically** when each batch is started. When closed, the **floating button** (circular icon) is visible in the bottom-right corner of the window: clicking it reopens the panel. Closing the panel does not interrupt downloads in progress.

### Panel structure

*   **Header:** Shows the completed/total file counter (e.g. `47 / 312`), the Stop button to interrupt all downloads, and the × button to close the panel.
*   **Queue list:** Each download in progress or waiting is represented by a row with: episode title, podcast name, progress percentage, current speed (KB/s or MB/s), estimated time to completion (e.g. `2m 30s`), individual progress bar. Hovering over the row reveals the × button to cancel that individual download.
*   **Errors section:** At the end of the batch, if one or more downloads failed, an expandable summary appears at the bottom of the panel with the list of undownloaded episodes and their error code.

---

## 3.9 The Episode Detail Panel

The Detail Panel provides an in-depth view of a single episode: metadata, actions, and — if the episode is already in the archive — technical data from the downloaded file.

### How to open it

A **single click** on any row in the episode list opens the panel, which slides in from the right side of the window (below the command bar). The panel closes automatically when a different feed is selected in the sidebar.

*Note:* Ctrl+click and Shift+click are reserved for multiple selection and do not open the panel.

### Panel contents

*   **Basic metadata:** Publication date, declared duration, file size as indicated in the feed.
*   **Contextual actions:** The available buttons vary according to the episode status: Download, Re-download, Reset status, Open folder.
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

### How to open it

The **Ctrl+K** shortcut (from anywhere in the app, even during a download) opens an overlay with a central search field.

### Navigation

*   **Typing** in the search field filters actions and feeds in real time.
*   **↑↓ arrows** move the selection between results.
*   **Enter** executes the selected action.
*   **Esc** closes the palette without executing any action.

### Contents

*   **Actions group:** Five fixed commands always available: *Open Settings*, *Sync all feeds*, *Add feed* (focuses the URL field), *Go to Archive tab*, *Go to Feed tab*.
*   **Feeds group:** When the search field is empty, shows the first five feeds in the library. Typing filters feeds by title. Selecting a feed from the palette loads it directly into the main area.

---

## 3.12 The System Tray Icon

When the main window is closed by clicking the X, FeedDownloader Pro does not terminate the process: it minimises to the system notification area (system tray, near the Windows or macOS clock). This behaviour is intentional: downloads continue in the background whilst the window is not visible.

**Tray context menu (right-click on the icon):**
*   **Open FeedDownloader Pro:** Brings the main window back to the foreground.
*   **Download Status:** Shows a summary line of current activity.
*   **Quit:** Closes the programme and stops all active downloads.

*Practical note:* To run a large download without keeping the window open, start the batch, close the window, and leave the computer running. The archive will be available once the process completes.

---

*Go to Chapter 4 for a complete workflow from the first analysis to download.*