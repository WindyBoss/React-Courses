import styled from 'styled-components';

export const PickerButton = styled.button`
width: 30px;
height: 30px;
background-color: ${props => props.color};
// Jsx allow to use js function inside css
border: ${props => props.index === props.active ? `5px solid black` : `none`};

:not(:last-child) {
    margin-right: 10px;
}

:hover {
    transform: translate(0px, 3px);
    cursor: pointer;
}
`;

export const Container = styled.div`
position: absolute;
top: 70%;
left: 70%;

display: inline-block;
border: 2px solid black;
border-radius: 4px;
background-color: ${props => props.color};

padding: 15px;
text-align: center;
`; 
