# Chapter 7: NAS, Network Drives, and SMB Paths

## 7.1 Why Network Drives Require a Specific Approach

Most desktop download applications handle local paths (`C:\`, `D:\`) correctly and exhibit unpredictable behaviour when the destination is a NAS, a shared Windows server, or an SMB unit. The reason is technical: network drives are inherently less reliable than local drives. The NAS may be switched off, the local network may experience latency spikes, SMB credentials may expire. Any operation on a network path that is not responding can block the application's main thread for tens of seconds, rendering the interface unresponsive.

FeedDownloader Pro handles these scenarios correctly. For users who archive to NAS, this chapter is essential.

---

## 7.2 How Network Path Validation Works

Every time a destination path is set that begins with `\\` (UNC path, typical of SMB) or corresponds to a mapped network drive (e.g. `Z:\`), FeedDownloader Pro automatically activates the **network path validation module**.

This module performs three operations on a **separate thread**, without ever involving the interface thread:

1.  **Reachability test:** Attempts to access the root of the network path. If the NAS is not switched on or the network is unavailable, this operation fails.
2.  **Read access test:** Verifies that the destination folder exists and is readable.
3.  **Write access test:** Creates and then deletes a temporary file (`_fdp_write_test_[timestamp].tmp`) in the destination folder to verify write permissions.

The entire sequence has an **8-second timeout**. If no response is received within this interval, the software considers the path unavailable and displays a warning, without blocking the interface.

*Rationale for the timeout:* Most consumer NAS devices (Synology, QNAP, WD MyCloud) take 3–6 seconds to wake from sleep mode. 8 seconds is a sufficient interval to await this recovery, whilst remaining short enough not to constitute a perceptible wait for the user.

---

## 7.3 Configuring a NAS Path

**Method 1 — Direct UNC path:**
Enter the path in the format `\\ServerName\ShareName\Folder`:

```
\\MYNAS\Podcast\Archive
\\192.168.1.100\media\podcast
\\NAS-SYNOLOGY\video\audio_archive
```

The path can be entered directly in the destination text field, or via the folder selection window, which on Windows supports navigation of network paths.

**Method 2 — Mapped network drive:**
If the NAS is already mapped as a network drive in Windows (e.g. `Z:` → `\\MYNAS\Podcast`), it is possible to select `Z:\Archive` as the destination folder. FeedDownloader Pro automatically recognises that this is a network path and activates validation.

**Method 3 — macOS and Linux (mount point):**
On macOS and Linux, SMB network paths are presented as normal folders in the filesystem after mounting (e.g. `/Volumes/MYNAS/Podcast` on macOS, `/mnt/nas/podcast` on Linux). These paths can be used directly as the destination folder.

---

## 7.4 SMB Credentials and Authentication

NAS access credentials must be configured at the operating system level, not within FeedDownloader Pro.

**On Windows:**
1.  Open **File Explorer** and navigate to the NAS path (`\\MYNAS\`).
2.  Enter the credentials when prompted and tick **"Remember my credentials"**.
3.  The credentials are saved in the **Windows Credential Manager** (`Control Panel → Credential Manager → Windows Credentials`).
4.  FeedDownloader Pro, like any other application, will access the NAS without requiring further credentials.

**On macOS:**
SMB credentials are requested when mounting the share (from Finder: **Go → Connect to Server** → `smb://192.168.1.100/ShareName`). macOS stores them in the Keychain.

**On Linux:**
Mount the share with credentials in the `fstab` file or via a graphical tool such as GNOME Files. Alternatively, use `smbclient` or `mount -t cifs` from the terminal.

---

## 7.5 Diagnosing Problems with Network Paths

In the event of a "Network path not reachable" warning, check the following points in the order shown.

**1. Is the NAS switched on and started up?**
Check the device indicator lights. Many consumer NAS devices enter sleep mode after a period of inactivity. Before starting the download, open the NAS administration panel from the browser to verify its availability.

**2. Is the NAS reachable from the network?**
From the Command Prompt (Windows) or Terminal (macOS/Linux):
```
ping 192.168.1.100
```
Replace with the NAS IP address. If the command receives a reply, basic network connectivity is working.

**3. Is the SMB share accessible?**
Attempt to open the path `\\192.168.1.100\ShareName` directly from Windows File Explorer. If the operation fails, the problem lies in the NAS SMB configuration, not in FeedDownloader Pro.

**4. Are write permissions correct?**
Manually create a file in the destination folder via the file manager. If the operation is not permitted, the user used to access the NAS does not have write permissions on that share. Configure the permissions from the NAS administration panel.

**5. Is the firewall blocking SMB connections?**
The SMB protocol uses port 445 (and in some cases port 139). Verify that the system or third-party firewall is not blocking these ports for connections on the local network.

---

## 7.6 Optimal Performance on NAS

Downloads to NAS present an additional complexity compared to those to a local drive: files are written across the network and speed depends on both the LAN bandwidth and the NAS write capacity.

**Operational guidance:**

*   **Use a wired (Ethernet) connection:** Wi-Fi introduces latency and instability in network write operations. For large archives, a wired Gigabit Ethernet connection offers significantly better performance.
*   **Reduce parallel threads:** Simultaneously writing many files to a NAS can saturate its I/O. Using 2–3 parallel threads often yields better results than using the maximum available number.
*   **Avoid overlapping with NAS backups:** If the NAS runs automatic backups, avoid starting batch downloads during the same time windows, as competition for the disk's I/O slows down both operations.
*   **Use a local cache:** For very large archives, it is possible to download first to a fast local drive and move the files to the NAS once the download is complete.

---

*Go to Chapter 8 for the configuration of the rename template and metadata features.*
