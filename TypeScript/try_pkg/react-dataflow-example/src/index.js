import LogRocket from 'logrocket'
LogRocket.init('wzhd2u/storehistorytracking')

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';

import * as reducers from './store/reducers';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk, LogRocket.reduxMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

LogRocket.identify('Xiaosha')
LogRocket.getSessionURL(url => console.log(url))