import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "./ColorPicker.styled";

export default function ButtonList({options, setActiveIdx}) {
  return (
    <div style={{
      backgroundColor: 'white',
      display: 'inline-flex',
      marginLeft: '50%',
      transform: 'translateX(-50%)'
    }}>
      { options.map(({label, color}, index) => (
      <Button
        key={label}
        style={{ backgroundColor: color }}
        onClick={() => setActiveIdx(index)}>
      </Button>
      ))}
    </div>
  );
};

ButtonList.propTypes = {
  setActiveIdx: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
