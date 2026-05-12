# Kapitel 4: Das erste Archiv — Schritt-für-Schritt-Anleitung

## 4.1 Einführung in den Workflow

Dieses Kapitel beschreibt einen vollständigen Workflow von der URL eines Podcasts bis zu einem geordneten Archiv auf dem Datenträger. Das Referenzszenario ist das häufigste: den gesamten Katalog eines Podcasts zum ersten Mal herunterladen.

Es wird empfohlen, das Kapitel mindestens einmal vollständig zu lesen. Sobald man mit den Schritten vertraut ist, dauert das Anlegen eines neuen Archivs weniger als eine Minute.

---

## 4.2 Phase 1: Die RSS-URL finden

Der Ausgangspunkt ist die URL des RSS-Feeds des zu archivierenden Podcasts. Ein RSS-Feed ist eine Textdatei im XML-Format, die Podcast-Dienste veröffentlichen, um die Liste der verfügbaren Episoden zu verteilen. Jeder Podcast besitzt einen RSS-Feed.

**So findet man die RSS-URL:**

*   **Auf der Podcast-Website:** Nach einem orangefarbenen Symbol mit Radiowellen oder nach den Texten „RSS", „Feed", „Subscribe" oder „Podcast Feed" suchen. Ein Klick auf das Element öffnet in der Regel die XML-Datei im Browser: Die in der Adressleiste angezeigte URL ist die zu verwendende.
*   **Aus einer Podcast-App:** Anwendungen wie Pocket Casts, Apple Podcasts und ähnliche zeigen den RSS-Link häufig in den Podcast-Informationen an. In manchen Apps ist der Link über die Funktion „Teilen" zugänglich.
*   **Von Hosting-Diensten:** Wenn der Podcast auf Spreaker, Podbean, Buzzsprout oder gleichwertigen Plattformen gehostet wird, ist die Feed-URL in der Regel im Publisher-Dashboard oder in den öffentlichen Podcast-Informationen verfügbar.
*   **Über eine Suchmaschine:** Nach `[Podcast-Name] RSS feed` suchen. Das erste Ergebnis führt häufig direkt zur richtigen URL.

*So erkennt man eine gültige RSS-URL:* Sie endet in der Regel mit `.xml` oder `.rss`, oder enthält Wörter wie `feed`, `rss` oder `podcast` im Pfad. Beispiele: `https://www.beispiel.de/feed.xml`, `https://feeds.spreaker.com/podcast/12345`, `https://anchor.fm/s/abc123/podcast/rss`.

---

## 4.3 Phase 2: Den Zielordner vorbereiten

Vor der Analyse des Feeds empfiehlt es sich, den Zielordner festzulegen. Es wird empfohlen, von Anfang an eine geordnete Struktur anzulegen.

**Empfohlene Struktur:**
```
D:\Podcast-Archiv\
    ├── Mein Podcast\
    ├── Technologie-Podcast\
    └── Radio-Talkshow\
```

