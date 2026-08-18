# Piano di apertura del sorgente — checklist operativa

**Aperto:** 18 agosto 2026
**Obiettivo:** ritirare FeedDownloader Pro dal mercato, spostarlo su `Pitz72` come repository pubblico
sotto licenza MIT, con build automatiche per Windows e Linux.
**Stato:** **FASE 1 CHIUSA** (18/08). **Gumroad chiuso** dall'utente il 18/08 (voce della Fase 5 già spuntata,
verificata: HTTP 404). ▶️ **Prossima: FASE 2**, ampliata su richiesta dell'utente con il titolo
spezzato in copertina, il marchio vecchio nei PDF e il riordino del repository.

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

## FASE 2 — Documentazione, marchio e riordino del repository ◀️ PROSSIMA SESSIONE

La revisione integrale dei manuali IT+EN è stata eseguita il 18/08 (commit `7481280`): 12 capitoli
riscritti contro il codice, tre feature inesistenti rimosse, help in-app rifatto, riferimenti
commerciali bonificati. Restano quattro blocchi, aggiunti su richiesta dell'utente il 18/08 a fine
sessione.

### 2.1 — La licenza, ora che esiste

- [ ] **Colophon dei manuali** — le copertine IT ed EN dicono oggi «software gratuito, ridistribuibile
      liberamente», formula scelta di proposito finché `LICENSE` non esisteva. Ora esiste: va scritto
      **MIT**, con il credito ai modelli come nel README.
- [ ] **Guide rapide e file di benvenuto** — stessa riga di licenza.
- [ ] `docs/README.md` — indice aggiornato con `LICENSE`, `SECURITY.md`, `CONTRIBUTING.md` e questo
      piano.

### 2.2 — Il titolo spezzato in copertina ⛔

**Il difetto, e la sua causa.** Sulla copertina dei PDF il nome del prodotto va a capo con la
sillabazione (`FeedDown-loader`). Non è un caso: `body { hyphens: auto; }` — riga 126 di
`scripts/build-book.cjs`, riga 142 di `scripts/build-all-books.cjs` — viene **ereditato**
dall'`h1` della copertina, che a 26pt non ci sta in larghezza.

**Come lo vuole l'utente:** una parola per riga, tre righe.

```
RUNTIME
FEEDDOWNLOADER
PRO
```

- [ ] `section.cover h1 { hyphens: none; }` in **entrambi** gli script, perché la regola del `body`
      arriva per ereditarietà e va spenta dove serve.
- [ ] Titolo con interruzioni esplicite nel markup della copertina:
      `<h1>Runtime<br>FeedDownloader<br>Pro</h1>`. È più robusto che sperare nella larghezza del
      contenitore, e vale identico per l'inglese, perché il nome del prodotto non si traduce.
- [ ] Verificare **a video** la copertina di entrambi i PDF: è un difetto tipografico, e i difetti
      tipografici si vedono, non si deducono dal codice.

### 2.3 — Il marchio: i PDF hanno ancora il logo vecchio 🔴

**Misurato, non supposto.** Il logo di copertina dei manuali è `brand/RFDP_trasp.png`, **12 febbraio
2026**, 1,5 MB. Il logo definitivo del progetto è `branding/feeddownloader-icon.svg` → 
`resources/icon.png`, **13 luglio 2026**, 35 KB, ed è quello che l'applicazione usa da quando è stato
cablato nel build (v1.5.0, commit `f86afc8`). **I due manuali PDF portano quindi un marchio che
l'applicazione non usa più.**

- [ ] Puntare `logoPath` dei due script (riga 16 di `build-book.cjs`, riga 23 di
      `build-all-books.cjs`) al logo attuale, e verificare come rende su fondo blu notte: il PNG
      dell'app è pensato per un'icona, non per una copertina, quindi va guardato prima di darlo per
      buono.
- [ ] Decidere che fare di `brand/` (3 PNG, ~3,3 MB, febbraio) e di
      `branding/logo-candidates/` (gli scarti della selezione del logo: 2 JPEG, 1 PNG, 1 SVG). Sono
      **tracciati** e finirebbero nel repository pubblico. Gli scarti non servono a nessuno; i sorgenti
      del marchio buono (`branding/*.svg`) hanno senso restino.
- [ ] Verificare che non sia rimasto **altro** marchio vecchio in giro: `public/logo.png` e
      `public/icon.ico` sono già stati rigenerati dal logo nuovo il 18/08, ma `brand/banner.png`
      (maggio) non è stato controllato.

### 2.4 — Riordino del repository

- [ ] **Eliminare `DISTRIBUZIONE/` e `gumroad/`.** Sono cartelle locali (già in `.gitignore`, quindi
      mai finite in git) che servivano a impacchettare i pacchetti commerciali. Con Gumroad chiuso e
      la distribuzione affidata alle release di GitHub non hanno più ragione di esistere. Dentro ci
      sono ~700 MB fra installer 1.4.2, ZIP e PDF: tutto ricostruibile o già altrove.
- [ ] Verificare che nessuno script o documento le citi ancora dopo l'eliminazione.
- [ ] Passare in rassegna la radice del repository con l'occhio di chi ci arriva per la prima volta:
      `PORTING/`, `MATERIALE/`, `screenshot/`, `downloads/` sono ignorati ma esistono sul disco, e
      vanno tenuti solo se servono davvero a qualcosa.
- [ ] `docs/` — chiudere i piani ormai eseguiti (`PIANO-REVISIONE-PRE-RELEASE.md`,
      `PIANO-STANDARD-DISTRIBUZIONE-TITAN.md`) spostandoli in `docs/storico/`, come fa Titan.

### 2.5 — Rigenerazione

- [ ] Rigenerare i 2 PDF **dopo** 2.1, 2.2 e 2.3, non prima: sono tre modifiche alla stessa copertina.
- [ ] Ricaricarli dove serve (vedi Fase 3: la destinazione cambia con lo spostamento della repo).

---

## FASE 3 — La prima release da progetto aperto (v1.5.0)

⛔ **Va fatta dopo la Fase 4.1–4.2**, perché `app-update.yml` viene generato dalla configurazione di
publish e deve già puntare alla destinazione definitiva. È lo stesso vincolo che Titan ha rispettato.

- [ ] `electron-builder.yml` → `publish` verso `Pitz72/FeedDownloader`; via il `RELEASE_TOKEN`, basta
      il `GITHUB_TOKEN` integrato quando la release esce sulla repo stessa.
- [ ] 🔴 **`OPEN_MANUAL_PDF` (`electron/ipc.ts`) punta ancora a `manuals/` sulla ponte.** Va spostato
      sulla repo pubblica **prima** di cancellare la ponte, altrimenti il pulsante «Apri manuale»
      restituisce 404. Verificare HTTP 200 sui due nomi file prima di toccare il codice.
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
