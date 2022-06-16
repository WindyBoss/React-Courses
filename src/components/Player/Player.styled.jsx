import styled from 'styled-components';
import ReactPlayer from 'react-player';

/*
* ReactPlayer - react method (library), which helps to play videos
*/

export const LoaderText = styled.h2`
position: absolute;
top: 50%;
left: 50%;

transform: translate(-50%, -50%);
`;

export const PlayerPlace = styled.div`
position: relative;
display: block;
width: 100%;
min-width: 500px;
text-align: center;
justify-content: center;
align-items: center;
  border: ${props => `1px solid ${props.colors.counterColor}`};
padding: 5px;
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

transform: translate(-50%, -50%);

padding: 20px;
  display: inline-block;
  border: ${props => `1px solid ${props.colors.counterColor}`};

  background-color: ${props => props.colors.containerBgColor};
  color: ${props => props.colors.counterColor};
`;

export const VideoButton = styled.button`
margin-right: 10px;
width: 80px;
  background-color: ${props => props.colors.btnBgColor};
  color: ${props => props.colors.btnTextColor};
  border: ${props => `1px solid ${props.colors.btnBorderColor}`};

  border-radius: 5px;
  margin-bottom: 5px;
  :hover,
  :focus {
  background-color: ${props => props.colors.hoverBtnBgColor};
  color: ${props => props.colors.hoverBtnColor};
  };
`;

export const VideoListWrapper = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
padding: 0;
`;
