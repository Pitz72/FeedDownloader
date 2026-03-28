# Kapitel 6: Die Download-Engine

## 6.1 Architektur der Engine

Die Download-Engine von FeedDownloader Pro ist ein asynchrones Multi-Thread-System. Im Gegensatz zu einem sequentiellen Downloader verwaltet die Software mehrere Downloads gleichzeitig über ein zentrales Warteschlangensystem.

**Hauptkomponenten:**

*   **Die Warteschlange:** Eine geordnete Liste aller wartenden Downloads. Jede dem Batch hinzugefügte Episode tritt in diese Warteschlange ein und wartet darauf, einem verfügbaren Thread zugewiesen zu werden.
*   **Die Worker-Threads:** Die Prozesse, die Downloads physisch ausführen. Die Anzahl der aktiven Threads ist konfigurierbar. Jeder Thread verwaltet einen Download nach dem anderen, unabhängig von den anderen.
*   **Der Datenbankmanager:** Die Komponente, die die SQLite-Datenbank in Echtzeit mit dem Status jedes Downloads aktualisiert (gestartet, abgeschlossen, fehlgeschlagen, Fortschritt in Prozent).
*   **Der Integritätsmonitor:** Der Prozess, der nach Abschluss jedes Downloads den SHA-256-Hash der heruntergeladenen Datei berechnet und aufzeichnet.

---

## 6.2 Parallele Downloads: Konfiguration

Die Anzahl der gleichzeitigen Downloads ist einer der relevantesten zu konfigurierenden Parameter. Ein zu niedriger Wert verlangsamt den Prozess; ein zu hoher Wert kann die Verbindung sättigen, den Quellserver überlasten oder Netzwerkfehler erzeugen.

**Der Standardwert ist 3 Threads.** Für die meisten Benutzer mit einer Heimverbindung bietet dieser Wert eine gute Balance zwischen Geschwindigkeit und Stabilität.

**Konfigurationsrichtlinien:**

| Szenario | Empfohlene Threads |
|----------|--------------------|
| Langsame Verbindung oder Server mit Drosselung | 1 |
| Standard-Heimverbindung | 3 (Standard) |
| Schnelle Glasfaserverbindung | 5 |
| NAS mit langsamer Netzwerkverbindung | 1 |

**So wird die Anzahl der Threads geändert:**
Zu **Einstellungen → Download → Parallele Downloads** navigieren und eines der drei verfügbaren Presets auswählen: **1**, **3** oder **5**. Die Änderung wird sofort auf die laufende Warteschlange angewendet.

*Hinweis zu Servern mit Verbindungslimits:* Einige Podcast-Hosting-Server begrenzen die Anzahl der gleichzeitigen Verbindungen pro IP-Adresse. Treten häufige Fehler `429 Too Many Requests` oder `503 Service Unavailable` auf, die Anzahl der Threads auf 1 oder 2 reduzieren. Der Retry-Mechanismus verwaltet Fehler automatisch, aber die Reduzierung der Last verhindert das Problem an der Wurzel.

---

## 6.3 Fehlerverwaltung und Retry-System

Bei einem Batch-Download von Hunderten von Dateien sind Netzwerkfehler vorhersehbar. FeedDownloader Pro verwendet eine **Retry-Strategie mit exponentiellem Backoff**: Wenn ein Download fehlschlägt, wartet das System ein wachsendes Intervall, bevor es erneut versucht, anstatt die Episode sofort wieder in die Warteschlange zu stellen.

**Retry-Zyklus:**

| Versuch | Wartezeit vor dem Retry |
|---------|-------------------------|
| 1. Fehler | 2 Sekunden |
| 2. Fehler | 4 Sekunden |
| 3. Fehler | 8 Sekunden |
| 4. Fehler | 16 Sekunden |
| 5. Fehler (letzter) | Die Episode wird als endgültiger **„Fehler"** markiert |

Ist ein Server vorübergehend überlastet, gibt das System ihm Zeit zur Erholung, bevor es erneut versucht. Die meisten transienten Fehler werden beim zweiten oder dritten Versuch behoben.

**Endgültige Fehler (kein Retry):**
*   `404 Not Found`: Die Datei existiert nicht auf dem Server. Weitere Versuche sind nutzlos.
*   `403 Forbidden`: Der Server hat die Anfrage wegen fehlender Berechtigung abgelehnt.
*   SSRF-Validierungsfehler: Die URL hat die internen Sicherheitsprüfungen nicht bestanden.

---

## 6.4 Stall Detection

Ein blockierter Download ist ein Szenario, bei dem die TCP-Verbindung technisch aktiv ist und Pakete weiterhin ankommen, der Datenstrom jedoch unterbrochen wurde. Das Betriebssystem meldet keine Fehler, da die Verbindung noch offen ist; die Datei erscheint weiterhin als „in Bearbeitung", ohne Fortschritt zu machen.

Dieser Zustand tritt häufig auf bei:
*   Unter Last stehenden Servern, die nach dem Senden der ersten Bytes drosseln.
*   Zwischennetzwerk-Routing-Problemen.
*   Großen Audiodateien, die von CDN mit Bandbreitenbeschränkungen bereitgestellt werden.

