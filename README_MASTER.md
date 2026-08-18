# Runtime FeedDownloader Pro

Versione 1.5.0

## Cos'è

Uno strumento per archiviare podcast sul serio: scarica interi cataloghi da feed RSS e li conserva
in modo ordinato e verificabile. Non è un lettore, è un archiviatore. Sa cosa hai già preso, non
scarica due volte la stessa cosa, riprende i trasferimenti interrotti e registra l'impronta
crittografica di ogni file.

Il programma è gratuito e può essere ridistribuito liberamente.

## Cosa sa fare

### Feed

* **Libreria permanente.** I feed restano salvati tra le sessioni, con ricerca, ordinamento e barra
  laterale ridimensionabile.
* **Badge DA SCARICARE.** Per ogni feed, quanti episodi non sono ancora nel tuo archivio.
* **Rilevamento affidabile.** I nuovi episodi si riconoscono dai GUID, non dal conteggio: funziona
  anche con i podcast a finestra mobile che tolgono le puntate vecchie.
* **Feed paginati (RFC 5005).** Segue i collegamenti alle pagine successive e ricompone il catalogo,
  fino a venti pagine.
* **Sincronizza Tutti.** Aggiorna l'intera libreria in parallelo, con lo stato su ogni copertina.
* **Controllo automatico.** All'avvio, a intervalli regolari (6, 12 o 24 ore) e al ritorno della
  connessione. Se escono episodi nuovi arriva una notifica di sistema: cliccandola si apre il feed
  interessato.

### Download

* **Lotti.** Centinaia di episodi con un comando, coda gestita, da uno a cinque trasferimenti in
  parallelo.
* **Pausa e Riprendi.** Il singolo download o l'intera coda si sospendono senza perdere niente: il
  file parziale resta e la ripresa riparte dal punto raggiunto.
* **Riprova falliti.** A fine lotto, un comando rimette in coda tutti gli episodi andati storti.
* **Annulla singolo.** Si toglie un download dalla coda senza fermare gli altri.
* **Selezione multipla.** Ctrl+clic e Maiusc+clic per scegliere intervalli.
* **Limiti.** Velocità massima complessiva e dimensione massima per file, entrambe configurabili
  (0 = nessun limite).

### Interfaccia

* **Palette comandi (Ctrl+K).** Azioni, feed ed episodi del feed aperto, senza mouse.
* **Pannello di dettaglio.** Un clic sull'episodio apre metadati, dati d'archivio e note.
* **Vista Archivio.** Tutti gli episodi scaricati in un'unica tabella, con ricerca e ordinamento.
* **Esporta M3U.** Playlist locali per qualsiasi lettore.
* **Riduzione nell'area di notifica.** Chiudendo la finestra il lavoro continua in background.
* **Novità di questa versione.** Le note di rilascio si leggono dentro l'app, e compaiono da sé al
  primo avvio dopo un aggiornamento.

### Integrità

* **Database-first.** Il programma ricorda cosa ha scaricato anche se i file si spostano (SQLite).
* **Trasferimenti robusti.** Timeout di connessione a 30 secondi, sorveglianza degli stalli a 60,
  tre tentativi con attesa crescente, file `.part` che consentono la ripresa.
* **Impronta SHA-256** calcolata su ogni file e registrata, insieme a bitrate e frequenza di
  campionamento.
* **Controllo dell'archivio.** Verifica quali file mancano e ricalcola le impronte di quelli
  presenti, segnalando i file alterati.
* **Ripara archivio.** Ritrova per checksum i file rinominati a mano e li riaggancia all'archivio,
  senza riscaricare nulla.
* **Ripristino del database.** Se il database si danneggia, all'avvio il programma propone di
  recuperare feed, archivio e cronologia dal backup che ha messo da parte.
* **Rifiuto dei contenuti non audio.** Se il server manda una pagina web al posto del file, il
  download viene respinto invece di salvare spazzatura.

### Organizzazione

* **Estensione reale.** Salva `.m4a`, `.ogg`, `.opus`, `.flac` con la loro estensione, senza forzare
  `.mp3`.
* **Tag ID3 con copertina**, con priorità all'immagine dell'episodio quando il feed la dichiara.
* **Template dei nomi.** Token `{title}`, `{podcast}`, `{date}`, `{year}`, `{month}`, `{day}`.
* **File sidecar `.json`** accanto a ogni audio, se ti servono i metadati fuori dal database.
* **OPML e CSV.** Importi ed esporti la lista dei feed, esporti l'inventario completo dell'archivio.
* **Migrazione.** Sposta l'intera libreria su un altro disco aggiornando l'archivio.
* **NAS e SMB.** I percorsi di rete vengono verificati con un limite di otto secondi, senza mai
  bloccare l'interfaccia.

### Sistema

* **Aggiornamenti col consenso.** Il programma segnala la nuova versione ma non scarica niente da
  solo: prima **Scarica**, poi **Riavvia e Installa**. Nessuna installazione alla chiusura.
* **Difese sugli indirizzi.** Ogni URL passa da controlli anti-SSRF: solo HTTP e HTTPS, niente
  indirizzi interni o riservati, verifica dell'IP a ogni connessione e a ogni redirezione.
* **Nomi file sicuri.** Caratteri non ammessi rimossi e percorsi accorciati per non sbattere contro
  i limiti di Windows.
* **Liste virtualizzate.** Anche con migliaia di episodi la finestra resta scorrevole.
* **Manuale completo in PDF**, apribile dalla guida.

## Lingue

Interfaccia, notifiche e manuali sono disponibili in **italiano** e **inglese**.

## Per cominciare

1. **Analizza.** Incolla l'indirizzo RSS nella barra in alto e premi **Analizza**. Il feed entra
   nella libreria.
2. **Scegli la cartella.** Con l'icona cartella nella barra di comando, oppure da **Impostazioni →
   Download**. Il percorso resta visibile in fondo alla barra laterale.
3. **Scarica.** **Scarica Tutto** per l'intero catalogo (agisce sugli episodi visibili, quindi i
   filtri contano), oppure seleziona con Ctrl+clic e usa **Scarica Selezionati**.
4. **Sorveglia.** Il pannello download si apre da solo: coda, percentuali, velocità, e i comandi di
   pausa.
5. **Regola.** Ctrl+K per la palette, l'ingranaggio per download paralleli, limiti, template, OPML e
   statistiche.

## Requisiti

* **Windows** 10 o 11 a 64 bit, installer `.exe`
* **Linux** moderno (Ubuntu 22.04+, Debian 11+, Fedora 36+), `.AppImage` o `.deb`
* **macOS**: non supportato. Il codice si compila anche su Mac, ma non esistono pacchetti ufficiali
  e la compilazione è a carico di chi la esegue.
* Una connessione a Internet

## Dove si scarica

I pacchetti stanno su
[GitHub Releases](https://github.com/Ecosystem-Runtime/FeedDownloader-Releases/releases) e sono
prodotti automaticamente dalla pipeline di build.

**Avviso SmartScreen (Windows).** Al primo avvio Windows può mostrare «Windows ha protetto il PC»
perché il programma non ha una firma commerciale. Si prosegue con **Ulteriori informazioni** →
**Esegui comunque**.

*Costruito con Electron e React.*
