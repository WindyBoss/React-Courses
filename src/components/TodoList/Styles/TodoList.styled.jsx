import styled from 'styled-components';

export const StyledList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
`;


/*
* it is possible to use props inside style files, as is shown below by theme 
*/
export const HeaderTextContainer = styled.div`
display: inline-block;
max-width: 600px;
padding: 15px;
margin-right: 20px;
margin-bottom: 30px;
border: ${props => `1px solid ${props.colors.counterColor}`};

background-color: ${props => props.colors.containerBgColor}; 
color: ${props => props.colors.counterColor};
`;

export const ListEl = styled.li`
display: inline-flex;
align-items: center;
justify-content: space-between;

padding: 20px;
border: ${props => `1px solid ${props.colors.counterColor}`};
background-color: ${props => props.colors.containerBgColor}; 
color: ${props => props.colors.counterColor};

margin-bottom: 15px;
width: 600px;
`;

export const Text = styled.p`
margin-top: 0;
margin-bottom: 0;
font-size: 14px;
line-height: 1.5;
`;