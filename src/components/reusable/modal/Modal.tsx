import { useEffect, useRef } from 'react';
import Button from '~/components/reusable/Button';
import styles from './modal.module.css';
import Svg from '~/components/reusable/Svg';
import { closeIcon } from '~/assets/icons';

type ModalProps = {
  isVisible: boolean;
  closeModal?: () => void;
} & React.ComponentProps<'dialog'>;

export default function Modal({ isVisible, closeModal, children }: ModalProps) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isVisible) {
      modal.current?.showModal();
    }

    if (isVisible) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = '';

    return () => modal?.current?.close();
  }, [isVisible]);

  return (
    <dialog
      className={`b-radius ${styles.modalWrap}`}
      ref={modal}
    >
      <aside className={styles.modal}>
        {children}
        <Button
          className={`f-width ${styles.btn}`}
          onClick={() => {
            modal?.current?.close();
            // navigate(-1)
            closeModal && closeModal()
          }}
        >
          <Svg href={closeIcon} />
        </Button>
      </aside>
    </dialog>
  );
}
