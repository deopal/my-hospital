import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import docAuth from "./store/reducers/doc_auth";
import patAuth from "./store/reducers/pat_auth";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer=combineReducers({
  docauth:docAuth,
  patauth:patAuth
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));


ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>
   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
