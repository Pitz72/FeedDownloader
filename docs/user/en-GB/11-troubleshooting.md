# Chapter 11: Troubleshooting

## 11.1 How to Use This Chapter

This chapter collects the most common problems reported by users, with the most likely causes and step-by-step solutions. Each problem is described in the way it manifests in the interface, not in internal technical terms.

If the problem is not in this list, contact support describing the steps that reproduce it and the error message displayed.

---

## Feed and Analysis Problems

---

### Problem: "Connection error" or "Timeout" during feed analysis

**How it manifests:** You click **"Analyse"** and after a few seconds an error message appears indicating a timeout or connection failure. The list remains empty.

**Likely causes and solutions:**

*   **The feed server is unavailable.** Open the feed URL in the browser. If the browser returns an error (page not found, "This site can't be reached"), the problem lies with the podcast server: nothing can be done except retrying later.
*   **The internet connection is unavailable or unstable.** Verify that other websites are reachable. If the connection is unstable, wait for it to stabilise before retrying.
*   **A corporate firewall or proxy is blocking the request.** In corporate environments, traffic to certain hosts may be blocked. Try from a home network to verify whether the problem is specific to the corporate network.

---

### Problem: The feed is analysed but the episode list is empty

**How it manifests:** The analysis completes without errors, but the episode list shows no items (or shows 0 episodes).

**Likely causes and solutions:**

*   **The feed contains no episodes.** Open the URL in the browser and verify that the XML document contains `<item>` or `<entry>` tags. If they are not present, the podcast has not yet published any episodes.
*   **The feed uses a non-standard format.** FeedDownloader Pro supports RSS 2.0 and Atom 1.0. Some feeds produced by proprietary platforms may have an unconventional structure. In this case, the software displays a specific warning in the analysis message.
*   **All episodes are already in the database.** If the feed has been analysed previously, episodes appear with the **"ARCHIVED"** tag. Scroll through the list and check for this indicator, or use the **"Downloaded"** status filter.

---

### Problem: The feed shows only the last N episodes and not the full historical catalogue

**How it manifests:** You analyse a podcast with hundreds of known episodes, but the list shows only 50 or 100.

**Cause:** This limit is imposed by the podcast publisher or its hosting platform, not by FeedDownloader Pro. Many platforms limit the RSS feed to the last 50–100 episodes to reduce the load on their servers.

**What the software already does:** If the platform publishes the historical archive in multiple linked pages following the **RFC 5005** standard (`rel="next"` links), FeedDownloader Pro follows them automatically and reassembles the entire catalogue. The limit only arises when the feed offers no pagination at all.

**Possible alternatives:**
*   Check whether the podcast offers a "full feed" as an alternative URL (some platforms make this available).
*   Consult the podcast's website or distribution platform (Spotify, Apple Podcasts) to retrieve links for older episodes.
*   Some platforms accept parameters in the URL to request the complete feed (e.g. `?limit=0` or `?paged=all`): check the documentation of the specific platform.

---

## Download Problems

---

### Problem: Many episodes show "Error 404" status

**How it manifests:** After a batch download, numerous episodes show **"Error"** status with the message `404 Not Found`.

**Cause:** The episodes are still present in the RSS feed (in the XML document), but the audio files they point to have been removed from the server. This situation is common with abandoned podcasts or those migrated to other platforms.

**What can be done:**
*   It is not possible to download files that no longer exist on the server.
*   If this is an active podcast and the errors seem excessive, contact the podcast publisher: it may be a temporary migration or a resolvable technical issue.
*   Episodes with 404 errors are automatically excluded from subsequent batches. It is not necessary to remove them from the list.

---

### Problem: Downloads start but proceed very slowly

**How it manifests:** The progress bar moves, but the speed is very low (a few KB/s) relative to the available bandwidth.

**Likely causes and solutions:**

*   **The podcast server applies bandwidth limitations.** Many hosting servers impose throttling to contain costs. Reducing threads to 1 may improve the situation with servers that penalise multiple connections.
*   **The Wi-Fi connection is unstable.** For intensive batch downloads, use a wired (Ethernet) connection.
*   **The destination drive is slow.** Writing to a NAS over a Wi-Fi connection or to USB 2.0 devices can be the bottleneck. Consider downloading to a fast local drive first.
*   **The internet connection is genuinely limited.** Check the actual download speed with a speed test. If the result is below expectations, the problem lies with the connection.

---

### Problem: An episode remains stuck at a high percentage and never completes

**How it manifests:** A single download shows a high percentage (90%, 95%, 99%) that never reaches 100% and does not update.

**Cause:** The server sent almost all of the file but interrupted the transfer before completion. The stall detection will detect this condition within 60 seconds of the last data received and will automatically restart the download.

**If the problem persists after multiple attempts:** The file on the server may be corrupted or truncated. After the maximum number of attempts, the episode will be marked as **"Error"** with a message indicating a discrepancy between the declared size and the received size.

---

### Problem: The software downloaded an `.mp3` file but the audio player reports it as corrupted

**How it manifests:** The download shows as completed (green status), but opening the file with an audio player returns an error or the file does not play.

**Cause:** This should not occur thanks to the `.part` file mechanism and size verification. If it does happen, the original file on the server may already be corrupted (a publisher issue), or a disk write error occurred.

