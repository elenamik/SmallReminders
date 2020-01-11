import React from 'react';
import Login from './Login';
import './Header.scss';

function Header () {
  return (
    <div id='header'>
      <div id='header-container'>
        <h1>Small Reminders</h1>
        <Login />
      </div>
    </div>
  );
}

export default Header;
