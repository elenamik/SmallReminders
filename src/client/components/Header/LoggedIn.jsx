import React from 'react';
import { useHistory, Link } from 'react-router-dom';

function LoggedIn (props) {
  const history = useHistory();

  const handleLogout = () => {
    props.setUser(false);
    history.push('/');
  };

  return (
    <>
      Logged in as: {props.user.email}
      <Link className='header-button' id='logout-button' to='/dashboard'>Dashboard</Link>
      <Link className='header-button' id='logout-button' onClick={handleLogout}>Log Out</Link>
    </>
  );
}

export default LoggedIn;
