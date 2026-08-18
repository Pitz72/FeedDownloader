# Chapter 11: Troubleshooting

## 11.1 How to use this chapter

Here are the problems that actually happen, described as they appear on screen rather than by their
names inside the program. For each one: why it happens and what can be done.

If your case is not listed, the project’s public releases page is the right place to report it,
giving the steps that reproduce it and the exact message that appears.

---

## Feeds and analysis

### Connection error or timeout while analysing a feed

*What you see:* you press **Analyze**, a few seconds pass and a network error appears. The list
stays empty.

The causes, in order of likelihood.

*   **The feed server is not answering.** Try opening the same address in a browser: if it will not
    open there either, the problem belongs to the podcast and the only move is to try later.
*   **Your connection is unstable.** Check that other sites respond.
*   **A firewall or corporate proxy is blocking you.** If the feed opens at home and not at the
    office, you have your answer.

The program gives up after fifteen seconds of silence: a deliberate timeout, so you are not left
staring at a frozen window.

### The feed is read but the list is empty

*   **The feed contains no episodes.** Open the address in a browser and look for `<item>` or
    `<entry>` tags. If they are not there, there is nothing to download.
*   **The format is off-standard.** The program reads RSS 2.0 and Atom 1.0 and forgives a good deal
    of sloppiness, but some proprietary platforms produce documents that cannot be recognised.
*   **You already have everything.** If the feed was worked through in the past, the episodes are
    there but carry the **ARCHIVED** tag. The **Downloaded** filter confirms it at a glance.

### I only see the latest episodes, not the historical catalogue

*Why:* the limit is imposed by the publisher, not by the program. Many platforms expose only the
last 50 or 100 instalments in the feed so as not to burden their own servers.

*What the program already does:* if the historical archive is published in linked pages following
the RFC 5005 standard, the program follows them by itself and reassembles the catalogue, up to a
maximum of twenty pages. The problem only remains when there is no pagination, or when the
catalogue exceeds that ceiling.

*What you can try:* looking for an alternative "full feed", which some platforms offer; recovering
old episodes from the podcast website; checking whether the platform accepts address parameters
along the lines of `?limit=0`.

---

## Downloads

### Many episodes end in error with "File not found on server"

*Why:* the episodes are still listed in the feed, but the audio files are gone. This happens often
with abandoned programmes or ones that moved elsewhere.

There is no way to download a file that does not exist. If the podcast is alive, though, and the
errors are numerous, it is worth telling whoever publishes it: sometimes it is a botched migration,
and it gets fixed.

Worth knowing: failed episodes **are not excluded** from later batches. They stay marked as pending
and a fresh **Download All** will try them again. That is deliberate, because a file can come back;
if they bother you, the date filter or manual selection keeps them out.

### Downloads are painfully slow

*   **The server throttles bandwidth.** This is the most common case. With servers that penalise
    multiple connections, dropping to a single parallel download sometimes improves matters.
*   **You are on Wi-Fi.** For long batches, cable makes the difference.
*   **The destination disk is slow**, typically a NAS over Wi-Fi or a USB 2.0 stick. Download
    locally first and move afterwards.
*   **That is your line.** A speed test settles it.

### An episode sticks at 99% and never finishes

*Why:* the server stopped sending data without closing the connection. Within sixty seconds the
stall watcher notices, closes the transfer and counts it as a failed attempt; the next attempt
resumes from where it stopped, thanks to the `.part` file.

If it repeats until the three attempts are used up, the episode ends in error. Usually that means
the file on the server is truncated or corrupted: you recognise it from the integrity check
message, namely that the size received does not match the size declared.

### I downloaded an `.mp3` that the player calls corrupted

*Why:* it should not happen, given the `.part` files and the size check. If it does, either the
file on the server was already damaged, or there was a write error on the disk.

What to do, in order:

1.  Open the episode detail panel with a click on the row and press **Re-download**.
2.  If the file arrives broken a second time, the problem is at source: check it by opening the
    file address directly in a browser.
