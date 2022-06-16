import { VideoButton, VideoListWrapper } from './Player.styled';
import PropTypes from 'prop-types';

export function VideoList({
  videos,
  onSelect,
  colors
}) {
  return (
    <VideoListWrapper>
      {videos.map(({ id, link }, idx) => (
        <li key={id}>
          <VideoButton colors={colors} type="button" onClick={() => onSelect(link)}>Video: {idx}</VideoButton>
        </li>
      ))}
    </VideoListWrapper>
  );
};


VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    link: PropTypes.string
  })).isRequired,
  onSelect: PropTypes.func.isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};
