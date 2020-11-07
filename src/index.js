import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'

// const store

ReactDOM.render(
  <div>
    <App />
  </div >,
  document.getElementById('root')
);


