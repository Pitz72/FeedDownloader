/**
 * Collegamenti esterni dell'applicazione (standard Titan).
 *
 * Passano tutti da `window.api.openExternal`, che accetta solo https su una
 * lista chiusa di host e apre nel browser di sistema.
 */

/** Donazione libera a sostegno del progetto. */
export const DONATE_URL = 'https://www.paypal.com/paypalme/runtimeradio';

/** Pagina contatti dell'autore. */
export const CONTACT_URL = 'https://simonepizzi.runtimeradio.it/contatti';

/** Codice sorgente del progetto. */
export const SOURCE_URL = 'https://github.com/Pitz72/FeedDownloader';

/** Segnalazioni e richieste. */
export const ISSUES_URL = 'https://github.com/Pitz72/FeedDownloader/issues';

export function openLink(url: string): void {
    void window.api.openExternal(url);
}
