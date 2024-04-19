import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
// import Banffimage from './pics/Banff.jpeg'

const Home = () => {
  const [selectedContent, setSelectedContent] = useState('home');

  const handleSelectContent = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className = "everything">
      <Header />
      <Navbar onSelectContent={handleSelectContent} />
      {selectedContent === 'contact' ? <Contact /> : selectedContent === 'about' ? <About /> : 
      <Content selectedContent={selectedContent} />}
    </div>
  );
}

export default Home;
