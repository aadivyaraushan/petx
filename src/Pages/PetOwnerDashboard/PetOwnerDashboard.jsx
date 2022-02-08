import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PetOwnerDashboard.scss';
import { useEffect, useState, useContext } from 'react';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import UserContext from '../../components/user/User';

const PetOwnerDashboard = () => {
  let name = 'Daniel';
  let caretakerName = 'John';
  let navigate = useNavigate();

  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const { user, setUser } = useContext(UserContext);
  const [task, newTask] = useState('');
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="petowner">
      <h1>Greetings!</h1>
      <button
        className="sign-out"
        onClick={() => {
          navigate('/');
          logout();
        }}
      >
        Sign Out
      </button>
      <h3>Posting an opportunity?</h3>
      <div className="block" id="block1">
        <form>
          <div className="field">
            <label htmlFor="title">Title of job: </label>
            <input type="text" id="title" className="input"></input>
          </div>
          <div className="field">
            <label htmlFor="start_date">Start date(in format DD/MM/YY): </label>
            <input type="text" id="start_date" className="input"></input>
          </div>
          <div className="field">
            <label htmlFor="end_date">End date(in format DD/MM/YY): </label>
            <input type="text" id="end_date" className="input"></input>
          </div>
          <div className="field">
            <label htmlFor="location">Location: </label>
            <input type="text" id="location" className="input"></input>
          </div>
          <div className="field">
            <label htmlFor="frequency">Frequency(daily/weekly): </label>
            <input type="text" id="frequency" className="input"></input>
          </div>
          <div className="field">
            <label htmlFor="pet_desc">Short description of pet: </label>
            <input type="text" id="pet_desc" className="input"></input>
          </div>
          <button className="submit">Submit</button>
        </form>
      </div>

      <h3>Review some of your recent caretaking experiences!</h3>
      <div className="block" id="block2">
        <form>
          <div className="field">
            <label>Rate your experience with {caretakerName}</label>
            <div className="input">
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                size="large"
              />
            </div>
          </div>
          <div className="field">
            <label for="review">Write a review too!</label>
            <div className="input">
              <textarea id="review"></textarea>
            </div>
          </div>
          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PetOwnerDashboard;
