# Piano di apertura del sorgente — checklist operativa

**Aperto:** 18 agosto 2026
**Obiettivo:** ritirare FeedDownloader Pro dal mercato, spostarlo su `Pitz72` come repository pubblico
sotto licenza MIT, con build automatiche per Windows e Linux.
**Stato:** **FASI 1, 2, 3, 4 e 5 CHIUSE** (18/08), **nessuna coda aperta**. Il sito è in
produzione, screenshot compresi, e ogni voce è stata verificata sulla pagina live. **Gumroad chiuso** dall'utente il 18/08 (verificato:
HTTP 404). **`Pitz72/FeedDownloader` è pubblico dal 18/08**, licenza MIT riconosciuta da GitHub, e
la **release `v1.5.0` è pubblicata lì**, la prima da progetto aperto.
Il sito è passato da «acquista» a «scarica» (rilascio v0.6.8) e **entrambe le repo ponte sono
state cancellate**: nessuna installazione di terzi ne dipendeva, perché il programma non è mai
stato acquistato da nessuno. Il ritiro dal commercio è completo.

> **Eccezione alla regola «una fase per sessione»:** la Fase 4 è stata eseguita nella stessa
> sessione della Fase 2, su decisione dell'utente.

> **Il modello è Titan.** Questa procedura ricalca `docs/PIANO-APERTURA.md` di *Runtime TelegramBot
> Desktop Titan Edition*, che ha fatto la stessa transizione il 12–13 agosto 2026. Dove il contesto
> differisce è annotato.

> **Una fase per sessione.** Regola dell'utente: ogni fase si esegue in una sola sessione, e se ne
> serve più d'una va bene. Due fasi nella stessa sessione, no.

> **Come si legge.** Le fasi sono in ordine di dipendenza, non di importanza. Le voci marcate ⛔ sono
> blocchi veri: se le salti, qualcuno se ne accorge.

---

## Decisioni già prese

| Decisione | Esito | Quando |
| :--- | :--- | :--- |
| Licenza | **MIT** | 18/08 |
| Destinazione del repository | **`Pitz72/FeedDownloader`**, pubblico | 18/08 |
| Metodo di trasferimento | **Repo nuova con push della storia** (come Titan) | 18/08 |
| Repository ponte `FeedDownloader-Releases` | **Le release passano sulla repo pubblica, la ponte si cancella** | 18/08 |
| Riscrittura della storia git | **Non serve** — vedi audit qui sotto | 18/08 |
| Credito LLM + paternità | **Sì**, in applicazione e documentazione | 18/08 |
| macOS | **Fuori.** Nessun installer ufficiale; chi vuole compila dal sorgente | 18/08 |
| Documentazione utente | Già revisionata integralmente contro il codice il 18/08 (commit `7481280`) | 18/08 |

## L'audit che ha sciolto la decisione sulla storia

Prima di qualsiasi mossa è stata analizzata **l'intera storia**: 162 commit su tutti i ref, 1.971 blob
unici, con estrazione del contenuto integrale dei 1.872 blob testuali (22,5 MB) e scansione completa,
non campionaria.

**Verdetto: pubblicabile senza riscrivere niente.**

- **Zero segreti.** Nessun `ghp_`/`github_pat_`, nessuna chiave privata, nessun JWT, nessun token di
  terze parti. `.secrets/RELEASE_TOKEN.txt` esiste sul disco ma **non è mai stato committato**: la
  regola `.gitignore` ha retto fin dall'inizio. Il token non va ruotato, perché non è mai uscito.
- **Zero credenziali reali.** Le occorrenze di password e indirizzi privati sono tutte segnaposto di
  manuale (`\\MYNAS\NomeCondivisione`, `https://utente:password@www.esempio.it`) o fixture dei test
  anti-SSRF.
