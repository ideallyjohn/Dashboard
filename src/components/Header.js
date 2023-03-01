import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const showHeader = useSelector((state) => state.showHeader);

  return (
    <>
      {showHeader && (
        <div className="header-container">
          {/* Your header content goes here */}
        </div>
      )}
    </>
  );
};

export default Header;
