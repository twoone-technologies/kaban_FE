import styles from './carousel.module.css';

type Props = {
  currentIndex: number;
  src: string;
  num: number;
  onClick?: () => void;
} & React.ComponentProps<'li'>;

export default function Image({ num, currentIndex, src, onClick }: Props) {
  const image = onClick !== undefined ? (
    <li
      onClick={onClick}
      className={num === currentIndex ? styles.b : styles.f}
    >
      <div className={`${styles.carousel_wrapper}`}>
        <img src={src} alt={src} className={styles.carousel_img2} />
        <div
          className={`f-width ${styles.overlay} ${
            num === currentIndex ? styles.bg : styles.fg
          }`}
        />
      </div>
    </li>
  ): (
    <li className={`${num === currentIndex ? styles.active : styles.slide}`}>
      {num === currentIndex && (
        <img src={src} alt={src} className={`f-width ${styles.carousel_img}`} />
      )}
    </li>
  );

  return <>{image}</>
}
