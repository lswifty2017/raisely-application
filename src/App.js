import React from 'react';
import './App.scss';
import HomeBanner from './components/home-banner/home-banner';
import Section from './components/section/section';
import AboutMe from './sections/about-me/about-me';
import RoleSuitability from './sections/role-suitability/role-suitability';

const App = () => {
  return (
    <div className="App">
      <HomeBanner heading="Hello" />
      <AboutMe sectionID="about-me" />
      <RoleSuitability sectionID="role-suitability" />
      <Section></Section>
      <Section></Section>
    </div>
  );
};

export default App;
