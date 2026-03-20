# 🔬 Report Criticità Rimanenti e Sviluppo

> Generato il 20 marzo 2026.
> **Stato**: Criticità Gravissime e Gravi 100% RISOLTE. Criticità Medie 1-3 risolte.

---

## 🟡 Criticità MEDIE Rimanenti

### 1. Contenuto Notifica OS non localizzato (`electron/ipc.ts`)
- **Problema**: La stringa `Download completato: ${total} file scaricati.` è hardcoded in italiano.
- **Rischio**: Gli utenti che usano l'interfaccia in altre lingue (ES, EN, FR) riceveranno notifiche OS solo in italiano.
- **Soluzione**: Iniettare `i18next` o passare la stringa tradotta dal Renderer al Main process prima di chiamare `Notification`.

### 2. `fetchDownloaded()` definita fuori dall'effetto (`src/components/EpisodeList.tsx`)
- **Problema**: La funzione è definita nel corpo del componente ma invocata nell'`useEffect`.
- **Rischio**: Ad ogni re-render viene ricreata inutilmente, e potrebbe causare warning ESLint per dipendenze mancanti.
- **Soluzione**: Spostare la funzione *dentro* l'`useEffect` o wrapparla in `useCallback`.

### 3. IntroScreen non skippabile
- **Problema**: Lo splash screen con animazione dura 2.5s fissi.
- **Rischio**: Riduce l'efficienza per gli utenti frequenti.
- **Soluzione**: Aggiungere un tasto "Skip" o un'opzione "Non mostrare più" nelle Impostazioni.

---

## 🟢 Criticità LIEVI Rimanenti

### 4. `<img>` senza `alt` nella Sidebar (`src/components/Sidebar.tsx`)
- Copertine podcast senza testo alternativo (compromettono l'accessibilità a11y).

### 5. Import diretto di `package.json` nella Sidebar
- Espone potenzialmente configurazioni e dipendenze nel bundle renderer (anti-pattern).

### 6. Commento di debug residuo (`electron/main.ts`)
- Codice di test `win.webContents.send('main-process-message')` mai rimosso.

### 7. `isOnline` duplicato e potenziale stale (`src/components/EpisodeList.tsx`)
- Usa `const isOnline = navigator.onLine` statico nel render invece di uno stato reattivo sincronizzato con gli event listener di `App.tsx`.

### 8. `downloads` in memoria senza pulizia (`src/store/useStore.ts`)
- L'oggetto `downloads: Record<string, DownloadProgress>` cresce indefinitamente nella RAM senza rimuovere i download andati a buon fine.

### 9. ESLint non integrato nel Workflow/Build
- Esiste `.eslintrc.cjs` ma non c'è uno script `lint` richiamato dal processo di build per bloccare errori.

### 10. `dist-electron` non presente nel `.gitignore`
- Rischio di committare artefatti compilati nel repository.

---

## 🚀 Potenziali Rami di Sviluppo (Rimanenti)

### 🟢 Breve Termine
| Feature | Descrizione | Complessità |
|---------|-------------|:-----------:|
| **Throttling velocità** | Limite di velocità download (KB/s) per evitare ban CDN | 🟡 Media |
| **Retry con Exponential Backoff** | *✅ Già implementato in v0.4.7 per DownloadService* | — |
| **Hook `useOnlineStatus`** | Custom hook React condiviso per sincronizzare lo stato online | 🟢 Bassa |

### 🟡 Medio Termine
| Feature | Descrizione | Complessità |
|---------|-------------|:-----------:|
| **Resume download (HTTP 206)** | Ripresa download interrotti tramite header `Range` | 🟡 Media |
| **Tagging ID3** | Scrittura automatica metadati (titolo, artista, cover) nei file MP3 | 🟡 Media |
| **Sidecar metadata** | File `.json` con show notes e descrizione salvato accanto al file | 🟢 Bassa |
| **Template naming** | Pattern personalizzabili: `[Data] - [Podcast] - [Titolo].mp3` | 🟡 Media |
| **Health Check** | Dashboard con verifica integrità archivio (file mancanti/corrotti) | 🟡 Media |
| **Scorciatoie tastiera** | Shortcuts per azioni comuni (Ctrl+D download, Ctrl+F cerca) | 🟢 Bassa |

### 🔴 Lungo Termine
| Feature | Descrizione | Complessità |
|---------|-------------|:-----------:|
| **Auto-sync schedulato** | Controllo periodico dei feed e download automatico nuovi episodi | 🔴 Alta |
| **Player audio integrato** | Anteprima/ascolto degli episodi direttamente nell'app | 🔴 Alta |
| **Supporto feed video** | Download video da feed RSS/YouTube con gestione formati multipli | 🔴 Alta |
| **Multi-piattaforma NAS** | Supporto download diretto su percorsi di rete (SMB/NFS) | 🟡 Media |
| **Drag & Drop URL** | Trascinamento URL direttamente nella finestra dell'app | 🟢 Bassa |
| **Archivio cloud** | Opzione per caricare file scaricati su S3/Google Drive/Dropbox | 🔴 Alta |
| **Plugin system** | Architettura estensibile per supportare parser/interfacce custom | 🔴 Alta |
| **Electron Auto-Update** | Sistema di aggiornamento automatico dell'app (`electron-updater`) | 🟡 Media |
| **Tray icon** | Icona nella system tray per download/sincronizzazioni in background | 🟢 Bassa |
