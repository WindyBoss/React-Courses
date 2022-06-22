import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from 'components/globalStyles';
import { themeContext } from '../../context/authContext'

export default function ButtonList({options, setActiveIdx}) {
  return (
    <themeContext.Consumer>
    {({mainTheme}) => (  
    <div style={{
      display: 'inline-flex',
      marginLeft: '50%',
      transform: 'translateX(-50%)'
    }}>
      { options.map(({label, color}, index) => (
      <ButtonStyled
        key={label}
        onClick={() => setActiveIdx(index)}
        colors={mainTheme.colors}
        btnBgColor={color}
        addFeat={ { marginRight: '10px' } }
        >
        {label}  
      </ButtonStyled>
      ))}
    </div>
    )}
    </themeContext.Consumer>      
  );
};

ButtonList.propTypes = {
  setActiveIdx: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