- **Un solo autore**, `pizzisimone1972@gmail.com`, e un solo nome utente nei percorsi (`Utente`).
- **Nessun binario nella storia**: `.gitignore` ha tenuto fuori installer, database e archivi.
- **Peso accettabile**: `.git` sta a 45 MB, un clone pubblico ne scarica una trentina. I ~78 MB di
  blob delle sei lingue rimosse in v1.4.2 restano nella storia, ma comprimono bene. Riscrivere
  costerebbe più di quanto valga, e spezzerebbe gli SHA dei tag già pubblicati.

---

## FASE 1 — Aprire formalmente il progetto ✅ CHIUSA (18/08)

- [x] **`LICENSE`** — MIT, intestata a Simone Pizzi (Runtime Radio). Era il vero blocco: senza, un
      repository pubblico resta legalmente «tutti i diritti riservati».
- [x] **`SECURITY.md`** — come si segnala una vulnerabilità e, soprattutto, **il modello di
      sicurezza**: i cinque livelli anti-SSRF, le difese sui contenuti scaricati, cosa resta locale,
      e i due limiti dichiarati apertamente (le credenziali HTTP Basic finiscono in chiaro nell'URL
      del feed; i binari non sono firmati).
- [x] **Template issue** — `bug_report.yml` e `feature_request.yml`, in italiano e inglese, con
      l'avvertenza di non aprire issue pubbliche per le vulnerabilità.
- [x] **CI: `verify` su pull request** — il workflow accetta ora `pull_request` verso `master` e su
      quel trigger gira **solo** il job `verify` (lint, tipi, test). Build e release restano legate al
      `workflow_dispatch` manuale: nessuna pubblicazione può partire da una PR di uno sconosciuto.
- [x] **Credito LLM, paternità e sostegno** — nella schermata iniziale (riga in fondo: licenza,
      autore, modelli usati) e in **Impostazioni → Avanzate → Il progetto**, con i pulsanti verso la
      pagina contatti e PayPal. Nuovo canale `OPEN_EXTERNAL` con **lista chiusa di host**: il renderer
      chiede di aprire un indirizzo, il main lo apre solo se è `https` verso uno dei quattro domini
      del progetto.
- [x] **README** — storia del progetto e ritiro dal commercio, stato («completo, mantenuto per
      correzioni»), privacy, «Come è stato scritto» con il credito ai modelli, sostegno, licenza.
- [x] **Igiene dei branch** — eliminati `claude/flamboyant-lalande` (un solo commit, e toccava
      soltanto un artefatto di build) e il remoto `claude/great-visvesvaraya-fa3970` (interamente
      contenuto in `master`). Sulla repo pubblica sarebbero stati navigabili da chiunque.
- [x] **`package.json`** — campo `license: MIT`, `repository` e `homepage` verso la destinazione
      pubblica. Restano `private: true`, come in Titan: serve a impedire una pubblicazione
      accidentale su npm, e non ha nulla a che vedere con la visibilità del repository.
- [x] Gate verde: lint, `tsc` renderer, `tsc` main, 394 test.

---

## FASE 2 — Documentazione, marchio e riordino del repository ✅ CHIUSA (18/08)

La revisione integrale dei manuali IT+EN era già stata eseguita il 18/08 (commit `7481280`). Questa
fase ha chiuso i quattro blocchi aggiunti a fine sessione, più due difetti tipografici emersi
guardando i PDF.

### 2.1 — La licenza, ora che esiste ✅

- [x] **Colophon dei manuali** — le copertine IT ed EN dicevano «software gratuito, ridistribuibile
      liberamente»: ora dicono **MIT**, con il credito ai modelli come nel README. Aggiunta anche la
      voce `**Licenza:** MIT` fra i metadati di copertina, da cui gli script la leggono.
- [x] **Guide rapide e file di benvenuto** — riga di licenza in `QUICKSTART_it/en.md` e in
      `README_USER_it/en.md`; in questi ultimi corretto anche il requisito macOS, che dichiarava
      ancora «11.0 Big Sur o superiore» contro la decisione presa.
