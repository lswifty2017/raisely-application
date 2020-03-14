import React from 'react';
import profileImage from '../../images/profile-photo.jpg';
import NextButton from '../../components/next-button/next-button';
import './about-me.scss';

const AboutMe = ({ sectionID }) => {
  return (
    <div className="about-me" id={sectionID}>
      <div className="about-me__wrapper">
        <div className="about-me__content">
          <h2>I'm Liam.</h2>
          <h3>
            I develop digital solutions across the stack. Not too long ago I was
            teaching Mathematics and Physics in a secondary school.
            <span style={{ color: 'white' }}>
              {' '}
              I love to be challenged and have a passion for learning.
            </span>
          </h3>
        </div>
        <div className="about-me__photo">
          <img src={profileImage} alt="liam-swift-profile"></img>
        </div>
      </div>
      <NextButton linkId="role-suitability"></NextButton>
    </div>
  );
};

export default AboutMe;
