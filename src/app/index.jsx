import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';
// import { reducer as form } from "redux-form";

import App from './components/app.jsx';
import reducers from './reducers/index.jsx';

require("../scss/main.scss");

// const reducer = combineReducers({reducers, routing: routerReducer, form})

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
	<App />
	</Provider>,
	document.getElementById('app')
);