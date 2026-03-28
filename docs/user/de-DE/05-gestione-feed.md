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

---

## 5.4 Feed-Verlauf

FeedDownloader Pro führt einen **Verlauf der analysierten Feeds**. Jede im Suchfeld eingegebene URL wird zusammen mit dem Podcast-Namen und der Episodenanzahl gespeichert, um künftige Zugriffe zu vereinfachen.

**Auf den Verlauf zugreifen:**
Auf den Pfeil rechts neben dem URL-Feld klicken oder mit dem Tippen beginnen: Die Software schlägt automatisch Vorschläge basierend auf dem Verlauf vor.

**Den Verlauf verwalten:**
In den Einstellungen kann die vollständige Liste der Feeds im Verlauf angezeigt werden, einzelne Einträge können entfernt oder die gesamte Liste geleert werden.

*Hinweis zum Datenschutz:* Der Verlauf wird ausschließlich in der lokalen Datenbank `feeddownloader.db` gespeichert. Es werden keine Daten an externe Server übertragen.

---

## 5.5 Feeds aus OPML importieren

**OPML** (Outline Processor Markup Language) ist das Standardformat für den Export und Import von Podcast-Listen zwischen verschiedenen Anwendungen. Wenn eine Podcast-Bibliothek in einer App wie Pocket Casts, Overcast, AntennaPod oder einem anderen Client vorhanden ist, kann diese in OPML exportiert und direkt in FeedDownloader Pro importiert werden.

**So wird eine OPML-Datei importiert:**
1.  Zu **Einstellungen → Archiv** navigieren, Abschnitt „Daten und Portabilität".
2.  Die aus der Podcast-Anwendung exportierte `.opml`-Datei auswählen.
3.  FeedDownloader Pro analysiert die Datei und zeigt die Liste der erkannten Podcasts an, mit der Möglichkeit, die gewünschten auszuwählen.
4.  Die ausgewählten Feeds werden dem Verlauf hinzugefügt und optional automatisch der Reihe nach analysiert.

*Hinweis:* Einige Podcast-Anwendungen verwenden proprietäre Varianten des OPML-Formats. FeedDownloader Pro unterstützt die verbreitetsten Versionen. Wenn eine Datei nicht korrekt importiert wird, diese mit einem Texteditor öffnen und prüfen, ob `<outline type="rss" xmlUrl="...">` Tags für jeden Podcast vorhanden sind.

---

## 5.6 Die Bibliothek in OPML exportieren

Der Feed-Verlauf kann im OPML-Format exportiert werden, um:
*   Ein Backup der Podcast-Liste zu erstellen.
*   Die Liste mit anderen Benutzern oder einer anderen Software-Installation zu teilen.
*   Sie in einer Podcast-Anwendung zu importieren, um denselben Feeds zu folgen.

**So wird exportiert:**
1.  Zu **Einstellungen → Archiv** navigieren, Abschnitt „Daten und Portabilität".
2.  Einen Namen und einen Speicherort für die `.opml`-Datei wählen.
3.  Die erzeugte Datei ist mit jeder Anwendung kompatibel, die den OPML-Standard unterstützt.

---

## 5.7 Große Feeds

Einige historische Podcasts oder Archive von Rundfunkproduktionen können Feeds mit Tausenden von Episoden und erheblich großen RSS-Dateien aufweisen. In diesen Fällen:

*   **Die erste Analyse dauert länger:** Ein Feed mit 2.000 Episoden kann 15–30 Sekunden für Download und Parsing benötigen. Dieses Verhalten ist zu erwarten.
*   **Listenvirtualisierung:** Bei Tausenden von Einträgen lädt die Liste nur die auf dem Bildschirm sichtbaren Zeilen, um die Oberfläche reaktionsfähig zu halten.
*   **Schätzung des benötigten Speicherplatzes:** Bei 2.000 Episoden mit je ca. 50 MB beträgt das Gesamtvolumen etwa 100 GB. Die Software zeigt vor dem Start des Batches eine Schätzung der Gesamtgröße an. Vor dem Fortfahren sicherstellen, dass ausreichend Speicherplatz vorhanden ist.

---

## 5.8 Einschränkungen bei mehreren Feeds

FeedDownloader Pro analysiert einen Feed pro Mal. Es verfügt nicht über einen dauerhaften Feed-Manager mit automatischer Aktualisierung: Die Software ist für den Batch-Download optimiert, nicht für die kontinuierliche Überwachung mehrerer Feeds.

Für die Verwaltung mehrerer Feeds nacheinander ist die empfohlene Strategie:
1.  Die OPML-Funktion verwenden, um die Feed-Liste in einer zentralen Datei zu pflegen.
2.  Einen Podcast nach dem anderen analysieren und herunterladen und dabei systematisch vorgehen.
3.  Den Feed-Verlauf verwenden, um einen bereits analysierten Podcast schnell aufzurufen.

---

*Siehe Kapitel 6 für eine detaillierte Beschreibung der Download-Engine.*
