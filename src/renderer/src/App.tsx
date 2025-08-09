import React, { useState } from 'react';
import TitleBar from './components/TitleBar';
import Dashboard from './components/Dashboard';
import SettingsModal from './components/SettingsModal';

const App: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSettingsClick = () => {
    setIsSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setIsSettingsOpen(false);
  };

  return (
    <>
      <TitleBar onSettingsClick={handleSettingsClick} />
      <Dashboard />
      <SettingsModal isOpen={isSettingsOpen} onClose={handleSettingsClose} />
    </>
  );
};

export default App;
