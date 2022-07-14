import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: inline-flex;
  border: ${props => `1px solid ${props.colors.containerBorderColor}`};
  background-color: ${props => props.colors.containerBgColor};
  color: ${props => props.colors.mainText};
  width: 500px;
  padding: 10px;
  justify-content: center;
`;

export const IdleWrapper = styled.div`
  min-height: 230px;
  width: 500px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border: ${props => `1px solid ${props.colors.containerBorderColor}`};
  background-color: ${props => props.colors.containerBgColor};
  color: ${props => props.colors.mainText};
  padding: 10px;
`;

export const SpinWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 200px;
width: 200px;
border: ${props => `1px solid ${props.colors.btnBorderColor}`};
background-color: ${props => props.colors.hoverBtnBgColor};
`;

export const ErrorImage = styled.img`
border: 1px solid black;
padding: 10px;
`;

export const ErrorText = styled.h1`
margin: auto;
font-size: 20px;
text-align: center;
`;

export const PokemonContainer = styled.div`
margin: 20px;
display: flex;
flex-direction: column;
`

export const PokemonName = styled.h1`
padding: 5px;
margin-bottom: 10px;
`

export const PokemonImage = styled.img`
border: 0px solid black;
`

export const PokemonInfoContainer = styled.div`
text-align: center;
display: flex;
flex-direction: column;
margin-left: 40px;
padding: 10px;
`
export const PokemonStats = styled.ul`
text-align: start;
`;


export const PendingContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 200px;
height: 230px;
`