import styled from 'styled-components';


export const Button = styled.button`
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 250ms linear;

  :focus{
    transform: scale(1.2);
  }
`;
