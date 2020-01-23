import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Login.scss';

function Login (props) {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('signing in');
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        const user = firebase.auth().currentUser;
        props.setUser(user);
        history.push('/dashboard');
      }).catch((err) => {
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
