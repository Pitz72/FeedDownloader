# Runtime FeedDownloader Pro
**The most powerful way to archive your podcasts.**

## What is it
Runtime FeedDownloader Pro is a professional tool designed for archivists, publishers, and enthusiasts who need to download entire podcast catalogs for offline preservation.
Unlike standard players, this software is optimized for mass downloading (Batch), network resilience, and file system organization.

## Key Features
- **"Database-First" Engine:** The system remembers what you've downloaded regardless of files on disk.
- **Auto-Update:** Integrated automatic updates via GitHub Releases (v0.7.6).
- **NAS/SMB Support:** Native validation and timeout (8s) for network paths to prevent UI freezes (v0.7.6).
- **Health Check:** Automatic restoration of missing episodes on disk with database resynchronization (v0.7.6).
- **Data Integrity:** Automatic SHA-256 calculation and audio metadata extraction (bitrate, sample rate) post-download (v0.7.4).
- **Archive Migration:** Move the entire library to a new path/disk with automatic DB update (v0.6.10).
- **Batch Download:** Download hundreds of episodes with one click, with intelligent queue management.
- **Data Portability:** Import and Export your feeds via OPML standard. Generate detailed CSV reports of your archive.
- **Advanced Safety:** Anti-corruption system for full disks, intelligent offline mode, and input feed validation.
- **Integrated Help:** Complete user guide accessible directly within the application.
- **Smart Truncate:** Automatically renames files to avoid path length errors on Windows.
- **Resilience:** Automatically retries downloads if the connection drops.
- **Performance:** Handles feeds with thousands of episodes without slowdowns.

## Quick Instructions
1.  **Analyze:** Paste the RSS feed URL into the main bar and press "Analyze".
2.  **Choose Folder:** Click the folder icon to decide where to save the archive.
3.  **Download:** Use the "Download All" button for the entire archive or download individual episodes manually.
4.  **Manage:** Use Settings (gear icon) to manage language or reset the database.

## System Requirements
The software is Cross-Platform and runs natively on:
- **Windows**: 10/11 (64-bit)
- **macOS**: 11.0 (Big Sur) or higher (Intel & Apple Silicon)
- **Linux**: Modern distributions (Ubuntu, Debian, Fedora) via AppImage or .deb
- Active Internet connection

## Download

Official packages for all platforms are available on [GitHub Releases](https://github.com/Pitz72/FeedDownloader/releases), built automatically via GitHub Actions.

| Platform | Format | Notes |
|---|---|---|
| Windows 10/11 | `.exe` (NSIS installer) | Unsigned — see SmartScreen note |
| macOS 11+ | `.dmg` / `.zip` | Unsigned — see Gatekeeper note |
| Linux | `.AppImage` / `.deb` | No signing required |

**Windows — SmartScreen warning:** On first launch, Windows Defender may show a "Windows protected your PC — Unknown Publisher" screen. The software is safe. Click **More info** → **Run anyway**.

**macOS — Gatekeeper warning:** The package is not signed with an Apple Developer certificate. On first launch, macOS may block it. To open: right-click the app → **Open**, or go to **System Settings → Privacy & Security → Open Anyway**.

*Developed with Electron & React technology to ensure performance and stability.*
