import { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { themeContext } from 'context/authContext';

import { Player } from './componenets/Player';
import { VideoList } from './componenets/VideoList';
import {
  VideoContainer,
  PlayerWrapper,
} from './styles/Player.styled';

export function Video({ videos }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { mainTheme } = useContext(themeContext);

  return (
    <VideoContainer colors={mainTheme.colors}>
      <h1>Selected video: {selectedVideo}</h1>
      <PlayerWrapper>
        <VideoList
          videos={videos}
          onSelect={setSelectedVideo}
          colors={mainTheme.colors}
        />
        <Player url={selectedVideo} colors={mainTheme.colors} />
      </PlayerWrapper>
    </VideoContainer>
  );
}

Video.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
