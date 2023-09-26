/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import Button from '../utility/Button';
import styles from './index.module.css';
import { congratsIcon, starIcon } from '../../assets';

export default function Modal({ isVisible, onClose }) {
  const modal = useRef(null);

  useEffect(() => {
    if (isVisible) {
      modal.current.showModal();
    }

    return () => modal.current?.close();
  }, [isVisible]);

  return (
    <dialog className={styles.modalWrap} ref={modal} onClose={onClose}>
      <aside className={`${styles.modal} ${styles.modal_txt}`}>
        <img src={congratsIcon} alt="congrats" className={`f-width ${styles.m_img}`} />
        <h1>Congratulations you have successfully Registered!</h1>
        <img src={starIcon} alt="congrats" className={`f-width ${styles.star}`} />
        <p>
          Yes, it was easy and you did it! check your mail box for next step
        </p>
        <img src={starIcon} alt="congrats" className={`f-width ${styles.star_1}`} />
        <Button className={`f-width ${styles.btn}`} onClick={() => modal.current.close()}>Back</Button>
        <img src={starIcon} alt="congrats" className={`f-width ${styles.star_2}`} />
      </aside>
    </dialog>
  );
}
