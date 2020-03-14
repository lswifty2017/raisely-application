import React from 'react';
import './App.scss';
import HomeBanner from './components/home-banner/home-banner';
import Section from './components/section/section';
import { Link, animateScroll as scroll } from 'react-scroll';
import NextButton from './components/next-button/next-button';

const App = () => {
  return (
    <div className="App">
      <HomeBanner heading="Hello"></HomeBanner>
      <Section sectionID="intro">
        <h3 id="section2">Test</h3>
        <NextButton />
      </Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
    </div>
  );
};

export default App;
