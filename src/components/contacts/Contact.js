import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Contact extends Component {

    render() {
        const { name, tel, email} = this.props;
        return (
            <div>
                <h1>Contact: { name } </h1>
                <ul>
                    <li>Tel:  { tel } </li>
                    <li> { email }</li>
                </ul>
            </div>
        )
    }
}

Navbar.propTypes = {
    name: PropTypes.string.isRequired,
    tel: PropTypes.string, 
    email: PropTypes.string,
}
export default Contact;