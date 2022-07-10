import { useRef } from "react";

import { ButtonStyled } from "components/globalStyles";
import { themeContext } from "context/authContext";

const MediaPlayer = ({source}) => {
    const playerRef = useRef(); // Here useRef helps to receive the allowance for controlling the media player and create Buttons for control
    const play = () => playerRef.current.play();
    const pause = () => playerRef.current.pause(); 

    return (
        <themeContext.Consumer>
        {({mainTheme}) => (    
        <div style={{display: 'flex', alignItems: 'center'}}>
            <video style={{display: 'inline-block', padding: '20px', margin: '30px', border: `1px solid ${mainTheme.colors.containerBorderColor}`}} ref={playerRef} src={source}>
                Sorry, your browser does not support embedded video
            </video>
            <div style={{ 
                display: 'inline-flex', 
                border: `1px solid ${mainTheme.colors.containerBorderColor}`,
                padding: '20px',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}>
                <ButtonStyled size='large' addFeat={{...btnStyles, marginRight: '15px'}} colors={mainTheme.colors} onClick={play}>Play</ButtonStyled>
                <ButtonStyled addFeat={btnStyles} colors={mainTheme.colors} onClick={pause}>Pause</ButtonStyled>
            </div>
        </div>
      )}
      </themeContext.Consumer>      
    );
};

const btnStyles = {
    fontSize: '20px',
    padding: '10px 20px, 10px, 20px',
}

export default  MediaPlayer;