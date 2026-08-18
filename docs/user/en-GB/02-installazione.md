# Chapter 2: Installation and First Launch

## 2.1 System Requirements

Runtime FeedDownloader Pro is a desktop application based on Electron technology. It is self-contained and does not require the installation of additional runtimes (Node.js, .NET, Java): everything necessary is included in the installation package.

**Minimum requirements:**

| Operating System | Minimum Version | Architecture |
|-----------------|-----------------|--------------|
| Windows | 10 (build 1903) or Windows 11 | 64-bit (x64) |
| Linux | Ubuntu 22.04 LTS, Debian 11, Fedora 36 or equivalent distributions | 64-bit (x64) |

**Recommended hardware:**
*   **RAM:** 4 GB (8 GB recommended for large archives with multiple active threads)
*   **Disk space:** 200 MB for the program installation, plus the space required for the audio archive
*   **Connection:** Broadband (at least 10 Mbps to use parallel downloads effectively)

*Note for Linux users:* The software is distributed in `.AppImage` format (self-contained, usable on any modern distribution with up-to-date glibc libraries, without a traditional installation procedure) and in `.deb` format for Debian/Ubuntu-based distributions.

*Note on macOS:* Official macOS builds are not distributed. The code is compatible with Electron on macOS, but compiling it is left to the user and is not supported.

---

## 2.2 Installation on Windows

1.  Download the installation file `Runtime-FeedDownloader-Pro-1.5.0.exe` from the official releases page.
2.  Double-click the downloaded file to launch the installer.
3.  If Windows displays a **"Windows protected your PC"** warning (SmartScreen), click **"More info"** and then **"Run anyway"**. This warning is standard for software distributed outside the Microsoft Store that has not yet reached a sufficient adoption threshold for Windows' reputation system.
4.  Follow the on-screen instructions: accept the licence agreement, choose the installation folder and click **"Install"**.
5.  Upon completion, a shortcut will be available on the **Desktop** and an entry in the **Start** menu.

**Installation and data paths:**
The program is installed in `C:\Program Files\Runtime FeedDownloader Pro\`. The database is saved separately in `C:\Users\[YourName]\AppData\Roaming\Runtime FeedDownloader Pro\`. This separation ensures that uninstalling the program does not affect the archive data.

---

## 2.3 Installation on Linux

1.  Download the file `Runtime-FeedDownloader-Pro-1.5.0.AppImage` (or the `.deb` package for Debian/Ubuntu).
2.  Make the `.AppImage` file executable. Available methods are:
    *   **Via graphical interface:** Right-click the file → Properties → Permissions tab → tick "Allow executing file as program".
    *   **Via terminal:** `chmod +x Runtime-FeedDownloader-Pro-1.5.0.AppImage`
3.  Launch the file with a double-click or from the terminal: `./Runtime-FeedDownloader-Pro-1.5.0.AppImage`

For the `.deb` package: install with `sudo dpkg -i Runtime-FeedDownloader-Pro-1.5.0.deb` (or with your distribution's graphical package manager).

**Desktop integration (optional):**
To add FeedDownloader Pro to the launcher and application menu, use **AppImageLauncher** (available in the repositories of most distributions), which automatically integrates AppImage files into the system.

*Note for sandboxed environments:* On distributions using **Flatpak** or environments with filesystem access restrictions, the software may not be able to reach SMB network paths. In this case, verify that the network filesystem is mounted and accessible from the file manager before launching the program.

---

## 2.4 First Launch

On first opening, the software is immediately ready to use. No initial configuration is required, nor is it necessary to create an account or enter a licence key. The interface presents the URL input bar at the centre and an empty episode list.

**Files created on first launch:**
The program automatically generates the following file in the user data folder:
*   `feeddownloader.sqlite` — The main SQLite database. Contains the complete download history, episode metadata, user preferences (language, parallel downloads, destination folder, etc.) and archive status. **This file must not be deleted.**

---

## 2.5 Updates

The update system always works **with the user's consent**, in three steps:

1.  On launch (and on demand via **Settings → Advanced → Check for Updates**), the software checks whether a new version exists. If one is available, a persistent **"Update available"** indicator appears in the top bar of the interface.
2.  The package download starts **only** when you press the indicator's **"Download"** button (or **"Download update"** in the Settings). No download ever starts automatically.
3.  Once downloaded, the indicator changes to **"Update ready"**: press **"Restart & install"** to apply the update. Installation, too, never happens automatically.

Archive data is not modified during an update: only the program files are replaced. On the first launch after an update, the **"What's new in this version"** window summarises the changes introduced.

*Note:* Before updating to a major version (for example from 1.4.x to 1.5.x), it is advisable to make a manual copy of the `feeddownloader.sqlite` file in a safe location.

---

*Go to Chapter 3 for a detailed description of the interface elements.*
