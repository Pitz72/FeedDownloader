# Kapitel 9: Integrität, Statistiken und Archivierung

## 9.1 Warum die Dateiintegrität prüfen

Der Abschluss eines Downloads garantiert nicht, dass die empfangene Datei integer ist. Ein während der Übertragung verlorenes Netzwerkpaket, ein Schreibfehler auf dem Datenträger oder eine Unterbrechung in der letzten Sekunde können eine formal „vorhandene", aber beschädigte Datei erzeugen. Ohne explizite Prüfung kann ein scheinbar vollständiges Archiv nicht abspielbare Audiodateien enthalten, deren Beschädigung erst während der Wiedergabe erkannt wird.

FeedDownloader Pro begegnet diesem Problem mit zwei ergänzenden Mechanismen: der **Größenprüfung** (während des Downloads) und der **SHA-256-Prüfung** (nach Abschluss).

---

## 9.2 Die SHA-256-Prüfung

**SHA-256** (Secure Hash Algorithm 256-Bit) ist eine kryptografische Funktion, die einen 64-stelligen hexadezimalen Fingerabdruck für jede Datei erzeugt. Zwei identische Dateien erzeugen immer denselben Hash; ein Unterschied von auch nur einem Bit erzeugt einen völlig anderen Hash.

Für jede heruntergeladene Datei führt FeedDownloader Pro folgende Schritte aus:
1.  Den SHA-256-Hash der Datei am Ende des Downloads berechnen.
2.  Den Hash zusammen mit dem Dateipfad und dem Berechnungsdatum in der Datenbank speichern.
3.  Enthält der RSS-Feed einen Referenz-Hash (einige moderne Feeds enthalten das Feld `<podcast:integrity>`), diesen mit dem berechneten vergleichen. Bei Abweichung wird die Datei als **„Beschädigt"** markiert und zur erneuten Übertragung in die Warteschlange eingereiht.

**Praktische Anwendungsfälle:**
*   Es kann jederzeit überprüft werden, ob eine Datei nicht verändert, beschädigt oder ersetzt wurde: Den Hash neu berechnen und mit dem in der Datenbank gespeicherten vergleichen.
*   Nach dem Verschieben von Dateien auf einen neuen Datenträger oder bei einer Migration ermöglicht der **Health Check** (siehe Abschnitt 9.4) die Prüfung, ob alle Dateien noch vorhanden sind.
*   In professionellen Kontexten stellt der SHA-256-Hash einen verifizierbaren Nachweis der Inhaltsintegrität zum Zeitpunkt des Downloads dar.

---

## 9.3 Die extrahierten Audiometadaten

Nach Abschluss jedes Downloads extrahiert FeedDownloader Pro automatisch die **technischen Metadaten** der Audiodatei. Diese Informationen werden direkt aus der Datei gelesen (nicht aus dem RSS-Feed) und in der Datenbank gespeichert.

**Extrahierte Metadaten:**

| Feld | Beschreibung | Beispiel |
|------|--------------|---------|
| **Bitrate** | Audioqualität in Kilobit pro Sekunde | `128 kbps`, `320 kbps` |
| **Sample Rate** | Abtastfrequenz | `44100 Hz`, `48000 Hz` |
| **Größe auf dem Datenträger** | Tatsächliche Größe der heruntergeladenen Datei | `67,4 MB` |

Diese Werte werden in der Datenbank gespeichert und sind im CSV-Export enthalten (siehe Abschnitt 9.6).

---

## 9.4 Health Check: Überprüfung der Archivintegrität

Im Laufe der Zeit kann ein Archiv externe Änderungen erfahren: Dateien, die direkt über das Dateisystem verschoben oder gelöscht wurden. Der **Health Check** prüft den Zustand des Archivs im Vergleich zu den in der Datenbank gespeicherten Daten.

**So wird der Health Check durchgeführt:**
Zu **Einstellungen → Archiv → Health Check** navigieren und auf **„Überprüfung starten"** klicken.

Der Prozess analysiert jede in der Datenbank eingetragene Datei und prüft, ob die Datei noch im gespeicherten Pfad vorhanden ist. Am Ende wird eine Zusammenfassung mit drei Indikatoren angezeigt:

