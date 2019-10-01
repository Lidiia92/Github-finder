import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavBar extends Component {

   static defaultProps = {
       title: 'Github Finder'
   }

   static prpTypes = {
       title: PropTypes.string.isRequired
   }

    render() {
        return (
            <nav className="navbar bg-primary">
                <h3>
                    <i className="fab fa-github"></i> {this.props.title}
                </h3>
            </nav>
        )
    }
}

export default NavBar
