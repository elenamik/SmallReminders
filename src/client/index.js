import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeFirebaseApp } from './utils/firebase';

initializeFirebaseApp(process.env.NODE_ENV);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();
