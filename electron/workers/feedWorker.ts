/**
 * M9 — feed-parsing utility process.
 *
 * Fetching and XML-parsing a feed (up to 15 MB × 20 paginated pages) is CPU-heavy
 * and was running on the Electron main thread, stalling IPC and download-progress
 * events on large feeds. This runs the exact same `FeedService.parseFeed` in a
 * separate Electron `utilityProcess`, so the main thread stays responsive.
 *
 * The main process talks to it through `FeedParserPool`, which transparently
 * falls back to in-process parsing if this worker ever fails to spawn.
 */
import { FeedService } from '../services/FeedService';

// `process.parentPort` only exists inside a utilityProcess and isn't on the
// Node process type — cast to Electron's ParentPort.
const parentPort = (process as unknown as { parentPort: Electron.ParentPort }).parentPort;

const feedService = new FeedService();

interface ParseRequest {
  id: number;
  url: string;
  conditional?: { etag?: string; lastModified?: string };
}

parentPort.on('message', (e: Electron.MessageEvent) => {
  const req = e.data as ParseRequest;
  feedService
    .parseFeed(req.url, req.conditional)
    .then((feed) => {
      parentPort.postMessage({ id: req.id, ok: true, feed });
    })
    .catch((err: unknown) => {
      parentPort.postMessage({ id: req.id, ok: false, error: (err as Error).message });
    });
});
