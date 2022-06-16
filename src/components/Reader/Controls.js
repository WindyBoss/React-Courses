import { Button } from './Reader.styled';
import PropTypes from 'prop-types';

export function Controls({
  onClick,
  colors,
  children,
  // index,
  // publicationsLength
}) {
  return (
    <>
      <Button
        colors={colors}
        onClick={() => onClick(-1)}
        /*
        * disabled={index === 0} // -> in that way react puts conditions to DOM element
        */
        type='button'>
        Back
      </Button>

      {children}

      <Button
        colors={colors}
        onClick={() => onClick(1)}
        /*
        * disabled={index + 1 === publicationsLength} // -> in that way react puts conditions to DOM element
        */
        type='button'>
        Front
      </Button>
    </>
  );
};


Controls.propTypes = {
  onClick: PropTypes.func.isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.any.isRequired,
};
