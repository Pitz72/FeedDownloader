import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'text-summary'],
      // Include the IPC/main/worker/shared layers too, so the coverage number
      // reflects the whole main process rather than overstating it by omitting
      // the largest untested file (electron/ipc.ts).
      include: [
        'electron/**',
        'shared/**',
        'src/store/**',
      ],
    },
  },
});
