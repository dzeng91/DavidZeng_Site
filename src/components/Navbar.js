// src/components/Navbar.js
import React from 'react';

const Navbar = ({ onSelectContent }) => {
  return (
    <nav>
      <button onClick={() => onSelectContent('home')}>Home</button>
      <button onClick={() => onSelectContent('about')}>About</button>
      <button onClick={() => onSelectContent('contact')}>Contact</button>
    </nav>
  );
}

export default Navbar;
