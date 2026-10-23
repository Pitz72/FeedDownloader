# Chapter 3: A tour of the interface

## 3.1 How the window is laid out

FeedDownloader Pro is a desktop application, designed for a landscape window. Panels sit **side by
side** and each one scrolls on its own: the episode list scrolls without dragging the filters along,
the download queue without moving the results.

The window has three areas.

* **The top bar.** It shows the state of the download queue and holds the global commands: **Check
  feeds**, search (Ctrl+K), the **Guide** and **Settings**. When an update exists, its notice
  appears here too (chapter 2, section 2.5).
* **The sidebar**, on the left. At the top it leads to the three cross-cutting views, **Library**,
  **Downloads** and **Archive**; below them it lists the feeds in the library; at the bottom it has
  the **Add feed** and **Import from OPML** buttons.
* **The main area**, in the centre and on the right. It shows the chosen view: the Library, a feed,
  Downloads or the Archive.

The more self-contained tasks, such as adding a feed, the settings or the archive verification, open
over the interface as dialogs (section 3.10).

---

## 3.2 The top bar

From left to right:

* **The mark**, with the program’s name.
* **The update notice**, only when an update is available, downloading or ready.
* **The queue status.** A pill says in words what is happening: **Queue empty** (with a summary of
  the last run, for instance *last run: 12 downloaded, 1 failed*), **3 downloading** (with progress,
  for instance *47 of 312*), **Queue paused**, or **Offline**. A coloured dot goes with the status:
  green while downloading, yellow when paused, red with no network. Clicking the pill opens the
  **Downloads** view.
* **Check feeds.** Reads every feed in the library again right away, looking for new episodes, and
  starts automatic archiving where it is on (chapter 5, section 5.9). While it works the label reads
  *Checking 3/7*. Shortcut: **Ctrl+S**.
* **The magnifying glass**: opens the command palette (section 3.11). Shortcut: **Ctrl+K**.
* **The book**: opens the **Guide**, the built-in documentation.
* **The gear**: opens **Settings**, even while a download is running (chapter 10). Shortcut:
  **Ctrl+,**.

In windows narrower than 1024 pixels, **Check feeds** shows as an icon only and the queue status
detail is hidden.

---

## 3.3 The sidebar

### The three views

At the top are three entries, always visible.

* **Library** (Ctrl+1): the dashboard of every feed (section 3.4). Next to it is the total of
  episodes still to download, for instance *42 to download*.
* **Downloads** (Ctrl+2): the queue, the interrupted, the failed and the completed downloads
  (section 3.8). Next to it is the number of queued downloads or, with the queue empty, the number
  of failed ones (*2 failed*).
* **Archive** (Ctrl+3): every downloaded episode (section 3.9), with their number.

The entry of the open view is marked by a violet bar on its left edge.

### The feed list

Below the views is the list of feeds, with their number and the **Sort A to Z** button: on, it puts
the feeds in alphabetical order; off, it restores the order they were added in. The choice is
remembered. With at least one feed in the library the **Search feeds…** field appears too; it
filters by title and by address as you type.

Each row shows the cover, the title declared in the feed and a status line:

* **N to download**, when there are episodes not archived yet;
* **All archived**, when nothing is missing;
* **Not checked yet**, for a feed the program has not read yet, for instance one just imported from
  an OPML file.

Feeds with automatic archiving switched on also carry the green **auto** mark.

Clicking a row opens the feed in the main area; while the program reads it, a spinner turns over
the cover. A feed that is already open comes back at once, without reading it again.

### At the bottom

**Add feed** (Ctrl+N) opens the add dialog (section 3.10). **Import from OPML** imports a feed list
from another application (chapter 5, section 5.5).

*Removing a feed* is not done from the sidebar: the **Remove** command lives in the feed’s header
(section 3.5), away from a stray click.

---

## 3.4 The Library view

This is the opening view. With the library empty it shows the welcome panel (chapter 2, section
2.4); otherwise it presents the dashboard of the whole library.

### The Library header

