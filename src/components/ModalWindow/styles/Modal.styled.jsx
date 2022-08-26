import styled from 'styled-components';

export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,0.5);
`;

export const ModalContent = styled.div`
display: flex;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 800px;
width: ${props => {
    if (props.todolist) {
       return '100%'     
    }}};
padding: 12px;
border-radius: 4px;
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
background-color: ${props => {
    if (props.todolist) {
       return props.colors.reverseBtnBgColor;     
    } else {
        return props.colors.globalBgColor
    }
}};
border: ${props => `5px solid ${props.colors.btnBorderColor}` }
`;