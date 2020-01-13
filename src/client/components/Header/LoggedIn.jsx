import React from 'react';
import { useHistory } from 'react-router-dom';

function LoggedIn (props) {
  const history = useHistory();
  const handleClick = () => {
    props.setUser(false);
    history.push('/');
  };

  return (
    <>
      Logged in as: {props.user.email}
      <button className='header-button' id='logout-button' onClick={handleClick}>Log Out</button>
    </>
  );
}

export default LoggedIn;
