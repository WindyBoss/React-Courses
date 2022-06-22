import { TextContainer } from './Reader.styled';
import PropTypes from 'prop-types';

export function TextWrapper({
  publication,
  colors
}) {
  return (
    <>
      <TextContainer
        colors={colors}
      >
        <h2>{publication.title}</h2>
        <p>{publication.text}</p>
      </TextContainer>
    </>
  );
};


TextWrapper.propTypes = {
  publication: PropTypes.shape({
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};