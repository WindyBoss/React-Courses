import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormContainer = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  padding: 15px;
  margin: 15px;
  border: ${props => `1px solid ${props.colors.counterColor}`};
  background-color: ${props => props.colors.containerBgColor};
`;

export const FieldContainer = styled(Field)`
  display: inline-block;
  padding: 5px 10px;
  font-size: 14px;
  margin: 5px;
  border: ${props => `1px solid ${props.colors.counterColor}`};
  color: ${props => props.colors.placeHolderText};
  border-radius: 5px;

  ::placeholder {
    color: ${props => props.colors.placeHolderText};
  }
`;

export const LoaderContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 0px auto auto auto;
width: 500px;
height: 500px;

`;


export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 70%;

  border: ${props => `1px solid ${props.colors.counterColor}`};
  background-color: ${props => props.colors.btnBgColor};
  color: ${props => props.colors.btnTextColor};

  border-radius: 5px;
  margin: 5px auto;
  padding: 5px 10px;

  font-size: 14px;

  :hover,
  :focus {
  background-color: ${props => props.colors.hoverBtnBgColor};
  color: ${props => props.colors.hoverBtnColor};
  };
`;

export const ControlContainer = styled.div`
position: absolute;
left: 50%;
top: 0px;
transform: translate(-50%, 250%);
display: flex;
align-items: center;
`;

export const TextContainer = styled.div`
position: relative;
padding: 20px;
min-height: 300px;
background-color: ${props => props.colors.btnBgColor};
color: ${props => props.colors.btnTextColor};
border: ${props => `3px solid ${props.colors.btnTextColor}`};
max-width: 80%;

margin-top: 130px;
margin-right: auto;
margin-left: auto;
`;

export const ProgressWrapper = styled.p`
display: inline-block;
border-radius: 50%;
border: ${props => `3px solid ${props.colors.btnTextColor}`};
padding: 20px;
  background-color: ${props => props.colors.btnBgColor};
  color: ${props => props.colors.btnTextColor};

  margin-left: 20px;
  margin-right: 20px;
`;
