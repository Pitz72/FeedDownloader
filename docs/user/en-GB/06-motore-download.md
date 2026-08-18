# Chapter 6: The Download Engine

## 6.1 Engine Architecture

The download engine of FeedDownloader Pro is an asynchronous multi-threaded system. Unlike a sequential downloader, the software manages multiple downloads simultaneously through a central queue system.

**Main components:**

*   **The queue:** An ordered list of all pending downloads. Every episode added to the batch enters this queue and waits to be assigned to an available thread.
*   **Worker threads:** The processes that physically execute the downloads. The number of active threads is configurable. Each thread handles one download at a time, independently of the others.
*   **The database manager:** The component that updates the SQLite database in real time with the status of each download (started, completed, failed, completion percentage).
*   **The integrity monitor:** The process that, upon completion of each download, calculates and records the SHA-256 hash of the downloaded file.

---

## 6.2 Parallel Downloads: Configuration

The number of simultaneous downloads is one of the most relevant parameters to configure. An insufficient value slows the process; an excessive value can saturate the connection, overload the source server, or generate network errors.

**The default value is 3 threads.** For most users with a home connection, this value offers a good balance between speed and stability.

**Configuration guidelines:**

| Scenario | Recommended threads |
|----------|---------------------|
| Slow connection or server with throttling | 1 |
| Standard home connection | 3 (default) |
| Fast fibre connection | 5 |
| NAS with slow network connection | 1 |

**How to change the number of simultaneous downloads:**
Go to **Settings → Download → Parallel Downloads** and select one of the three available presets: **1**, **3**, or **5**. The change is applied immediately to the current queue.

*Note on servers with connection limits:* Some podcast hosting servers apply limits to the number of simultaneous connections per single IP address. If frequent `429 Too Many Requests` or `503 Service Unavailable` errors occur, reduce the number of threads to 1 or 2. The retry mechanism automatically handles failures, but reducing the load prevents the problem at its root.

---

## 6.3 Error Handling and Retry System

In a batch download of hundreds of files, network errors are to be expected. FeedDownloader Pro uses an **exponential backoff retry** strategy: when a download fails, the system waits an increasing interval before retrying, rather than immediately re-queuing the episode.

**Retry cycle:**

| Attempt | Wait before retry |
|---------|-------------------|
| 1st failure | 1 second |
| 2nd failure | 2 seconds |
| 3rd failure (last) | The episode is marked as a definitive **"Error"** |

If a server is temporarily overloaded, the system gives the server time to recover before retrying. If the server replies `429 Too Many Requests` with a `Retry-After` header, the wait requested by the server is honoured (up to a maximum of 60 seconds). Because the partial `.part` file is kept between attempts, each retry **resumes from where it stopped** instead of starting over.

**Definitive errors (not subject to retry):**
*   `404 Not Found`: The file does not exist on the server. Further attempts are not useful.
*   **Non-audio content:** The server replied with a web page (HTML) instead of the audio file — typical of expired links redirecting to a courtesy page. The download is rejected with the message *"The server sent a web page, not audio"*.
*   **File over the size cap:** The file exceeds the **"Maximum File Size"** value configured in the Settings (see Chapter 10).
*   **Disk full or access denied** on the destination folder.
*   SSRF validation errors: The URL did not pass the internal security checks.

**Retrying failed episodes:** At the end of the batch, the **"Retry failed"** button in the errors section of the Download Panel re-queues all failed episodes in a single click.

---

## 6.4 Stall Detection

A stalled download is a scenario in which the TCP connection is technically active and packets continue to arrive, but the data flow has stopped. The operating system does not report errors as the connection is still open; the file continues to show as "downloading" without progressing.

This condition occurs frequently with:
*   Servers under load that apply throttling after sending the first bytes.
*   Intermediate network routing issues.
*   Large audio files served from CDN with bandwidth limitations.

**Detection:**
Each active download is monitored by a watchdog. If no new bytes arrive for **60 consecutive seconds**, the download is considered stalled and:
1.  The connection is terminated.
2.  The partial `.part` file is **kept**.
3.  The episode re-enters the normal retry cycle and, thanks to the partial file, the new attempt **resumes from where it stopped**.

The process is transparent to the user. If the stall was caused by a transient condition, the download resumes normally. If the problem persists beyond the maximum attempts, the episode is marked as **"Error"**.

---

## 6.5 `.part` Files: Anti-Corruption and Resume

Every audio file is downloaded with the temporary `.part` extension during transfer. The file is renamed with the final extension (`.mp3`, `.m4a`, `.ogg`, etc.) **only** after:

1.  The transfer is 100% complete.
2.  The file size matches the size declared in the HTTP header (`Content-Length`), if available.
3.  The SHA-256 hash has been calculated and recorded in the database.

This mechanism guarantees that partial or corrupted audio files with a final extension are never present in the destination folder.

**Resuming transfers:** In the event of a pause, transient error or interruption, the `.part` file is kept together with a small `.part.meta` file recording the server's "validator" (ETag or Last-Modified). On the next attempt, the software requests only the missing bytes (HTTP `Range` request with `If-Range`): if the remote file has changed in the meantime, the server signals it and the download restarts from scratch, avoiding splicing fragments of different files together.

**Cleaning up leftovers:** `.part` files orphaned by past sessions can be removed via **Settings → Advanced → Maintenance → Clean temporary files** (the function is only available while no downloads are running).

*Location of `.part` files:* In the same destination folder as completed files. These files must not be opened with an audio player: being partial, they would cause read errors.

---

## 6.6 Pausing, Resuming and Stopping

**Pausing (non-destructive):**
From the Download Panel you can suspend **a single download** (the **"Pause"** button on its row) or **the entire queue** (the **"Pause"** button in the header; the panel shows **"Queue paused"**). Pausing keeps the `.part` files: pressing **"Resume"** continues the transfer exactly from where it left off. A paused download keeps its place in the queue and in the batch.

**Stopping the Batch (destructive):**
The **"Stop download"** button in the Download Panel stops all active downloads in an orderly fashion, clears the queue, and deletes partial `.part` files. Files already completed remain in the database. Interrupted episodes will appear again with the **"NEW"** tag.

**Closing the window during a download:**
Closing the main window with the X keeps the programme running in the system tray, and downloads continue in the background. The tray menu's **"Quit"** entry, instead, closes the programme for good, stopping active downloads; the `.part` files remain on disk, so re-queueing the same episodes in the next session resumes the transfer from where it stopped.

---

## 6.7 Download Speed

The overall batch speed is the **aggregate sum** of all active downloads. With 3 active threads each downloading at 2 MB/s, the total speed displayed is approximately 6 MB/s.

**Factors affecting speed:**
*   **Connection bandwidth:** The maximum available limit.
*   **Source server speed:** Many podcast hosting servers apply bandwidth limitations to contain costs. The speed of a single thread rarely exceeds 2–5 MB/s on these servers.
*   **Number of threads:** A greater number of threads compensates for the slowness of individual servers by downloading from multiple simultaneous connections.
*   **File size:** Average-sized files (20–80 MB, corresponding to 30–60 minute episodes) offer optimal efficiency, with a reduced relative connection overhead.

---

*Go to Chapter 7 for the configuration of NAS and network paths.*
