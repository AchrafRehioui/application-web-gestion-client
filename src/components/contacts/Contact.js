import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './contact.css'

class Contact extends Component {

    render() {
        const { name, tel, email } = this.props;
        return (

        <div class="card">
            <div class="card-body">
                <h4 class="card-title">{ name }</h4>
                <p clas="card-text">
                    <ul class="list-group">
                        <li class="list-group-item">{ tel }</li>
                        <li class="list-group-item">{ email }</li>
                    </ul>
                </p>
            </div>
        </div>    
        )
    }
}

Contact.propTypes = {
    data: PropTypes.object.isRequired
}

export default Contact;