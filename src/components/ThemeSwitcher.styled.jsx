import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ThemeSwitcher = styled.button`
display: inline-block;
padding: 10px 20px;
font-size: 18px;

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

export const RoutesStyled = styled.ul`
display: flex;
list-style: none;
border-bottom: 1px solid black;
padding: 10px;
justify-content: center;
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
max-width: 150px;
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
