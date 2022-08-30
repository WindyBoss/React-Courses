import Button from '@mui/material/Button';
import { useState } from 'react';

import PropTypes from 'prop-types';

const btnStyles = (
  { btnTextColor, btnBgColor, btnBorderColor, hoverBtnColor, hoverBtnBgColor },
  hover
) => {
  return {
    color: !hover ? `${btnTextColor}` : `${hoverBtnColor}`,
    backgroundColor: !hover ? `${btnBgColor}` : `${hoverBtnBgColor}`,
    border: `1px solid ${btnBorderColor}`,
    transform: !hover ? 'scale(1)' : 'scale(1.1)',
  };
};

export default function ButtonStyled({
  children,
  onClick,
  colors,
  endIcon,
  type,
  disabled,
  btnBgColor,
  addFeat,
}) {
  const [hover, setHover] = useState(false);
  return (
    <Button
      style={
        btnBgColor
          ? {
              ...addFeat,
              ...btnStyles(colors, hover),
              color: btnBgColor,
              backgroundColor: '#b2b276',
            }
          : { ...addFeat, ...btnStyles(colors, hover) }
      }
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={onClick ?? onClick}
      variant="contained"
      type={type}
      endIcon={endIcon}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

ButtonStyled.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  endIcon: PropTypes.object,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  btnBgColor: PropTypes.string,
  addFeat: PropTypes.any,
};
