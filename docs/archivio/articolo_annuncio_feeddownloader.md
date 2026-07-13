# Runtime FeedDownloader Pro sta arrivando nell'Ecosystem — e ho aspettato questo momento più di quanto pensassi

*26 marzo 2026 · lettura ~5 minuti*

---

Ho scaricato podcast manualmente per anni. File per file, cartella per cartella, rinominando a mano, perdendo pezzi, ritrovandomi con `.mp3` che in realtà erano `.m4a` e player che non li riconoscevano. Non è un dramma, sia chiaro — ma è una di quelle scocciature digitali che si accettano perché *"tanto non esiste niente di meglio"*.

Poi ho smesso di accettarla.

**Runtime FeedDownloader Pro** nasce esattamente da quel punto di rottura. E tra pochissimo diventa ufficialmente il **secondo strumento a entrare nell'Ecosystem Runtime | Digital Core**.

---

## Prima, due parole sull'Ecosystem

*Ecosystem Runtime | Digital Core* non è una suite nel senso commerciale del termine. Non è un bundle di app messe insieme per sembrare più grandi. È una raccolta ragionata di strumenti costruiti con una filosofia precisa: **fare una cosa sola, farla bene, non scendere a compromessi sulla qualità**.

Ogni app che entra nell'Ecosystem viene da un problema reale, non da una feature list. Viene costruita con cura tecnica documentata, testata, revisionata — e solo quando è pronta, entra. Il primo strumento ha già aperto la strada. FeedDownloader Pro è il secondo ad arrivare, e devo dire che lo aspettavo con una certa impazienza.

---

## Il problema vero: i podcast spariscono

Forse non ci pensi spesso, ma il podcast che ascolti oggi potrebbe non esistere più tra due anni. Le piattaforme chiudono, i feed vengono rimossi, i CDN smettono di servire i vecchi file, i creatori cancellano tutto e spariscono. È già successo migliaia di volte.

> *L'audio è uno dei formati digitali più fragili che esistano. Non perché sia tecnicamente instabile — ma perché dipende da infrastrutture che qualcun altro controlla.*

FeedDownloader Pro parte da questa consapevolezza. Non è un player. Non è un aggregatore. È uno strumento di **archiviazione professionale**: prendi un feed RSS, lo analizzi, scarichi tutto — o quello che vuoi — e lo porti offline, al sicuro, organizzato, tuo.

Il target non è chi vuole ascoltare qualcosa in metropolitana. È l'archivista, il giornalista, l'editore, il ricercatore, l'appassionato con una biblioteca audio da proteggere.

---

## Quello che lo rende diverso, davvero

### Il database al posto del filesystem

La prima scelta tecnica che mi ha convinto è questa: il software traccia i download in un **database SQLite**, indipendentemente da dove si trovino i file su disco. Hai spostato l'archivio su un NAS? Il software lo sa ancora. Hai cancellato una cartella per sbaglio? Niente duplicati, niente confusione — la memoria è nel database, non nei file.

È una scelta piccola in apparenza. In pratica, quando gestisci migliaia di episodi su più volumi, cambia completamente il modo in cui lavori.

### Resilienza di rete senza compromessi

Scaricare centinaia di file audio vuol dire fare i conti con connessioni instabili, server lenti, stall silenziosi — quei momenti in cui il download è tecnicamente aperto ma i byte non arrivano più. FeedDownloader Pro gestisce tutto questo con un sistema a doppio timeout (30 secondi per la connessione, 60 per lo stall), **retry automatici con backoff esponenziale**, e file `.part` che vengono rinominati solo a download completato — così un'interruzione non lascia mai file corrotti sul disco.

Dalla versione 0.5.0 c'è anche la **verifica dell'integrità**: i byte scritti vengono confrontati con il `Content-Length` dichiarato dal server. Se non tornano, lo sai subito.

### Sicurezza: un livello che non ti aspetti in un'app desktop

Parliamo di una cosa che raramente vedi in software di questo tipo: **validazione anti-SSRF a 5 livelli** su ogni URL di feed RSS inserito. Protocolli pericolosi bloccati, indirizzi IP privati bloccati, indirizzi cloud metadata (tipo il classico `169.254.169.254` di AWS) bloccati. È la stessa attenzione alla sicurezza che ti aspetti da un servizio web professionale, applicata a un'app desktop.

