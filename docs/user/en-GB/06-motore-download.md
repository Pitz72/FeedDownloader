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

**How to change the number of threads:**
Go to **Settings → Download → Parallel Threads** and select one of the three available presets: **1**, **3**, or **5**. The change is applied immediately to the current queue.

*Note on servers with connection limits:* Some podcast hosting servers apply limits to the number of simultaneous connections per single IP address. If frequent `429 Too Many Requests` or `503 Service Unavailable` errors occur, reduce the number of threads to 1 or 2. The retry mechanism automatically handles failures, but reducing the load prevents the problem at its root.

---

## 6.3 Error Handling and Retry System

In a batch download of hundreds of files, network errors are to be expected. FeedDownloader Pro uses an **exponential backoff retry** strategy: when a download fails, the system waits an increasing interval before retrying, rather than immediately re-queuing the episode.

**Retry cycle:**

| Attempt | Wait before retry |
|---------|-------------------|
| 1st failure | 2 seconds |
| 2nd failure | 4 seconds |
| 3rd failure | 8 seconds |
| 4th failure | 16 seconds |
| 5th failure (last) | The episode is marked as a definitive **"Error"** |

If a server is temporarily overloaded, the system gives the server time to recover before retrying. Most transient errors are resolved within the second or third attempt.

**Definitive errors (not subject to retry):**
*   `404 Not Found`: The file does not exist on the server. Further attempts are not useful.
*   `403 Forbidden`: The server rejected the request due to lack of authorisation.
*   SSRF validation errors: The URL did not pass the internal security checks.

---

## 6.4 Stall Detection

A stalled download is a scenario in which the TCP connection is technically active and packets continue to arrive, but the data flow has stopped. The operating system does not report errors as the connection is still open; the file continues to show as "downloading" without progressing.

This condition occurs frequently with:
*   Servers under load that apply throttling after sending the first bytes.
*   Intermediate network routing issues.
*   Large audio files served from CDN with bandwidth limitations.

**Detection:**
Each active download is monitored by a watchdog process that records the bytes received every 10 seconds. If for **60 consecutive seconds** no new bytes arrive (or fewer than 1 KB arrive, a threshold that excludes TCP keep-alives), the download is considered stalled and:
1.  The connection is terminated.
2.  The partial `.part` file is deleted.
3.  The episode is re-queued with the normal retry cycle.

The process is transparent to the user: a brief reset of the percentage is visible in the individual progress bar, followed by the download resuming. If the stall was caused by a transient condition, the new download starts normally. If the problem persists beyond the maximum attempts, the episode is marked as **"Error"**.

---

## 6.5 `.part` Files: The Anti-Corruption System

Every audio file is downloaded with the temporary `.part` extension during transfer. The file is renamed with the final extension (`.mp3`, `.m4a`, `.ogg`, etc.) **only** after:

1.  The transfer is 100% complete.
2.  The file size matches the size declared in the HTTP header (`Content-Length`), if available.
3.  The SHA-256 hash has been calculated and recorded in the database.

This mechanism guarantees that partial or corrupted audio files with a final extension are never present in the destination folder. In the event of a sudden programme interruption or computer shutdown, residual `.part` files will be found in the folder: the software will delete and re-download them in the next session.

*Location of `.part` files:* In the same destination folder as completed files. These files must not be opened with an audio player: being partial, they would cause read errors.

---

## 6.6 Interrupting and Resuming Sessions

**Stopping the Batch:**
The **"Stop"** button (in the global progress bar) stops all active threads in an orderly fashion, clears the queue, and deletes partial `.part` files. Files already completed remain in the database. The next time the same feed is analysed, interrupted episodes will appear as **"To Download"**.

**Closing the programme during a download:**
If the main window is closed (the programme continues in the system tray) or **"Quit"** is used from the tray menu during an active download, the software displays a warning with the number of downloads in progress and requests confirmation. If the user chooses to quit, active downloads are stopped in a controlled manner and `.part` files are retained.

**Resuming an interrupted session:**
On startup, if FeedDownloader Pro detects episodes in **"Queued"** or **"In Progress"** status from the previous session in the database, it displays a notification: *"Found X pending downloads from the previous session. Would you like to resume them?"*. Upon confirmation, the batch resumes immediately.

---

## 6.7 Download Speed

The speed displayed in the bottom bar is the **aggregate sum** of all active threads. With 3 active threads each downloading at 2 MB/s, the total speed displayed is approximately 6 MB/s.

**Factors affecting speed:**
*   **Connection bandwidth:** The maximum available limit.
*   **Source server speed:** Many podcast hosting servers apply bandwidth limitations to contain costs. The speed of a single thread rarely exceeds 2–5 MB/s on these servers.
*   **Number of threads:** A greater number of threads compensates for the slowness of individual servers by downloading from multiple simultaneous connections.
*   **File size:** Average-sized files (20–80 MB, corresponding to 30–60 minute episodes) offer optimal efficiency, with a reduced relative connection overhead.

---

*Go to Chapter 7 for the configuration of NAS and network paths.*
