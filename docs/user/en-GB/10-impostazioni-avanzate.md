# Chapter 10: Settings

## 10.1 How they are organised

The panel opens at any time from the gear at the top right, with **Ctrl+,** or from the command
palette, even while a download is running. The options are split across six vertical tabs, in this
order: **General**, **Downloads**, **Files and metadata**, **Archive**, **Accessibility**, **About**.

Every change is saved at once: switches and menus when you choose, number fields and the naming
template when you leave the field. The **Done** button closes the panel.

This chapter goes through the tabs one by one. The naming template, the metadata next to the files
and ID3 tags are covered in chapter 8; archive verification, the CSV inventory and changing the
folder in chapter 9.

---

## 10.2 General

### Interface language

The interface speaks **Italiano** and **English**. The choice also applies to system notifications
and changes everything instantly, without restarting. The same choice is available on the entry
screen.

### Automatic feed checks

Sets how often the program looks for new episodes in every feed, even with the window closed to the
notification area. A check happens anyway at launch and when the connection returns after an
interruption.

| **Interval** | Behaviour |
|--------------|-----------|
| **Never (manual only)** | No periodic checks; the one at launch and **Check feeds** remain. |
| **Every 6 hours** (default) | All feeds read again every six hours. |
| **Every 12 hours** | Read again every twelve hours. |
| **Every 24 hours** | Read again once a day. |

The change applies at once. When a check finds new episodes, feeds with automatic archiving download
them straight away; for the others a clickable system notification arrives (chapter 5, section
5.9).

---

## 10.3 Downloads

### Download folder

Shows the current path; by default `Documents\FeedDownloader\downloads`. Each podcast gets its own
subfolder, and an external disk or a network folder (NAS, SMB) works too.

**Change folder** opens the system picker, checks that the folder is writable (with an eight-second
limit for network paths, chapter 7) and, if the archive already holds episodes, asks whether to
**Move the archive** or use the new folder for **New downloads only** (chapter 9, section 9.8).
During a move the button stays disabled and progress appears under the path.

### Transfer

A line recalls the engine’s fixed behaviour: each download retries by itself up to five times on
transient errors and resumes partial files from where they stopped. The internal parameters
(connection timeout, number of attempts, stall watch) cannot be changed.

* **Parallel downloads**: how many transfers at once, from **1** to **10**. The default is 3. For
  help choosing, see chapter 6, section 6.2.
* **Bandwidth limit (KB/s)**: the overall ceiling, shared by all downloads together. A reminder
  under the field repeats it (*Total for all downloads together: 500 KB/s.*). `0` means no limit and
  is the default.
* **Largest file size (MB)**: bigger files are skipped, with a permanent error. `0` means no limit
  and is the default.

Details of the limit and the largest size are in chapter 6, section 6.9.

---

## 10.4 Files and metadata

* **File names**: the **Template** field, the **Available placeholders** buttons and the **Example**
  of the result. The template applies to future downloads; existing files are not renamed (chapter
  8, sections 8.2–8.7).
* **Metadata**: the **Save metadata next to the files** (chapter 8, section 8.9) and **Write ID3 tags
  into MP3s** (chapter 8, section 8.10) switches, both off by default.

---

## 10.5 Archive

### Archive

The summary (*N episodes from M podcasts since …*) and two commands: **Verify archive**, which closes
Settings and opens the verification (chapter 9, section 9.5), and **Export CSV** (chapter 9, section
9.7). With the archive empty, both stay disabled.

### Feed list (OPML)

**Import from OPML** and **Export to OPML**, to bring feeds in from, or out to, another podcast
application. Importing does not change feeds already in the library (chapter 5, sections 5.5 and
5.6).

### Temporary files

**Clean temporary files** deletes the `.part` and `.part.meta` files left by interrupted downloads
that will not be resumed, in every folder the archive uses. It does not work while downloads are
queued, because those files may be in use: the button stays disabled (*Wait until the queue is
empty.*). At the end it reports how many files it removed.

### Reset history

