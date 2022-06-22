import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  max-width: 110px;
  margin-bottom: 15px;
  height: 30px;
  border: ${props => `1px solid ${props.colors.btnBorderColor}`};
  background-color: ${props => props.colors.btnBgColor};
  color: ${props => props.colors.btnTextColor};
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 20px;
  font-size: 20px;
  :hover,
  :focus {
  background-color: ${props => props.colors.hoverBtnBgColor};
  color: ${props => props.colors.hoverBtnColor};
  };
`;


export const TextContainer = styled.div`
padding: 20px;
min-height: 300px;
background-color: ${props => props.colors.btnBgColor};
color: ${props => props.colors.btnTextColor};
border: ${props => `3px solid ${props.colors.containerBorderColor}`};
max-width: 80%;
margin-top: 20px;
margin-right: auto;
margin-left: auto;
`;

export const ProgressWrapper = styled.p`
display: inline-block;
border-radius: 50%;
border: ${props => `3px solid ${props.colors.containerBorderColor}`};
padding: 20px;
  background-color: ${props => props.colors.btnBgColor};
  color: ${props => props.colors.btnTextColor};
  margin-left: 20px;
  margin-right: 20px;
`;