import styled from 'styled-components';
import ReactPlayer from 'react-player';

/*
* ReactPlayer - react method (library), which helps to play videos
*/

export const LoaderText = styled.h2`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -20%);
`;

export const PlayerPlace = styled.div`
position: relative;
display: block;
width: 100%;
min-width: 700px;
min-height: 400px;
text-align: center;
justify-content: center;
align-items: center;
border: ${props => `2px solid ${props.colors.containerBorderColor}`};
padding: 25px;
border-radius: 5px;

`

export const PlayerWrapper = styled.div`
display: flex;
width: 100%
`;

export const StyledPlayer = styled(ReactPlayer)`
width: 100%;
`;

export const VideoContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -20%);
padding: 20px;
display: inline-block;
border: ${props => `2px solid ${props.colors.containerBorderColor}`};
background-color: ${props => props.colors.containerBgColor};
color: ${props => props.colors.mainText};
border-radius: 5px;
`;

export const VideoListWrapper = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
padding: 0;
`;