The title **Your library**, the **Check feeds** and **Add feed** buttons, and three figures:
**Feeds**, **To download** and **Archived**. During a feed check, progress appears under the title
(*Checking feeds: 3 of 7…*).

### The feed table

One row per feed, with these columns:

| Column | Contents |
|--------|----------|
| **Podcast** | Cover, title and, when on, the **auto** mark of automatic archiving |
| **Episodes** | How many episodes the feed lists |
| **Archived** | How many of the feed’s episodes are in the archive |
| **To download** | How many are missing; **complete** when nothing is, a dash if the feed has not been checked yet |
| **Space** | The space taken by the feed’s archived files |
| **Last checked** | Date and time of the last read of the feed; **never** if it has not happened yet |

Clicking a column header sorts the table by that value; a second click reverses the order. Clicking
a row opens the feed.

### The panels beside the table

In wide windows (from about 1320 pixels), next to the table there is a column with three panels:

* **Download queue**: the state of the queue and the progress of the run, with **Open Downloads**;
* **Archive**: how many episodes are archived and how much space they take, with **Open the
  Archive** and **Import from OPML**;
* **Keyboard shortcuts**: a reminder of the main key combinations (section 3.12).

In narrower windows the column disappears and the table takes all the room; the **Episodes** column
disappears too.

---

## 3.5 The Feed view

It opens when you click a feed. It is laid out in two horizontal strips, the header and the filters,
above a working area split in two: the episode list on the left and a panel on the right.

### The feed header

* **Cover and title** of the podcast, with the **Automatic archiving** badge when it is on.
* **Checked** followed by the date and time of the last read, and the path of the folder this
  podcast’s files go to.
* **The feed commands**:
  * **Refresh**: reads the feed from the server again, ignoring the copy read a few minutes earlier,
    and tells you how many new episodes it found. It downloads nothing, except for feeds with
    automatic archiving (chapter 5, section 5.10);
  * **Open folder**: opens the podcast’s folder in the file manager;
  * **Export M3U playlist**: creates a playlist of the podcast’s archived files (chapter 5, section
    5.7);
  * **Copy address**: copies the feed address to the clipboard;
  * **Remove**: takes the feed out of the library, after a confirmation (chapter 5, section 5.4).

  In windows at least 1600 pixels wide the commands have written labels; narrower than that, only
  the icon remains, which shows its name when you hover over it.
* **The figures**: **Episodes**, **Archived**, **To download** and **Space used**. Below 1280 pixels
  only the space used remains, because the other three can already be read in the status filters.

### The filter strip

Always visible, on one line. Filters combine with each other.

* **Search** (*Search titles and descriptions…*): filters by keywords in the title and description.
  AND logic applies: every word you type must appear. **Ctrl+F** puts the cursor here.
* **Status**: three buttons, **All**, **To download** and **Archived**, each with its count. **To
  download** also leaves out episodes already queued.
* **Period**: a menu of ready-made ranges, **Whole feed**, **Last 30 days**, **Last 90 days**,
  **Last 12 months**, **This year**, **Last year**, and **Chosen dates**.
* **From** and **To**: the publication dates, both included. Choosing a ready-made range fills in
  these two fields; editing them by hand switches the menu to **Chosen dates**. You can fill in just
  one end.
* **Duration**: minimum and maximum in minutes. Episodes that do not declare a duration are not
  excluded.
* **Order**: **Feed order** (default), **Newest first**, **Oldest first**, **Title (A–Z)**,
  **Longest first**, **Shortest first**.
* **Clear filters**: appears when at least one filter is active and resets them all.

Opening another feed resets the filters.

### The action bar

Above the list, a line says what the main button will do:

* the summary, for instance *120 of 312 episodes shown · 87 to download*, followed by the active
  period (*published from 1 January 2025 to 30 June 2025*) and the number of selected episodes;
* with a selection active, **Deselect** and **Download the N selected**;
* the **main button**, which says exactly how many episodes it will take: **Download the N missing**
  with no filters, **Download the N filtered** with at least one filter active. It counts only the
  visible episodes that are neither archived nor already queued.

