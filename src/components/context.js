import React, { Component } from 'react'

const Context =  React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'SUPPRESSION_CONTACT': 
            return {
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
        default:
            return state;        
    }
}

export  class Provider extends Component {
    
    state = {
        contacts: [
            {id: 1, name: "Achraf1", tel: "1234", email: "test1@test.fr"},
            {id: 2, name: "Achraf2", tel: "2234", email: "test2@test.fr"},
            {id: 3, name: "Achraf3", tel: "3234", email: "test3@test.fr"},

        ],
        dispatch: action => this.setState(state => reducer(state, action))
}
    render() {
        return (
           <Context.Provider value={this.state}>
               {this.props.children}
           </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;