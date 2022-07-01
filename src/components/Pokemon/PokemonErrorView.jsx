import PropTypes from 'prop-types';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';

import { FormWrapper, ErrorText } from './Pokemon.styled';

export default function PokemonFallBackView({ message, colors }) {
  return (
    <FormWrapper colors={colors} role='alert'>
      <ErrorTwoToneIcon sx={{ fontSize: 140 }}/>

      <ErrorText>{message}</ErrorText>
    </FormWrapper>
  );
};

PokemonFallBackView.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  message: PropTypes.string.isRequired,
};