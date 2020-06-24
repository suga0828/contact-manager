import React from 'react';

import './App.css';

import Contact from './components/Contact';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header brand="Contact Manager" />
      <Contact name="John Doe" email="jdoe@mail.com" phone="555-555-5555" />
    </div>
  );
}

export default App;
