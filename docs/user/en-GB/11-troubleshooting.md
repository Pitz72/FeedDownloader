# Chapter 11: Troubleshooting

## 11.1 How to use this chapter

Here are the problems that actually happen, described as they appear on screen rather than by their
names inside the program. For each one: why it happens and what can be done.

If your case is not listed, the project’s public page is the right place to report it, giving the
steps that reproduce it and the exact message that appears.

---

## 11.2 Feeds and analysis

### Analysis error messages

When a feed cannot be read, one of these messages appears under the **Add a feed** field (or in a
notice, when you open a feed from the library).

| Message | What it means |
|---------|---------------|
| *The address leads to a web page, not to an RSS feed.* | The address is the website’s, not the feed’s: look for the RSS link on the page (chapter 4, section 4.2). |
| *The feed no longer exists at this address (error 404).* | The feed has moved or been removed. Look for the new address on the podcast’s website. |
| *The server refused the request: the feed may be private.* | The server asks for credentials or blocks access (errors 401 and 403). |
| *The server is not answering. Check the connection.* | No network, server down or no answer within fifteen seconds. |
| *The address is not valid.* | A typo, extra spaces or characters, or a protocol other than HTTP or HTTPS. |
| *Local-network addresses are not allowed.* | The address points to the local network and is blocked by the safety checks (chapter 10, section 10.8). |
| *This feed was just requested: try again in a few seconds.* | The same address was requested less than three seconds earlier. Just wait. |
| *The feed could not be read.* | Any other case: a malformed document or an unrecognised format. |

The likeliest causes, in order:

* **The feed server is not answering.** Try opening the same address in a browser: if it will not
  open there either, the problem belongs to the podcast and the only move is to try later.
* **Your connection is unstable.** Check that other sites respond.
* **A firewall or corporate proxy is blocking the request.** If the feed opens at home and not at
  the office, that is the cause.

### The feed is read but the list is empty

* **The feed has no episodes.** Open the address in a browser and look for `<item>` or `<entry>`
  tags. If there are none, there is nothing to download (*This feed has no episodes.*).
* **The filters hide everything.** With *No episode matches the filters.* just press **Clear
  filters**.
* **The format is non-standard.** The program reads RSS 2.0 and Atom 1.0 and tolerates plenty of
  sloppiness, but some proprietary platforms produce unrecognisable documents.

### The main button is disabled

The **Download the N missing** (or **filtered**) button stays disabled in two cases: there is no
network, or nothing among the episodes shown is left to download, because they are all archived or
already queued. The **Archived** filter confirms it at a glance.

### I only see the latest episodes, not the back catalogue

*Why:* the limit is set by the publisher, not the program. Many platforms expose only the last 50 or
100 episodes in the feed to spare their own servers.

*What the program already does:* if the back catalogue is published in linked pages following the
RFC 5005 standard, the program follows them by itself and rebuilds the catalogue, up to twenty pages.
The problem remains only when there is no paging, or when the catalogue goes beyond that cap.

*What you can try:* look for an alternative “full feed”, which some platforms offer; fetch the old
episodes from the podcast’s website; check whether the platform accepts parameters in the address
such as `?limit=0`.

### A feed stays “Not checked yet”

This is the state of feeds imported from OPML or never read. Right after an import the program checks
every feed; if one stays in this state, it did not answer. Opening it from the sidebar shows the
reason.

---

## 11.3 Downloads

### Download error messages

In the **Downloads** view, **Failed** section, every failed episode shows a message and, in brackets,
the technical code.

| Message | Code | What it means |
|---------|------|---------------|
| *The file no longer exists on the server (404).* | `EPISODE_NOT_FOUND` | The publisher has removed the file. No further attempts. |
| *The transfer stalled for over a minute.* | `DOWNLOAD_STALLED` | Sixty seconds without data, repeated until the attempts ran out. |
| *The server didn’t answer in time.* | `DOWNLOAD_TIMEOUT` | No answer to the connection within thirty seconds. |
| *Disk full.* | `DISK_FULL` | There is no room left in the download folder. |
| *The file received is incomplete.* | `INTEGRITY_CHECK_FAILED` | The size received does not match the declared one, on every attempt. |
| *The download folder is not writable.* | `PERMISSION_DENIED` | Insufficient permissions, a protected disk, a file locked by another program. |
| *The server answered with a web page instead of audio.* | `INVALID_CONTENT_TYPE` | An expired link or a placeholder page in place of the file. |
| *The file exceeds the size limit you set.* | `FILE_TOO_LARGE` | The file is beyond the **Largest file size**. |
| *The address points to the local network: blocked for safety.* | `URL_PRIVATE_IP` and similar | Blocked by the anti-SSRF checks. |
| *The server refused the request.* | `HTTP_4xx` | Access denied, too many requests (`HTTP_429`) or another client error. |
| *The server had a problem: try again later.* | `HTTP_5xx` | An error on the origin server. |
| *Network error.* | various | Dropped connection, server name not resolved, connection refused. |
| *Unexpected error.* | various | Any other case. |

