# Kapitel 3: Tour durch die Benutzeroberfläche

## 3.1 Aufbau des Hauptfensters

Beim Öffnen von FeedDownloader Pro ist die Oberfläche vertikal in drei Funktionsbereiche unterteilt:

*   **Befehlsbereich (oben):** Die URL-Eingabeleiste und die Hauptsteuerelemente. Von hier aus werden alle Vorgänge gestartet.
*   **Arbeitsbereich (Mitte):** Der Hauptbereich, in dem die analysierten Episoden mit den zugehörigen Informationen und den individuellen Download-Steuerelementen angezeigt werden.
*   **Statusbereich (unten):** Die globale Fortschrittsleiste mit Informationen zum laufenden Batch.

---

## 3.2 Die Befehlsleiste (Oben)

**URL-Feld:** Die Texteingabeleiste, in die die RSS-Adresse des zu analysierenden Podcasts eingegeben wird. Akzeptiert direkte URLs zu XML/RSS-Dateien. Unterstützt Drag and Drop: Ein Link kann direkt aus einem Browser in diesen Bereich gezogen werden.

**Schaltfläche „Analysieren":** Startet die Feed-Analyse. Die Software kontaktiert die URL, liest die RSS-Datei und füllt die Episodenliste. Der Vorgang dauert in der Regel 1 bis 5 Sekunden, abhängig von der Größe des Feeds und der Verbindungsgeschwindigkeit.

**Feld „Zielpfad":** Gibt den Ordner an, in dem die heruntergeladenen Dateien gespeichert werden. Ein Klick auf das benachbarte Ordnersymbol öffnet das Auswahldialogfenster. Der eingestellte Pfad wird zwischen den Sitzungen gespeichert.

**Symbol Einstellungen (⚙):** Öffnet den Einstellungsbereich. Jederzeit erreichbar, auch während eines laufenden Downloads. Weitere Informationen siehe Kapitel 10.

---

## 3.3 Die Episodenliste (Mitte)

Nach der Analyse eines Feeds wird dieser Bereich mit der Liste der verfügbaren Episoden gefüllt. Jede Zeile repräsentiert eine Episode und enthält die folgenden Informationen.

**Hauptspalten:**

*   **Titel:** Der Name der Episode, wie im RSS-Feed definiert.
*   **Datum:** Das ursprüngliche Veröffentlichungsdatum der Episode.
*   **Dauer:** Die Länge der Episode (sofern im Feed verfügbar).
*   **Größe:** Die geschätzte Dateigröße (sofern im Feed verfügbar). Vor dem Download ist der Wert deklarativ; nach dem Download gibt er die tatsächliche Dateigröße an.
*   **Status:** Die visuelle Statusanzeige der einzelnen Episode. Siehe Abschnitt 3.4.
*   **Aktionen:** Die individuellen Steuerungsschaltflächen für jede Episode.

**Sortierung:**
Die Spaltenüberschriften können angeklickt werden, um die Liste zu sortieren (nach Datum, Titel oder Größe). Das Standardverhalten ist die Anzeige mit den neuesten Episoden oben.

**Mehrfachauswahl:**
Durch Halten von `Strg` und Klicken auf mehrere Episoden können diese einzeln ausgewählt werden. `Umschalt` + Klick wählt einen Bereich aus. Auf ausgewählte Episoden können Sammelaktionen angewendet werden (Download starten, aus der Liste entfernen).

---

## 3.4 Die Episodenstatus

Jede Episode in der Liste ist mit einer farbigen Statusanzeige versehen. Das Verständnis dieser Status ist wesentlich, um den Zustand des Archivs korrekt zu interpretieren.

| Status | Farbe | Bedeutung |
|--------|-------|-----------|
| **Herunterzuladen** | Grau | Die Episode ist im Feed vorhanden, wurde aber noch nie heruntergeladen. |
| **In der Warteschlange** | Blau | Die Episode wurde zur Warteschlange hinzugefügt und wartet auf ihre Reihenfolge. |
| **In Bearbeitung** | Animiertes Hellblau | Der Download läuft. Die Zelle zeigt auch den Fortschritt in Prozent an. |
| **Abgeschlossen** | Grün | Die Datei wurde heruntergeladen, umbenannt und korrekt verifiziert. |
| **Fehler** | Rot | Der Download ist nach allen automatischen Versuchen fehlgeschlagen. Der Tooltip zeigt den Fehlercode an. |
| **Heruntergeladen** | Blassgrün | Die Datenbank verzeichnet diese Episode bereits als heruntergeladen. Sie wird nicht erneut heruntergeladen. |