- [x] **Guide in-app** — `README_MASTER.md` e `README_EN.md` (i file che apre la guida
      dell'applicazione) dicevano «gratuito e ridistribuibile»: ora MIT, con il credito ai modelli
      in chiusura.
- [x] `docs/README.md` — indice rifatto con `LICENSE`, `SECURITY.md`, `CONTRIBUTING.md`,
      `ARCHITECTURE.md`, questo piano, la documentazione per gli utenti e i piani chiusi.

### 2.2 — Il titolo spezzato in copertina ✅

- [x] `section.cover h1 { hyphens: none; }` in entrambi gli script.
- [x] Titolo con interruzioni esplicite: `<h1>Runtime<br>FeedDownloader<br>Pro</h1>`, identico nelle
      due lingue perché il nome del prodotto non si traduce.
- [x] Verificato **a video**, pagina per pagina, su entrambi i PDF.

### 2.3 — Il marchio ✅

- [x] `logoPath` non punta più a `brand/RFDP_trasp.png`, di febbraio. Guardando il risultato è però
      emerso che `resources/icon.png` **è RGB senza canale alfa**: sul blu notte usciva un
      francobollo bianco. La copertina usa quindi **`branding/feeddownloader-cover.svg`**, nuovo:
      è l'icona dell'applicazione senza lo squircle di fondo, vettoriale e trasparente.
- [x] `brand/` e `branding/logo-candidates/` non sono stati eliminati — **decisione dell'utente:
      «è storia, racconta il progetto»**. Sono stati raccolti in **`branding/storico/`** con un
      `branding/README.md` che spiega marchio in uso, file derivati e cronologia. Ci è finito anche
      `public/logo_source.png`, il vecchio marchio che nessuna riga di codice usava più.
- [x] Altro marchio vecchio: `public/logo.png` e `public/icon.ico` erano già stati rigenerati il
      18/08; `brand/banner.png` (maggio) si è rivelato materiale promozionale con un terzo marchio
      ancora, mai usato dal programma — spostato in `MATERIALE/` come `banner-2026-05.png`. La
      cartella `brand/` non esiste più.

### 2.4 — Riordino del repository ✅

- [x] **Eliminate `DISTRIBUZIONE/` e `gumroad/`** (1,25 GB).
- [x] Su decisione dell'utente sono state eliminate anche **`PORTING/`** (881 MB, pacchetti 0.7.6),
      **`builds/`** (483 MB, output rigenerabile) e `downloads/` (vuota). In tutto **2,56 GB**.
      Restano `MATERIALE/` e `screenshot/`, entrambe ignorate da git.
- [x] Verificato che nessuno script o documento citi le cartelle sparite: l'unico riferimento vivo
      era in `scripts/README.md` («brand assets are read from `brand/`»), riscritto.
- [x] `.gitignore` ripulito delle regole ormai senza oggetto (`DISTRIBUZIONE/`, `gumroad/`,
      `PORTING/`, `brand/`, `distribuzione-*/`).
- [x] `docs/` — i piani eseguiti sono in **`docs/archivio/`**, non in `docs/storico/` come Titan:
      questa repo aveva già `archivio/`, e due cartelle con lo stesso mestiere sono peggio di una.
      Archiviati con un riquadro che dice quando e perché: `PIANO-REVISIONE-PRE-RELEASE.md`,
      `PIANO-STANDARD-DISTRIBUZIONE-TITAN.md`, e in più `aggiornamento-documentazione-roadmap.md`
      e `report_multilingual_verification_2026-03-28.md`, entrambi superati.

### 2.5 — Rigenerazione ✅

- [x] I due PDF rigenerati dopo 2.1, 2.2 e 2.3, e verificati a video.
- [ ] Ricaricarli dove serve: **rimandato alla Fase 3**, perché la destinazione cambia con lo
      spostamento della repo.

### In più: due difetti tipografici visti guardando i PDF

- [x] **Testo giustificato** su colonna A5 stretta: fiumi bianchi e sillabazione forzata. Ora è a
      bandiera (`text-align: left`, `hyphens: manual`), su segnalazione dell'utente.
- [x] **Copertina inglese disallineata dall'italiana**: non mostrava il numero di versione e
      spezzava la citazione dove andava a capo il Markdown. Ora le due copertine sono gemelle.

## FASE 3 — La prima release da progetto aperto (v1.5.0) ✅ CHIUSA (18/08)

✅ **Vincolo sciolto:** andava fatta dopo la Fase 4.1–4.2, perché `app-update.yml` viene generato
dalla configurazione di publish e deve già puntare alla destinazione definitiva.

**La release `v1.5.0` è pubblica** su `Pitz72/FeedDownloader`, prodotta dal workflow manuale
(run `32125254210`, tutti e quattro i job verdi: `verify` 2m39s, `build-windows` 4m25s,
`build-linux` 5m01s, `release` 19s). Commit `c149627`, tag `v1.5.0` su entrambi i remoti.

- [x] `electron-builder.yml` → `publish` verso `Pitz72/FeedDownloader`. Il `RELEASE_TOKEN` non serve
      più: il job `release` usa il `GITHUB_TOKEN` integrato e si alza da solo a `contents: write`,
      mentre il resto del workflow resta in sola lettura. Il PAT resta valido sul repository ma non
      è più riferito da nessuna riga di CI.
- [x] 🔴 **`OPEN_MANUAL_PDF` spostato.** I due PDF **erano già nella repo pubblica**, versionati
      accanto ai sorgenti Markdown in `docs/user/`: la Fase 4 li aveva portati su col push della
      storia. Non c'era quindi niente da caricare — la voce 2.5 della Fase 2 si chiude qui senza
      upload. Verificato **HTTP 200** su entrambi gli indirizzi e, per non fidarsi del codice di
      stato, confrontato lo **SHA-256** delle copie remote con quelle locali: identici. L'handler
      punta ora a `.../Pitz72/FeedDownloader/raw/master/docs/user/`, con i percorsi codificati per
      segmento (le due lingue stanno in cartelle diverse).
- [x] 🔴 **`resources/icon.png` rigenerato con il canale alfa.** Rasterizzato da
      `branding/feeddownloader-icon.svg` a 1024² con un motore di browser: **ImageMagick non va
      bene**, il suo renderer SVG interno sbaglia gli angoli dello squircle e la maschera
      dell'anello (verificato affiancando le due rese). Rigenerati anche `public/logo.png` (identico
      al sorgente) e `public/icon.ico` (`png-to-ico`, 4 livelli 16/32/48/256 a 32 bpp). Controllato a
      video su fondo chiaro: gli angoli sono trasparenti in tutti i livelli.
