import React from 'react';

const Navbar = ({ onSelectContent }) => {
  return (
    <nav>
        <div className = "button-container">
            <button className = "button-89" onClick={() => onSelectContent('about')}>About</button>
            <button className = "button-89" onClick={() => onSelectContent('projects')}>Projects</button>
            <button className = "button-89" onClick={() => onSelectContent('contact')}>Contact</button>
    </div>
    </nav>
    
  );
}

export default Navbar;
