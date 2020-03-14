import React from 'react';
import './home-banner.scss';
import { render } from '@testing-library/react';

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <h1>
        Hello<span style={{ color: '#ff5851' }}>.</span>
      </h1>
    </div>
  );
};

export default HomeBanner;
