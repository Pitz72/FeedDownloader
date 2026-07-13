import { app, BrowserWindow, Tray, Menu, screen, shell, dialog } from 'electron'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { registerIpcHandlers, initServices, cleanup } from './ipc'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = path.join(__dirname, '..')

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST

let win: BrowserWindow | null
let tray: Tray | null = null

// M18: distinguish "user closed the window" (→ hide to tray, keep running so the
// background refresh N2 can keep polling) from "app is really quitting" (tray
// Quit, app.quit(), OS shutdown). Only a real quit lets the window close.
let isQuitting = false
app.on('before-quit', () => { isQuitting = true; })

// S8: two instances would open the same SQLite file (intermittent "database is
// locked" errors, duplicate tray icons, timers and downloads). Re-launching the
// app must focus the existing window instead.
const hasSingleInstanceLock = app.requestSingleInstanceLock();
if (!hasSingleInstanceLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (win) {
      if (win.isMinimized()) win.restore();
      win.show();
      win.focus();
    }
  });
}

const icon = path.join(process.env.VITE_PUBLIC, 'logo.png');

// Fix for Windows Taskbar Icon
if (process.platform === 'win32') {
  app.setAppUserModelId("com.runtime.feeddownloader.pro");
}

// A3: Wayland auto-detection — makes the app work on both X11 and Wayland
// without this, the app forces X11 mode (via XWayland) on Wayland sessions
if (process.platform === 'linux') {
  app.commandLine.appendSwitch('ozone-platform-hint', 'auto');
}

// tray icon: Windows/Linux only, macOS uses dock
function createTray() {
  try {
    // On Windows use .ico for reliable tray rendering; PNG works on Linux
    const trayIcon = process.platform === 'win32'
      ? path.join(process.env.VITE_PUBLIC!, 'icon.ico')
      : icon;
    tray = new Tray(trayIcon);
  } catch (err) {
    console.error('[Tray] Failed to create system tray icon:', err);
    if (process.platform === 'linux') {
      console.warn('[Tray] On GNOME, install the AppIndicator extension: https://extensions.gnome.org/extension/615/');
    }
    tray = null;
    return;
  }
  tray.setToolTip('Runtime FeedDownloader Pro');

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show',
      click: () => {
        win?.show();
        win?.focus();
      },
    },
    { type: 'separator' },
    {
      label: 'Quit',
      click: () => {
        app.quit();
      },
    },
  ]);

  tray.setContextMenu(contextMenu);

  // Left-click toggles window visibility
  // A3: some Linux DEs (certain GNOME+extension setups) fire double-click instead of click
  const toggleWindow = () => {
    if (win?.isVisible()) {
      win.hide();
    } else {
      win?.show();
      win?.focus();
    }
  };
  tray.on('click', toggleWindow);
  if (process.platform === 'linux') {
    tray.on('double-click', toggleWindow);
  }
}

