# Chapter 8: File organisation, templates and metadata

## 8.1 The problem with names

The name an audio file is published under is rarely meant to be read by a human:
`ep_2024_03_15_FINAL_v2_mixdown.mp3`, `podcast-episode-187-compressed.m4a`, or even
`abc123def456.mp3`. They make sense inside the producer’s systems; inside an archive they are
noise.

The program deals with this through **naming templates**: you define the format of the names once
and every downloaded file follows it, drawing on the information in the feed.

---

## 8.2 How a template works

A template is a line of text mixing fixed parts with **tokens**, that is variables in curly
brackets. Once a download finishes, each token is replaced with that episode’s value.

The template `{date} - {podcast} - {title}` gives you:

`2024-03-15 - Mario’s Podcast - Episode 187: Artificial intelligence explained properly.mp3`

The extension is not part of the template: it is added according to the format of the source file.

---

## 8.3 The available tokens

| Token | What it holds | Example |
|-------|---------------|---------|
| `{title}` | Episode title from the feed | `Episode 187: AI explained properly` |
| `{podcast}` | Podcast name | `Mario’s Podcast` |
| `{date}` | Publication date, `YYYY-MM-DD` | `2024-03-15` |
| `{year}` | Year | `2024` |
| `{month}` | Two-digit month | `03` |
| `{day}` | Two-digit day | `15` |

When an episode declares no date, the time tokens become the word `unknown`. A made-up token,
`{episode}` for instance, stays in the name exactly as written: the program does not recognise it
and leaves it alone.

---

## 8.4 Recommended templates

The default is the title on its own:

```
{title}
```

That suits catalogues whose titles are already descriptive.

For general use it is worth putting the date first:

```
{date} - {title}
```

which produces `2024-03-15 - Episode 187: AI explained properly.mp3`. The advantage is practical:
alphabetical file order matches chronological order.

If several podcasts end up in the same folder, include the programme name:

```
{podcast} - {date} - {title}
```

---

## 8.5 How names are cleaned up

Some characters are not allowed in file names: on Windows `/`, `\`, `:`, `*`, `?`, `"`, `<`, `>`,
`|`. The program **removes** them from the name the template produces, without substituting
anything: `Episode 12: The AI` becomes `Episode 12 The AI`.

Two less obvious cases are handled too. The Windows reserved names (`CON`, `PRN`, `AUX` and
company) cannot be used as file names: if the title reduces to one of those, the program falls back
on `episode`. And the full path, folder included, is kept within 250 characters: if need be, the
title is shortened, leaving room for the technical suffixes the program adds while it works
(`.part.meta` and the `_2` it may need when two names collide).

*On long titles.* Some podcasts use titles of a hundred and fifty characters. With `{title}` alone
you get unwieldy names at risk of truncation; put `{date}` at the front and the name stays sortable
and recognisable even when the tail is cut off.

---

## 8.6 Where to set it

The template is configured in **Settings → Metadata**, in the **File Naming Template** field. Below
the field a preview shows the result on a sample episode, so you can see the effect before closing
the settings.

---

## 8.7 One thing the template does not do

The template generates **a file name, not a folder structure**. Writing `{year}/{month}/{title}`
does not create subfolders by year and month: the slashes are removed along with the other
forbidden characters, and the result is a single file called `202403Title.mp3`.

The program applies exactly one piece of automatic organisation, and it concerns podcasts: inside
the destination folder each programme gets its own subfolder, named after the podcast. To subdivide
further by year, use different destination folders and switch between them from the folder icon in
the command bar.

---

## 8.8 JSON sidecar files

**Settings → Metadata** has the **Sidecar .json Files** switch, off by default.

When it is on, a `.json` file with the same name appears beside each audio file, carrying the
episode data:

```json
{
  "title": "Episode 187: AI explained properly",
  "podcast": "Mario’s Podcast",
  "guid": "https://example.com/ep187",
  "pubDate": "2024-03-15T08:00:00.000Z",
  "downloadedAt": "2026-08-18T09:14:22.517Z",
  "sourceUrl": "https://media.example.com/ep187.mp3",
  "filename": "2024-03-15 - Episode 187 AI explained properly.mp3"
}
```

It serves two purposes: letting scripts and external systems read the metadata without going
through the database, and keeping a copy independent of the database itself, which helps if the
archive ever has to be rebuilt.

---

## 8.9 ID3 tags

Also in **Settings → Metadata**, the ID3 tagging switch changes its label with its state:
**ID3 Tagging Enabled** or **ID3 Tagging Disabled**. It is off out of the box.

When it is on, the program writes the data inside the file once the download finishes:

*   **Title**: the episode title.
*   **Artist** and **Album**: the podcast name.
*   **Year**: the year of publication.
*   **Cover art**: the episode image if the feed declares one, otherwise the podcast’s.

Every widely used audio player reads these tags, so the information stays visible even if the file
name changes.

*MP3 only.* `.m4a`, `.ogg` and `.opus` files are not modified even with the option on.

---

*Chapter 9 covers file integrity and archive management.*
