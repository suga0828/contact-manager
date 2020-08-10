import React, { Suspense } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import { AuthCheck } from 'reactfire';

import Spinner from './components/Spinner';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <AuthCheck fallback={<Login />}>
          <Dashboard />
        </AuthCheck>
      </Suspense>
    </Provider>
  );
};

export default App;
