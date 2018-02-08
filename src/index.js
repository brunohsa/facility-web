import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './js/containers/App';
import './style/index.css';

import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import combineReducers from './js/reducers/rootReducer'
import thunk from 'redux-thunk';

import { Provider } from 'react-redux' 

const store = createStore(
  combineReducers, 
  applyMiddleware(thunk)
);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
