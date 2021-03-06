import React from 'react';
import NextButton from '../next-button/next-button';
import './home-banner.scss';

const HomeBanner = ({ heading }) => {
  return (
    <div className="home-banner">
      {heading ? (
        <h1>
          {heading}
          <span style={{ color: '#ff5851' }}>.</span>
        </h1>
      ) : (
        <h1>
          Home
          <span style={{ color: '#ff5851' }}>.</span>
        </h1>
      )}
      <div className="home-banner__next-section">
        <NextButton linkId="about-me" />
      </div>
    </div>
  );
};

export default HomeBanner;
