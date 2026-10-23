# Runtime FeedDownloader Pro

Versione 1.6.0

## Cos'è

Uno strumento per archiviare podcast sul serio: scarica interi cataloghi da feed RSS e li conserva
in modo ordinato e verificabile. Non è un lettore né un aggregatore, è un archiviatore. Sa cosa hai
già preso, non scarica due volte la stessa cosa, riprende i trasferimenti interrotti e registra
l'impronta crittografica di ogni file.

Il programma è software libero, rilasciato sotto **licenza MIT**: si può usare, studiare,
modificare e ridistribuire liberamente.

## Com'è fatta la finestra

È un'app da scrivania, pensata per una finestra orizzontale: i pannelli stanno **affiancati** e
ognuno scorre per conto suo.

* **In alto** la barra con lo stato della coda («3 in download», «Coda vuota»), **Controlla i
  feed**, la ricerca (Ctrl+K), la guida e le impostazioni.
* **A sinistra** la navigazione: **Libreria**, **Download**, **Archivio**, e sotto l'elenco dei
  feed con quanti episodi restano da scaricare e il segno «auto» per quelli con l'archivio
  automatico.
* **Al centro** la vista scelta:
  * **Libreria** — una tabella di tutti i feed: episodi, archiviati, da scaricare, spazio occupato,
    ultimo controllo. Un clic su una riga apre il feed. Nelle finestre larghe, a destra, la coda,
    l'archivio e le scorciatoie da tastiera.
  * **Feed** — intestazione con i comandi del feed, una fascia di filtri sempre visibile (ricerca,
    stato, **periodo**, durata, ordine) e l'elenco degli episodi; a destra il pannello con
    l'archivio automatico, il piano di download con la stima dello spazio e, quando scegli un
    episodio, il suo dettaglio.
  * **Download** — la coda a sinistra; a destra i download interrotti alla chiusura precedente, i
    non riusciti con il motivo e i completati della sessione.
  * **Archivio** — a sinistra ricerca, periodo di pubblicazione ed elenco dei podcast con il numero
    di episodi (un clic filtra); a destra la tabella di tutto ciò che è stato scaricato.

