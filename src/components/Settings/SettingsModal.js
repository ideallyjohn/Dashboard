import React, { useState } from 'react';
import './Settings.css';

function SettingsModal({ show, onClose, headerSettings, setHeaderSettings }) {
  const [settingsHeader, setSettingsHeader] = useState(headerSettings);

  const handleSave = () => {
    setHeaderSettings(settingsHeader); // Save the updated header settings to state
    console.log('We saved that the check box is checked! ' + settingsHeader);
  };

  const handleHeaderChange = (e) => {
    setSettingsHeader(e.target.checked);
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Settings</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <div>
            <input
              type="checkbox"
              checked={settingsHeader}
              onChange={handleHeaderChange}
            />
            <label>Show Header</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Test Box</label>
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="save-btn"
            onClick={() => {
              onClose();
              handleSave();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
