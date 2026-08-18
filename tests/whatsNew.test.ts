import { describe, it, expect } from 'vitest';
import { evaluateWhatsNew } from '../electron/utils/whatsNew';

describe('evaluateWhatsNew (Titan consume-whats-new pattern)', () => {
    it('fresh install (no previous, empty library) → no changelog', () => {
        expect(evaluateWhatsNew(null, '1.5.0', true)).toBe(false);
    });

    it('upgrade from a version that predates the marker (no previous, NON-empty library) → show', () => {
        // The 1.3.x→1.4.x bug: localStorage had no previous version and stayed
        // silent. The library vouches for the existing user instead.
        expect(evaluateWhatsNew(null, '1.4.2', false)).toBe(true);
    });

    it('same version already seen → no changelog', () => {
        expect(evaluateWhatsNew('1.5.0', '1.5.0', false)).toBe(false);
        expect(evaluateWhatsNew('1.5.0', '1.5.0', true)).toBe(false);
    });

    it('normal upgrade with stored previous version → show', () => {
        expect(evaluateWhatsNew('1.4.2', '1.5.0', false)).toBe(true);
        // even with an empty library: the stored marker alone proves the user existed
        expect(evaluateWhatsNew('1.4.2', '1.5.0', true)).toBe(true);
    });

    it('downgrade (previous ahead of current) still shows — version changed', () => {
        expect(evaluateWhatsNew('1.6.0', '1.5.0', false)).toBe(true);
    });
});
