import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../context';
import './contact.css'
import axios from 'axios';

class Contact extends Component {
    
    state = {
        showContactToggle: true
    }

    showContact(myMessage) {
        console.log('hello: ', myMessage);
        this.setState({
            showContactToggle: !this.state.showContactToggle
        });
    }

    onDeleteClick = (id, dispatch) => {

        axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
            .then(dispatch({
                type: 'SUPPRESSION_CONTACT',
                payload: id
            }))
            .catch(err => console(err));

        
    }
    render() {
        const { id, name, phone, email } = this.props.data;

        return (
            <Consumer>
                { value => {
                        const { dispatch } = value;
                    return (
                        <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                {name}
                                <i style={{ cursor: 'pointer' }} onClick={this.showContact.bind(this, name)}
                                    className="fa fa-sort-down"></i>
                                <i style={{ color: 'red', float: 'right', cursor: 'pointer' }} className="fa fa-times" aria-hidden="true"
                                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                ></i>
                            </h4>
                            <div className="card-text">
                                {(this.state.showContactToggle) ? (
                                    <ul className="list-group">
                                        <li className="list-group-item">{phone}</li>
                                        <li className="list-group-item">{email}</li>
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    )
                }}
            </Consumer>
        )
        
    }
}

Contact.propTypes = {
    data: PropTypes.object.isRequired,
    supprimerContactdeChild: PropTypes.func.isRequired
}

export default Contact;