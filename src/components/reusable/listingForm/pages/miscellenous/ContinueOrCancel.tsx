import { useState } from 'react';
import checkIcon from '~/assets/icons/tick2.png';
import Button from '~/components/reusable/Button';
import styles from '~/components/reusable/listingForm/pages/miscellenous/listingForm.module.css';
import Modal from '~/components/reusable/modal/Modal';
import Tooltip from '~/components/reusable/Tooltip';

type ContinueBtnProps = {
  activeIndex: number;
  disabled?: number;
  valid: boolean;
  minImg: boolean;
  success: boolean;
  next: () => void;
  prev: () => void;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ContinueOrCancel({
  activeIndex,
  setSuccess,
  success,
  minImg,
  valid,
  prev,
  next,
}: ContinueBtnProps) {
  const validState =
    valid && activeIndex !== 1
      ? valid
        ? ''
        : `cursor-not-allowed hidden ${styles.disabled}`
      : activeIndex === 1 && minImg
      ? ''
      : `cursor-not-allowed  ${styles.disabled}`;

  const [submitModal, setSubmitModal] = useState(false)

  return (
    <div className={`flex gap-1 ${styles.btnGrp}`}>
      <Button
        type="button"
        onClick={activeIndex === 0 ? undefined : prev}
        className={`c-pad w-full ${styles.cancleBtn}`}
      >
        Previous
      </Button>
      <Button
        onClick={() => setSubmitModal(true)}
        type="button"
        className={`c-pad w-full max-w-40 transition-all ${
          activeIndex === 2 ? '' : 'hidden'
        }
        ${validState}`}
      >
        Submit
      </Button>
      <Modal isVisible={submitModal} closeModal={() => setSubmitModal(false)} prompt className={styles.confirmModal}>
        <span>you will be charged <b>15KBT</b> to <b>Publish this Listing</b></span>
        <div className='flex flex-col sm:flex-row max-w-[20rem] mt-[6px] gap-[2px]'>
          <Button onClick={() => setSubmitModal(false)} className='p-1 w-full'>Cancel</Button>
          <button onClick={() => setSuccess(true)} type='submit' className='p-1 w-full border-2 rounded-md bg-tertiaryColor3'>Confirm</button>
       </div>
        <Tooltip
          popOver={success}
          copy={success}
          className={`flex items-center gap`}
        >
          <div className='w-5'><img src={checkIcon} className='w-full' height='2' alt='' /> </div>
         Your Listing awaits admin's approval
        </Tooltip>
      </Modal>
      <Button
        type="button"
        disabled={activeIndex === 1 ? !minImg : !valid}
        className={`c-pad w-full max-w-40 ${
          activeIndex === 2 ? 'hidden' : ''
        } ${validState}`}
        onClick={() => (activeIndex === 1 ? minImg === true && next() : next())}
      >
        Next
      </Button>
    </div>
  );
}
