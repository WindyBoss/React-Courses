import { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledPlayer, PlayerPlace, LoaderText } from './Player.styled';

export class Player extends Component {
  state = {
    isVideoLoaded: false,
  };

  /*
  * Is use for setting default props
  */
  static defaultProps = {
    url: ''
  }

  /*
  * use componentDidMount with checking conditions, otherwise it will cause infinite function repeats or state change and your page will fall
  */

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ isVideoLoaded: false });
    };
  };

  render() {
    const { isVideoLoaded } = this.state;
    const { url, colors } = this.props;
    const showLoader = url && !isVideoLoaded;
    const playerWidth = isVideoLoaded ? '100%' : 0;
    const playerHeight = isVideoLoaded ? '100%' : 0;

    return (
      <PlayerPlace  colors={colors}>
        {showLoader && <LoaderText>Loading...</LoaderText>}
        {url && (
          <>
            <StyledPlayer
              url={url} // ReactPlayer needs only the video url
              width={playerWidth} // -> ReactPlayer parametr
              height={playerHeight} // -> ReactPlayer parametr
              onReady={() => this.setState({ isVideoLoaded: true })} // -> method of library ReactPlayer, which helps to follow if the video is loaded and change the state
              controls // -> show the controls of the ReactPlayer
            />
          </>
        )}
      </PlayerPlace>
    );
  };
};


/*
* Use Proptypes for checking type of props data of the component
*/

Player.propTypes = {
  url: PropTypes.string.isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};
