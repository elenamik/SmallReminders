import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { getServerURL } from '../../config/urls';

function LoggedIn (props) {
  const history = useHistory();
  const handleLogout = () => {
    props.setUser(false);
    history.push('/');
    window.localStorage.setItem('token', 'undefined');
    axios.get(getServerURL() + '/user/logout')
      .then((res) => {
        console.log(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
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
