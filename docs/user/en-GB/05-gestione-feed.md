# Chapter 5: Feed Management

## 5.1 What is an RSS Feed

An RSS feed is an XML document published by a podcast to allow applications to automatically read the list of available episodes. When a publisher releases a new episode, they update this document by adding a new entry. Podcast applications periodically read these documents to identify the most recent content.

For FeedDownloader Pro, the RSS feed is the **primary data source**: it contains the episode list, audio file URLs, metadata (title, date, duration, description, cover art), and general podcast information (name, author, category).

Knowledge of the internal structure of an RSS feed is not necessary to use the software, but it facilitates the interpretation of data displayed in the episode list and the understanding of why some information may be missing or incomplete.

---

## 5.2 Valid Feeds and Problematic Feeds

Not all RSS feeds comply with the same level of adherence to the standards.

**Well-formed feed:** Follows the RSS 2.0 or Atom standard, includes all required fields (title, link, publication date, audio URL with MIME type), and optionally the iTunes/Podcast Index tags for duration, cover art, and seasons. FeedDownloader Pro reads these feeds without issue.

**Partially incomplete feed:** Some optional fields are missing (duration, file size, episode cover art). The software downloads the audio files regardless, but some columns in the list will remain empty.

**Feed with unreachable audio URLs:** The feed is readable, but the audio file URLs point to resources that no longer exist (404 error). This situation is common with abandoned podcasts or those migrated to other servers. FeedDownloader Pro marks these episodes with **"Error"** status after the download attempt.

**Authentication-protected feeds:** Some private or paid podcasts require HTTP Basic credentials to access the feed. The software supports these feeds: credentials are included directly in the URL in the format `https://username:password@www.example.com/feed.xml`.

---

## 5.3 Analysing a Feed: Detail

When **"Analyse"** is clicked, FeedDownloader Pro performs the following operations in sequence:

1.  **URL validation:** Verifies that the URL is syntactically correct and passes the 5 anti-SSRF checks (see Chapter 10 for details).
2.  **HTTP request:** Contacts the feed server with a standard user-agent. The timeout for this operation is 30 seconds.
3.  **XML parsing:** Reads and analyses the RSS or Atom document. The software handles feeds with minor deviations from the standards (undeclared encoding, missing tags, unconventional namespaces).
4.  **Deduplication:** For each episode in the feed, the database is queried to verify whether the episode has already been downloaded. The audio URL is used as the unique identification key.
5.  **List population:** All episodes are displayed with their current status.
6.  **Adding to the library:** The feed is permanently inserted into the sidebar if it is not already present. Feeds already in the library are updated with the latest episode count.

---

## 5.4 The Feed Library

FeedDownloader Pro maintains a **permanent feed library**. Each analysed feed is saved in the sidebar and remains available between sessions, with no need to re-enter the URL at every launch.

### Display

Each item in the library shows: the podcast cover art (thumbnail), the title, the date of the last synchronisation with the server, and a numerical badge indicating how many episodes have been published since the last download. The badge disappears as soon as all the new episodes have been downloaded.

Clicking on a feed in the sidebar immediately updates the episode list in the main area.

### Removing a feed from the library

To remove a feed, hover over the entry in the sidebar: the bin button appears on the right side of the row. Clicking it opens a confirmation dialog. Removal deletes the feed from the library but **does not delete the audio files already downloaded** nor the related data in the database; the episodes remain visible in the Archive View.

### Search and sorting

*   **Feed search:** The search field at the top of the sidebar filters feeds by name in real time. Useful with large libraries.
*   **A–Z sorting:** The sort button arranges feeds alphabetically by title. Clicking it again restores the original order.

*Privacy note:* The feed library is saved exclusively in the local database. No data is transmitted to external servers.

---

## 5.5 Importing Feeds from OPML

**OPML** (Outline Processor Markup Language) is the standard format for exporting and importing podcast lists between different applications. If you have a podcast library in an app such as Pocket Casts, Overcast, AntennaPod, or any other client, you can export it to OPML and import it directly into FeedDownloader Pro.

**How to import an OPML file:**

1.  Go to **Settings → Archive**, "Data and Portability" section.
2.  Click **Import Feeds (OPML)** and select the `.opml` file exported from the podcast application.
3.  FeedDownloader Pro analyses the file and adds the identified feeds to the library.

*Note:* Some podcast applications use proprietary variants of the OPML format. FeedDownloader Pro supports the most widely used versions. If a file is not imported correctly, open it with a text editor and verify the presence of `<outline type="rss" xmlUrl="...">` tags for each podcast.

---

## 5.6 Exporting the Library to OPML

The feed library can be exported in OPML format to:

*   Create a backup of the podcast list.
*   Share it with other users or with another installation of the software.
*   Import it into a podcast application to follow the same feeds.

**How to export:**

1.  Go to **Settings → Archive**, "Data and Portability" section.
2.  Click **Export Feeds (OPML)** and choose a name and location for the file.
3.  The generated file is compatible with any application that supports the OPML standard.

---

## 5.7 Large Feeds

Some historical podcasts or radio production archives can have feeds with thousands of episodes and RSS files of considerable size. In these cases:

*   **The initial analysis takes longer:** A feed with 2,000 episodes may require 15–30 seconds for download and parsing. This behaviour is expected.
*   **List virtualisation:** With thousands of entries, the list loads only the rows visible on screen to keep the interface responsive.
*   **Estimating required space:** With 2,000 episodes at approximately 50 MB each, the total volume is approximately 100 GB. Verify that sufficient space is available before proceeding.

---

## 5.8 Managing Multiple Feeds

FeedDownloader Pro natively manages a library of multiple feeds. There is no limit to the number of podcasts that can be added: all are kept in the sidebar and remain accessible between sessions.

### Navigating between feeds

Clicking on a feed in the sidebar immediately updates the episode list in the main area. The software remembers which feed was selected at the last closure.

### Synchronising feeds

*   **Individual synchronisation:** Hover the mouse over a feed entry in the sidebar to display the sync icon. Clicking it makes the software re-read that feed from the server and update the list with any new episodes.
*   **Sync All:** The "Sync All" button refreshes all feeds in parallel in a single operation. During the process, each thumbnail in the sidebar shows its own status in real time. On completion, any new episodes are highlighted with the new-episodes badge.

For scheduled automatic refresh without manual intervention, see section 5.9.

---

## 5.9 Automatic Feed Refresh

FeedDownloader Pro can automatically synchronise all feeds at regular intervals, in the background, without requiring any action from the user.

### Configuration

The setting is found in **Settings → General → Automatic feed refresh**. Four options are available:

| Option | Behaviour |
|--------|-----------|
| **Disabled** (default) | No automatic synchronisation. |
| **Every 6 hours** | The software synchronises all feeds every 6 hours from startup. |
| **Every 12 hours** | The software synchronises all feeds every 12 hours from startup. |
| **Every 24 hours** | The software synchronises all feeds once every 24 hours from startup. |

The setting change is immediate and does not require restarting the software. The timer starts from application startup.

### Behaviour

Automatic refresh **does not start downloads**: it only checks whether new episodes have been published. If during the automatic synchronisation new episodes are found on one or more feeds, the system sends an **operating system notification** with a summary of the content found (available in all 8 supported languages).

To download the reported new episodes, open the software and use the normal batch controls.

---

*Go to Chapter 6 for a detailed description of the download engine.*
