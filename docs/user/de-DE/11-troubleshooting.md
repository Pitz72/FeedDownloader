# Kapitel 11: Fehlerbehebung

## 11.1 Verwendung dieses Kapitels

Dieses Kapitel enthält die häufigsten von Benutzern gemeldeten Probleme mit den wahrscheinlichsten Ursachen und Schritt-für-Schritt-Lösungen. Jedes Problem wird so beschrieben, wie es sich in der Oberfläche äußert, nicht in internen technischen Begriffen.

Ist das Problem nicht in dieser Liste enthalten, die Protokolldateien im Ordner `logs/` konsultieren (siehe Kapitel 10) und den Support kontaktieren, dem das Protokoll der Sitzung beigefügt wird, in der das Problem aufgetreten ist.

---

## Probleme mit Feed und Analyse

---

### Problem: „Verbindungsfehler" oder „Timeout" bei der Feed-Analyse

**Wie es sich äußert:** Man klickt auf **„Analysieren"** und nach einigen Sekunden erscheint eine Fehlermeldung mit einem Timeout oder einem Verbindungsfehler. Die Liste bleibt leer.

**Wahrscheinliche Ursachen und Lösungen:**

*   **Der Feed-Server ist nicht verfügbar.** Die URL des Feeds im Browser öffnen. Gibt der Browser einen Fehler zurück (Seite nicht gefunden, „Diese Website ist nicht erreichbar"), liegt das Problem beim Podcast-Server: Es kann nicht eingegriffen werden, außer es zu einem späteren Zeitpunkt erneut zu versuchen.
*   **Die Internetverbindung ist nicht verfügbar oder instabil.** Prüfen, ob andere Websites erreichbar sind. Ist die Verbindung instabil, warten, bis sie sich stabilisiert hat, bevor erneut versucht wird.
*   **Eine Unternehmens-Firewall oder ein Proxy blockiert die Anfrage.** In Unternehmensumgebungen kann der Datenverkehr zu bestimmten Hosts blockiert sein. Im Heimnetzwerk versuchen, um zu prüfen, ob das Problem netzwerkspezifisch ist.

---

### Problem: Der Feed wird analysiert, aber die Episodenliste ist leer

**Wie es sich äußert:** Die Analyse wird ohne Fehler abgeschlossen, aber die Episodenliste zeigt keine Elemente an (oder zeigt 0 Episoden).

**Wahrscheinliche Ursachen und Lösungen:**

*   **Der Feed enthält keine Episoden.** Die URL im Browser öffnen und prüfen, ob das XML-Dokument `<item>`- oder `<entry>`-Tags enthält. Sind keine vorhanden, hat der Podcast noch keine Episoden veröffentlicht.
*   **Der Feed verwendet ein nicht standardmäßiges Format.** FeedDownloader Pro unterstützt RSS 2.0 und Atom 1.0. Einige von proprietären Plattformen erzeugte Feeds können eine unkonventionelle Struktur aufweisen. In diesem Fall zeigt die Software eine spezifische Warnung in der Analysemeldung an.
*   **Alle Episoden befinden sich bereits in der Datenbank.** Wurde der Feed bereits früher analysiert, erscheinen die Episoden mit dem Status **„Heruntergeladen"** (blassgrün). Die Liste durchscrollen und prüfen, ob dieser Statusindikator vorhanden ist.

---

### Problem: Der Feed zeigt nur die letzten N Episoden und nicht den gesamten historischen Katalog

**Wie es sich äußert:** Ein Podcast mit Hunderten bekannter Episoden wird analysiert, aber die Liste zeigt nur 50 oder 100 Episoden.

**Ursache:** Diese Begrenzung wird vom Podcast-Herausgeber oder seiner Hosting-Plattform auferlegt, nicht von FeedDownloader Pro. Viele Plattformen beschränken den RSS-Feed auf die letzten 50–100 Episoden, um die Last auf ihren Servern zu reduzieren. Die Software lädt genau die Daten herunter, die der Feed bereitstellt.

**Mögliche Alternativen:**
*   Prüfen, ob der Podcast einen „vollständigen Feed" als alternative URL anbietet (einige Plattformen stellen diesen zur Verfügung).
*   Die Website des Podcasts oder die Vertriebsplattform (Spotify, Apple Podcasts) konsultieren, um Links älterer Episoden abzurufen.
*   Einige Plattformen akzeptieren Parameter in der URL, um den vollständigen Feed anzufordern (z. B. `?limit=0` oder `?paged=all`): die Dokumentation der jeweiligen Plattform prüfen.

---

## Download-Probleme

---

### Problem: Viele Episoden zeigen den Status „Fehler 404"

**Wie es sich äußert:** Nach einem Batch-Download zeigen zahlreiche Episoden den Status **„Fehler"** mit der Meldung `404 Not Found`.

**Ursache:** Die Episoden sind noch im RSS-Feed vorhanden (im XML-Dokument), aber die Audiodateien, auf die sie verweisen, wurden vom Server entfernt. Diese Situation tritt häufig bei aufgegebenen oder auf andere Plattformen migrierten Podcasts auf.

**Was getan werden kann:**
*   Es ist nicht möglich, Dateien herunterzuladen, die nicht mehr auf dem Server vorhanden sind.
*   Handelt es sich um einen aktiven Podcast und erscheinen die Fehler übermäßig, den Podcast-Herausgeber kontaktieren: Es könnte sich um eine temporäre Migration oder ein behebares technisches Problem handeln.
*   Episoden mit Fehler 404 werden automatisch von nachfolgenden Batches ausgeschlossen. Sie müssen nicht aus der Liste entfernt werden.

---

### Problem: Downloads starten, schreiten aber sehr langsam voran

**Wie es sich äußert:** Die Fortschrittsleiste bewegt sich, aber die Geschwindigkeit ist im Vergleich zur verfügbaren Bandbreite sehr niedrig (wenige KB/s).

**Wahrscheinliche Ursachen und Lösungen:**

*   **Der Podcast-Server wendet Bandbreitenbeschränkungen an.** Viele Hosting-Server drosseln den Datenverkehr, um Kosten zu begrenzen. Die Threads auf 1 zu reduzieren kann bei Servern, die mehrere gleichzeitige Verbindungen bestrafen, die Situation verbessern.
*   **Die WLAN-Verbindung ist instabil.** Für intensive Batch-Downloads eine kabelgebundene Verbindung (Ethernet) verwenden.
*   **Der Zieldatenträger ist langsam.** Das Schreiben auf NAS über WLAN oder auf USB-2.0-Geräten kann der Engpass sein. In Betracht ziehen, zuerst auf ein schnelles lokales Laufwerk herunterzuladen.
*   **Die Internetverbindung ist tatsächlich begrenzt.** Die tatsächliche Download-Geschwindigkeit mit einem Speedtest prüfen. Liegt das Ergebnis unter den Erwartungen, liegt das Problem bei der Verbindung.

---

### Problem: Eine Episode bleibt bei einem hohen Prozentsatz hängen und wird nie abgeschlossen

**Wie es sich äußert:** Ein einzelner Download zeigt einen hohen Prozentsatz (90 %, 95 %, 99 %), der 100 % nicht erreicht und sich nicht aktualisiert.

**Ursache:** Der Server hat fast die gesamte Datei gesendet, aber den Transfer vor dem Abschluss unterbrochen. Die Stall Detection erkennt diesen Zustand innerhalb von 60 Sekunden nach dem letzten empfangenen Datenbyte und startet den Download automatisch neu.

**Bleibt das Problem nach mehreren Versuchen bestehen:** Die Datei auf dem Server könnte beschädigt oder abgeschnitten sein. Nach der maximalen Anzahl von Versuchen wird die Episode als **„Fehler"** markiert, mit einer Meldung, die eine Diskrepanz zwischen der angegebenen und der empfangenen Größe anzeigt.

---

### Problem: Die Software hat eine `.mp3`-Datei heruntergeladen, aber der Audioplayer meldet, dass sie beschädigt ist

**Wie es sich äußert:** Der Download erscheint als abgeschlossen (grüner Status), aber beim Öffnen der Datei mit einem Audioplayer wird ein Fehler zurückgegeben oder die Datei wird nicht abgespielt.

**Ursache:** Dies sollte dank des `.part`-Datei-Mechanismus und der Größenprüfung nicht auftreten. Passiert es dennoch, könnte die Originaldatei auf dem Server bereits beschädigt sein (Problem des Herausgebers), oder es ist ein Schreibfehler auf dem Datenträger aufgetreten.

**Lösung:**
1.  Rechtsklick auf die Episode in der Liste → **„Erneut herunterladen"**.
2.  Ist die erneut heruntergeladene Datei noch beschädigt, liegt das Problem bei der Quelldatei auf dem Podcast-Server. Dies durch direktes Öffnen der Datei-URL im Browser prüfen.
3.  Einen Health Check durchführen (siehe Kapitel 9), um zu prüfen, ob andere Dateien im Archiv Probleme aufweisen.

---

## NAS- und Netzwerkprobleme

---

### Problem: „Netzwerkpfad nicht erreichbar", obwohl das NAS eingeschaltet ist

**Wie es sich äußert:** Die Software zeigt die Warnung zum nicht erreichbaren Pfad an, aber das NAS ist über den Dateimanager normal zugänglich.

**In der angegebenen Reihenfolge zu prüfende Lösungen:**

1.  **Prüfen, ob der Pfad exakt ist.** Ein Unterschied in Groß-/Kleinschreibung (`\\MYNAS\podcast` vs. `\\MYNAS\Podcast`) kann auf einigen Systemen einen Fehler verursachen.
2.  **Sind die SMB-Anmeldedaten gespeichert?** Den Explorer öffnen und versuchen, manuell auf `\\MYNAS\Freigabename` zuzugreifen. Wird ein Passwort angefordert, sind die Anmeldedaten nicht im Windows-Anmeldeinformations-Manager gespeichert. Diese eingeben und **„Speichern"** aktivieren.
3.  **Blockiert die Windows-Firewall FeedDownloader Pro?** Zu `Systemsteuerung → Windows Defender Firewall → Zugelassene Apps` navigieren und prüfen, ob FeedDownloader Pro mit erlaubtem Zugriff aufgelistet ist.
4.  **Unterstützt das NAS SMBv2/3?** Einige ältere NAS-Geräte unterstützen nur SMBv1, das unter Windows 11 standardmäßig deaktiviert ist. Die NAS-Firmware aktualisieren oder SMBv1 über das NAS-Administrationsfenster aktivieren.

---

### Problem: Downloads auf NAS brechen nach einigen Minuten ab

**Wie es sich äußert:** Der Batch startet normal, lädt einige Episoden herunter, blockiert dann mit Schreibfehlern oder der Meldung „Pfad nicht erreichbar".

**Ursache:** Das NAS wechselt während des Downloads in den Ruhemodus. Einige Consumer-NAS-Geräte verfügen über eine Energiesparfunktion, die sich auch während aktiver Übertragungen aktivieren kann, wenn das Gerät so konfiguriert ist, dass es nur den Web-Datenverkehr überwacht und SMB-Verbindungen ignoriert.

**Lösungen:**
*   Die Ruhemodusfunktion während Batch-Downloads über das NAS-Administrationsfenster vorübergehend deaktivieren.
*   Die Anzahl der Threads auf 1 reduzieren: Ein kontinuierlicher Schreibdatenstrom verhindert die Aktivierung des Ruhemodus effektiver als intensive Bursts mit Zwischenpausen.

---

## Allgemeine Probleme

---

### Problem: Die Oberfläche reagiert mit Verzögerung

**Wie es sich äußert:** Klicks benötigen 1–2 Sekunden zur Reaktion, das Scrollen der Liste ist unregelmäßig, das Programm wirkt langsam.

**Wahrscheinliche Ursachen:**

*   **Große Datenbank.** Mit Zehntausenden von Episoden in der Datenbank können einige Vorgänge verlangsamen. Die Verwendung von **Datenbank zurücksetzen** (**Einstellungen → Erweitert**) nur in Betracht ziehen, wenn das Archiv viele fehlerhafte Episoden oder Daten enthält, die nicht wiederhergestellt werden sollen.
*   **Hohe Anzahl von Threads auf Hardware mit wenig RAM.** Bei 5 aktiven Threads auf einem System mit weniger als 4 GB RAM kann der Prozess langsam werden. Die Threads auf 1 oder 3 reduzieren.
*   **Antivirenprogramm analysiert `.part`-Dateien in Echtzeit.** Einige Sicherheitssoftware überwacht jede Schreiboperation auf dem Datenträger und verlangsamt dadurch Downloads. Den Zielordner zu den Ausnahmen des Antivirenprogramms hinzufügen.

---

### Problem: Die Software startet nicht oder schließt sich sofort beim Öffnen

**Wie es sich äußert:** Das Programm wird gestartet, der Prozess erscheint kurz im Task-Manager, verschwindet dann aber, ohne dass die Oberfläche angezeigt wird.

**Lösungen:**

1.  **Protokolldateien prüfen.** Auf den Ordner `%APPDATA%\FeedDownloaderPro\logs\` (Windows) oder `~/.config/FeedDownloaderPro/logs/` (Linux) zugreifen. Die aktuellste Protokolldatei mit einem Texteditor öffnen: Die letzte Zeile sollte die Ursache des Problems angeben.
2.  **Beschädigte Datenbank.** Zeigt das Protokoll beim Start einen SQLite-Fehler an, könnte die Datei `feeddownloader.db` beschädigt sein. Diese durch ein Backup ersetzen (siehe Kapitel 9). Ist kein Backup verfügbar, sie in `feeddownloader.db.bak` umbenennen: Die Software erstellt beim nächsten Start eine neue leere Datenbank (mit Verlust der Chronik).
3.  **Software neu installieren.** FeedDownloader Pro deinstallieren und die neueste Version installieren. Die Datenbank und die Einstellungen werden durch die Deinstallation nicht gelöscht.

---

### Problem: Die Datenbankdaten sind verloren gegangen — ist eine Wiederherstellung möglich?

**Wie es sich äußert:** Die Datenbank wurde versehentlich gelöscht, ist beschädigt, oder es wurde ein Zurücksetzen ohne vorheriges Backup durchgeführt.

**Wiederherstellungsmöglichkeiten:**

*   **Mit verfügbarem Backup:** Die Backup-Datei `feeddownloader.db` bei geschlossenem Programm in den Benutzerdatenordner der Anwendung kopieren (Pfad des Benutzerdatenordners siehe Kapitel 2).
*   **Ohne Backup:** Die Audiodateien auf dem Datenträger sind noch vorhanden: Nur der interne Speicher der Software ist verloren gegangen. Das Archiv kann teilweise durch erneute Analyse der Feeds wiederhergestellt werden: Episoden, deren Dateien bereits auf dem Datenträger vorhanden sind, werden vom System erkannt und nicht erneut heruntergeladen.
*   **Vorbeugung:** Regelmäßig eine manuelle Kopie der Datei `feeddownloader.db` an einem sicheren Speicherort erstellen oder die Feed-Liste im OPML-Format exportieren (siehe Kapitel 5) als Konfigurations-Backup. Dieses Backup empfiehlt sich vor jeder Migration oder jedem Software-Update.

---

*Dies ist das letzte Kapitel des Erweiterten Benutzerhandbuchs von Runtime FeedDownloader Pro.*

*Für Unterstützung, die von diesem Handbuch nicht abgedeckt wird, auf die offizielle Release-Seite verweisen oder den technischen Support von Ecosystem Runtime | Digital Core kontaktieren.*

---

*Ecosystem Runtime | Digital Core — Werkzeuge, die gebaut wurden, um zu bestehen.*
