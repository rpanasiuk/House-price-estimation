import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

import App from './components/app.jsx';
import reducers from './reducers/index.jsx';

require("../scss/main.scss");

export const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
	<App />
	</Provider>,
	document.getElementById('app')
);