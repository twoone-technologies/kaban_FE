import styles from '~/components/navigation/navigation.module.css';
import Button from '../reusable/Button';
import useInteractiveNav from '~/hooks/useInteractiveNav';

type Props = {
  open: boolean;
  onClick: () => void;
  className?: string;
};

export default function HamburgerMenu({
  open,
  onClick,
  className
}: Props) {
  const { navBar } = useInteractiveNav();

  const menuBtn_1 =
    location.pathname === '/'
      ? `${navBar || open ? styles.hue_1 : styles.hue_2}`
      : styles.hue_1;

  const menuBtn_2 =
    location.pathname === '/'
      ? `${navBar || open ? styles.hue_1 : styles.hue_2}`
      : styles.hue_1;

  const menuBtn_3 =
    location.pathname === '/'
      ? `${navBar || open ? styles.hue_1 : styles.hue_2}`
      : styles.hue_1;

  return (
    <Button
      type="button"
      title="menu"
      onClick={onClick}
      className={`flex f-column 
        ${styles.hamburger_menu} ${className}`}
    >
      <span
        className={`${styles.line} 
          ${open && styles.tilt} ${menuBtn_1}`}
      />
      <span
        className={`${styles.line} ${menuBtn_2}
          ${open ? styles.hide : styles.see}`}
      />
      <span
        className={`${styles.line}
          ${open && styles.rtilt} ${menuBtn_3}`}
      />
    </Button>
  );
}
