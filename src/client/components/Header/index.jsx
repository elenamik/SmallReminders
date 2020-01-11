import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import './Header.scss';

function Header () {
  return (
    <div id='header'>
      <div id='header-container'>
        <h1>Small Reminders</h1>
        <Login />
        <SignUp />
      </div>
    </div>
  );
}

export default Header;
