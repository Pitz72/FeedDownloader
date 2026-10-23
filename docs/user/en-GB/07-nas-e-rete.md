# Chapter 7: NAS, network drives and SMB paths

## 7.1 Why network drives are a special case

Almost every desktop application copes fine with `C:\` and `D:\` and turns unpredictable when the
download folder is a NAS, a Windows shared folder or an SMB drive. The reason is technical: a network
drive is less reliable than a local one. The NAS may be off or in standby, the network may have a
latency spike, credentials may have expired. And an operation on a path that does not answer blocks
the program for tens of seconds, freezing the interface.

FeedDownloader Pro is built not to get stuck. This chapter is for anyone keeping the archive on a
NAS or a network folder.

---

## 7.2 How the path is checked

When you choose a folder with **Settings → Downloads → Change folder**, the program checks that it
exists and is writable. The check runs outside the process that draws the interface and has an
**eight-second limit**: once that passes, the path is declared unavailable and the warning *The
network folder is not answering.* appears. The window never freezes waiting. If the folder answers
but refuses writes, the warning is *The chosen folder is not writable.*

It is a single check, not a battery of tests: the program asks the operating system whether it can
write there and takes the answer. No test file is created in the folder.

The program recognises as network paths those starting with `\\` or `//` (Windows UNC and SMB
notation) and, on Linux, those under `/mnt/` and `/media/`. When you choose a path of this kind, a
notice reminds you that *if the share disconnects, running downloads stop and resume later*. A drive
mapped to a letter, for instance `Z:`, is treated by the system as an ordinary disk: the writability
check still happens, but the program does not recognise it as a network drive and shows no notice.

*Why eight seconds.* Home NAS units (Synology, QNAP, WD MyCloud) take three to six seconds to wake
from standby. Eight is enough to wait for them and still short enough not to feel like a freeze.

---

## 7.3 Setting a NAS path

**Direct UNC path.** In the form `\\ServerName\ShareName\Folder`:

```text
\\MYNAS\Podcasts\Archive
\\192.168.1.100\media\podcast
\\NAS-SYNOLOGY\video\audio_archive
```

Reach it with the **Change folder** picker, which on Windows can browse network locations too;
alternatively you can type the path in the picker’s address bar.

**Mapped drive.** If the NAS is already mounted as a drive (for instance `Z:` pointing to
`\\MYNAS\Podcasts`), just choose `Z:\Archive`. It works perfectly well; the program simply treats it
as a local disk, because at that point the operating system is handling the network.

**Linux.** Mounted SMB shares appear as ordinary folders (for instance `/mnt/nas/podcast`) and can be
used directly.

**Moving an existing archive to the NAS.** If the archive already holds episodes, when you choose the
new folder the program asks what to do with them: **Move the archive** transfers the podcast folders
to the NAS, **New downloads only** leaves the files where they are and uses the NAS from then on.
Either way the program keeps finding every file (chapter 9, section 9.8).

---

## 7.4 Credentials and authentication

NAS credentials are set up in the operating system, not inside FeedDownloader Pro.

**Windows.** Open the NAS path (`\\MYNAS\`) in File Explorer, enter the credentials when asked and
tick the option to remember them. They are stored in Windows Credential Manager (*Control Panel →
Credential Manager → Windows Credentials*), and from then on the program reaches the share like any
other application.

**Linux.** Mount the share with credentials in `fstab`, or from a graphical file manager, or by hand
with `mount -t cifs`.

---

## 7.5 When the network path does not answer

Faced with *The network folder is not answering.*, check in this order.

**Is the NAS on?** Many home devices go into standby after a period of inactivity. Opening its admin
page in a browser is the quickest way to find out.

**Can it be reached on the network?** From Command Prompt or Terminal:

```text
ping 192.168.1.100
```

If it answers, the basic network works and the problem is further up.

**Does the share open?** Try `\\192.168.1.100\ShareName` directly from the file manager. If it will
not open from there, the problem lies in the NAS’s SMB configuration, not in the program.

**Can you write to it?** Create a file in the folder by hand. If the system refuses, the user you
connect as has no write permission on that share: fix it from the NAS panel.

**Is a firewall in the way?** SMB uses port 445, and sometimes 139. Check they are not blocked on the
local network.

---

## 7.6 Getting good performance

Writing to a NAS means every byte crosses the network twice: speed depends on the local network and
on the device’s write capacity, not just on the internet connection.

* **Cable beats Wi-Fi.** Wi-Fi adds latency and instability precisely when writing. For large
  archives, Gigabit Ethernet performs significantly better.
* **Fewer parallel downloads.** Writing many files at once saturates the NAS’s I/O: one or two
  transfers often achieve more than five.
* **Mind the backups.** If the NAS runs automatic backups at fixed times, avoid overlapping download
  batches: they compete for the same disk and slow each other down.
* **Local first, network later.** For very large archives, download to a fast local disk and then
  move the archive to the NAS with **Move the archive**.
* **Quick check for everyday use.** Over the network, a full archive check reads back every byte and
  can take hours; a quick check verifies presence and size in seconds (chapter 9, section 9.5).

---

*Chapter 8 covers file names, templates and metadata.*
