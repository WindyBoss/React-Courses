import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
list-style: none;
border-bottom: ${props => `1px solid ${props.colors.containerBorderColor}`};
padding: 10px;
justify-content: center;
align-items: center;
`;

export const List = styled.li`
:not(:last-child) {
  margin-right: 20px;
}
`;

export const LinkStyled = styled(Link)`
text-decoration: none;
font-size: 22px;
display: inline-block;
max-width: 250px;
padding: 5px;
  border: ${props => `1px solid ${props.colors.counterColor}`};
  background-color: ${props => props.colors.btnBgColor};
  color: ${props => props.colors.btnTextColor};
  border-radius: 5px;
  margin-bottom: 5px;
  :hover,
  :focus {
    background-color: ${props => props.colors.hoverBtnBgColor};
    color: ${props => props.colors.hoverBtnColor};
  }
`;
