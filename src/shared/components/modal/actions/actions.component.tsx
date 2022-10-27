import type { FC } from 'react';

import type { ActionsProps } from './actions.props';
import styles from './actions.module.scss';

const Actions: FC<ActionsProps> = ({ children, type, onClose }) => {
  return (
    <div className={styles.actions}>
      {children}
      {type === 'confirm' && (
        <>
          <button className={styles.button}>Confirm</button>
          <button className={styles.button} onClick={() => onClose?.()}>
            Close
          </button>
        </>
      )}
      {type === 'alert' && (
        <button className={styles.alertButton} onClick={() => onClose?.()}>
          Close
        </button>
      )}
    </div>
  );
};

export { Actions };
