# Chapter 9: Integrity, Statistics, and Archiving

## 9.1 Why Verify File Integrity

The completion of a download does not guarantee that the received file is intact. A network packet lost during transfer, a disk write error, or an interruption in the last second can produce a file that is formally "present" but corrupted. Without an explicit verification, an apparently complete archive can contain unplayable audio files whose corruption is only detected during playback.

FeedDownloader Pro addresses this problem with two complementary mechanisms: **size verification** (during download) and **SHA-256 verification** (upon completion).

---

## 9.2 SHA-256 Verification

**SHA-256** (Secure Hash Algorithm 256-bit) is a cryptographic function that produces a 64-character hexadecimal fingerprint for any file. Two identical files always produce the same hash; a difference of even a single bit produces a completely different hash.

For each downloaded file, FeedDownloader Pro:
1.  Calculates the SHA-256 hash of the file at the end of the download.
2.  Saves the hash in the database, together with the file path and the date of calculation.
3.  If the RSS feed includes a reference hash (some modern feeds include the `<podcast:integrity>` field), it compares it with the calculated one. In the event of a discrepancy, the file is marked as **"Corrupted"** and re-queued for a new download.

**Practical uses:**
*   It is possible to verify at any future point that a file has not been modified, corrupted, or replaced: simply recalculate the hash and compare it with the one recorded in the database.
*   After moving files to a new drive or following a migration, the **Health Check** (see section 9.4) allows you to verify that all files are still present.
*   In professional contexts, the SHA-256 hash constitutes a verifiable reference of content integrity at the time of download.

---

## 9.3 Extracted Audio Metadata

Upon completion of each download, FeedDownloader Pro automatically extracts the **technical metadata** from the audio file. This information is read directly from the file (not from the RSS feed) and recorded in the database.

**Extracted metadata:**

| Field | Description | Example |
|-------|-------------|---------|
| **Bitrate** | Audio quality in kilobits per second | `128 kbps`, `320 kbps` |
| **Sample rate** | Sampling frequency | `44100 Hz`, `48000 Hz` |
| **Size on disk** | Actual size of the downloaded file | `67.4 MB` |

These values are recorded in the database and are included in the CSV export (see section 9.6).

---

## 9.4 Health Check: Archive Integrity Verification

Over time, an archive may undergo external modifications outside the software: files moved or deleted directly from the filesystem. The **Health Check** verifies the state of the archive against what is recorded in the database.

**How to run the Health Check:**
Go to **Settings → Archive → Health Check** and click **"Start Check"**.

The process analyses each file recorded in the database and verifies that the file still exists at the recorded path. Upon completion, a summary is shown with three indicators:

| Indicator | Meaning |
|-----------|---------|
| **Total** | Total number of episodes in the database |
| **Present** | Files that exist at the recorded path |
| **Missing** | Files not found at the recorded path |

The screen also shows the **total disk space** occupied by the present files.

If missing files are found, the software lists the first 5 with the podcast name and file name. To recover a missing file, use the **"Force Re-Download"** function available from the episode context menu in the main list.

---

## 9.5 Archive Statistics

The statistics section is accessible from **Settings → Archive** and provides a concise overview of the data recorded in the database:

*   **Downloaded files:** Total number of episodes present in the database.
*   **Podcasts:** Number of distinct feeds represented in the archive.
*   **Time range:** Date of the first and last downloaded episode.

Statistics are automatically updated each time the Settings panel is opened.

---

## 9.6 CSV Export

The CSV export generates a file with the data of each episode present in the database. It is useful for integrating FeedDownloader Pro with other tools (spreadsheets, content management systems, automation scripts).

**How to export:**
Go to **Settings → Archive → Export CSV** and choose the path in which to save the file.

**Export columns:**

| Column | Content |
|--------|---------|
| `Podcast` | Podcast name |
| `Episode Title` | Episode title |
| `Publish Date` | Publication date |
| `Downloaded At` | Date and time of download |
| `File Size (bytes)` | File size in bytes |
| `Bitrate (kbps)` | Audio bitrate in kilobits per second |
| `Sample Rate (Hz)` | Sampling frequency in hertz |
| `SHA-256 Checksum` | SHA-256 hash of the file |
| `Validation Status` | Result of the last integrity check |
| `GUID` | Unique identifier of the episode in the RSS feed |

*File format:* CSV with comma separator (`,`), UTF-8 encoding with BOM (for compatibility with Microsoft Excel). Fields containing commas are enclosed in quotation marks.

---

## 9.7 Archive Migration

To move the archive to a new drive or a new folder, use the built-in migration function, which keeps the database synchronised with the new file location.

**Procedure:**
1.  Go to **Settings → Archive → Migrate Archive**.
2.  Select the **new destination folder** via the selection window.
3.  The software physically moves all audio files to the new folder and updates the paths in the database.
4.  Upon completion, a summary is shown: number of files moved and any errors.

*Caution:* The migration moves files from the current folder to the new one. Files are removed from the original location. Verify that the destination drive has sufficient space before starting the operation.

*Moving to a new computer:* Copy both the audio files folder and the `feeddownloader.db` file (from the user data folder described in Chapter 2). On the new computer, install FeedDownloader Pro, copy the database to the user data folder, and use the migration function if the archive path has changed.

---

*Go to Chapter 10 for the advanced software settings.*
