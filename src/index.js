import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// 1) import Card from './Card';
// 2) import CardList from './CardList';
// 3) Now making "App" as father of all components!
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots } from './reducers';
// import { robots } from './robots'; //Because robots.js doesn't return only 1 object, we have to use brackets!

const store = createStore(searchRobots)

ReactDOM.render(
  <React.StrictMode>
   < App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
