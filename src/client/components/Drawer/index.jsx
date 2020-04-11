import React from 'react';
import './Drawer.scss';
import { useHistory, Link } from 'react-router-dom';

function Drawer ({ user, handleLogout }) {
  const history = useHistory();
  const logout = () => {
    handleLogout();
    history.push('/');
  };

  if (user) {
    return (
      <div id='drawer'>
        <Link className='drawer-button' to='/dashboard'>Dashboard</Link>
        <Link className='drawer-button' onClick={logout}>Log Out</Link>

      </div>
    );
  } else {
    return (
      <div id='drawer'>
        <Link className='drawer-button' to='/'>About</Link>
        <Link className='drawer-button' to='/login'>Log in</Link>
        <Link className='drawer-button' to='/register'>Sign up</Link>
      </div>
    );
  }
}

export default Drawer;
