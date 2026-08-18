# Chapter 7: NAS, network drives and SMB paths

## 7.1 Why network drives are a case apart

Almost every desktop application copes well with `C:\` and `D:\` and turns unpredictable when the
destination is a NAS, a Windows shared folder or an SMB volume. The reason is technical: a network
drive is less dependable than a local one. The NAS may be off or asleep, the network may spike in
latency, the credentials may have expired. And an operation on a path that does not answer will
block the program for tens of seconds, freezing the interface.

FeedDownloader Pro is built not to be taken hostage. If your archive lives on a NAS, this chapter
concerns you.

---

## 7.2 How the path is verified

When you choose a destination folder, the program checks that it exists and that it is writable.
The check runs outside the process that draws the interface and has an **eight-second limit**: once
that expires, the path is declared unavailable and a warning appears. The window never blocks
waiting.

It is one check, not a battery of tests: the program asks the operating system whether it can write
in there and takes the answer at face value. No test file is created in your folder.

The program recognises as network paths those beginning with `\\` or `//` (Windows UNC and SMB
notation) and, on Linux and macOS, those under `/mnt/`, `/media/` and `/Volumes/`. On these it
shows a dedicated warning when something is wrong. A drive mapped to a letter, `Z:` for instance,
is treated by the system as any other disk: the writability check still happens, but the program
does not recognise it as a network path and will not flag it as such.

*Why eight seconds.* Consumer NAS devices (Synology, QNAP, WD MyCloud) take three to six seconds to
wake from standby. Eight is enough to wait for them and still short enough not to feel like a
freeze.

---

## 7.3 Setting a path on a NAS

**A direct UNC path.** In the form `\\ServerName\ShareName\Folder`:

```
\\MYNAS\Podcast\Archive
\\192.168.1.100\media\podcast
\\NAS-SYNOLOGY\video\audio_archive
```

You can type it by hand or reach it through the picker, which on Windows browses network resources
too.

**A mapped drive.** If the NAS is already mounted as a drive (say `Z:` pointing at
`\\MYNAS\Podcast`), just choose `Z:\Archive`. It works without trouble; the program simply treats
it as a local disk, because at that point the operating system is handling the network.

**Linux.** Mounted SMB shares appear as ordinary folders (`/mnt/nas/podcast`, for example) and are
used directly.

---

## 7.4 Credentials and authentication

NAS credentials are configured in the operating system, not inside FeedDownloader Pro.

**Windows.** Open the NAS path (`\\MYNAS\`) in File Explorer, enter the credentials when prompted
and tick the option to remember them. They go into Windows Credential Manager (*Control Panel →
Credential Manager → Windows Credentials*), and from then on the program reaches the share like any
other application.

**Linux.** Mount the share with the credentials in `fstab`, or from a graphical file manager, or by
hand with `mount -t cifs`.

---

## 7.5 When the network path does not answer

Faced with the unreachable-path warning, check in this order.

**Is the NAS awake?** Many home devices go into standby after a period of inactivity. A quick visit
to the admin panel in a browser is the fastest way to find out.

**Is it reachable on the network?** From Command Prompt or a terminal:

```
ping 192.168.1.100
```

If it answers, basic networking works and the problem is higher up.

**Does the share open?** Try `\\192.168.1.100\ShareName` directly from the file manager. If it will
not open there, the problem is in the NAS SMB configuration and not in the program.

**Can you write to it?** Create a file by hand in the destination folder. If the system refuses,
the user you connect as has no write permission on that share: fix it from the NAS panel.

**Is a firewall involved?** SMB uses port 445, and in some cases 139. It is worth checking they are
not blocked on the local network.

---

## 7.6 Getting good performance

Writing to a NAS means every byte crosses the network twice: speed depends on the LAN and on the
device’s write capacity, not just on your internet connection.

*   **Cable beats Wi-Fi.** Wi-Fi adds latency and instability exactly where writes are concerned.
    For large archives, Gigabit Ethernet changes things.
*   **Fewer downloads in parallel.** Writing many files together saturates the NAS I/O: one or two
    transfers often outperform five.
*   **Mind the backups.** If the NAS runs automatic backups at fixed times, avoid overlapping them
    with download batches: they contend for the same disk and both slow down.
*   **Local first, network after.** For very large archives it pays to download to a fast local
    disk and move the files to the NAS once the batch is done.

---

*Chapter 8 covers file names, templates and metadata.*
