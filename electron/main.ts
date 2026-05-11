import { app, BrowserWindow, Tray, Menu, screen } from 'electron'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { registerIpcHandlers } from './ipc'

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

const icon = path.join(process.env.VITE_PUBLIC, 'logo.png');

// Fix for Windows Taskbar Icon
if (process.platform === 'win32') {
  app.setAppUserModelId("com.runtime.feeddownloader.pro");
}

// v0.5.0 — Tray icon (Windows / Linux only; macOS uses dock)
function createTray() {
  try {
    // On Windows use .ico for reliable tray rendering; PNG works on Linux
    const trayIcon = process.platform === 'win32'
      ? path.join(process.env.VITE_PUBLIC!, 'icon.ico')
      : icon;
    tray = new Tray(trayIcon);
  } catch (err) {
    console.error('[Tray] Failed to create system tray icon:', err);
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
  tray.on('click', () => {
    if (win?.isVisible()) {
      win.hide();
    } else {
      win?.show();
      win?.focus();
    }
  });
}

function createWindow() {
  win = new BrowserWindow({
    title: "Runtime FeedDownloader Pro",
    icon,
    backgroundColor: '#0b1120', // Matches Tailwind bg-background (approx)
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    ...(process.platform === 'darwin' ? { titleBarStyle: 'hidden' } : {}),
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false, // sandbox:true incompatible with preload+better-sqlite3 native module
    },
  })

  // Prevent permission requests (GPS, Notifications, etc.)
  win.webContents.session.setPermissionRequestHandler((_webContents, permission, callback) => {
    console.log(`Blocked permission request: ${permission}`);
    return callback(false);
  });

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
  createWindow();
  if (process.platform !== 'darwin') {
    createTray();
  }
});
