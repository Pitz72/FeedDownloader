# Chapter 8: File Organisation, Templates, and Metadata

## 8.1 The Problem of Non-Meaningful Names

When an audio file is published on a podcast server, its original name is often difficult to read: `ep_2024_03_15_FINAL_v2_mixdown.mp3`, `podcast-episode-187-compressed.m4a`, or even just `abc123def456.mp3` are common examples. These names make sense for the producer's systems, but make an archive difficult to browse.

FeedDownloader Pro resolves this problem through the **rename template system**: a mechanism that allows you to define a custom name format for all downloaded files, using information extracted directly from the RSS feed.

---

## 8.2 How the Template Works

A rename template is a text string that can contain fixed text and **tokens** — variables enclosed in single curly braces (`{ }`). Upon completion of each download, the software replaces each token with the corresponding value for the episode.

**Example:**

Configured template: `{date} - {podcast} - {title}`

Result: `2024-03-15 - Mario's Podcast - Episode 187: Artificial Intelligence Explained.mp3`

The file extension (`.mp3`, `.m4a`, etc.) is added automatically based on the format of the original file: it is not part of the template.

---

## 8.3 Available Tokens

| Token | Description | Example |
|-------|-------------|---------|
| `{title}` | Episode title from the RSS feed | `Episode 187: AI Explained` |
| `{podcast}` | Podcast name (RSS channel title) | `Mario's Podcast` |
| `{date}` | Publication date in `YYYY-MM-DD` format | `2024-03-15` |
| `{year}` | Publication year | `2024` |
| `{month}` | Publication month (2 digits) | `03` |
| `{day}` | Publication day (2 digits) | `15` |

*Note:* If text is entered in the template within curly braces that does not correspond to any of the listed tokens (for example `{episode}`), the text is left unchanged in the resulting file name.

---

## 8.4 Recommended Templates

**Default template:**
```
{title}
```
The default template uses the episode title alone. It is suitable for catalogues with descriptive titles.

**For general use (recommended):**
```
{date} - {title}
```
Result: `2024-03-15 - Episode 187: AI Explained.mp3`

This format is recommended because alphabetical sorting of the files coincides with chronological ordering.

**For multi-podcast archives (shared folder):**
```
{podcast} - {date} - {title}
```
Result: `Mario's Podcast - 2024-03-15 - Episode 187.mp3`

Useful when all podcasts are saved in the same destination folder.

**For organisation into subfolders by year and month:**
```
{year}/{month}/{date} - {title}
```
Creates an automatic subfolder structure (see section 8.7).

---

## 8.5 Automatic Name Normalisation

Some characters are not permitted in file names on the main operating systems: `/`, `\`, `:`, `*`, `?`, `"`, `<`, `>`, `|` on Windows.

FeedDownloader Pro automatically applies **normalisation** to the name produced by the template:

*   Non-permitted characters are replaced with a hyphen (`-`) or removed.
*   Double spaces are reduced to a single space.
*   Leading and trailing hyphens or spaces are removed.
*   The name is truncated to 240 characters if it exceeds the filesystem limit.

*Note on long titles:* Some podcasts use very descriptive titles (over 150 characters). Using the `{title}` token in the template may produce very long file names. In these cases, pairing `{date}` as the primary chronological element can limit the overall length of the name.

---

## 8.6 Configuring the Template

The rename template is configured in **Settings → Metadata**.

The text field accepts any combination of text and tokens. Beneath the field, a real-time preview is available showing the result of the template applied to a sample episode, to verify the format before saving.

The default template is `{title}`.

---

## 8.7 Organisation into Subfolders

In the template it is possible to use the `/` character to create an automatic **subfolder** structure within the destination folder.

**Example — organisation by year and month:**
```
{year}/{month}/{date} - {title}
```

With a destination folder of `D:\Podcast Archive\Mario's Podcast\`, the result will be:
```
D:\Podcast Archive\Mario's Podcast\
    ├── 2024\
    │   ├── 01\
    │   │   ├── 2024-01-08 - First Episode of the Year.mp3
    │   │   └── 2024-01-22 - Second Episode.mp3
    │   └── 03\
    │       └── 2024-03-15 - Episode 187.mp3
    └── 2023\
        └── 12\
            └── 2023-12-20 - Last Episode of 2023.mp3
```

Subfolders are created automatically if they do not exist.

*Caution:* The `\` (backslash) character is not supported as a path separator in the template. Always use `/` (forward slash), which the software correctly translates for the operating system in use.

---

## 8.8 Sidecar JSON Files

The **"Sidecar .json File"** toggle is available in the **Settings → Metadata** tab.

When enabled, for each downloaded audio file a `.json` file is created with the same name in the same folder. The file contains the episode metadata in structured format:

```json
{
  "title": "Episode 187: AI Explained",
  "podcast": "Mario's Podcast",
  "date": "2024-03-15",
  "sourceUrl": "https://media.example.com/ep187.mp3"
}
```

**Use cases:**
*   Integration with automation scripts or systems that read metadata directly from the filesystem without querying the database.
*   Preserving metadata independently of the database, useful in the event of archive migration or reconstruction.

This option is disabled by default.

---

## 8.9 ID3 Tagging

The **"ID3 Tagging"** toggle is available in the **Settings → Metadata** tab.

When enabled, upon completion of each download the software writes metadata directly into the `.mp3` file, in the standard ID3 tags:

*   **Title:** The episode title
*   **Artist:** The podcast name
*   **Year:** The publication year
*   **Cover art:** The podcast image (if available in the RSS feed)

ID3 tags are recognised by major audio players (Windows Media Player, VLC, iTunes, Foobar2000) and allow episode information to be displayed independently of the file name.

*Note:* ID3 tagging applies exclusively to `.mp3` files. Files in other formats (`.m4a`, `.ogg`, `.opus`) are not modified, even with this option active.

This option is disabled by default.

---

*Go to Chapter 9 for integrity verification and archive management.*
