# Kapitel 3: Tour durch die Benutzeroberfläche

## 3.1 Aufbau des Hauptfensters

Beim Öffnen von FeedDownloader Pro ist das Fenster in vier Funktionsbereiche unterteilt:

*   **Befehlsleiste (oben):** Die fest verankerte Leiste mit dem URL-Feld, der Schaltfläche „Analysieren" und dem Einstellungssymbol. Von hier aus werden alle Vorgänge zum Hinzufügen neuer Feeds gestartet.
*   **Feed-Seitenleiste (links):** Die Spalte mit der dauerhaften Bibliothek gespeicherter Feeds, der Archiv-Registerkarte, den Synchronisierungssteuerelementen und der Fußzeile mit dem Zielpfad. Die Breite ist durch Ziehen des rechten Rands einstellbar.
*   **Hauptbereich (Mitte):** Der Bereich, in dem die Episoden des ausgewählten Feeds mit Filterleiste, Batch-Steuerelementen und Episodenliste angezeigt werden.
*   **Download-Panel (rechts, überlagert):** Das Panel, das sich automatisch öffnet, wenn ein Download-Batch läuft. Wenn es geschlossen ist, bleibt unten rechts eine schwebende Schaltfläche sichtbar, um es wieder zu öffnen.

Beim ersten Start mit leerer Bibliothek zeigt der Hauptbereich eine Hinweismeldung, die erklärt, wie der erste Feed hinzugefügt und der Zielpfad konfiguriert wird. Die Meldung verschwindet automatisch beim Hinzufügen des ersten Feeds oder manuell über die Schaltfläche ×.

---

## 3.2 Die Befehlsleiste (Oben)

**URL-Feld:** Die Texteingabeleiste, in die die RSS-Adresse des zu analysierenden Podcasts eingegeben wird. Akzeptiert direkte URLs zu XML/RSS-Dateien. Unterstützt **Drag and Drop**: Ein Link kann direkt aus einem Browser in diesen Bereich gezogen werden.

**Schaltfläche „Analysieren":** Startet die Feed-Analyse. Die Software kontaktiert die URL, liest die RSS-Datei und füllt die Episodenliste. Nach Abschluss der Analyse wird der Feed dauerhaft zur Seitenleiste hinzugefügt. Der Vorgang dauert in der Regel 1 bis 5 Sekunden, abhängig von der Größe des Feeds und der Verbindungsgeschwindigkeit.

**Einstellungssymbol (⚙):** Öffnet das Einstellungsfenster. Es ist jederzeit zugänglich, auch während eines aktiven Downloads. Details siehe Kapitel 10.

---

## 3.3 Die Feed-Seitenleiste

Die Seitenleiste ist das Kontrollzentrum der Podcast-Bibliothek. Sie enthält alle hinzugefügten Feeds dauerhaft: Die Feeds gehen beim Schließen der Software nicht verloren.

### Die Registerkarten „Feed" und „Archiv"

Am oberen Rand der Seitenleiste befinden sich zwei Registerkarten:

*   **Registerkarte „Feed":** Zeigt die Bibliothek gespeicherter Feeds. Dies ist die Standardansicht.
*   **Registerkarte „Archiv":** Zeigt die Archivansicht – eine Tabelle mit allen in der gesamten Bibliothek heruntergeladenen Episoden. Siehe Abschnitt 3.10.

### Einträge der Feed-Bibliothek

Jeder Feed in der Liste wird als Zeile dargestellt, die Folgendes anzeigt:

*   **Vorschaubild:** Das Cover-Bild des Podcasts.
*   **Titel:** Der Name des Podcasts, wie er im RSS-Feed angegeben ist.
*   **Datum:** Das Datum der letzten Synchronisierung mit dem Server.
*   **Badge „Neue Episoden":** Ein numerischer Indikator, der anzeigt, wie viele Episoden seit dem letzten Download veröffentlicht wurden. Der Badge verschwindet, sobald alle neuen Episoden heruntergeladen wurden.

Ein Klick auf einen Listeneintrag lädt die Episodenliste dieses Feeds in den Hauptbereich.

### Feed hinzufügen

Die RSS-URL in das URL-Feld oben in der Oberfläche einfügen und auf „Analysieren" klicken. Nach Abschluss der Analyse wird der Feed automatisch zur Seitenleiste hinzugefügt und bleibt für nachfolgende Sitzungen verfügbar.

### Suche und Sortierung

