import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Welcome from './views/Welcome/';
import Register from './views/Register/';
import Login from './views/Login';
import './styles/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// for development - to log in a test user automatically
import { autoLogin } from './utils/login';

function App () {
  const [user, setUser] = useState(false);
  const autoLogInUser = username => {
    autoLogin(username, setUser);
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      autoLogInUser('testuser1');
    }
  }, []);

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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
