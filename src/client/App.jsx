import React from 'react';
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
  return (
    <div id='app'>
      <Header />
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ul>
          <hr />
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path='/'>
              <Welcome />
            </Route>
            <Route exact path='/login'>
              <Login />
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
