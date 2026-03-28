# Kapitel 1: Einführung und Philosophie

## 1.1 Was ist Runtime FeedDownloader Pro?

Um die Software zu beschreiben, empfiehlt es sich, beim Problem anzusetzen, das sie löst.

Täglich werden tausende Podcast-Episoden veröffentlicht, verteilt und angehört. Im Laufe der Zeit verschwindet jedoch ein beträchtlicher Teil dieser Inhalte: Der Moderator stellt die Zahlung für den Hosting-Dienst ein, die Verbreitungsplattform stellt den Betrieb ein, das CDN, das die Audiodateien hostet, wird abgeschaltet. Eine Episode, die vor drei Jahren angehört wurde, könnte heute unwiederbringlich unerreichbar sein — nicht weil sie absichtlich gelöscht wurde, sondern weil niemand eine Kopie aufbewahrt hat.

**Runtime FeedDownloader Pro** wurde entwickelt, um auf dieses Problem zu reagieren. Es ist kein einfaches Podcast-Download-Tool: Es ist eine professionelle Anwendung für die **systematische Konservierung und Archivierung** von Audioinhalten aus RSS-Feeds. Es wurde für Archivare, Verleger, Radiosender, Inhaltsproduzenten und Enthusiasten entwickelt, für die die Tondokumentation dieselbe konservatorische Sorgfalt erfordert wie andere Arten von Dokumenten.

---

## 1.2 Für wen ist die Software gedacht?

FeedDownloader Pro begegnet verschiedenen Anforderungen:

*   **Der Archivar:** Möchte den gesamten Katalog eines historischen Podcasts herunterladen, bevor er entfernt wird. Er benötigt ein System, das sich an bereits heruntergeladene Episoden erinnert, Duplikate vermeidet und die Integrität jeder Datei überprüft.

*   **Der Radioredakteur:** Verwaltet eine Inhaltsbibliothek auf einem gemeinsamen NAS. Er benötigt ein Tool, das auf Netzwerkpfaden ohne Blockierungen arbeitet, Dateien vorhersehbar organisiert und Berichte im CSV-Format für sein Team erstellt.

*   **Der Verleger:** Möchte eine lokale Kopie aller Podcasts seines Netzwerks pflegen, Metadaten für Content-Management-Systeme exportieren und den Archivstatus im Laufe der Zeit überwachen.

*   **Der Enthusiast:** Möchte seine Lieblingspodcasts auf der eigenen Festplatte speichern, übersichtlich organisiert, ohne von der Verfügbarkeit der Internetverbindung abhängig zu sein oder das Risiko einzugehen, beschädigte Dateien zu erhalten.

---

## 1.3 Die „Database-First"-Philosophie

Der grundlegende Unterschied zwischen FeedDownloader Pro und einem generischen Download-Tool liegt im Ansatz zur Datenverwaltung.

Die meisten Download-Tools funktionieren so: Sie analysieren die auf der Festplatte vorhandenen Dateien, vergleichen sie mit dem RSS-Feed und laden das Fehlende herunter. Dieser Ansatz hat eine kritische Schwäche: **Die Festplatte ist keine zuverlässige Quelle der Wahrheit**. Dateien können verschoben, umbenannt, beschädigt oder versehentlich gelöscht werden. Wenn der Podcast-Ordner von `C:\Podcast` nach `D:\Archiv` verschoben wird, verliert das Tool den Verweis auf bereits heruntergeladene Episoden und beginnt, den gesamten Katalog erneut herunterzuladen.

FeedDownloader Pro verfolgt einen anderen Ansatz. Im Mittelpunkt jeder Operation steht eine **SQLite-Datenbank**, die jede analysierte oder heruntergeladene Episode aufzeichnet: die ursprüngliche URL, den Dateipfad auf der Festplatte, das Download-Datum, den SHA-256-Hash des Inhalts und die Audiometadaten. Die Datenbank ist das persistente Gedächtnis der Software. Unabhängig vom physischen Speicherort der Dateien bewahrt die Datenbank den vollständigen Zustand des Archivs.

Diese Architektur hat direkte praktische Konsequenzen:

1.  **Keine Duplikate.** Auch wenn derselbe Feed mehrfach analysiert wird, erkennt das System die bereits in der Datenbank vorhandenen Episoden und fügt sie nicht erneut in die Warteschlange ein.
2.  **Resilienz gegenüber Verschiebungen.** Das Archiv kann auf eine neue Festplatte oder ein NAS verschoben werden: Der Verlauf bleibt in der Datenbank intakt.
3.  **Persistenter Zustand zwischen Sitzungen.** Wenn das Programm während eines Batch-Downloads von 300 Episoden geschlossen wird, ist die Warteschlange beim nächsten Öffnen in demselben Zustand verfügbar, in dem sie zurückgelassen wurde.
4.  **Vorgangsprotokoll.** Jede heruntergeladene Datei ist dokumentiert: Download-Datum, Quell-URL und Ergebnis der Integritätsprüfung.

