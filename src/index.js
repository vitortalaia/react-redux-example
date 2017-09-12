import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { logger } from 'redux-logger'

import App from './components/app';

import { tasks } from './reducers/tasks'

const initialState = {
  tasks: [
    { id: 0, status: 0, name: 'Hello' },
    { id: 1, status: 0, name: 'React' },
    { id: 2, status: 0, name: 'World' },
  ]
}

const reducers = combineReducers({ tasks })

const store = createStore(reducers, initialState, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
