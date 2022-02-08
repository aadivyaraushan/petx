import React from 'react';
import './LandingPage.scss';
import Topbar from '../../components/topbar/Topbar';
import Intro from '../../components/intro/Intro';
import AboutUs from '../../components/about-us/AboutUs';
import Features from '../../components/features/Features';

const LandingPage = () => {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Intro />
        <AboutUs />
        <Features />
      </div>
    </div>
  );
};

export default LandingPage;
