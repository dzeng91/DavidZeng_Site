// src/components/Content.js
import React from 'react';

const Content = ({ selectedContent }) => {
  return (
    <div>
      {selectedContent === 'home' && <h1>Home Content</h1>}
      {selectedContent === 'about' && <h1>About Content</h1>}
      {selectedContent === 'contact' && <h1>Contact Content</h1>}
    </div>
  );
}

export default Content;
