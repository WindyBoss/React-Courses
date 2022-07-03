import styled from 'styled-components';

export const BtnContainer = styled.div`
  display: inline-flex;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  background-color: ${props => props.colors.containerBgColor};
  border: ${props => `3px solid ${props.colors.containerBorderColor}`};

`;

export const CounterContainer = styled.div`
  min-width: 450px;
  margin: 20px;
  display: inline-block;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  color: white;
  background-color: ${props => props.colors.containerBgColor};
  color: ${props => props.colors.mainText};
  border: ${props => `3px solid ${props.colors.containerBorderColor}`};

`;

export const TotalClickCounter = styled.p`
font-size: 24px;
padding: 10px;
color: white;
margin-right: 10px;
margin-left: 10px;
color: ${props => props.colors.mainText};

`;

export const MainContainer = styled.div`
  display: flex;
  margin-left: 30%;
  transform: translateX(-30%);
`;