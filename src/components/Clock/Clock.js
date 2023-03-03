import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock({ isHeaderShown }) {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: 50,
  });

  useEffect(() => {
    if (!isHeaderShown) {
      localStorage.setItem('clockPosition', JSON.stringify(position));
    }
  }, [isHeaderShown, position]);

  const handleMouseDown = (e) => {
    const startX = e.pageX - position.x;
    const startY = e.pageY - position.y;

    const handleMouseMove = (e) => {
      setPosition({
        x: e.pageX - startX,
        y: e.pageY - startY,
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  if (!isHeaderShown) {
    const savedPosition = localStorage.getItem('clockPosition');
    if (savedPosition) {
      const { x, y } = JSON.parse(savedPosition);
      return (
        <div className="clock clock-hidden" style={{ top: y, left: x }}></div>
      );
    }
    return null;
  }

  return (
    <div
      className="clock"
      style={{ top: position.y, left: position.x }}
      onMouseDown={handleMouseDown}
    >
      <div className="clock-text">{new Date().toLocaleTimeString()}</div>
    </div>
  );
}

export default Clock;
