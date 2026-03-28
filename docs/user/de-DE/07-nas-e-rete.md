# Kapitel 7: NAS, Netzlaufwerke und SMB-Pfade

## 7.1 Warum Netzlaufwerke einen spezifischen Ansatz erfordern

Die meisten Desktop-Download-Anwendungen verwalten lokale Pfade (`C:\`, `D:\`) korrekt und zeigen unvorhersehbares Verhalten, wenn das Ziel ein NAS, ein freigegebener Windows-Server oder ein SMB-Laufwerk ist. Der Grund ist technischer Natur: Netzlaufwerke sind von Natur aus weniger zuverlässig als lokale Datenträger. Das NAS kann ausgeschaltet sein, das lokale Netzwerk kann Latenzspitzen erleiden, SMB-Anmeldedaten können ablaufen. Jede Operation auf einem nicht reagierenden Netzwerkpfad kann den Haupt-Thread der Anwendung für Dutzende von Sekunden blockieren und die Oberfläche unresponsiv machen.

FeedDownloader Pro verwaltet diese Szenarien korrekt. Für Benutzer, die auf NAS archivieren, ist dieses Kapitel unerlässlich.

---

## 7.2 Wie die Netzwerkpfad-Validierung funktioniert

Jedes Mal, wenn ein Zielpfad eingestellt wird, der mit `\\` beginnt (UNC-Pfad, typisch für SMB) oder einem gemappten Netzlaufwerk entspricht (z. B. `Z:\`), aktiviert FeedDownloader Pro automatisch das **Netzwerkpfad-Validierungsmodul**.

Dieses Modul führt drei Operationen auf einem **separaten Thread** aus, ohne den Oberflächen-Thread jemals einzubeziehen:

1.  **Erreichbarkeitstest:** Versucht, auf das Stammverzeichnis des Netzwerkpfads zuzugreifen. Ist das NAS nicht eingeschaltet oder das Netzwerk nicht verfügbar, schlägt diese Operation fehl.
2.  **Lesezugriffstest:** Prüft, ob der Zielordner vorhanden und lesbar ist.
3.  **Schreibzugriffstest:** Erstellt und löscht dann eine temporäre Datei (`_fdp_write_test_[timestamp].tmp`) im Zielordner, um die Schreibberechtigungen zu prüfen.

Die gesamte Sequenz hat ein **Timeout von 8 Sekunden**. Wird innerhalb dieses Intervalls keine Antwort empfangen, betrachtet die Software den Pfad als nicht verfügbar und zeigt eine Warnung an, ohne die Oberfläche zu blockieren.

*Begründung des Timeouts:* Die meisten Consumer-NAS-Geräte (Synology, QNAP, WD MyCloud) benötigen 3–6 Sekunden, um den Ruhemodus zu verlassen. 8 Sekunden ist ein ausreichendes Intervall, um diese Wiederherstellung abzuwarten, während es kurz genug ist, um für den Benutzer keine spürbare Wartezeit darzustellen.

---

## 7.3 Einen NAS-Pfad konfigurieren

**Methode 1 — Direkter UNC-Pfad:**
Den Pfad im Format `\\Servername\Freigabename\Ordner` eingeben:

```
\\MYNAS\Podcast\Archiv
\\192.168.1.100\media\podcast
\\NAS-SYNOLOGY\video\audio_archive
```

Der Pfad kann direkt in das Zielpfad-Textfeld eingegeben oder über das Ordnerauswahl-Dialogfenster ausgewählt werden, das unter Windows die Navigation von Netzwerkpfaden unterstützt.

**Methode 2 — Gemapptes Netzlaufwerk:**
Ist das NAS bereits als Netzlaufwerk unter Windows gemappt (z. B. `Z:` → `\\MYNAS\Podcast`), kann `Z:\Archiv` als Zielordner ausgewählt werden. FeedDownloader Pro erkennt automatisch, dass es sich um einen Netzwerkpfad handelt, und aktiviert die Validierung.

**Methode 3 — macOS und Linux (Mount Point):**
Unter macOS und Linux werden SMB-Netzwerkpfade nach dem Einhängen als normale Ordner im Dateisystem präsentiert (z. B. `/Volumes/MYNAS/Podcast` unter macOS, `/mnt/nas/podcast` unter Linux). Diese Pfade können direkt als Zielordner verwendet werden.

---

## 7.4 SMB-Anmeldedaten und Authentifizierung

Die Zugangsdaten zum NAS müssen auf Betriebssystemebene konfiguriert werden, nicht innerhalb von FeedDownloader Pro.

**Unter Windows:**
1.  Den **Explorer** öffnen und zum NAS-Pfad navigieren (`\\MYNAS\`).
2.  Die Anmeldedaten eingeben und **„Anmeldedaten speichern"** aktivieren.
3.  Die Anmeldedaten werden im **Windows-Anmeldeinformations-Manager** gespeichert (`Systemsteuerung → Anmeldeinformationsverwaltung → Windows-Anmeldeinformationen`).
4.  FeedDownloader Pro greift wie jede andere Anwendung auf das NAS zu, ohne weitere Anmeldedaten anzufordern.

**Unter macOS:**
Die SMB-Anmeldedaten werden beim Einhängen der Freigabe angefordert (aus dem Finder: **Gehe zu → Mit Server verbinden** → `smb://192.168.1.100/Freigabename`). macOS speichert diese im Schlüsselbund.

**Unter Linux:**
Die Freigabe mit den Anmeldedaten in der `fstab`-Datei oder über ein grafisches Werkzeug wie GNOME Files einhängen. Alternativ `smbclient` oder `mount -t cifs` über das Terminal verwenden.

---

## 7.5 Diagnose von Problemen mit Netzwerkpfaden

Bei der Warnung „Netzwerkpfad nicht erreichbar" folgende Punkte in der angegebenen Reihenfolge prüfen.

**1. Ist das NAS eingeschaltet und gestartet?**
Die Statusanzeigen des Geräts prüfen. Viele Consumer-NAS-Geräte wechseln nach einer Inaktivitätsphase in den Ruhemodus. Vor dem Start des Downloads das NAS-Administrationsfenster im Browser öffnen, um die Verfügbarkeit zu prüfen.

**2. Ist das NAS über das Netzwerk erreichbar?**
Aus der Eingabeaufforderung (Windows) oder dem Terminal (macOS/Linux):
```
ping 192.168.1.100
```
Mit der IP-Adresse des NAS ersetzen. Erhält der Befehl eine Antwort, ist die grundlegende Netzwerkkonnektivität funktionsfähig.

**3. Ist die SMB-Freigabe zugänglich?**
Versuchen, den Pfad `\\192.168.1.100\Freigabename` direkt im Windows-Explorer zu öffnen. Schlägt dies fehl, liegt das Problem in der SMB-Konfiguration des NAS, nicht in FeedDownloader Pro.

**4. Sind die Schreibberechtigungen korrekt?**
Manuell eine Datei im Zielordner über den Dateimanager erstellen. Ist dies nicht möglich, verfügt der Benutzer, mit dem auf das NAS zugegriffen wird, nicht über Schreibberechtigungen für diese Freigabe. Die Berechtigungen über das NAS-Administrationsfenster konfigurieren.

**5. Blockiert die Firewall SMB-Verbindungen?**
Das SMB-Protokoll verwendet Port 445 (und in einigen Fällen Port 139). Prüfen, ob die System-Firewall oder eine Drittanbieter-Firewall diese Ports für Verbindungen im lokalen Netzwerk blockiert.

---

## 7.6 Optimale Leistung auf NAS

Downloads auf NAS weisen eine zusätzliche Komplexität gegenüber Downloads auf lokale Datenträger auf: Die Dateien werden über das Netzwerk geschrieben, und die Geschwindigkeit hängt sowohl von der LAN-Bandbreite als auch von der Schreibkapazität des NAS ab.

**Operative Hinweise:**

*   **Kabelgebundene Verbindung (Ethernet) verwenden:** Wi-Fi führt zu Latenz und Instabilität bei Netzwerk-Schreiboperationen. Für große Archive bietet eine kabelgebundene Gigabit-Ethernet-Verbindung deutlich bessere Leistung.
*   **Parallele Threads reduzieren:** Das gleichzeitige Schreiben vieler Dateien auf ein NAS kann dessen I/O sättigen. Mit 2–3 parallelen Threads werden oft bessere Ergebnisse erzielt als mit der maximalen verfügbaren Anzahl.
*   **Überschneidungen mit NAS-Backups vermeiden:** Führt das NAS automatische Backups durch, sollten keine Batch-Downloads in denselben Zeitfenstern gestartet werden, da der Wettbewerb um die Festplatten-I/O beide Operationen verlangsamt.
*   **Lokalen Cache verwenden:** Bei sehr großen Archiven kann zuerst auf ein schnelles lokales Laufwerk heruntergeladen und die Dateien nach Abschluss des Downloads auf das NAS verschoben werden.

---

*Siehe Kapitel 8 für die Konfiguration der Umbenennungsvorlage und der Metadatenfunktionen.*
