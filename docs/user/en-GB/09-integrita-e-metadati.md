# Chapter 9: Integrity, statistics and archiving

## 9.1 Why files need verifying

A download that reaches the end is not necessarily a healthy file. A packet lost on the way, a
write error, an interruption in the last second: the file is there, it weighs nearly what it
should, and it turns out to be a stump the day somebody tries to listen to it. For an archive that
is the worst way to fail, because the damage surfaces years later.

FeedDownloader Pro works on two levels: it checks the **size** while downloading and calculates the
**SHA-256 checksum** as soon as the file is complete.

---

## 9.2 The SHA-256 checksum

SHA-256 produces, for any file, a sequence of 64 hexadecimal characters. Two identical files give
the same checksum; change one bit and the checksum becomes unrecognisable. It is the standard way
of saying "this file is exactly the one from back then".

For every download the program calculates the checksum and records it in the archive along with the
file name and the date.

It serves three purposes. The **archive health check** (section 9.4) recalculates the checksum of
the files present and compares it with the one on record, catching corruption and substitutions
that happened after the download. **Checksum repair** uses the same checksum to recognise files
somebody renamed by hand. And in a professional context, the checksum is verifiable proof of what
that file contained at the moment it was archived.

---

## 9.3 Technical metadata

Once a download finishes the program reads the technical data **inside the file**, not from the
feed, and records it.

| Field | What it tells you | Example |
|-------|-------------------|---------|
| Bitrate | Audio quality in kilobits per second | `128 kbps`, `320 kbps` |
| Sample rate | Samples per second | `44100 Hz`, `48000 Hz` |
| Size on disk | Real weight of the file | `67.4 MB` |

They end up in the episode detail panel and in the CSV inventory (section 9.6).

---

## 9.4 The archive health check

Over time an archive changes behind the program’s back: files moved, renamed, deleted by mistake,
or ruined by a dying disk. The check compares the reality on disk with what the archive says.

You start it from **Settings → Archive → Archive Health Check**, pressing **Run Check**.

Two verifications are run on every recorded file: that it still exists where it is meant to, and —
for those present — that the recalculated SHA-256 checksum matches the one from back then. Files
that no longer match are flagged as corrupted, with a prompt to download them again.

Four numbers appear at the end:

| Indicator | Meaning |
|-----------|---------|
| **In DB** | Episodes recorded in the archive |
| **On Disk** | Files found where they were meant to be |
| **Missing** | Files not found |
| **Disk Usage** | Total space taken by the files present |

When something is missing, the program lists the first five cases with podcast and file name, and
offers two routes.

**Repair archive (checksum search)** looks through the podcast folders for files somebody renamed
by hand: it calculates the checksum of the candidates and, when it finds the right one, re-links
the file to the episode under its new name. It downloads nothing and touches no files: it updates
the archive. At the end it reports how many it re-linked and how many it could not find.

**Mark as not downloaded** is for the genuinely lost: it removes them from the register, so the
episodes go back to **NEW** in the list and can be downloaded again normally.

That is the sensible order: try to repair first, then declare lost whatever is left.

---

## 9.5 Statistics

**Settings → Archive** carries three summary figures: **Files Downloaded**, the episodes on record;
**Podcasts**, how many distinct programmes make up the archive; **Archive range**, the date of the
first and the last download. They refresh every time you open the settings.

---

## 9.6 The CSV inventory

The export produces a file with one row per episode: useful for spreadsheets, editorial systems,
scripts, or simply for having a list of what you hold outside the program.

You generate it from **Settings → Archive → Export Inventory (CSV)**, choosing where to save it.

| Column | Contents |
|--------|----------|
| `Podcast` | Podcast name |
| `Episode Title` | Episode title |
| `Publish Date` | Publication date |
| `Downloaded At` | Download date and time |
| `File Size (bytes)` | Size in bytes |
| `Bitrate (kbps)` | Audio bitrate |
| `Sample Rate (Hz)` | Sample rate |
| `SHA-256 Checksum` | File checksum |
| `Validation Status` | See below |
| `GUID` | Episode identifier in the feed |

The `Validation Status` column says what guarantees the episode was recorded with, not the outcome
of the last check: it reads `OK` when a SHA-256 checksum is on record, `LEGACY` for older rows that
have the file name but no checksum, and `UNKNOWN` when even that is missing.

*Format.* Comma-separated CSV, UTF-8 with BOM to keep Excel happy, fields in quotes when they
contain commas.

---

## 9.7 Moving the archive

To transfer the files to another disk, use the built-in migration, which moves them and keeps the
archive aligned as it goes.

1.  Open **Settings → Archive → Migrate Archive**.
2.  Choose the new folder.
3.  The program moves the podcast folders and updates the default destination.
4.  At the end it reports how many folders it moved and how many errors it met.

*Careful:* this is a move, not a copy — the files leave their original location. Best to check there
is room at the destination first.

*Moving to another computer.* Two things are needed: the folder of audio files and the
`feeddownloader.sqlite` database (chapter 2). On the new machine, install the program, put the
database in the data folder and, if the audio files ended up somewhere different, use migration to
realign everything.

---

*Chapter 10 goes through the settings.*