3.  Run the archive health check (chapter 9): the SHA-256 verification lists every file whose
    content no longer matches what was recorded at download time.

From version 1.5.0 the program also refuses responses that are not audio: if the server sends a web
page instead of the file, the download fails with *The server sent a web page, not audio* rather
than saving something unusable. In the same way, a file over the ceiling set in **Maximum File
Size** is turned away with *File exceeds the configured size cap*.

### I need to suspend, not throw away

There is no need to stop everything for good: **Pause** in the download panel suspends the queue
while keeping the partial files, and **Resume** restarts the transfers from the exact point they
reached. The same applies to a single episode. **Stop download**, by contrast, deletes the
partials: it is the right choice only when you really do want to throw the work away.

At the end of a batch, **Retry failed** requeues every episode that went wrong.

---

## NAS and networking

### "Network path unreachable" but the NAS is working

1.  **Check the path character by character.** On some systems even capitals count
    (`\\MYNAS\podcast` is not `\\MYNAS\Podcast`).
2.  **Check the credentials.** Open `\\MYNAS\ShareName` in File Explorer: if it asks for the
    password, it is not stored in Windows Credential Manager. Enter it and tick the option to
    remember it.
3.  **Look at the firewall.** In *Windows Defender Firewall → Allowed apps* the program must be
    authorised.
4.  **Check the SMB version.** Older NAS devices speak only SMBv1, which Windows 11 disables by
    default. Better to update the NAS firmware than to re-enable an insecure protocol.

### Downloads to the NAS stop after a few minutes

*Why:* the NAS falls asleep mid-job. Certain domestic models watch only web traffic and ignore SMB
connections, so they believe themselves idle while they are receiving files.

The fix is to disable power saving temporarily from the NAS panel, or to drop to a single parallel
download: a continuous stream keeps the device awake better than bursts separated by pauses.

---

## General problems

### The interface responds sluggishly

*   **A very large archive.** With tens of thousands of episodes on record, some operations slow
    down.
*   **Too many parallel downloads on little memory.** Five transfers on a machine with less than
    4 GB make themselves felt: better one or three.
*   **The antivirus inspects every `.part`.** Many products scan every write to disk. Excluding the
    destination folder from real-time scanning fixes it.

### The program will not start, or closes immediately

1.  **Damaged database: automatic recovery.** If `feeddownloader.sqlite` turns out to be unreadable
    at startup, the program sets it aside, renaming it `feeddownloader.sqlite.corrupt-[date]`, and
    starts again with a new database. The application opens regardless.
2.  **Guided restore.** At the first launch after a recovery, that is with an empty database and a
    `.corrupt-*` backup present, the *A backup of a damaged database was found.* dialog appears
    with **Attempt restore** and **Ignore**. The restore recovers feeds, archive and history from
    the backup as far as they are readable: the audio files are not touched and the backup is not
    modified. A summary at the end says how much was saved.
3.  **Reinstall.** Uninstalling and reinstalling the latest version deletes neither the database nor
    the settings.

### I have lost the database: can I recover anything?

*   **If you have a backup**, just put `feeddownloader.sqlite` back in the data folder with the
    program closed (the path is in chapter 2).
*   **If the database became corrupted**, look for `feeddownloader.sqlite.corrupt-[date]` files in
    the same folder: with the current database empty, the program offers the guided restore at
    startup.
*   **If you have none of that**, the audio files are safe on disk regardless: what you lost is the
    memory, not the archive. Re-analysing the feeds gets you going again, bearing in mind that
    checksum repair will not help in this case, because the checksums lived in the very database
    that is gone.
*   **To avoid a repeat**, copy `feeddownloader.sqlite` elsewhere now and then and export the feed
    list to OPML (chapter 5). Before a migration or a major update it is time well spent.

---

*This is the end of the Runtime FeedDownloader Pro manual. For anything these pages do not cover,
the reference is the project’s public releases page.*
