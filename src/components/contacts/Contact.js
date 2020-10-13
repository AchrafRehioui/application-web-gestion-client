import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './contact.css'

class Contact extends Component {
    state = {
        showContactToggle: true
    }

    showContact( myMessage ) {
        console.log('hello: ', myMessage);
        this.setState({
            showContactToggle: !this.state.showContactToggle
        });
    }

    onDeleteClick = () => {
        console.log('delete click');
        this.props.supprimerContactdeChild();
    }
    render() {
        const { name, tel, email } = this.props.data;
        return (

        <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                    { name } 
                    <i style={{ cursor: 'pointer'}} onClick={ this.showContact.bind(this, name) }  
                    className="fa fa-sort-down"></i>
                    <i style={{color: 'red', float: 'right', cursor: 'pointer'}} className="fa fa-times" aria-hidden="true"
                    onClick={this.onDeleteClick}
                    ></i>
                </h4>
                <div className="card-text">
                    {(this.state.showContactToggle) ? (
                         <ul className="list-group">
                             <li className="list-group-item">{ tel }</li>
                             <li className="list-group-item">{ email }</li>
                        </ul>
                    ) : null}
                </div>
            </div>
        </div>    
        )
    }
}

Contact.propTypes = {
    data: PropTypes.object.isRequired,
    supprimerContactdeChild: PropTypes.func.isRequired
}

export default Contact;