import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { StyledPlayer, PlayerPlace, LoaderText } from '../styles/Player.styled';

export function Player ({ url, colors }) {
    const [ isVideoLoaded, setIsVideoLoaded ] = useState(false);

  useEffect(() => {
    setIsVideoLoaded(false);
  }, [url])

    const showLoader = url && !isVideoLoaded;
    const playerWidth = isVideoLoaded ? '100%' : 0;
    const playerHeight = isVideoLoaded ? '100%' : 0;

    return (
      <PlayerPlace  colors={colors}>
        {showLoader && <LoaderText>Loading...</LoaderText>}
        {url && (
          <>
            <StyledPlayer
              url={url}
              width={playerWidth}
              height={playerHeight}
              onReady={() => setIsVideoLoaded(true)}
              controls
            />
          </>
        )}
      </PlayerPlace>
    );
};

Player.propTypes = {
  url: PropTypes.string,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};