- [x] Ricaricare i due PDF dei manuali — **non necessario**, vedi sopra. Le copertine dicevano già
      «Versione 1.5.0» dalla Fase 2, quindi nessuna rigenerazione.
- [x] Bump a **1.5.0** in `package.json` e `package-lock.json`, tag annotato `v1.5.0` su `origin` e
      `pubblico`. Changelog `docs/changelog/1.5.0.md` datato e aperto da una sezione **«Apertura del
      sorgente»** (licenza, repo pubblica, crediti, nuova destinazione delle release); stessa
      notizia in cima alle note in-app (`releaseNotes.ts`), IT ed EN.
- [x] Gate verde prima del tag: lint, `tsc` renderer, `tsc` main, **394/394 test**. `npm audit` in CI
      esce 1 ed è l'unica annotazione rossa della run: è il passo dichiarato informativo
      (`continue-on-error`), e le 22 segnalazioni stanno tutte nella catena Vivliostyle delle
      *devDependencies* — `npm audit --omit=dev` dà **0 vulnerabilità**.
- [x] **Documentazione allineata**: README (badge della CI e tabella dei download), le due guide
      in-app, `CONTRIBUTING.md`, `docs/ARCHITECTURE.md`. In `ARCHITECTURE.md` corretta anche la
      descrizione dell'auto-updater, ferma a «scarica in background»: dalla v1.5.0 `autoDownload` è
      spento. Corrette in `scripts/README.md` e `branding/README.md` le note che davano
      `resources/icon.png` come privo di alfa.
