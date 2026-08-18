# Runtime FeedDownloader Pro — Quick start

From first launch to a complete archive in a few minutes.

---

## 1. Analyse the feed

1. Copy the podcast's **RSS address**. It is usually on the show's website, behind a link labelled
   RSS, Feed or Subscribe.
2. Paste it into the bar at the top of the window.
3. Press **Analyze**, or `Enter`.
4. The full episode list appears, with titles, durations and dates. The feed joins the sidebar and
   stays there for next time.

> You can also drag the link straight from your browser onto the field.

---

## 2. Choose where files go

1. Press the **folder** icon in the command bar, or open **Settings → Download** and use the icon
   next to **Download Path**.
2. Pick or create the archive folder.
3. The path stays visible at the bottom of the sidebar; clicking it opens the folder in your file
   manager.
4. For a **NAS or network drive**, enter the network path (for example `\\NAS\Podcasts\`). The
   program checks that it can write there within eight seconds, and the window never freezes.

> A subfolder for each podcast is created inside the destination automatically.

---

## 3. Download

**The whole catalogue.** Press **Download All** in the feed header. The program asks for
confirmation, checks the free space and queues every episode you have never downloaded. Mind any
active filter: it works on what is visible at that moment.

**A few episodes.** Hover an episode and press the download icon. For several, hold `Ctrl` and
click, or use `Shift` for a range, then press **Download Selected (N)**.

**Only what is new.** **Sync New** re-reads the feed and immediately queues the episodes that have
just appeared.

> If a server goes quiet for sixty seconds, the program closes that transfer and retries it from
> where it stopped.

---

## 4. Watch and control the queue

The **download panel** opens by itself on the right.

* **What it shows:** every queued episode with its percentage, current speed and estimated time.
* **Pause and resume:** at the bottom of the panel, **Pause** suspends the whole queue and
  **Resume** restarts it from the exact point reached. The same controls appear on each row for a
  single episode.
* **Cancel one download:** the × button on its row.
* **Stop everything:** **Stop download**, at the bottom of the panel. Note the difference: stopping
  deletes the partial files, pausing keeps them.
* **Closing the panel** with × stops nothing; a round button stays at the bottom right to bring it
  back.
* **Errors:** at the end of a batch a summary lists the titles and error codes. **Retry failed**
  re-queues them all at once.
* **In the background:** close the window and the program keeps working from the notification area.

> **Ctrl+K** opens the command palette: actions, feeds, and a search across the episodes of the open
> feed.

---

## 5. Settings worth knowing

From the gear icon:

* **Parallel Downloads**, **Download Speed Limit** and **Maximum File Size**, to match the engine to
  your line and your disk.
* **File Naming Template** (Metadata tab) with the tokens `{title}`, `{date}`, `{podcast}`,
  `{year}`, `{month}`, `{day}`, and a live preview.
* **Export Inventory (CSV)** for the full list with SHA-256 fingerprints, sizes and bitrates.
* **Import / Export Feeds (OPML)** to move your subscription list between applications.
* **Archive Health Check** to see what is missing or altered, with **Repair archive (checksum
  search)** to find files that were renamed by hand.
* **Export M3U**, from the feed header, for a local playlist of that show.

---

## If something goes wrong

**The feed is not recognised.** Make sure the address points at the RSS file itself and not at the
web page containing it; it usually ends in `.xml` or `.rss`.

**Some episodes report "File not found on server".** The publisher removed the file. The program
records the error and carries on with the rest, which is precisely why archiving early matters.

**The network path does not answer.** Check that the NAS is awake and reachable, and that the
share's credentials are already stored by your operating system.

**Not enough disk space.** Free some room and start again: thanks to the database, whatever was
already downloaded is not fetched twice.

---

*Every address goes through the anti-SSRF checks described in the manual before it is contacted.*
