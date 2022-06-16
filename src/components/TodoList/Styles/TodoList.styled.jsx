import styled from 'styled-components';

export const StyledList = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const HeaderTextContainer = styled.div`
position: relative;
display: inline-block;
max-height: 220px;
min-width: 300px;
padding: 20px;
margin-right: 200px;
margin-left: 50px;
border: ${props => `1px solid ${props.colors.counterColor}`};

background-color: ${props => props.colors.containerBgColor};
color: ${props => props.colors.counterColor};
`;

export const ListEl = styled.li`
display: inline-flex;
align-items: center;
justify-content: space-between;

margin: 10px;

padding: 20px;
border: ${props => `1px solid ${props.colors.counterColor}`};
background-color: ${props => props.colors.containerBgColor};
color: ${props => props.colors.counterColor};

width: 600px;
`;

export const Text = styled.p`
margin-top: 0;
margin-bottom: 0;
font-size: 20px;
line-height: 1.5;
`;

export const ModalBtn = styled.button`
display: inline-block;
max-width: 150px;
padding: 5px;
  border: 1px solid black;
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

export const TodoListContainer = styled.div`
display: inline-flex;
flex-wrap: wrap;
  /* display: grid;
  width: 100%;
grid-template-columns: auto auto auto auto; */
`;
