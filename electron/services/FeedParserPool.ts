import { utilityProcess, type UtilityProcess } from 'electron';
import { FeedService } from './FeedService';

/**
 * M9 — routes feed parsing to a background `utilityProcess` (see feedWorker.ts)
 * so the CPU-heavy XML parse of large, paginated feeds doesn't stall the main
 * thread.
 *
 * Safety net: if the worker can't be spawned, exits, or times out, parsing
 * transparently falls back to running `FeedService.parseFeed` in-process — the
 * exact behaviour before v1.4.0 — so a worker problem can never break the app.
 * Real parse errors returned by the worker (invalid feed, network failure) are
 * propagated as-is and do NOT trigger a wasteful in-process retry.
 */

type Settle =
  | { kind: 'ok'; feed: unknown }
  | { kind: 'parse-error'; error: string }
  | { kind: 'infra' };

interface WorkerMessage {
  id: number;
  ok: boolean;
  feed?: unknown;
  error?: string;
}

// A legitimate parse of a large RFC 5005 feed can take a while: up to
// FeedService.MAX_PAGES (20) pages at a 15s HTTP timeout each. The old 60s cap
// mistook such a slow-but-progressing parse for a hung worker and fell back
// in-process — fetching the whole feed a SECOND time on the main thread. Cover
// the realistic worst case so only a genuinely stuck worker trips the fallback.
const REQUEST_TIMEOUT_MS = 5 * 60_000;

// After this many consecutive fork/immediate-crash failures with no successful
// parse in between, stop trying to spawn the worker and parse in-process for the
// rest of the session — otherwise a worker that dies on startup (missing bundle,
// bad ABI) would be re-forked on every single parse.
const MAX_CONSECUTIVE_CRASHES = 3;

export class FeedParserPool {
  private child: UtilityProcess | null = null;
  private nextId = 1;
  private pending = new Map<number, { settle: (r: Settle) => void; timer: ReturnType<typeof setTimeout> }>();
  private disabled = false;
  private crashCount = 0;
  private readonly fallback = new FeedService();

  constructor(private readonly workerPath: string) {}

  private ensureChild(): UtilityProcess | null {
    if (this.disabled) return null;
    if (this.child) return this.child;
    if (this.crashCount >= MAX_CONSECUTIVE_CRASHES) {
      if (!this.disabled) {
        console.error(`[FeedParserPool] Worker crashed ${this.crashCount}× — falling back to in-process parsing for this session.`);
        this.disabled = true;
      }
      return null;
    }
    try {
      const child = utilityProcess.fork(this.workerPath, [], { serviceName: 'feed-parser' });
      child.on('message', (msg: WorkerMessage) => this.handleMessage(msg));
      child.on('exit', () => {
        this.child = null;
        // A crash while requests were in flight counts toward the crash budget;
        // a clean idle exit (no pending work) does not.
        if (this.pending.size > 0) this.crashCount++;
        // Any in-flight requests can't be answered — mark them as infra failures
        // so their callers fall back in-process.
        for (const [, p] of this.pending) {
          clearTimeout(p.timer);
          p.settle({ kind: 'infra' });
        }
        this.pending.clear();
      });
      this.child = child;
      return child;
    } catch (err) {
      console.error('[FeedParserPool] Could not fork worker — using in-process parsing:', err);
      this.disabled = true;
      return null;
    }
  }

  private handleMessage(msg: WorkerMessage): void {
    const entry = this.pending.get(msg.id);
    if (!entry) return;
    clearTimeout(entry.timer);
    this.pending.delete(msg.id);
    this.crashCount = 0; // the worker answered — it's healthy again
    if (msg.ok) entry.settle({ kind: 'ok', feed: msg.feed });
    else entry.settle({ kind: 'parse-error', error: msg.error ?? 'FAILED_TO_PARSE' });
  }

  /**
   * Parse a feed off the main thread, falling back in-process on worker failure.
   * Mirrors `FeedService.parseFeed`: resolves to the feed object, or null on 304.
   */
  async parse(url: string, conditional?: { etag?: string; lastModified?: string }): Promise<unknown> {
    const child = this.ensureChild();
    if (!child) return this.fallback.parseFeed(url, conditional);

    const result = await new Promise<Settle>((resolve) => {
      const id = this.nextId++;
      const timer = setTimeout(() => {
        this.pending.delete(id);
        resolve({ kind: 'infra' }); // treat a hung worker as an infra failure
      }, REQUEST_TIMEOUT_MS);
      this.pending.set(id, { settle: resolve, timer });
      try {
        child.postMessage({ id, url, conditional });
      } catch (err) {
        clearTimeout(timer);
        this.pending.delete(id);
        console.warn('[FeedParserPool] postMessage failed:', (err as Error).message);
        resolve({ kind: 'infra' });
      }
    });

    if (result.kind === 'ok') return result.feed;
    if (result.kind === 'parse-error') throw new Error(result.error);
    // infra failure → in-process fallback
    return this.fallback.parseFeed(url, conditional);
  }

  dispose(): void {
    this.disabled = true; // don't re-fork after shutdown began
    if (this.child) {
      try { this.child.kill(); } catch { /* already gone */ }
      this.child = null;
    }
    // Settle (not just drop) any in-flight requests, otherwise a parse awaiting
    // the worker at shutdown would hang forever — the exit handler that would
    // have settled them finds an already-cleared map.
    for (const [, p] of this.pending) {
      clearTimeout(p.timer);
      p.settle({ kind: 'infra' });
    }
    this.pending.clear();
  }
}
