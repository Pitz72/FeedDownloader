# Archiviazione locale e verificabile di podcast: progettazione e ingegneria di Runtime FeedDownloader Pro

**Autore:** Simone Pizzi (Runtime Radio)
**Nota:** sviluppato con assistenza LLM (Claude, Anthropic)
**Data:** agosto 2026
**Versione software di riferimento:** v1.5.0-dev

---

## 1. Abstract

I podcast sono distribuiti attraverso un'infrastruttura effimera: feed RSS a finestra mobile, CDN che cambiano indirizzo, piattaforme di hosting che chiudono. Un episodio non scaricato in tempo può diventare irrecuperabile. Questo articolo descrive la progettazione e l'ingegneria di **Runtime FeedDownloader Pro**, un'applicazione desktop (Electron, React, TypeScript, SQLite) per l'archiviazione locale, massiva e verificabile di podcast. Il contributo non sta in un singolo algoritmo, ma nella composizione sistematica di tecniche note — ripresa dei trasferimenti con validatori HTTP `If-Range`, checksum SHA-256 di filiera, chiavi composite per la deduplicazione, doppio livello di difesa anti-SSRF, recupero guidato di database corrotti — in un prodotto reale, sviluppato con un processo iterativo guidato da audit e protetto da una suite di circa 390 casi di test usata come cancello bloccante di rilascio. Ogni affermazione del testo è riconducibile a file e funzioni del codice sorgente, così da poter essere verificata.

## 2. Introduzione e motivazione

Il podcast è un mezzo nato aperto: un file audio raggiungibile via HTTP, descritto da un feed RSS. Questa apertura, però, non implica permanenza. Nella pratica si osservano almeno quattro modi in cui un episodio scompare:

1. **Feed a finestra mobile.** Molti editori espongono solo gli ultimi N episodi; ciò che esce dalla finestra non è più annunciato dal feed, anche quando il file resta temporaneamente online.
2. **Link rot.** Migrazioni di CDN e cambi di hosting invalidano gli URL degli allegati (*enclosure*); il feed continua a esistere ma punta a risorse morte.
3. **Chiusura delle piattaforme.** Quando un servizio di hosting cessa l'attività, interi cataloghi svaniscono simultaneamente.
4. **Ritiro editoriale.** Episodi rimossi per scelta o per obbligo legale.

Chi voglia conservare un archivio — un ascoltatore, una redazione radiofonica, un ricercatore — ha bisogno di una copia **locale**: sotto il proprio controllo fisico. Ma una copia locale ha valore solo se è anche **verificabile**: bisogna poter dimostrare, a distanza di anni, che il file su disco è integro, byte per byte, rispetto a quanto scaricato. E l'archiviazione massiva introduce problemi propri: reti instabili su file da centinaia di megabyte, feed con decine di migliaia di elementi, identificatori non univoci tra feed diversi, server mal configurati.

Runtime FeedDownloader Pro affronta questo insieme di problemi come prodotto desktop rivolto a utenti finali, non come script per specialisti. Le scelte descritte nel seguito derivano da tre vincoli progettuali:

* **nessuna perdita silenziosa** — ogni condizione anomala (troncamento, corruzione, collisione) deve produrre un errore esplicito o un ripristino, mai un file sbagliato archiviato come buono;
* **rete ostile per ipotesi** — timeout, stalli, redirect e contenuti inattesi sono il caso normale, non l'eccezione;
* **il contenuto remoto è input non fidato** — un feed può essere ostile tanto quanto malformato, e va trattato come vettore d'attacco (SSRF, XXE, injection).

Il resto dell'articolo segue l'architettura dall'alto verso il basso: struttura dei processi (§3), motore di download (§4), integrità dei dati (§5), robustezza concorrente (§6), sicurezza difensiva (§7), valutazione (§8), lavori correlati e limiti (§9).

## 3. Architettura del sistema

### 3.1 Due processi, un ponte stretto

L'applicazione è una classica applicazione Electron a due processi, con una separazione dei privilegi deliberatamente rigida (`electron/main.ts`, `docs/ARCHITECTURE.md`):

