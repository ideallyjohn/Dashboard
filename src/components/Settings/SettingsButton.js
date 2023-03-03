import React from 'react';
import { FiSettings } from 'react-icons/fi';

const SettingsButton = ({ onClick }) => {
  return (
    <div className="settings-button" onClick={onClick}>
      <FiSettings />
    </div>
  );
};

export default SettingsButton;
