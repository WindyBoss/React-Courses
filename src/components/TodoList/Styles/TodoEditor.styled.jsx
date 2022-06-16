import styled from 'styled-components';

export const FormLabelContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
`;

export const FormTitle = styled.h3`
margin-top: 0px;
text-align: center;
`;


export const FormLabel = styled.label`
    width: 130px;
`;

export const ErrorText = styled.ul`
color: red;
`;

export const FormContainer = styled.div`
display: inline-block;
border: ${props => `1px solid ${props.colors.counterColor}`};

background-color: ${props => props.colors.containerBgColor}; 
color: ${props => props.colors.counterColor};
padding: 15px;

position: absolute;
top: 5%;
left: 50%;
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
`;