Non è paranoïa. È rispetto per chi usa lo strumento.

### Il dettaglio che racconta tutto

Ogni downloader salva i file come `.mp3` per default, qualunque sia il formato reale. FeedDownloader Pro **rileva il formato vero** dal content-type della risposta HTTP: se il file è `.m4a`, `.ogg`, `.opus` o `.flac`, viene salvato con l'estensione corretta. Un dettaglio tecnico minuscolo che però dice moltissimo sul livello di attenzione con cui è costruito il software.

---

## Dov'è adesso

L'app è già funzionante, matura e usabile nella sua forma attuale. Ha alle spalle un percorso di sviluppo lungo e documentato — dall'architettura iniziale alla migrazione verso SQLite, dalla validazione anti-SSRF ai 189 test automatici, fino agli ultimi miglioramenti UX: **drag & drop** dell'URL RSS direttamente sull'input, scorciatoie da tastiera, **tray icon** per mandare l'app in background mentre lavora, verifica dell'integrità dei file scaricati, rilevamento degli episodi *"ghost"* — quei 404 silenziosi di file rimossi dal server ma ancora elencati nel feed.

L'interfaccia parla **8 lingue** — italiano, inglese, francese, tedesco, spagnolo, portoghese, russo, cinese — e gira nativamente su **Windows, macOS e Linux**, senza differenze di trattamento tra le piattaforme. È già, oggi, uno strumento completo per chi vuole archiviare podcast in modo serio.

---

## Dove sta andando

Non è un progetto che si accontenta di quello che è. La roadmap è già scritta, e parla di due fasi distinte.

Nel **medio termine**, l'obiettivo è trasformare FeedDownloader Pro in uno strumento di archiviazione bibliotecaria nel senso più pieno del termine. Questo significa **file sidecar `.json`** accanto ad ogni audio — con show notes, descrizione completa, metadati dell'episodio — e **tagging ID3 automatico** per iniettare titolo, artista e cover art direttamente nel file audio, leggendoli dal feed RSS. Significa **template di naming personalizzabili** (`[2026-01-15] - [Nome Podcast] - [Titolo].mp3`) per chi ha standard bibliotecari precisi, e **resume dei download HTTP 206** per riprendere i trasferimenti interrotti dal punto esatto di blocco senza sprecare banda. Arriverà anche un **health check dell'archivio** — una scansione che verifica che ogni file registrato nel database esista davvero su disco — e la possibilità di **limitare la velocità di trasferimento** per evitare di saturare la rete o fare scattare protezioni anti-bot sui CDN.

Nel **lungo termine**, il progetto guarda a scenari più ambiziosi: un **auto-sync schedulato** che scarica i nuovi episodi in autonomia senza che tu debba ricordarti di aprire l'app, il supporto ai **feed video**, un **player audio integrato** per ascoltare direttamente dall'archivio, la **sincronizzazione cloud** su S3, Google Drive o Dropbox, e una funzione di **migrazione guidata** per spostare l'intero archivio — file e database — su un nuovo drive o NAS mantenendo tutti i puntatori intatti.

È una visione di lungo respiro. Non tutto arriverà subito, e non è detto che tutto arrivi nell'ordine in cui è scritto. Ma la direzione è chiara, e ogni passo è pensato per costruire qualcosa che duri.

---

## Perché questo strumento merita l'Ecosystem

Non è una domanda retorica. Me la sono posta davvero.

La risposta è che FeedDownloader Pro è costruito *nel modo giusto*. Ha una ragione precisa di esistere. Ha una qualità tecnica documentata e verificabile — codice testato, architettura pensata, scelte motivate. Non insegue feature di tendenza, non si gonfia per sembrare più grande. Risolve un problema reale con professionalità genuina.

*È esattamente quello che voglio nell'Ecosystem.*

---

## Quando?

L'annuncio ufficiale con link al download è questione di giorni. Se vuoi essere tra i primi, resta nei paraggi.

**Il secondo tassello sta per andare al suo posto.**

---

*— Simone*

*`#EcosystemRuntime` `#DigitalCore` `#RuntimeFeedDownloaderPro` `#Podcasting` `#DataHoarding` `#Archivisti` `#Electron` `#SoftwareIndipendente`*
