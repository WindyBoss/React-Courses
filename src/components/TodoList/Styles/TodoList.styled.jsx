import styled from 'styled-components';
import { Field } from 'formik';

export const StyledList = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const HeaderTextContainer = styled.div`
position: relative;
display: inline-block;
max-height: 250px;
min-width: 400px;
padding: 20px;
margin-right: 200px;
margin-top: 20px;
margin-left: 50px;
border: ${props => `2px solid ${props.colors.containerBorderColor}`};
background-color: ${props => props.colors.containerBgColor};
color: ${props => props.colors.mainText};
`;

export const ListEl = styled.li`
display: inline-flex;
align-items: center;
justify-content: space-between;
margin: 10px;
padding: 20px;
border: ${props => `2px solid ${props.colors.containerBorderColor}`};
background-color: ${props => props.colors.containerBgColor};
color: ${props => props.colors.counterColor};
width: 600px;
`;

export const TodoListContainer = styled.div`
display: inline-flex;
flex-wrap: wrap;
  /* display: grid;
  width: 100%;
grid-template-columns: auto auto auto auto; */
`;

export const FilterContainer = styled.label`
display: inline-flex;
align-items: center;
background-color: ${props => props.colors.containerBgColor};
color: ${props => props.colors.counterColor};
margin-top: 30px;
`;

export const TextContainer = styled.div`
display: inline-block;
margin-right: 20px;
color: ${props => props.colors.mainText};

`;

export const ButtonContainer = styled.div`
display: inline-flex;
flex-direction: column;
`;

export const TextType = styled.span`
font-weight: bold;
`;

export const TaskHeader = styled.h2`
margin-top: 0;
font-size: 17px;
align-items: center;
display: flex;
`;

export const Text = styled.p`
margin-top: 0;
margin-bottom: 0;
font-size: 16px;
line-height: 1.5;
`;

export const StyledField = styled(Field)`
  font-size: 16px;
  color: ${props => props.colors.btnBgColor};
  border: ${props => `1px solid ${props.colors.counterColor}`};
  width: 50%;
  padding: 5px 10px;
  ::placeholder{
    color: ${props => props.colors.btnBgColor};
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
  margin-bottom: 30px;
`;


export const FormLabel = styled.label`
  width: 130px;
`;

export const ErrorText = styled.ul`
  margin-left: 20px;
  color: ${props => props.colors.mainText};
`;

export const FormContainer = styled.div`
  display: inline-block;
  background-color: ${props => props.colors.containerBgColor};
  color: ${props => props.colors.mainText};
  width: 100%;
  height: 100%;
  padding: 10px;
`;