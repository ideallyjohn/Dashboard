import React, { useState } from 'react';
import SettingsButton from './components/Settings/SettingsButton';
import SettingsModal from './components/Settings/SettingsModal';
import Header from './components/Header/Header';
import Columns from './components/Columns/Columns';
import './components/Header/Header.css';
import './components/Columns/Columns.css';
import './App.css';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [settingsHeader, setSettingsHeader] = useState(false);

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleSettingsSave = () => {
    setShowSettings(false);
  };

  const handleSettingsClose = () => {
    setShowSettings(false);
  };

  return (
    <div className="App">
      <SettingsButton onClick={handleSettingsClick} />
      {showSettings && (
        <SettingsModal
          show={showSettings}
          onSave={handleSettingsSave}
          onClose={handleSettingsClose}
          headerSettings={settingsHeader} // Pass headerSettings as a prop
          setHeaderSettings={setSettingsHeader} // Pass the setter function as a prop
        />
      )}
      <Header isHeaderShown={settingsHeader} />
      <Columns isHeaderShown={settingsHeader} />
    </div>
  );
}

export default App;
