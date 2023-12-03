import { useEffect, useRef } from 'react';
import Button from '~/components/reusable/Button';
import styles from './modal.module.css';
import Svg from '~/components/reusable/Svg';
import { closeIcon } from '~/assets/icons';
import { useNavigate } from 'react-router-dom';

type ModalProps = {
  isVisible: boolean;
} & React.ComponentProps<'dialog'>;

export default function Modal({ isVisible, children }: ModalProps) {
  const modal = useRef(null);
  const navigate = useNavigate()

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
            navigate(-1)
          }}
        >
          <Svg href={closeIcon} />
        </Button>
      </aside>
    </dialog>
  );
}