**Erkennung:**
Jeder aktive Download wird von einem Watchdog-Prozess überwacht, der alle 10 Sekunden die empfangenen Bytes erfasst. Gehen für **60 aufeinanderfolgende Sekunden** keine neuen Bytes ein (oder weniger als 1 KB, eine Schwelle, die TCP-Keep-Alives ausschließt), wird der Download als blockiert betrachtet und:
1.  Die Verbindung wird unterbrochen.
2.  Die partielle `.part`-Datei wird gelöscht.
3.  Die Episode wird mit dem normalen Retry-Zyklus wieder in die Warteschlange eingereiht.

Der Prozess ist für den Benutzer transparent: In der individuellen Fortschrittsleiste ist ein kurzer Prozentsatz-Reset sichtbar, gefolgt von der Wiederaufnahme des Downloads. War die Blockierung durch einen transienten Zustand verursacht, startet der neue Download normal. Bleibt das Problem über die maximalen Versuche hinaus bestehen, wird die Episode als **„Fehler"** markiert.

---

## 6.5 `.part`-Dateien: Das Anti-Korruptions-System

Jede Audiodatei wird während der Übertragung mit der temporären Erweiterung `.part` heruntergeladen. Die Datei wird nur dann mit der endgültigen Erweiterung (`.mp3`, `.m4a`, `.ogg` usw.) umbenannt, **nachdem**:

1.  Die Übertragung zu 100 % abgeschlossen ist.
2.  Die Dateigröße der im HTTP-Header angegebenen (`Content-Length`) entspricht, sofern verfügbar.
3.  Der SHA-256-Hash berechnet und in der Datenbank aufgezeichnet wurde.

Dieser Mechanismus stellt sicher, dass im Zielordner niemals partielle oder beschädigte Audiodateien mit endgültiger Erweiterung vorhanden sind. Bei plötzlicher Programmunterbrechung oder Computerabschaltung bleiben `.part`-Restdateien im Ordner: Die Software löscht sie bei der nächsten Sitzung und lädt sie erneut herunter.

*Speicherort der `.part`-Dateien:* Im selben Zielordner wie die abgeschlossenen Dateien. Diese Dateien sollten nicht mit einem Audioplayer geöffnet werden: Da sie unvollständig sind, würden sie Lesefehler verursachen.

---

## 6.6 Sitzungsunterbrechung und -wiederaufnahme

**Den Batch stoppen:**
Die Schaltfläche **„Stoppen"** (in der globalen Fortschrittsleiste) unterbricht alle aktiven Threads geordnet, leert die Warteschlange und löscht die partiellen `.part`-Dateien. Bereits abgeschlossene Dateien bleiben in der Datenbank. Bei der nächsten Analyse desselben Feeds erscheinen unterbrochene Episoden als **„Herunterzuladen"**.

**Programm während eines Downloads schließen:**
Wird das Hauptfenster geschlossen (das Programm läuft im System Tray weiter) oder wird während eines aktiven Downloads **„Beenden"** aus dem Tray-Menü gewählt, zeigt die Software eine Warnung mit der Anzahl der laufenden Downloads und fordert eine Bestätigung an. Bei Bestätigung des Beendens werden die aktiven Downloads kontrolliert unterbrochen und die `.part`-Dateien beibehalten.

**Eine unterbrochene Sitzung fortsetzen:**
Beim Start erkennt FeedDownloader Pro, wenn die Datenbank Episoden im Status **„In der Warteschlange"** oder **„In Bearbeitung"** aus der vorherigen Sitzung enthält, und zeigt eine Benachrichtigung an: *„X ausstehende Downloads aus der vorherigen Sitzung gefunden. Fortsetzen?"*. Bei Bestätigung wird der Batch sofort fortgesetzt.

---

## 6.7 Download-Geschwindigkeit

Die in der unteren Leiste angezeigte Geschwindigkeit ist die **aggregierte Summe** aller aktiven Threads. Bei 3 aktiven Threads, die jeweils mit 2 MB/s herunterladen, beträgt die angezeigte Gesamtgeschwindigkeit etwa 6 MB/s.

**Faktoren, die die Geschwindigkeit beeinflussen:**
*   **Bandbreite der Verbindung:** Das verfügbare Maximum.
*   **Geschwindigkeit des Quellservers:** Viele Podcast-Hosting-Server wenden Bandbreitenbeschränkungen an, um Kosten zu begrenzen. Die Geschwindigkeit eines einzelnen Threads überschreitet auf diesen Servern selten 2–5 MB/s.
*   **Anzahl der Threads:** Eine höhere Anzahl von Threads kompensiert die Langsamkeit einzelner Server durch mehrere gleichzeitige Verbindungen.
*   **Dateigröße:** Dateien mittlerer Größe (20–80 MB, entsprechend Episoden von 30–60 Minuten) bieten optimale Effizienz mit geringem relativem Verbindungs-Overhead.

---

*Siehe Kapitel 7 für die Konfiguration von NAS- und Netzwerkpfaden.*
