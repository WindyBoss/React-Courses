import React from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

import { themeContext } from "context/authContext";

const CssIconButton = styled(IconButton)(({colors}) => ({
	'&.MuiIconButton-root': {
    color: colors.btnBorderColor,
    position: 'absolute',
    right: 0.3,
    top: 0.3,

    '&:hover': {
      color: colors.hoverBtnColor,
      backgroundColor: colors.reverseBtnBorderColor,
    }}, 
}))

export const ModalWindow = ({ todolist, onClick, children, loader }) => {

  return (
    <themeContext.Consumer>
    {({mainTheme}) => (
    <Modal onClose={onClick} todolist={todolist} loader={loader} colors={mainTheme.colors}>
      {children}
      {!loader && (
        <CssIconButton 
        size="large"
        colors={mainTheme.colors}   
        onClick={onClick}>
        <CloseTwoToneIcon color='inherit' fontSize="inherit"/>
        </CssIconButton>
      )}
    </Modal>
    )}
    </themeContext.Consumer>      
  );
};

ModalWindow.propTypes = {
  onClick: PropTypes.func.isRequired,
};