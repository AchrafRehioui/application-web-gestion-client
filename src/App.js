import React from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/navbar/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css/';

function App() {
  return (
    <div className="App">
        <Navbar title= "Contacts list"/>
        <Contacts />
    </div>
  );
}

export default App;