**Retry** on a row, or **Retry all (N)**, puts the episodes back in the queue with the same
parameters.

### Many episodes fail with “The file no longer exists on the server (404).”

*Why:* the episodes are still listed in the feed, but the audio files are gone. It happens a lot with
abandoned or migrated programmes.

There is no way to download a file that does not exist. But if the podcast is active and the errors
are many, it is worth telling the publisher: sometimes it is a botched migration, and it gets fixed.

Worth knowing: failed episodes are **not excluded** from later batches. They stay **To download** and
a new **Download the N missing** will try them again. This is deliberate, because a file can become
available again; if they get in the way, a period filter or a manual selection keeps them out.

### Downloads are very slow

* **The server caps bandwidth.** The most common case. With servers that penalise multiple
  connections, dropping to one or two parallel downloads sometimes helps.
* **A bandwidth limit is on.** **Settings → Downloads → Bandwidth limit (KB/s)** applies to all
  downloads together: with three parallel downloads and 500 KB/s, each gets about a third.
* **You are on Wi-Fi.** For long batches a cable is steadier.
* **The destination disk is slow**, typically a NAS over Wi-Fi or a USB 2.0 stick. Download locally
  first and move later with **Move the archive**.
* **That is your line.** A speed test settles it.

### An episode sits at 99% and never finishes

*Why:* the server stopped sending data without closing the connection. Within sixty seconds the stall
watch notices, closes the transfer and counts it as a failed attempt; the next attempt resumes from
where it stopped thanks to the `.part` file.

If it keeps happening until the five attempts run out, the episode ends up among the failed ones. It
usually means the file on the server is truncated or corrupt: you can tell from the message *The file
received is incomplete.*

### The queue stopped by itself

Three possibilities, which the top bar tells apart:

* **Offline**: the connection dropped and the queue paused by itself. It restarts by itself when the
  network is back (chapter 6, section 6.7).
* **Queue paused**: the pause was requested by hand. The network returning does not lift it: you
  need **Resume** in the Downloads view.
* **Queue empty** with some failed: the remaining downloads failed. The reason is in the **Failed**
  section.

### After a restart the queue is gone

It is not gone: it is saved. Open the **Downloads** view and the *Downloads interrupted when the app
last closed* panel appears, with **Resume** and **Discard** (chapter 6, section 6.8). The program does
not resume it by itself.

### A downloaded file is reported as corrupt by the player

*Why:* it should not happen, given the `.part` files, the size check and the refusal of content that
is not audio. If it does, either the file on the server was already damaged, or there was a write
error on the disk.

What to do, in order:

1. Open the episode details by clicking its title and press **Download again**.
2. If the file arrives broken a second time, the problem is at the source: check by opening the file
   address (**Copy audio** in the details) directly in a browser.
3. Run a **Full** archive check (chapter 9, section 9.5): it lists every file whose content no longer
   matches what was recorded at download.

### You need to pause without losing the work done

There is no need to stop everything for good: **Pause**, in the Downloads view, suspends the queue
while keeping the partial files, and **Resume** restarts the transfers from the exact point they had
reached. It works for a single episode too. **Stop and clear the queue**, on the other hand, deletes
the partials: it is the right choice only when you really want to throw the work away.

---

## 11.4 Archive and verification

### The full check reports every MP3 as different from the original

*Why:* those files were downloaded with a version up to 1.5.x with ID3 tags on. Those versions
computed the fingerprint before writing the tags, so the recorded fingerprint does not match the
final file.

*What to do:* spot-check that the files play correctly, then press **Accept the current files as
reference** in the verification window (chapter 9, section 9.5). With 1.6.0 the problem does not come
back.

### “The file is no longer where it was saved.”