**Solution:**
1.  Hover over the episode in the list and click **"Re-download"** (also available in the Detail Panel).
2.  If the re-downloaded file is still corrupted, the problem lies with the source file on the podcast server. Verify this by opening the file URL directly in the browser.
3.  Run a Health Check (see Chapter 9): the SHA-256 verification flags every file in the archive whose content no longer matches what was recorded at download time.

*Note:* Since v1.5.0 the software also rejects non-audio enclosures: if the server sends a web page instead of the file, the download fails with the message *"The server sent a web page, not audio"* instead of saving an unusable file.

---

## NAS and Network Problems

---

### Problem: "Network path not reachable" even though the NAS is switched on

**How it manifests:** The software shows the path not reachable warning, but the NAS is accessible normally from the file manager.

**Solutions to check in order:**

1.  **Verify that the path is exact.** A difference in capitalisation (`\\MYNAS\podcast` vs `\\MYNAS\Podcast`) can cause an error on some systems.
2.  **Are the SMB credentials stored?** Open File Explorer and attempt to access `\\MYNAS\ShareName` manually. If a password is requested, the credentials are not saved in the Windows Credential Manager. Enter them and tick **"Remember"**.
3.  **Is the Windows Firewall blocking FeedDownloader Pro?** Go to `Control Panel → Windows Defender Firewall → Allowed apps` and verify that FeedDownloader Pro is listed with access permitted.
4.  **Does the NAS support SMBv2/3?** Some older NAS devices support only SMBv1, which is disabled by default on Windows 11. Update the NAS firmware or enable SMBv1 from the NAS administration panel.

---

### Problem: Downloads to NAS stop after a few minutes

**How it manifests:** The batch starts normally, downloads a few episodes, then stalls with write errors or a path not reachable error.

**Cause:** The NAS enters sleep mode during the download. Some consumer NAS devices have a power-saving function that can activate even during active transfers if the device is configured to monitor only web traffic, ignoring SMB connections.

**Solutions:**
*   Temporarily disable sleep mode from the NAS administration panel during batch downloads.
*   Reduce the number of threads to 1: a continuous write stream prevents sleep activation more effectively than intensive bursts with intermediate pauses.

---

## General Problems

---

### Problem: The interface responds with a delay

**How it manifests:** Clicks take 1–2 seconds to respond, scrolling through the list is jerky, the programme appears slow.

**Likely causes:**

*   **Large database.** With tens of thousands of episodes in the database, some operations may slow down. Consider using **"Reset Download History"** (**Settings → Advanced**) only if the archive contains many episodes in error status or data that you do not intend to recover.
*   **High number of threads on hardware with limited RAM.** With 5 active threads on a system with less than 4 GB of RAM, the process may be slow. Reduce threads to 1 or 3.
*   **Antivirus scanning `.part` files in real time.** Some security software intercepts every disk write operation, slowing downloads. Add the destination folder to the antivirus exclusions.

---

### Problem: The software does not start or closes immediately upon opening

**How it manifests:** The programme is started, the process briefly appears in the Task Manager but then disappears without the interface being displayed.

**Solutions:**

1.  **Corrupted database — automatic recovery.** If the `feeddownloader.sqlite` file turns out to be corrupted at startup, the software automatically sets it aside by renaming it `feeddownloader.sqlite.corrupt-[date]` and starts with a fresh database: the application launches anyway.
2.  **Guided restore.** On the first launch after a recovery (current database empty and a `.corrupt-*` backup present), the software shows the dialogue *"A backup of a damaged database was found."* with the **"Attempt restore"** and **"Ignore"** buttons. Choosing to restore recovers feeds, archive and history from the backup as far as possible; audio files are untouched and the backup is not modified. A summary then reports how many feeds and episodes were recovered.
3.  **Reinstall the software.** Uninstall FeedDownloader Pro and install the most recent version. The database and settings are not deleted by the uninstallation.

---

### Problem: I have lost my database data — is it possible to recover it?

**How it manifests:** The database has been accidentally deleted, is corrupted, or a reset was performed without a prior backup.

**Recovery possibilities:**

*   **With a backup available:** Copy the backup `feeddownloader.sqlite` file to the application's user data folder, with the programme closed (see Chapter 2 for the user data folder path).
*   **After a corruption:** Check for `feeddownloader.sqlite.corrupt-[date]` files in the user data folder: if the current database is empty, the software automatically offers the guided restore at startup (see the previous problem).
*   **Without a backup:** The audio files on disk are still present: only the software's memory has been lost. The **"Repair archive (checksum search)"** function cannot help here (the hashes were in the lost database), but missing episodes can be re-downloaded or re-catalogued by analysing the feeds again.
*   **Prevention:** Periodically make a manual copy of the `feeddownloader.sqlite` file to a safe location, or export the feed list in OPML format (see Chapter 5) as a configuration backup. It is advisable to perform this backup before any migration or software update.

---

*This is the final chapter of the Runtime FeedDownloader Pro Advanced User Manual.*

*For assistance not covered by this manual, refer to the official releases page or contact the technical support of Ecosystem Runtime | Digital Core.*

---

*Ecosystem Runtime | Digital Core — Tools built to last.*
