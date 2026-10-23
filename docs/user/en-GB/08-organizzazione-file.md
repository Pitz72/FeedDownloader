# Chapter 8: File organisation, templates and metadata

## 8.1 The trouble with names

The name an audio file is published under is rarely meant for human eyes:
`ep_2024_03_15_FINAL_v2_mixdown.mp3`, `podcast-episode-187-compressed.m4a`, or even
`abc123def456.mp3`. They make sense to the producer’s systems; inside an archive they are noise.

The program fixes this with the **naming template**: you define the name format once and every
downloaded file follows it, drawing on the information in the feed.

---

## 8.2 How a template works

A template is a line of text mixing fixed parts and **placeholders**, variables in curly brackets.
At download time each placeholder is replaced with that episode’s value.

The template `{date} - {podcast} - {title}` gives:

`2024-03-15 - Mario's Podcast - Episode 187 Artificial intelligence explained.mp3`

The extension is not part of the template: it is added according to the file’s format (section
8.6).

---

## 8.3 Available placeholders

| Placeholder | What it holds | Example |
|-------------|---------------|---------|
| `{title}` | Episode title from the feed | `Episode 187 AI explained` |
| `{podcast}` | Podcast name | `Mario's Podcast` |
| `{date}` | Publication date, `YYYY-MM-DD` | `2024-03-15` |
| `{year}` | Year | `2024` |
| `{month}` | Two-digit month | `03` |
| `{day}` | Two-digit day | `15` |
| `{season}` | Season number, two digits | `02` |
| `{episode}` | Episode number, at least two digits | `07`, `187` |

When an episode declares no date, the date placeholders become the word `unknown`.

`{season}` and `{episode}` are the iTunes numbers declared in the feed (`<itunes:season>` and
`<itunes:episode>`). When the feed does not declare them, or puts something other than a whole number
there, they become `00`.

A made-up placeholder, for instance `{author}`, stays in the name as it is: the program does not
recognise it and leaves it alone.

---

## 8.4 Recommended templates

The default is the title alone:

```text
{title}
```

Fine for catalogues whose titles are already descriptive.

For general use, put the date first:

```text
{date} - {title}
```

which produces `2024-03-15 - Episode 187 AI explained.mp3`. The benefit is practical: alphabetical
order of the files matches chronological order.

For podcasts organised in seasons, the numbering gives an even steadier order:

```text
S{season}E{episode} - {title}
```

which produces `S02E07 - The return.mp3`. Check first that the feed really declares the numbers:
otherwise every file will start with `S00E00`.

If several podcasts end up in the same folder, after a manual move for instance, include the
programme’s name:

```text
{podcast} - {date} - {title}
```

---

## 8.5 How names are cleaned up

Some characters are not allowed in file names: on Windows `/`, `\`, `:`, `*`, `?`, `"`, `<`, `>`,
`|`, as well as control characters. The program **removes** them from the name produced by the
template, without replacing them: `Episode 12: AI` becomes `Episode 12 AI`. The same goes for the
name of the podcast’s subfolder.

Less obvious cases are handled too:

* **Reserved names.** Windows reserved names (`CON`, `PRN`, `AUX` and the like) cannot be used as
  file names: if the title boils down to one of them, the program falls back on `episode`. The same
  happens with a title that ends up empty after cleaning.
* **Length.** The full path, folder included, is kept within 250 characters: if needed, the title is
  shortened, leaving room for the technical suffixes the program adds while it works (`.part.meta`
  and any duplicate-name suffix).
* **Duplicate names.** If the folder already holds a file with the same name, or a metadata file with
  the same base name, the new file gets the `_2` suffix, then `_3` and so on. Two episodes with the
  same title never overwrite each other, not even when they download at the same time.

*On long titles.* Some podcasts use hundred-and-fifty-character titles. `{title}` on its own gives
unwieldy names that risk being cut short; with `{date}` in front you still get a sortable,
recognisable name even when the end gets trimmed.

---

## 8.6 The file extension

The program saves every file with its real extension. It takes it from the file’s address when the
address contains one (`.mp3`, `.m4a`, `.m4b`, `.aac`, `.ogg`, `.opus`, `.flac`, `.wav`, `.mp4` and
other audio and video formats); when the address does not say, it uses the MIME type declared in the
feed, so `audio/mp4`, for instance, becomes `.m4a`. Only when both pieces of information are missing
does the file become `.mp3`.

