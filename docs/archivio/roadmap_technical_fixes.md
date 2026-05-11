# Roadmap Technical Fixes & UX Improvements (Post-v1.0.0)

Questo documento traccia i problemi tecnici e i miglioramenti dell'interfaccia utente identificati dopo il rilascio della versione 1.0.0, con particolare attenzione alla compatibilità cross-platform (Linux).

---

## 1. Problemi Identificati (Aprile 2026)

### 1.1 Posizionamento Finestra su Monitor Secondario (Linux)
*   **Stato:** 🔲 Pianificato
*   **Descrizione:** Su Linux Mint (e potenzialmente altre distro), l'applicazione si avvia massimizzata ma viene posizionata sul monitor secondario invece che su quello primario.
*   **Analisi Tecnica:** In `electron/main.ts`, la finestra viene creata senza coordinate `x` e `y`. L'evento `ready-to-show` esegue `maximize()` prima di `show()`, lasciando al window manager la decisione sul posizionamento.
*   **Soluzione Proposta:**
    *   Utilizzare il modulo `screen` di Electron per identificare il monitor primario.
    *   Impostare esplicitamente le coordinate iniziali al centro del monitor primario prima di chiamare `maximize()`.

### 1.2 Menu Contestuale Mancante (Incolla via Mouse)
*   **Stato:** 🔲 Pianificato
*   **Descrizione:** Nei campi di input (es. inserimento URL feed), il tasto destro del mouse non apre alcun menu contestuale, impedendo l'operazione di "Incolla" tramite mouse (funziona solo via tastiera Ctrl+V).
*   **Analisi Tecnica:** Electron disabilita i menu contestuali nativi nelle app pacchettizzate. Non è presente un handler per l'evento `context-menu` sui `webContents`.
*   **Soluzione Proposta:**
    *   Implementare un listener `context-menu` in `electron/main.ts`.
    *   Generare un menu dinamico usando `Menu.buildFromTemplate` con i ruoli standard (`copy`, `paste`, `cut`, `selectall`) quando il focus è su un elemento editabile.

---

## 2. Miglioramenti Cross-Platform

### 2.1 Integrazione nativa Linux
*   **Stato:** 🔲 Da valutare
*   **Descrizione:** Verificare se altre scorciatoie o comportamenti standard (es. chiusura nella tray) necessitano di affinamenti specifici per i desktop environment Linux (Cinnamon, GNOME, KDE).

---
*Documento creato il 1 aprile 2026 a seguito di segnalazione utente.*
