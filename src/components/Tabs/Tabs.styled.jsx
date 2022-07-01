import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 110px;
  height: 30px;
  border: ${props => `1px solid ${props.colors.counterColor}`};
  background-color: ${props => props.colors.btnBgColor};
  color: ${props => props.colors.btnTextColor};
  border-radius: 5px;
  padding: 20px;
  font-size: 20px;
  :hover,
  :focus {
  background-color: ${props => props.colors.hoverBtnBgColor};
  color: ${props => props.colors.hoverBtnColor};
  }
`;

export const ButtonEl = styled.li`
  list-style: none;
  margin-right: 40px;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;


export const TextContainer = styled.div`
display: flex;
  color: ${props => props.colors.mainText};
  border: ${props => `1px solid ${props.colors.containerBorderColor}`};
  width: 300px;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  align-items: center;
`;

export const TabContainer = styled.div`
display: flex;
padding: 20px;
margin: 20px;

`