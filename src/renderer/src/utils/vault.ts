import { VaultInfo } from '../types/electron';

interface Vault extends VaultInfo {
    isActive?: boolean;
}

const loadVaults = async (): Promise<Vault | Vault[]> => {
    try {
        // Get saved vaults from global settings
        const savedVaults = await window.electronAPI.getVaults();
        const activeVaultId = await window.electronAPI.getActiveVaultId();

        if (savedVaults && savedVaults.length > 0) {
            // Return the vaults with the active flag set
            return savedVaults.map((vault) => ({
                ...vault,
                isActive: vault.id === activeVaultId
            }));
        } else {
            // If no vaults exist, create the default vault and return it
            return await initializeDefaultVault();
        }
    } catch (error) {
        console.error('Failed to load vaults:', error);
        return await initializeDefaultVault();
    }
};

const initializeDefaultVault = async (): Promise<Vault> => {
    // Get the default vault path from Electron
    const defaultPath = await window.electronAPI.getDefaultVaultPath();

    // Extract the folder name from the path for display
    const pathParts = defaultPath.split(await window.electronAPI.pathSep());
    const folderName = pathParts[pathParts.length - 1] || 'Default Vault';

    // Create the default vault
    const defaultVault: Vault = {
        id: '1',
        name: folderName,
        location: defaultPath,
        isActive: true
    };

    // Save the default vault to global settings
    await window.electronAPI.saveVaults([defaultVault]);
    await window.electronAPI.setActiveVault('1');
    return defaultVault;
};

const getActiveVault = async (): Promise<Vault> => {
    const vaults = await loadVaults();
    let vault: Vault | null = null;
    if (Array.isArray(vaults)) {
        vault = vaults.find((vault) => vault.isActive) || null;
    }
    if ('isActive' in vaults) {
        vault = vaults.isActive ? vaults : null;
    }
    if (!vault) {
        vault = await initializeDefaultVault();
    }
    return vault;
};

export { initializeDefaultVault, loadVaults, type Vault, getActiveVault };
