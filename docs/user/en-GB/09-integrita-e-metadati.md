# Chapter 9: Integrity, verification and archiving

## 9.1 Why check the files

A download that reaches the end is not necessarily a sound file. A packet lost on the way, a write
error, an interruption in the last second: the file is there, it weighs nearly what it should, and
it turns out to be incomplete on the day someone tries to listen to it. For an archive that is the
worst way to go wrong, because the damage shows up years later.

FeedDownloader Pro works on two levels: it checks the **size** while downloading and computes the
**SHA-256 fingerprint** as soon as the file is complete. Then, over time, **archive verification**
compares the disk with what was recorded.

---

## 9.2 The SHA-256 fingerprint

SHA-256 produces, for any file, a sequence of 64 hexadecimal characters. Two identical files give the
same fingerprint; change a single bit and the fingerprint becomes unrecognisable. It is the standard
way of saying “this file is exactly the one from back then”.

For each download the program computes the fingerprint and records it in the archive together with
the file name, the folder and the date. The computation happens **after** any ID3 tags are written,
so on the file exactly as it is on disk.

It serves three purposes. The **full check** (section 9.5) recomputes the fingerprint of the files
present and compares it with the recorded one, uncovering corruption and changes made after the
download. **Find moved files** uses the same fingerprint to recognise files someone renamed or moved
by hand. And in a professional setting the fingerprint is verifiable proof of what that file
contained when it was archived.

You can read the fingerprint in the episode details (**SHA-256 fingerprint (recorded at
download)**), in the CSV inventory and, if enabled, in the metadata next to the files.

---

## 9.3 Technical metadata

Once a download finishes, the program reads the technical data **inside the file**, not from the
feed, and records it.

| Field | What it tells you | Example |
|-------|-------------------|---------|
| Bitrate | Audio quality in kilobits per second | `128 kbps`, `320 kbps` |
| Sample rate | Samples per second | `44.1 kHz`, `48 kHz` |
| Size on disk | The file’s real weight | `67.4 MB` |

They appear in the episode details (**Quality** and **Size on disk**), in the Archive view (the
**Size** and **Quality** columns) and in the CSV inventory.

---

## 9.4 The Archive view

The **Archive** view (**Ctrl+3**) brings every downloaded episode, from any podcast, into a single
table, with publication and download dates, size and quality. Its layout is described in chapter 3,
section 3.9.

Some typical uses:

* **What do I have of a podcast?** Click the podcast in the left-hand column: the summary line says
  how many episodes and how much space.
* **What came out in a period?** The **Publication period**, with a ready-made range or the **From**
  and **To** dates.
* **Where is a file?** Search also accepts the file name; the folder icon shows it in the file
  manager, wherever it is.
* **What arrived today?** The default order, by download date, newest first.

---

## 9.5 Archive verification

Over time an archive changes behind the program’s back: files moved, renamed, deleted by mistake,
retouched by another program, or ruined by a failing disk. Verification compares what is on disk
with what the archive records.

### Starting it

The **Archive verification** window opens in three ways:

* **Verify archive** in the Archive view header;
* **Verify archive** in **Settings → Archive**;
* **Verify archive** in the command palette (**Ctrl+K**).

At the top choose the **Kind of check**, then press **Start check**.

### Quick or Full

| Kind | What it checks | Duration |
|------|----------------|----------|
| **Quick** | That every file exists where expected and has the recorded size | A few seconds, even on large archives |
| **Full** | In addition, recomputes each file’s SHA-256 fingerprint and compares it with the recorded one | Proportional to the gigabytes: on large archives or a NAS it can take hours |

The quick check suits frequent use: it finds missing, truncated or replaced files. The full check
also finds damaged files that kept their size, and is the one to run periodically on an archive that
matters. Rows recorded by older versions, with no fingerprint, are checked for presence only.

During the check a bar shows progress (*Checking…* with the number of files checked out of the
total) and the **Stop the check** button interrupts it. A stopped check reports the results for the
files already examined (*Check stopped: the results cover the first N episodes.*). While it runs, the
window cannot be closed.

The program looks for each file in the folder it was downloaded to; if it is not there, it also
looks in the current download folder.

### The results

At the end five figures appear:

| Indicator | Meaning |
|-----------|---------|
| **Checked** | Episodes examined |
| **Present** | Files found |
| **Missing** | Files not found |
| **Different size** (quick) or **Different from original** (full) | Files present but no longer identical to the ones recorded |
| **On disk** | Total space of the files present |

If there is nothing to report, *All good: every file is present and intact.* appears. Otherwise one
or two sections appear, each with the list of files involved (the first fifty, with a count of the
rest).

### Missing files

These are files moved, renamed or deleted. Two actions, to use in this order:

1. **Find moved files.** Searches the podcast’s folder for files someone renamed or moved by hand,
   both in the folder the episode was downloaded to and in the current download folder. It
   recognises them by their SHA-256 fingerprint: for each missing episode it computes the
   fingerprint of candidate files of the same size and, when it finds the right one, relinks the file
   to the episode under its new name and location. It downloads nothing and touches no files: it
   updates the archive. At the end it says how many files it found and how many it did not (*3 files
   found and relinked · 1 not found.*) and runs the check again. It works only for episodes with a
   recorded fingerprint.
