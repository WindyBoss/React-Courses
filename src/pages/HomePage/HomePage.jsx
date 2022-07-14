import React, { useContext} from 'react';
import styled from 'styled-components';
import { themeContext } from 'context/authContext';


const HomepageContainer = styled.div`
padding: 8px;
margin-top: 20px;
border-radius: 8px;
color: #fff;
font-size: 40px;
font-weight: 500;
text-align: center;


color: ${props => props.colors.mainText};
background-image: ${props => `repeating-linear-gradient(
    -45deg,
    ${props.colors.btnBgColor},
    ${props.colors.btnBgColor} 15px,
    ${props.colors.containerBgColor} 15px,
    ${props.colors.containerBgColor} 30px
  )`};
`;

export function Homepage () {
    const { mainTheme } = useContext(themeContext);

    return (
        <HomepageContainer colors={mainTheme.colors}>This is the home page of React-Router Practice</HomepageContainer>
    )
}

