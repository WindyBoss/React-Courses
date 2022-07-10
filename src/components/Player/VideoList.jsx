import { VideoListWrapper } from './Player.styled';
import PropTypes from 'prop-types';

import { themeContext } from '../../context/authContext'
import { ButtonStyled } from 'components/globalStyles';

export function VideoList({
  videos,
  onSelect,
}) {
  return (
    <themeContext.Consumer>
    {({mainTheme}) => (    

    <VideoListWrapper>
      {videos.map(({ id, link }, idx) => (
        <li key={id}>
          <ButtonStyled 
            addFeat={{
                height: '40px', 
                minWidth: '100px', 
                padding: '15px', 
                fontSize: '14px', 
                marginBottom: '10px', 
                marginRight: '20px' 
            }}
            colors={mainTheme.colors} 
            type="button" 
            onClick={() => onSelect(link)} >Video: {idx}
          </ButtonStyled>
        </li>
      ))}
    </VideoListWrapper>
    )}
    </themeContext.Consumer>              
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