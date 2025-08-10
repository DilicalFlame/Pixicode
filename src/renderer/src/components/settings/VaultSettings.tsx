import React, { useState, useEffect } from 'react';
import CloseIcon from '../assets/CloseIcon';
import { type Vault, loadVaults } from '../../utils/vault';
import path from 'path';

const VaultSettings: React.FC = () => {
  const [vaults, setVaults] = useState<Vault[]>([]);
  const [showConfirmation, setShowConfirmation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load vaults from global settings on component mount
  useEffect(() => {
    setIsLoading(true);
    loadVaults().then((value) => {
      if (Array.isArray(value)) {
        // Set the vaults state with the loaded vaults
        setVaults(value);
      } else {
        setVaults([value]);
      }
      setIsLoading(false);
    });
  }, []);

  // Save vaults to global settings whenever they change
  useEffect(() => {
    const saveVaultsToSettings = async () => {
      if (!isLoading && vaults.length > 0) {
        try {
          // Get the vault data without the isActive flag
          const vaultData = vaults.map(({ id, name, location }) => ({
            id,
            name,
            location,
          }));

          // Save vaults to global settings
          await window.electronAPI.saveVaults(vaultData);

          // Find the active vault and save its ID
          const activeVault: Vault | undefined = vaults.find(
            (vault) => vault.isActive
          );
          if (activeVault) {
            await window.electronAPI.setActiveVault(activeVault.id);
          }
        } catch (error) {
          console.error('Failed to save vaults to settings:', error);
        }
      }
    };

    saveVaultsToSettings().then(() => {
      // nothing, just save vaults
    });
  }, [vaults, isLoading]);

  const handleAddNewVault = async () => {
    try {
      // Open the folder selection dialog
      const folderPath = await window.electronAPI.selectFolder();

      // If user cancels the dialog, folderPath will be null
      if (!folderPath) return;

      // Extract the folder name from the path for display
      const pathParts = folderPath.split(await window.electronAPI.pathSep());
      const folderName = pathParts[pathParts.length - 1] || 'New Vault';

      // Create a new vault entry
      const newId = (
        Math.max(0, ...vaults.map((v) => parseInt(v.id))) + 1
      ).toString();
      const newVault: Vault = {
        id: newId,
        name: folderName,
        location: folderPath,
      };

      // Add the new vault to the list
      setVaults([...vaults, newVault]);
    } catch (error) {
      console.error('Failed to add new vault:', error);
    }
  };

  const handleOpenVault = (id: string) => {
    // Mark the selected vault as active and others as inactive
    setVaults(
      vaults.map((vault) => ({
        ...vault,
        isActive: vault.id === id,
      }))
    );
  };

  const handleRemoveVault = (id: string) => {
    setShowConfirmation(id);
  };

  const confirmRemoveVault = () => {
    if (showConfirmation) {
      setVaults(vaults.filter((vault) => vault.id !== showConfirmation));
      setShowConfirmation(null);
    }
  };

  const cancelRemoveVault = () => {
    setShowConfirmation(null);
  };

  if (isLoading) {
    return (
      <div className="settings-section">
        <h3 className="settings-section-title">Vault Settings</h3>
        <div className="settings-section-content">
          <p>Loading vaults...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="settings-section">
      <h3 className="settings-section-title">Vault Settings</h3>
      <div className="settings-section-content">
        <div className="vault-header">
          <h4>Manage Vaults</h4>
          <p className="vault-description">
            Vaults are locations where Pixicode stores your files and data. You
            can have multiple vaults for different projects or purposes.
          </p>
        </div>

        <div className="vault-list">
          {vaults.map((vault) => (
            <div
              key={vault.id}
              className={`vault-item ${vault.isActive ? 'active-vault' : ''}`}
            >
              <div className="vault-info">
                <div className="vault-name">{vault.name}</div>
                <div className="vault-path">
                  <input
                    type="text"
                    value={vault.location}
                    className="vault-location-input"
                    disabled
                  />
                </div>
              </div>
              <div className="vault-actions">
                <button
                  className="vault-button open-button"
                  onClick={() => handleOpenVault(vault.id)}
                  disabled={vault.isActive}
                >
                  {vault.isActive ? 'Current' : 'Open'}
                </button>
                <button
                  className="vault-button remove-button"
                  onClick={() => handleRemoveVault(vault.id)}
                  disabled={vault.isActive}
                >
                  <CloseIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="vault-add-section">
          <button
            className="vault-button add-vault-button"
            onClick={handleAddNewVault}
          >
            Add New Vault
          </button>
        </div>

        {showConfirmation && (
          <div className="confirmation-dialog">
            <div className="confirmation-content">
              <h4>Remove Vault</h4>
              <p>
                Are you sure you want to remove this vault? This will only
                remove the vault from Pixicode, not delete any files.
              </p>
              <div className="confirmation-buttons">
                <button
                  className="settings-button cancel-button"
                  onClick={cancelRemoveVault}
                >
                  Cancel
                </button>
                <button
                  className="settings-button confirm-button"
                  onClick={confirmRemoveVault}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VaultSettings;
