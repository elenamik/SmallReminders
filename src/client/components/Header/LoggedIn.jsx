import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import firebase from 'firebase/app';

function LoggedIn (props) {
  const history = useHistory();
  const handleLogout = () => {
    props.setUser(false);
    firebase.auth().signOut();
    history.push('/');
  };

  return (
    <>
      Logged in as: {props.user.email}
      <Link className='header-button' to='/dashboard'>Dashboard</Link>
      <Link className='header-button' onClick={handleLogout}>Log Out</Link>
    </>
  );
}

export default LoggedIn;
