# Il marchio

Il marchio in uso è **`feeddownloader-icon.svg`**: uno squircle scuro con una **F** tipografica il
cui stelo è una freccia di download, il punto del feed e l'anello orbitale che accomuna le
applicazioni Runtime. Segue lo standard visivo delle app desktop Runtime, nella catena cromatica
viola assegnata a FeedDownloader.

## I file in uso

| File | Dove finisce |
|------|--------------|
| `feeddownloader-icon.svg` | Sorgente dell'icona dell'applicazione → `resources/icon.png`, da cui electron-builder ricava le icone di Windows e Linux |
| `feeddownloader-tray.svg` | Icona monocromatica per l'area di notifica |
| `feeddownloader-cover.svg` | Copertina dei manuali: è l'icona senza lo squircle di fondo, perché sul blu notte della copertina il riquadro scuro faceva da francobollo |

I due script in `scripts/` incorporano `feeddownloader-cover.svg` nella copertina dei PDF. È
vettoriale di proposito: resta nitido in stampa a qualsiasi dimensione.

> **Nota sull'alfa (v1.5.0).** Fino alla v1.4.2 `resources/icon.png` era RGB **senza canale alfa**:
> gli angoli attorno allo squircle erano bianchi, e si vedevano nella finestra, nelle notifiche e
> nell'area di notifica sui fondi scuri. Nella v1.5.0 il file è stato rigenerato dall'SVG
> conservando la trasparenza, e con lui `public/logo.png` e `public/icon.ico`. La rasterizzazione
> va fatta con un motore di browser: il renderer SVG interno di ImageMagick sbaglia gli angoli
> dello squircle e la maschera dell'anello.

## `storico/` — i marchi precedenti

Non sono file dimenticati: raccontano come il progetto è arrivato al marchio di oggi, e per questo
restano versionati.

| File | Quando | Cos'è |
|------|--------|-------|
| `storico/RFDP.png`, `RFDP_trasp.png`, `RFDP_trasp_refin.png` | febbraio 2026 | Il primo marchio del prodotto, usato sulla copertina dei manuali fino ad agosto 2026 |
| `storico/logo_source.png` | febbraio 2026 | Lo stesso marchio, sorgente delle icone dell'applicazione di allora |
| `storico/candidati-luglio-2026/` | luglio 2026 | Le proposte scartate della selezione da cui è uscito il marchio attuale, generate con Gemini, GPT e Claude |

Il passaggio è del 13 luglio 2026: l'applicazione ha adottato il marchio nuovo, i manuali PDF sono
rimasti indietro fino al 18 agosto 2026, quando l'allineamento è stato completato.
