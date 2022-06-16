import React, { Component, useState, memo } from "react";
import PropTypes from 'prop-types';
import ButtonList from "components/ColorPicker/ButtonList";

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
      <>
        <div style={{margin: '20px'}}>
          <h2 style={{color: `${label}`}}>ColorPicker by Class</h2>
          <p style={{color: `${label}`}}>Chosen color {label}</p>
        </div>
        <ButtonList options={options} setActiveIdx={this.setActiveIdx}/>
      </>
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
    <>
      <div style={{ margin: '20px' }}>
        <h2 style={{ color: `${label}` }}>ColorPicker by Hooks</h2>
        <p style={{ color: `${label}` }}>Chosen color {label}</p>
      </div>
      <ButtonList options={options} setActiveIdx={setActiveOptionIndex} />
    </>
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
