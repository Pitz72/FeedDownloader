/// <reference types="vite/client" />

declare global {
    const __APP_VERSION__: string;
    interface Window {
        // v1.6.0: derived from the object the preload exposes — one definition,
        // no hand-maintained copy that can drift from the real bridge.
        api: import('../electron/preload').Api;
    }
}

export {};
