import { useState } from 'react';
import PropTypes from 'prop-types';

import { themeContext } from "context/authContext";

import { Player } from '../components/Player/Player';
import { VideoList } from '../components/Player/VideoList';
import { VideoContainer, PlayerWrapper } from '../components/Player/Player.styled';

export function Video ({videos}) {
  const [ selectedVideo, setSelectedVideo ] = useState(null);
  return (
    <themeContext.Consumer>
    {({mainTheme}) => (      
    <VideoContainer colors={ mainTheme.colors }>
      <h1>Selected video: { selectedVideo }</h1>
      <PlayerWrapper>
        <VideoList videos={ videos } onSelect={ setSelectedVideo } colors={ mainTheme.colors } />
        <Player url={ selectedVideo }  colors={ mainTheme.colors }/>
      </PlayerWrapper>
    </VideoContainer>
    )}
    </themeContext.Consumer>          
  );
};

Video.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired
  })).isRequired,
};