Sotto i 1280 pixel di larghezza (o con l'interfaccia molto ingrandita) i pannelli laterali lasciano
il posto a schede e le cifre si fanno più compatte, ma la disposizione resta orizzontale.

## Scaricare un periodo

Nella vista di un feed, la fascia dei filtri ha sempre il **Periodo**: scegli un intervallo pronto
(ultimi 30 o 90 giorni, ultimi 12 mesi, quest'anno, l'anno scorso) oppure le date **Dal** e **Al**.
Il pulsante principale dice esattamente che cosa farà — «Scarica i 23 filtrati» — e la conferma
riporta il periodo, la stima dello spazio, lo spazio libero e la cartella di destinazione. Il
pannello a destra aggiorna la stima mentre cambi i filtri. I filtri si combinano: un periodo con
lo stato «Da scaricare» e una durata minima, per esempio.

## Cosa sa fare

### Feed

* **Libreria permanente**, con ricerca e ordinamento alfabetico nella barra laterale.
* **Rilevamento affidabile.** I nuovi episodi si riconoscono dai GUID, non dal conteggio: funziona
  anche con i podcast a finestra mobile che tolgono le puntate vecchie.
* **Feed paginati (RFC 5005).** Segue i collegamenti alle pagine successive e ricompone il catalogo,
  fino a venti pagine.
* **Controlla i feed.** Aggiorna tutta la libreria su richiesta (Ctrl+S), con l'avanzamento e un
  riepilogo di quanto ha trovato.
* **Controllo automatico.** A intervalli regolari (6, 12 o 24 ore) anche con la finestra chiusa
  nell'area di notifica. Se escono episodi nuovi arriva una notifica di sistema: cliccandola si apre
  il feed interessato.
* **Archivio automatico per feed.** Con l'interruttore acceso, i nuovi episodi trovati dai controlli
  si scaricano senza chiedere. All'accensione l'app chiede se scaricare anche quelli che mancano.

### Download

* **In blocco.** Tutto il feed, un periodo, una selezione: centinaia di episodi con un comando, da
  uno a dieci trasferimenti in parallelo.
* **Selezione.** Una casella per episodio, Maiusc+casella per un intervallo, Ctrl+A per tutti gli
  episodi visibili.
* **Pausa e Riprendi.** Il singolo download o l'intera coda si sospendono senza perdere niente: il
  file parziale resta e la ripresa riparte dal punto raggiunto.
* **Pausa automatica senza rete.** Se la connessione cade la coda si ferma da sola e riparte al suo
  ritorno, invece di accumulare errori.
* **Coda che sopravvive alla chiusura.** Se l'app si chiude (o si blocca) con dei download in coda,
  al riavvio la vista Download propone di riprenderli.
* **Riprova.** I non riusciti restano elencati con il motivo; si riprovano uno a uno o tutti
  insieme.
* **Cinque tentativi** per ogni file sugli errori passeggeri, con attesa crescente.
* **Limiti.** Banda massima complessiva (condivisa da tutti i download) e dimensione massima per
  file, entrambe configurabili (0 = nessun limite).

### Archivio e integrità

* **Database-first.** Il programma ricorda cosa ha scaricato e **in quale cartella**: cambiare la
  cartella di download non rende «mancante» l'archivio già fatto.
* **Trasferimenti robusti.** Timeout di connessione a 30 secondi, sorveglianza degli stalli a 60,
  file `.part` che consentono la ripresa.
* **Impronta SHA-256** registrata per ogni file, insieme a dimensione, bitrate e frequenza di
  campionamento — calcolata **dopo** la scrittura dei tag, quindi coerente con il file su disco.
* **Verifica dell'archivio**, in due modi: **Rapida** (presenza e dimensione dei file) e
  **Completa** (ricalcolo delle impronte), con avanzamento e pulsante **Ferma la verifica**.
* **Cerca i file spostati.** Ritrova per impronta i file rinominati a mano e li riaggancia
  all'archivio, senza riscaricare nulla, in tutte le cartelle usate.
* **Accetta i file attuali come riferimento.** Per i file modificati di proposito (per esempio
  ritaggati), la Verifica può registrarne la nuova impronta.
* **Ripristino del database.** Se il database si danneggia, all'avvio il programma propone di
  recuperare feed, archivio e cronologia dal backup che ha messo da parte.
* **Rifiuto dei contenuti non audio.** Se il server manda una pagina web al posto del file, il
  download viene respinto invece di salvare spazzatura.

### Organizzazione dei file

* **Estensione reale.** Salva `.m4a`, `.ogg`, `.opus`, `.flac` con la loro estensione, anche
  quando l'indirizzo non la dice (si usa il tipo dichiarato dal feed).
* **Tag ID3** con titolo, podcast, anno e copertina. I tag dell'editore (capitoli, commenti) restano;
  la copertina si aggiunge solo se il file non ne ha già una.
* **Modello dei nomi.** Segnaposto `{title}`, `{podcast}`, `{date}`, `{year}`, `{month}`, `{day}`,
  `{season}`, `{episode}`.
* **Metadati accanto ai file.** Se attivo, per ogni episodio un `.json` con titolo, data, note,
  numerazione, indirizzi e impronta; per ogni podcast un `podcast.json` e la copertina. L'archivio
  resta leggibile anche quando il feed sparisce.
* **OPML e CSV.** Importi ed esporti la lista dei feed (l'importazione non modifica i feed già
  presenti); esporti l'inventario completo dell'archivio, con cartella e indirizzi.
* **Esporta M3U** per feed, in ordine di pubblicazione.
* **Sposta l'archivio** su un altro disco, oppure usa la nuova cartella **solo per i nuovi
  download** lasciando l'archivio dov'è.
* **NAS e SMB.** I percorsi di rete vengono verificati con un limite di otto secondi, senza mai
  bloccare l'interfaccia.

### Accessibilità

* Contrasti verificati WCAG 2.2 AA su ogni coppia di colori, testo mai sotto i 12 pixel, focus da
  tastiera sempre visibile, ogni comando raggiungibile da tastiera.
* **Dimensione dell'interfaccia** dall'80 al 180% (anche con Ctrl + e Ctrl −, Ctrl 0 per tornare al
  100%).
* **Riduci animazioni** nelle impostazioni, oltre alla preferenza del sistema operativo.
* Rispetta la modalità a contrasto elevato di Windows.

### Sistema

* **Aggiornamenti col consenso.** Il programma segnala la nuova versione ma non scarica niente da
  solo: prima **Scarica**, poi **Riavvia e installa**.
* **Nessuna richiesta a terzi all'avvio.** I caratteri dell'interfaccia sono inclusi nell'app.
* **Difese sugli indirizzi.** Ogni URL passa da controlli anti-SSRF: solo HTTP e HTTPS, niente
  indirizzi interni o riservati, verifica dell'IP a ogni connessione e a ogni redirezione.
* **Nomi file sicuri.** Caratteri non ammessi rimossi e percorsi accorciati per non sbattere contro
  i limiti di Windows.
* **Riduzione nell'area di notifica.** Chiudendo la finestra il lavoro continua in background.
* **Novità di questa versione** dentro l'app, mostrate da sé al primo avvio dopo un aggiornamento.

## Scorciatoie da tastiera

* **Ctrl K** — cerca azioni, feed ed episodi
* **Ctrl N** — aggiungi un feed
* **Ctrl S** — controlla tutti i feed
* **Ctrl F** — cerca nella vista aperta
* **Ctrl A** — seleziona tutti gli episodi visibili
* **Ctrl 1 · 2 · 3** — Libreria · Download · Archivio
* **Ctrl + / Ctrl − / Ctrl 0** — ingrandisci, riduci, dimensione normale
* **Ctrl ,** — impostazioni

## Lingue

Interfaccia, notifiche e manuali sono disponibili in **italiano** e **inglese**.

## Per cominciare

1. **Aggiungi un feed.** **Aggiungi feed** (Ctrl+N) in fondo alla barra laterale: incolla
   l'indirizzo RSS, premi **Analizza**, poi **Aggiungi alla libreria**. Si può anche trascinare un
   indirizzo dal browser sulla finestra, o importare un file OPML.
2. **Scegli la cartella.** **Impostazioni → Download → Cambia cartella**: un disco locale, esterno o
   una cartella di rete.
3. **Scegli che cosa scaricare.** Nel feed: tutto, un **periodo**, oppure una selezione con le
   caselle. Il pulsante principale dice quanti episodi prenderà; la conferma mostra lo spazio.
4. **Segui il lavoro.** La vista **Download** (Ctrl+2) mostra la coda con percentuali, velocità e
   comandi di pausa; la barra in alto dice sempre quanti download sono in corso.
5. **Tieni l'archivio aggiornato.** Accendi l'**archivio automatico** sui feed che vuoi seguire e
   scegli ogni quanto controllarli in **Impostazioni → Generale**.

## Requisiti

* **Windows** 10 o 11 a 64 bit, installer `.exe`
* **Linux** moderno (Ubuntu 22.04+, Debian 11+, Fedora 36+), `.AppImage` o `.deb`
* **macOS**: non supportato. Il codice si compila anche su Mac, ma non esistono pacchetti ufficiali
  e la compilazione è a carico di chi la esegue.
* Una connessione a Internet

## Dove si scarica

I pacchetti stanno su
[GitHub Releases](https://github.com/Pitz72/FeedDownloader/releases) e sono
prodotti dalla pipeline di build della repo pubblica del progetto.

**Avviso SmartScreen (Windows).** Al primo avvio Windows può mostrare «Windows ha protetto il PC»
perché il programma non ha una firma commerciale. Si prosegue con **Ulteriori informazioni** →
**Esegui comunque**.

*Costruito con Electron e React. Licenza MIT — © 2026 Simone Pizzi, Runtime Radio.*

*Il codice e questa documentazione sono stati scritti con un uso massiccio di modelli linguistici —
Google Gemini e Anthropic Claude — sotto la direzione progettuale di Simone Pizzi, che ha preso e
verificato ogni decisione.*
