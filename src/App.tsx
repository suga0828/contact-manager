import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Provider, useSelector } from 'react-redux';
import store, { rrfProps } from './store';
import { isEmpty, isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const PrivateRoute = ({ children, ...rest }: any) => {
  const auth = useSelector((state: any) => state.firebase.auth);

  return (
    <Route
      {...rest}
      render={({ location }) => isLoaded(auth) && !isEmpty(auth)
        ? (children)
        : (<Redirect to={{ pathname: "/login", state: { from: location } }} />)
      }
    />
  );
}

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;