| Indikator | Bedeutung |
|-----------|-----------|
| **Gesamt** | Gesamtzahl der Episoden in der Datenbank |
| **Vorhanden** | Dateien, die im gespeicherten Pfad existieren |
| **Fehlend** | Dateien, die im gespeicherten Pfad nicht gefunden wurden |

Die Ansicht zeigt auch den **gesamten belegten Speicherplatz** der vorhandenen Dateien.

Bei fehlenden Dateien listet die Software die ersten 5 mit dem Podcast-Namen und dem Dateinamen auf. Um eine fehlende Datei wiederherzustellen, die Funktion **„Erneut herunterladen"** aus dem Kontextmenü der Episode in der Hauptliste verwenden.

---

## 9.5 Archivstatistiken

Der Statistikbereich ist über **Einstellungen → Archiv** erreichbar und bietet eine kompakte Übersicht der in der Datenbank gespeicherten Daten:

*   **Heruntergeladene Dateien:** Gesamtzahl der in der Datenbank vorhandenen Episoden.
*   **Podcasts:** Anzahl der im Archiv vertretenen verschiedenen Feeds.
*   **Zeitraum:** Datum der ersten und der letzten heruntergeladenen Episode.

Die Statistiken werden automatisch bei jedem Öffnen des Einstellungsbereichs aktualisiert.

---

## 9.6 CSV-Export

Der CSV-Export erzeugt eine Datei mit den Daten jeder in der Datenbank vorhandenen Episode. Er ist nützlich, um FeedDownloader Pro mit anderen Werkzeugen zu integrieren (Tabellenkalkulationen, Content-Management-Systeme, Automatisierungsskripte).

**So wird exportiert:**
Zu **Einstellungen → Archiv → Als CSV exportieren** navigieren und den Speicherpfad für die Datei wählen.

**Spalten des Exports:**

| Spalte | Inhalt |
|--------|--------|
| `Podcast` | Name des Podcasts |
| `Episode Title` | Episodentitel |
| `Publish Date` | Veröffentlichungsdatum |
| `Downloaded At` | Datum und Uhrzeit des Downloads |
| `File Size (bytes)` | Dateigröße in Byte |
| `Bitrate (kbps)` | Audio-Bitrate in Kilobit pro Sekunde |
| `Sample Rate (Hz)` | Abtastfrequenz in Hertz |
| `SHA-256 Checksum` | SHA-256-Hash der Datei |
| `Validation Status` | Ergebnis der letzten Integritätsprüfung |
| `GUID` | Eindeutiger Bezeichner der Episode im RSS-Feed |

*Dateiformat:* CSV mit Komma-Trennzeichen (`,`), UTF-8-Kodierung mit BOM (für Kompatibilität mit Microsoft Excel). Felder, die Kommas enthalten, werden in Anführungszeichen eingeschlossen.

---

## 9.7 Archivmigration

Um das Archiv auf einen neuen Datenträger oder Ordner zu verschieben, die integrierte Migrationsfunktion verwenden, die die Datenbank mit dem neuen Speicherort der Dateien synchron hält.

**Vorgehensweise:**
1.  Zu **Einstellungen → Archiv → Archiv migrieren** navigieren.
2.  Den **neuen Zielordner** über das Auswahldialogfenster auswählen.
3.  Die Software verschiebt alle Audiodateien physisch in den neuen Ordner und aktualisiert die Pfade in der Datenbank.
4.  Am Ende wird eine Zusammenfassung angezeigt: Anzahl der verschobenen Dateien und etwaige Fehler.

*Achtung:* Die Migration verschiebt die Dateien vom aktuellen in den neuen Ordner. Die Dateien werden vom ursprünglichen Speicherort entfernt. Vor dem Start des Vorgangs sicherstellen, dass der Zieldatenträger über ausreichend Speicherplatz verfügt.

*Umzug auf einen neuen Computer:* Sowohl den Ordner mit den Audiodateien als auch die Datei `feeddownloader.db` (aus dem in Kapitel 2 beschriebenen Benutzerdatenordner) kopieren. Auf dem neuen Computer FeedDownloader Pro installieren, die Datenbank in den Benutzerdatenordner kopieren und bei geändertem Archivpfad die Migrationsfunktion verwenden.

---

*Siehe Kapitel 10 für die erweiterten Einstellungen der Software.*
