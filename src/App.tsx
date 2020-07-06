import React from 'react';

import './App.css';

import Header from './components/layout/Header';

import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header brand="Contact Manager" />
      <AddContact />
      <Contacts />
    </div>
  );
};

export default App;
