import React from 'react';

const SettingsModal = ({ show, onClose, showHeader, onHeaderChange }) => {
  return (
    <div className={show ? 'modal-container show' : 'modal-container'}>
      <div className="modal">
        <div className="modal-header">
          <h2>Settings</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="showHeader">Show Header</label>
            <input
              type="checkbox"
              id="showHeader"
              checked={showHeader}
              onChange={(e) => onHeaderChange(e.target.checked)}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="save-btn" onClick={onClose}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
