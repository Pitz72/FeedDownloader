import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock node-id3 so no real file is touched, and axios so no cover is fetched.
vi.mock('node-id3', () => ({ default: { write: vi.fn() } }));
vi.mock('axios', () => ({ default: { get: vi.fn() } }));

import NodeID3 from 'node-id3';
import { writeId3Tags } from '../electron/utils/writeId3Tags';

const writeMock = (NodeID3 as unknown as { write: ReturnType<typeof vi.fn> }).write;

describe('writeId3Tags', () => {
    beforeEach(() => writeMock.mockClear());

    it('is a no-op for non-.mp3 files', async () => {
        await writeId3Tags('/tmp/episode.m4a', { title: 'T', podcastTitle: 'P' });
        expect(writeMock).not.toHaveBeenCalled();
    });

    it('writes title/artist/album for an .mp3', async () => {
        await writeId3Tags('/tmp/episode.mp3', { title: 'Ep 1', podcastTitle: 'My Show' });
        expect(writeMock).toHaveBeenCalledTimes(1);
        const [tags, filePath] = writeMock.mock.calls[0];
        expect(filePath).toBe('/tmp/episode.mp3');
        expect(tags).toMatchObject({ title: 'Ep 1', artist: 'My Show', album: 'My Show' });
    });

    it('derives the year from pubDate', async () => {
        await writeId3Tags('/tmp/e.mp3', { title: 'T', podcastTitle: 'P', pubDate: '2021-05-01T00:00:00Z' });
        expect(writeMock.mock.calls[0][0].year).toBe('2021');
    });

    it('omits the year when pubDate is absent', async () => {
        await writeId3Tags('/tmp/e.mp3', { title: 'T', podcastTitle: 'P' });
        expect(writeMock.mock.calls[0][0].year).toBeUndefined();
    });

    it('is case-insensitive on the extension', async () => {
        await writeId3Tags('/tmp/E.MP3', { title: 'T', podcastTitle: 'P' });
        expect(writeMock).toHaveBeenCalledTimes(1);
    });
});