* il **processo principale** (Node.js) possiede in esclusiva la finestra, il database SQLite, tutto l'I/O di rete e di filesystem e l'aggiornamento automatico;
* il **renderer** (React 18) gira con `contextIsolation: true` e `nodeIntegration: false`: è pura vista più stato d'interfaccia, senza alcun accesso diretto a Node;
* il **preload** (`electron/preload.ts`) espone via `contextBridge` un unico oggetto `window.api`, i cui metodi sono involucri tipizzati di `ipcRenderer.invoke` (richiesta/risposta) o `ipcRenderer.on` (sottoscrizione).

I nomi dei canali IPC vivono in un solo punto — l'oggetto `IPC_CHANNELS` in `shared/types.ts` — importato da entrambi i lati. Insieme ai tipi condivisi (`Feed`, `DownloadRequest`, `ArchiveEntry`, …) questo elimina alla radice la deriva tra stringhe di canale e forme dei payload: il compilatore TypeScript verifica il contratto IPC in entrambi i processi (doppio *type-check*: `tsconfig.json` con librerie DOM per il renderer, `tsconfig.electron.json` senza DOM per il main, entrambi in modalità `strict`).

Oltre al modello richiesta/risposta, il main spinge eventi verso il renderer (`pushEvent()` in `electron/ipc.ts`): avanzamento dei download, aggiornamenti della coda, completamento dei batch, stato dell'aggiornamento automatico. Ogni sottoscrizione nel preload restituisce una funzione di annullamento, richiamata nella pulizia degli `useEffect` per evitare accumulo di listener.

### 3.2 Il livello dei servizi

La logica del main è scomposta in servizi con responsabilità nette (`electron/services/`):

* **DatabaseService** — persistenza SQLite via `better-sqlite3`: schema, migrazioni, indici, recupero da corruzione;
* **LibraryService** — API di persistenza di alto livello, import/export OPML;
* **FeedService** — scaricamento e interpretazione dei feed (paginazione RFC 5005, richieste condizionali `304`, deduplicazione dei GUID tra pagine);
* **DownloadService** — il motore di download puro (rete e disco), che non conosce né database né coda;
* **QueueService** — involucro di `p-queue` con concorrenza limitata e configurabile (1–10, valore sanificato in `DatabaseService.getConcurrency()`);
* **BatchTracker** — stato dei lotti di download, organizzato per generazioni (§6.3).

I servizi con dipendenza dal database sono costruiti pigramente in `initServices()`, non al caricamento del modulo: un fallimento di apertura del database diventa così una finestra di dialogo d'errore invece di un crash prima che esista una finestra.

### 3.3 SQLite in modalità WAL e chiavi composite

Lo schema (definito in `DatabaseService.init()`) è aperto in modalità WAL con `foreign_keys = ON`. Le tabelle principali sono `feeds`, `downloads`, `archive`, `settings` e `known_episodes` (la base di riferimento dei GUID per il rilevamento dei nuovi episodi).

Una lezione empirica del progetto riguarda l'identità degli episodi. Il GUID di RSS è unico **solo all'interno di un feed**: feed reali usano valori come `"1"`, `"2"` o l'URL di una pagina. Lo schema originale, con chiave sul solo `guid`, produceva falsi stati di «già scaricato» e righe d'archivio silenziosamente perse quando due feed collidevano. Le tabelle `downloads` e `archive` sono state ricostruite con chiave primaria composita `(guid, feedUrl)`; la migrazione (`migrateToCompositeKeys()`) è transazionale e le righe pregresse conservano `feedUrl = ''`, che funge da valore jolly: le ricerche interrogano `feedUrl IN (?, '')` così le librerie esistenti restano riconosciute senza alcun intervento dell'utente.

### 3.4 Parsing dei feed fuori dal thread principale

Un feed paginato può pesare fino a 15 MB per pagina per 20 pagine. Dalla v1.4.0 il fetch e il parsing XML girano in uno *utility process* dedicato (`electron/workers/feedWorker.ts`, coordinato da `FeedParserPool`), così il thread principale resta reattivo. La rete di sicurezza è esplicita: se il worker non parte, esce o va in timeout, il parsing ritorna in modo trasparente in-process — un difetto del worker non può rendere l'applicazione inutilizzabile.

