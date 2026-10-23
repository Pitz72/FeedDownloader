import React from 'react'
import ReactDOM from 'react-dom/client'
// Font inclusi nell'applicazione (OFL-1.1), bundlati da Vite: niente rete all'avvio.
import '@fontsource-variable/inter/wght.css'
import '@fontsource-variable/fira-code/wght.css'
import './index.css'
import './i18n'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
