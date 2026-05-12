# Kapitel 5: Feed-Verwaltung

## 5.1 Was ist ein RSS-Feed

Ein RSS-Feed ist ein von einem Podcast veröffentlichtes XML-Dokument, das Anwendungen das automatische Lesen der Liste der verfügbaren Episoden ermöglicht. Wenn ein Herausgeber eine neue Episode veröffentlicht, aktualisiert er dieses Dokument durch Hinzufügen eines neuen Eintrags. Podcast-Anwendungen lesen diese Dokumente regelmäßig, um die neuesten Inhalte zu ermitteln.

Für FeedDownloader Pro ist der RSS-Feed die **primäre Datenquelle**: Er enthält die Episodenliste, die URLs der Audiodateien, die Metadaten (Titel, Datum, Dauer, Beschreibung, Cover) und allgemeine Informationen über den Podcast (Name, Autor, Kategorie).

Die Kenntnis der internen Struktur eines RSS-Feeds ist für die Nutzung der Software nicht erforderlich, erleichtert jedoch die Interpretation der in der Episodenliste angezeigten Daten und das Verständnis der Ursachen etwaiger fehlender oder unvollständiger Informationen.

---

## 5.2 Gültige und problematische Feeds

Nicht alle RSS-Feeds entsprechen demselben Konformitätsniveau gegenüber den Standards.

**Wohlgeformter Feed:** Folgt dem Standard RSS 2.0 oder Atom, enthält alle Pflichtfelder (Titel, Link, Veröffentlichungsdatum, Audio-URL mit MIME-Typ) und optional die iTunes/Podcast-Index-Tags für Dauer, Cover und Staffeln. FeedDownloader Pro liest diese Feeds problemlos.

**Teilweise unvollständiger Feed:** Einige optionale Felder fehlen (Dauer, Dateigröße, Episodencover). Die Software lädt die Audiodateien trotzdem herunter, aber einige Spalten der Liste bleiben leer.

**Feed mit nicht erreichbaren Audio-URLs:** Der Feed ist lesbar, aber die Audio-URLs verweisen auf nicht mehr existierende Ressourcen (Fehler 404). Diese Situation tritt häufig bei aufgegebenen oder auf andere Server migrierten Podcasts auf. FeedDownloader Pro meldet diese Episoden nach dem Download-Versuch mit dem Status **„Fehler"**.

**Durch Authentifizierung geschützte Feeds:** Einige private oder kostenpflichtige Podcasts erfordern HTTP-Basic-Anmeldedaten für den Zugriff auf den Feed. Die Software unterstützt diese Feeds: Die Anmeldedaten werden direkt in die URL im Format `https://benutzer:passwort@www.beispiel.de/feed.xml` aufgenommen.

---

## 5.3 Einen Feed analysieren: Details

Wenn auf **„Analysieren"** geklickt wird, führt FeedDownloader Pro folgende Vorgänge der Reihe nach aus:

1.  **URL-Validierung:** Prüft, ob die URL syntaktisch korrekt ist und die 5 Anti-SSRF-Kontrollen besteht (Details siehe Kapitel 10).
2.  **HTTP-Anfrage:** Kontaktiert den Feed-Server mit einem Standard-User-Agent. Das Timeout für diesen Vorgang beträgt 30 Sekunden.
3.  **XML-Parsing:** Liest und analysiert das RSS- oder Atom-Dokument. Die Software verarbeitet Feeds mit geringfügigen Abweichungen von den Standards (nicht deklariertes Encoding, fehlende Tags, unkonventionelle Namespaces).
4.  **Deduplizierung:** Für jede Episode im Feed wird die Datenbank abgefragt, um zu prüfen, ob die Episode bereits heruntergeladen wurde. Die Audio-URL wird als eindeutiger Identifikationsschlüssel verwendet.
5.  **Listenbefüllung:** Alle Episoden werden mit ihrem aktuellen Status angezeigt.
6.  **Hinzufügen zur Bibliothek:** Der Feed wird dauerhaft in die Seitenleiste eingefügt, falls er nicht bereits vorhanden ist. Bereits in der Bibliothek befindliche Feeds werden mit der aktuellen Episodenanzahl aktualisiert.

