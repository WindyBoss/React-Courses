import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ButtonList from './components/ButtonList';
import { themeContext } from 'context/authContext';

const options = [
  { label: 'red', color: 'red' },
  { label: 'green', color: 'green' },
  { label: 'blue', color: 'blue' },
  { label: 'yellow', color: 'yellow' },
  { label: 'black', color: 'black' },
  { label: 'white', color: 'white' },
  { label: 'pink', color: 'pink' },
  { label: 'purple', color: 'purple' },
  { label: 'orange', color: 'orange' },
];

export function ColorPicker() {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  const { label } = options[activeOptionIndex];

  const { mainTheme } = useContext(themeContext);

  return (
    <>
      <div
        style={{
          backgroundColor: `${
            mainTheme.colors.globalBgColor === label
              ? `${'#' + Math.floor(Math.random() * 16777215).toString(16)}`
              : 'transparent'
          }`,
          padding: '20px',
          display: 'inline-block',
          margin: '20px',
          border: `1px solid ${mainTheme.colors.containerBorderColor}`,
          borderRadius: '5px',
        }}
      >
        <h2 style={{ color: `${label}` }}>ColorPicker by Hooks</h2>
        <p style={{ color: `${label}` }}>Chosen color {label}</p>
      </div>
      <ButtonList options={options} setActiveIdx={setActiveOptionIndex} />
    </>
  );
}

ColorPicker.propTypes = {
  options: PropTypes.array.isRequired,
};
