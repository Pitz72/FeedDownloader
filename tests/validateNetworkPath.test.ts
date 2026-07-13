import { describe, it, expect } from 'vitest';
import { tmpdir } from 'os';
import path from 'path';
import { validateNetworkPath } from '../electron/utils/validateNetworkPath';

describe('validateNetworkPath', () => {
    it('accepts an existing writable local directory', async () => {
        const res = await validateNetworkPath(tmpdir());
        expect(res.ok).toBe(true);
        expect(res.isNetworkPath).toBe(false);
    });

    it('reports NOT_WRITABLE for a non-existent local path', async () => {
        const res = await validateNetworkPath(path.join(tmpdir(), 'does-not-exist-xyz-123'));
        expect(res.ok).toBe(false);
        expect(res.error).toBe('NOT_WRITABLE');
        expect(res.isNetworkPath).toBe(false);
    });

    it('flags a /mnt path as a network path (fails fast, no hang)', async () => {
        const res = await validateNetworkPath('/mnt/definitely-not-mounted-here');
        expect(res.isNetworkPath).toBe(true);
        expect(res.ok).toBe(false);
    });
});
