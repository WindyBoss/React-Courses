import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button'; // => Button Mui library styled element

export function Clocki({text, time, onClick, refferer}){
  return (
    <div style={{ border: '1px solid white', display: 'inline-block', padding: '10px', margin: '10px' }}>
      <p style={{color: 'white'}}>{text}: {time.toLocaleTimeString()}</p>
      <Button style={{ marginLeft: 'auto', marginTop: '10px' }} variant="contained" type='button' onClick={onClick} ref={refferer}>Stop</Button>
    </div>
  );
};

Clocki.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.instanceOf(Date).isRequired,
};
