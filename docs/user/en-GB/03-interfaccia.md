# Chapter 3: Interface Tour

## 3.1 Anatomy of the Main Window

When FeedDownloader Pro opens, the interface is organised vertically into three functional zones:

*   **Command zone (top):** The URL input bar and main controls. All operations are initiated from here.
*   **Working zone (centre):** The main area, where analysed episodes are displayed with their related information and individual download controls.
*   **Status zone (bottom):** The global progress bar with information about the current batch.

---

## 3.2 The Command Bar (Top)

**URL Field:** The text bar where you enter the RSS address of the podcast to analyse. Accepts direct URLs to XML/RSS files. Supports **drag and drop**: you can drag a link directly from a browser onto this area.

**"Analyse" Button:** Starts the feed analysis. The software contacts the URL, reads the RSS file, and populates the episode list. The operation generally takes between 1 and 5 seconds, depending on the size of the feed and the connection speed.

**Destination Path Field:** Indicates the folder in which downloaded files will be saved. Clicking the adjacent folder icon opens the selection window. The configured path is retained between sessions.

**Settings Icon (⚙):** Opens the settings panel. It is accessible at any time, even during an active download. For details, see Chapter 10.

---

## 3.3 The Episode List (Centre)

After a feed is analysed, this area is populated with the list of available episodes. Each row represents an episode and contains the following information.

**Main columns:**

*   **Title:** The name of the episode as defined in the RSS feed.
*   **Date:** The original publication date of the episode.
*   **Duration:** The duration of the episode (when available in the feed).
*   **Size:** The estimated file size (when available in the feed). Before download, this figure is declarative; after download, it reflects the actual file size.
*   **Status:** The visual status indicator for the individual episode. See section 3.4.
*   **Actions:** The individual control buttons for each episode.

**Sorting:**
Column headers are clickable to sort the list (by date, by title, by size). The default behaviour is to display the most recent episodes at the top.

**Multiple selection:**
Hold `Ctrl` and click on multiple episodes to select them individually. `Shift` + click selects a range. Collective actions (start download, remove from list) can be applied to the selected episodes.

---

## 3.4 Episode Statuses

Each episode in the list is marked with a coloured status indicator. Understanding these statuses is essential for correctly interpreting the state of the archive.

| Status | Colour | Meaning |
|--------|--------|---------|
| **To Download** | Grey | The episode is present in the feed but has never been downloaded. |
| **Queued** | Blue | The episode has been added to the queue and is waiting its turn. |
| **In Progress** | Animated light blue | The download is in progress. The cell also shows the completion percentage. |
| **Completed** | Green | The file has been downloaded, renamed, and verified correctly. |
| **Error** | Red | The download failed after all automatic retries. The tooltip shows the error code. |
| **Downloaded** | Muted green | The database already records this episode as downloaded. It will not be re-downloaded. |

*Note on **"Downloaded"** status:* This status is the result of the Database-First philosophy. When analysing a feed that has previously been processed, most episodes will appear in this status: the software already knows they are present in the archive. Only episodes published after the last download will appear as **"To Download"**.

---

## 3.5 Individual Download Controls

Two buttons are present to the right of each row in the list.

**Download Icon (↓):** Adds the individual episode to the download queue. If the episode is already in **"Completed"** or **"Downloaded"** status, the system requests confirmation before proceeding with a forced re-download.

**Information Icon (ℹ):** Opens a panel with the complete episode details: original audio URL, cover image URL, extended description, file path on disk (if already downloaded), SHA-256 hash, and technical metadata. This panel is useful for archive verification and diagnostics.

---

## 3.6 Batch Controls (Top, Right Area)

These buttons operate on the entire download queue, not on individual episodes.

**"Download All":** Adds all episodes in **"To Download"** status to the queue. Episodes already present in the database are excluded automatically.

**"Stop":** Interrupts the batch and clears the queue. Files already completed remain in the database. `.part` files are deleted. The next time the same feed is analysed, interrupted episodes will appear again as **"To Download"**.

---

## 3.7 The Global Progress Bar (Bottom)

The bottom bar is always visible and shows the overall status of the current batch:

*   **Progress bar:** Fills proportionally to the number of completed files out of the total queue.
*   **File counter:** For example `47 / 312 episodes` — number of completed files out of the total queue.
*   **Average speed:** Aggregate download speed of all active threads, expressed in MB/s or KB/s.
*   **Estimated time:** Estimate of the time remaining to complete the batch, calculated on the average speed of the last 30 seconds.

*Note:* The estimated time remaining may vary significantly in the early stages of a download, when the data available for calculation is still limited. It becomes more reliable after the first 10–15 completed files.

---

## 3.8 The System Tray Icon

When the main window is closed by clicking the X, FeedDownloader Pro does not terminate the process: it minimises to the system notification area (system tray, near the Windows or macOS clock). This behaviour is intentional: downloads continue in the background whilst the window is not visible.

**Tray context menu (right-click on the icon):**
*   **Open FeedDownloader Pro:** Brings the main window back to the foreground.
*   **Download Status:** Shows a summary line (e.g. `Downloading: 3 active, 47/312 completed`).
*   **Quit:** Closes the programme and stops all active downloads.

*Practical note:* To run a large download without keeping the window open, start the batch, close the window, and leave the computer running. The archive will be available once the process completes.

---

*Go to Chapter 4 for a complete workflow from the first analysis to download.*
