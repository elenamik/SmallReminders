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
    <div id='logged-in'>
      <div id='logged-in-as-text'>
        Logged in as: {props.user.email}
      </div>
      <Link className='header-button' to='/dashboard'>Dashboard</Link>
      <Link className='header-button' onClick={handleLogout}>Log Out</Link>
    </div>
  );
}

export default LoggedIn;