## 4. Download resiliente

Il motore (`electron/services/DownloadService.ts`, ~360 righe) concentra la maggior parte dell'ingegneria di robustezza del progetto. Il percorso di un trasferimento è il seguente.

### 4.1 File temporanei e ripresa verificata

Ogni download scrive su `<destinazione>.part` e viene rinominato al percorso definitivo solo dopo il completamento e il controllo di dimensione: un file a metà non è mai visibile sotto il nome reale.

Alla ripresa, se esiste un `.part`, il motore invia `Range: bytes=<n>-`. Riprendere ciecamente, però, è pericoloso: se il file remoto è **cambiato** dall'ultimo tentativo, si cucirebbero byte nuovi su un prefisso obsoleto — corruzione audio silenziosa, il peggior esito possibile per un archivio. La difesa (denominata S1 negli audit interni) è il validatore HTTP: l'`ETag` o il `Last-Modified` della risposta che ha creato il `.part` viene persistito in un file affiancato `<destinazione>.part.meta` e rimandato come `If-Range`. Un file cambiato risponde allora `200` (corpo completo) invece di `206`, e il parziale obsoleto viene scartato e ricominciato. Se il validatore manca (server che non lo invia, `.part` di versioni vecchie), la ripresa non è verificabile e si riparte da zero: la correttezza prevale sulla banda. Un `416` (intervallo non soddisfacibile) azzera parimenti il parziale e riprova da capo.

### 4.2 Tentativi, backoff e `Retry-After`

`downloadFile()` esegue fino a 3 tentativi. La classificazione degli errori è esplicita:

* **verdetti permanenti**, che cortocircuitano senza ritentare: annullamento dell'utente, disco pieno (`ENOSPC`), permessi negati, `404` (`EPISODE_NOT_FOUND`), tipo di contenuto non valido, file oltre il limite configurato — ritentare non può cambiare l'esito;
* **errori transitori** (timeout, stalli, `5xx`, connessioni azzerate): passano dal ciclo di ritentativi con backoff esponenziale (1 s, 2 s, 4 s), conservando il `.part` così che il tentativo successivo **riprenda** invece di ricominciare;
* **`429`**: viene onorata l'intestazione `Retry-After` del server, con un tetto di 60 secondi — cortesia verso l'host senza bloccare la coda a tempo indefinito.

### 4.3 Cane da guardia contro gli stalli

Due timeout distinti governano il trasferimento: 30 s per la connessione iniziale e un **watchdog di stallo** a 60 s che si riarma a ogni blocco di dati sul flusso di rete grezzo. Una connessione che smette di produrre byte senza chiudersi — il modo di guasto tipico delle reti Wi-Fi e dei NAS — viene abortita come `DOWNLOAD_STALLED`, condizione transitoria e riprendibile. Il watchdog osserva il flusso di rete, non quello post-limitazione: un limitatore di banda lento non deve mai essere scambiato per uno stallo.

### 4.4 Limitazione di banda e progresso onesto

Quando l'utente imposta un limite di velocità, il flusso di rete attraversa un `Transform` (`electron/utils/throttleStream.ts`) che centellina l'uscita al ritmo configurato. Un dettaglio d'interfaccia con sostanza tecnica: il progresso conta i byte **in uscita dal limitatore** (cioè quelli che raggiungono il disco), non l'arrivo più veloce dalla rete — altrimenti la barra segnerebbe 100 % mentre il limitatore sta ancora svuotando il buffer.

### 4.5 Guardie sul contenuto

Due guardie proteggono dall'archiviare spazzatura:

