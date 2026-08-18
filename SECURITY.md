# Politica di sicurezza

## Segnalare una vulnerabilità

**Non aprire una issue pubblica.** Scrivere a **info@runtimeradio.it** con oggetto
`[SECURITY] FeedDownloader Pro`, includendo:

- una descrizione del problema e del suo impatto;
- i passi per riprodurlo;
- la versione dell'applicazione e il sistema operativo.

Il progetto è mantenuto da una persona sola: aspettati una prima risposta entro pochi giorni, non
entro poche ore. Una volta confermata, la correzione viene pubblicata in una release e la
segnalazione accreditata nel changelog, salvo richiesta contraria.

## Versioni supportate

Riceve correzioni solo l'ultima versione pubblicata. L'applicazione controlla da sé la disponibilità
di aggiornamenti e chiede sempre conferma prima di scaricare e prima di installare.

## Modello di sicurezza

Cosa protegge l'applicazione e cosa no.

### Il problema principale: gli indirizzi dei feed

Il programma elabora URL che arrivano dall'esterno — i feed RSS e gli indirizzi degli allegati audio
che contengono. Un feed costruito ad arte può puntare a risorse della rete locale (il pannello del
router, un NAS, un servizio interno) e usare l'applicazione come tramite per raggiungerle: è la
famiglia di attacchi nota come **SSRF**, *server-side request forgery*.

La difesa sta in `electron/utils/validateUrl.ts` e `electron/utils/safeHttp.ts`, ed è a cinque
livelli:

1. **Sintassi** — l'indirizzo deve essere un URL valido.
2. **Protocollo** — solo `http:` e `https:`. `file:`, `ftp:`, `data:`, `javascript:` e simili sono
   respinti.
3. **Hostname interni** — `localhost` e i nomi di loopback sono bloccati.
4. **Intervalli privati e riservati** — RFC 1918 (`10/8`, `172.16/12`, `192.168/16`), loopback
   (`127/8`), link-local (`169.254/16`), e per IPv6 `::1` e `fc00::/7`.
5. **Verifica al momento della connessione** — l'indirizzo IP a cui il nome è stato risolto viene
   ricontrollato **a ogni connessione e a ogni redirezione**, non solo alla prima. È il livello che
   chiude le tecniche di elusione basate su DNS: un dominio pubblico che risolve verso un indirizzo
   privato, o una redirezione che a metà strada punta all'interno della rete.

Gli stessi controlli si applicano ai collegamenti di paginazione dei feed (RFC 5005), che sono
indirizzi presi da contenuto remoto esattamente come gli altri.

**Non è configurabile, ed è voluto.** Non esiste una lista di indirizzi consentiti da impostare: un
meccanismo del genere sarebbe la prima cosa che un feed ostile cercherebbe di sfruttare. La
conseguenza pratica è che un server di podcast interno, raggiungibile solo a un indirizzo privato,
non è utilizzabile con questo programma.

### I contenuti scaricati

- **Nessun file arriva con l'estensione buona finché non è completo.** Il trasferimento scrive su un
  file `.part` e il nome definitivo arriva solo a dimensione verificata.
- **Le risposte che non sono audio vengono respinte.** Se il server risponde con `text/html` o XML —
  tipicamente una pagina di errore o di consenso al posto del file — il download fallisce invece di
  salvare un file inservibile con estensione `.mp3`.
- **Esiste un tetto configurabile alla dimensione dei file**, per non farsi riempire il disco da un
  allegato anomalo.
- **Il parser XML è configurato senza risoluzione di entità esterne**, quindi un feed non può usare
  XXE per farsi leggere file locali.

### L'archivio

- Il database SQLite e i file audio **restano sulla macchina dell'utente**. Il programma non ha
  account, non ha telemetria e non manda niente a nessuno.
- Le uniche connessioni in uscita sono verso i server dei feed configurati, gli indirizzi degli
  allegati che quei feed dichiarano, e GitHub per il controllo degli aggiornamenti.
- Di ogni file scaricato viene registrata l'**impronta SHA-256**, ricalcolabile in qualsiasi momento
  dal controllo dell'archivio. Serve a dimostrare che un file non è cambiato dopo l'archiviazione;
  non è una firma, e non prova nulla su cosa il server abbia consegnato in origine.

### Le credenziali di rete

Il programma **non gestisce credenziali SMB**: per i percorsi su NAS si appoggia a quelle già
memorizzate dal sistema operativo. Non le legge, non le salva, non le trasmette.

Fa eccezione un caso, e va detto: i feed protetti da autenticazione HTTP Basic si configurano
scrivendo utente e password **dentro l'indirizzo** (`https://utente:password@host/feed.xml`). Quella
stringa finisce nel database in chiaro, come parte dell'URL del feed. È un limite noto della
soluzione più semplice possibile; se ti serve riservatezza su quelle credenziali, tienine conto.

### Il database danneggiato

Se all'avvio il database risulta illeggibile, il programma **non lo cancella**: lo mette da parte
rinominandolo `feeddownloader.sqlite.corrupt-<data>` e riparte con uno nuovo, offrendo poi di
recuperare quanto è ancora leggibile. Il backup non viene mai modificato.

## Cosa il programma non fa

- Non esegue codice proveniente dai feed.
- Non apre automaticamente i file scaricati.
- Non richiede privilegi di amministratore, né per installarsi né per funzionare.
- Non è firmato con un certificato commerciale: su Windows SmartScreen mostrerà un avviso al primo
  avvio. Chi vuole la certezza di cosa sta eseguendo può compilare dal sorgente.
