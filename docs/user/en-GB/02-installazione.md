# Chapter 2: Installation and first launch

## 2.1 System requirements

Runtime FeedDownloader Pro is a desktop application built on Electron. It is self-contained: it
does not need Node.js, .NET or Java installed, because everything it requires ships in the
package.

Minimum requirements:

| Operating system | Minimum version | Architecture |
|------------------|-----------------|--------------|
| Windows | 10 (build 1903) or Windows 11 | 64-bit (x64) |
| Linux | Ubuntu 22.04 LTS, Debian 11, Fedora 36 or equivalent | 64-bit (x64) |

Recommended hardware:

* **Memory:** 4 GB, better 8 GB for large archives with many parallel downloads
* **Disk:** 200 MB for the program, plus room for the audio archive
* **Screen:** the window does not go below 960 × 620 pixels; the full layout, with every panel side
  by side, is best from 1366 pixels wide upwards
* **Network:** broadband, at least 10 Mbps for parallel downloads to make sense

*Note for Linux.* The software ships as an `.AppImage` (self-contained, runs on any recent
distribution without installing) and as a `.deb` for Debian- and Ubuntu-based distributions.

*Note on macOS.* There are no official macOS builds and none are planned. The source code can be
compiled on a Mac, but building it is up to whoever does so, and it is not supported.

---

## 2.2 Installing on Windows

1. Download `Runtime-FeedDownloader-Pro-1.6.0.exe` from the project’s releases page.
2. Double-click the downloaded file.
3. If the **Windows protected your PC** warning (SmartScreen) appears, click **More info** and then
   **Run anyway**. The warning is normal for programs distributed outside the Microsoft Store and
   without a commercial signature: it is about the file’s reputation, not its contents.
4. Choose the installation folder and click **Install**.
5. When it finishes, you will find the shortcut on the desktop and in the Start menu.

**Where the files go.** Installation is per user and needs no administrator rights: the program
goes into `C:\Users\[YourName]\AppData\Local\Programs\Runtime FeedDownloader Pro\` unless you
choose otherwise during setup. The database lives elsewhere, in
`C:\Users\[YourName]\AppData\Roaming\Runtime FeedDownloader Pro\`, so uninstalling the program
leaves the archive untouched.

---

## 2.3 Installing on Linux

1. Download `Runtime-FeedDownloader-Pro-1.6.0.AppImage`, or the `.deb` package for Debian and
   Ubuntu.
2. Make the AppImage executable, in either of two ways:
   * from the desktop: right-click the file → Properties → Permissions → tick “allow executing as a
     program”;
   * from a terminal: `chmod +x Runtime-FeedDownloader-Pro-1.6.0.AppImage`.
3. Launch it with a double-click or from a terminal: `./Runtime-FeedDownloader-Pro-1.6.0.AppImage`.

For the Debian package: `sudo dpkg -i Runtime-FeedDownloader-Pro-1.6.0.deb`, or your distribution’s
graphical package manager.

**Desktop integration.** To get an icon in the applications menu you can use **AppImageLauncher**,
available in most distributions’ repositories, which registers AppImages with the system.

*Note for sandboxed environments.* Under **Flatpak** or other environments that restrict file-system
access, the program may not see SMB network paths. In that case, check that the share is mounted
and reachable from the file manager before starting the application.

*Note for GNOME.* The notification-area icon needs the AppIndicator extension. Without a
notification area, closing the window also quits the program (section 3.13).

---

## 2.4 First launch

### The entry screen

When the program opens, the entry screen appears: the program’s mark inside an animated orbit, the
name and a line summing up what it is for. The animation lasts under four seconds and then stops;
with **Reduce animations and effects** turned on (chapter 10), the screen appears already composed.

On the same screen you will find:

* the **Interface language** choice, **Italiano** or **English**: on first launch the program
  proposes the operating system’s language;
* a status line about updates (*Checking for updates…*, or the version available);
* the **Enter FeedDownloader** button, which takes you into the interface; it already has the
  focus, so pressing `Enter` is enough;
* three links: **Guide** (the built-in documentation), **Manual** (this manual as a PDF) and
  **Support the project**.

The screen returns every time the program opens.

### The empty library

Once in, the software is ready to use. There is no setup, no account, no licence key. With the
library empty, the **Library** view shows a welcome panel with two buttons, **Add feed** and
**Import from OPML**, and the three steps to get started: add a feed, choose the folder, archive.

**The default download folder.** Until you choose another, files go to
`Documents\FeedDownloader\downloads` (on Linux `~/Documents/FeedDownloader/downloads` or its
localised equivalent). You change it from **Settings → Downloads → Change folder** (chapter 4,
section 4.3).

**Files created on first launch.** A single file appears in the user data folder:

* `feeddownloader.sqlite`, the database. It holds the download history, the archive with its
  fingerprints, the feed list, the saved queue and your preferences (download folder, parallel
  downloads, bandwidth and size limits, check interval, interface size). **Do not delete this
  file.**

The interface language is the exception: the program remembers it alongside the display
preferences, not in the database, and you change it from the entry screen or from **Settings →
General**.

---

## 2.5 Updates

Updates always need your explicit consent. The path has three steps.

1. At launch, and on request from **Settings → About → Check for updates**, the program checks
   whether a newer version exists. If it finds one, the **Version X.Y.Z available** notice appears
   in the top bar, together with a system notification. The notice stays until you act; the ×
   (**Hide notice**) removes it until the next restart or the next check.
2. The download starts **only** when you press **Download** on the notice or in Settings. While it
   downloads, the notice reads **Downloading update N%**. Nothing is downloaded on the program’s own
   initiative.
3. Once the download completes, the notice becomes **Update ready**: pressing **Restart and
   install** closes the program, applies the update and starts it again. Installation does not
   happen by itself either, and it is not triggered when the application closes.

The update replaces the program’s files and leaves the archive alone. On the first launch of the
new version, the **What’s new** window summarises what has changed; you can reopen it at any time
from **Settings → About → What’s new**.

**Moving from 1.5 to 1.6.** On first opening, 1.6.0 adds the new columns and tables to the database
(each episode’s folder, automatic archiving, the saved queue) and completes the existing data: the
episodes already archived are linked to the download folder in use at that moment. No data is
removed.

*Tip.* Before a major version jump like this one, copy `feeddownloader.sqlite` somewhere safe. If
you used ID3 tagging in earlier versions, section 9.5 explains how to refresh the fingerprints of
the files already downloaded.

---

*Chapter 3 describes the interface view by view.*
