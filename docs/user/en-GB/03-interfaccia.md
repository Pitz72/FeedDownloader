# Chapter 3: A tour of the interface

## 3.1 Anatomy of the main window

The window falls into four zones.

*   **Command bar, at the top.** It holds the URL field, the analysis button, the button for
    changing the destination folder, access to the command palette and the settings icon. When an
    update exists, its banner appears here too (chapter 2, section 2.5).
*   **Feed sidebar, on the left.** Home to the library of saved feeds, the Archive tab, the sync
    controls and, at the bottom, the destination path. You adjust its width by dragging the right
    edge.
*   **Main area, in the centre.** Shows the episodes of the selected feed, with the podcast header,
    the filter bar and the list.
*   **Download panel, on the right.** It opens by itself when a batch of downloads starts. When it
    is closed, a round button in the bottom right corner brings it back.

On first launch, with the library empty, the main area shows a guide panel explaining how to add
your first feed and where to set the destination folder. It disappears on its own once the first
feed enters the library.

---

## 3.2 The command bar

**URL field.** This is where you paste the podcast’s RSS address. It accepts URLs pointing at XML
or RSS files and supports dragging: you can take a link from the browser and drop it on the field.

**Analyze.** Contacts the address, reads the feed and fills the episode list. When it finishes, the
feed takes its place in the sidebar for good. It usually takes one to five seconds, depending on
the size of the feed and the network.

**Folder icon.** Opens the picker for changing the download destination folder, without going
through the settings.

**Settings icon.** Opens the settings panel, even while a download is running (chapter 10).

---

## 3.3 The feed sidebar

The sidebar is the heart of the library: the feeds it holds survive closing the program.

### The Feeds and Archive tabs

Two tabs sit at the top. **Feeds** shows the library and is the default view. **Archive** opens the
table of every episode downloaded across the whole library (section 3.10).

### How to read a library row

Each feed shows its cover art, the title declared in the RSS feed and the date of the last sync.
When there are episodes that have never been downloaded, the **TO DOWNLOAD** badge appears with a
count (for example `3 TO DOWNLOAD`). The count is based on the episodes’ unique identifier, the
GUID, as recorded in the database: an episode counts as new only if its GUID has never been seen
before. The badge disappears once all the new episodes have been downloaded.

A click on the row loads that feed’s episodes into the main area.

### Adding a feed

Paste the URL into the field at the top and press **Analyze**. The feed is saved to the library and
stays available in later sessions.

### Search and sorting

The search field filters feeds by name as you type, which helps once the library grows. The sort
button arranges the feeds alphabetically; press it again to restore the original order.

### Synchronisation

Hover over a feed and the sync icon appears: it re-reads the feed from the server and updates the
list with any new episodes.

The **Sync All** button, at the top of the sidebar, refreshes the whole library in parallel. While
it works, each cover shows its own state through an icon: spinning while in progress, a green tick
on success, a red marker if the feed does not respond. The button reports progress
(`Syncing... 3/7`). The results stay visible for two and a half seconds, then fade.

### At the bottom: the destination path

The last row of the sidebar shows the destination folder shortened to its last two components (for
example `Documents / Podcasts`). A click opens it in the system file manager. To change it, use the
folder icon in the command bar or **Settings → Download**.

### Resizing

Width is adjusted by dragging the right edge: 240 pixels minimum, 640 maximum, 360 by default. The
size you choose is remembered.

### Connection state

The sidebar header reports whether the program is **Connected** or **Offline**. When the network is
down, a notice at the top reminds you that downloads stay put until it comes back; once the
connection returns, the program picks up again and checks whether new episodes appeared in the
meantime.

---

## 3.4 The episode list

Once a feed is selected, the main area fills with its episodes.

### Feed header

At the top you get the cover art, the podcast title and the episode count. This is also where the
commands that act on the whole feed live (section 3.7).

### What each row shows