function createWindow() {
  win = new BrowserWindow({
    title: "Runtime FeedDownloader Pro",
    icon,
    backgroundColor: '#0b1120', // Matches Tailwind bg-background (approx)
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    ...(process.platform === 'darwin' ? { titleBarStyle: 'hidden', trafficLightPosition: { x: 16, y: 14 } } : {}),
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      nodeIntegration: false,
      contextIsolation: true,
      // sandbox stays false because the preload is bundled as ESM (preload.mjs);
      // Electron sandboxed preloads must be CommonJS. Enabling sandbox requires
      // migrating the preload build to CJS first. (B9)
      sandbox: false,
      webSecurity: true,
    },
  })

  // Prevent permission requests (GPS, Notifications, etc.) — request + check.
  const denyPermission = () => false;
  win.webContents.session.setPermissionRequestHandler((_webContents, permission, callback) => {
    console.log(`Blocked permission request: ${permission}`);
    return callback(false);
  });
  win.webContents.session.setPermissionCheckHandler(denyPermission);

  // B8: navigation hardening. The app is a single fixed document; deny opening
  // new windows and navigating away. http(s) links (e.g. from feed content) are
  // routed to the system browser instead.
  const openExternal = (url: string) => {
    if (/^https?:\/\//i.test(url)) shell.openExternal(url).catch(() => { });
  };
  win.webContents.setWindowOpenHandler(({ url }) => {
    openExternal(url);
    return { action: 'deny' };
  });
  win.webContents.on('will-navigate', (event, url) => {
    const base = VITE_DEV_SERVER_URL ?? 'file://';
    if (!url.startsWith(base)) {
      event.preventDefault();
      openExternal(url);
    }
  });

  // B8: Content-Security-Policy. Applied only to packaged builds — the Vite dev
  // server needs inline/eval and a websocket for HMR. Allows Google Fonts (used
  // via @import in index.css) and remote feed images.
  if (!VITE_DEV_SERVER_URL) {
    const csp = [
      "default-src 'self'",
      "script-src 'self'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' https: data:",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "frame-ancestors 'none'",
    ].join('; ');
    win.webContents.session.webRequest.onHeadersReceived((details, callback) => {
      callback({
        responseHeaders: {
          ...details.responseHeaders,
          'Content-Security-Policy': [csp],
        },
      });
    });
  }

  registerIpcHandlers(win);

  // A2: context menu (cut/copy/paste/select-all) on right-click in input fields
  win.webContents.on('context-menu', (_event, params) => {
    const template: Electron.MenuItemConstructorOptions[] = [];
    if (params.isEditable) {
      template.push(
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { type: 'separator' },
        { role: 'selectAll' },
      );
    } else if (params.selectionText) {
      template.push({ role: 'copy' });
    }
    if (template.length > 0) {
      Menu.buildFromTemplate(template).popup({ window: win! });
    }
  });

  // M18: the X (or Alt+F4) hides the window into the system tray instead of
  // quitting — but only when a tray icon actually exists to bring it back.
  // Without a tray (creation failed, or a headless/edge Linux DE) closing must
  // still quit, otherwise the app becomes an unreachable ghost process.
  win.on('close', (event) => {
    if (!isQuitting && tray && !win?.isDestroyed()) {
      event.preventDefault();
      win?.hide();
    }
  });

  // Show window when ready to avoid flickering
  win.once('ready-to-show', () => {
    // A1: on Linux the WM may place the window on a secondary monitor — force primary first
    if (process.platform === 'linux') {
      const { x, y } = screen.getPrimaryDisplay().workArea;
      win?.setPosition(x, y);
    }
    win?.maximize();
    win?.show();
  });

  // Safety net: if renderer fails to load, show window anyway to prevent ghost process
  win.webContents.on('did-fail-load', () => {
    win?.show();
  });


  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    win.loadFile(path.join(RENDERER_DIST, 'index.html'))
  }
}

// L4: stop the auto-refresh timer and close the database before the process exits.
app.on('will-quit', () => {
  cleanup();
});

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  } else {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.whenReady().then(() => {
  if (!hasSingleInstanceLock) return; // quitting — don't open a second DB/window

  // S4: opening the DB can fail (corrupted file survives the built-in recovery
  // only if userData itself is unwritable). Fail with a message, not a silent
  // crash before any window exists.
  let dbRecovered = false;
  try {
    dbRecovered = initServices().recovered;
  } catch (err) {
    dialog.showErrorBox(
      'Runtime FeedDownloader Pro',
      `The application database could not be opened.\n\n${(err as Error).message}\n\nCheck that the folder "${app.getPath('userData')}" is writable, then restart the app.`
    );
    app.quit();
    return;
  }

  createWindow();
  if (process.platform !== 'darwin') {
    createTray();
  }

  if (dbRecovered) {
    win?.once('ready-to-show', () => {
      dialog.showMessageBox(win!, {
        type: 'warning',
        title: 'Runtime FeedDownloader Pro',
        message: 'The application database was damaged and has been reset.',
        detail: 'Your audio files are untouched. The damaged database was kept next to the new one with a ".corrupt-" suffix. Feeds and download history need to be re-added.',
      }).catch(() => { });
    });
  }
});
