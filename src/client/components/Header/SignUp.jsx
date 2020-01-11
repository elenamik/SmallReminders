import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { getServerURL } from '../../config/urls';
import './Login.scss';

function SignUp () {
  const { register, handleSubmit, errors } = useForm();
  const [userError, setUserError] = useState(false);

  const onSubmit = (data) => {
    axios.post(getServerURL() + '/user/create', {
      email: data.email,
      password: data.password
    }).then(res => {
    }).catch(err => {
      setUserError(true);
      console.log(err);
    });
  };

  return (
    <div id='login-container'>
      <form id='login-form' onSubmit={handleSubmit(onSubmit)}>
        <label>username</label>
        <input name='email' type='email' ref={register({ required: true })} />
        {errors.email && 'email is required'}
        <label>password</label>
        <input name='password' type='password' minLength='6' ref={register({ required: true })} />
        {errors.password && 'password is required'}
        <button id='login-btn' type='submit'>Sign Up</button>
        {userError && 'Please check email and password'}
      </form>
    </div>
  );
}

export default SignUp;
