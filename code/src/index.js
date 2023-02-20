import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Reducers';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import Config from './Config/Config'
const initialState = {};

const store = createStore(rootReducer, initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(Config), // redux binding for firebase
    reduxFirestore(Config) // redux bindings for firestore
  )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
