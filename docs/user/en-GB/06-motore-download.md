# Chapter 6: The download engine

## 6.1 How it is built

The engine works asynchronously and in parallel: instead of fetching one file at a time, it handles
several transfers together through a central queue.

Four parts are involved. The **queue** collects, in order, every episode waiting. The **download
workers** each take one episode from the queue and see it through, knowing nothing about the
others; how many work at once is up to you. The **database manager** records the state of every
transfer moment by moment. The **integrity check** calculates the SHA-256 checksum of each file as
it arrives and writes it to the archive.

---

## 6.2 How many downloads in parallel

This is the setting worth tuning first. Too few and archiving crawls; too many and you saturate the
connection, annoy the server or multiply the errors.

The default is **3**, a fair compromise on a domestic line.

| Situation | Parallel downloads |
|-----------|--------------------|
| Slow connection, or a server that throttles | 1 |
| Ordinary home line | 3 (default) |
| Fast fibre | 5 |
| NAS behind a slow network | 1 |

You change it in **Settings → Download → Parallel Downloads**, choosing between **1**, **3** and
**5**. The change applies immediately, including to the queue in progress.

*If the server objects.* Several hosting services limit simultaneous connections per IP address.
When `429 Too Many Requests` or `503 Service Unavailable` errors keep appearing, drop to one or
two. The retry mechanism handles the failures anyway, but taking the load off fixes the problem at
source.

---

## 6.3 Errors and retries

Across hundreds of files, some network errors are a certainty. The program does not press on
straight away: it waits, and the wait grows with each failure.

| Attempt | What happens |
|---------|--------------|
| After the first failure | waits 1 second and retries |
| After the second | waits 2 seconds and retries |
| After the third | the episode is declared in **error** |

If the server answers `429 Too Many Requests` and states a wait in the `Retry-After` header, the
program honours it up to a maximum of sixty seconds. Since the partial `.part` file survives from
one attempt to the next, the retry resumes from where it stopped rather than starting over.

Some errors do not deserve a second attempt, and the program recognises them:

*   **File does not exist** (`404 Not Found`): retrying will not conjure it up.
*   **Content is not audio**: the server answered with a web page instead of the file, which is
    typical of expired links that bounce to a courtesy page. The download is refused with the
    message *The server sent a web page, not audio*.
*   **File too large**: it exceeds the **Maximum File Size** you set (chapter 10).
*   **Disk full or access denied** on the destination folder.
*   **Address rejected by the security checks** against SSRF attacks.

At the end of a batch, **Retry failed** requeues every episode in error with a single click.

---

## 6.4 Stall detection

There is a case worse than an error: the transfer that neither finishes nor fails. The connection
stays technically open, the operating system reports nothing, but the bytes have stopped arriving.
With no defence, that download would hang there occupying a slot in the queue.

It happens mostly with servers under load that choke the bandwidth after the first bytes, with
routing problems along the way and with large files served by constrained distribution networks.

Every active transfer is therefore watched. If not a single byte arrives for **sixty seconds**, the
program closes the connection, **keeps the `.part` file** and counts what happened as a failed
attempt: the next attempt resumes from where it stopped. If the stall was temporary the matter
sorts itself out; if it repeats until the three attempts are used up, the episode ends in error.

---

## 6.5 `.part` files

During a transfer the content goes into a temporary file with a `.part` extension. The final name
arrives only once the transfer is complete and the size matches what the server declared. That way
a truncated audio file never appears in the destination folder wearing the proper extension.

The SHA-256 checksum is calculated straight afterwards, on the now-final file, and recorded in the
archive along with size, bitrate and sample rate.

**Resuming.** In the event of a pause, a transient error or an interruption, a small `.part.meta`
file stays alongside the `.part` holding the validator the server supplied (an ETag or
Last-Modified). On the next attempt the program asks only for the missing bytes, with an HTTP
`Range` request accompanied by `If-Range`: if the remote file has changed in the meantime, the
server says so and the download starts from zero. That is the guarantee against the worst risk of
resuming, namely gluing together pieces of two different files.

**Cleaning up.** Orphaned `.part` files left over from past sessions can be cleared from
**Settings → Advanced → Maintenance → Clean temporary files**; the function only works with
downloads stopped.

Partial files sit in the same folder as the completed ones. There is no point opening them in an
audio player: they are stumps, and the player will complain.

---

## 6.6 Pause, resume, stop

**Pause.** From the download panel you can suspend a single transfer with **Pause** on its row, or
the whole queue with **Pause** at the bottom of the panel: the label **Queue paused** reports the
state. Pausing keeps the partial files and the place in the queue; **Resume** carries the transfer
on from the exact point where it stopped.

**Stopping.** **Stop download** is a different matter: it closes the active transfers in an orderly
way, empties the queue and deletes the partial files. Whatever was already complete stays in the
archive; the interrupted episodes go back to showing as **NEW**.

**Closing the window.** With the × the program retreats into the notification area and carries on
downloading. The **Quit** entry in the tray menu, by contrast, closes everything and stops the
transfers; the `.part` files stay on disk, so requeuing those episodes in a later session resumes
from where we were.

---

## 6.7 Speed

Each row in the panel shows the speed of its own transfer. There is no aggregate total on screen:
to get a sense of the bandwidth in use, add up the active rows by eye.

Four factors determine it.

*   **Your line**, which remains the ceiling.
*   **The source server**, which is often the real bottleneck: many hosting services throttle
    bandwidth to contain costs, and a single transfer rarely exceeds 2–5 MB/s.
*   **The number of parallel downloads**, which offsets a slow server by using several connections
    together.
*   **File size**: files of 20–80 MB, meaning half-hour or hour-long episodes, are the most
    efficient, because the time spent opening the connection counts for little against the total.

---

*Chapter 7 covers paths on NAS devices and network drives.*
