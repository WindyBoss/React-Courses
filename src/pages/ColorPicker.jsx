import React, { Component, useState, memo } from "react";
import PropTypes from 'prop-types';
import ButtonList from "components/ColorPicker/ButtonList";
import { themeContext } from "context/authContext";

class ColorPickerClass extends Component {
  state = { activeOptionIndex: 0 };

  setActiveIdx = idx => {
    this.setState({ activeOptionIndex: idx });
  };

  render() {
    const { activeOptionIndex } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIndex];

    return (
      <themeContext.Consumer>
      {({mainTheme}) => {
        return (        
      <>
      <div 
        style={{ 
          backgroundColor: `${mainTheme.colors.globalBgColor === label ? `${ '#' + Math.floor(Math.random()*16777215).toString(16)}` : 'transparent'}`, 
          padding: '20px', 
          display: 'inline-block', 
          margin: '20px', 
          border: `1px solid ${mainTheme.colors.containerBorderColor}`,
          borderRadius: '5px', 
        }}>
          <h2 style={{color: `${label}`}}>ColorPicker by Class</h2>
          <p style={{color: `${label}`}}>Chosen color {label}</p>
        </div>
        <ButtonList options={options} setActiveIdx={this.setActiveIdx}/>
      </>
      )}}
      </themeContext.Consumer>      
    );
  };
};

ColorPickerClass.propTypes = {
  options: PropTypes.array.isRequired,
};


function ColorPickerHooks ({ options }) {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  const { label } = options[activeOptionIndex];

  return (
    <themeContext.Consumer>
    {({mainTheme}) => (  
    <>
      <div 
        style={{ 
          backgroundColor: `${mainTheme.colors.globalBgColor === label ? `${ '#' + Math.floor(Math.random()*16777215).toString(16)}` : 'transparent'}`, 
          padding: '20px', 
          display: 'inline-block', 
          margin: '20px', 
          border: `1px solid ${mainTheme.colors.containerBorderColor}`, 
          borderRadius: '5px', 
        }}>
        <h2 style={{ color: `${label}` }}>ColorPicker by Hooks</h2>
        <p style={{ color: `${label}` }}>Chosen color {label}</p>
      </div>
      <ButtonList options={options} setActiveIdx={setActiveOptionIndex} />
    </>
    )}
    </themeContext.Consumer>      
  );
};

ColorPickerHooks.propTypes = {
  options: PropTypes.array.isRequired,
};

function ColorPicker({ options }) {
  return (
    <div>
      <ColorPickerClass options={options} />
      <ColorPickerHooks options={options} />
    </div>
  );
};

export default memo(ColorPicker);
