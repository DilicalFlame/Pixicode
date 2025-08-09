import React from 'react';
import CloseIcon from './assets/CloseIcon';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if the actual bg was clicked (not the modal itself)
    if (e.target === e.currentTarget) {
      onClose();
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
          <p>Settings content goes here.</p>
          {/* Add your settings form or components here */}
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
