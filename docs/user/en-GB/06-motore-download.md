# Chapter 6: The download engine

## 6.1 How it is built

The engine works asynchronously and in parallel: instead of downloading one file at a time, it
handles several transfers together through a central queue.

There are four parts. The **queue** collects every waiting episode in order, and is saved in the
database until each download ends. The **download workers** each take one episode from the queue and
see it through, knowing nothing about the others; how many work together is set by a preference.
The **database manager** records the state of every transfer. The **integrity check** verifies the
size of each newly arrived file, computes its SHA-256 fingerprint and writes it to the archive.

Every way in goes through the same queue: the Feed view’s main button, a single episode’s download,
automatic archiving, resuming interrupted downloads and **Retry**.

---

## 6.2 How many parallel downloads

This is the setting to tune first. Too few and archiving drags on; too many and the connection
saturates, the server gets overloaded or errors multiply.

The default is **3**, a good compromise on a home connection.

| Situation | Parallel downloads |
|-----------|--------------------|
| Slow connection, or a server that limits connections | 1–2 |
| Normal home connection | 3 (default) |
| Fast fibre, robust servers | 5–6 |
| Very fast fibre, many podcasts on different servers | up to 10 |
| NAS reached over a slow network | 1–2 |

Change it from **Settings → Downloads → Parallel downloads**, choosing a value from **1** to **10**.
The change applies at once, even to the queue in progress.

*If the server complains.* Many hosting services limit simultaneous connections per IP address. When
errors such as *The server refused the request.* (code `HTTP_429`) or *The server had a problem: try
again later.* (`HTTP_503`) keep appearing, drop to one or two. The retry mechanism handles the
failures anyway, but reducing the load solves the problem at its source.

---

## 6.3 Errors and retries

Across hundreds of files, some network errors are certain. The program does not insist straight
away: it waits, and the wait doubles with each failure. Every episode gets **five attempts**.

| Attempt | What happens if it fails |
|---------|--------------------------|
| First | waits 1 second and tries again |
| Second | waits 2 seconds and tries again |
| Third | waits 4 seconds and tries again |
| Fourth | waits 8 seconds and tries again |
| Fifth | the episode moves to the **failed** ones |

If the server answers `429 Too Many Requests` with a waiting time in the `Retry-After` header, the
program honours it, up to sixty seconds. Since the partial `.part` file survives between attempts,
the retry resumes from where it stopped rather than from scratch.

The initial connection has thirty seconds to answer; beyond that, the attempt counts as failed
(*The server didn’t answer in time.*).

Some errors do not deserve a second attempt, and the program recognises them:

* **File not found** (`404`): retrying will not make it appear. Message: *The file no longer exists
  on the server (404).*
* **Content that is not audio**: the server sent a web page instead of the file, typical of expired
  links that bounce to a placeholder page. Message: *The server answered with a web page instead of
  audio.*
* **File too large**: beyond the **Largest file size** you set (section 6.9).
* **Disk full** or **folder not writable**.
* **Address rejected by the safety checks** against SSRF attacks.
* **Cancellation** by the user.

A file that arrives with a size different from the one the server declared (*The file received is
incomplete.*) is discarded together with its `.part` and downloaded again from scratch, within the
five attempts.

Failed episodes appear in the **Downloads** view, **Failed** section, with their reason. **Retry**
on a row, or **Retry all (N)**, puts them back in the queue with the same parameters.

---

## 6.4 Stall detection

There is something worse than an error: the transfer that neither finishes nor fails. The connection
stays technically open, the operating system reports nothing, but the bytes have stopped arriving.
Without a defence, that download would hang there, holding a place in the queue.

It happens mostly with overloaded servers that throttle bandwidth after the first bytes, with
routing problems along the way and with large files served by limited distribution networks.

So every active transfer is watched. If not a single byte arrives for **sixty seconds**, the program
closes the connection, **keeps the `.part` file** and counts it as a failed attempt: the next
attempt resumes from where it stopped. If the stall was momentary, it sorts itself out; if it keeps
happening until the attempts run out, the episode ends up among the failed ones with the message
*The transfer stalled for over a minute.*

---

## 6.5 `.part` files and resuming

During the transfer, content goes into a temporary file with the `.part` extension. The final name
comes only when the transfer is complete and the size matches what the server declared. So a
truncated audio file with the proper extension never appears in the download folder.

Straight afterwards, in this order, the program writes any ID3 tags (chapter 8), computes the
SHA-256 fingerprint of the now-final file and records it in the archive together with size, bitrate
and sample rate. The fingerprint therefore describes the file exactly as it is on disk.

**Resuming.** After a pause, a temporary error or an interruption, a small `.part.meta` file stays
next to the `.part`, holding the “validator” the server provided (ETag or Last-Modified). On the
next attempt the program asks only for the missing bytes, with an HTTP `Range` request accompanied
by `If-Range`: if the remote file has changed in the meantime, the server says so and the download
starts again from zero. This guards against the worst risk of resuming — splicing together pieces of
two different files. If the server provides no validator, a resume cannot be verified and the
download starts again from zero.

