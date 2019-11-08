import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const NavBar = (props) => {

    return (
        <nav className="navbar bg-primary">
            <h3>
                <i className="fab fa-github"></i> {props.title}
            </h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
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
