# Chapter 2: Installation and first launch

## 2.1 System requirements

Runtime FeedDownloader Pro is a desktop application built on Electron. It is self-contained: it
does not need Node.js, .NET or Java installed on the machine, because everything it uses travels
inside the package.

**Minimum requirements**

| Operating system | Minimum version | Architecture |
|------------------|-----------------|--------------|
| Windows | 10 (build 1903) or Windows 11 | 64-bit (x64) |
| Linux | Ubuntu 22.04 LTS, Debian 11, Fedora 36 or equivalent | 64-bit (x64) |

**Recommended hardware**

*   **Memory:** 4 GB, better 8 GB for large archives with several downloads running in parallel
*   **Disk:** 200 MB for the program, plus the space the audio archive needs
*   **Network:** broadband, at least 10 Mbps for parallel downloads to be worth having

*A note for Linux.* The software ships as an `.AppImage` (self-contained, runs on any recent
distribution without installation) and as a `.deb` for Debian- and Ubuntu-derived distributions.

*A note on macOS.* There are no official macOS builds and none are planned. The source code can be
compiled on a Mac, but the build is the responsibility of whoever runs it and is not supported.

---

## 2.2 Installing on Windows

1.  Download `Runtime-FeedDownloader-Pro-1.5.0.exe` from the releases page.
2.  Double-click the downloaded file.
3.  If the **Windows protected your PC** warning appears (SmartScreen), press **More info** and
    then **Run anyway**. The warning is normal for programs distributed outside the Microsoft Store
    without a commercial signature: it concerns the file’s reputation, not its contents.
4.  Choose the installation folder and press **Install**.
5.  When it finishes you will find a desktop shortcut and a Start menu entry.

**Where the files go.** The installation is per user and needs no administrator privileges: the
program goes to `C:\Users\[YourName]\AppData\Local\Programs\Runtime FeedDownloader Pro\` unless you
choose otherwise during setup. The database lives elsewhere, in
`C:\Users\[YourName]\AppData\Roaming\Runtime FeedDownloader Pro\`, so uninstalling the program does
not touch the archive.

---

## 2.3 Installing on Linux

1.  Download `Runtime-FeedDownloader-Pro-1.5.0.AppImage`, or the `.deb` package for Debian and
    Ubuntu.
2.  Make the AppImage executable, either way:
    *   from the desktop: right-click the file → Properties → Permissions → tick the option to run
        it as a program;
    *   from a terminal: `chmod +x Runtime-FeedDownloader-Pro-1.5.0.AppImage`
3.  Launch it with a double-click or from a terminal:
    `./Runtime-FeedDownloader-Pro-1.5.0.AppImage`

For the Debian package: `sudo dpkg -i Runtime-FeedDownloader-Pro-1.5.0.deb`, or the distribution’s
graphical package manager.

**Desktop integration.** To get an icon in the applications menu you can use **AppImageLauncher**,
available in most distribution repositories, which registers AppImages with the system.

*A note for sandboxed environments.* Under **Flatpak** or other environments that restrict
filesystem access, the program may not see SMB network paths. In that case, check that the share is
mounted and reachable from the file manager before launching the application.

---

## 2.4 The first launch

At startup a brief splash screen appears with the program name and two buttons,
**Start Application** and **Skip**: the second takes you straight to the interface, the first does
the same once the animation ends. The screen returns every time you open the program.

After that the software is ready. No configuration is needed, no account, no licence key. The
interface opens with the URL field at the top and an empty episode list.

**Files created on first launch.** A single file appears in the user data folder:

*   `feeddownloader.sqlite`, the database. It holds the download history, the episode metadata, the
    list of feeds and the preferences (destination folder, parallel downloads, speed and size caps,
    refresh interval). **Do not delete this file.**

The interface language is the exception: the program remembers it alongside the display
preferences rather than inside the database, and you choose it from **Settings → General**.

---

## 2.5 Updates

Updates always require your explicit consent. The path has three steps.

1.  At startup, and on demand from **Settings → Advanced → Check for Updates**, the program checks
    whether a newer version exists. If it finds one, the **Update available** banner appears in the
    top bar and stays there until you act on it (you can close it with the ×, and it returns on the
    next launch or the next check).
2.  The download starts **only** when you press **Download** on the banner, or **Download update**
    in the settings. Nothing is fetched on the program’s own initiative.
3.  Once the download completes, the banner becomes **Update ready**: press **Restart & install**
    and the program closes, applies the update and starts again. Installation does not happen on
    its own either, and it is not triggered when you quit the application.

The update replaces the program files and leaves the archive alone. The first time the new version
starts, the **What's new in this version** window sums up what changed.

*A suggestion.* Before a major version jump (say from 1.4.x to 1.5.x), it is worth copying
`feeddownloader.sqlite` somewhere safe.

---

*Chapter 3 describes the interface element by element.*