*   **Feed-Suche:** Das Suchfeld in der Seitenleiste filtert Feeds in Echtzeit nach Namen. Nützlich bei großen Bibliotheken.
*   **A–Z-Sortierung:** Die Sortierschaltfläche ordnet Feeds alphabetisch nach Titel. Erneutes Klicken stellt die ursprüngliche Reihenfolge wieder her.

### Synchronisierung

*   **Einzelsynchronisierung:** Beim Hovern über einen Feed-Eintrag erscheint das Synchronisierungssymbol. Ein Klick darauf veranlasst die Software, den Feed erneut vom Server zu lesen und die Episodenliste mit neuen Inhalten zu aktualisieren.
*   **Alle synchronisieren:** Die Schaltfläche „Alle synchronisieren" am oberen Rand der Seitenleiste aktualisiert alle Feeds parallel. Während des Vorgangs zeigt jedes Vorschaubild seinen eigenen Status: rotierendes Symbol (läuft), grünes Häkchen (abgeschlossen), rotes Fehlersymbol (fehlgeschlagen). Die Schaltfläche zeigt den Fortschritt in Echtzeit an (z. B. `Synchronisiere… 3/7`). Die Status bleiben nach dem Vorgang 2,5 Sekunden sichtbar und verschwinden dann.

### Fußzeile: Zielpfad

Am unteren Rand der Seitenleiste wird der Zielpfad für Downloads angezeigt, auf die letzten zwei Komponenten abgekürzt (z. B. `Dokumente / Podcasts`). Ein Klick auf diese Zeile öffnet den Ordner im Datei-Manager des Systems. Um den Pfad zu ändern, **Einstellungen → Archiv** verwenden.

### Größenänderung

Die Breite der Seitenleiste ist durch Ziehen des rechten Rands einstellbar (der Cursor wechselt zu einem horizontalen Doppelpfeil). Die Mindestbreite beträgt 240 px, die Höchstbreite 640 px, der Standardwert 456 px. Die Einstellung wird zwischen den Sitzungen gespeichert.

---

## 3.4 Die Episodenliste

Nach der Auswahl eines Feeds in der Seitenleiste wird der Hauptbereich mit der Liste der verfügbaren Episoden dieses Podcasts gefüllt.

### Feed-Kopfzeile

Am oberen Rand des Hauptbereichs ist die Kopfzeile des ausgewählten Feeds sichtbar, mit Vorschaubild, Podcast-Titel und Episodenanzahl. Von dieser Kopfzeile aus sind die wichtigsten Batch-Steuerelemente zugänglich (siehe Abschnitt 3.7).

### Listenspalten

Jede Zeile in der Liste stellt eine Episode dar und enthält die folgenden Informationen:

*   **Titel:** Der Name der Episode, wie er im RSS-Feed definiert ist.
*   **Datum:** Das ursprüngliche Veröffentlichungsdatum der Episode.
*   **Dauer:** Die Laufzeit der Episode (sofern im Feed verfügbar).
*   **Größe:** Die Dateigröße. Vor dem Download ist der Wert deklarativ (aus dem Feed entnommen); nach dem Download gibt er die tatsächliche Dateigröße an.
*   **Status:** Der visuelle Statusindikator der einzelnen Episode. Siehe Abschnitt 3.5.

### Filterleiste

Unterhalb der Feed-Kopfzeile befindet sich eine Filterleiste, mit der die angezeigten Episoden eingeschränkt werden können:

*   **Textsuche:** Filtert nach Schlüsselwörtern im Titel (AND-Logik: Alle eingegebenen Begriffe müssen vorhanden sein). Der Filter wird beim Wechsel des Feeds automatisch zurückgesetzt.
*   **Statusfilter:** Schnellschaltflächen, um nur Episoden in einem bestimmten Status anzuzeigen: Alle, Neu (nicht heruntergeladen), Heruntergeladen, Fehler.
*   **Datumsfilter:** Felder „Von" und „Bis", um die Liste auf einen Veröffentlichungszeitraum zu begrenzen.
*   **Dauerfilter:** Begrenzt die Liste auf Episoden mit einer Laufzeit zwischen einem Mindest- und Höchstwert (in Minuten).
*   **Sortieren:** Öffnet ein Panel mit fünf Sortieroptionen – Feed-Reihenfolge (Standard), neuestes Datum, ältestes Datum, längste Laufzeit, kürzeste Laufzeit.

