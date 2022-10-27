import { ComponentType } from 'react';

import { createPortal } from 'react-dom';

import closeIcon from '../../../assets/icons/close-icon.svg';

import { Actions } from './actions';

import { ModalProps } from './modal.props';

import styles from './modal.module.scss';

const Modal: ComponentType<ModalProps> & {
  Actions: typeof Actions;
} = ({ title, isOpen = false, onClose, children, className }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modalWrapper}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <img
            src={closeIcon}
            className={styles.close}
            onClick={() => onClose()}
          />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.getElementById('overlay') as Element | DocumentFragment
  );
};

Modal.Actions = Actions;

export { Modal };
