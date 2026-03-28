import { access, constants } from 'fs/promises';
import type { PathValidationResult } from '../../shared/types';

function detectNetworkPath(dirPath: string): boolean {
    // Windows UNC paths: \\server\share or //server/share
    return dirPath.startsWith('\\\\') || dirPath.startsWith('//');
}

/**
 * Validates that a directory path exists and is writable.
 * Handles network paths (UNC) with an 8-second timeout to avoid hanging on unreachable shares.
 */
export async function validateNetworkPath(dirPath: string): Promise<PathValidationResult> {
    const isNetworkPath = detectNetworkPath(dirPath);

    try {
        await Promise.race([
            access(dirPath, constants.W_OK),
            new Promise<never>((_, reject) =>
                setTimeout(() => reject(new Error('TIMEOUT')), 8000)
            ),
        ]);
        return { ok: true, isNetworkPath };
    } catch (err) {
        const msg = (err as Error).message;
        return {
            ok: false,
            isNetworkPath,
            error: msg === 'TIMEOUT' ? 'TIMEOUT' : 'NOT_WRITABLE',
        };
    }
}