**Reset download history** empties the archive and the download history — the memory of what has
already been fetched: every episode goes back to **To download**. The program asks for confirmation
(*Reset the history?*) and the operation cannot be undone. The audio files on disk **stay where they
are**, but the program no longer recognises them as downloaded: downloading those episodes again
would create copies with the `_2` suffix.

It makes sense in one case only: when you want to start again with a clean archive, for instance at
the end of a round of testing. The command stays disabled while downloads are queued. Before using
it, copy `feeddownloader.sqlite` somewhere safe.

---

## 10.6 Accessibility

### Interface size

Enlarges text and controls. The **Size** menu offers 80, 90, 100, 110, 125, 140, 160 and 180%. You
can step through the same values from the keyboard with **Ctrl +** and **Ctrl −**; **Ctrl 0** goes
back to 100%. The choice is remembered.

With the interface enlarged there is less room available, and the layout switches sooner to its
narrow-window variants (chapter 3, section 3.14).

### Motion

The **Reduce animations and effects** switch removes transitions and animations, including the
entry screen’s. If you have already asked the operating system for reduced motion, animations are
reduced anyway, even with the switch off.

The program also respects Windows high-contrast mode. The interface colours meet WCAG 2.2 AA
contrast, text never goes below 12 pixels and keyboard focus is always visible.

---

## 10.7 About

### Updates

Shows the **Installed version** and the update status. The update system works **with consent**:
nothing downloads and nothing installs by itself.

At launch, in the installed version, the program queries the project’s releases page. If it finds a
new version, the **Version X.Y.Z available** notice appears in the top bar along with a system
notification, but the package **is not downloaded**. The button changes with the status:

* **Check for updates** forces the check; while it runs *Checking for updates…* appears, then *You
  have the latest version.* or the version available;
* **Download** starts the download, with *Downloading update N%*;
* **Restart and install**, once the package is ready, closes the program, applies the update and
  reopens it. Installation does not happen by itself either, and it does not happen when the program
  closes.

If the check fails, *Updates could not be checked.* appears.

Next to it, **What’s new** reopens the release notes of the installed version.

### Documentation

**Guide** opens the built-in documentation; **Full manual (PDF)** opens this manual in the browser,
in the interface language.

### The project

The licence, the author and the **Contact**, **Source code** and **Support the project** links, which
open in the browser.

---

## 10.8 How addresses are filtered (for information)

This section explains something the program does by itself and that cannot be configured.

A feed is content that comes from outside, and the addresses in it could point to resources on your
local network rather than a public audio file: the router’s admin page, a NAS, an internal service.
This is the family of attacks called SSRF. An archiver that blindly followed a feed’s addresses
would become the tool for reaching the network of whoever uses it.

So every address — of the feed, of its pages, of the audio files and of the covers — goes through
five filters:

1. **Syntax**: it must be a valid address.
2. **Protocol**: only `http://` and `https://`. Schemes such as `file://`, `ftp://`, `data:` or
   `javascript:` are rejected at once.
3. **Internal names**: `localhost` and loopback names are refused.
4. **Private and reserved addresses**: the RFC 1918 networks (`10.0.0.0/8`, `172.16.0.0/12`,
   `192.168.0.0/16`), loopback `127.0.0.0/8`, link-local `169.254.0.0/16`, the CGNAT space, and for
   IPv6 `::1`, `fc00::/7` and embedded IPv4 addresses.
5. **Check at connection time**: the IP address the name resolved to is checked again on every
   connection and every redirect. This is the filter that closes the cleverest loopholes — a public
   domain that resolves to a private address, or a redirect that halfway through points inside the
   network.

When a filter steps in, the message is *Local-network addresses are not allowed.* for a feed, and
*The address points to the local network: blocked for safety.* for a download.

*A stated limitation.* If your network has an internal podcast server reachable at a private address,
those filters will block it, and there is no way to make an exception: there is no allow-list to
configure. This is deliberate, because a configurable exception is exactly what a hostile feed would
try to exploit. Content like that needs another route, for instance downloading it with a different
tool.

---

*Chapter 11 collects the most common problems and how to solve them.*
