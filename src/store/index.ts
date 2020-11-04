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

import { FIREBASE_CONFIG } from '../firebase/constant';

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

firebase.initializeApp(FIREBASE_CONFIG);
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
