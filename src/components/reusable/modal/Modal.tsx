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
} & React.ComponentProps<'dialog'>;

export default function Modal({ isVisible, closeModal, children }: ModalProps) {
  const modal = useRef<HTMLDialogElement>(null);
  const isLoggedIn = useAppSelector((state) => selectCurrentToken(state));

  useEffect(() => {
    if (isVisible) {
      modal.current?.showModal();
    }
    if (isVisible) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = '';
    
      function handleKeyDown(event: { key: string; preventDefault: () => void; }) {
        if (isVisible && event.key === 'Escape') {
          event.preventDefault(); // Prevent the default behavior of the escape key
          // Optionally, you can add additional logic here before closing the modal
          location.pathname.includes('dashboard') && !isLoggedIn ? null : modal?.current?.close();
        }
      }
  
      // Add event listener when the modal is opened
      if (isVisible) {
        document.addEventListener('keydown', handleKeyDown);
      }
  
      // Remove event listener when the modal is closed or unmounted
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        modal?.current?.close();
      };
  }, [isVisible]);

  return (
    <dialog className={`b-radius ${styles.modalWrap}`} onClose={closeModal} ref={modal}>
      <aside className={styles.modal}>
        {children}
        {location.pathname.includes('dashboard') && !isLoggedIn ? null :
          <Button
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
