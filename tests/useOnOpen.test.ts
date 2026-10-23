import { describe, it, expect, vi, beforeEach } from 'vitest';

// Niente DOM nei test: un React minimo che conserva i ref tra un render e
// l'altro ed esegue l'effetto solo quando cambiano le dipendenze, come React.
const fake = vi.hoisted(() => ({
    refs: [] as { current: unknown }[],
    deps: [] as (unknown[] | undefined)[],
    slot: 0,
}));

vi.mock('react', () => ({
    useRef: (initial: unknown) => {
        const i = fake.slot++;
        fake.refs[i] ??= { current: initial };
        return fake.refs[i];
    },
    useEffect: (fn: () => void, deps: unknown[]) => {
        const i = fake.slot++;
        const prev = fake.deps[i];
        if (!prev || deps.some((d, k) => !Object.is(d, prev[k]))) {
            fake.deps[i] = deps;
            fn();
        }
    },
}));

import { useOnOpen } from '../src/hooks/useOnOpen';

function FakeDialog(open: boolean, onOpen: () => void) {
    fake.slot = 0;
    useOnOpen(open, onOpen);
}

describe('useOnOpen', () => {
    beforeEach(() => { fake.refs = []; fake.deps = []; });

    it('non scatta se la finestra nasce chiusa', () => {
        const onOpen = vi.fn();
        FakeDialog(false, onOpen);
        FakeDialog(false, onOpen);
        expect(onOpen).not.toHaveBeenCalled();
    });

    it('scatta all\'apertura, anche se la finestra nasce aperta', () => {
        const onOpen = vi.fn();
        FakeDialog(true, onOpen);
        expect(onOpen).toHaveBeenCalledTimes(1);
    });

    it('regressione 1.6.0: a fine Verifica il risultato non viene azzerato', () => {
        // Nella 1.6.0 l'azzeramento dipendeva da [open, running] e scattava di
        // nuovo quando running tornava false, cancellando il risultato appena
        // arrivato. Ogni render passa una funzione nuova, come fa il componente.
        let result: string | null = 'vecchio';
        const reset = () => { result = null; };

        FakeDialog(false, () => reset());
        FakeDialog(true, () => reset());   // apertura: si parte puliti
        expect(result).toBeNull();

        FakeDialog(true, () => reset());   // running = true
        result = 'risultato';              // arriva il risultato…
        FakeDialog(true, () => reset());   // …e running torna false
        expect(result).toBe('risultato');
    });

    it('chiudere e riaprire azzera di nuovo', () => {
        const onOpen = vi.fn();
        FakeDialog(true, onOpen);
        FakeDialog(false, onOpen);
        FakeDialog(true, onOpen);
        expect(onOpen).toHaveBeenCalledTimes(2);
    });

    it('una onOpen nuova a finestra aperta (es. cambio lingua) non riapre', () => {
        const first = vi.fn();
        const second = vi.fn();
        FakeDialog(true, first);
        FakeDialog(true, second);
        expect(first).toHaveBeenCalledTimes(1);
        expect(second).not.toHaveBeenCalled();
    });
});
