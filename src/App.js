import React, { Component } from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import AjoutContact from './components/contacts/AjoutContact';
import { Provider } from './components/context';  
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css/';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import './App.css';

class App extends Component {
    render() {
      return (
        <Provider>
          <Router>
          <div className="App">
               <Navbar title= "Liste des contacts"/>
              <Switch>
              <Route  exact path="/" component={Contacts}/>
              <Route  exact path="/contact/ajout" component={AjoutContact}/>
              <Route  exact path="/about" component={About}/>
              </Switch>
            </div>
          </Router> 
        </Provider>
      );
    }
}

export default App;
