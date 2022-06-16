import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const IconBtnWrapper = styled.button`
position: absolute;
top: 10px;
right: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  max-width: 110px;
  margin-bottom: 15px;
  height: 30px;
border: ${props => `1px solid ${props.colors.btnBorderColor}`};
  background-color: ${props => props.colors.btnBgColor};
  color: ${props => props.colors.btnTextColor};
  border-radius: 5px;
  margin-bottom: 5px;
  :hover,
  :focus {
  background-color: ${props => props.colors.hoverBtnBgColor};
  color: ${props => props.colors.hoverBtnColor};
  }
`;

const IconBtn = ({ children, colors, onClick, ...allyProps }) => {
  return (
    // allyProps -> the variable which collects inside all unused props
    <IconBtnWrapper colors={colors} type='button' onClick={onClick} {...allyProps}>
      {children}
    </IconBtnWrapper>
  );
}


IconBtn.defaultProps = {
  onClick: () => null,
  children: null,
}

IconBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  'aria-label': PropTypes.string.isRequired,
}

export default IconBtn;
