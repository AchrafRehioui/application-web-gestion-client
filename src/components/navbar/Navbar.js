import React from 'react';
import PropTypes from 'prop-types'


const Navbar = (props)  => {
    const { title } = props;
    return (
        <div>
            <h1>{ title }</h1>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired 
}

export default Navbar;