The button stays disabled with no network or when there is nothing to download.

### The episode list

One row per episode, in three columns:

* **Episode**: the title and, below it, publication date, duration, numbering (for instance `S2
  E7`, when the feed declares it) and declared size;
* **Status**: the episode’s status (section 3.6), with the progress bar while it downloads;
* **the actions**, always visible: the download icon for an episode to download, the × to cancel a
  queued episode, the folder icon to show an archived episode in the file manager.

Clicking the title opens the episode details (section 3.7).

The list draws only the rows visible on screen, so it stays smooth even with thousands of episodes.

### Selection

Each row has its own checkbox.

* Clicking the checkbox adds or removes that episode.
* **Shift** + click on a checkbox selects the range from the last episode chosen to the one
  clicked.
* The checkbox in the list header selects, or deselects, every episode shown.
* **Ctrl+A**, outside text fields, selects every visible episode.

The selection clears once the download starts and when another feed is opened.

### The right-hand panel

In windows at least 1280 pixels wide there is a fixed panel to the right of the list. When no
episode is open, it contains:

* the **Automatic archiving** switch, with its description (chapter 5, section 5.10);
* **What will be downloaded**: the main button’s plan, with the number of **Episodes**, the
  **Estimated space** and the active period. The text says whether the plan covers every episode not
  archived, the filtered ones or the selected ones, and the estimate updates as the filters change;
* **The podcast**: the description published in the feed and its address.

When you open an episode, the panel shows its details; the **Back to the feed card** arrow returns
to the previous view.

Below 1280 pixels there is no panel: the **Automatic archiving** switch moves into the action bar,
and the episode details open in a side window.

---

## 3.6 Episode states

Every episode carries a status, written out in words. Reading it is the quickest way to see where
the archive stands.

| Status | Where you see it | Meaning |
|--------|------------------|---------|
| **To download** | Status column | The episode is in the feed and not in the archive. |
| **Queued** | Status column, with a spinner | Waiting for its turn. |
| Progress | Bar with percentage, speed and time left | Transfer under way. |
| **Paused** | Still yellow bar | Suspended; resumes from where it stopped. |
| **Failed** | Status column, in red; reason in the Downloads view | The download failed after the automatic attempts, or with a permanent error. |
| **Archived** | Status column, in green | The file is recorded in the archive, from this session or an earlier one. |

The **Archived** status follows directly from the database-first approach. Reopen a feed you have
already worked on and almost every episode shows as archived: the program knows it has them.

If the server does not declare the file size, the progress bar becomes indeterminate and the bytes
received scroll in place of the percentage.

---

## 3.7 Episode details

They open when you click the title. In wide windows they take the right-hand panel; in narrow ones
they appear in a side window.

From the top, they contain:

* **The badges**: **Archived** or **To download**, and the episode type when the feed declares it as
  something other than a regular episode (for instance `trailer` or `bonus`).
* **The feed data**: **Published**, **Duration**, **Numbering** (season and episode), **Declared
  size** and **Format** (the declared MIME type).
* **In the archive**, for archived episodes only: **Downloaded on**, **Size on disk**, **Quality**
  (bitrate and sample rate), **File** (folder, podcast and file name) and **SHA-256 fingerprint
  (recorded at download)**.
* **Episode notes**: the descriptive text published in the feed, stripped of HTML.
* **Addresses**: the episode’s web page with **Copy page** and the audio file with **Copy audio**.

At the bottom, the actions:

* **Download**, for an episode to download; it becomes **Queued** while it waits.
* **Download again**, for an archived episode. It downloads a new copy: if the previous file is
  still in the folder, the new copy gets the `_2` suffix and the archive switches to it. The
  previous file is not deleted.
* **Show in folder**: opens the file manager on the archived file.
* **Mark as not downloaded**: takes the episode out of the archive, after a confirmation, and puts it
  back among the ones to download. The file on disk is not deleted.

---

## 3.8 The Downloads view

