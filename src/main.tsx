import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/components.css'
import './i18n';
// Font imports — bundled by Vite so i WOFF2 vengono copiati nel dist
import '@fontsource/epilogue/700.css';
import '@fontsource/epilogue/800.css';
import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/material-symbols-outlined/fill.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Use contextBridge

