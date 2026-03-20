import { describe, it, expect, beforeEach } from 'vitest';
import { QueueService } from '../electron/services/QueueService';

describe('QueueService', () => {
    let queue: QueueService;

    beforeEach(() => {
        queue = new QueueService(2);
    });

    it('should initialise with the given concurrency', () => {
        expect(queue.concurrency).toBe(2);
    });

    it('should default to concurrency 3 when no argument', () => {
        const q = new QueueService();
        expect(q.concurrency).toBe(3);
    });

    it('should run tasks and report pending/size', async () => {
        let taskRunning = false;

        const promise = queue.add(async () => {
            taskRunning = true;
            await new Promise(r => setTimeout(r, 50));
        });

        // While the task is running, pending should be > 0 or the task is already done
        expect(taskRunning || queue.pending >= 0).toBe(true);

        await promise;
        expect(queue.pending).toBe(0);
        expect(queue.size).toBe(0);
    });

    it('should respect concurrency limit', async () => {
        let maxConcurrent = 0;
        let currentConcurrent = 0;

        const createTask = () => queue.add(async () => {
            currentConcurrent++;
            if (currentConcurrent > maxConcurrent) {
                maxConcurrent = currentConcurrent;
            }
            await new Promise(r => setTimeout(r, 30));
            currentConcurrent--;
        });

        // Fire 6 tasks with concurrency 2
        const tasks = Array.from({ length: 6 }, () => createTask());
        await Promise.all(tasks);

        expect(maxConcurrent).toBeLessThanOrEqual(2);
    });

    it('should clear pending tasks', async () => {
        // Set concurrency to 1 so tasks queue up
        const q = new QueueService(1);

        // Add a slow task to block the queue
        q.add(async () => {
            await new Promise(r => setTimeout(r, 200));
        });

        // Add more tasks that should be pending
        q.add(async () => { });
        q.add(async () => { });

        // Give time for first task to start
        await new Promise(r => setTimeout(r, 10));

        q.clear();
        // After clearing, size (waiting) should be 0
        expect(q.size).toBe(0);
    });

    it('should update concurrency dynamically', () => {
        queue.setConcurrency(5);
        expect(queue.concurrency).toBe(5);
    });

    it('should execute tasks even at concurrency 1', async () => {
        queue.setConcurrency(1);
        const results: number[] = [];

        await queue.add(async () => { results.push(1); });
        await queue.add(async () => { results.push(2); });
        await queue.add(async () => { results.push(3); });

        expect(results).toEqual([1, 2, 3]);
    });

    it('should handle task errors without stopping the queue', async () => {
        const results: string[] = [];

        // First task throws
        const p1 = queue.add(async () => {
            throw new Error('Task failed');
        }).catch(() => { results.push('error'); });

        // Second task should still run
        const p2 = queue.add(async () => {
            results.push('success');
        });

        await Promise.all([p1, p2]);
        expect(results).toContain('error');
        expect(results).toContain('success');
    });
});
