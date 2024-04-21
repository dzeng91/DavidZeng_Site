import React from "react";
import MePic from '../pics/Me.jpeg';
import jsIcon from '../pics/Javascript.png';
import reactIcon from '../pics/React.png';
import nextIcon from '../pics/Next.png'
import gamingIcon from '../pics/Gaming.png';
import baseballIcon from '../pics/Baseball.png';
import travelIcon from '../pics/Travel.png';
import yankeesIcon from '../pics/Yankees.png';
import rangersIcon from '../pics/Rangers.png';
import knicksIcon from '../pics/Knicks.png';
// import tottenhamIcon from '../pics/Tottenham.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-content">
                <div className="mbti-container">
                    <div className = "about-title">Hi nice to meet you, the name's David!</div>
                    <div className = "mbti-title">
                       My programming journey:
                    </div>
                    <div className="about-description">
                       Graduated from Fullstack Academy bootcamp in 2023, I am now eagerly seeking opportunities in front-end programming. 
                       My journey into the world of coding began with a fascination for technology and the exciting prospect of 
                       transitioning careers. With a background in accounting/finance and digital media advertising, 
                       I bring a unique blend of analytical thinking and creative problem-solving to my work. 
                       I am passionate about creating intuitive and user-friendly web experiences, and I'm excited to 
                       contribute my skills to innovative projects.
                    </div>
                    <div className="mbti-title">
                        My interests:
                    </div>
                    <div className = "icons-title">Skills:</div>
                    <div className="icons">
                        <img src={jsIcon} alt="Javascript" />
                        <img src={reactIcon} alt="React" />
                        <img src={nextIcon} alt="Next" />
                    </div>
                    <div className = "icons-title">Hobbies:</div>
                    <div className="icons">
                        <img src={gamingIcon} alt="Gaming" />
                        <img src={baseballIcon} alt="Baseball" />
                        <img src={travelIcon} alt="Travel" />
                    </div>
                    <div className = "icons-title">Sports:</div>
                    <div className="icons">
                        <img src={yankeesIcon} alt="Yankees" />
                        <img src={rangersIcon} alt="Rangers" />
                        <img src={knicksIcon} alt="Knicks" />
                        {/* <img src={tottenhamIcon} alt="Tottenham" /> */}
                    </div>
                    <div className="mbti-title">
                        My MBTI personality type is "INFP"
                    </div>
                    <div className="mbti-description">
                        INFP (Mediator) is a personality type with the Introverted, Intuitive, Feeling, and Prospecting traits.
                    </div>
                    <div className="mbti-description">
                        Although they may seem quiet or unassuming, people with the INFP personality type (Mediators) have vibrant,
                        passionate inner lives. Creative and imaginative, they happily lose themselves in daydreams,
                        inventing all sorts of stories and conversations in their mind. INFPs are known for their sensitivity –
                        these personalities can have profound emotional responses to music, art, nature, and the people around them.
                        They are known to be extremely sentimental and nostalgic, often holding onto special keepsakes and memorabilia that
                        brighten their days and fill their heart with joy.
                    </div>
                </div>
            </div>
            <img src={MePic} alt="MePic" className="me-pic" />
        </div>
    );
}

export default About;
