import styled from 'styled-components';
/*
* The best way to style React components is to use styled-components or emotion libraries
* npm install --save styled-components
* https://styled-components.com/docs/basics
* The styled components works the same as emotion, and React build components, so it wrap the HTML tag by adding styling and naming the tag type in styled-component variable

*/

export const PaintStyle = styled.div`
    display: block;
    width: 400px;
    background-color: #98d;
    justify-content: center;
    text-align: center; 
`;

export const ImageStyle = styled.img`
    display: block;
    width: 400px;
`;

export const PaintTitle = styled.h2`
    font-weight: bold;
`; 

export const PaintDesc = styled.p`
    font-weight: italic;
    text-decoration: none;
`;

export const Button = styled.button`
    background-color: #12f;
    color: white;
    text-align: center;
    padding: 10px 30px;
    margin-bottom: 20px;
`;

export const PaintList = styled.li`
    list-style: none;

    :not(:last-child) {
        margin-right: 20px;
    }
`;


export const Gallery = styled.ul`

    display: flex;
    justify-content: center;
`;