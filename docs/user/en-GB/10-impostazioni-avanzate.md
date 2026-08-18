# Chapter 10: Advanced Settings

## 10.1 Overview of the Settings Panel

The settings panel is accessible at any time via the gear icon (⚙) in the upper corner of the interface. Settings are organised into five thematic tabs: **General**, **Download**, **Metadata**, **Archive**, and **Advanced**. All changes are saved automatically: it is not necessary to confirm with a dedicated button.

---

## 10.2 Download

This section contains the main controls for the download engine. Internal technical parameters (connection timeout, number of retries, stall detection) are fixed in the engine and do not require manual configuration.

### Parallel Downloads

The number of simultaneous downloads. Selectable from three presets: **1**, **3**, and **5**. For guidelines on choosing the value, see Chapter 6.

**Default value:** 3

### Download Speed Limit

Allows you to limit the aggregate bandwidth used by all active downloads, to avoid interference with other network activities.

**Available values:** `0` = unlimited (default); any positive value in KB/s. Example: `500` limits total consumption to approximately 4 Mbps.

### Maximum File Size

Rejects downloads larger than the configured cap, in **MB**. It protects against anomalous enclosures (huge files declared by mistake, or servers sending content other than the expected audio). A file over the cap is marked as a definitive error, with no retry.

**Available values:** `0` = unlimited (default); any positive value in MB.

---

## 10.3 General

### Language

FeedDownloader Pro is available in 2 languages: **Italiano** and **English**.

The language change is immediate: the interface updates without needing to restart the software. The application uses exclusively the dark "Obsidian Command" theme: no light theme or list density selector is available.

### Automatic Feed Refresh

Allows all feeds to be automatically synchronised at regular intervals, without manual intervention. A check also runs at every application startup and when the connection returns after a period offline. Four presets are available:

| Option | Behaviour |
|--------|-----------|
| **Disabled** | No periodic synchronisation (the startup check remains). |
| **6 hours** (default) | Full synchronisation every 6 hours. |
| **12 hours** | Full synchronisation every 12 hours. |
| **24 hours** | Full synchronisation every 24 hours. |

The change is immediate and does not require restarting the software. If new episodes are found during the automatic synchronisation, a clickable operating system notification is sent: it brings the app to the foreground and, if it concerns a single podcast, opens that feed. Automatic synchronisation does not start downloads: it only signals the availability of new content. For a detailed description of the behaviour, see section 5.9.

### User Guide and What's New

Also in the **General** tab you will find:

*   **"User Guide":** Opens the built-in documentation, with the **"Open the full PDF manual"** button to consult this manual.
*   **"What's new in this version":** Opens the in-app changelog with the release notes of the installed version. The same window appears automatically on the first launch after an update.

*Note:* The episode list filter bar (text search, status, date, duration) is documented in section 3.4, as it is part of the episode list rather than a setting.

---

## 10.4 Security: The Multi-Level Anti-SSRF System

This section is documented for informational purposes: the security system operates in a completely automatic manner and does not require any configuration from the user.

**What is an SSRF attack?**
SSRF (Server-Side Request Forgery) is a type of attack in which a malicious URL, instead of pointing to a public resource, points to internal network resources (such as the router administration panel, a NAS, or a local server). In the context of a downloader, a carefully crafted RSS feed could include audio URLs pointing to these internal resources.

**The validation levels:**

1.  **URL syntactic validation:** The URL is analysed to verify conformance with the standard.

2.  **Protocol validation:** Only `http://` and `https://` protocols are accepted. Protocols such as `file://`, `ftp://`, `data:`, `javascript:` are rejected immediately.

3.  **Blocking of well-known internal hostnames:** Names such as `localhost` and literal loopback addresses are rejected.

4.  **Blocking of private and reserved IP addresses:** All IP addresses belonging to private or reserved ranges are blocked, including:
    *   `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16` (RFC 1918 private networks)
    *   `127.0.0.0/8` (loopback)
    *   `169.254.0.0/16` (link-local)
    *   `::1/128` (IPv6 loopback)
    *   `fc00::/7` (IPv6 unique local)
    *   Any address pointing to the local host.

5.  **Re-validation at connection time:** The DNS-resolved IP address is checked again on every connection and every redirect. This neutralises DNS-based evasion techniques (a public domain resolving to a private address, or a redirect towards an internal resource).

*Note for corporate environments:* If the corporate network includes internal podcast servers reachable via private IP addresses, the anti-SSRF system will block these URLs. In this case, contact support for a custom configuration that includes specific IP address ranges in the internal whitelist.

---

## 10.5 Advanced

### Updates

FeedDownloader Pro includes an integrated, **consent-based** update system: no download and no installation ever happen automatically.

**Automatic check on startup:** In the installed version (package), the software automatically checks for the availability of new updates shortly after startup, by querying the releases repository. If a new version is available, the persistent **"Update available"** indicator appears in the top bar, along with a system notification — but **nothing is downloaded**.

**Manual check:** The **"Check for Updates"** button in the **Advanced** tab forces an immediate check at any time.

**Consent-based download:** The package download starts only when you press **"Download"** in the top-bar indicator, or **"Download update"** in the Settings. Once the download completes, the **"Restart & Install"** button appears: installation, too, requires an explicit user action.

**States displayed during the process:**
*   **Checking for updates...** — the software is querying the releases repository.
*   **You have the latest version** — the installed version is the most recent.
*   **Update available: vX.Y.Z** — waiting for download consent.
*   **Downloading update... N%** — download in progress (started by the user).
*   **Update downloaded — restart to install** — the package is ready for installation.

### Maintenance

The **"Clean temporary files"** button removes orphaned `.part` files left in the destination folder by past interrupted downloads. The function is unavailable while downloads are running (their `.part` files are in use). On completion, the number of removed files is shown.

### Danger Zone: Reset Download History

The **"Reset Download History"** button clears the download history recorded in the database (the "tick marks" of downloaded episodes). The software requires explicit confirmation before proceeding. Audio files on disk are **not** deleted: after the reset, episodes will appear as not downloaded again.

*When to use it:* Only when you intend to start from an empty history, for example after migrating to a new system or to remove data from a test cycle.

---

*Go to Chapter 11 for troubleshooting the most common problems.*
