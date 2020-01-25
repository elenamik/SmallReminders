import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import { getServerURL } from '../../config/urls';
import axios from 'axios';
import Error from '../../components/Error';
import './Register.scss';

function Register (props) {
  const { register, handleSubmit, errors } = useForm();
  const [err, setErr] = useState(false);
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
        setErr(true);
        console.log('sign up error', err);
      });
  };

  return (
    <div className='view'>
      <div className='view-header-container'>
        <div className='view-header'>
          <h1 className='view-header-text'>Sign Up</h1>
        </div>
      </div>
      <div className='view-content-container'>
        <div className='view-content' id='register-content'>
          <form id='login-form' onSubmit={handleSubmit(onSubmit)}>
            <div className='errors-container'>
              {err && <Error text='email or password is invalid' />}
              {errors.email && <Error text='email is required' />}
              {errors.password && <Error text='password is required - 6 character minimum' />}
            </div>
            <label className='login-label'>email</label>
            <input className='login-input' name='email' type='email' ref={register({ required: true })} />
            <label className='login-label'>password</label>
            <input className='login-input' name='password' type='password' ref={register({ required: true, minLength: 6 })} />
            <button className='login-submit' type='submit'>Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
