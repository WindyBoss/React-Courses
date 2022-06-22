import React, { Component, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { themeContext } from './authContext';
import { theme } from '../theme';


export default class ThemeProviderClass extends Component {
    state = {
        mainTheme: theme.light,
        changeTheme: () => {
            if (this.state.mainTheme === theme.dark) {
                this.setState( { mainTheme: theme.light });
            }
            if (this.state.mainTheme === theme.light) {
                this.setState( { mainTheme: theme.dark });
            }; 
        }
    };

   

    render() {
        return ( 
        <themeContext.Provider value = { this.state }> 
            { this.props.children } 
        </themeContext.Provider>
        );
    };
};


// export function ThemeProvider({ children }) {
//     const [mainTheme, setMainTheme] = useState(theme.light);

//     const changeTheme = () => {
//         if (mainTheme === theme.dark) {
//             setMainTheme(theme.light);
//         }
//         if (mainTheme === theme.light) {
//             setMainTheme(theme.dark);
//         };
//     };

//     const provideTheme = useMemo(() => {
//         return { mainTheme, changeTheme }
//     }, [mainTheme])

//     return ( 
//     <themeContext.Provider value = { provideTheme }> 
//         { children } 
//     </themeContext.Provider>
//     );
// };