import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: inline-flex;
  border: ${props => `1px solid ${props.colors.counterColor}`};

  background-color: ${props => props.colors.containerBgColor};
  color: ${props => props.colors.counterColor};

  width: 500px;
  min-height: 100%;
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
  border: ${props => `1px solid ${props.colors.counterColor}`};

  background-color: ${props => props.colors.containerBgColor};
  color: ${props => props.colors.counterColor};
  padding: 10px;
`;

export const Button = styled.button`
  width: 150px;
  font-size: 14px;
  margin-left: 40px;
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

export const InputWrapper = styled.input`
  border: ${props => `1px solid ${props.colors.btnBorderColor}`};
  background-color: ${props => props.colors.btnBgColor};
  color: ${props => props.colors.btnTextColor};
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 5px 10px;
  :hover,
  :focus {
  background-color: ${props => props.colors.hoverBtnBgColor};
  color: ${props => props.colors.hoverBtnColor};
  };
  ::placeholder {
    color: ${props => props.colors.placeHolderText};
    background-color: ${props => props.colors.containerBgColor};
  }
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
padding: 17% 10px 0 10px;
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
