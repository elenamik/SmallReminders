import React from 'react';
import { useHistory, Link } from 'react-router-dom';

function LoggedIn ({ user, handleLogout }) {
  const history = useHistory();
  const logout = () => {
    handleLogout();
    history.push('/');
  };

  return (
    <div id='logged-in'>
      <div id='logged-in-as-text'>
        Logged in as: {user.email}
      </div>
      <Link className='header-button' to='/dashboard'>Dashboard</Link>
      <Link className='header-button' to='/' onClick={logout}>Log Out</Link>
    </div>
  );
}

export default LoggedIn;
