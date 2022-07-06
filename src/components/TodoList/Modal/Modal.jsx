import React, { Component, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalContent, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

// export default class Modal extends Component {

//   /*
//   * componentDidMount - react method, which is called, after the DOM is created first time
//   * React can not create an custom eventListeners, so it is neccessary to create them in the componentDidMount and remove them in the componentWillUnmount
//   */
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown)
//   };

//   handleKeyDown = (e) => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };


//   /*
//   * componentWillUnmount - react method, which is called, after the DOM unmount and element is deleted, good for clearing (removeEventListener)
//   * Use separate function for ex. [this.handleKeyDown] for adding & clearing eventListeners
//   */

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown)
//   };


//   render() {
//     const { colors } = this.props;
//     /*
//     * createPortal - react method, which helps to create the element in separate container (root-2) in html file,
//     * which helps to not use z-index and other styles problems (good for modals)
//     * You can add function as eventListener for click event by adding it as a prop onClick
//     */

//     return createPortal(
//       <Backdrop onClick={this.handleBackBackdropClick} colors={colors}>
//         <ModalContent colors={colors}>{this.props.children}</ModalContent>
//       </Backdrop>,
//       modalRoot,
//     );
//   };
// };

export default function Modal({colors, children, onClose, todolist, loader}) {
  const handleBackBackdropClick = (e) => {

    if (e.target === e.currentTarget && !loader) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape' && !loader) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    };
  },[onClose, loader])

  return createPortal(
    <Backdrop onClick={handleBackBackdropClick} colors={colors}>
      <ModalContent todolist={todolist} colors={colors}>{children}</ModalContent>
    </Backdrop>,
    modalRoot,
  );
};

/*
* Use Proptypes for checking type of props data of the component
*/
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    colors: PropTypes.objectOf(PropTypes.string).isRequired,
    children: PropTypes.any.isRequired,
}