Alle Filter werden automatisch zurückgesetzt, wenn ein anderer Feed ausgewählt wird.

### Mehrfachauswahl

Es können mehrere Episoden gleichzeitig ausgewählt werden, um deren Download als Batch zu starten:

*   **Strg+Klick** (oder Cmd+Klick auf macOS): Fügt die Episode der Auswahl hinzu oder entfernt sie einzeln daraus.
*   **Umschalt+Klick:** Wählt den Bereich zwischen der zuletzt ausgewählten Episode und der angeklickten aus.
*   Ein Kontrollkästchen erscheint beim Hovern über nicht ausgewählte Episoden und dauerhaft bei ausgewählten.

Wenn mindestens eine Episode ausgewählt ist, erscheint in der Feed-Kopfzeile die Schaltfläche **„Auswahl herunterladen (N)"**. Die Auswahl wird beim Feed-Wechsel und nach dem Starten des Downloads zurückgesetzt.

---

## 3.5 Die Episodenstatus

Jede Episode in der Liste ist mit einem Statusindikator versehen. Das Verstehen dieser Status ist entscheidend, um den Zustand des Archivs korrekt zu interpretieren.

| Status | Farbe | Bedeutung |
|--------|-------|-----------|
| **Herunterzuladen** | Grau | Die Episode ist im Feed vorhanden, wurde aber noch nie heruntergeladen. |
| **In Warteschlange** | Blau | Die Episode wurde zur Warteschlange hinzugefügt und wartet im Download-Panel auf ihre Verarbeitung. |
| **Läuft** | Animiertes Hellblau | Der Download läuft. Die Zeile zeigt Fortschritt in Prozent, Geschwindigkeit und geschätzte Zeit in Echtzeit. |
| **Abgeschlossen** | Grün | Die Datei wurde heruntergeladen, umbenannt und korrekt verifiziert. |
| **Fehler** | Rot | Der Download ist nach allen automatischen Wiederholungsversuchen fehlgeschlagen. |
| **Heruntergeladen** | Gedämpftes Grün | Die Datenbank verzeichnet diese Episode bereits als in einer früheren Sitzung heruntergeladen. |

*Hinweis zum Status **„Heruntergeladen"**:* Dieser Status ist das Ergebnis der Database-First-Philosophie. Beim Analysieren eines bereits verarbeiteten Feeds erscheinen die meisten Episoden in diesem Status: Die Software weiß bereits, dass sie im Archiv vorhanden sind. Nur nach dem letzten Download veröffentlichte Episoden erscheinen als **„Herunterzuladen"**.

---

## 3.6 Individuelle Download-Steuerelemente

Rechts neben jeder Zeile in der Liste erscheinen beim Hovern episodenspezifische Steuerschaltflächen. Die sichtbaren Schaltflächen variieren je nach Status:

**Für alle Episoden:**

*   **Titel kopieren** (Dokumentsymbol): Kopiert den Episodentitel in die Zwischenablage des Systems.
*   **Kontrollkästchen:** Für die Mehrfachauswahl (siehe Abschnitt 3.4).

**Für Episoden mit Status „Herunterzuladen" oder „Fehler":**

*   **Herunterladen** (Pfeil nach unten): Fügt die einzelne Episode der Download-Warteschlange hinzu.

**Für Episoden mit Status „Abgeschlossen" oder „Heruntergeladen":**

*   **Erneut herunterladen** (Pfeil nach unten): Fügt die Episode erneut zur Warteschlange hinzu und überschreibt die vorhandene Datei.
*   **Status zurücksetzen** (Aktualisierungssymbol): Setzt den Episodenstatus zurück auf „Herunterzuladen", ohne die Datei vom Datenträger zu löschen. Nützlich, um eine neue Analyse zu erzwingen.
*   **Ordner öffnen** (Ordnersymbol): Öffnet den Datei-Manager des Systems am Speicherort der heruntergeladenen Datei.

**Interaktion mit dem Detailbereich:**
Ein **einfacher Klick** auf die Episodenzeile öffnet den Detailbereich (siehe Abschnitt 3.9) mit vollständigen Metadaten und kontextuellen Aktionen. Strg+Klick und Umschalt+Klick sind ausschließlich für die Mehrfachauswahl reserviert und öffnen den Bereich nicht.

---

## 3.7 Batch-Steuerelemente

