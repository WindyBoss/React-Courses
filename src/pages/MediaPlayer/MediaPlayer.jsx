import { useRef, useContext } from 'react';

import { ButtonStyled } from 'components/CommonComponents';
import { themeContext } from 'context/authContext';

export const MediaPlayer = ({ source }) => {
  const playerRef = useRef();
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();

  const { mainTheme } = useContext(themeContext);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <video
        style={{
          display: 'inline-block',
          padding: '20px',
          margin: '30px',
          border: `1px solid ${mainTheme.colors.containerBorderColor}`,
        }}
        ref={playerRef}
        src={source}
      >
        Sorry, your browser does not support embedded video
      </video>
      <div
        style={{
          display: 'inline-flex',
          border: `1px solid ${mainTheme.colors.containerBorderColor}`,
          padding: '20px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <ButtonStyled
          size="large"
          addFeat={{ ...btnStyles, marginRight: '15px' }}
          colors={mainTheme.colors}
          onClick={play}
        >
          Play
        </ButtonStyled>
        <ButtonStyled
          addFeat={btnStyles}
          colors={mainTheme.colors}
          onClick={pause}
        >
          Pause
        </ButtonStyled>
      </div>
    </div>
  );
};

const btnStyles = {
  fontSize: '20px',
  padding: '10px 20px, 10px, 20px',
};