*Hinweis zum Status **„Heruntergeladen"**:* Dieser Status ist das Ergebnis der Database-First-Philosophie. Wenn ein bereits früher verarbeiteter Feed analysiert wird, befinden sich die meisten Episoden in diesem Status: Die Software weiß bereits, dass sie im Archiv vorhanden sind. Nur nach dem letzten Download veröffentlichte Episoden erscheinen als **„Herunterzuladen"**.

---

## 3.5 Die individuellen Download-Steuerelemente

Rechts neben jeder Zeile in der Liste befinden sich zwei Schaltflächen.

**Symbol Download (↓):** Fügt die einzelne Episode der Download-Warteschlange hinzu. Befindet sich die Episode bereits im Status **„Abgeschlossen"** oder **„Heruntergeladen"**, fordert das System eine Bestätigung an, bevor ein erzwungener Re-Download durchgeführt wird.

**Symbol Informationen (ℹ):** Öffnet ein Detailfenster mit vollständigen Episodeninformationen: Original-URL der Audiodatei, URL des Cover-Bilds, erweiterte Beschreibung, Dateipfad auf dem Datenträger (sofern bereits heruntergeladen), SHA-256-Hash und technische Metadaten. Dieses Fenster ist nützlich für die Verifizierung und Diagnose des Archivs.

---

## 3.6 Die Batch-Steuerelemente (Oben, rechter Bereich)

Diese Schaltflächen wirken auf die gesamte Download-Warteschlange, nicht auf einzelne Episoden.

**„Alles herunterladen":** Fügt alle Episoden im Status **„Herunterzuladen"** zur Warteschlange hinzu. Episoden, die bereits in der Datenbank vorhanden sind, werden automatisch ausgeschlossen.

**„Stoppen":** Unterbricht den Batch und leert die Warteschlange. Bereits abgeschlossene Dateien bleiben in der Datenbank. `.part`-Dateien werden gelöscht. Bei der nächsten Analyse desselben Feeds erscheinen unterbrochene Episoden wieder als **„Herunterzuladen"**.

---

## 3.7 Die globale Fortschrittsleiste (Unten)

Die untere Leiste ist stets sichtbar und zeigt den Gesamtstatus des laufenden Batches:

*   **Fortschrittsleiste:** Füllung proportional zur Anzahl der abgeschlossenen Dateien im Verhältnis zur Gesamtwarteschlange.
*   **Dateizähler:** Beispiel: `47 / 312 Episoden` — Anzahl der abgeschlossenen Dateien im Verhältnis zur Gesamtwarteschlange.
*   **Durchschnittsgeschwindigkeit:** Aggregierte Download-Geschwindigkeit aller aktiven Threads, angegeben in MB/s oder KB/s.
*   **Geschätzte Zeit:** Schätzung der verbleibenden Zeit zum Abschluss des Batches, berechnet auf Basis der Durchschnittsgeschwindigkeit der letzten 30 Sekunden.

*Hinweis:* Die Schätzung der verbleibenden Zeit kann in den ersten Phasen eines Downloads erheblich schwanken, wenn die für die Berechnung verfügbaren Daten noch begrenzt sind. Sie wird nach den ersten 10–15 abgeschlossenen Dateien zuverlässiger.

---

## 3.8 Das System-Tray-Symbol

Wenn das Hauptfenster durch Klicken auf das X geschlossen wird, beendet FeedDownloader Pro den Prozess nicht, sondern minimiert sich in den Systembenachrichtigungsbereich (System Tray, in der Nähe der Windows- oder macOS-Uhr). Dieses Verhalten ist beabsichtigt: Downloads werden im Hintergrund fortgesetzt, während das Fenster nicht sichtbar ist.

**Kontextmenü des Tray-Symbols (Rechtsklick auf das Symbol):**
*   **FeedDownloader Pro öffnen:** Bringt das Hauptfenster in den Vordergrund.
*   **Download-Status:** Zeigt eine Zusammenfassungszeile an (z. B. `Downloading: 3 active, 47/312 completed`).
*   **Beenden:** Schließt das Programm und unterbricht alle aktiven Downloads.

*Praktischer Hinweis:* Um einen großen Download durchzuführen, ohne das Fenster geöffnet zu lassen, den Batch starten, das Fenster schließen und den Computer laufen lassen. Das Archiv steht nach Abschluss des Vorgangs zur Verfügung.

---

*Siehe Kapitel 4 für einen vollständigen Workflow von der ersten Analyse bis zum Download.*
