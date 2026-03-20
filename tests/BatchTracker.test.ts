import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { BatchTracker } from '../electron/services/BatchTracker';

describe('BatchTracker', () => {
    let tracker: BatchTracker;

    beforeEach(() => {
        vi.useFakeTimers();
        tracker = new BatchTracker();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    // ── Initial State ────────────────────────────────────────────
    it('should start with zero counters and inactive', () => {
        expect(tracker.total).toBe(0);
        expect(tracker.completed).toBe(0);
        expect(tracker.active).toBe(false);
        expect(tracker.sealed).toBe(false);
    });

    // ── track() ──────────────────────────────────────────────────
    it('should increment total and activate on track()', () => {
        tracker.track();
        expect(tracker.total).toBe(1);
        expect(tracker.active).toBe(true);
        expect(tracker.sealed).toBe(false);
    });

    it('should accumulate total across multiple track() calls', () => {
        tracker.track();
        tracker.track();
        tracker.track();
        expect(tracker.total).toBe(3);
    });

    it('should NOT be sealed immediately after track()', () => {
        tracker.track();
        expect(tracker.sealed).toBe(false);
    });

    it('should become sealed after SEAL_DELAY_MS (200ms)', () => {
        tracker.track();
        vi.advanceTimersByTime(199);
        expect(tracker.sealed).toBe(false);
        vi.advanceTimersByTime(1);
        expect(tracker.sealed).toBe(true);
    });

    it('should reset the seal timer on each track() call', () => {
        tracker.track();
        vi.advanceTimersByTime(150); // 150ms after first track()
        tracker.track(); // resets the timer
        vi.advanceTimersByTime(150); // 150ms after second track() — only 150ms, not sealed yet
        expect(tracker.sealed).toBe(false);
        vi.advanceTimersByTime(50); // now 200ms after second track()
        expect(tracker.sealed).toBe(true);
    });

    // ── complete() ───────────────────────────────────────────────
    it('should return null when batch is NOT sealed', () => {
        tracker.track();
        const result = tracker.complete();
        expect(result).toBeNull();
    });

    it('should return null when sealed but NOT all completed', () => {
        tracker.track();
        tracker.track();
        tracker.track();
        vi.advanceTimersByTime(200); // sealed
        tracker.complete(); // 1 of 3
        const result = tracker.complete(); // 2 of 3
        expect(result).toBeNull();
    });

    it('should return total when sealed AND all completed', () => {
        tracker.track();
        tracker.track();
        tracker.track();
        vi.advanceTimersByTime(200); // sealed
        tracker.complete(); // 1
        tracker.complete(); // 2
        const result = tracker.complete(); // 3 — done!
        expect(result).toBe(3);
    });

    it('should auto-reset after returning total', () => {
        tracker.track();
        vi.advanceTimersByTime(200);
        tracker.complete();
        expect(tracker.total).toBe(0);
        expect(tracker.completed).toBe(0);
        expect(tracker.active).toBe(false);
    });

    // ── RACE CONDITION SCENARIO ──────────────────────────────────
    // This is the exact bug that existed before v0.4.2:
    // Downloads complete BEFORE all are queued.
    it('should NOT fire premature completion when downloads finish before all are queued', () => {
        // Simulate: user clicks "Download All" for 5 episodes
        // but downloads are queued one-by-one via IPC

        // First download queued
        tracker.track();
        // First download completed rapidly (before others are even queued!)
        const prematureResult = tracker.complete();
        expect(prematureResult).toBeNull(); // 🚫 Must NOT trigger notification

        // Remaining downloads queued
        tracker.track();
        tracker.track();
        tracker.track();
        tracker.track();

        // Seal after burst is done
        vi.advanceTimersByTime(200);

        // Remaining downloads complete
        tracker.complete(); // 2
        tracker.complete(); // 3
        tracker.complete(); // 4
        const finalResult = tracker.complete(); // 5 — now all done
        expect(finalResult).toBe(5);
    });

    it('should handle interleaved track/complete without false positives', () => {
        // Simulate concurrency 3: some finish while others are still being queued
        tracker.track();
        tracker.track();
        tracker.track();
        tracker.complete(); // 1 finishes
        tracker.track(); // 4th is queued
        tracker.complete(); // 2 finishes
        tracker.track(); // 5th is queued

        // Not sealed yet — timer resets with each track()
        expect(tracker.sealed).toBe(false);

        vi.advanceTimersByTime(200); // sealed
        tracker.complete(); // 3
        tracker.complete(); // 4
        const result = tracker.complete(); // 5
        expect(result).toBe(5);
    });

    // ── reset() ──────────────────────────────────────────────────
    it('should fully reset all state', () => {
        tracker.track();
        tracker.track();
        tracker.complete();
        tracker.reset();
        expect(tracker.total).toBe(0);
        expect(tracker.completed).toBe(0);
        expect(tracker.active).toBe(false);
        expect(tracker.sealed).toBe(false);
    });

    it('should cancel pending seal timer on reset()', () => {
        tracker.track();
        tracker.reset();
        vi.advanceTimersByTime(500);
        expect(tracker.sealed).toBe(false); // timer was cancelled
    });

    // ── Single download ──────────────────────────────────────────
    it('should work correctly for a single download', () => {
        tracker.track();
        vi.advanceTimersByTime(200);
        const result = tracker.complete();
        expect(result).toBe(1);
    });

    // ── Second batch after first completes ────────────────────────
    it('should handle a second batch after the first completes', () => {
        // First batch (2 downloads)
        tracker.track();
        tracker.track();
        vi.advanceTimersByTime(200);
        tracker.complete();
        const r1 = tracker.complete();
        expect(r1).toBe(2);

        // Second batch (3 downloads) — tracker auto-reset
        tracker.track();
        tracker.track();
        tracker.track();
        vi.advanceTimersByTime(200);
        tracker.complete();
        tracker.complete();
        const r2 = tracker.complete();
        expect(r2).toBe(3);
    });
});
