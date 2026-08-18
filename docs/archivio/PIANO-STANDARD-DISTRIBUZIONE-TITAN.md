# Piano — Allineamento allo standard di distribuzione Titan

> ⚠️ **Archiviato il 18 agosto 2026.** L'allineamento allo standard Titan è stato applicato
> (icona singola, `electron-builder.yml`, installer leggero, changelog in-app, manuali IT+EN).
> Lo standard vive ora in `Documents/GitHub/RUNTIME-DESKTOP-DISTRIBUTION-STANDARD.md`; il
> piano in corso è [PIANO-APERTURA.md](../PIANO-APERTURA.md).

**Stato:** PIANIFICAZIONE (da approvare prima di applicare). 13 luglio 2026.
**Obiettivo:** portare FeedDownloader allo stesso standard di *Runtime TelegramBot Desktop
Titan Edition* (v2.1.7) per auto-update, packaging, changelog, logo/icona e manuali, così da
avere un **standard di distribuzione ripetibile** da applicare a ogni fine-lavoro.

Riferimento Titan: `SVILUPPO/UTILITY/BOT-TELEGRAM-RSS/TITAN_DESKTOP/Runtime TelegramBot
Desktop Titan Edition/` (`electron-builder.yml`, `src/main/{index,ipc}.ts`,
`src/renderer/src/{components/WhatsNewModal.tsx,lib/releaseNotes.ts,hooks/useUpdater.ts}`).

---

## Confronto sintetico (oggi → Titan)

| Area | FeedDownloader oggi | Titan (target) |
| --- | --- | --- |
| Config builder | inline in `package.json` | `electron-builder.yml` dedicato |
| Icona | `public/icon.ico` (Win) + `build/icons/` set PNG (Linux), da `logo.png` **512×406 non quadrato** | **un solo** `resources/icon.png` (quadrato) per Win/Mac/Linux, sizes generati da electron-builder |
| `files` / node_modules | include tutto `node_modules` → installer **~103 MB** | esclude tutto tranne `better-sqlite3` (+bindings); JS bundlato inline da Vite `ssr.noExternal` → installer piccolo |
| Auto-download | **automatico** (autoDownload default) | **autoDownload=false**: l'utente sceglie se scaricare |
| Trigger check | dal main via `SET_LOCALE` | dal renderer dopo il mount (`window.api.checkForUpdates`) |
| "Novità" post-update | Markdown `docs/changelog/<ver>.md` (solo IT), gate su localStorage → **rotto nel salto 1.3→1.4** | `lastSeenVersion` in settings + note localizzate in-code `RELEASE_NOTES[ver][lang]`, con fallback "utente esistente" |
| macOS | rimosso | dmg + entitlements + hardenedRuntime |
| Manuali | Vivliostyle, per-lingua + PDF committati | Typst, per-lingua + screenshots |

---

## 1. Fix comportamenti update/changelog (bug verificati)

1a. **Changelog post-update affidabile** (bug confermato: salto 1.3.x→1.4.1 non mostra le
novità). Adottare il pattern Titan `consume-whats-new`:
* Spostare il flag da `localStorage` a **settings persistenti nel main** (`lastSeenVersion`),
  con handler IPC `consume-whats-new` che ritorna `{ show, version }` e consuma il flag.
* `show = existingUser && previous !== current`, dove `existingUser = (previous !== undefined)
  || (ci sono già feed/archivio nel DB)` — la seconda clausola copre gli aggiornamenti da
  versioni pre-changelog (il nostro caso 1.3.12→1.4.x).
