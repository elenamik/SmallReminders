import React from 'react';
import './Login.scss';

function Login () {
  return (
    <div id='login-container'>
      <form id='login-form'>
        <label>username</label>
        <input type='text' />
        <label>password</label>
        <input type='password' />
        <button id='login-btn' type='submit'>Log In</button>
      </form>
    </div>
  );
}

export default Login;
