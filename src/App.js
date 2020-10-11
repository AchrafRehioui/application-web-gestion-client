import React from 'react';
import './App.css';
import Contact from './components/contacts/Contact';
import Navbar from './components/navbar/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css/';

function App() {
  return (
    <div className="App">
        <Navbar title= "Contacts list"/>
        <Contact name="Achraf" email="test@est.fr" tel="1234"/>
        <Contact name="Achraf2" email="test2@est.fr" tel="2234"/>
        <Contact name="Achraf3" email="test3@est.fr" tel="3234"/>
    </div>
  );
}

export default App;
