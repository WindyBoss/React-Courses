import { TextContainer } from './Reader.styled';
import PropTypes from 'prop-types';

export function TextWrapper({
  publication,
  colors,
  children
}) {
  return (
    <>
      <TextContainer
        colors={colors}
      >
        {children}
        <h2>{publication.title}</h2>
        <p>{publication.text}</p>
      </TextContainer>
    </>
  );
};

TextWrapper.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  publication: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.any.isRequired,
};