**Cleaning up.** Orphaned `.part` files left by past sessions are removed from **Settings → Archive →
Clean temporary files**. It works only with the queue empty and searches every folder the archive
uses.

Partial files sit in the same folder as the completed ones. There is no point opening them in an
audio player: they are fragments, and the player will reject them.

---

## 6.6 Pausing, resuming, stopping

**Pause.** From the **Downloads** view you can suspend a single transfer, with the pause button on
its row, or the whole queue, with **Pause** in the header. The top bar shows **Queue paused**. Pausing
keeps the partial files and the place in the queue; **Resume** carries the transfer on from the exact
point where it stopped.

**Cancelling a download.** The × on a queue row, or next to a queued episode in the feed view, takes
that episode out of the queue and deletes its partial file. The episode goes back to the ones to
download.

**Stopping.** **Stop and clear the queue** is something else: after the *Stop every download?*
confirmation it closes active transfers, empties the queue and deletes partial files. Whatever was
already complete stays in the archive; the interrupted episodes go back to the ones to download. A
cleared queue is not offered again at the next launch.

**Closing the window.** With the × the program retreats to the notification area and keeps
downloading. The **Quit** entry of the icon’s menu, on the other hand, closes everything and stops
transfers: the `.part` files stay on disk and the queue stays saved, so on restart the downloads
pick up where they were (section 6.8).

---

## 6.7 Automatic pause when offline

When the connection drops, the program pauses the queue by itself. The top bar shows **Offline**,
and a notice appears at the top of the main area: *You are offline: the queue is paused and restarts
on its own when the connection is back.* Partial files stay on disk.

When the network returns, the queue restarts by itself, from where it stopped, and a few seconds
later the program checks the feeds for episodes published in the meantime.

Without this pause, a network drop would turn a batch into a shower of errors in under a minute,
because every episode would burn its attempts for nothing.

A pause you chose takes precedence: if you had already paused the queue by hand, the network
returning does not restart it.

---

## 6.8 A queue that survives closing

Every download accepted into the queue is recorded in the database and removed only when it ends,
successfully or not. If the program closes with downloads still queued — quitting with **Quit**, the
computer shutting down or a sudden crash — on restart the **Downloads** view shows the *Downloads
interrupted when the app last closed* panel, with the number of downloads and the podcasts they
belong to.

* **Resume** puts them back in the queue; thanks to the `.part` files, half-finished transfers pick
  up where they stopped.
* **Discard** forgets them. The partial files stay on disk until temporary files are cleaned.

The program never resumes the queue by itself: the network, the folder or your intentions may have
changed in the meantime. Episodes that turn out to be archived already are not offered again.

---

## 6.9 Bandwidth limit and largest file size

Two settings in **Settings → Downloads**, section **Transfer**, govern how much the engine may take.

**Bandwidth limit (KB/s).** A single ceiling, **shared by all downloads together**: with a 500 KB/s
limit, three parallel downloads share 500 KB/s rather than using 500 each. `0` means no limit and is
the default. To give an idea, `500` keeps usage around 4 Mbps. The change applies at once, even to
running downloads.

**Largest file size (MB).** Refuses files bigger than the value given; `0` means no limit. It guards
against anomalies: sizes declared by mistake, or servers that send something else entirely instead
of the audio. When the server declares the size, the refusal comes before a single byte is written;
when it does not, the transfer is stopped as soon as it passes the ceiling. A file over the limit is
a permanent error, with no further attempts: *The file exceeds the size limit you set.*

---

## 6.10 Speed

Each queue row shows the speed of its own transfer and the time left. The bar under the Downloads
view header shows the run’s progress in number of files instead.

Four factors decide the speed.

* **Your line**, which remains the ceiling.
* **The origin server**, often the real bottleneck: many hosting services cap bandwidth to keep
  costs down, and a single transfer rarely goes beyond 2–5 MB/s.
* **The number of parallel downloads**, which makes up for a slow server by using several
  connections at once.
* **File size**: 20–80 MB files, that is half-hour or one-hour episodes, are the most efficient,
  because the time spent opening the connection weighs little on the total.

---

## 6.11 Disk space

Before queuing several episodes, the program checks the free space on the download folder’s disk and
compares it with the estimate (chapter 4, section 4.7):

* below 200 MB free, it starts nothing;
* if the free space is less than one and a fifth times the estimate, the confirmation says so in
  yellow;
* during the batch, a file that no longer fits stops with *Disk full.* and no further attempts, and
  the others carry on while there is room.

Once space is freed, **Retry all** puts the stopped episodes back in the queue.

---

*Chapter 7 deals with NAS and network-drive paths.*
