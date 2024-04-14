import React, { useState } from 'react';
import RetroGamingImage from '../pics/RetroGaming.png';
import RetroGamingImage2 from '../pics/RetroGaming.png';
import InanamiteesImage1 from '../pics/Inanamitees1.png';
import InanamiteesImage2 from '../pics/Inanamitees2.png';

const Content = ({ selectedContent }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectButtonClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div>
      {selectedContent === 'projects' && (
        <div>
          <div className="project-button-container">
          <div>
          <div className="project-buttons">
              <button className={`project-button ${selectedProject === 'Inanimatees' ? 'selected' : ''}`} onClick={() => handleProjectButtonClick('Inanimatees')}>
                Inanimatees
              </button>
              <button className={`project-button ${selectedProject === 'RetroGaming' ? 'selected' : ''}`} onClick={() => handleProjectButtonClick('RetroGaming')}>
                RetroGaming
              </button>
              <button className={`project-button ${selectedProject === 'EpitoME' ? 'selected' : ''}`} onClick={() => handleProjectButtonClick('EpitoME')}>
                EpitoME
              </button>
            </div>
            {selectedProject === 'Inanimatees' && (
              <div className = "project-container">
                <div className = "content-screenshot">
                    <img src={InanamiteesImage1} alt="inanamitees1" className="screenshot" />
                    <img src={InanamiteesImage2} alt="inanamitees2" className="screenshot" />
                </div>
                <div className = "content-description">
                    <div className="project-title">Inanimatees Personality Test | Developer | November 2023</div>
                    <a className="github-link" href="https://www.inanimatees.com/">Site Link</a>
                    <div className="project-intro">Take our personality test and discover what quirky inanimate object you are! From a dirty window to a pair of reading glasses, find out which of our objects best matches your answers.</div>
                    <div className="project-intro">Designed and developed with fellow developer friends as a spin on classic personality tests where the questions and results are fun and quirky.</div>
                    <div className="project-description">- Developed on the frontend using TypeScript, React.js, Redux, CSS, HTML and on the backend using Next.js.</div>
                    <div className="project-description">- With five character trait combinations (Direct/Abstract, Organized/Unkept, Calm/Stimulating, Flexible/Robust, Lasting/Ephemeral) there are many possible object assignments for everyone and their friends and families to be assigned. A more detailed dive into your personality is in the results page.</div>
                </div>
              </div>
            )}
          </div>

          <div>
            {selectedProject === 'RetroGaming' && (
              <div className = "project-container">
                <div className = "content-screenshot">
                    <img src={RetroGamingImage} alt="retrogaming" className="screenshot" />
                    <img src={RetroGamingImage2} alt="retrogaming" className="screenshot" />
                </div>
                <div className = "content-description">
                    <div className="project-title">RetroGaming eCommerce Website | Developer | January 2023</div>
                    <a className="github-link" href="https://github.RetroGamingProMax.git">Github Link</a>
                    <div className="project-intro">An eCommerce site specializing in selling older “retro” video games and systems.</div>
                    <div className="project-intro">A project developed with a group to simulate an ecommerce website. Complete with user profiles / personal shopping carts, users have a personalized interface complete with past purchases.</div>
                    <div className="project-intro">Please feel free to use the filter and search functions while you browse!</div>
                    <div className="project-description">- Developed on the frontend using React.js, Redux, CSS, HTML and on the backend using Express.</div>
                    <div className="project-description">- Implemented a user login system which enabled every profile to have their own unique carts, and order histories</div>
                    <div className="project-description">- Successfully addressed a key challenge of implementing individual unique carts for each user by introducing a new Cart model in the backend. By assigning each user their own Cart, we were able to overcome the issue and provide users with individual carts and purchase histories, resulting in improved user experience</div>
                </div>
              </div>
            )}
          </div>

          <div className="project-container-epitoMe">
            {selectedProject === 'EpitoME' && (
              <div>
                <div className="project-title">EpitoME Social Media Website | Developer | February 2023</div>
                <a className="github-link" href="https://github.com/CapstoneGroupI/epitoME.git">Github Link</a>
                <div className="project-intro">A social media site where Users are able to find other users, add as a friend, and chat with friends. Inspired by the episode Nosedive from the series Black Mirror.</div>
                <div className="project-intro">A project developed with a group to simulate a social media website. Functionalities include individual users and user-sided feeds. Each user has the capability to upload their own profile picture, edit their info, post comments / pictures, add / remove buddies, and even chat with other users!</div>
                <div className="project-description">- Designed and developed a social media app with a range of features, including the ability to create posts, post comments, and exchange messages with other users.</div>
                <div className="project-description">- Developed on the frontend using React.js, Redux, CSS, HTML and on the backend using Express.</div>
                <div className="project-description">- Implemented a user login system which enabled users to have their own interface, added friends, rating, etc.</div>
              </div>
            )}
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
