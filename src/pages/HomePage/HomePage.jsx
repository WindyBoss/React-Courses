import React, { useContext} from 'react';
import { themeContext } from 'context/authContext';
import { HomepageContainer } from 'components/CommonComponents';



export function Homepage () {
    const { mainTheme } = useContext(themeContext);

    return (
        <HomepageContainer colors={mainTheme.colors}>This is the home page of React-Router Practice</HomepageContainer>
    )
}

