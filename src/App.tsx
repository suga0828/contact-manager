import React from 'react';

import './App.css';

import Contacts from './components/Contacts';
import Header from './components/Header';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Contacts />
    </div>
  );
}

export default App;
