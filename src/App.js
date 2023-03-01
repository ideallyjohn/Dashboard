import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShowHeader } from './store/actions';
import SettingsButton from './components/SettingsButton';
import SettingsModal from './components/SettingsModal';
import './App.css';

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const dispatch = useDispatch();

  const handleHeaderChange = (value) => {
    dispatch(setShowHeader(value));
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleSettingsClose = () => {
    setShowSettings(false);
  };

  return (
    <div className="App">
      <div className="settings-container">
        <SettingsButton onClick={handleSettingsClick} />
      </div>
      <SettingsModal
        show={showSettings}
        onClose={handleSettingsClose}
        showHeader={showHeader}
        onHeaderChange={handleHeaderChange}
      />
      {/* The rest of your components go here */}
    </div>
  );
}

export default App;
