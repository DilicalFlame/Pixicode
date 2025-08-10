// TypeScript declarations for Electron APIs exposed through preload
export interface VaultInfo {
    id: string;
    name: string;
    location: string;
}

export interface ElectronAPI {
    minimize: () => Promise<void>;
    maximize: () => Promise<void>;
    close: () => Promise<void>;
    isMaximized: () => Promise<boolean>;
    onMenuAction: (callback: (action: string) => void) => void;
    selectFolder: () => Promise<string | null>;
    getDefaultVaultPath: () => Promise<string>;

    // Global settings methods
    getVaults: () => Promise<VaultInfo[]>;
    getActiveVaultId: () => Promise<string | null>;
    saveVaults: (vaults: VaultInfo[]) => Promise<boolean>;
    setActiveVault: (id: string) => Promise<boolean>;
    pathSep: () => Promise<string>;
}

declare global {
    interface Window {
        electronAPI: ElectronAPI;
    }
}
