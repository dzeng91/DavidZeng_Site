import React, { useState } from 'react';

const Header = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="header-container">
      <div className="collapse-button-container">
        <button className="collapse-button" onClick={toggleCollapse}>
          {collapsed ? 'Maximize' : 'Minimize'}
        </button>
      </div>
      <div className="header-text">
        {!collapsed && (
          <>
            Welcome to my personal website! An aspiring software engineer with a 
            diverse background in accounting and digital media industries, I am able to combine my passion for technology 
            with my experience in finance and media to create innovative solutions that bridge the gap between creativity 
            and functionality.
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
