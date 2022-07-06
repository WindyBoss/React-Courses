import { useState, useMemo } from 'react';
import authContext from './authContext';
import PropTypes from 'prop-types';

export default function Provider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onLogIn = () => {
        setIsLoggedIn(true);
    };

    const onLogOut = () => {
        setUser(null);
        setIsLoggedIn(false);
    };

    /*
     * useMemo - is a hook, which is used to memoize the value of a function, and only re-render when the function arguments change,
     * or the function itself returns a different value, or the function is called for the first time, or the function is called with different arguments.
     */

    const providerValue = useMemo(() => {
        return { user, isLoggedIn, onLogIn, onLogOut, setUser };
    }, [ isLoggedIn, user ]);

    return ( 
        <authContext.Provider value = { providerValue }> 
            { children } 
        </authContext.Provider>
    )
};

Provider.propTypes = {
    children: PropTypes.any.isRequired,
};