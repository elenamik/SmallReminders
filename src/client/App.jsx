import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Welcome from './views/Welcome';
import SignUp from './views/SignUp';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import firebase from 'firebase/app';
import Footer from './components/Footer';
import 'babel-polyfill'; // lets you use async / await

import './styles/App.scss';
import {
  HashRouter as Router,
  Switch,
  Route
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
            <SignUp setUser={setUser} />
          </Route>
          <Route path='/dashboard'>
            <Dashboard user={user} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
