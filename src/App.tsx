import React from 'react';

import { Provider } from 'react-redux';
import store, { rrfProps } from './store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import Dashboard from './pages/Dashboard';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <Dashboard />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;
