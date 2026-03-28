# Kapitel 2: Installation und erster Start

## 2.1 Systemvoraussetzungen

Runtime FeedDownloader Pro ist eine Desktop-Anwendung auf Basis der Electron-Technologie. Sie ist eigenständig und erfordert keine Installation zusätzlicher Laufzeitumgebungen (Node.js, .NET, Java): Alles Notwendige ist im Installationspaket enthalten.

**Mindestanforderungen:**

| Betriebssystem | Mindestversion | Architektur |
|----------------|----------------|-------------|
| Windows | 10 (Build 1903) oder Windows 11 | 64-Bit (x64) |
| macOS | 11.0 Big Sur | Intel x64 oder Apple Silicon (M1/M2/M3) |
| Linux | Ubuntu 22.04 LTS, Debian 11, Fedora 36 oder gleichwertige Distributionen | 64-Bit (x64) |

**Empfohlene Hardwareanforderungen:**
*   **RAM:** 4 GB (8 GB empfohlen für große Archive mit mehreren aktiven Threads)
*   **Speicherplatz:** 200 MB für die Programminstallation zuzüglich des für das Audioarchiv benötigten Speicherplatzes
*   **Verbindung:** Breitband (mindestens 10 Mbps, um parallele Downloads effektiv zu nutzen)

*Hinweis für Linux-Benutzer:* Die Software wird im Format `.AppImage` vertrieben, das eigenständig und auf jeder modernen Distribution mit aktuellen glibc-Bibliotheken ohne herkömmliche Installationsprozedur verwendbar ist.

---

## 2.2 Installation unter Windows

1.  Die Installationsdatei `Runtime-FeedDownloader-Pro-Setup-0.7.5.exe` von der offiziellen Release-Seite herunterladen.
2.  Die heruntergeladene Datei mit einem Doppelklick öffnen, um das Installationsprogramm zu starten.
3.  Falls Windows die Meldung **„Windows hat Ihren PC geschützt"** (SmartScreen) anzeigt, auf **„Weitere Informationen"** und anschließend auf **„Trotzdem ausführen"** klicken. Diese Meldung ist bei Software üblich, die außerhalb des Microsoft Store vertrieben wird und noch keine ausreichende Verbreitung für das Windows-Reputationssystem erreicht hat.
4.  Den Anweisungen auf dem Bildschirm folgen: den Lizenzvertrag akzeptieren, den Installationsordner auswählen und auf **„Installieren"** klicken.
5.  Nach Abschluss der Installation stehen eine Verknüpfung auf dem **Desktop** und ein Eintrag im **Start**-Menü zur Verfügung.

**Installations- und Datenpfade:**
Das Programm wird in `C:\Program Files\Runtime FeedDownloader Pro\` installiert. Die Datenbank und die Konfigurationsdateien werden separat in `C:\Users\[IhrName]\AppData\Roaming\FeedDownloaderPro\` gespeichert. Diese Trennung stellt sicher, dass die Deinstallation des Programms die Archivdaten nicht beeinträchtigt.

---

## 2.3 Installation unter macOS

1.  Die Datei `Runtime-FeedDownloader-Pro-0.7.5.dmg` herunterladen.
2.  Die `.dmg`-Datei mit einem Doppelklick öffnen. Es erscheint ein Fenster mit dem Anwendungssymbol.
3.  Das Symbol von **FeedDownloader Pro** in den Ordner **Programme** ziehen, wie durch den Pfeil im `.dmg`-Fenster angezeigt.
4.  **Erster Start unter macOS:** Da die Software nicht über den Mac App Store vertrieben wird, zeigt macOS beim ersten Öffnen eine Sicherheitswarnung an. So geht man vor:
    *   Zu **Systemeinstellungen → Datenschutz & Sicherheit** navigieren.
    *   Im Abschnitt „Sicherheit" erscheint die Meldung *„FeedDownloader Pro wurde blockiert..."*.
    *   Auf **„Trotzdem öffnen"** und anschließend im Bestätigungsdialog auf **„Öffnen"** klicken.
    *   Bei späteren Starts öffnet sich die Software normal mit einem Doppelklick.

*Hinweis für Apple-Silicon-Benutzer (M1/M2/M3):* Eine native ARM-Version ist verfügbar. Für optimale Leistung die `.dmg`-Datei mit dem Suffix `-arm64` herunterladen. Die x64-Version ist über Rosetta 2 verwendbar, die ARM-Version ist jedoch effizienter.

---

## 2.4 Installation unter Linux

1.  Die Datei `Runtime-FeedDownloader-Pro-0.7.5.AppImage` herunterladen.
2.  Die Datei als ausführbar markieren. Die verfügbaren Methoden sind:
    *   **Über die grafische Oberfläche:** Rechtsklick auf die Datei → Eigenschaften → Reiter Berechtigungen → Häkchen bei „Datei als Programm ausführen erlauben".
    *   **Über das Terminal:** `chmod +x Runtime-FeedDownloader-Pro-0.7.5.AppImage`
3.  Die Datei mit einem Doppelklick oder über das Terminal starten: `./Runtime-FeedDownloader-Pro-0.7.5.AppImage`

**Desktop-Integration (optional):**
Um FeedDownloader Pro zum Launcher und Anwendungsmenü hinzuzufügen, kann **AppImageLauncher** verwendet werden (in den Repositories der meisten Distributionen verfügbar), der AppImage-Dateien automatisch in das System integriert.

*Hinweis für Sandbox-Umgebungen:* Auf Distributionen mit **Flatpak** oder in Umgebungen mit Dateisystemzugriffsbeschränkungen kann die Software möglicherweise keine SMB-Netzwerkpfade erreichen. In diesem Fall sicherstellen, dass das Netzwerkdateisystem eingehängt und über den Dateimanager erreichbar ist, bevor das Programm gestartet wird.

---

## 2.5 Der erste Start

Beim ersten Öffnen ist die Software sofort einsatzbereit. Es ist keine Erstkonfiguration, Kontoerstellung oder Lizenzeingabe erforderlich. Die Oberfläche zeigt die URL-Eingabeleiste in der Mitte und eine leere Episodenliste.

**Beim ersten Start erstellte Dateien:**
Das Programm erstellt automatisch folgende Dateien im Benutzerdatenordner:
*   `feeddownloader.db` — Die SQLite-Hauptdatenbank. Enthält die vollständige Download-Chronik, die Episodenmetadaten und den Archivstatus. **Diese Datei darf nicht gelöscht werden.**
*   `settings.json` — Die Benutzereinstellungen (Sprache, Anzahl der Threads, Standard-Zielordner usw.).
*   `logs/` — Der Ordner für Protokolldateien, nützlich für die Diagnose bei Problemen.

---

## 2.6 Updates

Wenn eine neue Version verfügbar ist, zeigt die Software eine Benachrichtigung in der unteren Leiste der Oberfläche an. Die Installation des Updates erfordert stets die ausdrückliche Zustimmung des Benutzers.

Vor dem Update führt die Software automatisch ein Backup der Datenbank durch. Die Archivdaten werden bei einem Update in keinem Fall verändert: Ausschließlich die Programmdateien werden ersetzt.

*Hinweis:* Vor dem Update auf eine Major-Version (z. B. von 0.7.x auf 0.8.x) wird empfohlen, eine manuelle Kopie der Datei `feeddownloader.db` an einem sicheren Speicherort zu erstellen.

---

*Siehe Kapitel 3 für eine detaillierte Beschreibung der Oberflächenelemente.*
