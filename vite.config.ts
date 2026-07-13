import { defineConfig } from 'vite'
import path from 'node:path'
import { readFileSync } from 'node:fs'
import electron from 'vite-plugin-electron/simple'
import react from '@vitejs/plugin-react'

const { version } = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf-8'))

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
  plugins: [
    react(),
    electron({
      main: {
        // Shortcut of `build.lib.entry`. M9: a second entry (feedWorker) is
        // emitted alongside main.js into dist-electron so it can be forked as a
        // utility process for off-main-thread feed parsing.
        entry: {
          main: 'electron/main.ts',
          feedWorker: 'electron/workers/feedWorker.ts',
        },
        vite: {
          build: {
            rollupOptions: {
              // Native modules must NOT be bundled — they load .node files at runtime
              external: ['better-sqlite3'],
            },
          },
        },
      },
      preload: {
        // Shortcut of `build.rollupOptions.input`.
        // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
        input: path.join(__dirname, 'electron/preload.ts'),
        vite: {
          build: {
            rollupOptions: {
              output: {
                // Output as ESM to match the .mjs extension (package.json "type":"module")
                // Avoids "require is not defined in ES module scope" at runtime
                format: 'es',
              },
            },
          },
        },
      },
      // Ployfill the Electron and Node.js API for Renderer process.
      // If you want use Node.js in Renderer process, the `nodeIntegration` needs to be enabled in the Main process.
      // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
      renderer: process.env.NODE_ENV === 'test'
        // https://github.com/electron-vite/vite-plugin-electron-renderer/issues/78#issuecomment-2053600808
        ? undefined
        : {},
    }),
  ],
})
