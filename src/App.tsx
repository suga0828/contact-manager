import React from 'react';

import './App.css';

import Header from './components/Header';
import Contacts from './components/Contacts';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header brand="Contact Manager" />
      <Contacts />
    </div>
  );
};

export default App;