Die Batch-Steuerelemente wirken auf die gesamte Download-Warteschlange, nicht auf einzelne Episoden. Sie befinden sich in der Feed-Kopfzeile, oberhalb der Filterleiste.

**„Alles herunterladen":** Fügt alle Episoden mit Status **„Herunterzuladen"** zur Warteschlange hinzu. Episoden, die bereits in der Datenbank vorhanden sind, werden automatisch ausgeschlossen. Das Download-Panel öffnet sich beim Start automatisch.

**„Auswahl herunterladen (N)":** Erscheint, wenn mindestens eine Episode ausgewählt ist. Startet den Download ausschließlich für die ausgewählten Episoden.

**„Stopp":** Sendet ein Abbruchsignal an alle aktiven Downloads und leert die Warteschlange. Bereits abgeschlossene Dateien verbleiben in der Datenbank. `.part`-Dateien werden gelöscht. Beim nächsten Analysieren erscheinen unterbrochene Episoden wieder als **„Herunterzuladen"**.

**„M3U exportieren":** Erstellt eine Playlist im Format `.m3u` mit den absoluten lokalen Pfaden aller heruntergeladenen Episoden für diesen Podcast. Öffnet einen nativen Speicherdialog. Die Schaltfläche ist nur verfügbar, wenn für den aktuellen Feed heruntergeladene Episoden vorhanden sind.

**„Ordner öffnen"** (Ordnersymbol in der Kopfzeile): Öffnet den Datei-Manager im Zielordner des aktuellen Feeds.

---

## 3.8 Das Download-Panel

Das Download-Panel ist das Überwachungs- und Kontrollzentrum für alle laufenden Downloads. Es ersetzt die frühere fest verankerte Fortschrittsleiste am unteren Rand der Oberfläche.

### Öffnen und Schließen

Das Panel öffnet sich **automatisch** beim Start jedes Batches. Wenn es geschlossen ist, ist die **schwebende Schaltfläche** (rundes Symbol) in der unteren rechten Ecke des Fensters sichtbar: Ein Klick öffnet das Panel wieder. Das Schließen des Panels unterbricht keine laufenden Downloads.

### Struktur des Panels

*   **Kopfzeile:** Zeigt den Zähler abgeschlossener/Gesamtdateien (z. B. `47 / 312`), die Stopp-Schaltfläche zum Unterbrechen aller Downloads und die Schaltfläche × zum Schließen des Panels.
*   **Warteschlangenliste:** Jeder laufende oder wartende Download wird als Zeile dargestellt mit: Episodentitel, Podcast-Name, Fortschritt in Prozent, aktuelle Geschwindigkeit (KB/s oder MB/s), geschätzte Restzeit (z. B. `2m 30s`), individuelle Fortschrittsleiste. Beim Hovern über die Zeile erscheint die Schaltfläche ×, um diesen einzelnen Download abzubrechen.
*   **Fehlerabschnitt:** Am Ende des Batches erscheint, falls ein oder mehrere Downloads fehlgeschlagen sind, unten im Panel eine aufklappbare Zusammenfassung mit der Liste nicht heruntergeladener Episoden und dem jeweiligen Fehlercode.

---

## 3.9 Der Detailbereich für Episoden

Der Detailbereich bietet eine detaillierte Ansicht einer einzelnen Episode: Metadaten, Aktionen und – wenn die Episode bereits im Archiv vorhanden ist – technische Daten der heruntergeladenen Datei.

### Das Detailfeld öffnen

Ein **einfacher Klick** auf eine beliebige Zeile in der Episodenliste öffnet das Panel, das von der rechten Seite des Fensters einblendet (unterhalb der Befehlsleiste). Das Panel schließt sich automatisch, wenn ein anderer Feed in der Seitenleiste ausgewählt wird.

*Hinweis:* Strg+Klick und Umschalt+Klick sind für die Mehrfachauswahl reserviert und öffnen das Panel nicht.

### Inhalt des Panels

*   **Grundlegende Metadaten:** Veröffentlichungsdatum, deklarierte Laufzeit, im Feed angegebene Dateigröße.
*   **Kontextuelle Aktionen:** Die verfügbaren Schaltflächen variieren je nach Episodenstatus: Herunterladen, Erneut herunterladen, Status zurücksetzen, Ordner öffnen.
*   **Archivdaten** (nur sichtbar, wenn die Episode bereits heruntergeladen wurde): Datum und Uhrzeit des Downloads, tatsächliche Dateigröße, Bitrate, Abtastrate, Dateiname auf dem Datenträger, SHA-256-Prüfsumme.
*   **Quellenlink:** Die Original-URL der Audiodatei im RSS-Feed, mit einer Schaltfläche zum Kopieren in die Zwischenablage.
*   **Episodennotizen:** Der beschreibende Text der Episode aus dem Feed (Show Notes), im Klartextformat dargestellt.

