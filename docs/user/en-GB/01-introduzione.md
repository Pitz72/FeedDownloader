# Chapter 1: Introduction and philosophy

## 1.1 What is Runtime FeedDownloader Pro?

It helps to start from the problem the software solves.

Thousands of podcast episodes are published and listened to every day. Over time a fair share of
that material vanishes: the presenter stops paying for hosting, the distribution platform closes,
the server holding the audio files is switched off. An episode you heard three years ago may now be
gone for good — not because anyone deleted it deliberately, but because nobody kept a copy.

Runtime FeedDownloader Pro exists for that reason. It is neither a player nor an aggregator: it is
an application for the systematic preservation of audio published through RSS feeds. It is meant
for people who treat sound as a document, and therefore file it with the same care they would give
a text or a photograph: archivists, newsrooms, radio stations, researchers, methodical listeners.

---

## 1.2 Who it is for

Four typical ways of using it.

* **The archivist** wants to pull down the whole catalogue of a long-running podcast before it
  disappears. What they need is a system that remembers what it already has, never duplicates
  anything and certifies the integrity of every file.
* **The radio producer** keeps the library on a shared NAS. They need a tool that works on network
  paths without seizing up, files things predictably and produces CSV inventories for the rest of
  the team.
* **The publisher** keeps a local copy of the network’s podcasts, exports metadata to the editorial
  system and watches the state of the archive over time.
* **The listener** wants their podcasts on disk, in order, without depending on a connection or
  ending up with truncated files.

---

## 1.3 The database-first philosophy

What sets FeedDownloader Pro apart from a generic downloader is where the truth lives.

Almost every download tool reasons like this: look at the files on disk, compare them with the RSS
feed, download whatever is missing. The weakness is obvious: the disk is not a reliable source.
Files get moved, renamed, corrupted, deleted by mistake. Move the podcast folder from `C:\Podcasts`
to `D:\Archive` and the tool loses every reference — then downloads the whole catalogue again.

FeedDownloader Pro keeps the truth elsewhere. At the centre of every operation is a SQLite database
that records each episode it has met or downloaded: the source address, the file name, the folder
it was saved in, the download date, the SHA-256 fingerprint of its content and its audio metadata.
The database is the software’s memory, and it stays accurate even when the files move.

Five practical consequences follow.

1. **No duplicates.** Check the same feed ten times and the episodes already recorded never return
   to the ones to download.
2. **Every file knows where it is.** The program remembers each episode’s folder: changing the
   download folder does not make the archive you have already built go “missing”.
3. **Resilience to moves.** The archive can relocate to another disk or a NAS without losing its
   history.
4. **Persistent state.** If the program closes, or crashes, in the middle of a 300-episode batch,
   the history is intact when it reopens and the downloads still queued are offered for resuming.
5. **An audit trail.** Every downloaded file carries its date, its source address and a
   cryptographic fingerprint.

---

## 1.4 Three underlying technical choices

Beyond the database-first approach, the program rests on three decisions you can see directly in
use.

### Network resilience

Downloading hundreds of audio files from the internet fails often, and in many ways. Servers get
overloaded, connections drop, transfers break off halfway. The software tackles this on four
fronts.

* **Retries with growing waits.** When a download fails for a temporary reason, the program does
  not retry at once: it waits one second, then two, then four, then eight. There are five attempts
  in all. If the server explicitly asks for a pause (the `Retry-After` header), the program honours
  it, up to a maximum of sixty seconds.
* **Stall detection.** A stuck download is worse than a failed one: it hangs there and holds up the
  queue. The program watches the data flow and, if not a single byte arrives for sixty seconds, it
  closes the transfer and counts it as a failed attempt.
* **`.part` files with resume.** Every transfer writes to a temporary file with the `.part`
  extension. Only when the file is complete and its size matches what the server declared does it
  take its final name. If the transfer is interrupted, the `.part` stays on disk and the next
  attempt **resumes from where it stopped** instead of starting over.
* **Automatic pause when offline.** When the connection drops, the queue stops by itself and starts
  again when the network is back, instead of burning every episode’s attempts in a few seconds.

### Address safety

The program handles addresses that come from outside — from the feeds. A crafted address can point
at resources on your local network (the router, the NAS, an internal server) and turn the
application into a way of reaching them: the family of attacks known as SSRF, *server-side request
forgery*.

Every address therefore goes through layered validation: a syntax check, HTTP and HTTPS only,
blocking of known internal hostnames, blocking of private and reserved address ranges (RFC 1918,
loopback, link-local) and a fresh check of the resolved IP address on every connection and every
redirect. It is automatic and invisible in use (chapter 10, section 10.8).

### Network paths

The archive can live on a network drive. Handling SMB paths — the ones used by NAS units, Windows
servers and shared folders — is a classic source of freezes in desktop applications: if the remote
disk does not answer, the interface locks up until the operating system gives up. FeedDownloader
Pro checks the path outside the graphical process and gives up on its own after eight seconds. The
interface stays responsive regardless.

---

## 1.5 What changes in version 1.6.0

Coming from 1.5, you will find a reorganised program. In short:

* **A desktop interface.** The window is laid out in landscape, with side-by-side panels that each
  scroll on their own. The sidebar leads to the **Library**, **Downloads** and **Archive** views
  and, below them, to the feeds (chapter 3).
* **Downloading a period.** In every feed’s view the filter strip is always visible and includes
  the **Period**, with ready-made ranges and free dates. The main button says exactly how many
  episodes it will take (chapter 4).
* **Automatic archiving per feed.** On the feeds you choose, new episodes found by the periodic
  checks download by themselves (chapter 5).
* **A queue that survives closing** and an **automatic pause when offline** (chapter 6).
* **Archive verification** in two modes, **Quick** and **Full**, with progress and the option to
  stop it (chapter 9).
* **Richer metadata next to the files**, with `podcast.json` and the cover for each podcast, and
  the new `{season}` and `{episode}` placeholders for file names (chapter 8).
* **From 1 to 10 parallel downloads**, **five attempts** per file and a **bandwidth limit shared**
  by all downloads (chapter 6).
* **Accessibility**: interface size from 80 to 180% and the **Reduce animations and effects**
  switch (chapter 10).

The release also fixes several 1.5 defects. The most important concerns ID3 tags: versions up to
1.5.x computed the SHA-256 fingerprint *before* writing the tags, so a full check then reported
every tagged MP3 as altered. Section 9.5 explains how to put those files right.

---

## 1.6 How to read this manual

The manual covers the whole program, from installation to the least-used features. There is no
need to read it in order: the chapters stand on their own.

To get your bearings, start with chapter 4, which follows a complete run from adding a feed to an
archived file. If you already know the software, go straight to the chapter you need; if you are
coming from 1.5, chapter 3 shows the new window layout.

Interface labels appear in **bold** and exactly as they read on screen. Navigation paths use an
arrow: **Settings → Downloads → Change folder**.

---

*Chapter 2 covers installation, first launch and updates.*
