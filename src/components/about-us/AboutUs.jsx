import React from 'react';
import './AboutUs.scss';
import Cat from './cat.jpg';

const AboutUs = () => {
  return (
    <div className="about-us" id="aboutus">
      <div className="left">
        <h1>About Us</h1>
        <p>
          We understand the problem. It’s hard to find quality petcare services for
          your pet to take care of them while you’re unavailable at reasonable
          prices. That’s why we’ve created PetX. An online portal for you to find
          volunteers who are passionate about pets and willing to take care of yours.
        </p>
      </div>
      <div className="right">
        <img src={Cat} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
