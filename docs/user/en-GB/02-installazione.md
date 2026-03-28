# Chapter 2: Installation and First Launch

## 2.1 System Requirements

Runtime FeedDownloader Pro is a desktop application based on Electron technology. It is self-contained and does not require the installation of additional runtimes (Node.js, .NET, Java): everything necessary is included in the installation package.

**Minimum requirements:**

| Operating System | Minimum Version | Architecture |
|-----------------|-----------------|--------------|
| Windows | 10 (build 1903) or Windows 11 | 64-bit (x64) |
| macOS | 11.0 Big Sur | Intel x64 or Apple Silicon (M1/M2/M3) |
| Linux | Ubuntu 22.04 LTS, Debian 11, Fedora 36 or equivalent distributions | 64-bit (x64) |

**Recommended hardware:**
*   **RAM:** 4 GB (8 GB recommended for large archives with multiple active threads)
*   **Disk space:** 200 MB for the program installation, plus the space required for the audio archive
*   **Connection:** Broadband (at least 10 Mbps to use parallel downloads effectively)

*Note for Linux users:* The software is distributed in `.AppImage` format, self-contained and usable on any modern distribution with up-to-date glibc libraries, without a traditional installation procedure.

---

## 2.2 Installation on Windows

1.  Download the installation file `Runtime-FeedDownloader-Pro-Setup-0.7.5.exe` from the official releases page.
2.  Double-click the downloaded file to launch the installer.
3.  If Windows displays a **"Windows protected your PC"** warning (SmartScreen), click **"More info"** and then **"Run anyway"**. This warning is standard for software distributed outside the Microsoft Store that has not yet reached a sufficient adoption threshold for Windows' reputation system.
4.  Follow the on-screen instructions: accept the licence agreement, choose the installation folder and click **"Install"**.
5.  Upon completion, a shortcut will be available on the **Desktop** and an entry in the **Start** menu.

**Installation and data paths:**
The program is installed in `C:\Program Files\Runtime FeedDownloader Pro\`. The database and configuration files are saved separately in `C:\Users\[YourName]\AppData\Roaming\FeedDownloaderPro\`. This separation ensures that uninstalling the program does not affect the archive data.

---

## 2.3 Installation on macOS

1.  Download the file `Runtime-FeedDownloader-Pro-0.7.5.dmg`.
2.  Open the `.dmg` file with a double-click. A window displaying the application icon will appear.
3.  Drag the **FeedDownloader Pro** icon into the **Applications** folder, as indicated by the arrow in the `.dmg` window.
4.  **First launch on macOS:** Because the software is not distributed via the Mac App Store, macOS will display a security warning on first opening. To proceed:
    *   Navigate to **System Settings → Privacy & Security**.
    *   In the "Security" section, the message *"FeedDownloader Pro was blocked…"* will be visible.
    *   Click **"Open Anyway"** and then **"Open"** in the confirmation dialogue.
    *   On subsequent launches, the software will open normally with a double-click.

*Note for Apple Silicon users (M1/M2/M3):* A native ARM build is available. For optimal performance, download the `.dmg` file with the `-arm64` suffix. The x64 version can be used via Rosetta 2, but the ARM version is more efficient.

---

## 2.4 Installation on Linux

1.  Download the file `Runtime-FeedDownloader-Pro-0.7.5.AppImage`.
2.  Make the file executable. Available methods are:
    *   **Via graphical interface:** Right-click the file → Properties → Permissions tab → tick "Allow executing file as program".
    *   **Via terminal:** `chmod +x Runtime-FeedDownloader-Pro-0.7.5.AppImage`
3.  Launch the file with a double-click or from the terminal: `./Runtime-FeedDownloader-Pro-0.7.5.AppImage`

**Desktop integration (optional):**
To add FeedDownloader Pro to the launcher and application menu, use **AppImageLauncher** (available in the repositories of most distributions), which automatically integrates AppImage files into the system.

*Note for sandboxed environments:* On distributions using **Flatpak** or environments with filesystem access restrictions, the software may not be able to reach SMB network paths. In this case, verify that the network filesystem is mounted and accessible from the file manager before launching the program.

---

## 2.5 First Launch

On first opening, the software is immediately ready to use. No initial configuration is required, nor is it necessary to create an account or enter a licence key. The interface presents the URL input bar at the centre and an empty episode list.

**Files created on first launch:**
The program automatically generates the following files in the user data folder:
*   `feeddownloader.db` — The main SQLite database. Contains the complete download history, episode metadata and archive status. **This file must not be deleted.**
*   `settings.json` — User preferences (language, number of threads, default destination folder, etc.).
*   `logs/` — The log files folder, useful for diagnostics in the event of problems.

---

## 2.6 Updates

When a new version is available, the software displays a notification in the bottom bar of the interface. Installing the update always requires the user's explicit consent.

Before updating, the software automatically creates a backup of the database. In any event, archive data is not modified during an update: only the program files are replaced.

*Note:* Before updating to a major version (for example from 0.7.x to 0.8.x), it is advisable to make a manual copy of the `feeddownloader.db` file in a safe location.

---

*Go to Chapter 3 for a detailed description of the interface elements.*
