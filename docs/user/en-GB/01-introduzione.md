# Chapter 1: Introduction and Philosophy

## 1.1 What is Runtime FeedDownloader Pro?

To describe the software, it is useful to begin with the problem it solves.

Every day, thousands of podcast episodes are published, distributed and listened to. Over time, however, a significant portion of this content disappears: the host stops paying for their hosting service, the distribution platform ceases operations, or the CDN serving the audio files is decommissioned. An episode listened to three years ago may today be permanently unreachable — not because it was intentionally deleted, but because no one retained a copy.

**Runtime FeedDownloader Pro** was created to address this problem. It is not a simple podcast download tool: it is a professional application for the **systematic preservation and archiving** of audio content from RSS feeds. It is designed for archivists, publishers, radio stations, content producers and enthusiasts for whom sound documentation requires the same rigorous preservation standards applied to other types of records.

---

## 1.2 Who It Is For

FeedDownloader Pro addresses a range of different needs:

*   **The Archivist:** Wants to download the entire catalogue of a historical podcast before it is removed. Needs a system that remembers previously downloaded episodes, avoids duplicates and verifies the integrity of every file.

*   **The Radio Producer:** Manages a content library on a shared NAS. Needs a tool that operates on network paths without stalling, organises files predictably and produces CSV reports for their team.

*   **The Publisher:** Wants to maintain a local copy of all podcasts in their network, export metadata for content management systems and monitor the archive's status over time.

*   **The Enthusiast:** Wants to keep their favourite podcasts on their disk, organised neatly, without depending on internet availability or risking receipt of corrupted files.

---

## 1.3 The "Database-First" Philosophy

The fundamental difference between FeedDownloader Pro and a generic download tool is its approach to data management.

Most download tools work as follows: they analyse the files present on disk, compare them with the RSS feed and download whatever is missing. This approach has a critical limitation: **the disk is not a reliable source of truth**. Files can be moved, renamed, corrupted or accidentally deleted. If you move the podcast folder from `C:\Podcast` to `D:\Archive`, the tool loses its reference to previously downloaded episodes and begins downloading the entire catalogue again.

FeedDownloader Pro takes a different approach. At the centre of every operation is a **SQLite database** that records every episode analysed or downloaded: the original URL, the file path on disk, the download date, the SHA-256 hash of the content and the audio metadata. The database is the software's persistent memory. Regardless of the physical location of the files, the database preserves the complete state of the archive.

This architecture has direct practical consequences:

1.  **No duplicates.** Even if the same feed is analysed multiple times, the system recognises episodes already present in the database and does not add them to the queue again.
2.  **Resilience to moves.** The archive can be moved to a new disk or to a NAS: the history remains intact in the database.
3.  **Persistent state between sessions.** If the program is closed during a batch download of 300 episodes, the queue is available in exactly the same state when it is reopened.
4.  **Operation log.** Every downloaded file is documented: download date, source URL and integrity verification status.

---

## 1.4 The Three Pillars of the Software

Beyond the Database-First approach, FeedDownloader Pro is built around three technical principles with a direct impact on functionality.

### Network Resilience

Downloading hundreds of audio files sequentially over the internet is not a straightforward operation. Servers can be overloaded, connections can drop and transfers can corrupt files. FeedDownloader Pro handles these scenarios with three mechanisms:

*   **Retry with exponential backoff:** When a download fails, the software does not retry immediately. Instead, it waits for a progressively longer interval: 2 seconds, then 4, then 8, up to the configured maximum. This approach, standard in distributed systems, increases the probability of success without placing additional load on the source server.
*   **Stall detection:** A stalled download is more problematic than a failed one. If a server begins sending data and then stops without closing the connection, software without this check would wait indefinitely. FeedDownloader Pro monitors the data flow in real time: if no new bytes arrive for 60 consecutive seconds, the download is terminated and automatically re-queued.
*   **Anti-corruption `.part` files:** Every file is downloaded with the temporary extension `.part`. Only upon total, verified completion of the transfer is the file renamed with its final extension (`.mp3`, `.m4a`, etc.). In the event of an abrupt interruption, the destination folder will contain no partial or corrupted audio files: only residual `.part` files, which the software will delete and re-download in the next session.

### Built-in Security

FeedDownloader Pro processes URLs from external sources (RSS feeds). A maliciously constructed URL pointing to internal network resources (a router, a NAS, a local server) could be used to access confidential information — an attack known as **SSRF (Server-Side Request Forgery)**.

To prevent this risk, every URL is subjected to a **5-level validation** process before being processed: protocol verification, DNS resolution with inspection of the resulting IP address, blocking of private address ranges (RFC 1918), blocking of non-HTTP/HTTPS protocols and path normalisation. This procedure is entirely automatic and transparent to the user.

### NAS and Network Path Support

FeedDownloader Pro is designed to operate with archives on network drives. Handling SMB paths — the protocol used by NAS devices, Windows servers and network shares — is a frequent source of problems in desktop applications: an unreachable network drive can block the application's main thread for a considerable amount of time. FeedDownloader Pro resolves this by running network path validation on a separate thread with an 8-second timeout. The interface remains responsive at all times, regardless of the state of the network path.

---

## 1.5 Contents of This Manual

This manual covers the complete use of FeedDownloader Pro, from installation to the most advanced features. It need not be read in sequence: each chapter is self-contained and may be consulted independently.

For a first approach to the software, it is recommended to follow **Chapter 4 (Your First Archive)**, which illustrates a complete workflow from feed analysis to download. Those already familiar with the software may navigate directly to the chapter of interest via the table of contents.

---

*Ecosystem Runtime | Digital Core — Tools built to last.*
