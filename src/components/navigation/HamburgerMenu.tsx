import styles from '~/components/navigation/navigation.module.css';
import Button from '../reusable/Button';

type Props = {
  open: boolean;
  onClick: () => void;
  line_1: string;
  line_2: string;
  line_3: string;
};

export default function HamburgerMenu({
  open,
  onClick,
  line_1,
  line_2,
  line_3,
}: Props) {
  return (
    <Button
      type="button"
      title="menu"
      onClick={onClick}
      className={`flex f-column 
          ${styles.hamburger_menu}`}
    >
      <span
        className={`${styles.line} 
          ${open && styles.tilt} ${line_1}`}
      />
      <span
        className={`${styles.line} ${line_2}
          ${open ? styles.hide : styles.see}`}
      />
      <span
        className={`${styles.line}
          ${open && styles.rtilt} ${line_3}`}
      />
    </Button>
  );
}
