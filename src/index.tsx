import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './assets/main.css';

import * as serviceWorker from './serviceWorker';

import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: 'AIzaSyAeZLb9I_46ZwHkUV1zP2XporL1CUdZ1xM',
  authDomain: 'contact-manager-suga0828.firebaseapp.com',
  databaseURL: 'https://contact-manager-suga0828.firebaseio.com',
  projectId: 'contact-manager-suga0828',
  storageBucket: 'contact-manager-suga0828.appspot.com',
  messagingSenderId: '1052372834397',
  appId: '1:1052372834397:web:ea80e6aacea9798f4b95b4',
  measurementId: 'G-RQ1T21QKJ4'
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