* Mantiene la prima-installazione pulita SENZA changelog (l'onboarding basta).

1b. **Note di rilascio localizzate**. Valutare il modello Titan `RELEASE_NOTES[ver][lang]:
string[]` (bullet localizzati in tutte le 8 lingue) al posto del solo `docs/changelog/<ver>.md`
in italiano — oppure tenere il Markdown ma tradurlo. Decisione da prendere: in-code vs file.

1c. **Auto-update con consenso (opzionale, stile Titan)**: `autoDownload=false` +
`autoInstallOnAppQuit=false`; il banner N1 propone "Scarica" → progress → "Riavvia e installa".
Valutare se adottarlo o restare sull'attuale download automatico (meno click, ma meno controllo).

## 2. Packaging → standard Titan

2a. **Un solo icon quadrato**: creare `resources/icon.png` (1024×1024, vedi §4) e puntare
`win.icon`/`linux.icon`/`mac.icon` a quello. **Elimina** `build/icons/` committato, lo script
`icons:linux` e lo step CI ImageMagick (L43 diventa obsoleto: electron-builder genera i sizes).

2b. **Installer leggero**: portare Vite a bundlare le dipendenze inline (`ssr.noExternal: true`
lato electron) e in `files` **escludere tutto `node_modules`** tranne `better-sqlite3`
(+ `bindings`, `file-uri-to-path`). Verificare che `fast-xml-parser`, `axios`, `music-metadata`,
`node-id3`, `p-queue`, `sanitize-filename`, `fs-extra` finiscano nel bundle e non manchino a
runtime. Target: installer da ~100 MB → ordine dei ~20-30 MB.

2c. **`electron-builder.yml` dedicato** (estrarre la sezione `build` da `package.json`), per
allinearsi a Titan e semplificare i diff.

2d. **macOS (rientro)**: valutare target `dmg` + `entitlements` + `hardenedRuntime` come Titan
(dipende da §"code signing"; oggi non firmato → SmartScreen/Gatekeeper). Fuori da questo giro
se non c'è un certificato.

## 3. Standard di distribuzione ripetibile (checklist fine-lavoro)

Definire un unico flusso, documentato in `CONTRIBUTING.md`/`docs/`, da eseguire a ogni release:
1. Bump `package.json` (+ lockfile) e scrivere le note di rilascio della versione.
2. Gate locale: `lint` + `tsc`×2 + `vitest` + `vite build` (emette `feedWorker.js`+`main.js`).
3. Commit + push su `master` (protocollo git-sync).
4. `gh workflow run build.yml -f publish_release=true` sul repo privato → bridge.
5. Verificare gli **asset** della release (installer + `latest*.yml`) **prima** di toccare le
   vecchie release.
6. Cancellare le release precedenti sul bridge (tenere o meno i tag: decisione standard).
7. Aggiornare i PDF manuali sul bridge (`.../manuals/`) e gli ZIP Gumroad/DISTRIBUZIONE (L44).
> Opzionale: script `scripts/release.cjs` che orchestra 1-4 e stampa la checklist 5-7.

## 4. Logo / icona nuova

Problema: `logo.png` è **512×406, non quadrato**, con dettaglio troppo fine → illeggibile a
16-32 px (taskbar, tray, favicon installer). Serve un **icon dedicato**, non il logo esteso.
* **Sorgente**: `resources/icon.png` **1024×1024**, quadrato, margini di sicurezza, soggetto
  singolo e riconoscibile a 16 px (no testo, no dettagli sottili), sfondo pieno o trasparente
  coerente col brand Runtime.
* **Derivati**: da quello electron-builder genera `.ico`/`.icns`/PNG set; tray e favicon in-app
  allineati. Aggiornare `public/` di conseguenza.
* **Deliverable**: proposta di 2-3 direzioni (marchio "onda/RSS" Runtime), poi master 1024²
  + varianti mono per il tray. Da decidere se lo produco io (SVG→PNG) o parte da un tuo asset.

## 5. Manuali — audit + standard Titan

5a. **Audit stato reale** (prima di riscrivere): i manuali esistono per 8 lingue in
`docs/user/<locale>/` (12 capitoli + PDF) + `QUICKSTART_*` + `README_USER_*`. Verificare:
* allineamento al codice **attuale** (feature v1.3.13→v1.4.1: badge, tray, changelog, health
  check con verifica SHA-256, notifiche update, ecc. — molte non documentate);
* che i PDF committati siano rigenerati dall'ultima sorgente (non stantii);
* coerenza terminologica (vedi memoria `project_manual_standards`).

5b. **Standard Titan**: Titan usa **Typst** (`Manuale Utente Avanzato/typst` + screenshots per
lingua) invece di Vivliostyle. Decisione: **migrare a Typst** (uniformità di toolchain tra i due
prodotti) o **restare su Vivliostyle** documentando bene lo script. Includere una cartella
`screenshots/` per lingua come Titan.

5c. **Distribuzione manuali**: come già in v1.4.0 (B1), i PDF stanno sul bridge
(`FeedDownloader-Releases/manuals/`) e si aprono via link occultato — mantenere questo schema,
aggiungendo il caricamento dei PDF alla checklist §3.

---

## Ordine suggerito (quando approvato)

1. **1a** (fix changelog) — piccolo, alto valore, sblocca la UX post-update. → patch veloce.
2. **4** (icona) — sblocca §2a. 
3. **2** (packaging: icona singola + installer leggero + yml) — impatto grosso, da testare bene.
4. **3** (standard/checklist + eventuale `release.cjs`).
5. **5** (manuali: audit → aggiornamento → PDF).
6. **1c/2d** (consenso update, macOS) — opzionali, valutare.
