import React, { useState, useEffect } from 'react';
import './Header.css';
import Clock from '../Clock/Clock';

function Header({ isHeaderShown }) {
  const [clockPosition, setClockPosition] = useState({ x: 0, y: 0 });

  const handleClockDrag = (e) => {
    setClockPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    const savedClockPosition = window.localStorage.getItem('clockPosition');
    if (savedClockPosition) {
      setClockPosition(JSON.parse(savedClockPosition));
    }
  }, []);

  useEffect(() => {
    if (!isHeaderShown) {
      window.localStorage.setItem(
        'clockPosition',
        JSON.stringify(clockPosition)
      );
    }
  }, [isHeaderShown]);

  return (
    <header
      className={`header${isHeaderShown ? ' header-header-shown' : ''}`}
      style={{ marginTop: isHeaderShown ? '0px' : '-100px' }}
    >
      <Clock position={clockPosition} onDrag={handleClockDrag} isHeaderShown />
    </header>
  );
}

export default Header;
