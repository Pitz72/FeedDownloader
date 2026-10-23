import { motion, useReducedMotionConfig } from 'framer-motion';
import { RU_KNOBS, RU_TRACKS, RU_VIEWBOX, RU_WORDMARK } from './runtimeUtilitiesLogo.data';

interface Props {
    className?: string;
    /** Nome accessibile. Stringa vuota = decorativo, nascosto ai lettori di schermo. */
    title?: string;
    /** Ritardo in secondi dell'entrata dei cursori; assente = logo fermo. */
    animateDelay?: number;
}

/** Metà corsa del cursore (guida da 6 a 94, cursore alto 12): da qui scivola al suo posto. */
const KNOB_MID = 44;

/**
 * Il marchio Runtime Utilities, monocromatico: prende il colore del testo intorno
 * (`currentColor`), quindi segue il tema e la modalità a contrasto elevato di Windows.
 *
 * Con `animateDelay` i quattro cursori partono da metà corsa e scivolano nella loro
 * posizione, uno dopo l'altro: un mixer che si regola. Chi chiede meno movimento
 * vede il logo già fermo.
 */
export function RuntimeUtilitiesLogo({ className, title = 'Runtime Utilities', animateDelay }: Props) {
    const reduce = useReducedMotionConfig();
    const animated = animateDelay !== undefined && !reduce;

    return (
        <svg
            viewBox={RU_VIEWBOX}
            fill="currentColor"
            className={className}
            role={title ? 'img' : undefined}
            aria-label={title || undefined}
            aria-hidden={title ? undefined : true}
            focusable="false"
        >
            {RU_WORDMARK.map((p, i) => <path key={i} d={p.d} transform={p.transform} />)}
            {RU_TRACKS.map((r, i) => <rect key={i} {...r} />)}
            {RU_KNOBS.map((r, i) => animated ? (
                <motion.g
                    key={i}
                    initial={{ y: KNOB_MID - r.y }}
                    animate={{ y: 0 }}
                    transition={{ delay: animateDelay + i * 0.09, type: 'spring', stiffness: 120, damping: 14 }}
                >
                    <rect {...r} />
                </motion.g>
            ) : <rect key={i} {...r} />)}
        </svg>
    );
}
