import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'; //Since later added request robots reducer, to pass two reducers to store, added combineReducers (combines them into one root)
import { createLogger } from 'redux-logger'; //Logger middleware 
import thunkMiddleware from 'redux-thunk';
// 1) import Card from './Card';
// 2) import CardList from './CardList';
// 3) Now making "App" as father of all components!
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';
// import { robots } from './robots'; //Because robots.js doesn't return only 1 object, we have to use brackets!

const logger = createLogger(); //this creates the logger (see your console and change searchfield state)

const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); //THIS IS THE STORE 
/*(ONE SINGLE STATE) AND PARAMETER IS THE REDUCER(searchRobots)!!!! Later added applyMiddleware parameter and added two different packages as arguments */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      < App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