It appears when you press **Show in folder** on an episode whose file is gone: it was moved, renamed
or deleted outside the program. The program at least opens the podcast’s folder, if it exists.
Archive verification, with **Find moved files**, finds files renamed or moved into another of the
known folders; the truly lost ones can be marked as not downloaded.

### “The folder will be created with the first download.”

It appears when you press **Open folder** on a feed with nothing downloaded yet: the podcast’s
subfolder does not exist yet. It is not an error.

### Files are missing after changing folder

With 1.6.0, changing folder does not make the existing archive go missing, because every episode
remembers its own folder (chapter 9, section 9.8). If files are missing, they were moved by hand to a
place the program does not know. Two remedies:

* set the folder they are in now as the download folder, with **New downloads only**: the program
  also looks there;
* or put them back in their original place.

A quick check confirms the result.

---

## 11.5 NAS and network

### “The network folder is not answering.” but the NAS works

1. **Check the path character by character.** On some systems case matters too (`\\MYNAS\podcast`
   is not `\\MYNAS\Podcast`).
2. **Check the credentials.** Open `\\MYNAS\ShareName` in File Explorer: if it asks for the password,
   it is not stored in Windows Credential Manager. Enter it and tick the option to remember it.
3. **Check the firewall.** In *Windows Defender Firewall → Allowed apps* the program must be
   authorised.
4. **Check the SMB version.** Older NAS units only speak SMBv1, which Windows 11 disables by default.
   Updating the NAS firmware is better than re-enabling an insecure protocol.

### Downloads to the NAS stop after a few minutes

*Why:* the NAS goes into standby while working. Some home models only watch web traffic and ignore
SMB connections, so they think they are idle while receiving files.

Fix it by temporarily turning off power saving in the NAS panel, or by dropping to a single parallel
download: a continuous stream keeps the device awake better than bursts separated by pauses.

---

## 11.6 General problems

### The interface is too small, too large or shows tabs instead of panels

Adjust the interface size in **Settings → Accessibility → Size**, or with **Ctrl +**, **Ctrl −** and
**Ctrl 0**. With the interface heavily enlarged, or in a narrow window, side panels become tabs or
windows (chapter 3, section 3.14): widen the window, or reduce the size, and they sit side by side
again.

### The interface responds slowly

* **A very large archive.** With tens of thousands of recorded episodes some operations slow down.
* **Too many parallel downloads on little memory.** Many transfers on a machine with less than 4 GB
  are noticeable: three or fewer is better.
* **The antivirus inspects every `.part`.** Many products scan every write to disk. Excluding the
  download folder from real-time scanning fixes it.

### The notification-area icon is missing

On Linux with GNOME you need the AppIndicator extension. Without a notification area the program
cannot shrink to an icon, and closing the window quits it: the queue is still saved and resumes on
restart.

### The program will not start, or closes at once

1. **Damaged database: automatic recovery.** If `feeddownloader.sqlite` is unreadable at launch, the
   program sets it aside, renaming it `feeddownloader.sqlite.corrupt-[date]`, and starts with a new
   database. The application opens regardless.
2. **Guided restore.** On the first launch after a recovery — with the database empty and a
   `.corrupt-*` backup present — the *A backup of a damaged database was found.* window appears, with
   **Attempt restore** and **Ignore**. The restore recovers feeds, archive and history from the
   backup as far as they are readable: audio files are not touched and the backup is not modified. At
   the end a summary says how much was saved.
3. **Reinstall.** Uninstalling and reinstalling the latest version deletes neither the database nor
   the settings.

### The database is lost: can anything be recovered?

* **With a backup**, just put `feeddownloader.sqlite` back in the data folder with the program closed
  (the path is in chapter 2, section 2.2).
* **If the database became corrupt**, look for `feeddownloader.sqlite.corrupt-[date]` files in the
  same folder: with the current database empty, the program offers the guided restore by itself at
  launch.
* **With neither**, the audio files are still safe on disk: the memory is lost, not the archive.
  Start again by adding the feeds; the metadata next to the files, if it was on, keeps every
  episode’s title, date and fingerprint. The search for moved files does not help here, because the
  reference fingerprints were in the very database that was lost.
* **To avoid it**, copy `feeddownloader.sqlite` elsewhere from time to time and export the feed list
  to OPML (chapter 5, section 5.6). Before a migration or a major update it is time well spent.

---

*This is the end of the Runtime FeedDownloader Pro manual. For anything these pages do not cover,
the reference is the project’s public page.*
