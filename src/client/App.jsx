import React from 'react';
import Header from './components/Header';
import Main from './views/Main/';
import './styles/App.scss';

function App () {
  return (
    <div id='app'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
