import { app, BrowserWindow, ipcMain } from 'electron';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { getWinBounds, saveBounds } from './utility_functions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mainWindow: BrowserWindow;

// Global settings structure
interface GlobalSettings {
    vaults: VaultInfo[];
    activeVaultId: string | null;
    lastOpenedAt: string;
}

interface VaultInfo {
    id: string;
    name: string;
    location: string;
}

// Default global settings
const defaultGlobalSettings: GlobalSettings = {
    vaults: [],
    activeVaultId: null,
    lastOpenedAt: new Date().toISOString()
};

// Function to get the path to the global settings file
async function getGlobalSettingsPath() {
    const { homedir } = await import('os');
    const { join } = await import('path');
    return join(homedir(), '.pixicode-globals.json');
}

// Function to read global settings
async function readGlobalSettings(): Promise<GlobalSettings> {
    const { readFile, existsSync } = await import('fs');
    const { promisify } = await import('util');
    const readFileAsync = promisify(readFile);

    const settingsPath = await getGlobalSettingsPath();

    try {
        if (existsSync(settingsPath)) {
            const data = await readFileAsync(settingsPath, 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error reading global settings:', error);
    }

    return defaultGlobalSettings;
}

// Function to save global settings
async function saveGlobalSettings(settings: GlobalSettings) {
    const { writeFile } = await import('fs');
    const { promisify } = await import('util');
    const writeFileAsync = promisify(writeFile);

    const settingsPath = await getGlobalSettingsPath();

    try {
        await writeFileAsync(
            settingsPath,
            JSON.stringify(settings, null, 2),
            'utf8'
        );
    } catch (error) {
        console.error('Error saving global settings:', error);
    }
}

const createWindow = (): void => {
    const { width, height } = getWinBounds();
    mainWindow = new BrowserWindow({
        width: width,
        height: height,
        minWidth: 800,
        minHeight: 600,
        icon: join(__dirname, 'assets/icon.png'),
        titleBarStyle: 'hidden',
        titleBarOverlay: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            // Preload script path
            preload: join(__dirname, '../preload/preload.js')
        }
    });

    mainWindow.on('resized', () => {
        const { width, height } = mainWindow.getBounds();
        // Save the new window bounds
        saveBounds({ width, height });
        console.log(`Window resized to ${width}x${height}`);
    });

    try {
        if (process.env.NODE_ENV === 'development') {
            // Development mode: load from Vite dev server
            mainWindow.loadURL('http://localhost:3000').then((_) => {
                // nothing, just load the URL
            });
            // mainWindow.webContents.openDevTools();
        } else {
            // Production mode: load from built files
            mainWindow
                .loadFile(join(__dirname, '../renderer/index.html'))
                .then((_) => {
                    // nothing, just load the file
                });
        }
    } finally {
        // Ensure the menu is removed
        mainWindow.removeMenu();
    }
};

// IPC handlers for window controls
ipcMain.handle('window-minimize', () => {
    if (mainWindow) {
        mainWindow.minimize();
    }
});

ipcMain.handle('window-maximize', () => {
    if (mainWindow) {
        if (mainWindow.isMaximized()) {
            mainWindow.unmaximize();
        } else {
            mainWindow.maximize();
        }
    }
});

ipcMain.handle('window-close', () => {
    if (mainWindow) {
        mainWindow.close();
    }
});

ipcMain.handle('window-is-maximized', () => {
    return mainWindow ? mainWindow.isMaximized() : false;
});

// IPC handlers for vault management
ipcMain.handle('select-folder', async () => {
    if (!mainWindow) return null;

    const { dialog } = await import('electron');
    const result = await dialog.showOpenDialog(mainWindow, {
        properties: ['openDirectory', 'createDirectory'],
        title: 'Select Vault Location',
        buttonLabel: 'Select Folder'
    });

    if (result.canceled) {
        return null;
    }

    return result.filePaths[0];
});

ipcMain.handle('get-default-vault-path', async () => {
    const { homedir } = await import('os');
    const { join } = await import('path');
    const { existsSync, mkdirSync } = await import('fs');

    // Create the default Pixicode folder in user's home directory if it doesn't exist
    const defaultPath = join(homedir(), 'Pixicode');

    if (!existsSync(defaultPath)) {
        try {
            mkdirSync(defaultPath, { recursive: true });
        } catch (error) {
            console.error('Failed to create default vault directory:', error);
        }
    }

    return defaultPath;
});

// IPC handlers for global settings
ipcMain.handle('get-vaults', async () => {
    const settings = await readGlobalSettings();
    return settings.vaults;
});

ipcMain.handle('get-active-vault-id', async () => {
    const settings = await readGlobalSettings();
    return settings.activeVaultId;
});

ipcMain.handle('save-vaults', async (_event, vaults: VaultInfo[]) => {
    const settings = await readGlobalSettings();
    settings.vaults = vaults;
    settings.lastOpenedAt = new Date().toISOString();
    await saveGlobalSettings(settings);
    return true;
});

ipcMain.handle('set-active-vault', async (_event, id: string) => {
    const settings = await readGlobalSettings();
    settings.activeVaultId = id;
    settings.lastOpenedAt = new Date().toISOString();
    await saveGlobalSettings(settings);
    return true;
});

ipcMain.handle('path-sep', async () => {
    const { sep } = await import('path');
    return sep;
});

// Create application window
app.whenReady().then(() => {
    createWindow();
});

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
