import styled from 'styled-components';

export const TextContainer = styled.div`
display: inline-block;
margin-right: 20px;
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const Button = styled.button`
width: 150px;
font-size: 14px;
border: ${props => `1px solid ${props.colors.btnBorderColor}`};
background-color: ${props => props.colors.reverseBtnBgColor}; 
color: ${props => props.colors.reverseBtnTextColor};
border-radius: 5px;
margin-bottom: 5px;
:hover,
:focus {
background-color: ${props => props.colors.hoverBtnBgColor}; 
color: ${props => props.colors.hoverBtnColor};
}

`; 

export const TextType = styled.span`
font-weight: bold;
`;

export const TaskHeader = styled.h2`
margin-top: 0;
font-size: 18px;
`;

export const Text = styled.p`
margin-top: 0;
margin-bottom: 0;
font-size: 14px;
line-height: 1.5;
`;