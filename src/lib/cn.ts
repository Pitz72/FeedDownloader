import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * tailwind-merge conosce solo le taglie di testo standard. Una taglia nostra
 * (`text-md`) verrebbe scambiata per un colore e, accanto a `text-fg`, una delle
 * due sparirebbe in silenzio (la trappola già incontrata in Titan). Qui gli si
 * dicono la scala tipografica e i colori di src/theme/palette.css.
 */
const twMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            'font-size': [{ text: ['xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl'] }],
        },
    },
});

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}
