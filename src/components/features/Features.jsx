import React from 'react';
import './Features.scss';
import Card from '../cards/Card';
// import LoginIcon from '@mui/icons-material/Login';

const Features = () => {
  return (
    <div className="features" id="features">
      <h1>Features</h1>
      <div className="cards">
        <Card
          src="https://cdn-icons-png.flaticon.com/512/3580/3580168.png  "
          alt="Sign up icon"
          content="Sign up as a pet owner or as a caretaker(choosing to be paid or to volunteer)."
          width="180px"
          height="350px"
        ></Card>
        <Card
          src="https://cdn-icons-png.flaticon.com/512/1076/1076877.png  "
          alt="Sign up icon"
          content="Pet owners: post requests for pet services and recieve quick responses. You can also rate the caretaking quality."
          width="180px"
          height="350px"
        ></Card>
        <Card
          src="https://cdn-icons-png.flaticon.com/512/2871/2871436.png "
          content="Caretakers: quickly find relevant caretaking opportunities."
          width="180px"
          height="350px"
        ></Card>
      </div>
    </div>
  );
};

export default Features;
