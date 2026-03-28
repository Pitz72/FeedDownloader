# Chapter 10: Advanced Settings

## 10.1 Overview of the Settings Panel

The settings panel is accessible at any time via the gear icon (⚙) in the upper corner of the interface. Settings are organised into five thematic tabs: **General**, **Download**, **Metadata**, **Archive**, and **Advanced**. All changes are saved automatically: it is not necessary to confirm with a dedicated button.

---

## 10.2 Download

This section contains the main controls for the download engine. Internal technical parameters (connection timeout, number of retries, stall detection) are fixed in the engine and do not require manual configuration.

### Parallel Threads

The number of simultaneous downloads. Selectable from three presets: **1**, **3**, and **5**. For guidelines on choosing the value, see Chapter 6.

**Default value:** 3

### Speed Limit

Allows you to limit the aggregate bandwidth used by all active downloads, to avoid interference with other network activities.

**Available values:** `0` = no limit (default); any positive value in KB/s. Example: `500` limits total consumption to approximately 4 Mbps.

---

## 10.3 Keyword Filter

The text filter allows you to **narrow the list of displayed episodes** based on text contained in the title. It is a consultation and quick selection tool, particularly useful with large catalogues.

**How to use the filter:**
The filter bar is positioned at the top of the episode list, immediately below the batch controls. By typing one or more terms, the list updates in real time showing only the episodes whose title contains **all the entered terms** (AND logic).

*   To search for episodes containing the word "interview", type `interview`.
*   To search for episodes containing both "interview" and "2024", type `interview 2024`.
*   The filter is not case-sensitive: `Bonus` and `bonus` produce the same result.

**Typical use cases:**
*   Quickly identifying episodes from a specific season in an extensive catalogue.
*   Selecting a subset of episodes to download without scrolling through the entire list.
*   Verifying whether an episode with a particular title is already present in the database.

*Note:* The filter acts on the display of the current list and does not modify the download queue or the status of episodes in the database. To remove the filter, clear the text bar.

---

## 10.4 General

### Language

FeedDownloader Pro is available in 8 languages: Italian, English, Deutsch, Español, Français, Português, Русский, 中文.

The language change is immediate: the interface updates without needing to restart the software. The application uses exclusively the dark "Obsidian Command" theme: no light theme or list density selector is available.

---

## 10.5 Security: The 5-Level Anti-SSRF System

This section is documented for informational purposes: the security system operates in a completely automatic manner and does not require any configuration from the user.

**What is an SSRF attack?**
SSRF (Server-Side Request Forgery) is a type of attack in which a malicious URL, instead of pointing to a public resource, points to internal network resources (such as the router administration panel, a NAS, or a local server). In the context of a downloader, a carefully crafted RSS feed could include audio URLs pointing to these internal resources.

**The 5 validation levels:**

1.  **Protocol validation:** Only `http://` and `https://` protocols are accepted. Protocols such as `file://`, `ftp://`, `data:`, `javascript:` are rejected immediately.

2.  **URL syntactic validation:** The URL is analysed to verify conformance with the RFC 3986 standard.

3.  **DNS resolution with IP inspection:** The domain in the URL is resolved to an IP address. If resolution fails, the URL is rejected. If resolution succeeds, the resulting IP address is verified at the next level.

4.  **Blocking of private and reserved IP addresses:** All IP addresses belonging to private or reserved ranges are blocked, including:
    *   `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16` (RFC 1918 private networks)
    *   `127.0.0.0/8` (loopback)
    *   `169.254.0.0/16` (link-local)
    *   `::1/128` (IPv6 loopback)
    *   `fc00::/7` (IPv6 unique local)
    *   Any address pointing to the local host.

5.  **Blocking of non-standard ports:** Only ports 80 and 443 are accepted. URLs with non-standard ports (e.g. `:8080`, `:3000`, `:22`) are rejected.

*Note for corporate environments:* If the corporate network includes internal podcast servers reachable via private IP addresses, the anti-SSRF system will block these URLs. In this case, contact support for a custom configuration that includes specific IP address ranges in the internal whitelist.

---

## 10.6 Advanced

### Updates

FeedDownloader Pro includes an integrated automatic update system.

**Automatic check on startup:** In the installed version (package), the software automatically checks for the availability of new updates 3 seconds after startup, by querying the GitHub repository. If a new version is available, the download begins in the background without requiring any action.

**Manual check:** The **"Check for Updates"** button in the **Advanced** tab forces an immediate check at any time.

If a new version is available, the software downloads it in the background and shows the **"Install and Restart"** button. The installation is never started automatically: the decision always rests with the user.

**States displayed during the process:**
*   **Checking for updates…** — the software is querying the GitHub repository.
*   **Up to date** — the installed version is the most recent.
*   **New version available (vX.Y.Z)** — background download in progress.
*   **Update ready** — the package has been downloaded and is ready for installation.

### Reset Database

Completely deletes the database and starts again with an empty archive. **This operation is irreversible.** The software requires explicit double confirmation before proceeding. Audio files on disk are not deleted: only the software's internal memory is cleared (download history, metadata, statistics).

*When to use it:* Only when you intend to start from a completely empty archive, for example after migrating to a new system or to remove data from a test cycle.

---

*Go to Chapter 11 for troubleshooting the most common problems.*
