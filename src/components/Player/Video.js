import { Component } from 'react';
import PropTypes from 'prop-types';


import { Player } from './Player';
import { VideoList } from './VideoList';
import { VideoContainer, PlayerWrapper } from './Player.styled';

// -> this is the main container, which receives videolist, creates video select method, and play gives the selected link to component, which plays video
export class Video extends Component {
  state = { selectedVideo: null };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    const { selectedVideo } = this.state;
    const { colors, videos } = this.props;
    return (
      <VideoContainer colors={colors}>
        <h1>Selected video: {selectedVideo}</h1>
        <PlayerWrapper>
          <VideoList videos={videos} onSelect={this.selectVideo} colors={colors} />
          <Player url={selectedVideo}  colors={colors}/>
        </PlayerWrapper>
      </VideoContainer>
    );
  };
};

/*
* Use Proptypes for checking type of props data of the component
*/

Video.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired
  })).isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

