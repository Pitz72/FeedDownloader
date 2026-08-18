/**
 * v1.5.0 — Note di rilascio localizzate in-code (standard Titan).
 *
 * Punti salienti per versione, IT + EN (le due lingue dell'app dalla v1.4.2).
 * Il ChangelogModal le mostra al posto del Markdown quando la versione corrente
 * è presente qui; il Markdown (docs/changelog/<version>.md, solo IT) resta come
 * approfondimento e come fallback per le versioni non elencate.
 */

export type ReleaseNotesLang = 'it' | 'en';

export const RELEASE_NOTES: Record<string, Record<ReleaseNotesLang, string[]>> = {
    '1.4.2': {
        it: [
            'L’app ora parla due lingue: italiano e inglese. Le altre sei sono state rimosse.',
            'Annullare un download in coda non blocca più il conteggio del lotto né la notifica di fine.',
            'Dopo uno Stop nessuna riga resta più congelata sullo spinner.',
            'Cambiare feed durante «Sincronizza tutti» non ti riporta più al feed precedente.',
            'Aggiornata la libreria di auto-update: chiusa un’allerta di sicurezza sulle intestazioni.',
            'Rimuovere un episodio dalla cronologia agisce solo sul feed giusto, anche con identificativi condivisi.',
            'I file vengono richiesti non compressi: spariscono i falsi errori di integrità su server mal configurati.',
        ],
        en: [
            'The app now speaks two languages: Italian and English. The other six were removed.',
            'Cancelling a queued download no longer stalls the batch counter or the completion notice.',
            'After a Stop, no row stays frozen on a spinner anymore.',
            'Switching feeds during “Sync all” no longer drags you back to the previous feed.',
            'The auto-update library was upgraded, closing a security advisory about leaked headers.',
            'Removing an episode from history only touches the right feed, even with shared identifiers.',
            'Files are requested uncompressed: false integrity errors on misconfigured servers are gone.',
        ],
    },
    '1.4.1': {
        it: [
            'L’Health Check ora ricalcola davvero lo SHA-256 e segnala i file corrotti, non solo quelli mancanti.',
            'Senza dimensione dichiarata dal server, la barra di download diventa indeterminata invece di restare a 0%.',
            'Con il limite di velocità attivo, la barra segue i byte scritti su disco, non l’arrivo di rete.',
        ],
        en: [
            'Health Check now truly re-computes SHA-256 and flags corrupted files, not just missing ones.',
            'When the server declares no size, the download bar turns indeterminate instead of sitting at 0%.',
            'With a speed limit on, the bar follows bytes written to disk, not the faster network arrival.',
        ],
    },
    '1.4.0': {
        it: [
            'Indicatore di aggiornamento sempre visibile in alto, con «Riavvia e installa» a portata di clic.',
            'I feed si controllano da soli: all’avvio, a cicli regolari e al ritorno della connessione.',
            'Novità di versione e manuali PDF consultabili direttamente dentro l’app.',
            'Chiudere la finestra riduce l’app nel tray; il lavoro in background continua.',
            'Pulizia dei file temporanei .part orfani dalle Impostazioni.',
        ],
        en: [
            'An always-visible update indicator up top, with “Restart and install” one click away.',
            'Feeds check themselves: at startup, on a regular cycle, and when connectivity returns.',
            'Release notes and PDF manuals are now readable right inside the app.',
            'Closing the window minimises to the tray; background work carries on.',
            'Orphaned .part temp files can be cleaned up from Settings.',
        ],
    },
};

/** Notes for `version` in the closest language to `lang`, or null if unknown. */
export function getReleaseNotes(version: string, lang: string): string[] | null {
    const entry = RELEASE_NOTES[version];
    if (!entry) return null;
    const l: ReleaseNotesLang = lang.toLowerCase().startsWith('it') ? 'it' : 'en';
    return entry[l] ?? null;
}
