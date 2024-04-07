// src/components/Content.js
import React from 'react';

const Content = ({ selectedContent }) => {
  return (
    <div>
      {selectedContent === 'home' && <h1> Welcome to my personal website! An aspiring software engineer with a 
          diverse background in accounting and digital media industries, I am able to combine my passion for technology 
          with my experience in finance and media to create innovative solutions that bridge the gap between creativity 
          and functionality.</h1>}
        {selectedContent === 'projects' && <h1>Hello
        <div className = "my-projects">My Projects</div>
        <div className = "project-container">
            <div className = "project-title">Inanimatees Personality Test | Developer | November 2023</div>
            <div className = "github-link" href="https://www.inanimatees.com/"> Site Link </div>
            <div className = "project-intro">Take our personality test and discover what quirky inanimate object you are! From a dirty window to a pair of reading glasses, find out which of our objects best matches your answers.
            </div>
            <div className = "project-intro">Designed and developed with fellow developer friends as a spin on classic personality tests where the questions and results are fun and quirky.
            </div>
            <div className = "project-description">- Developed on the frontend using TypeScript, React.js, Redux, CSS, HTML and on the backend using Next.js.
            <div className = "project-description">- With five character trait combinations (Direct/Abstract, Organized/Unkept,  Calm/Stimulating, Flexible/Robust, Lasting/Ephemeral) there are many possible object assignments for everyone and their friends and families to be assigned. A more detailed dive into your personality is in the results page.</div>
            </div>
        </div>
        <div className = "project-container">
            <h1 className = "project-title">RetroGaming eCommerce Website | Developer | January 2023</h1>
            <a className = "github-link" href="https://github.RetroGamingProMax.git"> Github Link </a>
            <h3 className = "project-intro">An eCommerce site specializing in selling older “retro” video games and systems. 
            Users are able to browse the catalog of merchandise, filter for keywords, view each product in detail, add products to their cart, among other functionalities.
            </h3>
            <h3 className = "project-intro">A project developed with a group to simulate an ecommerce website. Complete with user profiles / personal shopping carts,
                users have a personalized interface complete with past purchases. Please feel free to use the filter and search functions while you browse! 
            </h3>
                <h4 className = "project-description">- Developed on the frontend using React.js, Redux, CSS, HTML and on the backend using Express.</h4>
                <h4 className = "project-description">- Implemented a user login system which enabled every profile to have their own unique carts, and order histories</h4>
                <h4 className = "project-description">- Successfully addressed a key challenge of implementing individual unique carts for each user by introducing a new Cart model in the backend. By assigning each user their own Cart, we were able to 
                overcome the issue and provide users with individual carts and purchase histories, resulting in improved user experience</h4>
        </div>
        <div className = "project-container">
            <h2 className = "project-title">EpitoME Social Media Website | Developer | February 2023</h2>
            <a className = "github-link" href="https://github.com/CapstoneGroupI/epitoME.git"> Github Link </a>
            <h3 className = "project-intro">A social media site where Users are able to find other users, add as a friend, and chat with friends. 
                Inspired by the episode Nosedive from the series Black Mirror.
            </h3>
            <h3 className = "project-intro">A project developed with a group to simulate a social media website. Functionalities include individual users and user-sided feeds.
                Each user has the capability to upload their own profile picture, edit their info, post comments / pictures, add / remove buddies,
                and even chat with other users!
            </h3>
                <h4 className = "project-description">- Designed and developed a social media app with a range of features, including the ability to create posts, post comments, and exchange messages with other users
                <h4 className = "project-description">- Developed on the frontend using React.js, Redux, CSS, HTML and on the backend using Express.</h4>
                <h4 className = "project-description">- Implemented a user login system which enabled users to have their own interface, added friends, rating, etc.</h4>
                </h4>
        </div>
        </h1>}
      {selectedContent === 'contact' && <h1> <div className = "contacts">
        <a className = "email" href="dzeng91@gmail.com">Email: dzeng91@gmail.com </a>
        <a className = "github" href="https://github.com/dzeng91"> Github: github.com/dzeng91 </a>
        </div></h1>}
    </div>
  );
}

export default Content;
