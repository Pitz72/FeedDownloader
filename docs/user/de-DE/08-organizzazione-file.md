# Kapitel 8: Dateiorganisation, Vorlagen und Metadaten

## 8.1 Das Problem nicht aussagekräftiger Namen

Wenn eine Audiodatei auf einem Podcast-Server veröffentlicht wird, ist ihr ursprünglicher Name oft schwer lesbar: `ep_2024_03_15_FINALE_v2_mixdown.mp3`, `podcast-episode-187-compressed.m4a` oder sogar einfach `abc123def456.mp3` sind gängige Beispiele. Diese Namen haben für die Systeme des Produzenten Sinn, machen ein Archiv aber schwer konsultierbar.

FeedDownloader Pro löst dieses Problem durch das **Umbenennungsvorlagen-System**: ein Mechanismus, der es ermöglicht, ein benutzerdefiniertes Namensformat für alle heruntergeladenen Dateien zu definieren, unter Verwendung von Informationen, die direkt aus dem RSS-Feed extrahiert werden.

---

## 8.2 Wie die Vorlage funktioniert

Eine Umbenennungsvorlage ist eine Textzeichenkette, die festen Text und **Token** enthalten kann — Variablen, die in einfache geschweifte Klammern (`{ }`) eingeschlossen sind. Nach Abschluss jedes Downloads ersetzt die Software jedes Token durch den entsprechenden Wert der Episode.

**Beispiel:**

Konfigurierte Vorlage: `{date} - {podcast} - {title}`

Ergebnis: `2024-03-15 - Der Podcast von Mario - Episode 187: Künstliche Intelligenz gut erklärt.mp3`

Die Dateiendung (`.mp3`, `.m4a` usw.) wird automatisch basierend auf dem Format der Originaldatei hinzugefügt: Sie ist nicht Teil der Vorlage.

---

## 8.3 Die verfügbaren Token

| Token | Beschreibung | Beispiel |
|-------|--------------|---------|
| `{title}` | Episodentitel aus dem RSS-Feed | `Episode 187: KI gut erklärt` |
| `{podcast}` | Name des Podcasts (Titel des RSS-Kanals) | `Der Podcast von Mario` |
| `{date}` | Veröffentlichungsdatum im Format `JJJJ-MM-TT` | `2024-03-15` |
| `{year}` | Veröffentlichungsjahr | `2024` |
| `{month}` | Veröffentlichungsmonat (2 Stellen) | `03` |
| `{day}` | Veröffentlichungstag (2 Stellen) | `15` |

*Hinweis:* Wird in der Vorlage ein Text in geschweifte Klammern eingeschlossen, der keinem der aufgeführten Token entspricht (z. B. `{episode}`), wird der Text im resultierenden Dateinamen unverändert belassen.

---

## 8.4 Empfohlene Vorlagen

**Standardvorlage:**
```
{title}
```
Die Standardvorlage verwendet nur den Episodentitel. Sie eignet sich für Kataloge mit beschreibenden Titeln.

**Für den allgemeinen Gebrauch (empfohlen):**
```
{date} - {title}
```
Ergebnis: `2024-03-15 - Episode 187: KI gut erklärt.mp3`

Dieses Format wird empfohlen, weil die alphabetische Sortierung der Dateien mit der chronologischen Sortierung übereinstimmt.

**Für Multi-Podcast-Archive (gemeinsamer Ordner):**
```
{podcast} - {date} - {title}
```
Ergebnis: `Der Podcast von Mario - 2024-03-15 - Episode 187.mp3`

Nützlich, wenn alle Podcasts im selben Zielordner gespeichert werden.

**Für die Organisation in Unterordner nach Jahr und Monat:**
```
{year}/{month}/{date} - {title}
```
Erstellt eine automatische Unterordnerstruktur (siehe Abschnitt 8.7).

---

## 8.5 Automatische Namensnormalisierung

Einige Zeichen sind in Dateinamen auf den wichtigsten Betriebssystemen nicht zulässig: `/`, `\`, `:`, `*`, `?`, `"`, `<`, `>`, `|` unter Windows.

FeedDownloader Pro wendet automatisch eine **Normalisierung** auf den aus der Vorlage resultierenden Namen an:

*   Nicht zulässige Zeichen werden durch einen Bindestrich (`-`) ersetzt oder entfernt.
*   Doppelte Leerzeichen werden auf ein einzelnes Leerzeichen reduziert.
*   Führende und abschließende Bindestriche oder Leerzeichen werden entfernt.
*   Der Name wird auf 240 Zeichen gekürzt, wenn er das Dateisystem-Limit überschreitet.

