import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { themeContext } from '../../../context/authContext';
import { ButtonStyled } from 'components/CommonComponents';

export const Clocki = ({ text, time, onClick }) => {
  const { mainTheme } = useContext(themeContext);

  return (
    <div
      style={{
        border: `1px solid ${mainTheme.colors.containerBorderColor}`,
        display: 'inline-block',
        padding: '10px',
        margin: '10px',
      }}
    >
      <p
        style={{ color: `${mainTheme.colors.mainText}`, marginBottom: '10px' }}
      >
        {text}: {time.toLocaleTimeString()}
      </p>
      <ButtonStyled colors={mainTheme.colors} type="button" onClick={onClick}>
        Stop
      </ButtonStyled>
    </div>
  );
};

Clocki.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.instanceOf(Date).isRequired,
};