- [x] **Asset verificati.** Scaricati i tre installer dalla release pubblicata e ricalcolato lo
      **SHA-512** di ciascuno: coincide con quello dichiarato in `latest.yml` e `latest-linux.yml`.
      I metadati di aggiornamento sono quindi coerenti con i file effettivamente pubblicati.
- [x] ✅ **AUTO-UPDATE COLLAUDATO SUL CAMPO (18/08).** Con la **v1.5.1**, prima release dopo
      l'apertura, l'installazione v1.5.0 ha visto l'aggiornamento su `Pitz72/FeedDownloader`, l'ha
      scaricato e installato. È la prova che la catena definitiva regge: nessuna repo ponte, il
      `GITHUB_TOKEN` integrato al posto del PAT, e il download che risolve (il bug storico del 404
      da `artifactName` con gli spazi resta chiuso). La voce qui sotto spiega perché non era
      collaudabile con la v1.5.0 stessa.
- [x] **Auto-update dalla 1.4.2 installata: non applicabile, e va bene così.** L'`app-update.yml`
      dell'app installata punta ancora a `Ecosystem-Runtime/FeedDownloader-Releases` — quel file
      viene cablato nel pacchetto al momento della build, quindi una release solo sulla repo
      pubblica è invisibile a chi ha la 1.4.2. Si era valutato di pubblicare la v1.5.0 **anche**
      sulla ponte come suo ultimo compito. **Decisione dell'utente: non serve.** Il programma non
      è mai stato acquistato da nessuno: l'unica installazione esistente è la sua, e si aggiorna
      installando a mano l'`.exe` della release. Da quel momento il pacchetto punta alla repo
      pubblica e la catena di aggiornamento è quella definitiva; la prima release successiva alla
      v1.5.0 la collauderà sul campo. **Conseguenza per la Fase 5:** nessuna installazione dipende
      più dalle repo ponte, che si possono cancellare senza finestra di migrazione.

---

## FASE 4 — GitHub ✅ CHIUSA (18/08)

> **La sorpresa della fase.** `Pitz72/FeedDownloader` **esisteva già**: privato, fermo al 12 maggio
> (`c9f85c2`, v1.2.4), è la repo da cui a maggio si era migrati a `Ecosystem-Runtime`. Contiene la
> **stessa storia**, e il `master` di oggi la conteneva come antenato: 57 commit avanti, tag `v1.0.0`
> coincidente (`73d1eec`). Niente repo nuova, quindi, e nessuna forzatura: un **push fast-forward**
> sulla destinazione già dichiarata in `package.json`.

### 4.1 Trasferimento ✅

- [x] ⛔ **Backup**: `git clone --mirror` in
      `SVILUPPO/UTILITY/FeedDownloader-backup-mirror-2026-08-18.git` (38 MB, 165 commit, 8 tag,
      `master` = `89a00d4`). **Da tenere finché la Fase 5 non è chiusa.**