---

## 3.10 Die Archivansicht

Die Archivansicht ist über die Registerkarte **Archiv** in der Seitenleiste zugänglich. Im Gegensatz zur Episodenliste, die jeweils nur die Episoden eines Feeds anzeigt, erfasst die Archivansicht in einer einzigen Tabelle **alle in der gesamten Bibliothek heruntergeladenen Episoden**, unabhängig vom jeweiligen Podcast.

### Funktionen

*   **Suche:** Das Suchfeld filtert nach Episodentitel oder Podcast-Name.
*   **Podcast-Filter:** Das Dropdown-Menü ermöglicht es, die Anzeige auf die Episoden eines einzelnen Podcasts zu beschränken.
*   **Sortierung:** Die Tabelle kann nach Download-Datum, Veröffentlichungsdatum, Dateigröße und Bitrate sortiert werden.
*   **Statistiken:** Die Kopfzeile der Archivansicht zeigt die Gesamtzahl heruntergeladener Dateien, die Anzahl unterschiedlicher Podcasts und die Gesamtgröße des Archivs in Gigabyte.
*   **Im Ordner anzeigen:** Beim Hovern über eine Zeile erscheint die Schaltfläche, die den Datei-Manager am Speicherort der Datei öffnet.

Die Archivansicht aktualisiert sich automatisch, wenn jeder Download abgeschlossen wird.

---

## 3.11 Die Befehlspalette (Strg+K)

Die Befehlspalette ist ein Schnellzugriffswerk, mit dem jede Hauptfunktion der Software ohne Mauseinsatz erreicht werden kann.

### Die Befehlspalette öffnen

Die Tastenkombination **Strg+K** (von beliebiger Stelle in der App, auch während eines Downloads) öffnet ein Overlay mit einem zentralen Suchfeld.

### Navigation

*   **Eingabe** im Suchfeld filtert Aktionen und Feeds in Echtzeit.
*   **Pfeiltasten ↑↓** bewegen die Auswahl zwischen den Ergebnissen.
*   **Eingabetaste** führt die ausgewählte Aktion aus.
*   **Esc** schließt die Palette ohne Ausführung einer Aktion.

### Inhalt

*   **Gruppe „Aktionen":** Fünf feste, immer verfügbare Befehle: *Einstellungen öffnen*, *Alle Feeds synchronisieren*, *Feed hinzufügen* (fokussiert das URL-Feld), *Zur Archiv-Registerkarte wechseln*, *Zur Feed-Registerkarte wechseln*.
*   **Gruppe „Feeds":** Wenn das Suchfeld leer ist, werden die ersten fünf Feeds der Bibliothek angezeigt. Durch Eingabe werden Feeds nach Titel gefiltert. Die Auswahl eines Feeds aus der Palette lädt diesen direkt in den Hauptbereich.

---

## 3.12 Das System-Tray-Symbol

Wenn das Hauptfenster durch Klicken auf das X geschlossen wird, beendet FeedDownloader Pro den Prozess nicht: Es minimiert sich in den Systembenachrichtigungsbereich (System-Tray, neben der Windows- oder macOS-Uhr). Dieses Verhalten ist beabsichtigt: Downloads laufen im Hintergrund weiter, während das Fenster nicht sichtbar ist.

**Kontextmenü des Tray (Rechtsklick auf das Symbol):**

*   **FeedDownloader Pro öffnen:** Bringt das Hauptfenster wieder in den Vordergrund.
*   **Download-Status:** Zeigt eine Zusammenfassungszeile der aktuellen Aktivität.
*   **Beenden:** Schließt das Programm und stoppt alle aktiven Downloads.

*Praktischer Hinweis:* Um einen umfangreichen Download auszuführen, ohne das Fenster geöffnet zu halten, den Batch starten, das Fenster schließen und den Computer laufen lassen. Das Archiv steht nach Abschluss des Vorgangs zur Verfügung.

---

*Weiter zu Kapitel 4 für einen vollständigen Workflow von der ersten Analyse bis zum Download.*