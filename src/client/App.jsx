import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Welcome from './views/Welcome';
import Register from './views/Register';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import firebase from 'firebase/app';
import 'babel-polyfill'; // lets you use async / await

import './styles/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App () {
  const [user, setUser] = useState(false);

  const attemptAutoLogin = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('detected user', user.uid);
        setUser(user);
      } else {
        console.log('no user detected');
      }
    });
  };

  useEffect(() => {
    console.log('attempting sign in');
    if (!user) {
      attemptAutoLogin(); // async func needs to be called this way due to the spec of 'useEffect'
    }
  }, []);

  function AppWrapper () {
    if (!user) {
      return (
        <Redirect to={{ pathname: '/login' }} />
      );
    } else {
      return (
        <Route exact path='/dashboard'>
          <Dashboard user={user} />
        </Route>
      );
    }
  }

  return (
    <div id='app'>
      <Router>
        <Header user={user} setUser={setUser} />
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route exact path='/login'>
            <Login setUser={setUser} />
          </Route>
          <Route path='/register'>
            <Register setUser={setUser} />
          </Route>
          <AppWrapper path='/dashboard'>
            <Dashboard user={user} />
          </AppWrapper>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
