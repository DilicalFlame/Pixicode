import { app, BrowserWindow } from 'electron';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mainWindow: BrowserWindow;

const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: join(__dirname, 'assets/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // Preload script path
      preload: join(__dirname, '../preload/preload.js'),
    },
  });
  try {
    if (process.env.NODE_ENV === 'development') {
      // Development mode: load from Vite dev server
      mainWindow.loadURL('http://localhost:3000');
    } else {
      // Production mode: load from built files
      mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
    }
  } finally {
    // Ensure the menu is removed
    mainWindow.removeMenu();
  }
};

// Create application window
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
