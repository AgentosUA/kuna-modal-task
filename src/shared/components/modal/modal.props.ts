import { Actions } from './actions';

type ModalProps = {
  title?: string;
  className?: any;
  isOpen: boolean;
  onClose: Function;
  children: React.ReactNode;
  icon?: string;
  preloaderName?: string | string[];
} & {
  Actions?: typeof Actions;
};

export type { ModalProps };
