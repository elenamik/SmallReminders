import React from 'react';
import { Link } from 'react-router-dom';

function LoginButtons (props) {
  return (
    <>
      <Link className='header-button' to='/login'>Log in</Link>
      <Link className='header-button' to='/register'>Sign up</Link>
    </>
  );
}

export default LoginButtons;