2. **Mark the missing ones as not downloaded.** This is for files that are truly lost: after a
   confirmation it removes them from the archive, so the episodes go back to **To download** and can
   be downloaded again as usual.

### Files different from the original

These are files present but with a size or fingerprint different from the recorded one. There are
two causes:

* **damage**: a disk error, an interrupted copy, a file replaced by mistake. In this case the file
  should be downloaded again: open the episode and press **Download again**;
* **a deliberate change**: tags written by another program, a trimmed or normalised file. In this
  case the file is fine; it is the reference that changed.

For the second case there is **Accept the current files as reference**: it records the fingerprint
and size of the files now on disk as the new reference, and the check stops reporting them. Use it
only after checking that the files play correctly.

*Files tagged by versions up to 1.5.x.* Those versions computed the fingerprint before writing ID3
tags, so every tagged MP3 shows as **Different from original** on the first full check with 1.6.0.
This is exactly the case for **Accept the current files as reference**: after spot-checking that they
play, one click puts all the fingerprints right.

### The check at launch

A few seconds after every launch, the program checks in the background that the archived files still
exist. If some are missing, it sends a system notification (*N archived files are missing from
disk…*) inviting you to open the verification. The check changes nothing.

---

## 9.6 Statistics

The summary figures appear in three places:

* **Settings → Archive**: *N episodes from M podcasts since [date of the first download].*;
* **the Archive view**: **Episodes**, **Podcasts** and **Space used**, plus the range of publication
  dates;
* **the Library view**: **Feeds**, **To download** and **Archived**, and for each feed the space
  used.

They update by themselves after every completed download.

---

## 9.7 The CSV inventory

Exporting produces a file with one row per episode: for spreadsheets, editorial systems, scripts, or
simply to have a list of what you own outside the program.

Create it with **Export CSV**, in the Archive view header or in **Settings → Archive**, choosing where
to save it (`archive_report.csv` by default).

| Column | Contents |
|--------|----------|
| `Podcast` | Podcast name |
| `Episode Title` | Episode title |
| `Publish Date` | Publication date |
| `Downloaded At` | Download date and time |
| `File Size (bytes)` | Size in bytes |
| `Bitrate (kbps)` | Audio bitrate |
| `Sample Rate (Hz)` | Sample rate |
| `SHA-256 Checksum` | File fingerprint |
| `Validation Status` | See below |
| `GUID` | The episode’s identifier in the feed |
| `Feed URL` | Feed address |
| `File` | File name |
| `Folder` | The download folder that holds the podcast’s subfolder |

The last three columns are new in 1.6.0 and sit at the end, so spreadsheets that read the first ten
keep working.

The `Validation Status` column says what level of assurance the episode was recorded with, not the
result of the latest check: `OK` when a SHA-256 fingerprint is recorded, `LEGACY` for older rows that
have the file name but no fingerprint, `UNKNOWN` when even that is missing.

*Format.* Comma-separated CSV, UTF-8 with a BOM for Excel compatibility, every field in quotes.
Values that would start with `=`, `+`, `-` or `@` get a leading apostrophe, so a spreadsheet does not
run them as formulas.

---

## 9.8 Changing the download folder

Every archived episode remembers the folder it was saved in. Changing the download folder therefore
does not make the archive you have already built go “missing”: the program keeps finding every file.

Change the folder from **Settings → Downloads → Change folder**. If the archive is empty, the new
folder applies at once. If it already holds episodes, the program asks *What about the existing
archive?* and offers two routes.

### Move the archive

Moves the subfolders of the current download folder into the new one, updates the archive and uses
the new folder for future downloads.

* During the move, Settings shows progress (*Moving: 3 of 12 folders*); at the end the program says
  how many folders it moved (*Archive moved: 12 folders.*).
* Each podcast remembers where it really is: if some folders cannot be moved, for instance because a
  folder with the same name already exists at the destination, they stay where they were and the
  program keeps finding them (*10 folders moved, 2 not moved: …*). If none can be moved, the download
  folder does not change.
* The move does not start while downloads are queued (*Wait for the downloads to finish before moving
  the archive.*), nor when the new folder is inside the current one or contains it.

*Note:* this is a move, not a copy: the files leave their original location. Check first that the
destination has room.

### New downloads only

Leaves the files where they are and uses the new folder for future downloads only. The archive ends
up split across two (or more) folders, but the program knows where every episode is: the Archive
view, **Show in folder**, M3U playlists, verification and the search for moved files all work across
them.

This is the right choice when a disk fills up: the podcasts already archived stay on the old disk,
new episodes go to the new one.

---

## 9.9 Moving to another computer

You need two things: the folder (or folders) of audio files and the `feeddownloader.sqlite` database
(chapter 2, section 2.4).

1. Install the program on the new computer and close it.
2. Copy the database into the data folder, replacing the one created at installation.
3. Copy the audio files. If they end up at the same path as before, nothing else is needed.
4. If they end up at a different path, open the program and set that path with **Change folder**,
   choosing **New downloads only**. The program looks for each file first in the recorded folder and
   then in the current download folder, so it finds them, as long as each podcast keeps its own
   subfolder. A quick check confirms it; for files that have been renamed in the meantime there is
   **Find moved files**.

---

*Chapter 10 goes through the settings.*