*   **Title** of the episode as it appears in the feed.
*   **Date** of publication.
*   **Duration**, when the feed declares it.
*   **Status**, with the matching tag (section 3.5).

File size is not shown in the list: you read it in the detail panel, where before the download it
is the value declared by the feed and afterwards the real size of the file on disk.

### The filter bar

A bar under the header lets you narrow the list.

*   **Text search.** Filters by keyword, looking in the episode title and description. AND logic
    applies: every term you type must be present.
*   **Status.** Three quick buttons: **All**, **Not Downloaded**, **Downloaded**.
*   **Date.** Two fields, **From** and **To**, to limit the publication range.
*   **Duration.** Minimum and maximum in minutes.
*   **Sort.** Five criteria: feed order (the default), newest date, oldest date, longest duration,
    shortest duration.

Change feed and all the filters reset.

### Multiple selection

You can pick several episodes and download them as a block.

*   **Ctrl+click** adds or removes a single episode from the selection.
*   **Shift+click** selects the range between the last episode chosen and the one you clicked.
*   The tick box appears on hover for unselected episodes and stays permanently visible on selected
    ones.

With at least one episode selected, **Download Selected (N)** appears in the header. The selection
clears when you change feed and once a download starts.

---

## 3.5 Episode states

Every episode carries a status indicator. Reading them is the quickest way to see how the archive
stands.

| State | Where you see it | Meaning |
|-------|------------------|---------|
| To download | **NEW** tag in the list | The episode is in the feed and has never been downloaded. |
| Queued | *queued* in the download panel | Waiting its turn. |
| Paused | *paused* in the download panel | Suspended by you; resumes from where it stopped. |
| In progress | Animated progress bar | Transfer under way, with percentage and speed. |
| Error | Error summary in the download panel | All automatic attempts failed. |
| Downloaded | **ARCHIVED** tag in the list | The file is on record in the database, from this session or an earlier one. |

The **ARCHIVED** tag follows directly from the database-first design. Re-analyse a feed you have
already worked through and almost every episode will come back as archived: the program knows it
has them. Only those published after your last download show up as **NEW**.

---

## 3.6 Commands on a single episode

Hover over a row and the commands for that episode appear on the right. They vary with its state.

**Always available**

*   **Copy title**: copies the episode title to the clipboard.
*   **Tick box**: used for multiple selection (section 3.4).

**Episodes pending or in error**

*   **Download**: puts the episode in the queue.

**Episodes already archived**

*   **Forget download**: returns the episode to pending without touching the file on disk.
*   **Open Folder**: opens the file manager at the file’s location.

To fetch an archived episode again, go through the detail panel, where **Re-download** puts the
file back in the queue and overwrites the existing one.

A plain click on the row opens the detail panel (section 3.9). Ctrl+click and Shift+click are
reserved for multiple selection and open nothing.

---

## 3.7 Commands on the whole feed

These commands sit in the feed header, above the filter bar, and act on many episodes at once.

**Download All** queues every episode never downloaded among those **currently visible**: if a
filter is active, it acts only on those. Before it starts, the program asks for confirmation
("Do you really want to download all N episodes?") and checks free space on the destination disk,
warning you if there is not enough. The download panel opens by itself.

**Download Selected (N)** appears when there is an active selection and downloads only that.

**Sync New** re-reads the feed from the server and immediately queues any episodes that have just
appeared, without going through the list. The free-space check applies here too.

**Export M3U** produces an `.m3u` playlist with the local paths of that podcast’s downloaded
episodes and opens the save dialog. The button is always present: if nothing from that feed is on
disk yet, the program says so rather than creating an empty file.

**Change Folder**, the folder icon in the header, opens the destination folder picker.

To stop or suspend active downloads you use the download panel controls instead (section 3.8).

---

## 3.8 The download panel

This is where you watch and steer everything that is downloading.

### Opening and closing it

It opens by itself when a batch starts. Close it and the round button in the bottom right corner
brings it back. Closing the panel stops nothing.

