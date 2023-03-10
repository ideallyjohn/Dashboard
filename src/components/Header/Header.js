import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import Clock from '../Clock/Clock';

function Header({ isHeaderShown }) {
  const [clockPosition, setClockPosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef(null);

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
  }, [isHeaderShown, clockPosition]);

  const headerWidth = headerRef.current ? headerRef.current.offsetWidth : 0;
  const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;

  return (
    <header
      id="header"
      ref={headerRef}
      className={`header${isHeaderShown ? ' header-header-shown' : ''}`}
      style={{ marginTop: isHeaderShown ? '0px' : '-100px' }}
    >
      <Clock
        position={clockPosition}
        onDrag={handleClockDrag}
        isHeaderShown={isHeaderShown}
        width={headerWidth}
        height={headerHeight}
      />
    </header>
  );
}

export default Header;
