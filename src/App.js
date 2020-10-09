import React from 'react';
import Contact from './components/contacts/Contact';
import Navbar from './components/navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Contact/>
        <Contact/>
        <Contact/>
    </div>
  );
}

export default App;
