import React, { useReducer } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header';

import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import { mockedContacts, reducer, ContactInfo, ContactActions } from './components/contacts/Contacts.reducer';

const App = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, { contacts: mockedContacts });
  const { contacts } = state;

  return (
    <Router>
      <Header brand="Contact Manager" />
      <div className="w-11/12 sm:w-3/4 max-w-screen-lg mx-auto my-10">
        <Switch>
          <Route exact path="/"><Contacts data={contacts} deleteHandler={(id: number) => dispatch({ type: ContactActions.delete, payload: id })} /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/contact/add"><AddContact addHandler={(contact: ContactInfo) => dispatch({ type: ContactActions.add, payload: contact })} /></Route>
          <Route><NotFound /></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
