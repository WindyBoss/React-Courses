import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Button = styled.button`
  width: 150px;
  font-size: 14px;
  margin-top: 20px;
  border: ${props => `1px solid ${props.colors.btnBorderColor}`};
  background-color: ${props => props.colors.btnBgColor};
  color: ${props => props.colors.btnTextColor};
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  :hover,
  :focus {
  background-color: ${props => props.colors.hoverBtnBgColor};
  color: ${props => props.colors.hoverBtnColor};
  }
`;

export const ThemeSwitcher = styled.button`
display: inline-block;
padding: 10px 20px;
font-size: 18px;
margin: 20px;

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
