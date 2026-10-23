import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';

/** Gli stessi gradini del main process (ipc.ts, ZOOM_STEPS): 80% … 180%. */
// eslint-disable-next-line react-refresh/only-export-components
export const ZOOM_OPTIONS = [0.8, 0.9, 1, 1.1, 1.25, 1.4, 1.6, 1.8];

interface UiPreferences {
    zoom: number;
    setZoom: (zoom: number) => void;
    reduceMotion: boolean;
    setReduceMotion: (reduce: boolean) => void;
    /** Le preferenze salvate sono arrivate dal main process: chi anima all'apertura
     *  (la schermata d'ingresso) aspetta questo. */
    ready: boolean;
}

const Ctx = createContext<UiPreferences | null>(null);

/**
 * Preferenze di accessibilità dell'interfaccia (standard Titan).
 *
 * - **Ingrandimento**: vive nel main process (zoom di Chromium, salvato nel
 *   database); qui si legge e si segue, anche quando cambia da tastiera (Ctrl + / −).
 * - **Riduci animazioni**: si somma alla preferenza del sistema operativo, che vale comunque.
 */
export function UiPreferencesProvider({ children }: { children: React.ReactNode }) {
    const [zoom, setZoomState] = useState(1);
    const [reduceMotion, setReduceMotionState] = useState(false);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        window.api.getUiZoom().then(z => setZoomState(z || 1)).catch(() => { });
        window.api.getReduceMotion()
            .then(enabled => setReduceMotionState(!!enabled))
            .catch(() => { })
            .finally(() => setReady(true));
        return window.api.onUiZoomChanged(z => setZoomState(z));
    }, []);

    useEffect(() => {
        document.body.classList.toggle('reduce-motion', reduceMotion);
    }, [reduceMotion]);

    const setZoom = useCallback((value: number) => {
        setZoomState(value);
        window.api.setUiZoom(value).then(setZoomState).catch(() => { });
    }, []);

    const setReduceMotion = useCallback((value: boolean) => {
        setReduceMotionState(value);
        window.api.setReduceMotion(value).catch(() => { });
    }, []);

    return (
        <Ctx.Provider value={{ zoom, setZoom, reduceMotion, setReduceMotion, ready }}>
            {/* framer-motion segue la preferenza del sistema; con l'interruttore acceso, sempre ridotto */}
            <MotionConfig reducedMotion={reduceMotion ? 'always' : 'user'}>
                {children}
            </MotionConfig>
        </Ctx.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUiPreferences(): UiPreferences {
    const ctx = useContext(Ctx);
    if (!ctx) throw new Error('useUiPreferences must be used within UiPreferencesProvider');
    return ctx;
}
