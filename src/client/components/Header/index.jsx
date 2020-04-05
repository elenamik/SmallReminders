import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import LoggedIn from './LoggedIn';
import postIts from '../../const/post_its.png';
import hamburgerNav from '../../const/hamburger.png';
import './Header.scss';

function Header (props) {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  const LoggedInButtons = () => {
    return (
      <>
        <Link className='header-button' to='/login'>Log in</Link>
        <Link className='header-button' to='/register'>Sign Up</Link>
      </>
    );
  };

  return (
    <div id='header-container'>
      <div id='header'>
        <h1 id='header-title' onClick={handleClick}>
          <img id='header-icon' src={postIts} />
          Small Reminders
        </h1>
        <div id='header-side-container'>
          {props.user ? (
            <LoggedIn user={props.user} setUser={props.setUser} />
          ) : LoggedInButtons()}
        </div>
        <div id='hamburger-nav-container'>
          <img id='hamburger-nav' src={hamburgerNav} />
        </div>
      </div>
    </div>
  );
}

export default Header;
