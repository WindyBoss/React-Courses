import styled from 'styled-components';
import { Field } from 'formik'; // -> react form library

export const StyledField = styled(Field)`
  font-size: 16px;
  color: ${props => props.colors.placeHolderText};
  border: ${props => `1px solid ${props.colors.counterColor}`};
  width: 50%;
  padding: 5px 10px;

  ::placeholder{
    color: ${props => props.colors.placeHolderText};
  };

  border-radius: 4px;
`;

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
  margin: 0;
`;

export const FormContainer = styled.div`
  display: inline-block;
  border: ${props => `1px solid ${props.colors.counterColor}`};

  background-color: ${props => props.colors.containerBgColor};
  color: ${props => props.colors.counterColor};

  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const Button = styled.button`
  width: 150px;
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


