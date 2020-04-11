import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import LoggedIn from './LoggedIn';
import postIts from '../../const/post_its.png';
import hamburgerNav from '../../const/hamburger.png';
import Drawer from '../Drawer';
import Surface from '../Surface';
import './Header.scss';

function Header ({ user, handleLogOut }) {
  const [drawer, setDrawer] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  const LogInButtons = () => {
    return (
      <>
        <Link className='header-button' to='/login'>Log in</Link>
        <Link className='header-button' to='/register'>Sign Up</Link>
      </>
    );
  };

  return (
    <>
      <div id='header-container'>
        <div id='header'>
          <h1 id='header-title' onClick={handleClick}>
            <img id='header-icon' src={postIts} />
            Small Reminders
          </h1>
          <div id='header-side-container'>
            {user ? (
              <LoggedIn user={user} handleLogout={handleLogOut} />
            ) : LogInButtons()}
          </div>
          <div id='hamburger-nav-container'>
            <img id='hamburger-nav' src={hamburgerNav} onClick={() => setDrawer(true)} />
          </div>
        </div>
      </div>
      {drawer &&
        <div id='nav-drawer'>
          <Surface handleClose={() => setDrawer(false)}>
            <Drawer user={user} handleLogout={handleLogOut} />
          </Surface>
        </div>}
    </>
  );
}

export default Header;