- [x] `master` e tutti gli **8 tag** spinti su `Pitz72/FeedDownloader` (7 tag erano nuovi: lassù
      c'era solo `v1.0.0`).
- [x] Verificato con un **clone pulito**: SHA identico (`89a00d4…`), 165 commit, 8 tag,
      `git fsck --strict` senza rilievi.
- [x] La repo su `Ecosystem-Runtime` resta privata e intatta come seconda rete di sicurezza. In
      locale è ancora `origin`; la pubblica è il remoto `pubblico`.

### 4.2 Pubblicazione ✅

- [x] Repository **pubblico**.
- [x] Descrizione in inglese, sito `runtimeradio.com`, argomenti: `podcast`, `rss`, `electron`,
      `archiving`, `sqlite`, `typescript`, `react`, `open-source`.
- [x] GitHub riconosce la licenza **MIT**.
- [x] Issue abilitate, `bug_report.yml` e `feature_request.yml` al loro posto sul remoto.
- [x] **Nessun workflow è partito** con il push: l'ultima esecuzione registrata è del 12 maggio,
      di quando il trigger su push esisteva ancora. Oggi i job di build hanno la condizione
      esplicita `github.event_name == 'workflow_dispatch'`.
- [x] Controllato un'ultima volta prima di pubblicare che nessun file di credenziali sia tracciato.

### 4.3 CI

- [x] La build resta **manuale**: nessun trigger su push, verificato sul workflow pubblicato.
- [x] Matrice attuale, identica a Titan: `verify` su Ubuntu (lint, tipi, test) più `build-linux`
      (AppImage + deb) e `build-windows` (NSIS), entrambi solo su `workflow_dispatch`. Nessun macOS.
- [ ] **Decisione aperta: arm64.** Su repository pubblici i runner `ubuntu-*-arm` sono gratuiti, e un
      AppImage arm64 costerebbe poco. Non è un blocco per la v1.5.0: si valuta dopo la prima release.

## FASE 5 — Dismissione della fase commerciale

- [x] ✅ **Gumroad — chiuso dall'utente il 18/08.** Verificato: `pizzisimone.gumroad.com/l/feeddownloaderpro`
      risponde **HTTP 404**. Controprova di non-regressione: `livemachinepro` risponde ancora **200**,
      quindi la dismissione ha colpito questo prodotto e solo questo. È l'atto che rende vera tutta
      l'operazione, ed è già fatto: da qui in avanti il software non è più in vendita da nessuna parte.
- [x] **Sito Ecosystem** — fatto il 18/08, rilascio **v0.6.8** del sito
      (`SITI-WEB/ECOSYSTEM`, commit `ff1f2d4`). Il flag `openSource` introdotto per Titan non è
      stato toccato: acceso su FeedDownloader, `ProductPanel`, `ProductDetailPage` e la card del
      bundle cambiano da soli. **Le chiavi i18n commerciali sono rimaste intatte** perché Live
      Machine Pro le usa ancora; le stringhe nuove hanno il prefisso `fdp_`. In dettaglio:
      `FDP_REPO_URL`/`FDP_RELEASES_URL` nuovi, `FDP_VERSION` da `v1.3.0` a `v1.5.0`, prezzo
      `€9.99` → «Gratis», via `originalPrice`, riga della licenza nelle specifiche; le **quattro
      CTA d'acquisto** della landing (eroe, blocco prezzo, piè di pagina, sticky mobile) diventano
      download da GitHub, affiancate dal pulsante «Codice sorgente»; `products-manifest.json` a
      prezzo `0` con licenza MIT, che è la fonte del JSON-LD.
- [x] **Card del bundle** — con Titan e FeedDownloader liberi resta **un solo prodotto a
      pagamento**, e un bundle da un pezzo non è un bundle. La card ora si mostra solo se i
      prodotti a pagamento sono almeno due: sparisce da sé, e ricompare da sé se un giorno tornerà
      a esserci qualcosa da raggruppare.
- [x] **Fatti scaduti corretti già che c'eravamo** — la landing prometteva **macOS** (non
      supportato), **otto lingue** (due dalla v1.4.2) ed **Electron 30** (è la 43). La FAQ sulla
      licenza dice ora che il programma è gratuito; quella su macOS è stata sostituita da quella su
      SmartScreen, che è il problema che si incontra davvero.
- [x] **Marchio e banner** — su segnalazione dell'utente: la landing mostrava ancora la vecchia
      «R» di febbraio 2026, mentre l'applicazione ha cambiato marchio il 13 luglio.
      `fdp-icon-v2.png` è rasterizzato dall'SVG in uso conservando l'alfa; `hero-banner-v2.webp` è
      nuovo, sul modello di quello di Titan (marchio a sinistra, nome e pillola `OPEN SOURCE · MIT`
      a destra, piattaforme in basso). Suffisso `-v2` per cache-busting, vecchi file eliminati.
