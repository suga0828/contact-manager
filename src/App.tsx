import React from 'react';

import './App.css';

import Contacts from './components/Contacts';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto my-10 flex flex-col items-center">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
