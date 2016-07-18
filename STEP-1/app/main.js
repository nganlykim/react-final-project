import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import persistState from 'redux-localstorage';

import App from './components/App';
import todoApp from './reducers';

import '../app/css/main.css';

//const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

let store = createStore(
	todoApp,
  logger
);

const logger = (store) => (next) => (action) => {
    const result = next(action);
    return result;
};

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);