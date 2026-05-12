# ⚡ Runtime FeedDownloader Pro: Schnellstartanleitung

Willkommen bei **Runtime FeedDownloader Pro**. Diese Anleitung führt Sie vom ersten Start bis zu Ihrem ersten vollständigen Podcast-Archiv in weniger als 3 Minuten.

---

## 1. Feed-Analyse

Teilen Sie zunächst der Software mit, welchen Podcast Sie archivieren möchten:

1. Kopieren Sie die **RSS-URL** des Podcasts, den Sie herunterladen möchten (normalerweise auf der Podcast-Website mit Bezeichnungen wie „RSS", „Feed" oder „Subscribe" zu finden).
2. Fügen Sie sie in die **Hauptsuchleiste** oben in der Benutzeroberfläche ein.
3. Klicken Sie auf die Schaltfläche **„Analysieren"** (oder drücken Sie `Eingabe`).
4. Die Software fragt den Feed ab und zeigt die vollständige Liste der verfügbaren Episoden mit Titel, Dauer und Veröffentlichungsdatum an. Der Feed wird automatisch zur linken Seitenleiste für zukünftige Zugriffe hinzugefügt.

> **Tipp:** Sie können die URL auch direkt per Drag & Drop auf das Anwendungsfenster ziehen, ohne die Suchleiste zu verwenden.

---

## 2. Zielordner auswählen

Wählen Sie vor dem Start des Downloads aus, wo Ihre Dateien gespeichert werden sollen:

1. Gehen Sie zu **Einstellungen → Archiv** und klicken Sie auf das **Ordner**-Symbol neben dem Ziel-Pfadfeld.
2. Wählen Sie den Ordner aus (oder erstellen Sie einen), in dem das Archiv organisiert werden soll.
3. Der konfigurierte Pfad ist immer in der Fußzeile der linken Seitenleiste sichtbar: Klicken Sie darauf, um den Ordner direkt im Dateimanager zu öffnen.
4. Wenn Sie ein **NAS oder Netzlaufwerk (SMB)** verwenden, geben Sie den Netzwerkpfad ein (z.B. `\\NAS\Podcasts\`). Die Software überprüft den Schreibzugriff automatisch innerhalb von 8 Sekunden, ohne die Benutzeroberfläche einzufrieren.

> **Tipp:** Erstellen Sie für jeden Podcast einen eigenen Ordner (z.B. `D:\Archiv\PodcastName\`). FeedDownloader Pro speichert Dateien geordnet und merkt sich den Speicherort in seiner Datenbank.

---

## 3. Download starten

Der Feed ist analysiert und der Ordner ist bereit. Jetzt können Sie herunterladen:

**Option A — Gesamten Katalog herunterladen:**

1. Klicken Sie auf die Hauptschaltfläche **„Alles herunterladen"** in der Episodenlisten-Kopfzeile.
2. Die gesamte Episodenliste wird der Download-Warteschlange hinzugefügt.
3. Die Software beginnt, Dateien parallel herunterzuladen (die Anzahl der Threads ist in den Einstellungen konfigurierbar).

**Option B — Selektiver Download:**

1. Suchen Sie in der Episodenliste die gewünschten Episoden.
2. Klicken Sie auf das **Download**-Symbol (Pfeil nach unten), das beim Darüberfahren neben der Episode erscheint.
3. Um mehrere Episoden auszuwählen, halten Sie `Strg` gedrückt und klicken auf jede einzelne (oder verwenden Sie `Umschalt`+Klick für einen Bereich), dann klicken Sie auf **„Ausgewählte herunterladen (N)"**.

> **Tipp:** Das **Stall Detection**-System überwacht jeden Download: Wenn ein Server 60 Sekunden lang nicht antwortet, wird der Download automatisch neu gestartet.

---

## 4. Download-Überwachung

Wenn Sie einen Batch starten, öffnet sich das **Download-Panel** automatisch auf der rechten Seite des Fensters.

* **Was es zeigt:** jede Episode in der Warteschlange mit Fortschrittspercentage, aktueller Geschwindigkeit (KB/s oder MB/s) und geschätzter Restzeit.
* **Einzelnen Download abbrechen:** Fahren Sie mit der Maus über die Episode im Panel und klicken Sie auf die erscheinende **×**-Schaltfläche.
* **Alles stoppen:** Klicken Sie auf die Schaltfläche **Stopp** in der Panel-Kopfzeile.
* **Panel schließen ohne Downloads zu stoppen:** Klicken Sie auf das **×** oben rechts im Panel. Eine **schwebende Schaltfläche** bleibt unten rechts sichtbar: Klicken Sie darauf, um das Panel jederzeit wieder zu öffnen.
* **Fehlerprotokoll:** Am Ende des Batches zeigt das Panel, wenn einige Episoden fehlgeschlagen sind, eine aufklappbare Zusammenfassung mit Titeln und Fehlercodes.
* **Hintergrundbetrieb:** Sie können das Hauptfenster schließen: Die Software arbeitet weiterhin im Benachrichtigungsbereich (System Tray) und Downloads werden nicht unterbrochen.

> **Tipp:** Drücken Sie jederzeit **Strg+K**, um die Befehlspalette zu öffnen: Von dort aus können Sie „Alle Feeds synchronisieren" starten, Einstellungen öffnen oder zu einem anderen Podcast wechseln, ohne die Maus zu verwenden.

---

## 5. Export und Statistiken

Öffnen Sie nach Abschluss des Downloads die **Einstellungen** (Zahnrad-Symbol ⚙️) für erweiterte Funktionen:

* **CSV exportieren:** Erstellt eine Tabellendatei mit der vollständigen Liste der heruntergeladenen Episoden (Titel, URL, Dateipfad, SHA-256-Hash, Größe, Bitrate).
* **OPML importieren/exportieren:** Teilen Sie Ihre Feed-Liste mit anderen Apps oder einer anderen Installation der Software.
* **Archivstatistiken:** Zeigt den belegten Festplattenplatz, die Gesamtanzahl der Episoden und die Anzahl der verschiedenen Podcasts im Archiv.
* **Umbenennungsvorlage:** Passen Sie das Dateinamenformat mit Tokens wie `{{title}}`, `{{date}}`, `{{podcast}}` für ein perfekt organisiertes Archiv an.
* **M3U exportieren:** Über die Schaltfläche „M3U exportieren" in der Episodenlisten-Kopfzeile können Sie eine Wiedergabeliste mit den lokalen Pfaden aller heruntergeladenen Episoden eines Podcasts erstellen.

---

## Nützliche Tipps & Fehlerbehebung

**Der Feed wird nicht erkannt:**
Stellen Sie sicher, dass die URL direkt die Adresse der RSS-Datei ist (endet normalerweise auf `.xml` oder `.rss`). Manche Websites zeigen eine HTML-Seite mit einem Link zum eigentlichen Feed: Verwenden Sie diesen Link.

**Einige Episoden werden nicht heruntergeladen (404-Fehler):**
Die Episode wurde vom Podcast-Server entfernt. FeedDownloader Pro protokolliert den Fehler im Download-Panel, ohne andere Downloads zu blockieren. Dies ist einer der Gründe, warum zeitnahe Archivierung wesentlich ist.

**NAS-Pfad nicht erreichbar:**
Stellen Sie sicher, dass das NAS eingeschaltet und im lokalen Netzwerk erreichbar ist, bevor Sie den Download starten. Wenn Sie SMB-Anmeldedaten verwenden, stellen Sie sicher, dass die Freigabe eingebunden ist (oder Anmeldedaten in Windows konfiguriert sind).

**Die Software hat den Download wegen „unzureichendem Speicherplatz" gestoppt:**
Geben Sie Speicherplatz im Zielordner frei und starten Sie den Batch neu. Bereits heruntergeladene Dateien werden dank der Datenbank nicht erneut heruntergeladen.

---

*Sicherheit garantiert: Jede URL wird vom 5-stufigen Anti-SSRF-System gefiltert, bevor sie verarbeitet wird.*

*Teil des Ecosystem Runtime | Digital Core — Werkzeuge, die Bestand haben.*
