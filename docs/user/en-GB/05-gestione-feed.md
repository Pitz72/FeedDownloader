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

---

## 5.4 Feed History

FeedDownloader Pro maintains a **history of analysed feeds**. Each URL entered in the search field is stored together with the podcast name and the number of episodes, to simplify future access.

**Accessing the history:**
Click the arrow to the right of the URL field or start typing: the software proposes automatic suggestions based on the history.

**Managing the history:**
In Settings it is possible to view the complete list of feeds in the history, remove individual entries, or clear the list entirely.

*Privacy note:* The history is saved exclusively in the local database `feeddownloader.db`. No data is transmitted to external servers.

---

## 5.5 Importing Feeds from OPML

**OPML** (Outline Processor Markup Language) is the standard format for exporting and importing podcast lists between different applications. If you have a podcast library in an app such as Pocket Casts, Overcast, AntennaPod, or any other client, you can export it to OPML and import it directly into FeedDownloader Pro.

**How to import an OPML file:**
1.  Go to **Settings → Archive**, "Data and Portability" section.
2.  Select the `.opml` file exported from the podcast application.
3.  FeedDownloader Pro analyses the file and shows the list of podcasts identified, with the option to select those of interest.
4.  The selected feeds are added to the history and, optionally, analysed in automatic sequence.

*Note:* Some podcast applications use proprietary variants of the OPML format. FeedDownloader Pro supports the most widely used versions. If a file is not imported correctly, open it with a text editor and verify the presence of `<outline type="rss" xmlUrl="...">` tags for each podcast.

---

## 5.6 Exporting the Library to OPML

The feed history can be exported in OPML format to:
*   Create a backup of the podcast list.
*   Share it with other users or with another installation of the software.
*   Import it into a podcast application to follow the same feeds.

**How to export:**
1.  Go to **Settings → Archive**, "Data and Portability" section.
2.  Choose a name and location for the `.opml` file.
3.  The generated file is compatible with any application that supports the OPML standard.

---

## 5.7 Large Feeds

Some historical podcasts or radio production archives can have feeds with thousands of episodes and RSS files of considerable size. In these cases:

*   **The initial analysis takes longer:** A feed with 2,000 episodes may require 15–30 seconds for download and parsing. This behaviour is expected.
*   **List virtualisation:** With thousands of entries, the list loads only the rows visible on screen to keep the interface responsive.
*   **Estimating required space:** With 2,000 episodes at approximately 50 MB each, the total volume is approximately 100 GB. The software shows an estimate of the total size before the batch starts. Verify that sufficient space is available before proceeding.

---

## 5.8 Limitations of Multi-Feed Support

FeedDownloader Pro analyses one feed at a time. It does not have a permanent feed manager with automatic updates: the software is optimised for batch downloading, not for the continuous monitoring of multiple feeds.

To manage multiple feeds in sequence, the recommended strategy is:
1.  Use the OPML function to maintain the feed list in a centralised file.
2.  Analyse and download one podcast at a time, proceeding systematically.
3.  Use the feed history to quickly recall a previously analysed podcast.

---

*Go to Chapter 6 for a detailed description of the download engine.*
