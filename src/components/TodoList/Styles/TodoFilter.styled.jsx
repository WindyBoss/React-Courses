import styled from 'styled-components';

export const FilterContainer = styled.label`
display: inline-flex;
align-items: center;

background-color: ${props => props.colors.containerBgColor}; 
color: ${props => props.colors.counterColor};

`;

export const FilterText = styled.p`
margin-top: 0;
margin-bottom: 0;
margin-right: 15px;
`;