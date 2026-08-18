# Runtime FeedDownloader Pro

Version 1.4.1

Der leistungsstärkste Weg, Ihre Podcasts zu archivieren.

## Was ist das

Runtime FeedDownloader Pro ist ein professionelles Tool für Archivare, Verleger und Enthusiasten, die ganze Podcast-Kataloge für die Offline-Aufbewahrung herunterladen müssen.
Im Gegensatz zu herkömmlichen Playern ist diese Software für Massen-Downloads (Batch), Netzwerkresilienz und eine strukturierte Organisation im Dateisystem optimiert.

## Hauptfunktionen

### Feed-Verwaltung

* **Permanente Feed-Bibliothek:** Verwalten Sie mehrere Podcasts gleichzeitig mit einer in der Breite anpassbaren Seitenleiste, Suche und A–Z-Sortierung; Feeds bleiben über Sitzungen hinweg gespeichert.
* **Badge „Herunterzuladen":** Numerischer Indikator pro Feed, der anzeigt, wie viele Episoden noch nicht in Ihrem Archiv sind.
* **Erkennung Neuer Episoden:** Basiert auf den GUIDs der Episoden statt auf einer bloßen Zählung — Benachrichtigungen bleiben zuverlässig, auch bei Podcasts mit „gleitendem Fenster", die alte Episoden entfernen.
* **Paginierte Feeds (RFC 5005):** Folgt automatisch den Links zu weiteren Feed-Seiten und rekonstruiert den vollständigen Katalog, selbst wenn der Anbieter (Apple Podcasts, Libsyn, Blubrry…) auf der ersten Seite nur die neuesten Episoden veröffentlicht.
* **Sync All mit Fortschritt pro Feed:** Aktualisiert alle Feeds parallel; jedes Thumbnail zeigt seinen eigenen Status in Echtzeit.
* **Automatische Feed-Aktualisierung:** Hintergrund-Timer (6/12/24 h) mit Systembenachrichtigung bei neuen Episoden.

### Downloads und Warteschlange

* **Batch-Download:** Laden Sie Hunderte von Episoden mit einem Klick herunter, mit intelligenter Warteschlangenverwaltung und konfigurierbarer Parallelität (1, 3 oder 5 gleichzeitige Downloads).
* **Geschwindigkeitslimit:** Konfigurierbare maximale Download-Bandbreite in den Einstellungen (0 = unbegrenzt).
* **Download-Panel:** Seitliches Panel mit Warteschlange, Geschwindigkeit (KB/s), geschätzter Restzeit und Fehlerprotokoll für jeden Batch. Schwebende Schaltfläche zum erneuten Öffnen, ohne die Downloads zu verlieren.
* **Geschwindigkeit und Restzeit:** Werden direkt in der Episodenzeile jedes aktiven Downloads angezeigt.
* **Einzelabbruch:** Brechen Sie einen einzelnen Download in der Warteschlange ab, ohne die anderen zu stoppen.
* **Episode Erneut Herunterladen:** Eine bereits im Archiv vorhandene Episode kann erneut heruntergeladen werden.
* **Mehrfachauswahl:** Strg+Klick / Umschalt+Klick, um Episodenbereiche auszuwählen und gemeinsam herunterzuladen.

### Oberfläche und Navigation

* **Modernes Design „Electric Azure on Deep Dark":** Vollständig neu gestaltete dunkle Oberfläche, schnell und gut lesbar.
* **Befehlspalette (Strg+K):** Schneller Zugriff auf alle Hauptaktionen und gespeicherten Feeds ohne Maus.
* **Episoden-Detailpanel:** Ein Klick auf eine Episode öffnet ein Panel mit vollständigen Metadaten, Archivdaten und Shownotes.
* **Episoden-Sortierung:** Sortieren Sie die Liste nach Datum, Titel oder Dauer, zusätzlich zur ursprünglichen Feed-Reihenfolge.
* **Archiv-Ansicht:** Eigener Tab zum Durchsuchen, Suchen und Sortieren des gesamten Archivs aller heruntergeladenen Episoden.
* **M3U-Playlist-Export:** Erzeugt lokale Playlists, die mit jedem Audio-Player kompatibel sind.
* **Geführtes Onboarding:** Hinweise beim ersten Start für einen sofortigen Einstieg.

### Resilienz und Integrität

* **„Database-First"-Engine:** Das System merkt sich, was Sie heruntergeladen haben, unabhängig von den Dateien auf der Festplatte (SQLite).
* **Resiliente Downloads:** Verbindungs-Timeout (30 s) und Stillstandserkennung (60 s), automatische Wiederholungen mit exponentiellem Backoff, `.part`-Dateien gegen Datenkorruption.
* **Datenintegrität:** Automatische SHA-256-Berechnung und Extraktion der Audio-Metadaten (Bitrate, Abtastrate) nach dem Download.
* **Health Check:** Automatische Wiederherstellung von auf der Festplatte fehlenden Episoden mit Resynchronisation der Datenbank.

