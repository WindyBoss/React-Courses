import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

export const ThemeSwitcher = styled.div`
display: inline-block;
border-radius: 50%;
font-size: 18px;
margin: 20px;
background-color: transparent;

:hover {
  background-color: ${props => props.colors.hoverBtnBgColor};
}
`;

export const RoutesStyled = styled.ul`
display: flex;
flex-wrap: wrap;
list-style: none;
border-bottom: ${props => `1px solid ${props.colors.containerBorderColor}`};
padding: 10px;
justify-content: center;
align-items: center;
max-width: 80%;
margin-right: auto;
margin-left: auto;
`;

export const List = styled.li`
:not(:last-child) {
  margin-right: 20px;
}

`;

export const LinkStyled = styled(RouterLink)`
text-decoration: none;
&.active > button {
  background-color: ${props => props.colors.placeHolderText}  !important;
}
`;
