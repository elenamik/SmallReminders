import React, { useState } from 'react';
import Header from './components/Header';
import Welcome from './views/Welcome/';
import Register from './views/Register/';
import Login from './views/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './styles/App.scss';

function App () {
  const [user, setUser] = useState(false);
  console.log('user is', user);
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
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
