import Button from '~/components/reusable/Button';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';

type ContinueBtnProps = {
  activeIndex: number;
  disabled?: number;
  valid: boolean;
  minImg: boolean;
  next: () => void;
  prev: () => void;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ContinueOrCancel({
  activeIndex,
  setSuccess,
  minImg,
  valid,
  prev,
  next,
}: ContinueBtnProps) {
  const validState = valid && activeIndex !== 1
    ? valid
      ? ''
      : `cursor-not-allowed hidden ${styles.disabled}`
    : valid && minImg
      ? ''
      : `cursor-not-allowed  ${styles.disabled}`;

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
        onClick={() => setSuccess(true)}
        type="submit"
        className={`c-pad w-full max-w-40 transition-all ${activeIndex === 2 ? '' : 'hidden'}
        ${validState}`}
      >
        Submit
      </Button>
      <Button
        type="button"
        disabled={!valid}
        className={`c-pad w-full max-w-40 
        ${activeIndex === 2 ? 'hidden' : ''}
        ${validState}`}
        onClick={next}
      >
        Next
      </Button>
    </div>
  );
}
