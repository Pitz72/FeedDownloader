# Chapter 1: Introduction and philosophy

## 1.1 What is Runtime FeedDownloader Pro?

It helps to start from the problem the software solves.

Thousands of podcast episodes are published and listened to every day. Over time a fair share of
that material vanishes: the presenter stops paying for hosting, the distribution platform closes,
the server holding the audio files is switched off. An episode you heard three years ago may now be
gone for good — not because anyone deleted it deliberately, but because nobody kept a copy.

Runtime FeedDownloader Pro exists for that reason. It is not just a podcast downloader; it is an
application for the systematic preservation of audio published through RSS feeds. It is meant for
people who treat sound as a document, and therefore file it with the same care they would give a
text or a photograph: archivists, newsrooms, radio stations, researchers, methodical listeners.

---

## 1.2 Who it is for

Four typical ways of using it.

*   **The archivist** wants to pull down the whole catalogue of a long-running podcast before it
    disappears. What they need is a system that remembers what it already has, never duplicates
    anything and certifies the integrity of every file.

*   **The radio producer** keeps the library on a shared NAS. They need a tool that works on
    network paths without seizing up, files things predictably and produces CSV inventories for the
    rest of the team.

*   **The publisher** keeps a local copy of the network’s podcasts, exports metadata to the
    editorial system and watches the state of the archive over time.

*   **The listener** wants their podcasts on disk, in order, without depending on a connection or
    ending up with truncated files.

---

## 1.3 The database-first philosophy

What separates FeedDownloader Pro from a generic downloader is where the truth lives.

Almost every download tool reasons the same way: it looks at the files on disk, compares them with
the RSS feed and fetches whatever is missing. The flaw is obvious — a disk is not a reliable
source. Files get moved, renamed, corrupted, deleted by accident. Shift your podcast folder from
`C:\Podcast` to `D:\Archive` and the tool loses every reference, then cheerfully re-downloads the
entire catalogue.

FeedDownloader Pro keeps the truth somewhere else. At the centre of every operation sits an SQLite
database that records each episode it has met or downloaded: the source URL, the file name on disk,
the download date, the SHA-256 checksum of the content, the audio metadata. The database is the
software’s memory, and it stays accurate even when files move.

Four practical consequences follow from that choice.

1.  **No duplicates.** Analyse the same feed ten times over and the episodes already on record will
    not go back into the queue.
2.  **Resilience to moves.** The archive can migrate to another disk or to a NAS without losing its
    history.
3.  **Persistent state.** If the program is closed halfway through a batch of 300 episodes, the
    history is intact on reopening and the missing episodes are still listed as pending.
4.  **A record of operations.** Every downloaded file carries its date, its source URL and its
    cryptographic checksum.

---

## 1.4 Three underlying technical choices

Beyond the database-first design, the program rests on three decisions you notice directly in use.

### Network resilience

Downloading hundreds of audio files from the internet is an operation that fails often, and in
various ways. Servers get overloaded, connections drop, transfers are cut off halfway. The software
tackles this on three fronts.

*   **Retries with growing delays.** When a download fails for a transient reason, the program does
    not immediately try again: it waits one second, then two. There are three attempts in all; if
    the server explicitly asks for a delay (the `Retry-After` header), the program honours it up to
    a maximum of sixty seconds.
*   **Stall detection.** A stuck download is worse than a failed one: it hangs there and never
    frees the queue. The program watches the data flow and, if not a single byte arrives for sixty
    seconds, it closes the transfer, counts it as a failed attempt and moves on.
*   **`.part` files with resume.** Every transfer writes to a temporary file with a `.part`
    extension. Only once the file is complete and its size matches what the server declared does it
    take its final name. If a transfer is interrupted, the `.part` stays on disk and the next
    attempt **resumes from where it stopped** instead of starting over (an HTTP Range request with
    an If-Range validator). Orphaned `.part` files can be cleared from **Settings → Advanced →
    Clean temporary files**.

### URL safety

The program handles URLs that arrive from outside, namely from feeds. A carefully crafted address
can point at resources on the local network — the router, the NAS, an internal server — and turn
the application into a way of reaching them. This is the family of attacks known as SSRF,
*server-side request forgery*.

Every URL therefore passes through validation on several levels: syntax checking, acceptance of
HTTP and HTTPS only, rejection of known internal hostnames, rejection of private and reserved
address ranges (RFC 1918, loopback, link-local) and a fresh check of the resolved IP address on
every connection and every redirect. The whole thing is automatic and invisible in use.

### Network paths

The archive can live on a network drive. Handling SMB paths — the ones used by NAS devices,
Windows servers and shared folders — is a classic source of freezes in desktop applications: if the
remote disk stops responding, the interface locks up until the operating system gives up.
FeedDownloader Pro checks the path outside the graphics process and gives up on its own after eight
seconds. The interface stays responsive either way.

---

## 1.5 How to read this manual

The manual covers the whole of the program, from installation to the corners you rarely visit. You
do not need to read it in order: the chapters stand on their own.

To get a feel for the software, start with chapter 4, which follows a complete run from analysing a
feed to the archived file. If you already know your way around, go straight to whichever chapter
you need.