---

## 1.4 Die drei Säulen der Software

Neben dem Database-First-Ansatz basiert FeedDownloader Pro auf drei technischen Prinzipien mit direkten Auswirkungen auf die Funktionalität.

### Netzwerk-Resilienz

Das sequenzielle Herunterladen hunderter Audiodateien über das Internet ist keine triviale Operation. Server können überlastet sein, Verbindungen können unterbrochen werden, Übertragungen können Dateien beschädigen. FeedDownloader Pro bewältigt diese Szenarien mit drei Mechanismen:

*   **Retry mit exponentiellem Backoff:** Wenn ein Download fehlschlägt, wiederholt die Software den Versuch nicht sofort. Stattdessen wartet sie ein wachsendes Intervall: 2 Sekunden, dann 4, dann 8, bis zum konfigurierten Maximum. Dieser Ansatz, der in verteilten Systemen üblich ist, erhöht die Erfolgswahrscheinlichkeit, ohne die Last auf dem Quellserver zu verschlimmern.
*   **Stall-Erkennung:** Ein blockierter Download ist problematischer als ein fehlgeschlagener. Wenn ein Server beginnt, Daten zu senden, und dann aufhört, ohne die Verbindung zu schließen, würde eine Software ohne diese Prüfung unbegrenzt warten. FeedDownloader Pro überwacht den Datenfluss in Echtzeit: Wenn 60 Sekunden lang keine neuen Bytes ankommen, wird der Download unterbrochen und automatisch wieder in die Warteschlange eingereiht.
*   **Anti-Korruptions-`.part`-Dateien:** Jede Datei wird mit der temporären Erweiterung `.part` heruntergeladen. Erst nach dem vollständigen und verifizierten Abschluss der Übertragung wird die Datei in die endgültige Erweiterung (`.mp3`, `.m4a` usw.) umbenannt. Im Falle einer plötzlichen Unterbrechung sind im Zielordner keine partiellen oder beschädigten Audiodateien vorhanden: nur verbleibende `.part`-Dateien, die die Software in der nächsten Sitzung löscht und erneut herunterlädt.

### Integrierte Sicherheit

FeedDownloader Pro verarbeitet URLs aus externen Quellen (RSS-Feeds). Eine bösartig konstruierte URL, die auf interne Netzwerkressourcen zeigt (einen Router, ein NAS, einen lokalen Server), könnte für den Zugriff auf vertrauliche Informationen verwendet werden — ein Angriff, der als **SSRF (Server-Side Request Forgery)** bekannt ist.

Um dieses Risiko zu verhindern, wird jede URL einer Validierung auf **5 Ebenen** unterzogen, bevor sie verarbeitet wird: Protokollverifizierung, DNS-Auflösung mit Überprüfung der resultierenden IP-Adresse, Blockierung privater Adressbereiche (RFC 1918), Blockierung von Nicht-HTTP/HTTPS-Protokollen und Pfadnormalisierung. Dieses Verfahren ist für den Benutzer vollständig automatisch und transparent.

### NAS- und Netzwerkpfad-Unterstützung

FeedDownloader Pro ist für den Betrieb mit Archiven auf Netzwerklaufwerken ausgelegt. Die Verwaltung von SMB-Pfaden — dem von NAS, Windows-Servern und Netzwerkfreigaben verwendeten Protokoll — ist in Desktop-Anwendungen eine häufige Fehlerquelle: Ein nicht erreichbares Netzwerklaufwerk kann die gesamte Benutzeroberfläche für eine beträchtliche Zeit blockieren. FeedDownloader Pro löst dieses Problem, indem die Netzwerkpfad-Validierung in einem separaten Thread mit einem Timeout von 8 Sekunden ausgeführt wird. Die Benutzeroberfläche bleibt stets reaktionsfähig, unabhängig vom Zustand des Netzwerkpfads.

---

## 1.5 Inhalt des Handbuchs

Dieses Handbuch behandelt die vollständige Verwendung von FeedDownloader Pro, von der Installation bis zu den erweiterten Funktionen. Es muss nicht der Reihe nach gelesen werden: Jedes Kapitel ist eigenständig und kann unabhängig nachgeschlagen werden.

Für einen ersten Einstieg in die Software empfiehlt es sich, **Kapitel 4 (Das erste Archiv)** zu befolgen, das einen vollständigen Workflow von der Feed-Analyse bis zum Download beschreibt. Wer die Software bereits kennt, kann über das Inhaltsverzeichnis direkt zum gewünschten Kapitel gelangen.

---

*Ecosystem Runtime | Digital Core — Werkzeuge, die dauern sollen.*
