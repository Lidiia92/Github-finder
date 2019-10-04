import React from 'react';
import PropTypes from 'prop-types';

const NavBar = (props) => {

    return (
        <nav className="navbar bg-primary">
            <h3>
                <i className="fab fa-github"></i> {props.title}
            </h3>
        </nav>
    )
}

NavBar.defaultProps = {
    title: 'Github Finder'
}

NavBar.prpTypes = {
    title: PropTypes.string.isRequired
}

export default NavBar
