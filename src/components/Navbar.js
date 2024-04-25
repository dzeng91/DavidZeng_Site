import React, { useState, useEffect } from 'react';

const Navbar = ({ onSelectContent }) => {
  const [selectedContent, setSelectedContent] = useState('about');

  const handleSelectContent = (content) => {
    setSelectedContent(content);
    onSelectContent(content);
  }; //Setting the 'about' page as the default page on load, couldn't get it to work in the 'Content' component

  useEffect(() => {
    handleSelectContent('about');
  }, []);

  return (
    <nav>
      <div className="button-container">
        <button className={`button-89 ${selectedContent === 'about' ? 'selected' : ''}`} onClick={() => handleSelectContent('about')}>
          About
        </button>
        <button className={`button-89 ${selectedContent === 'projects' ? 'selected' : ''}`} onClick={() => handleSelectContent('projects')}>
          Projects
        </button>
        <button className={`button-89 ${selectedContent === 'contact' ? 'selected' : ''}`} onClick={() => handleSelectContent('contact')}>
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

