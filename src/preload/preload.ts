import { contextBridge, ipcRenderer } from 'electron';

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
    // Window control methods
    minimize: () => ipcRenderer.invoke('window-minimize'),
    maximize: () => ipcRenderer.invoke('window-maximize'),
    close: () => ipcRenderer.invoke('window-close'),
    isMaximized: () => ipcRenderer.invoke('window-is-maximized'),

    // Add more API methods as needed
    onMenuAction: (callback: (action: string) => void) => {
        ipcRenderer.on('menu-action', (_event, action) => callback(action));
    },

    // Vault management methods
    selectFolder: () => ipcRenderer.invoke('select-folder'),
    getDefaultVaultPath: () => ipcRenderer.invoke('get-default-vault-path'),

    // Global settings methods
    getVaults: () => ipcRenderer.invoke('get-vaults'),
    getActiveVaultId: () => ipcRenderer.invoke('get-active-vault-id'),
    saveVaults: (vaults: any[]) => ipcRenderer.invoke('save-vaults', vaults),
    setActiveVault: (id: string) => ipcRenderer.invoke('set-active-vault', id),
    pathSep: () => ipcRenderer.invoke('path-sep')
});

// TypeScript declaration for the exposed API is in electron.d.ts
