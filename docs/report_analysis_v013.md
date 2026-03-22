# Analisi Critica del Codice (v0.1.3)

> ⚠️ **ARCHIVIO STORICO** — Questo report fotografa lo stato del progetto alla versione **v0.1.3** (febbraio 2026).
> Tutte le criticità qui documentate sono state **risolte** nelle versioni successive.
> Conservato a scopo di riferimento storico sulla evoluzione del progetto.

---

In risposta alle osservazioni di Gemini, ecco l'analisi dello stato attuale del codice:

## 🔴 Criticità Gravi (Stabilità)

### 1. Type Safety & `@ts-ignore`
- **Stato**: **CONFERMATO**.
- **Analisi**: I file `EpisodeList.tsx` e `UrlInput.tsx` usano `@ts-ignore` per invocare `window.api`. Sebbene l'interfaccia sia definita in `vite-env.d.ts`, i componenti la ignorano.
- **Rischio**: Se la firma di `preload.ts` cambia, l'app romperà a runtime senza avvisi di compilazione.

### 2. Logica Batch Fragile (Freeze Barra Progresso)
- **Stato**: **CONFERMATO CRITICO**.
- **Analisi**:
    - **Backend (`ipc.ts`)**: Invia correttamente un evento `{ error: true }` se un download fallisce.
    - **Frontend (`App.tsx`)**: Il listener gestisce solo il successo:
      ```typescript
      if (data.completed) { incrementBatch(); }
      ```
- **Conseguenza**: Se un solo download fallisce, `incrementBatch()` non viene mai chiamato. Il contatore `batchCompleted` non raggiungerà mai `batchTotal`, e la barra di progresso (o lo stato di "scaricamento in corso") rimarrà bloccata per sempre.

## 🟡 Criticità Medie (UX/Performance)

### 3. Intro Animation "Scattosa"
- **Stato**: **CONFERMATO**.
- **Analisi**: L'animazione in `IntroScreen.tsx` potrebbe soffrire del caricamento sincrono di molte risorse o del rendering iniziale pesante dell'app sottostante. L'uso di molte bandiere SVG importate direttamente potrebbe appesantire il bundle iniziale.

### 4. Mancanza di Retry (Resilienza)
- **Stato**: **CONFERMATO**.
- **Analisi**: `DownloadService.ts` usa un semplice stream `axios` -> `fs`. Se la connessione cade (timeout, socket hang up), lancia un errore immediato. Non c'è logica di riprova (es. 3 tentativi con backoff).

### 5. Persistenza Lingua
- **Stato**: **DA VERIFICARE**.
- **Analisi**: `i18n.ts` usa `LanguageDetector` con impostazioni di default. Normalmente salva in `localStorage`, ma senza configurazione esplicita il comportamento potrebbe essere inconsistente tra riavvii.

---

## 🛠️ Piano di Risoluzione Consigliato

1.  **Fix Immediato Batch**: Modificare `App.tsx` per incrementare il batch anche in caso di `data.error`.
2.  **Refactoring Tipi**: Rimuovere `@ts-ignore` e tipizzare correttamente le chiamate IPC.
3.  **Resilienza**: Aggiungere un loop di retry in `DownloadService.ts`.
