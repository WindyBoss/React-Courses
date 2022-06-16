import styled from 'styled-components';

export const FilterContainer = styled.label`
display: inline-flex;
align-items: center;

background-color: ${props => props.colors.containerBgColor};
color: ${props => props.colors.counterColor};
margin-top: 30px;
`;

export const FilterText = styled.p`
margin-top: 0;
margin-bottom: 0;
margin-right: 15px;
font-size: 20px;
`;

export const InputFilter = styled.input`
  font-size: 16px;
  color: ${props => props.colors.counterColor};
  border: ${props => `1px solid ${props.colors.counterColor}`};
  width: 50%;
  padding: 5px 10px;

  ::placeholder{
    color: ${props => props.colors.placeHolderText};
  };

`;
