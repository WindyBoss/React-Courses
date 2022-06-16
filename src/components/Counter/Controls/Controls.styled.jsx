import styled from 'styled-components';


const Button = styled.button`

color: ${props => props.colors.btnTextColor};
background-color: ${props => props.colors.btnBgColor};
padding: 5px 10px;
border-radius: 5px;
border: ${props => `solid 2px ${props.colors.btnBorderColor}`};

:not(:last-child) {
    margin-right: 20px;
    margin-top: 20px;
}

:hover,
:focus {
color: ${props => props.colors.hoverBtnColor};
background-color: ${props => props.colors.hoverBtnBgColor};
}

`;

export default Button;