### Organisation und Portabilität

* **Echte Dateiendung:** Erkennt und speichert das tatsächliche Dateiformat (`.m4a`, `.ogg`, `.opus`, `.flac`…), anstatt immer `.mp3` zu erzwingen.
* **ID3-Tags mit Cover:** Schreibt automatisch ID3-Tags in `.mp3`-Dateien und bevorzugt dabei das episodenspezifische Cover, sofern verfügbar.
* **Umbenennungsvorlagen:** Anpassbare Platzhalter (`{{title}}`, `{{date}}`, `{{podcast}}`) für organisierte Dateinamen.
* **Datenportabilität:** Importieren und exportieren Sie Ihre Feeds über den OPML-Standard. Erstellen Sie detaillierte CSV-Berichte Ihres Archivs.
* **Archiv-Migration:** Verschieben Sie die gesamte Bibliothek auf einen neuen Pfad/eine neue Festplatte mit automatischer Aktualisierung der Datenbank.
* **NAS/SMB-Unterstützung:** Native Validierung und Timeout (8 s) für Netzwerkpfade, ohne Einfrieren der Oberfläche.

### System und Sicherheit

* **Auto-Update mit Benachrichtigung:** Automatische Updates über GitHub Releases, mit Systembenachrichtigung, wenn ein Update verfügbar und wenn es installationsbereit ist.
* **URL-Sicherheit:** Anti-SSRF-Validierung auf Verbindungsebene — blockiert gefährliche Protokolle, private IPs, reservierte Adressen und bösartige Weiterleitungen, für jede Feed-Seite.
* **Smart Truncate:** Benennt Dateien automatisch um, um Pfadlängenfehler unter Windows zu vermeiden.
* **Performance:** Virtualisierte Liste — bewältigt Feeds mit Tausenden von Episoden ohne Verlangsamungen.
* **Integrierte Hilfe:** Benutzerhandbuch direkt in der Anwendung verfügbar.

## Mehrsprachigkeits-Zertifizierung

Die Software unterstützt vollständig **8 Sprachen**: Italiano (IT), English (EN), Français (FR), Deutsch (DE), Español (ES), Português (PT), Русский (RU), 中文 (ZH). Oberfläche, Systembenachrichtigungen und Dokumentation sind in allen Sprachen verfügbar.

## Kurzanleitung

1. **Analysieren:** Fügen Sie die URL des RSS-Feeds in die Hauptleiste ein und drücken Sie „Analysieren". Der Feed wird für zukünftige Zugriffe zur Seitenleiste hinzugefügt.
2. **Ordner Wählen:** Legen Sie unter Einstellungen → Archiv den Ordner fest, in dem die Dateien gespeichert werden. Der Pfad ist stets im Fuß der Seitenleiste sichtbar.
3. **Herunterladen:** Verwenden Sie die Schaltfläche „Alles Herunterladen" für den gesamten Katalog, oder wählen Sie Episoden mit Strg+Klick aus und nutzen Sie „Auswahl Herunterladen".
4. **Überwachen:** Das Download-Panel öffnet sich automatisch mit Warteschlange, Geschwindigkeit und geschätzter Restzeit für jede Datei.
5. **Verwalten:** Verwenden Sie Strg+K für die Befehlspalette oder die Einstellungen (⚙) für Parallelität, Geschwindigkeitslimit, Vorlagen, OPML und Archivstatistiken.

## Systemanforderungen

Die Software ist plattformübergreifend und läuft nativ auf:

* **Windows**: 10/11 (64-Bit) — NSIS-Installer (`.exe`)
* **Linux**: Moderne Distributionen (Ubuntu 20.04+, Debian 11+, Fedora 34+) — `.AppImage` oder `.deb`
* **macOS**: 11.0 (Big Sur) oder höher — vom Code unterstützt, macOS-Pakete werden jedoch derzeit nicht verteilt
* Aktive Internetverbindung

## Download

Die offiziellen Pakete sind auf [GitHub Releases](https://github.com/Ecosystem-Runtime/FeedDownloader-Releases/releases) verfügbar und werden über GitHub Actions erstellt.

| Plattform | Format | Hinweise |
|---|---|---|
| Windows 10/11 | `.exe` (NSIS-Installer) | Unsignierte Software — siehe SmartScreen-Hinweis |
| Linux | `.AppImage` / `.deb` | Keine Signatur erforderlich |

**Windows — SmartScreen-Warnung:** Beim ersten Start zeigt Windows Defender möglicherweise den Bildschirm „Der Computer wurde durch Windows geschützt — Unbekannter Herausgeber" an. Die Software ist sicher. Klicken Sie auf **Weitere Informationen** → **Trotzdem ausführen**.

**macOS:** `.dmg`-Pakete werden derzeit nicht veröffentlicht; die App kann aus dem Quellcode kompiliert werden.

*Entwickelt mit Electron- und React-Technologie für Leistung und Stabilität.*
