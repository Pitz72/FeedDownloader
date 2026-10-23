# Runtime FeedDownloader Pro — Quick start

From first launch to a complete archive in a few minutes. Version 1.6.0.

---

## 1. Choose where to save

1. Open **Settings → Downloads** (the gear at the top right, or **Ctrl+,**).
2. Press **Change folder** and choose, or create, the archive folder. Without an explicit choice,
   files go to `Documents\FeedDownloader\downloads`.
3. For a **NAS or network drive** you can give the network path (for instance `\\NAS\Podcasts\`).
   The program checks it can write there within eight seconds, without ever freezing the window.

> The program creates a subfolder for each podcast inside the download folder by itself.

---

## 2. Add the feed

1. Copy the podcast’s **RSS address**: it is usually on the show’s website, behind a link labelled
   RSS, Feed or Subscribe.
2. Press **Add feed** at the bottom of the sidebar (**Ctrl+N**) and paste the address into the
   **Feed address** field.
3. Press **Analyse**, or `Enter`: the preview appears with cover, title, number of episodes and the
   range covered.
4. If you like, switch on **Automatic archiving** to download future episodes by themselves.
5. Press **Add to library**: the feed view opens.

> You can also drag the link from the browser straight onto the window, or bring in a list from
> another app with **Import from OPML**.

---

## 3. Choose what to download

The main button, above the episode list, always says how many episodes it will take.

* **The whole catalogue.** With no filters the button reads **Download the N missing**.
* **A period.** In the filter strip, choose a ready-made **Period** (**Last 30 days**, **This
  year**, **Last year**…) or the **From** and **To** dates: the button becomes **Download the N
  filtered**, and the **What will be downloaded** panel shows the estimated space.
* **A selection.** Tick the episodes’ checkboxes (**Shift** + click for a range, **Ctrl+A** for every
  visible one) and press **Download the N selected**.
* **A single episode.** The download icon on its row.

For more than one episode the confirmation shows period, estimated space, free space and folder;
**Queue** starts the downloads.

---

## 4. Follow and control the downloads

The top bar always says how many downloads are running; click it to open the **Downloads** view
(**Ctrl+2**).

* **The queue**, with each episode’s percentage, speed and time left.
* **Pause** and **Resume**: suspend and resume the whole queue from where it stopped; each row has
  the same controls for a single episode, and the × to cancel it.
* **Stop and clear the queue**: stops everything and deletes the partial files, whereas pausing
  keeps them.
* **Failed**: the failed episodes with their reason; **Retry all** puts them back in the queue.
* **With no network** the queue pauses by itself and restarts when the connection is back.
* **Closing the window** leaves the program in the notification area, still working. If it quits
  completely, on restart the Downloads view offers to resume the downloads left in the queue.

> **Ctrl+K** opens the command palette: actions, feeds and search among the open feed’s episodes.

---

## 5. Keep the archive up to date

* **Check feeds** (top bar, **Ctrl+S**) looks for new episodes across the whole library.
* The program also checks feeds by itself, at launch and every six hours (**Settings → General**),
  and sends a notification when it finds something new.
* With **Automatic archiving** on for a feed, new episodes download without asking.

---

## 6. Useful settings

* **Downloads → Parallel downloads** (1 to 10), **Bandwidth limit (KB/s)**, shared by all
  downloads, and **Largest file size (MB)**.
* **Files and metadata → Template** for file names, with the `{title}`, `{podcast}`, `{date}`,
  `{year}`, `{month}`, `{day}`, `{season}`, `{episode}` placeholders and a live example.
* **Files and metadata → Save metadata next to the files**: a `.json` per episode, `podcast.json` and
  the cover for each podcast.
* **Archive → Verify archive**, in **Quick** or **Full** mode, with **Find moved files** for files
  renamed by hand.
* **Archive → Export CSV** and **Export to OPML**.
* **Accessibility → Size** (80 to 180%) and **Reduce animations and effects**.

---

## If something goes wrong

**The feed is not recognised.** The address must point to the RSS file, not the web page that
contains it: it usually ends in `.xml` or `.rss`.

**Some episodes give “The file no longer exists on the server (404).”** The publisher has removed the
file. The program reports the error and carries on with the others: which is exactly why it pays to
archive in time.

**The network folder is not answering.** Check that the NAS is on and reachable, and that the share’s
credentials are already stored in the system.

**Not enough disk space.** Free some space and press **Retry all**: thanks to the database, what has
already been downloaded is not fetched a second time.

---

*Every address passes the anti-SSRF checks described in the manual before it is contacted.*

*Runtime FeedDownloader Pro is free software under the MIT licence. Written with Google Gemini and
Anthropic Claude, under the design direction of Simone Pizzi.*
