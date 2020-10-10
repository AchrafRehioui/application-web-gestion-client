import React, { Component } from 'react'


class Contact extends Component {

    render() {
        const { name, tel, email} = this.props;
        return (
            <div>
                <h1>Contact: { name } </h1>
                <ul>
                    <li>Tel:  { tel } </li>
                    <li> { email}</li>
                </ul>
            </div>
        )
    }
}

export default Contact;