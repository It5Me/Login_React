import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './store/reducer/rootReducer';
import thunk from 'redux-thunk';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { getFirestore, reduxFirestore,createFirestoreInstance } from 'redux-firestore';
import firebaseConfig from './config/firebaseconfig';
import firebase from 'firebase/app';
import {Provider} from 'react-redux';

const store=createStore(
  rootReducer,
  //Apply middleware
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
    reduxFirestore(firebase,firebaseConfig)

    )

  )
const rrfConfig ={
  userProfile:"users",
  useFirestoreForProfile:true,
};
const rrfProps ={
  firebase,
  config:rrfConfig,
  dispatch:store.dispatch,
  createFirestoreInstance,
  presence:"presence",
  sessions: "sessions",
};
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
