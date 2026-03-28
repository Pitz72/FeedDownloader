# Willkommen bei Runtime FeedDownloader Pro
**Der leistungsstärkste und widerstandsfähigste Weg, Ihre Podcasts zu archivieren.**

## Was ist das?
Runtime FeedDownloader Pro ist das professionelle Werkzeug des **Runtime Ecosystem | Digital Core**, entwickelt für Archivare, Verleger und Enthusiasten, die ganze Podcast-Kataloge für die Offline-Aufbewahrung herunterladen müssen.

Im Gegensatz zu herkömmlichen Playern ist diese Software für **Massen-Downloads (Batch)**, Netzwerk-Resilienz und strukturierte Dateiorganisation auf der Festplatte optimiert.

---

## Die Philosophie: "Database-First"
Das Herzstück von FeedDownloader Pro ist seine auf **SQLite** basierende Engine. Im Gegensatz zu anderer Software, die sich ausschließlich auf das Vorhandensein von Dateien auf der Festplatte verlässt, bietet unser System:
1.  **Speichert jeden Download:** Selbst wenn Sie Ihr Archiv auf ein NAS oder eine externe Festplatte verschieben, behält die Datenbank den Status Ihrer Sammlung bei.
2.  **Vermeidet Dubletten:** Keine Verwirrung mehr zwischen `.mp3`-, `.m4a`-Dateien oder mehrfachem Download derselben Episode.
3.  **Dokumentierte Integrität:** Jede heruntergeladene Datei wird über einen SHA-256-Hash überprüft, und Metadaten (Bitrate, Samplerate) werden automatisch extrahiert.

## Einzigartige Merkmale

### 1. Extreme Netzwerk-Resilienz
Das Herunterladen von Hunderten von Audiodateien erfordert eine tadellose Fehlerbehandlung. FeedDownloader Pro implementiert:
- **Automatische Wiederholungsversuche:** Mit exponentiellem Backoff, um Server nicht zu überlasten.
- **Stall Detection:** Wenn der Server 60 Sekunden lang keine Daten mehr sendet, wird der Download automatisch neu gestartet.
- **Anti-Korruptions-.part-Dateien:** Dateien werden erst nach vollständigem Download in ihre endgültige Erweiterung umbenannt.

### 2. Sicherheit und Validierung (SSRF)
Die Anwendung implementiert eine 5-stufige Anti-SSRF-Validierung für jede eingegebene URL. Wir blockieren gefährliche Protokolle und private IP-Adressen und gewährleisten so Ihre Sicherheit auch bei RSS-Feeds aus unbekannten Quellen.

### 3. Professionelle NAS/SMB-Unterstützung
Die für Archivare entwickelte Software validiert Netzwerkpfade mit einem Timeout von 8 Sekunden und verhindert so das Einfrieren der Benutzeroberfläche, das bei der Arbeit mit Netzlaufwerken oder NAS-Systemen, die nicht bereit sind, häufig vorkommt.

---

## Systemanforderungen
- **Windows**: 10/11 (64-Bit)
- **macOS**: 11.0 (Big Sur) oder höher
- **Linux**: Moderne Distributionen (Ubuntu, Debian, Fedora)
- Aktive Internetverbindung für die Feed-Analyse.

---
*Teil des Runtime Ecosystem | Digital Core — Werkzeuge, die für die Ewigkeit gebaut sind.*
