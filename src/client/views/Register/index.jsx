import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import { getServerURL } from '../../config/urls';
import axios from 'axios';

function Register (props) {
  const { register, handleSubmit, errors } = useForm();
  const [userError, setUserError] = useState(false);
  const history = useHistory();

  const onSubmit = (data) => {
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((response) => {
        const user = response.user;
        props.setUser(user);
        console.log('user obtained from firebase auth', user, typeof (user.uid));
        axios.post(getServerURL() + '/user/add',
          {
            uid: user.uid,
            phoneNumber: '9732002000'
          }
        );
        return user;
      })
      .then((user) => {
        history.push('/dashboard');
      })
      .catch(err => {
        setUserError(true);
        console.log('sign up error', err);
      });
  };

  return (
    <div id='button-container'>
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

export default Register;
