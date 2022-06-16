import { ProgressWrapper } from './Reader.styled';
import PropTypes from 'prop-types';


export function Progress({
  current,
  total,
  colors
}) {
  return (
    <>
      <ProgressWrapper
        colors={colors}
      >
        {current + 1}/{total}
      </ProgressWrapper>
    </>
  );
};



Progress.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
