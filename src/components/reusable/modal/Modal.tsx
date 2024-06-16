import { useEffect, useRef } from 'react';
import Button from '~/components/reusable/Button';
import styles from './modal.module.css';
import Svg from '~/components/reusable/Svg';
import { closeIcon } from '~/assets/icons';
import { useAppSelector } from '~/api/hooks';
import { selectCurrentToken } from '~/api/slices/auth';

type ModalProps = {
  isVisible: boolean;
  closeModal?: () => void;
  className?: string;
} & React.ComponentProps<'dialog'>;

export default function Modal({ isVisible, closeModal, children, className }: ModalProps) {
  const modal = useRef<HTMLDialogElement>(null);
  const isLoggedIn = useAppSelector((state) => selectCurrentToken(state));

  useEffect(() => {
    function handleKeyDown(event: { key: string; preventDefault: () => void; }) {
      if (isVisible && event.key === 'Escape') {
        event.preventDefault(); // Prevent the default behavior of the escape key
        // Optionally, you can add additional logic here before closing the modal
        location.pathname.includes('dashboard') && !isLoggedIn ? null : modal?.current?.close();
      }
    }
    if (isVisible) {
      modal.current?.showModal();
      // Disable window scroll
      document.body.style.overflowY = 'hidden';
      // Add event listener when the modal is opened
      document.addEventListener('keydown', handleKeyDown);
    }
    else {
      modal.current?.close();
    }
    // Remove event listener when the modal is closed or unmounted
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  return (
    <dialog className={`b-radius ${styles.modalWrap} ${className}`} onClose={closeModal} ref={modal}>
      <aside className={styles.modal}>
        {children}
        {location.pathname.includes('dashboard') && !isLoggedIn ? null :
          <Button
            type='button'
            className={`f-width ${styles.btn}`}
            onClick={() => {
              closeModal && closeModal();
              modal?.current?.close();
            }}
          >
            <Svg href={closeIcon} />
          </Button>}
      </aside>
    </dialog>
  );
}
