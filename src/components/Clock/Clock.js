import { useState, useEffect } from 'react';

function Clock({ position, onDrag, isHeaderShown, headerWidth, headerHeight }) {
  const [clockPosition, setClockPosition] = useState(position);

  const handleMouseDown = (e) => {
    const clockWidth = 200;
    const clockHeight = 200;
    const headerRect = document
      .getElementById('header')
      .getBoundingClientRect();

    const minX = headerRect.left + clockWidth / 2;
    const maxX = headerRect.right - clockWidth / 2;
    const minY = headerRect.top + clockHeight / 2;
    const maxY = headerRect.bottom - clockHeight / 2;

    const startX = e.pageX - clockPosition.x;
    const startY = e.pageY - clockPosition.y;

    const handleMouseMove = (e) => {
      const newClockPosition = {
        x: Math.max(minX, Math.min(e.pageX - startX, maxX)),
        y: Math.max(minY, Math.min(e.pageY - startY, maxY)),
      };

      setClockPosition(newClockPosition);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    if (!isHeaderShown) {
      localStorage.setItem('clockPosition', JSON.stringify(clockPosition));
    }
  }, [isHeaderShown, clockPosition]);

  useEffect(() => {
    const interval = setInterval(() => {
      setClockPosition((prevPosition) => ({ ...prevPosition }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isHeaderShown) {
    const savedPosition = localStorage.getItem('clockPosition');
    if (savedPosition) {
      const { x, y } = JSON.parse(savedPosition);
      return (
        <div
          className="clock-hidden clock-text"
          style={{ top: position.y, left: position.x }}
          onMouseDown={handleMouseDown}
        >
          {new Date().toLocaleTimeString()}
        </div>
      );
    }
    return null;
  }

  return (
    <div
      className="clock-test clock-show clock-text"
      style={{ top: clockPosition.y, left: clockPosition.x }}
      onMouseDown={handleMouseDown}
    >
      {new Date().toLocaleTimeString()}
    </div>
  );
}

export default Clock;
