import { useEffect, useRef } from 'react';
import Button from '~/components/reusable/Button';
import styles from './modal.module.css';

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
    <dialog className={styles.modalWrap} ref={modal} onClose={onClose}>
      <aside className={`${styles.modal} ${styles.modal_txt}`}>
        {children}
        <Button className={`f-width ${styles.btn}`} onClick={() => modal.current.close()}>Back</Button>
      </aside>
    </dialog>
  );
}
