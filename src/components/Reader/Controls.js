import { Button } from './Reader.styled';
import PropTypes from 'prop-types';

export function Controls({
  onClick,
  colors,
  index,
  publicationsLength,
  children,
}) {
  return (
    <>
      <Button
        colors={colors}
        onClick={() => onClick(-1)}
        disabled={index === 0}
        type='button'
        style={{maxHeight: '30px'}}>
        Back
      </Button>
      {children}
      <Button
        colors={colors}
        onClick={() => onClick(1)}
        disabled={index + 1 === publicationsLength}
        type='button'
        style={{maxHeight: '30px'}}>
        Front
      </Button>
    </>
  );
};



Controls.propTypes = {
  onClick: PropTypes.func.isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  publicationsLength: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired,
};
