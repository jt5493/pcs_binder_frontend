import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';
import binderReducer from './reducers/binderReducer'
import {BrowserRouter as Router} from 'react-router-dom'




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(binderReducer, composeEnhancers(applyMiddleware(ReduxThunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider >,
  document.getElementById('root')
);


