import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { getServerURL } from '../../config/urls';
import './Login.scss';
import { useHistory } from 'react-router-dom';

function Login (props) {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    axios.post(getServerURL() + '/user/login', {
      email: data.email,
      password: data.password
    }).then(res => {
      props.setUser(res.data.user);
      history.push('/');
    }).catch(err => {
      console.log(err);
    });
  };
  return (
    <div id='button-container'>
      <form id='login-form' onSubmit={handleSubmit(onSubmit)}>
        <label>username</label>
        <input name='email' type='email' ref={register({ required: true })} />
        {errors.email && 'email is required'}
        <label>password</label>
        <input name='password' type='password' ref={register({ required: true, minLength: 6 })} />
        {errors.password && 'password is required'}
        <button id='login-btn' type='submit'>Log In</button>
      </form>
    </div>
  );
}

export default Login;