---

## 5.4 Die Feed-Bibliothek

FeedDownloader Pro führt eine **dauerhafte Feed-Bibliothek**. Jeder analysierte Feed wird in der Seitenleiste gespeichert und bleibt zwischen den Sitzungen verfügbar, ohne dass die URL bei jedem Start erneut eingegeben werden muss.

### Anzeige

Jeder Eintrag in der Bibliothek zeigt: das Podcast-Cover (Miniaturansicht), den Titel, das Datum der letzten Synchronisierung mit dem Server und ein numerisches Abzeichen, das anzeigt, wie viele Episoden seit dem letzten Download veröffentlicht wurden. Das Abzeichen verschwindet, sobald alle neuen Episoden heruntergeladen wurden.

Ein Klick auf einen Feed in der Seitenleiste aktualisiert die Episodenliste im Hauptbereich sofort.

### Einen Feed aus der Bibliothek entfernen

Zum Entfernen eines Feeds mit der Maus über den Eintrag in der Seitenleiste fahren: Auf der rechten Seite der Zeile erscheint die Papierkorb-Schaltfläche. Ein Klick darauf öffnet ein Bestätigungsdialog. Das Entfernen löscht den Feed aus der Bibliothek, **aber nicht die bereits heruntergeladenen Audiodateien** und auch nicht die zugehörigen Daten in der Datenbank; die Episoden bleiben in der Archivansicht sichtbar.

### Suche und Sortierung

*   **Feed-Suche:** Das Suchfeld oben in der Seitenleiste filtert die Feeds in Echtzeit nach Namen. Nützlich bei großen Bibliotheken.
*   **A–Z-Sortierung:** Die Sortierschaltfläche ordnet die Feeds alphabetisch nach Titel. Erneutes Klicken stellt die ursprüngliche Reihenfolge wieder her.

*Hinweis zum Datenschutz:* Die Feed-Bibliothek wird ausschließlich in der lokalen Datenbank gespeichert. Es werden keine Daten an externe Server übertragen.

---

## 5.5 Feeds aus OPML importieren

**OPML** (Outline Processor Markup Language) ist das Standardformat für den Export und Import von Podcast-Listen zwischen verschiedenen Anwendungen. Wenn eine Podcast-Bibliothek in einer App wie Pocket Casts, Overcast, AntennaPod oder einem anderen Client vorhanden ist, kann diese in OPML exportiert und direkt in FeedDownloader Pro importiert werden.

**So wird eine OPML-Datei importiert:**

1.  Zu **Einstellungen → Archiv** navigieren, Abschnitt „Daten und Portabilität".
2.  Auf **Feeds importieren (OPML)** klicken und die aus der Podcast-Anwendung exportierte `.opml`-Datei auswählen.
3.  FeedDownloader Pro analysiert die Datei und fügt die erkannten Feeds zur Bibliothek hinzu.

*Hinweis:* Einige Podcast-Anwendungen verwenden proprietäre Varianten des OPML-Formats. FeedDownloader Pro unterstützt die verbreitetsten Versionen. Wenn eine Datei nicht korrekt importiert wird, diese mit einem Texteditor öffnen und prüfen, ob `<outline type="rss" xmlUrl="...">` Tags für jeden Podcast vorhanden sind.

---

## 5.6 Die Bibliothek in OPML exportieren

Die Feed-Bibliothek kann im OPML-Format exportiert werden, um:

*   Ein Backup der Podcast-Liste zu erstellen.
*   Die Liste mit anderen Benutzern oder einer anderen Software-Installation zu teilen.
*   Sie in einer Podcast-Anwendung zu importieren, um denselben Feeds zu folgen.

**So wird exportiert:**

1.  Zu **Einstellungen → Archiv** navigieren, Abschnitt „Daten und Portabilität".
2.  Auf **Feeds exportieren (OPML)** klicken und einen Namen und Speicherort für die Datei wählen.
3.  Die erzeugte Datei ist mit jeder Anwendung kompatibel, die den OPML-Standard unterstützt.

---

