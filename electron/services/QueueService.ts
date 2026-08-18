import PQueue from 'p-queue';

export class QueueService {
    private queue: PQueue;

    constructor(concurrency: number = 3) {
        this.queue = new PQueue({ concurrency });
    }

    add(task: () => Promise<void>) {
        return this.queue.add(task);
    }

    get pending() {
        return this.queue.pending;
    }

    get size() {
        return this.queue.size;
    }

    clear() {
        this.queue.clear();
    }

    // v1.5.0 — queue-level pause: pending tasks stay queued but no new task
    // starts until start() is called. Running tasks are not touched here.
    pause() {
        this.queue.pause();
    }

    start() {
        this.queue.start();
    }

    get isPaused() {
        return this.queue.isPaused;
    }

    setConcurrency(n: number) {
        this.queue.concurrency = n;
    }

    get concurrency() {
        return this.queue.concurrency;
    }
}
