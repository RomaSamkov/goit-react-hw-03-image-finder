import { Component } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modalRoot');

class Modal extends Component {
  state = {};

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
  };
  // Вешаем слушателя на window
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  // Для снятия слушателя с window
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
