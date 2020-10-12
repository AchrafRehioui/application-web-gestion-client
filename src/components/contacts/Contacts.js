import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state = {
            contacts: [
                {id: 1, name: "Achraf1", tel: "1234", email: "test1@test.fr"},
                {id: 2, name: "Achraf2", tel: "2234", email: "test2@test.fr"},
                {id: 3, name: "Achraf3", tel: "3234", email: "test3@test.fr"},

            ]
    }

    render() {
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map((contact) => (
                   <Contact data={contact} />
                )
                )}
            </div>
        )
    }
}

export default Contacts