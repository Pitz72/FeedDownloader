# Prompt — prossima sessione (allineamento a Titan)

> Copia-incolla questo come primo messaggio della prossima sessione.

---

Continuiamo su **FeedDownloader Pro**. Contesto (già fatto, non rifare):

- **v1.4.1** è committata/pushata su `master` (`a2c4c36`) e **rilasciata sul bridge**
  `Ecosystem-Runtime/FeedDownloader-Releases` come **unica release** (le vecchie cancellate,
  tag git mantenuti). Suite 356/356, gate verde.
- Il **logo definitivo** è pronto e committato (`e331d48`): `branding/feeddownloader-icon.svg`,
  `branding/feeddownloader-tray.svg` (mono), `resources/icon.png` (1024²). **Non ancora cablato**
  nel build.
- Documenti di riferimento: `docs/PIANO-STANDARD-DISTRIBUZIONE-TITAN.md` (piano di allineamento),
  `C:\Users\Utente\Documents\GitHub\RUNTIME-DESKTOP-DISTRIBUTION-STANDARD.md` (standard trasversale).
- App di riferimento (stile/standard da imitare): *Runtime TelegramBot Desktop Titan Edition* in
  `C:\Users\Utente\Documents\SVILUPPO\UTILITY\BOT-TELEGRAM-RSS\TITAN_DESKTOP\Runtime TelegramBot Desktop Titan Edition\`
  (guarda `electron-builder.yml`, `src/main/{index,ipc}.ts`, `src/renderer/src/{components/WhatsNewModal.tsx,lib/releaseNotes.ts,hooks/useUpdater.ts}`).

**Obiettivo della sessione:** allineare FeedDownloader allo standard di distribuzione Titan,
**verificando su un build reale** (electron-builder), non "a fiducia". Protocollo git-sync:
commit + push a ogni step significativo; gate `lint`+`tsc×2`+`vitest`+`vite build` deve restare verde.

Ordine di lavoro proposto (confermamelo o riordina):

1. **Cablare la nuova icona** — estrai la config `build` in `electron-builder.yml`; punta
   `win.icon`/`linux.icon`/(`mac.icon`) a `resources/icon.png` (un solo PNG quadrato); elimina il
   set `build/icons/` + lo script `icons:linux` + lo step ImageMagick in CI. Verifica con un build
   Windows che l'icona dell'exe/installer sia quella nuova.
2. **Fix "Novità" post-update** (bug confermato) — porta il pattern Titan `consume-whats-new`:
   `lastSeenVersion` nelle **settings del main** + `existingUser = previous!==undefined || (ci sono
   già feed/archivio)`. Oggi `src/App.tsx:131` usa localStorage e NON mostra il changelog nel salto
   1.3.x→1.4.x. Aggiungi test.
3. **Note di rilascio localizzate in-code** (`RELEASE_NOTES[ver][lang]: string[]`) in tutte le 8
   lingue, come Titan (al posto / in aggiunta al Markdown IT).
4. **Auto-update col consenso** — `autoDownload=false`, `autoInstallOnAppQuit=false`, check
   avviato dal renderer dopo il mount; il banner N1 propone Scarica → progress → Riavvia e installa.
5. **Installer leggero** — Vite `ssr.noExternal` per bundlare le dipendenze JS inline; in `files`
   escludi tutto `node_modules` tranne `better-sqlite3` (+bindings, file-uri-to-path). Verifica che
   nulla manchi a runtime su un build reale. Target: da ~103 MB a ~20-30 MB.
6. **Manuali** — audit dei manuali `docs/user/**` contro il codice attuale (mancano badge, tray,
   changelog in-app, health-check con verifica SHA-256, notifiche update); valuta Typst come Titan;
   PDF sul bridge (`manuals/`).

Operativo residuo (fuori codice, quando pronti): aggiornare gli ZIP **Gumroad**/`DISTRIBUZIONE/`
(fermi a 1.3.0) e caricare gli 8 PDF manuali sul bridge.

Nota tecnica: per rasterizzare SVG usa **Edge/Chrome headless** (`--headless=new --screenshot`),
NON ImageMagick (che sfoca maschere e tratti).

Parti dal punto 1.
