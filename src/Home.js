import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Header from './components/Header';
import Contact from './components/Contact'

const Home = () => {
  const [selectedContent, setSelectedContent] = useState('home');

  const handleSelectContent = (content) => {
    setSelectedContent(content);
  };

  return (
    <div>
      <Header />
      <Navbar onSelectContent={handleSelectContent} />
      {/* <About onSelectContent={selectedContent} /> */}
      <Content selectedContent={selectedContent} />
      {/* <Contact selectedContent={selectedContact} /> */}
    </div>
  );
}

export default Home;