This is where you watch and control everything that is downloading. Open it from the sidebar, with
**Ctrl+2** or by clicking the queue status in the top bar. Closing the window or switching views
stops nothing.

### The Downloads header

The title **Downloads** and a sentence about the state (the queue works in the background, is
paused, is waiting for the network, or is empty). Then the commands that apply to the whole queue:

* **Pause**: suspends every transfer, keeping the partial files; it becomes **Resume** while the
  queue is paused;
* **Stop and clear the queue**: stops everything, after a confirmation (section 6.6).

Last, two figures: **Running** and **Waiting**.

Below the header, during a run, a bar shows overall progress: *47 of 312 finished*, with the
percentage.

### The queue

The left pane lists the queued downloads: active ones first, then waiting, then paused. Each row
shows the episode title, the podcast and the state (*downloading*, *waiting*, *paused*); active or
suspended downloads also show the bar with percentage, speed and time left. On the right of each
row are pause (or resume) for that download alone and the × to cancel it.

### Interrupted, failed and completed

In windows at least 1280 pixels wide, beside the queue there is a column with three sections.

* **Downloads interrupted when the app last closed.** It appears only when, at launch, downloads
  were left queued from the previous session — after closing with the batch still running, or a
  crash, for instance. It says how many there are and from which podcasts, and offers **Resume** or
  **Discard** (chapter 6, section 6.8).
* **Failed.** The downloads that failed in this session, each with its reason in plain words and the
  technical code in brackets, for instance *The file no longer exists on the server (404).
  (EPISODE_NOT_FOUND)*. Each row has **Retry** and the × to remove it from the list; at the top are
  **Clear list** and **Retry all (N)**.
* **Completed.** The episodes archived in this session, with size and time, and the total
  downloaded (*This session · 2.4 GB downloaded*). Each row has the icon to show the file in its
  folder; **Clear list** removes the rows without touching the files.

Below 1280 pixels the three lists become tabs: **Queue**, **Failed** and **Completed**, each with its
count. The interrupted-downloads panel stays at the top, above the tabs.

---

## 3.9 The Archive view

Reach it from the sidebar or with **Ctrl+3**. Where the Feed view shows one podcast at a time, here
every downloaded episode, from any podcast, appears in a single table.

### The Archive header

The title **Archive** and the range covered (*Episodes published from … to …*). Then two commands:

* **Verify archive**: opens the check of file presence and integrity (chapter 9, section 9.5);
* **Export CSV**: saves the full inventory (chapter 9, section 9.7).

Last, three figures: **Episodes**, **Podcasts** and **Space used**.

### The filter column

In windows at least 1360 pixels wide, to the left of the table there is a column with:

* **search** (*Title, podcast, file name or date…*): searches the episode title, the podcast name,
  the file name and the dates, both as shown on screen and in ISO form (`2026-08-18`). **Ctrl+F**
  puts the cursor here;
* the **Publication period**: **Whole archive**, the same ready-made ranges as the Feed view,
  **Chosen dates**, and the **From** and **To** fields;
* the list of **Podcasts**: **All podcasts** and then each podcast in alphabetical order, with the
  number of its archived episodes. Clicking a podcast filters the table; hovering shows the space it
  takes too.

Below 1360 pixels the same filters sit in a strip above the table, and podcasts are chosen from a
drop-down menu.

### The table

Above the table, a line sums up the selection (*240 of 1,180 episodes · 11.2 GB*) and offers **Clear
filters** when a filter is active. The columns are **Podcast**, **Episode**, **Published**,
**Downloaded**, **Size** and **Quality** (the last two only in wide windows). Clicking a header
sorts by that column; by default the table is sorted by download date, newest first. The folder
icon at the end of the row shows the file in the file manager.

The table updates itself after every completed download.

---

## 3.10 Dialogs

Some features open in a window over the interface. Close them with **Esc**, with the × or with their
close button.

* **Add a feed** (Ctrl+N): the **Feed address** field, the **Analyse** button, the podcast preview
  and the **Add to library** button (chapter 4, section 4.4).
