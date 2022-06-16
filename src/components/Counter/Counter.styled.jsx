import styled from 'styled-components';

const Container = styled.div`

position: absolute;
top: 50%;
left: 70%;

display: inline-block;
background-color: ${props => props.colors.containerBgColor};
border: ${props => `solid 2px ${props.colors.containerBorderColor}`};
text-align: center;
justify-content: center; 

padding: 15px;

`;

export default Container;