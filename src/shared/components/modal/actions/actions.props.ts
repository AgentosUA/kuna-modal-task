import type React from 'react';

type ActionsProps = {
  onClose?: Function;
  type?: 'confirm' | 'alert';
  children?: React.ReactNode | React.ReactNode[];
  className?: any;
};

export type { ActionsProps };
