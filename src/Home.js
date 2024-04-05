// src/Home.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';

const Home = () => {
  const [selectedContent, setSelectedContent] = useState('home');

  const handleSelectContent = (content) => {
    setSelectedContent(content);
  };

  return (
    <div>
      <Navbar onSelectContent={handleSelectContent} />
      <Content selectedContent={selectedContent} />
    </div>
  );
}

export default Home;