## 5.7 Große Feeds

Einige historische Podcasts oder Archive von Rundfunkproduktionen können Feeds mit Tausenden von Episoden und erheblich großen RSS-Dateien aufweisen. In diesen Fällen:

*   **Die erste Analyse dauert länger:** Ein Feed mit 2.000 Episoden kann 15–30 Sekunden für Download und Parsing benötigen. Dieses Verhalten ist zu erwarten.
*   **Listenvirtualisierung:** Bei Tausenden von Einträgen lädt die Liste nur die auf dem Bildschirm sichtbaren Zeilen, um die Oberfläche reaktionsfähig zu halten.
*   **Schätzung des benötigten Speicherplatzes:** Bei 2.000 Episoden mit je ca. 50 MB beträgt das Gesamtvolumen etwa 100 GB. Vor dem Fortfahren sicherstellen, dass ausreichend Speicherplatz vorhanden ist.

---

## 5.8 Verwaltung mehrerer Feeds

FeedDownloader Pro verwaltet nativ eine Bibliothek mit mehreren Feeds. Es gibt keine Begrenzung für die Anzahl der Podcasts, die hinzugefügt werden können: Alle werden in der Seitenleiste aufbewahrt und bleiben zwischen den Sitzungen zugänglich.

### Zwischen Feeds navigieren

Ein Klick auf einen Feed in der Seitenleiste aktualisiert die Episodenliste im Hauptbereich sofort. Die Software merkt sich, welcher Feed beim letzten Schließen ausgewählt war.

### Feeds synchronisieren

*   **Einzelne Synchronisierung:** Mit der Maus über einen Feed-Eintrag in der Seitenleiste fahren, um das Synchronisierungssymbol anzuzeigen. Ein Klick darauf bewirkt, dass die Software diesen Feed erneut vom Server liest und die Liste mit eventuellen neuen Episoden aktualisiert.
*   **Alle synchronisieren:** Die Schaltfläche „Alle synchronisieren" aktualisiert alle Feeds parallel in einem einzigen Vorgang. Während des Vorgangs zeigt jede Miniaturansicht in der Seitenleiste ihren eigenen Status in Echtzeit. Am Ende werden eventuelle neue Episoden mit dem Abzeichen für neue Episoden hervorgehoben.

Für die geplante automatische Aktualisierung ohne manuellen Eingriff siehe Abschnitt 5.9.

---

## 5.9 Automatische Feed-Aktualisierung

FeedDownloader Pro kann alle Feeds in regelmäßigen Abständen automatisch im Hintergrund synchronisieren, ohne dass eine Aktion des Benutzers erforderlich ist.

### Konfiguration

Die Einstellung befindet sich in **Einstellungen → Allgemein → Automatische Feed-Aktualisierung**. Es stehen vier Optionen zur Verfügung:

| Option | Verhalten |
|--------|-----------|
| **Deaktiviert** (Standard) | Keine automatische Synchronisierung. |
| **Alle 6 Stunden** | Die Software synchronisiert alle Feeds alle 6 Stunden ab dem Start. |
| **Alle 12 Stunden** | Die Software synchronisiert alle Feeds alle 12 Stunden ab dem Start. |
| **Alle 24 Stunden** | Die Software synchronisiert alle Feeds einmal alle 24 Stunden ab dem Start. |

Die Änderung der Einstellung erfolgt sofort und erfordert keinen Neustart der Software. Der Timer beginnt mit dem Start der Anwendung.

### Verhalten

Die automatische Aktualisierung **startet keine Downloads**: Sie prüft lediglich, ob neue Episoden veröffentlicht wurden. Wenn während der automatischen Synchronisierung neue Episoden auf einem oder mehreren Feeds gefunden werden, sendet das System eine **Betriebssystem-Benachrichtigung** mit einer Zusammenfassung der gefundenen Inhalte (verfügbar in allen 8 unterstützten Sprachen).

Um die gemeldeten neuen Episoden herunterzuladen, die Software öffnen und die normalen Batch-Steuerelemente verwenden.

---

*Siehe Kapitel 6 für eine detaillierte Beschreibung der Download-Engine.*