*Hinweis zu langen Titeln:* Einige Podcasts verwenden sehr beschreibende Titel (über 150 Zeichen). Die Verwendung des Tokens `{title}` in der Vorlage kann sehr lange Dateinamen erzeugen. In diesen Fällen kann die Kombination mit `{date}` als primäres chronologisches Element die Gesamtlänge des Namens begrenzen.

---

## 8.6 Die Vorlage konfigurieren

Die Umbenennungsvorlage wird unter **Einstellungen → Metadaten** konfiguriert.

Das Textfeld akzeptiert jede Kombination aus Text und Token. Unterhalb des Feldes ist eine Echtzeit-Vorschau verfügbar, die das Ergebnis der auf eine Beispielepisode angewandten Vorlage zeigt, damit das Format vor dem Speichern überprüft werden kann.

Die Standardvorlage ist `{title}`.

---

## 8.7 Organisation in Unterordner

In der Vorlage kann das Zeichen `/` verwendet werden, um eine automatische **Unterordnerstruktur** innerhalb des Zielordners zu erstellen.

**Beispiel — Organisation nach Jahr und Monat:**
```
{year}/{month}/{date} - {title}
```

Mit dem Zielordner `D:\Podcast-Archiv\Der Podcast von Mario\` ergibt sich:
```
D:\Podcast-Archiv\Der Podcast von Mario\
    ├── 2024\
    │   ├── 01\
    │   │   ├── 2024-01-08 - Erste Episode des Jahres.mp3
    │   │   └── 2024-01-22 - Zweite Episode.mp3
    │   └── 03\
    │       └── 2024-03-15 - Episode 187.mp3
    └── 2023\
        └── 12\
            └── 2023-12-20 - Letzte Episode 2023.mp3
```

Die Unterordner werden automatisch erstellt, wenn sie nicht vorhanden sind.

*Achtung:* Das Zeichen `\` (Backslash) wird als Pfadtrennzeichen in der Vorlage nicht unterstützt. Stets `/` (Schrägstrich) verwenden, den die Software für das jeweilige Betriebssystem korrekt übersetzt.

---

## 8.8 JSON-Sidecar-Dateien

In der Registerkarte **Einstellungen → Metadaten** ist der Schalter **„Sidecar-Datei .json"** verfügbar.

Wenn aktiviert, wird für jede heruntergeladene Audiodatei eine `.json`-Datei mit demselben Namen im selben Ordner erstellt. Die Datei enthält die Episodenmetadaten in strukturiertem Format:

```json
{
  "title": "Episode 187: KI gut erklärt",
  "podcast": "Der Podcast von Mario",
  "date": "2024-03-15",
  "sourceUrl": "https://media.beispiel.de/ep187.mp3"
}
```

**Anwendungsszenarien:**
*   Integration mit Automatisierungsskripten oder Systemen, die Metadaten direkt aus dem Dateisystem lesen, ohne die Datenbank abzufragen.
*   Aufbewahrung der Metadaten unabhängig von der Datenbank, nützlich bei Migration oder Wiederherstellung des Archivs.

Diese Option ist standardmäßig deaktiviert.

---

## 8.9 ID3-Tagging

In der Registerkarte **Einstellungen → Metadaten** ist der Schalter **„ID3-Tagging"** verfügbar.

Wenn aktiviert, schreibt die Software nach Abschluss jedes Downloads die Metadaten direkt in die `.mp3`-Datei, in die Standard-ID3-Tags:

*   **Titel:** Der Episodentitel
*   **Künstler:** Der Name des Podcasts
*   **Jahr:** Das Veröffentlichungsjahr
*   **Cover:** Das Podcast-Bild (sofern im RSS-Feed verfügbar)

ID3-Tags werden von den wichtigsten Audioplayern erkannt (Windows Media Player, VLC, iTunes, Foobar2000) und ermöglichen die Anzeige der Episodeninformationen unabhängig vom Dateinamen.

*Hinweis:* ID3-Tagging gilt ausschließlich für `.mp3`-Dateien. Dateien in anderen Formaten (`.m4a`, `.ogg`, `.opus`) werden nicht verändert, auch wenn diese Option aktiviert ist.

Diese Option ist standardmäßig deaktiviert.

---

*Siehe Kapitel 9 für die Integritätsprüfung und Archivverwaltung.*
