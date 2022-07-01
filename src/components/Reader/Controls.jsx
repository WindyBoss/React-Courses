import { Button } from './Reader.styled';
import PropTypes from 'prop-types';

import { ButtonStyled } from "components/globalStyles";

export function Controls({
  onClick,
  colors,
  children,
  // index,
  // publicationsLength
}) {
  return (
    <>
      <ButtonStyled
        colors={colors}
        onClick={() => onClick(-1)}
        type='button'>
        Back
      </ButtonStyled>

      {children}

      <ButtonStyled
        colors={colors}
        onClick={() => onClick(1)}
        type='button'>
        Front
      </ButtonStyled>
    </>
  );
};

Controls.propTypes = {
  onClick: PropTypes.func.isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.any.isRequired,
};