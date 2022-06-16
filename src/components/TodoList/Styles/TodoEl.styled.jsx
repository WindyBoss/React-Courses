import styled from 'styled-components';

export const TextContainer = styled.div`
display: inline-block;
margin-right: 20px;
`;

export const ButtonContainer = styled.div`
display: inline-flex;
flex-direction: column;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;

width: 180px;
height: 30px;
font-size: 14px;
border: ${props => `1px solid ${props.colors.btnBorderColor}`};
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

export const TextType = styled.span`
font-weight: bold;
`;

export const TaskHeader = styled.h2`
margin-top: 0;
font-size: 20px;
`;

export const Text = styled.p`
margin-top: 0;
margin-bottom: 0;
font-size: 16px;
line-height: 1.5;
`;

export const ButtonText = styled.p`
margin: 0px;
margin-left: 10px;
`;
