import React from 'react';
import PropTypes from 'prop-types';

import TodoEditor from './TodoEditor';
import { ModalBtn } from './Styles/TodoList.styled';
import Modal from 'components/Modal';

export const ModalWindow = ({ onSubmit, onClick, colors }) => {
  return (
    <Modal onClose={onClick} colors={colors}>
      <TodoEditor colors={colors} onSubmit={onSubmit}>
        <ModalBtn colors={colors} onClick={onClick}>Close Modal</ModalBtn>
      </TodoEditor>
    </Modal>
  );
};


TodoEditor.propTypes = {
  onClick: PropTypes.func.isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
