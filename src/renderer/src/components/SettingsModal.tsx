import React, { useState } from 'react';
import CloseIcon from './assets/CloseIcon';
import AboutPixicode from './settings/AboutPixicode';
import AppearanceSettings from './settings/AppearanceSettings';
import EditorSettings from './settings/EditorSettings';
import GeneralSettings from './settings/GeneralSettings';
import VaultSettings from './settings/VaultSettings';
import WidgetSettings from './settings/WidgetSettings';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SettingSection =
  | 'general'
  | 'appearance'
  | 'editor'
  | 'vault'
  | 'widgets'
  | 'about';

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState<SettingSection>('general');

  if (!isOpen) return null;

  const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if the actual bg was clicked (not the modal itself)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderSettingsContent = () => {
    switch (activeSection) {
      case 'general':
        return <GeneralSettings />;
      case 'appearance':
        return <AppearanceSettings />;
      case 'editor':
        return <EditorSettings />;
      case 'vault':
        return <VaultSettings />;
      case 'widgets':
        return <WidgetSettings />;
      case 'about':
        return <AboutPixicode />;
      default:
        return <GeneralSettings />;
    }
  };

  return (
    <div className="settings-bg" onClick={handleBgClick}>
      <div className="settings-modal">
        <div className="settings-modal-header">
          <button className="settings-close-button" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="settings-modal-content">
          <div className="settings-layout">
            <div className="settings-sidebar">
              <nav>
                <ul>
                  <li
                    className={activeSection === 'general' ? 'active' : ''}
                    onClick={() => setActiveSection('general')}
                  >
                    General
                  </li>
                  <li
                    className={activeSection === 'appearance' ? 'active' : ''}
                    onClick={() => setActiveSection('appearance')}
                  >
                    Appearance
                  </li>
                  <li
                    className={activeSection === 'editor' ? 'active' : ''}
                    onClick={() => setActiveSection('editor')}
                  >
                    Editor
                  </li>
                  <li
                    className={activeSection === 'vault' ? 'active' : ''}
                    onClick={() => setActiveSection('vault')}
                  >
                    Vault
                  </li>
                  <li
                    className={activeSection === 'widgets' ? 'active' : ''}
                    onClick={() => setActiveSection('widgets')}
                  >
                    Widgets
                  </li>
                  <li
                    className={activeSection === 'about' ? 'active' : ''}
                    onClick={() => setActiveSection('about')}
                  >
                    About Pixicode
                  </li>
                </ul>
              </nav>
            </div>
            <div className="settings-content">{renderSettingsContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
