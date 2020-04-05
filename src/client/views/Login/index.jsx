import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ViewTemplate from '../ViewTemplate';
import Error from '../../components/Error';
import firebase from 'firebase/app';
import 'firebase/auth';
// import './Login.scss';

function Login (props) {
  const history = useHistory();
  const [err, setErr] = useState(false);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
          .then(() => {
            setErr(false);
            const user = firebase.auth().currentUser;
            props.setUser(user);
            history.push('/dashboard');
          }).catch((err) => {
            console.log(err);
            setErr(true);
          })
      );
  };
  return (
    <ViewTemplate title='Login'>
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
        <button className='login-submit' type='submit'>Log In</button>
      </form>
    </ViewTemplate>
  );
}

export default Login;
