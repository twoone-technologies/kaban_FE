import Button from '~/components/reusable/Button';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';

type ContinueBtnProps = {
  activeIndex: number;
  disabled?: number;
  setNewIndex: (num: number) => void;
};

export default function ContinueOrCancel({
  activeIndex,
  setNewIndex,
  disabled
}: ContinueBtnProps) {
  return (
    <div className={`flex gap-1 ${styles.btnGrp}`}>
      <Button type="reset" className={`c-pad ${styles.cancleBtn}`}>
        Cancel
      </Button>
      <Button type='submit' 
        className={`c-pad transition-all ${activeIndex === 2 ? undefined : 'hidden'}
        ${disabled === 1 ? ' w-40' : styles.submitBtn}
        `}>
          Submit
      </Button>
      <Button type='button' 
        className={`c-pad w-40 ${activeIndex === 2 ? 'hidden' : undefined }`}
        onClick={() => setNewIndex(activeIndex + 1)}
      >
        Continue
      </Button>
    </div>
  );
}
