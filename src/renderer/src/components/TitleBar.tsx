import React, { useState, useEffect } from 'react';
import PixicodeIcon from './assets/PixicodeIcon';
import ChevronLeftIcon from './assets/ChevronLeftIcon';
import ChevronRightIcon from './assets/ChevronRightIcon';
import SettingsIcon from './assets/SettingsIcon';
import MinimizeIcon from './assets/MinimizeIcon';
import MaximizeIcon from './assets/MaximizeIcon';
import RestoreIcon from './assets/RestoreIcon';
import CloseIcon from './assets/CloseIcon';

const TitleBar = () => {
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    // Check initial maximized state
    const checkMaximizedState = async () => {
      try {
        const maximized = await window.electronAPI.isMaximized();
        setIsMaximized(maximized);
      } catch (error) {
        console.error('Error checking maximized state:', error);
      }
    };

    checkMaximizedState();
  }, []);

  const handleMinimize = async () => {
    try {
      await window.electronAPI.minimize();
    } catch (error) {
      console.error('Error minimizing window:', error);
    }
  };

  const handleMaximize = async () => {
    try {
      await window.electronAPI.maximize();
      // Toggle the state
      setIsMaximized(!isMaximized);
    } catch (error) {
      console.error('Error maximizing/restoring window:', error);
    }
  };

  const handleClose = async () => {
    try {
      await window.electronAPI.close();
    } catch (error) {
      console.error('Error closing window:', error);
    }
  };

  return (
    <div className="title-bar">
      <div className="title-bar-content">
        <div className="title-bar-buttons">
          <button className="logo-button">
            <PixicodeIcon />
          </button>
          <button className="nav-button previous-button">
            <ChevronLeftIcon />
          </button>
          <button className="nav-button next-button">
            <ChevronRightIcon />
          </button>
        </div>
        <span className="title">Pixicode</span>
        <div className="title-bar-right">
          <button className="settings-button">
            <SettingsIcon />
          </button>
          <div className="window-controls">
            <button
              className="window-control minimize-button"
              onClick={handleMinimize}
            >
              <MinimizeIcon />
            </button>
            <button
              className="window-control maximize-button"
              onClick={handleMaximize}
            >
              {isMaximized ? <RestoreIcon /> : <MaximizeIcon />}
            </button>
            <button
              className="window-control close-button"
              onClick={handleClose}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
