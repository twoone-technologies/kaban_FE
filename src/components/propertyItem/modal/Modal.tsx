import { useEffect, useRef } from 'react';
import Button from '~/components/reusable/Button';
import styles from './modal.module.css';
import Svg from '~/components/reusable/Svg';
import { closeIcon } from '~/assets/icons';

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
} & React.ComponentProps<'dialog'>

export default function Modal({ isVisible, children, onClose }: ModalProps) {
  const modal = useRef(null);

  useEffect(() => {
    if (isVisible) {
      modal.current?.showModal();
    }

    return () => modal.current?.close();
  }, [isVisible]);

  return (
    <dialog className={`b-radius ${styles.modalWrap}`} ref={modal} onClose={onClose}>
      <aside className={`${styles.modal}`}>
        {children}
        <Button className={`f-width ${styles.btn}`} onClick={() => modal.current.close()}><Svg href={closeIcon} /></Button>
      </aside>
    </dialog>
  );
}
