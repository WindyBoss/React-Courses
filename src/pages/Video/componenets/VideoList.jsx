import React, { useContext } from 'react';
import { VideoListWrapper } from '../styles/Player.styled';
import PropTypes from 'prop-types';

import { themeContext } from '../../../context/authContext';
import { ButtonStyled } from 'components/CommonComponents';

export function VideoList({ videos, onSelect }) {
  const { mainTheme } = useContext(themeContext);

  return (
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
              marginRight: '20px',
            }}
            colors={mainTheme.colors}
            type="button"
            onClick={() => onSelect(link)}
          >
            Video: {idx}
          </ButtonStyled>
        </li>
      ))}
    </VideoListWrapper>
  );
}

VideoList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      link: PropTypes.string,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};
