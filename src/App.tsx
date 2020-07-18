import React from 'react';

import './App.css';

import Header from './components/layout/Header';

import Contacts from './components/contacts/Contacts';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header brand="Contact Manager" />
      <Contacts />
    </div>
  );
};

export default App;