---

## 8.7 Where to set it

The template is set in **Settings → Files and metadata**, section **File names**:

1. Type the template in the **Template** field, or build it with the **Available placeholders**
   buttons: each click adds the placeholder at the end of the template.
2. Check the **Example** under the field, which shows the result on a sample episode.
3. Leave the field: the template is saved. A field left empty goes back to `{title}`.

The template applies to future downloads: **existing files are not renamed**. It can be at most 300
characters long.

---

## 8.8 One thing the template does not do

The template produces **the file name, not a folder structure**. Writing `{year}/{month}/{title}`
does not create year and month subfolders: the slashes are removed along with the other forbidden
characters, and the result is a single file called `202403Title.mp3`.

The program applies only one automatic organisation, and it concerns podcasts: inside the download
folder each programme has its own subfolder, named after the podcast.

---

## 8.9 Metadata next to the files

In **Settings → Files and metadata**, section **Metadata**, there is the **Save metadata next to the
files** switch, off by default. When it is on, the program writes three kinds of file next to the
audio files.

### A `.json` file for each episode

It has the same name as the audio file, with a `.json` extension, and records everything known about
the episode:

```json
{
  "schema": "feeddownloader.episode/1",
  "title": "Episode 187: AI explained",
  "podcast": "Mario's Podcast",
  "feedUrl": "https://www.example.com/feed.xml",
  "guid": "https://www.example.com/ep187",
  "pubDate": "Fri, 15 Mar 2024 08:00:00 GMT",
  "link": "https://www.example.com/episodes/187",
  "description": "In this episode…",
  "duration": "00:52:14",
  "season": "2",
  "episode": "187",
  "episodeType": "full",
  "enclosure": {
    "url": "https://media.example.com/ep187.mp3",
    "type": "audio/mpeg",
    "length": 75210432
  },
  "file": {
    "name": "2024-03-15 - Episode 187 AI explained.mp3",
    "size": 75231890,
    "sha256": "9f2c…",
    "bitrateKbps": 192,
    "sampleRateHz": 44100
  },
  "downloadedAt": "2026-10-23T09:14:22.517Z",
  "savedBy": "Runtime FeedDownloader Pro 1.6.0",
  "sourceUrl": "https://media.example.com/ep187.mp3",
  "filename": "2024-03-15 - Episode 187 AI explained.mp3"
}
```

Date, duration and notes are recorded as the feed publishes them, so the notes may contain HTML. The
`sourceUrl` and `filename` fields repeat information found elsewhere and remain for scripts written
for earlier versions.

### A `podcast.json` for each podcast

In the podcast’s folder, with the `feeddownloader.podcast/1` schema: title, feed address, website,
description, author, language, copyright, categories, cover address, and the date and program version
that wrote it. It is refreshed once per session, at the podcast’s first download.

### The cover

In the same folder, `cover.jpg` (or `.png`, `.webp`, `.gif`, depending on the original format): the
podcast image declared in the feed. It is downloaded only if the folder does not already hold a
cover.

### What they are for

Two things: letting scripts and outside systems read the metadata without going through the
database, and keeping the archive readable on the day the feed disappears. With these files a
podcast folder is self-sufficient: audio, notes, numbering, fingerprints, description and cover
travel together.

---

## 8.10 ID3 tags

Also in **Settings → Files and metadata**, the **Write ID3 tags into MP3s** switch, off by default,
writes information inside the file:

* **Title**: the episode title;
* **Artist** and **Album**: the podcast name;
* **Year**: the year of publication;
* **Cover**: the episode image if the feed declares one, otherwise the podcast’s, but **only if the
  file has no embedded cover already**.

Writing is **non-destructive**: tags already in the file, such as the publisher’s chapters,
comments, links and cover, are kept. All the common audio players read the tags, so the information
stays visible even if the file name changes.

Tags are written **before** the SHA-256 fingerprint is computed, so the recorded fingerprint
describes the file exactly as it is on disk. Versions up to 1.5.x did the opposite: if you used them
with tags on, section 9.5 explains how to put the fingerprints right.

*MP3 only.* `.m4a`, `.ogg`, `.opus` and other formats are not modified, even with the option on.

---

*Chapter 9 covers file integrity, verification and archive management.*
