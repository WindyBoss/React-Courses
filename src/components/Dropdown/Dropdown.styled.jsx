import styled from 'styled-components';


const DropdownBtn = styled.button`

margin: 10px;
background-color: ${props => props.theme.colors.btnBgColor};
color: ${props => props.theme.colors.btnTextColor};
border: ${props => `solid 2px ${props.theme.colors.btnBorderColor}`};
padding: 10px 20px;
`;

export default DropdownBtn;