Den spezifischen Ordner für den zu archivierenden Podcast erstellen (z. B. `D:\Podcast-Archiv\Mein Podcast\`). FeedDownloader Pro speichert alle Dateien dieses Podcasts in diesem Ordner, mit den durch die Umbenennungsvorlage definierten Namen (siehe Kapitel 8).

**So wird der Zielordner in FeedDownloader Pro eingestellt:**

1.  **Einstellungen → Archiv** öffnen und auf das **Ordner**-Symbol neben dem Zielpfad-Feld klicken.
2.  Zum erstellten Ordner navigieren und ihn auswählen.
3.  Der konfigurierte Pfad ist stets in der Fußzeile der linken Seitenleiste sichtbar; ein Klick darauf öffnet den Ordner direkt im Dateimanager.

*Hinweis:* Bei Pfaden auf NAS oder Netzlaufwerken vor dem Fortfahren Kapitel 7 lesen. Die Konfiguration für Netzwerkpfade weist einige Besonderheiten auf, die in jenem Kapitel beschrieben werden.

---

## 4.4 Phase 3: Den Feed analysieren

Mit bereitstehender URL und eingestelltem Zielordner:

1.  Die RSS-URL in das **URL-Feld** oben in der Oberfläche einfügen.
2.  Auf **„Analysieren"** klicken (oder `Eingabe` drücken).
3.  Die Liste in der Mitte wird mit den Episoden gefüllt. Bei einem Podcast mit 200–300 Episoden dauert der Vorgang typischerweise 2–5 Sekunden. Bei sehr großen Archiven (1000+ Episoden) können bis zu 15–20 Sekunden benötigt werden, da die XML-Datei des Feeds erhebliche Größen erreichen kann.

**Im Falle eines Analysefehlers:**
*   Prüfen, ob die URL korrekt ist (keine führenden oder abschließenden Leerzeichen, kein fehlender Buchstabe).
*   Die URL im Browser öffnen: Gibt der Browser einen Fehler oder eine leere Seite zurück, ist der Feed möglicherweise vorübergehend nicht verfügbar, oder die URL hat sich geändert.
*   Einige Feeds erfordern spezifische HTTP-Header. In diesem Fall zeigt die Software eine Fehlermeldung mit dem empfangenen HTTP-Code an (z. B. `403 Forbidden`).

---

## 4.5 Phase 4: Die Analyseergebnisse lesen

Nach der Analyse zeigt die Liste alle Episoden des Podcasts an.

**Zu prüfende Elemente:**
*   **Gesamtzahl der Episoden:** In der Listenüberschrift oder im Zähler unten sichtbar. Ein seit mehreren Jahren aktiver Podcast kann 300–500 Episoden oder mehr haben.
*   **Episoden im Status **„Heruntergeladen"**:** Wurde der Podcast bereits früher analysiert, erscheinen die meisten Episoden in diesem Status. Die Datenbank verzeichnet diese Dateien bereits als im Archiv vorhanden.
*   **Episoden mit fehlenden Daten:** Es ist möglich, dass einige Episoden keine Dauer oder Größe angeben. Dies bedeutet, dass der Podcast-Produzent diese Informationen nicht in die RSS-Datei aufgenommen hat. Der Download wird in jedem Fall korrekt ausgeführt.

---

## 4.6 Phase 5: Den Download starten

Es stehen zwei Download-Modi zur Verfügung.

**Modus A — Vollständiger Download:**
Auf **„Alles herunterladen"** klicken. Die Software fügt alle Episoden im Status **„Herunterzuladen"** zur Warteschlange hinzu und startet die Downloads parallel. Die Anzahl der gleichzeitigen Downloads hängt von der Thread-Einstellung ab (siehe Kapitel 10; der Standardwert ist 3).

**Modus B — Selektiver Download:**
Um nur bestimmte Episoden herunterzuladen:
1.  Die Episoden durch Halten von `Strg` und Klicken auf jede einzelne auswählen.
2.  Um einen Bereich auszuwählen, auf die erste Episode klicken, `Umschalt` halten und auf die letzte klicken.
3.  Auf die Schaltfläche **„Auswahl herunterladen (N)"** klicken, die in der Feed-Kopfzeile erscheint, sobald mindestens eine Episode ausgewählt ist.

---

## 4.7 Phase 6: Den Fortschritt überwachen

Während des Downloads:

*   **Download-Panel:** Öffnet sich beim Start des Batches automatisch auf der rechten Seite des Fensters. Zeigt jede Episode in der Warteschlange mit Prozentsatz, aktueller Geschwindigkeit und geschätzter Restzeit bis zum Abschluss an. Bei einem Archiv mit 200 Episoden mit durchschnittlich 64 kbps beträgt das Gesamtdatenvolumen etwa 2–3 GB.
*   **Status in der Liste:** Jede Zeile aktualisiert sich in Echtzeit. Episoden in Bearbeitung zeigen eine individuelle Fortschrittsleiste mit dem abgeschlossenen Prozentsatz.
*   **Hintergrundausführung:** Das Fenster muss nicht geöffnet bleiben. Es kann geschlossen werden (das Programm läuft im System Tray weiter) und nach Abschluss des Vorgangs wieder geöffnet werden.

Die Software verwaltet automatisch Wiederholungsversuche bei Netzwerkfehlern, die Erkennung von blockierten Downloads bei langsamen Servern sowie die Integritätsprüfung nach Abschluss jeder Datei. Wechselt der Computer in den Ruhemodus, werden die Downloads unterbrochen und nach Wiederherstellung der Sitzung automatisch fortgesetzt.

---

## 4.8 Phase 7: Das abgeschlossene Archiv überprüfen

Wenn das Download-Panel den Batch als abgeschlossen anzeigt und alle Episoden in grünem Status erscheinen, ist das Archiv fertig.

**Empfohlene Vorgänge nach Abschluss:**

1.  **Fehler prüfen:** Zeigen einige Episoden den Status **„Fehler"** (rot) an, sie anklicken, um das Episoden-Detailpanel zu öffnen und den Fehlercode zu lesen. Alternativ den Bereich mit der Fehlerübersicht unten im Download-Panel konsultieren. Die häufigste Ursache ist `404 Not Found`, was bedeutet, dass die Datei vor dem Download vom Podcast-Server entfernt wurde.

2.  **CSV-Zusammenfassung exportieren:** Zu **Einstellungen → Archiv → Als CSV exportieren** navigieren. Die erzeugte Datei listet alle heruntergeladenen Episoden mit SHA-256-Hash, Größen und Metadaten auf (siehe Kapitel 9).

3.  **Dateien auf dem Datenträger prüfen:** Den Zielordner im Dateimanager öffnen. Die Audiodateien sind gemäß der konfigurierten Umbenennungsvorlage organisiert (siehe Kapitel 8). Das Vorhandensein von `.part`-Dateien weist auf unterbrochene Downloads hin, die beim nächsten Start des Batches abgeschlossen werden.

---

## 4.9 Das Archiv in Zukunft aktualisieren

Das Database-First-System vereinfacht Archiv-Updates. Das Verfahren hängt davon ab, ob sich der Feed bereits in der Bibliothek befindet oder nicht.

**Feed bereits in der Seitenleiste:**

1.  Den Feed in der Seitenleiste anklicken, um ihn auszuwählen.
2.  Mit der Maus über den Eintrag fahren und das Synchronisierungssymbol anklicken, oder die Schaltfläche **„Alle synchronisieren"** verwenden, um die gesamte Bibliothek parallel zu aktualisieren.
3.  Neue Episoden erscheinen im Status **„Herunterzuladen"**; bereits vorhandene bleiben **„Heruntergeladen"**.
4.  Auf **„Alles herunterladen"** klicken, um nur die neuen Episoden herunterzuladen.

**Feed noch nicht in der Bibliothek:**

Die RSS-URL in das URL-Feld oben in der Oberfläche einfügen und auf **„Analysieren"** klicken: Der Feed wird zur Bibliothek hinzugefügt, und die Liste wird mit dem aktuellen Status gefüllt.

Das System lädt dieselbe Episode nie zweimal herunter. Es ist auch möglich, eine periodische automatische Aktualisierung zu konfigurieren (siehe Kapitel 10 und Abschnitt 5.9).

---

*Siehe Kapitel 5 für eine vertiefte Auseinandersetzung mit der Feed-Verwaltung und den OPML-Funktionen.*
