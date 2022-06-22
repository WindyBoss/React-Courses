import React, { Component } from 'react';
import PropTypes from 'prop-types';
import authContext from './authContext';

/*
 * authContext.Provider - is a component-wrapper, which is responsible for providing the information (props) to the rest of the app
 * inside authContext.Provider - we can hold the props (data or methods), which can be used in all components in App
 */

// ! This AuthProvider is made by class component. The AuthProvider on hooks is in Provide.js

export default class AuthProvider extends Component {
    state = {
        user: null,
        logIn: () => {
            this.setState({ user: 'Mango' });
        },
        logOut: () => {
            this.setState({ user: null });
        },
    };

    render() {
        return ( 
        <authContext.Provider value = { this.state }> 
            { this.props.children } 
        </authContext.Provider>
        );
    };
};

AuthProvider.propTypes = {
    children: PropTypes.any.isRequired,
};