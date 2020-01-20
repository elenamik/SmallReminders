import React from 'react';
import './Header.scss';
import LoggedIn from './LoggedIn';
import LoginButtons from './LoginButtons';
import { useHistory } from 'react-router-dom';

function Header (props) {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  return (
    <div id='header'>
      <div id='header-container'>
        <h1 id='header-title' onClick={handleClick}>Small Reminders</h1>
        <div id='header-side-container'>
          {props.user ? (
            <LoggedIn user={props.user} setUser={props.setUser} />
          ) : (
            <LoginButtons />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
