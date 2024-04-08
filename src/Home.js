import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import About from './components/About';

const Home = () => {
  const [selectedContent, setSelectedContent] = useState('home');

  const handleSelectContent = (content) => {
    setSelectedContent(content);
  };

  return (
    <div>
      <About />
      <Navbar onSelectContent={handleSelectContent} />
      <Content selectedContent={selectedContent} />
    </div>
  );
}

export default Home;
