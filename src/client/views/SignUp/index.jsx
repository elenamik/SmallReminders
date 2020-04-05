import React, { useState } from 'react';
import ViewTemplate from '../ViewTemplate';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import { getServerURL } from '../../config/urls';
import axios from 'axios';
import Error from '../../components/Error';
// import './SignUp.scss';
import 'babel-polyfill';

function SignUp (props) {
  const { register, handleSubmit, errors } = useForm();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = (data) => {
    setLoading(true);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
          .then(async (response) => {
            const user = response.user;
            console.log('user obtained from firebase auth');
            try {
              await axios.post(getServerURL() + '/user/add', { uid: user.uid });
              props.setUser(user);
              history.push('/dashboard');
            } catch {
              setErr(true);
              console.log('sign up error', err);
            }
          })
          .catch(err => {
            setErr(true);
            console.log('sign up error', err);
          })
      );
  };

  if (loading) {
    return (
      <ViewTemplate title='Sign Up'>
        loading ...
      </ViewTemplate>
    );
  } else {
    return (
      <ViewTemplate title='Sign Up' id='register-content'>
        <form id='login-form' onSubmit={handleSubmit(onSubmit)}>
          <div className='errors-container'>
            {err && <Error text='* email or password is invalid' />}
            {errors.email && <Error text='* email is required' />}
            {errors.password && <Error text='* password is required - 6 character minimum' />}
          </div>
          <label className='login-label'>email</label>
          <input className='login-input' name='email' type='email' ref={register({ required: true })} />
          <label className='login-label'>password</label>
          <input className='login-input' name='password' type='password' ref={register({ required: true, minLength: 6 })} />
          <button className='login-submit' type='submit'>Sign Up</button>
        </form>
      </ViewTemplate>
    );
  }
}

export default SignUp;