### How it is laid out

*   **At the top**, the counter of completed files against the total (`47 / 312`, say), a summary
    of how many downloads are active and how many queued, and the × for closing the panel.
*   **In the middle**, the queue: one row per download, with the episode title, the podcast name,
    the percentage, the current speed and a progress bar. If the server does not declare the file
    size, the bar becomes indeterminate and the bytes received scroll in place of the percentage.
    Each row carries **Pause** (which becomes **Resume** once the row is suspended) and **Cancel
    download**.
*   **At the bottom**, the commands that apply to the whole queue: **Pause**, which suspends every
    transfer and turns into **Resume** while the label beside it reads **Queue paused**, and
    **Stop download**, which halts everything and empties the queue.

### Pausing and stopping are not the same thing

Pausing, whether a single episode or the entire queue, keeps the partial `.part` file: on resuming,
the transfer picks up where it left off. **Stop download** is final: it deletes the partial files,
empties the queue and returns the interrupted episodes to **NEW**. Files already completed stay in
the archive, naturally.

### When something goes wrong

At the end of the batch, if any downloads failed, an expandable summary appears at the bottom with
the missed episodes and each one’s error code. Beside it is **Retry failed**, which puts them all
back in the queue at once, saving you from hunting through the list.

---

## 3.9 The detail panel

A plain click on a row opens the detail panel, which slides in from the right below the command
bar. It closes on its own when you move to another feed. Ctrl+click and Shift+click do not open it:
they belong to multiple selection.

It contains:

*   **Basic metadata**: publication date, declared duration, size stated in the feed.
*   **Actions**, which change with the episode’s state: Download, Re-download, Forget download,
    Open Folder.
*   **Archive data**, only for episodes already downloaded: download date, real size, bitrate,
    sample rate, file name on disk and the SHA-256 checksum recorded at download time.
*   **Source link**: the URL of the audio file in the feed, with a button to copy it.
*   **Episode notes**: the descriptive text published in the feed, stripped of its HTML.

---

## 3.10 The Archive view

You reach it from the **Archive** tab in the sidebar. Where the episode list shows one feed at a
time, here every downloaded episode appears in a single table, whichever podcast it came from.

*   **Search**: looks in the episode title, the podcast name and the date, both as you see it on
    screen and in ISO form (`2026-08-18`).
*   **Filter by podcast**: a dropdown narrows the table to one show.
*   **Sorting**: by download date, publication date, size or bitrate.
*   **Statistics**: at the top, the number of files, the number of distinct podcasts and the space
    used.
*   **Show in folder**: hover over a row to open the file manager at that file.

The table refreshes itself as each download completes.

---

## 3.11 The command palette (Ctrl+K)

The palette reaches the main functions without a mouse. It opens with **Ctrl+K** from anywhere in
the program, including during a download, and presents a search field in the centre.

Type to filter, move with the **↑↓ arrows**, confirm with **Enter**, leave with **Esc** without
running anything.

Results come in groups.

*   **Quick actions**: five commands that are always there — open settings, sync all feeds, add
    feed (which puts the cursor in the URL field), open archive, go back to feeds.
*   **Jump to feed**: with the field empty it shows the first feeds in the library; as you type it
    filters them by title. Choose one and it loads into the main area.
*   **Episodes (current feed)**: as you type, the palette also searches the episode titles of the
    open feed. Choose one and the list is filtered on that title.

---

## 3.12 The notification area icon

Close the window with the × and the program does not quit: it shrinks into the notification area,
near the clock. This is deliberate, because downloads and the automatic check for new episodes
carry on with the window closed.

A click on the icon shows or hides the window. The right-click menu has two entries, in English
because the system provides them: **Show** brings the window back to the front, **Quit** closes the
program and stops any active downloads.

In practice: for a large archive, start the batch, close the window and let the machine work.

---

*Chapter 4 walks through a complete run, from the first analysis to the archived file.*