* **Settings** (Ctrl+,): six vertical tabs, described in chapter 10.
* **Archive verification**: the **Quick** and **Full** checks and the actions on missing or altered
  files (chapter 9, section 9.5).
* **Guide**: the built-in documentation, with the link to this manual as a PDF.
* **What’s new**: the release notes of the installed version. It appears by itself on the first
  launch after an update; the **Got it** button closes it.

Confirmation requests (removing a feed, downloading several episodes, resetting the history) use
smaller windows, whose main button says exactly what it will do.

---

## 3.11 The command palette (Ctrl+K)

The palette reaches the main features without the mouse. Open it with **Ctrl+K**, or the magnifying
glass in the top bar, from anywhere in the program, even during a download. The window’s title is
*Search actions, feeds and episodes*.

Type to filter, move with the **↑↓ arrows** (**Home** and **End** jump to the first and last result),
confirm with **Enter**, leave with **Esc** without running anything.

Results are grouped.

* **Actions**: **Add a feed**, **Check every feed**, **Go to Library**, **Go to Downloads**, **Go to
  Archive**, **Verify archive**, **Import from OPML**, **Settings** and **Guide**. Each shows its
  shortcut, where one exists.
* **Feeds**: with the field empty it shows the first feeds in the library; as you type it filters
  them by title. Choosing one opens it.
* **Episodes of [podcast]**: as you type, the palette also searches the episode titles of the open
  feed. Choosing one takes you back to the feed view with the search already filled in with that
  title.

---

## 3.12 Keyboard shortcuts

| Combination | Effect |
|-------------|--------|
| **Ctrl+K** | Opens the command palette |
| **Ctrl+N** | Opens **Add a feed** |
| **Ctrl+S** | **Check feeds** (outside text fields) |
| **Ctrl+F** | Puts the cursor in the open view’s search (Feed or Archive) |
| **Ctrl+A** | Selects every visible episode (Feed view, outside text fields) |
| **Ctrl+1** | **Library** view |
| **Ctrl+2** | **Downloads** view |
| **Ctrl+3** | **Archive** view |
| **Ctrl +** and **Ctrl −** | Enlarges or shrinks the interface |
| **Ctrl 0** | Returns the interface to 100% |
| **Ctrl+,** | Opens **Settings** |

Inside a text field **Ctrl+A** keeps its usual meaning (select all the text). Right-clicking in a
text field opens the menu with cut, copy, paste and select all.

Every command can also be reached from the keyboard, with **Tab** and **Shift+Tab**, and the focus
is always visible.

---

## 3.13 The notification-area icon

Closing the window with the × does not quit the program: it shrinks to the notification area, near
the clock. This is deliberate, because downloads and the automatic check for new episodes carry on
with the window closed.

Clicking the icon shows or hides the window. The right-click menu has two entries: **Show** brings
the window to the front, **Quit** closes the program and stops active downloads. The downloads left
in the queue are not lost: when you reopen the program, the Downloads view offers to resume them
(chapter 6, section 6.8).

If the system offers no notification area (for instance GNOME without the AppIndicator extension),
closing the window quits the program.

In practice: for a large archive, start the batch, close the window and let the machine work.

---

## 3.14 Narrow windows and an enlarged interface

The layout stays landscape even when space shrinks: side panels give way to tabs or windows, but the
page never stacks into a single column.

| Window width | What changes |
|--------------|--------------|
| Below 1600 pixels | Feed commands show as icons |
| Below 1360 pixels | Archive: the filters move into a strip above the table; Size and Quality disappear |
| Below 1320 pixels | Library: the right-hand column and the Episodes column disappear |
| Below 1280 pixels | Feed: details open in a side window and automatic archiving moves into the action bar; Downloads: the lists become tabs |
| Below 1024 pixels | **Check feeds** shows as an icon |

The thresholds are in interface pixels: enlarge the interface, say to 140%, and the same screen
offers less room, so the thresholds kick in sooner. The window does not go below 960 × 620 pixels;
when the height is not enough, the main area scrolls.

---

*Chapter 4 walks through a complete run, from adding a feed to the archived file.*
