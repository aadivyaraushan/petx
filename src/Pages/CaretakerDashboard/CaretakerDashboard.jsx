import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './CaretakerDashboard.scss';
import ReactDOM from 'react-dom';
import Modal from './../../components/modal/Modal';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { userLoggedIn } from '../../components/topbar/Topbar';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import userContext from '../../components/user/User';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const CaretakerDashboard = () => {
  const [value, setValue] = useState(0);
  const [reviewsJSON, setReviewsJSON] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const jobCollectionRef = collection(db, 'Jobs');
  const [reviews, setReviews] = useState([]); //reviews
  const reviewsCollectionRef = collection(db, 'reviews');
  useEffect(() => {
    const getJobs = async () => {
      const data = await getDocs(jobCollectionRef);
      setJobs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(jobs);
      console.log(user);
    };
  }, []);
  useEffect(() => {
    const getReviews = async () => {
      const data_2 = await getDocs(reviewsCollectionRef);
      setReviews(data_2.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  }, []);
  const { user, setUser } = useContext(userContext);

  console.log(user);
  let navigate = useNavigate();
  let onSubmitMethod = () => navigate('/');

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    let opportunitiesContainer = document.getElementById('block1');
    let dataJSON = require('./data.json'); //e
    for (let item in dataJSON) {
      // time calculations
      let endDateArr = dataJSON[item]['end_time'].split('.');
      let startDateArr = dataJSON[item]['start_time'].split('.');
      let endTime = new Date(endDateArr[2], endDateArr[1] - 1, endDateArr[0]);
      let startTime = new Date(
        startDateArr[2],
        startDateArr[1] - 1,
        startDateArr[0]
      );
      let time = '';
      if (dataJSON[item]['frequency'] === 'weekly')
        time = Math.abs(endTime - startTime) / (1000 * 3600 * 24 * 7) + ' weeks';
      else if (dataJSON[item]['frequency'] === 'daily')
        time = Math.abs(endTime - startTime) / (1000 * 3600 * 24) + ' days';

      ReactDOM.render(
        <button className="item" onClick={() => setIsOpenModal(true)}>
          {item} • {time} • {dataJSON[item]['total_time'] + ' hours'} •{' '}
          {dataJSON[item]['pet_desc']} • {dataJSON[item]['location']}
        </button>,
        opportunitiesContainer
      );
    }

    let reviewsContainer = document.getElementById('block2');
    let reviewsJSON = require('./reviews.json');

    for (let item in reviewsJSON) {
      ReactDOM.render(
        <div className="reviewContainer">
          <p className="petOwner">{reviewsJSON[item]['pet_owner']}</p>
          <div className="rating">
            <Rating name="read-only" value={reviewsJSON[item]['rating']} readOnly />{' '}
          </div>

          <p className="review">{reviewsJSON[item]['review']}</p>
        </div>,
        reviewsContainer
      );
    }
  });

  return (
    <div className="caretaker">
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
      <h3>Looking for work to do?</h3>
      <div className="block" id="block1"></div>

      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <div className="disclaimer-modal-content">
          <h1>Confirm that you want to volunteer for this?</h1>
          <div className="buttons">
            <button className="yes" onClick={() => setIsOpenModal(false)}>
              Yes
            </button>
            <button className="no" onClick={() => setIsOpenModal(false)}>
              No
            </button>
          </div>
        </div>
      </Modal>

      <h3>Here are some recent reviews you've gotten</h3>
      <div className="block" id="block2"></div>
    </div>
  );
};

export default CaretakerDashboard;
