# Kapitel 10: Erweiterte Einstellungen

## 10.1 Übersicht des Einstellungsbereichs

Der Einstellungsbereich ist jederzeit über das Zahnrad-Symbol (⚙) in der oberen Ecke der Oberfläche erreichbar. Die Einstellungen sind in fünf thematische Registerkarten unterteilt: **Allgemein**, **Download**, **Metadaten**, **Archiv** und **Erweitert**. Alle Änderungen werden automatisch gespeichert: Eine Bestätigung über eine separate Schaltfläche ist nicht erforderlich.

---

## 10.2 Download

Dieser Abschnitt enthält die Hauptsteuerelemente der Download-Engine. Die internen technischen Parameter (Verbindungs-Timeout, Anzahl der Wiederholungsversuche, Stall Detection) sind in der Engine fest eingestellt und erfordern keine manuelle Konfiguration.

### Parallele Downloads

Die Anzahl der gleichzeitigen Downloads. Wählbar zwischen drei Presets: **1**, **3** und **5**. Richtlinien zur Auswahl des Werts siehe Kapitel 6.

**Standardwert:** 3

### Bandbreitenlimit

Ermöglicht die Begrenzung der von allen aktiven Downloads zusammen genutzten Bandbreite, um Interferenzen mit anderen Netzwerkaktivitäten zu vermeiden.

**Verfügbare Werte:** `0` = kein Limit (Standard); jeder positive Wert in KB/s. Beispiel: `500` begrenzt den Gesamtverbrauch auf etwa 4 Mbps.

---

## 10.3 Schlüsselwort-Filter

Der Textfilter ermöglicht es, **die Liste der angezeigten Episoden** anhand des im Titel enthaltenen Texts einzugrenzen. Er ist ein Werkzeug zur schnellen Konsultation und Auswahl, besonders nützlich bei großen Katalogen.

**So wird der Filter verwendet:**
Die Filterleiste befindet sich oben in der Episodenliste, unmittelbar unter den Batch-Steuerelementen. Durch Eingabe eines oder mehrerer Begriffe wird die Liste in Echtzeit aktualisiert und zeigt nur Episoden an, deren Titel **alle eingegebenen Begriffe** enthält (AND-Logik).

*   Um Episoden zu suchen, die das Wort „Interview" enthalten, `interview` eingeben.
*   Um Episoden zu suchen, die sowohl „Interview" als auch „2024" enthalten, `interview 2024` eingeben.
*   Der Filter unterscheidet nicht zwischen Groß- und Kleinschreibung: `Bonus` und `bonus` liefern dasselbe Ergebnis.

**Typische Anwendungsszenarien:**
*   In einem umfangreichen Katalog schnell die Episoden einer bestimmten Staffel finden.
*   Eine Teilmenge von Episoden zum Herunterladen auswählen, ohne die gesamte Liste durchscrollen zu müssen.
*   Prüfen, ob eine Episode mit einem bestimmten Titel bereits in der Datenbank vorhanden ist.

*Hinweis:* Der Filter wirkt auf die Anzeige der aktuellen Liste und verändert weder die Download-Warteschlange noch den Status der Episoden in der Datenbank. Um den Filter zu entfernen, die Textleiste leeren.

---

## 10.4 Allgemein

### Sprache

FeedDownloader Pro ist in 8 Sprachen verfügbar: Italiano, English, Deutsch, Español, Français, Português, Русский, 中文.

Der Sprachwechsel erfolgt sofort: Die Oberfläche wird aktualisiert, ohne dass ein Neustart der Software erforderlich ist. Die Anwendung verwendet ausschließlich das dunkle Thema „Obsidian Command": Ein helles Thema oder ein Dichteselektor für die Liste sind nicht verfügbar.

---

## 10.5 Sicherheit: Das Anti-SSRF-System mit 5 Ebenen

Dieser Abschnitt ist zu Informationszwecken dokumentiert: Das Sicherheitssystem arbeitet vollständig automatisch und erfordert keine Konfiguration durch den Benutzer.

