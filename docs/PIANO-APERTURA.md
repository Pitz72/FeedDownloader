# Piano di apertura del sorgente — checklist operativa

**Aperto:** 18 agosto 2026
**Obiettivo:** ritirare FeedDownloader Pro dal mercato, spostarlo su `Pitz72` come repository pubblico
sotto licenza MIT, con build automatiche per Windows e Linux.
**Stato:** **FASI 1 e 2 CHIUSE** (18/08). **Gumroad chiuso** dall'utente il 18/08 (voce della Fase 5
già spuntata, verificata: HTTP 404). ▶️ **Prossima: FASE 3**, la prima release da progetto aperto,
che però va fatta **dopo** la Fase 4.1–4.2: `app-update.yml` deve già puntare alla destinazione
definitiva.

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

## FASE 3 — La prima release da progetto aperto (v1.5.0)

⛔ **Va fatta dopo la Fase 4.1–4.2**, perché `app-update.yml` viene generato dalla configurazione di
publish e deve già puntare alla destinazione definitiva. È lo stesso vincolo che Titan ha rispettato.

- [ ] `electron-builder.yml` → `publish` verso `Pitz72/FeedDownloader`; via il `RELEASE_TOKEN`, basta
      il `GITHUB_TOKEN` integrato quando la release esce sulla repo stessa.
- [ ] 🔴 **`OPEN_MANUAL_PDF` (`electron/ipc.ts`) punta ancora a `manuals/` sulla ponte.** Va spostato
      sulla repo pubblica **prima** di cancellare la ponte, altrimenti il pulsante «Apri manuale»
      restituisce 404. Verificare HTTP 200 sui due nomi file prima di toccare il codice.
- [ ] 🔴 **`resources/icon.png` è RGB senza canale alfa** (scoperto nella Fase 2 mettendo il marchio
      sulla copertina): gli angoli attorno allo squircle sono bianchi, non trasparenti. Da lì
      derivano `public/logo.png` e `public/icon.ico`, quindi finestra, notifiche e area di notifica
      mostrano un contorno bianco sui fondi scuri. Si rigenera da `branding/feeddownloader-icon.svg`
      conservando l'alfa, e si rifà `public/icon.ico`.
- [ ] Ricaricare i due PDF dei manuali sulla destinazione definitiva (voce che arriva dalla Fase 2.5).
- [ ] Bump a **1.5.0** in `package.json`, tag, changelog già pronto (`docs/changelog/1.5.0.md`).
- [ ] Lanciare la build e verificare che l'auto-update dalla 1.4.2 installata funzioni davvero.

---

## FASE 4 — GitHub

### 4.1 Trasferimento

- [ ] ⛔ **Backup prima di toccare qualsiasi cosa**: `git clone --mirror` fuori dalla cartella del
      progetto. Titan lo ha fatto e lo ha tenuto finché la Fase 5 non è stata chiusa.
- [ ] Creare `Pitz72/FeedDownloader` e spingerci `master` **con tutti gli 8 tag**.
- [ ] Verificare con un clone pulito: stessi file, stessi SHA, `git fsck --strict` pulito.
- [ ] La vecchia repo su `Ecosystem-Runtime` **resta privata e intatta** come seconda rete di
      sicurezza, finché la Fase 5 non è chiusa.

### 4.2 Pubblicazione

- [ ] Repository **pubblico**.
- [ ] Descrizione, sito e argomenti: `podcast`, `rss`, `electron`, `archiving`, `sqlite`,
      `typescript`, `react`, `open-source`.
- [ ] Verificare che GitHub riconosca la licenza **MIT**.
- [ ] Issue abilitate, i due template al loro posto.
- [ ] Verificare che **nessun workflow parta da solo** con la pubblicazione (build è
      `workflow_dispatch`, e i job di build ora hanno la condizione esplicita).

### 4.3 CI

- [ ] Valutare la matrice completa come Titan (Windows installer, Linux AppImage/deb, x64) e se
      aggiungere arm64, che sui repository pubblici è gratuito.
- [ ] La build resta **manuale**: nessun trigger su push.

---

## FASE 5 — Dismissione della fase commerciale

- [x] ✅ **Gumroad — chiuso dall'utente il 18/08.** Verificato: `pizzisimone.gumroad.com/l/feeddownloaderpro`
      risponde **HTTP 404**. Controprova di non-regressione: `livemachinepro` risponde ancora **200**,
      quindi la dismissione ha colpito questo prodotto e solo questo. È l'atto che rende vera tutta
      l'operazione, ed è già fatto: da qui in avanti il software non è più in vendita da nessuna parte.
- [ ] **Sito Ecosystem** — la scheda prodotto va portata da «acquista» a «scarica», come è stato
      fatto per Titan. Attenzione al vincolo già incontrato lì: le chiavi i18n commerciali sono
      **condivise** fra i prodotti, e Live Machine Pro resta a pagamento. Esiste già il flag
      `openSource` su `Product` introdotto per Titan: si riusa.
- [ ] Verificare **sulla pagina in produzione**, non sul sorgente, che non resti nessun prezzo,
      nessun link Gumroad, nessuna card bundle che includa questo prodotto.
- [ ] ⛔ **Cancellare la repo ponte solo dopo** aver spostato `OPEN_MANUAL_PDF` (Fase 3) e dopo la
      prima release pubblica. Backup `git clone --mirror` prima di procedere: i PDF stanno in git, gli
      installer delle release no.
- [ ] La cartella locale `gumroad/` diventa storia: si archivia o si elimina.

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
