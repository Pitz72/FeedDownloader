import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock node-id3 so no real file is touched, and axios so no cover is fetched.
vi.mock('node-id3', () => ({
    default: {
        Promise: { update: vi.fn(async () => true), read: vi.fn(async () => ({})) },
    },
}));
vi.mock('axios', () => ({ default: { get: vi.fn() } }));

import NodeID3 from 'node-id3';
import axios from 'axios';
import { writeId3Tags } from '../electron/utils/writeId3Tags';

const id3 = NodeID3 as unknown as { Promise: { update: ReturnType<typeof vi.fn>; read: ReturnType<typeof vi.fn> } };
const updateMock = id3.Promise.update;
const readMock = id3.Promise.read;
const getMock = (axios as unknown as { get: ReturnType<typeof vi.fn> }).get;

describe('writeId3Tags', () => {
    beforeEach(() => {
        updateMock.mockClear();
        readMock.mockReset();
        readMock.mockResolvedValue({});
        getMock.mockReset();
    });

    it('is a no-op for non-.mp3 files', async () => {
        await writeId3Tags('/tmp/episode.m4a', { title: 'T', podcastTitle: 'P' });
        expect(updateMock).not.toHaveBeenCalled();
    });

    it('merges title/artist/album into an .mp3 (update, not write)', async () => {
        await writeId3Tags('/tmp/episode.mp3', { title: 'Ep 1', podcastTitle: 'My Show' });
        expect(updateMock).toHaveBeenCalledTimes(1);
        const [tags, filePath] = updateMock.mock.calls[0];
        expect(filePath).toBe('/tmp/episode.mp3');
        expect(tags).toMatchObject({ title: 'Ep 1', artist: 'My Show', album: 'My Show' });
    });

    it('derives the year from pubDate', async () => {
        await writeId3Tags('/tmp/e.mp3', { title: 'T', podcastTitle: 'P', pubDate: '2021-05-01T12:00:00Z' });
        expect(updateMock.mock.calls[0][0].year).toBe('2021');
    });

    it('omits the year when pubDate is absent', async () => {
        await writeId3Tags('/tmp/e.mp3', { title: 'T', podcastTitle: 'P' });
        expect(updateMock.mock.calls[0][0].year).toBeUndefined();
    });

    it('omits the year when pubDate is unparsable (no "NaN" tag)', async () => {
        await writeId3Tags('/tmp/e.mp3', { title: 'T', podcastTitle: 'P', pubDate: 'not a date' });
        expect(updateMock.mock.calls[0][0].year).toBeUndefined();
    });

    it('is case-insensitive on the extension', async () => {
        await writeId3Tags('/tmp/E.MP3', { title: 'T', podcastTitle: 'P' });
        expect(updateMock).toHaveBeenCalledTimes(1);
    });

    it('keeps the cover already embedded by the publisher', async () => {
        readMock.mockResolvedValue({ image: { mime: 'image/png' } });
        await writeId3Tags('/tmp/e.mp3', { title: 'T', podcastTitle: 'P', feedImageUrl: 'https://example.com/c.jpg' });
        expect(getMock).not.toHaveBeenCalled();
        expect(updateMock.mock.calls[0][0].image).toBeUndefined();
    });

    it('adds the feed cover when the file has none', async () => {
        getMock.mockResolvedValue({ data: new ArrayBuffer(4), headers: { 'content-type': 'image/jpeg' } });
        await writeId3Tags('/tmp/e.mp3', { title: 'T', podcastTitle: 'P', feedImageUrl: 'https://example.com/c.jpg' });
        expect(getMock).toHaveBeenCalledTimes(1);
        expect(updateMock.mock.calls[0][0].image).toMatchObject({ mime: 'image/jpeg' });
    });
});
