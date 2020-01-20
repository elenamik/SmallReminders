import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
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
  const [user, setUser] = useState(false);
  const [autoSignInAttempted, setAutoSignInAttempted] = useState(false);

  useEffect(() => {
    if (autoSignInAttempted) {
      // return
    } else {
      setAutoSignInAttempted(true);
      axios.post(getServerURL() + '/user/checkAuth', {
      }).then(res => {
        if (res.data.user) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }, []);

  function PrivateRoute ({ children, ...rest }) {
    console.log('checking user for private route');
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />)}
      />
    );
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
            <PrivateRoute path='/dashboard'>
              <Dashboard user={user} />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
