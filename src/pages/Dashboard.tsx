import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/layout/Header';

import Contacts from '../components/contacts/Contacts';
import AddContact from '../components/contacts/AddContact';
import EditContact from '../components/contacts/EditContact';
import About from '../components/pages/About';
import NotFound from '../components/pages/NotFound';

const Dashboard = (): JSX.Element => {
  return (
    <Router>
      <Header brand="Contact Manager" />
      <div className="container my-10">
        <Switch>
          <Route exact path="/">
            <Contacts />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact/add">
            <AddContact />
          </Route>
          <Route exact path="/contact/edit/:id">
            <EditContact />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Dashboard;
