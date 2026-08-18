# Chapter 10: Settings

## 10.1 How they are organised

The panel opens at any time from the cog icon at the top right, even while a download is running.
The entries are divided into five tabs, in this order: **General**, **Download**, **Metadata**,
**Archive**, **Advanced**. Every change is saved immediately: there is no confirm button because
none is needed.

This chapter follows the tabs one by one. Templates, sidecars and ID3 tags (the Metadata tab) are
covered in chapter 8; the health check, the CSV inventory and migration (the Archive tab) in
chapter 9.

---

## 10.2 General

### Language

The interface speaks **English** and **Italian**. The change is immediate, with no restart. The
program uses a single theme, dark: there is no light theme and no control over list density.

### Automatic feed refresh

Sets how often the program re-reads the feeds by itself. A check happens in any case at startup and
when the connection returns after an outage.

| Option | Behaviour |
|--------|-----------|
| Disabled | No cyclical check; the one at startup remains. |
| 6 hours (default) | A full re-read every six hours. |
| 12 hours | Re-read every twelve hours. |
| 24 hours | Re-read once a day. |

The change applies at once. If the check finds new episodes it sends a clickable system
notification, which brings the program to the front and opens the feed concerned when there is only
one. No download starts by itself: the notification is a signal and nothing more (section 5.9).

### Guide and release notes

The same tab holds two shortcuts: the **user guide**, which opens the built-in documentation and
from there the full PDF manual, and **What's new in this version**, which shows the release notes
for the installed version. The same window appears on its own at the first launch after an update.

---

## 10.3 Download

This is where the engine controls live. The internal parameters (connection timeout, number of
retries, stall watching) are fixed and cannot be touched.

### Download Path

The folder everything ends up in, in the **Storage** section. You choose it with the icon beside
the field, which opens the system picker, and it does the same job as the folder icon in the
command bar.

### Parallel Downloads

How many transfers at once: **1**, **3** or **5**. The default is 3. For guidance on choosing, see
chapter 6.

### Download Speed Limit

Caps the total bandwidth the downloads use, so they do not take the whole line. The value is in
KB/s; `0` means no limit and is the default. To give a sense of scale: `500` keeps consumption
around 4 Mbps.

### Maximum File Size

Rejects files larger than the stated value, expressed in MB; `0` means no limit. It guards against
anomalies: sizes declared in error, or servers that send something quite other than audio. A file
over the threshold becomes a definitive error, with no further attempts. When the server declares
the size, the refusal comes before a single byte is written; when it does not, the transfer is
stopped as soon as it passes the cap.

---

## 10.4 Metadata

This tab holds the **File Naming Template** with its preview, the **Sidecar .json Files** switch
and the ID3 tagging switch, which changes its label with its state. They are described in
chapter 8.

---

## 10.5 Archive

This gathers four groups: the archive statistics, **Data & Portability** with OPML import and
export and the CSV inventory, the **Archive Health Check** with checksum repair, and **Migrate
Archive** for moving the files to another disk. All in chapter 9, except OPML which is in
chapter 5.

---

## 10.6 Advanced

### Updates

The update system works **by consent**: nothing downloads and nothing installs on its own.

At startup the installed version queries the releases repository. If it finds a new version, the
**Update available** banner appears in the top bar along with a system notification, but the
package **is not downloaded**. The **Check for Updates** button forces the check whenever you want.

The download begins when you press **Download** on the banner or **Download update** here in the
settings. Once the package is ready, **Restart & Install** appears, and that does not fire by
itself either: installation happens when you decide, never when you quit the program.

The states you will see, in order: *Checking for updates...*, then *You have the latest version* or
*Update available: vX.Y.Z*, then *Downloading update... N%* and finally *Update downloaded —
restart to install*.

### Maintenance

**Clean temporary files** removes orphaned `.part` files left in the destination folder by
interrupted sessions. It does not work while downloads are active, because those files are in use:
in that case the program says so rather than proceeding. At the end it reports how many files it
removed.

### Danger Zone

**Reset Download History** clears the download history from the database, that is the memory of
what has already been fetched. The program asks for confirmation. The audio files on disk **stay
where they are**: after the reset the episodes go back to showing as pending, and a fresh download
would overwrite them.

There is one case where it makes sense: when you want to start again with a clean history, for
example after moving everything to another system or at the end of a run of tests.

---

## 10.7 How addresses are filtered (for information)

This section explains something the program does by itself and that cannot be configured.

A feed is content arriving from outside, and the addresses it contains could point at resources on
your local network rather than at a public audio file: the router panel, a NAS, an internal
service. This is the family of attacks called SSRF. An archiver that blindly follows the addresses
in a feed becomes the instrument by which somebody knocks on your own doors.

Every address therefore passes through five filters:

1.  **Syntax**: it must be a valid URL.
2.  **Protocol**: only `http://` and `https://`. Things like `file://`, `ftp://`, `data:` or
    `javascript:` are turned away immediately.
3.  **Internal names**: `localhost` and the loopback names are refused.
4.  **Private and reserved addresses**: the RFC 1918 networks (`10.0.0.0/8`, `172.16.0.0/12`,
    `192.168.0.0/16`), loopback `127.0.0.0/8`, link-local `169.254.0.0/16`, and for IPv6 `::1` and
    `fc00::/7`.
5.  **Verification at connection time**: the IP address the name resolved to is re-checked on every
    connection and every redirect. This is the filter that closes the cleverer loopholes, namely a
    public domain resolving to a private address, or a redirect that halfway along points inside
    the network.

*A declared limitation.* If your network has an internal podcast server reachable at a private
address, those filters will block it, and there is no way to make an exception: there is no
allow-list to configure. This is deliberate, because a configurable exception is exactly what a
hostile feed would try to exploit. Content like that needs a different route — downloading it with
another tool and importing it as local files, for instance.

---

*Chapter 11 collects the most common problems and how to get out of them.*
