import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import NavBar from './components/nav-bar/nav-bar';
import LinksSideBar from './components/links-sidebar/links-sidebar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.Fragment>
    <NavBar />
    <LinksSideBar />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
