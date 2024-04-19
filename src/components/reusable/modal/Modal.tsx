import { useEffect, useRef } from 'react';
import Button from '~/components/reusable/Button';
import styles from './modal.module.css';
import Svg from '~/components/reusable/Svg';
import { closeIcon } from '~/assets/icons';
import { useSearchParams } from 'react-router-dom';

type ModalProps = {
  isVisible: boolean;
  closeModal?: () => void;
} & React.ComponentProps<'dialog'>;

export default function Modal({ isVisible, closeModal, children }: ModalProps) {
  const modal = useRef<HTMLDialogElement>(null);
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (isVisible) {
      modal.current?.showModal();
    }

    if (isVisible) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = '';

    modal.current?.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSearchParams((prev) => {
          const params = new URLSearchParams(prev);
          params.delete('auth');
          return params;
        });
      }
    });
    
    return () => modal?.current?.close();
  }, [isVisible]);

  return (
    <dialog className={`b-radius ${styles.modalWrap}`} ref={modal}>
      <aside className={styles.modal}>
        {children}
        <Button
          className={`f-width ${styles.btn}`}
          onClick={() => {
            closeModal && closeModal();
            modal?.current?.close();
          }}
        >
          <Svg href={closeIcon} />
        </Button>
      </aside>
    </dialog>
  );
}