* **Tipo di contenuto.** Un allegato che serve una pagina HTML (pagina d'errore, muro di consenso, link morto dietro CDN) non deve mai essere salvato come audio. Vengono rifiutati solo i tipi chiaramente testuali (`text/html`, `application/xhtml`, `text/xml`, `application/xml`): molti host serviscono legittimamente audio come `application/octet-stream` o senza tipo, e un filtro a lista bianca produrrebbe falsi negativi in massa.
* **Dimensione massima configurabile.** Se il server dichiara la dimensione, il file oltre soglia è rifiutato prima di scrivere un byte; senza dichiarazione, un contatore in streaming interrompe il trasferimento appena la soglia è superata.

Il controllo d'integrità al termine (`finish`) esige che i byte ricevuti coincidano con il totale atteso — dal `Content-Length`, o dal totale autorevole del `Content-Range` per le riprese `206` — entro una tolleranza **assoluta** di 64 byte. La versione precedente usava una tolleranza relativa dello 0,1 %: su un file da 100 MB lasciava passare ~100 KB mancanti, cioè secondi di audio. Un trasferimento corretto coincide al byte; la tolleranza assorbe solo bizzarrie di fine flusso. Correlata è la richiesta `Accept-Encoding: identity`: un server che comprimesse l'audio in transito renderebbe il conteggio decompresso incoerente col `Content-Length`, facendo fallire il controllo a ogni tentativo.

### 4.6 Pausa e ripresa

La v1.5.0-dev introduce pausa e ripresa, per singolo download e per l'intera coda, riusando l'infrastruttura di ripresa esistente. Il meccanismo distingue l'*intento* dentro lo stesso segnale di abort: le ragioni `PAUSE`/`PAUSE_QUEUE` (insieme `PAUSE_REASONS`) marcano un abort **non distruttivo**, che conserva la coppia `.part`/`.part.meta`; qualunque altra ragione è un annullamento vero, che pulisce i temporanei. Un task in pausa mantiene tutti i propri possessi (URL, percorso riservato, generazione di batch — §6): è lavoro sospeso, non concluso, e la ripresa lo riaccoda con un `AbortController` nuovo continuando via `Range` + `If-Range` dal punto esatto.

## 5. Integrità e provenienza dei dati

### 5.1 SHA-256 di filiera

Al termine di ogni download riuscito, il gestore in `ipc.ts` calcola un checksum **SHA-256 in streaming** del file su disco (`sha256File()`, memoria costante) insieme a dimensione, bitrate e frequenza di campionamento (via `music-metadata`). Questi valori sono scritti nella riga d'archivio. Il punto qualificante è transazionale (S7): il contrassegno «scaricato» e la riga d'archivio sono scritti in **un'unica transazione** (`DatabaseService.recordDownload()`) — un crash tra le due scritture non può lasciare un episodio segnato come scaricato ma invisibile all'archivio e alla verifica d'integrità.

### 5.2 Verifica di salute con ri-hash

Il controllo di salute (`RUN_HEALTH_CHECK` in `ipc.ts`) percorre l'intero archivio e classifica ogni voce: **presente**, **mancante** o **corrotta**. Per le voci con checksum registrato, il file su disco viene ri-sottoposto a hash e confrontato: emergono così il *bit-rot* silenzioso, i troncamenti da copia e le manomissioni — non solo l'assenza del file. Le voci pregresse senza checksum sono conteggiate ma non verificabili, e marcate come tali (l'esportazione CSV le etichetta `LEGACY`).

### 5.3 Riparazione guidata per checksum

Il checksum abilita anche la riparazione (`REPAIR_ARCHIVE`, v1.5.0-dev): per ogni voce il cui file risulta mancante, il sistema cerca **nella cartella del podcast** un file con lo stesso SHA-256 — il caso coperto è il file rinominato a mano o da un cambio del modello di denominazione — e ricollega la riga del database al nome trovato. Tre accorgimenti rendono l'operazione sicura ed efficiente: (a) i nomi già rivendicati da voci il cui file esiste non sono mai candidati, così una riparazione non «ruba» il file di un'altra voce; (b) la dimensione funge da pre-filtro economico — un hash uguale implica dimensione uguale, quindi si sottopone a hash solo ciò che ha la dimensione attesa; (c) cache per cartella e per file evitano di rileggere directory o ri-hashare candidati per voci multiple. Il disco è aperto in sola lettura: la riparazione tocca esclusivamente la riga del database.

### 5.4 Metadati che sopravvivono all'applicazione

Un archivio che dipende dal proprio software di gestione è fragile. Due meccanismi opzionali rendono i metadati leggibili da qualsiasi strumento futuro:

* il **sidecar JSON** accanto a ogni file audio, con titolo, podcast, GUID, data di pubblicazione, data di download e URL d'origine — la provenienza in forma testuale e autodescrittiva;
* i **tag ID3** scritti nel file stesso (`electron/utils/writeId3Tags.ts`), copertina dell'episodio inclusa.

Completa il quadro l'esportazione CSV dell'archivio, che riporta per ogni voce checksum e stato di validazione, con neutralizzazione dei prefissi di *formula injection* (§7.3).

## 6. Robustezza concorrente

Con 1–10 download paralleli su un unico processo, gli errori più subdoli non sono di rete: sono corse tra operazioni locali.

### 6.1 Deduplicazione senza finestra TOCTOU

Due invocazioni rapide dello stesso download (doppio clic, batch sovrapposti) devono produrne uno solo. Il controllo di duplicazione, però, se seguito da un `await` prima della registrazione, apre una classica finestra *time-of-check/time-of-use*: entrambe le chiamate superano il controllo e si registrano dopo, producendo un file `_2` duplicato e una seconda riga d'archivio. La soluzione (S3) è rivendicare l'URL **sincronamente, prima del primo `await`**: l'insieme `inFlightUrls` è aggiornato nello stesso giro dell'event loop del controllo, quindi la seconda chiamata trova l'URL già rivendicato e restituisce `duplicate`. Poiché il main di Electron è a thread singolo, la sincronicità è qui una garanzia di atomicità a costo zero.

### 6.2 Riserva dei percorsi di destinazione

Simmetricamente, due download concorrenti potrebbero risolvere lo **stesso percorso di destinazione** (titoli uguali da feed diversi, modelli di denominazione coincidenti) e scrivere lo stesso `.part` corrompendosi a vicenda. Il controllo anticollisione considera sia i file già su disco (`fs.existsSync`, deliberatamente sincrono per mantenere atomica la selezione) sia l'insieme `reservedTargets` dei percorsi rivendicati da download in corso; il percorso scelto viene riservato prima di accodare il task (M1). Un dettaglio di portabilità: su NTFS e APFS il confronto dei nomi è insensibile alle maiuscole, quindi la chiave di riserva è ripiegata in minuscolo su Windows e macOS — «Intro.mp3» e «INTRO.mp3» collidono davvero, e la riserva deve saperlo.

La proprietà delle rivendicazioni è tracciata per task (`taskTargets`): l'annullamento di un task in attesa rilascia subito URL e percorso (così un ri-download immediato non viene né deduplicato né suffissato `_2`), mentre il blocco `finally` del task libera solo ciò che ancora possiede — protetto da un confronto d'identità, per non liberare una rivendicazione che un ri-download successivo ha già preso in carico.

### 6.3 Batch a generazioni

Il renderer non invia alcun segnale di «inizio batch»: arriva solo una raffica di `START_DOWNLOAD`. `BatchTracker` (`electron/services/BatchTracker.ts`) inferisce i lotti con una **finestra di sigillo** di 200 ms: ogni `track()` riarma il timer, e il lotto si sigilla 200 ms dopo l'ultima registrazione. Il punto delicato, emerso da un difetto reale (B3), è che un `track()` arrivato mentre un lotto **già sigillato** sta ancora scolando non deve riaprirlo — fonderebbe due lotti logicamente distinti, con totali sbagliati e liste d'errore mescolate. Ogni raffica è quindi una **generazione** indipendente, con identificatore, contatori e lista dei falliti propri; ogni download cattura l'identificatore da `track()` e lo restituisce a `recordFailure()`/`complete()`, così lotti concorrenti non possono interferire. Un callback di completamento al sigillo copre il caso limite del lotto che finisce interamente dentro la finestra: senza, quel lotto non emetterebbe mai il proprio evento di completamento.

## 7. Sicurezza difensiva

Il modello di minaccia tratta ogni URL e ogni documento remoto come input ostile: un feed può essere confezionato per far compiere all'applicazione richieste verso la rete interna dell'utente, per esaurirne la memoria o per iniettare contenuti in strumenti a valle.

### 7.1 SSRF: due livelli, di cui uno autorevole

La difesa contro la *server-side request forgery* è deliberatamente doppia, e la documentazione interna insiste sul perché entrambi i livelli debbano restare.

Il primo livello (`electron/utils/validateUrl.ts`) è un pre-controllo **lessicale** e veloce sugli URL provenienti dal renderer: soli protocolli `http`/`https`, blocco degli IP privati o riservati in forma letterale, blocco dei nomi host interni noti (`localhost` e affini). È utile per fallire presto con errori chiari, ma è strutturalmente aggirabile in due modi: un redirect HTTP verso un host interno, e il *DNS rebinding* — un nome pubblico che risolve a un IP privato.

Il livello autorevole (`electron/utils/safeHttp.ts`) chiude entrambe le falle **allo strato socket**: una funzione di `lookup` personalizzata, installata sugli agent `http`/`https`, riconvalida l'IP **risolto** a ogni connessione e a ogni salto di redirect (massimo 5). La classificazione degli indirizzi privati copre IPv4 (RFC 1918, loopback, link-local, CGNAT, reti di benchmark, multicast), IPv6 (loopback, ULA `fc00::/7`, link-local) e — aggiunta della v1.4.2 — gli **schemi IPv6 che incapsulano IPv4**: mappato (`::ffff:a.b.c.d`), compatibile (`::a.b.c.d`), 6to4 (`2002::/16`) e NAT64 (`64:ff9b::/96`), ciascuno dei quali potrebbe altrimenti veicolare un indirizzo interno in forma tunnel. La stessa configurazione (`SAFE_AXIOS_CONFIG`) è applicata a ogni fetch di feed, a ogni collegamento di paginazione, agli URL importati da OPML e a ogni download.

### 7.2 XML ostile

I feed e i file OPML passano per `electron/utils/xmlSafety.ts`, che rifiuta i documenti il cui prologo dichiara un `DOCTYPE` con `<!ENTITY>` (attacchi XXE e *billion laughs*), in aggiunta a parser già configurati per non espandere entità esterne. La v1.4.2 ha chiuso un aggiramento del controllo tramite commenti o sezioni CDATA nel prologo e ha aggiunto una protezione contro le bombe di decompressione; ogni pagina di feed è comunque limitata a 15 MB.

### 7.3 Validazione dell'input dal renderer e igiene dell'output

Benché il renderer sia codice proprio, il main non si fida dei suoi payload — il confine IPC è trattato come superficie pubblica. Esempio concreto (M15): la lista di episodi da marcare «non scaricati» è validata elemento per elemento e le cancellazioni sono spezzate in blocchi da 500 segnaposto, sotto il limite di variabili di SQLite. In uscita, l'esportazione CSV neutralizza i prefissi eseguibili da Excel/Calc (`=`, `+`, `-`, `@`, tabulazione) nei titoli non fidati (M14), e l'esportazione M3U elimina i CRLF dai titoli per impedire l'iniezione di righe. Il processo finestra è indurito con CSP rigida nei build impacchettati, negazione di ogni nuova finestra, blocco della navigazione fuori dal documento dell'applicazione e blocco di seconda istanza (due processi sullo stesso file SQLite sono un rischio di corruzione, prima ancora che un fastidio).

### 7.4 Corruzione del database: recupero e salvataggio

Un file SQLite corrotto renderebbe l'applicazione permanentemente inavviabile. All'apertura, `DatabaseService` distingue con cura la **vera corruzione** (`SQLITE_CORRUPT`/`SQLITE_NOTADB`, messaggi «malformed»/«not a database») dai guasti transitori — disco pieno durante una `ALTER`, WAL bloccato da un antivirus, permessi momentaneamente negati. Solo la corruzione genuina attiva il recupero: i file danneggiati sono **spostati di lato** come `.corrupt-<timestamp>` (mai eliminati — i dati dell'utente non si cancellano) e si riparte con un database vuoto. Un errore transitorio, al contrario, si propaga intatto: rinominare un database sano avrebbe azzerato silenziosamente l'intera libreria alla prima riapertura.

Sul database vuoto interviene poi il **salvataggio guidato** (`salvageFromCorrupt()`, v1.5.0-dev): la corruzione di SQLite è tipicamente locale, quindi il file danneggiato viene aperto in sola lettura e ogni tabella letta indipendentemente; ogni riga recuperabile è reinserita con `INSERT OR IGNORE`, **fuori** da qualsiasi transazione complessiva — una riga avvelenata costa solo sé stessa, non l'intera tabella. Un tentativo di ripristino fallito non compromette mai l'avvio: l'applicazione prosegue sul database nuovo.

## 8. Valutazione

### 8.1 La suite di test come cancello bloccante

Il progetto è coperto da una suite Vitest di **circa 390 casi** distribuiti su una ventina di moduli (`tests/`), mirati sui componenti che questo articolo descrive: il motore di download (ripresa, validatori, classificazione degli errori, watchdog), il tracker a generazioni, le migrazioni di schema e le chiavi composite, le due difese SSRF (con casi espliciti per gli schemi IPv6 di incapsulamento), la sicurezza XML, il flusso di limitazione, i percorsi sicuri e la sanificazione dei nomi.

La suite non è decorativa: nel flusso di rilascio (`.github/workflows/build.yml`) un job `verify` bloccante esegue lint, il doppio type-check e l'intera suite **prima** che i job di build per Windows e Linux possano partire. Nessun binario viene prodotto da un albero che non passa i test. Un dettaglio operativo documentato: `better-sqlite3` è un modulo nativo, e l'ABI di Electron differisce da quella di Node — in locale gli script `pretest`/`predev` ricompilano automaticamente il modulo per l'ambiente giusto, mentre in CI `npm ci` produce il binario per l'ABI di Node usata da Vitest.

### 8.2 Un processo guidato dagli audit

La traiettoria del progetto è misurabile dai suoi cicli di audit interni, ciascuno con esiti classificati per gravità e chiusi in release dedicate:

* **audit del 29 maggio 2026** — criticità SSRF gravissime risolte in v1.3.1; gravi B1–B9 in v1.3.2–v1.3.6; medie M1–M7 in v1.3.7–v1.3.8; lievi in v1.3.9;
* **audit del 12 luglio 2026** — gravi in v1.3.13, medi e lievi in v1.3.14; la v1.4.0 (13 luglio, 312 test verdi) chiude la sezione funzionale (notifiche, parsing in worker, badge, redirect 301);
* **audit totale del 18 agosto 2026** — 4 gravi, ~20 medie e ~25 lievi, tutte risolte in v1.4.2 (367 test verdi, zero vulnerabilità nelle dipendenze di produzione).

Gli identificatori che punteggiano questo articolo (S1, S3, S6, S7, M1, M4, L7, L10, …) sono i codici reali di quei rilievi, ancora leggibili nei commenti del sorgente: il codice documenta non solo *cosa* fa, ma *quale difetto* ogni guardia ha chiuso.

### 8.3 Numeri del sistema

A titolo indicativo, per dare scala all'oggetto descritto: paginazione fino a 20 pagine da 15 MB per feed; librerie da migliaia di episodi con ricerche indicizzate; 3 tentativi per trasferimento con ripresa; concorrenza 1–10; finestra di sigillo dei batch di 200 ms; tolleranza d'integrità di 64 byte; limite di 2000 feed per import OPML; cache dei feed con TTL di 5 minuti e 200 voci. L'interfaccia virtualizza le liste (react-virtuoso) e le notifiche di sistema sono localizzate (italiano e inglese dalla v1.4.2).

## 9. Lavori correlati e limiti

### 9.1 Lavori correlati

Il problema dell'archiviazione di podcast è servito da una gamma di strumenti con compromessi diversi. I client storici come **gPodder** gestiscono sottoscrizioni e download ma nascono per l'ascolto, non per l'archiviazione verificabile: non offrono checksum di filiera né verifica d'integrità successiva. Gli strumenti a riga di comando come **podcast-archiver** o le pipeline artigianali su `wget`/`curl` coprono bene il download massivo ma lasciano a chi li usa la resilienza (ripresa verificata, classificazione degli errori) e l'integrità, e restano fuori portata per l'utente non tecnico. I sistemi di archiviazione web generalisti come **ArchiveBox** condividono la filosofia della copia locale verificabile, ma non trattano le specificità dei feed (paginazione RFC 5005, finestre mobili, identità per GUID, metadati audio). La posizione di FeedDownloader è la combinazione: rigore da strumento di archiviazione, confezione da applicazione desktop per utenti finali.

### 9.2 Limiti

Vanno dichiarati con la stessa franchezza:

* **Provenienza non crittograficamente firmata.** Il SHA-256 dimostra che il file non è cambiato *dopo* il download; non dimostra nulla sull'origine, né fornisce marca temporale opponibile. Una catena di firma o un ancoraggio esterno dei digest sono fuori dallo scopo attuale.
* **Fiducia nei validatori del server.** La ripresa verificata dipende dall'onestà di `ETag`/`Last-Modified`; un server che li gestisse in modo scorretto potrebbe in teoria far accettare una ripresa incoerente. Il controllo di dimensione e il checksum a valle mitigano, ma non eliminano, il caso.
* **Firma del codice assente.** I binari distribuiti non sono firmati (limite noto L6 dall'audit di maggio): un costo di distribuzione per un progetto indipendente, non una scelta tecnica.
* **macOS non distribuito.** La CI produce Windows e Linux; macOS è escluso dalla distribuzione ufficiale (resta possibile l'auto-compilazione).
* **Test end-to-end assenti.** La suite è unitaria e d'integrazione sui servizi; il collaudo dell'interfaccia completa resta manuale.
* **Archivio a macchina singola.** SQLite in WAL serve bene un archivio personale; la sincronizzazione multi-macchina o multi-utente è fuori dal progetto.

## 10. Conclusioni e lavori futuri

Runtime FeedDownloader Pro mostra che un'applicazione desktop per utenti finali può offrire garanzie da strumento di archiviazione professionale: trasferimenti che riprendono solo quando è dimostrabilmente sicuro farlo, un archivio i cui contenuti sono verificabili byte per byte a distanza di tempo, concorrenza senza corse su identità e percorsi, e una postura difensiva che tratta ogni contenuto remoto come ostile. Nessuna di queste tecniche è nuova in sé; il valore ingegneristico sta nella loro composizione coerente e nel processo — audit ricorrenti, rilievi tracciati nel codice, suite di test come cancello bloccante — che ne ha preservato la correttezza attraverso oltre trenta release.

Il lavoro in corso sulla linea v1.5.0 estende il sistema lungo le direttrici naturali di questo impianto: pausa e ripresa della coda (già presente in v1.5.0-dev, costruita sull'infrastruttura `If-Range` esistente), ritentativo mirato dei download falliti (il tracker conserva già la richiesta originale di ogni fallimento), riparazione guidata dell'archivio e salvataggio guidato del database (entrambi descritti sopra), e il limite configurabile di dimensione per file. Più avanti: firma del codice per la distribuzione, e una possibile esportazione dell'archivio in un formato di scambio documentato, perché un archivio degno di questo nome deve poter sopravvivere anche allo strumento che lo ha creato.

---

*Riferimenti al codice: i percorsi citati (`electron/services/DownloadService.ts`, `electron/services/DatabaseService.ts`, `electron/services/BatchTracker.ts`, `electron/ipc.ts`, `electron/utils/safeHttp.ts`, `electron/utils/validateUrl.ts`, `electron/utils/xmlSafety.ts`, `docs/ARCHITECTURE.md`) si intendono relativi alla radice del repository, allo stato v1.5.0-dev.*
