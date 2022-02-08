import React, { useState, useContext } from 'react';
import './Topbar.scss';
import Modal from '../modal/Modal';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase';
import UserContext from '../user/User';

const Topbar = () => {
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenLogIn, setIsOpenLogIn] = useState(false);
  let navigate = useNavigate();

  // Firebase authentication code
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerRole, setRegisterRole] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const { value, setValue } = useContext(UserContext);
  // const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    console.log(value);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      if (document.getElementById('role').value === 'petowner')
        navigate('/petowner');
      else if (document.getElementById('role').value === 'caretaker')
        navigate('/caretaker');
    } catch (error) {
      alert(
        'Error: Invalid input. The entered email may be already registered OR the email is in an incorrect format OR you need to make your password stronger(include uppercase and lowercase characters)'
      );
      // alert(error);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
      if (document.getElementById('role').value === 'petowner')
        navigate('/petowner');
      else if (document.getElementById('role').value === 'caretaker')
        navigate('/caretaker');
    } catch (error) {
      alert('Error: Invalid Input');
      console.log(error);
    }
    // add user role to another database of roles
  };

  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <h2>Name</h2>
          </div>
          <div className="itemContainer">
            <a href="#intro">Intro</a>
          </div>
          <div className="itemContainer">
            <a href="#aboutus">About Us</a>
          </div>
          <div className="itemContainer">
            <a href="#features">Features</a>
          </div>
        </div>
        <div className="right">
          <button className="topbar-button" onClick={() => setIsOpenLogIn(true)}>
            Log In
          </button>

          <Modal open={isOpenLogIn} onClose={() => setIsOpenLogIn(false)}>
            <div className="sign-up-modal-content">
              <h1>Log In</h1>
              <form>
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(event) => setLoginEmail(event.target.value)}
                ></input>
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(event) => setLoginPassword(event.target.value)}
                ></input>
                <button
                  className="topbar-button"
                  onClick={(event) => {
                    event.preventDefault();
                    login();
                    if (document.getElementById('role').value === 'petowner')
                      navigate('/petowner');
                    else if (document.getElementById('role').value === 'caretaker')
                      navigate('/caretaker');
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </Modal>

          <button className="topbar-button" onClick={() => setIsOpenSignUp(true)}>
            Sign Up
          </button>

          <Modal open={isOpenSignUp} onClose={() => setIsOpenSignUp(false)}>
            <div className="sign-up-modal-content">
              <h1>Sign Up</h1>
              <form>
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(event) => setRegisterEmail(event.target.value)}
                ></input>
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(event) => setRegisterPassword(event.target.value)}
                ></input>
                <label for="role">You're a: </label>
                <select
                  name="role"
                  id="role"
                  onChange={(event) => setRegisterRole(event.target.value)}
                >
                  <option value="petowner">Pet Owner</option>
                  <option value="caretaker">Caretaker</option>
                </select>
                <button
                  className="topbar-button"
                  onClick={(event) => {
                    event.preventDefault();
                    register();
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
