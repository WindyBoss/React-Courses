import styled from 'styled-components';
import { Field } from 'formik';

export const StyledField = styled(Field)`
  font-size: 16px;
  color: ${props => props.colors.btnBgColor};
  border: ${props => `1px solid ${props.colors.counterColor}`};
  width: 50%;
  padding: 5px 10px;
  ::placeholder {
    color: ${props => props.colors.btnBgColor};
  }
  border-radius: 4px;
`;

export const ErrorText = styled.ul`
  margin-left: 20px;
  color: ${props => props.colors.mainText};
`;

export const FormLabelContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

export const FormTitle = styled.h3`
  margin-top: 0px;
  text-align: center;
  margin-bottom: 30px;
`;

export const FormLabel = styled.label`
  width: 130px;
`;

export const FormContainer = styled.div`
  display: inline-block;
  background-color: ${props => props.colors.containerBgColor};
  color: ${props => props.colors.mainText};
  max-width: 800px;
  height: 100%;
  padding: 10px;
`;
