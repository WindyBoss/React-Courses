import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from 'components/CommonComponents';
import { themeContext } from '../../../context/authContext';

export default function ButtonList({ options, setActiveIdx }) {
  const { mainTheme } = useContext(themeContext);

  return (
    <div
      style={{
        display: 'inline-flex',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {options.map(({ label, color }, index) => (
        <ButtonStyled
          key={label}
          onClick={() => setActiveIdx(index)}
          colors={mainTheme.colors}
          btnBgColor={color}
          addFeat={{ marginRight: '10px' }}
        >
          {label}
        </ButtonStyled>
      ))}
    </div>
  );
}

ButtonList.propTypes = {
  setActiveIdx: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
