import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(here, '..', '..')
const { version } = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf-8'))

/**
 * Anteprima dell'interfaccia nel browser (standard Titan): `npm run preview:ui`,
 * poi http://localhost:5198
 *
 * Niente plugin di Electron: la pagina monta l'app vera con un `window.api`
 * finto (mock-api.ts). Parametri utili: ?empty (libreria vuota), ?skipintro
 * (salta la schermata d'ingresso), ?reduce (animazioni ridotte), ?offline,
 * ?pending (download interrotti dalla sessione precedente), ?whatsnew.
 */
export default defineConfig({
    root: here,
    cacheDir: path.join(root, 'node_modules/.vite-ui-preview'),
    plugins: [react()],
    css: { postcss: root },
    define: { __APP_VERSION__: JSON.stringify(`${version}-preview`) },
    resolve: { dedupe: ['react', 'react-dom'] },
    publicDir: path.join(root, 'public'),
    server: { port: 5198, strictPort: true, fs: { allow: [root] } },
})