**Was ist ein SSRF-Angriff?**
SSRF (Server-Side Request Forgery) ist eine Angriffsart, bei der eine bösartige URL statt auf eine öffentliche Ressource auf interne Netzwerkressourcen zeigt (z. B. das Router-Verwaltungsfenster, ein NAS oder einen lokalen Server). Im Kontext eines Downloaders könnte ein speziell erstellter RSS-Feed Audio-URLs enthalten, die auf diese internen Ressourcen zeigen.

**Die 5 Validierungsebenen:**

1.  **Protokollvalidierung:** Nur die Protokolle `http://` und `https://` werden akzeptiert. Protokolle wie `file://`, `ftp://`, `data:`, `javascript:` werden sofort abgelehnt.

2.  **Syntaktische URL-Validierung:** Die URL wird auf Konformität mit dem Standard RFC 3986 geprüft.

3.  **DNS-Auflösung mit IP-Inspektion:** Die Domain in der URL wird zu einer IP-Adresse aufgelöst. Schlägt die Auflösung fehl, wird die URL abgelehnt. Bei Erfolg wird die resultierende IP-Adresse auf der nächsten Ebene geprüft.

4.  **Blockierung privater und reservierter IP-Adressen:** Alle IP-Adressen, die zu privaten oder reservierten Bereichen gehören, werden blockiert, darunter:
    *   `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16` (private Netzwerke RFC 1918)
    *   `127.0.0.0/8` (Loopback)
    *   `169.254.0.0/16` (Link-Local)
    *   `::1/128` (IPv6-Loopback)
    *   `fc00::/7` (IPv6 Unique Local)
    *   Jede Adresse, die auf den lokalen Host zeigt.

5.  **Blockierung nicht standardmäßiger Ports:** Nur die Ports 80 und 443 werden akzeptiert. URLs mit nicht standardmäßigen Ports (z. B. `:8080`, `:3000`, `:22`) werden abgelehnt.

*Hinweis für Unternehmensumgebungen:* Enthält das Unternehmensnetzwerk interne Podcast-Server, die über private IP-Adressen erreichbar sind, blockiert das Anti-SSRF-System diese URLs. In diesem Fall den Support für eine benutzerdefinierte Konfiguration kontaktieren, die bestimmte IP-Adressbereiche in die interne Whitelist aufnimmt.

---

## 10.6 Erweitert

### Updates

FeedDownloader Pro enthält ein integriertes automatisches Update-System.

**Automatische Prüfung beim Start:** In der installierten Version (Paket) prüft die Software automatisch die Verfügbarkeit neuer Updates 3 Sekunden nach dem Start, indem sie das GitHub-Repository abfragt. Ist eine neue Version verfügbar, beginnt der Download im Hintergrund, ohne dass eine Aktion erforderlich ist.

**Manuelle Prüfung:** Die Schaltfläche **„Nach Updates suchen"** in der Registerkarte **Erweitert** erzwingt jederzeit eine sofortige Prüfung.

Ist eine neue Version verfügbar, lädt die Software diese im Hintergrund herunter und zeigt die Schaltfläche **„Installieren und neu starten"** an. Die Installation wird niemals automatisch gestartet: Die Entscheidung liegt stets beim Benutzer.

**Während des Prozesses angezeigte Status:**
*   **Wird überprüft…** — die Software fragt das GitHub-Repository ab.
*   **Aktuell** — die installierte Version ist die neueste.
*   **Neue Version verfügbar (vX.Y.Z)** — Download läuft im Hintergrund.
*   **Update bereit** — das Paket wurde heruntergeladen und ist zur Installation bereit.

### Datenbank zurücksetzen

Löscht die Datenbank vollständig und beginnt mit einem leeren Archiv. **Dieser Vorgang ist nicht rückgängig zu machen.** Die Software fordert vor dem Fortfahren eine doppelte explizite Bestätigung an. Die Audiodateien auf dem Datenträger werden nicht gelöscht: Ausschließlich der interne Speicher der Software wird zurückgesetzt (Download-Chronik, Metadaten, Statistiken).

*Wann es verwendet werden soll:* Ausschließlich wenn ein vollständig leeres Archiv neu gestartet werden soll, beispielsweise nach einer Migration auf ein neues System oder um die Daten eines Testzyklus zu entfernen.

---

*Siehe Kapitel 11 für die Lösung der häufigsten Probleme.*
