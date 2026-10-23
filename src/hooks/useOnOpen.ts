import { useEffect, useRef } from 'react';

/**
 * Chiama `onOpen` solo quando una finestra passa da chiusa ad aperta.
 *
 * Un effetto `[open, altroStato]` con `if (open)` scatta anche quando cambia
 * l'altro stato a finestra aperta: nella 1.6.0 la Verifica azzerava così il
 * risultato appena arrivato (al ritorno di `running` a false). Qui il confronto
 * con l'apertura precedente rende innocui i nuovi render e le nuove `onOpen`.
 */
export function useOnOpen(open: boolean, onOpen: () => void): void {
    const wasOpen = useRef(false);
    useEffect(() => {
        if (open && !wasOpen.current) onOpen();
        wasOpen.current = open;
    }, [open, onOpen]);
}
