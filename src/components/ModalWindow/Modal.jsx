import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalContent, Backdrop } from './styles/Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ colors, children, onClose, todolist, loader }) {
  const handleBackBackdropClick = e => {
    if (e.target === e.currentTarget && !loader) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape' && !loader) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, loader]);

  return createPortal(
    <Backdrop onClick={handleBackBackdropClick} colors={colors}>
      <ModalContent todolist={todolist} colors={colors}>
        {children}
      </ModalContent>
    </Backdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.any.isRequired,
};
