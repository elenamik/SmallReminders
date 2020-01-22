import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Loader from './components/Loader';
import Welcome from './views/Welcome';
import Register from './views/Register';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import { getServerURL } from './config/urls';
import './styles/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App () {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const [autoSignInAttempted, setAutoSignInAttempted] = useState(false);

  useEffect(() => {
    console.log('using effect to login user');
    if (autoSignInAttempted) {
      console.log('already attempted');
      // return
    } else {
      console.log('logging in user');
      setLoading(true);
      axios.post(getServerURL() + '/user/checkAuth', {
      }).then(res => {
        if (res.data.user) {
          setUser(res.data.user);
          setAutoSignInAttempted(true);
          setLoading(false);
        } else {
          setUser(null);
        }
      }).catch(err => {
        console.log(err);
      });
    }
    setAutoSignInAttempted(true);
  }, []);

  function AppWrapper () {
    if (!user && loading) {
      return <Loader />;
    } else if (!user) {
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
        <div>
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
        </div>
      </Router>
    </div>
  );
}

export default App;
