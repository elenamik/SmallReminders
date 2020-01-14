import React from 'react';
import { useHistory } from 'react-router-dom';

function LoggedIn (props) {
  const history = useHistory();

  const handleDash = () => {
    history.push('/dashboard');
  };
  const handleLogout = () => {
    props.setUser(false);
    history.push('/');
  };

  return (
    <>
      Logged in as: {props.user.email}
      <button className='header-button' id='logout-button' onClick={handleDash}>Dashboard</button>
      <button className='header-button' id='logout-button' onClick={handleLogout}>Log Out</button>
    </>
  );
}

export default LoggedIn;
