import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

import { FirebaseReducer, firebaseReducer } from 'react-redux-firebase';
import {
  reduxFirestore,
  firestoreReducer,
  createFirestoreInstance
} from 'redux-firestore';

import contactReducer, {
  ContactInfo,
  ContactsState
} from './reducers/contactReducer';

export const config = {
  apiKey: 'AIzaSyAeZLb9I_46ZwHkUV1zP2XporL1CUdZ1xM',
  authDomain: 'contact-manager-suga0828.firebaseapp.com',
  databaseURL: 'https://contact-manager-suga0828.firebaseio.com',
  projectId: 'contact-manager-suga0828',
  storageBucket: 'contact-manager-suga0828.appspot.com',
  messagingSenderId: '1052372834397',
  appId: '1:1052372834397:web:ea80e6aacea9798f4b95b4'
};

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

firebase.initializeApp(config);
firebase.auth();
firebase.firestore();

const createStoreWithFirebase = compose(
  reduxFirestore(firebase, rrfConfig as any)
)(createStore);

interface Profile {
  name: string;
  email: string;
}

interface Schema {
  contacts: ContactInfo[];
}

export interface AppState {
  contacts: ContactsState;
  firebase: FirebaseReducer.Reducer<Profile, Schema>;
  firestore: any;
}

const rootReducer = combineReducers<AppState>({
  contacts: contactReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const initialState = {};

const middleWare = [thunk];

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

export default store;
