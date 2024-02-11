import Button from '~/components/reusable/Button';
import styles from './post.module.css'

export default function ContinueOrCancel() {
  return (
    <div className={`flex gap-1 ${styles.btnGrp}`}>
      <Button className={`c-pad ${styles.cancleBtn}`}>Cancel</Button>
      <Button className="c-pad">Continue</Button>
    </div>
  );
}
