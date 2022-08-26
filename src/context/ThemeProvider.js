import React, { useMemo, useState } from 'react';
import { themeContext } from './themeContext';
import { theme } from '../theme';

export default function ThemeProvider({ children }) {
    const [mainTheme, setMainTheme] = useState(theme.light);

    const provideTheme = useMemo(() => {
        const changeTheme = () => {
            if (mainTheme === theme.dark) {
                setMainTheme(theme.light);
            }
            if (mainTheme === theme.light) {
                setMainTheme(theme.dark);
            }
        };
        return { mainTheme, changeTheme };
    }, [mainTheme]);

    return ( <
        themeContext.Provider value = { provideTheme } > { children } <
        /themeContext.Provider>
    );
}