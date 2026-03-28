# Welcome to Runtime FeedDownloader Pro
**The most powerful and resilient way to archive your podcasts.**

## What is it
Runtime FeedDownloader Pro is the professional tool of the **Runtime Ecosystem | Digital Core**, designed for archivists, publishers, and enthusiasts who need to download entire podcast catalogs for offline preservation.

Unlike common players, this software is optimized for **Mass (Batch) downloading**, network resilience, and structured file organization on disk.

---

## The Philosophy: "Database-First"
At the heart of FeedDownloader Pro is its **SQLite**-based engine. Unlike other software that relies exclusively on disk file presence, our system:
1.  **Remembers every download:** Even if you move your archive to a NAS or an external drive, the database maintains the status of your collection.
2.  **Prevents duplicates:** No more confusion between `.mp3`, `.m4a` files or multiple downloads of the same episode.
3.  **Documented integrity:** Every downloaded file is verified via SHA-256 hash, and metadata (bitrate, sample rate) is automatically extracted.

## Unique Features

### 1. Extreme Network Resilience
Downloading hundreds of audio files requires impeccable error handling. FeedDownloader Pro implements:
- **Automatic Retries:** With exponential backoff to avoid overloading servers.
- **Stall Detection:** If the server stops sending data for 60 seconds, the download is automatically restarted.
- **Anti-Corruption .part Files:** Files are renamed to their final extension only upon complete download.

### 2. Security and Validation (SSRF)
The application implements 5-level anti-SSRF validation on every entered URL. We block dangerous protocols and private IP addresses, ensuring your safety even with RSS feeds from unknown sources.

### 3. Professional NAS/SMB Support
Designed for archivists, the software validates network paths with an 8-second timeout, preventing UI freezes common when working with network drives or NAS systems that aren't ready.

---

## System Requirements
- **Windows**: 10/11 (64-bit)
- **macOS**: 11.0 (Big Sur) or higher
- **Linux**: Modern distributions (Ubuntu, Debian, Fedora)
- Active Internet connection for feed analysis.

---
*Part of the Runtime Ecosystem | Digital Core — Tools built to last.*
