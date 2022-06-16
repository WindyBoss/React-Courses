import PropTypes from 'prop-types';

import failedLoadImage from '../../images/Failed.jpeg';
import { FormWrapper, ErrorImage, ErrorText } from './Pokemon.styled';

export default function PokemonFallBackView({ message, colors }) { // ==> message is taken from service pokemonFetch, as thrown error
  return (
    <FormWrapper colors={colors} role='alert'>
      <ErrorImage src={failedLoadImage} alt='failedLoadImage' width='200'/>

      <ErrorText>{message}</ErrorText>
    </FormWrapper>
  );
};


PokemonFallBackView.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  message: PropTypes.string.isRequired,
};
