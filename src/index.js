import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 1) import Card from './Card';
// 2) import CardList from './CardList';
// 3) Now making "App" as father of all components!
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// import { robots } from './robots'; //Because robots.js doesn't return only 1 object, we have to use brackets!

ReactDOM.render(
  <React.StrictMode>
   < App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
