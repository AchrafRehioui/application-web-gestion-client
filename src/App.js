import React, { Component } from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import { Provider } from './components/context';  
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css/';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {
    render() {
      return (
        <Provider>
            <div className="App">
               <Navbar title= "Contacts list"/>
               <Contacts />
            </div>
        </Provider>
      );
    }
}

export default App;