- [x] ✅ **Sito in produzione, verificato sulla pagina live.** Il sito non si deploya col push: si
      carica via SFTP con `_SEGRETI/deploy.py` (`list`, `audit`, `upload`, `rm`). Caricato il 18/08
      su richiesta dell'utente: **58 file, 16 sottocartelle**. Verificato **sulla pagina in
      produzione**, non sul sorgente: JSON-LD a **`"price":"0"`** con `license` MIT e `buyUrl` sulle
      release, **zero occorrenze di «gumroad»** nel documento, banner `hero-banner-v2.webp`,
      `products-manifest.json` live corretto. Il testo della pagina dice «v1.5.0 — MIT»,
      «Windows · Linux», «Scarica da GitHub», e nell'orbita FeedDownloader Pro è **«Gratis»**
      accanto a Titan, mentre Live Machine Pro resta a €9.99.
- [x] **Vecchio marchio rimosso dal server.** L'audit ha trovato 35 file orfani di deploy
      precedenti; su decisione dell'utente sono stati cancellati **solo i due del marchio ritirato**
      (`media/fdp-icon.png`, `media/fdp/hero-banner.webp`, ora 404), perché restavano scaricabili ai
      loro indirizzi e un'anteprima OG in cache avrebbe continuato a servire la vecchia «R». I 33
      bundle JS di build vecchie restano: non fanno danno, e cancellarli può rompere una pagina
      aperta da prima del deploy.
- [x] ✅ **Screenshot della landing rifatti** — rilascio **v0.6.9** del sito. Erano di maggio; il
      peggiore, `screen-splash`, aveva il vecchio marchio e **otto bandiere di lingua**. Ripresi
      **pilotando la v1.5.0 installata dal protocollo DevTools** (`--remote-debugging-port`), con
      viewport fisso a **1600×1000** per tutti e cinque: le proporzioni sono ora uniformi, prima
      andavano da `1280×248` a `349×643` e la galleria le stirava ognuna a modo suo. Dati veri
      della libreria (31 feed) e, per la coda, **tre download realmente in corso** con velocità e
      tempo residuo, compresi i comandi Pausa e Ferma introdotti dalla v1.5.0; i trasferimenti sono
      stati fermati subito dopo lo scatto e **nessun file è rimasto sul disco** (verificato: nessun
      `.part` nell'archivio). Caricati in produzione, i cinque vecchi cancellati dal server (404).
- [x] ⛔ **Repo ponte cancellate.** Fatto il 18/08, **dopo** lo spostamento di `OPEN_MANUAL_PDF`
      (Fase 3) e **dopo** la prima release pubblica, nell'ordine che questa voce imponeva.
      Cancellate **entrambe**: `Ecosystem-Runtime/FeedDownloader-Releases` e
      `Pitz72/FeedDownloader-Releases` (verificate: HTTP 404). Prima:
      `git clone --mirror` di ognuna in `SVILUPPO/UTILITY/` (3,9 MB e 75 KB, `fsck --strict`
      pulito), più `FeedDownloader-Releases-INVENTARIO-asset-2026-08-18.md` che elenca nome e peso
      dei 28 asset delle quattro release. **Gli installer non stanno in git e sono andati via con
      le repo**: restano i tag nella repo del sorgente, da cui si ricostruiscono. Nessuna
      installazione ne dipendeva.
- [x] La cartella locale `gumroad/` — già eliminata nella Fase 2.4, insieme a `DISTRIBUZIONE/`.

---

## Cosa rende questa transizione più semplice di quella di Titan

Vale la pena annotarlo, perché spiega perché diverse voci del piano Titan qui non esistono.

- **La storia è pulita** e non va riscritta: Titan ha dovuto rimuovere 28 blob per 532 MB, fra PDF con
  l'EULA nel colophon e manuali di versioni vecchie. Qui l'audit non ha trovato nulla da togliere.
- **I manuali sono già a posto**: la revisione integrale è stata fatta il 18/08, prima e
  indipendentemente da questa decisione. Titan ha dovuto rifarli in corsa, in otto lingue, e ridurli a
  due.
- **Non c'è nessuno da traghettare.** Come per Titan, l'unica installazione conosciuta è quella
  dell'autore. Nessuna finestra di migrazione, nessun token cross-organizzazione.
