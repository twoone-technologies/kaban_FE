import Svg from '~/components/reusable/Svg';
import styles from './micellenous.module.css';
import { halfStarIcon, starIcon } from '~/assets/icons';

export default function Rating({ num }: { num: number | undefined }) {
  if (num === undefined) return null;
  const numArr = [1, 2, 3, 4, 5];
  return (
    <div className="flex">
      {numArr.map((number) => {
        if (number <= num) {
          return <Svg key={number} href={starIcon} className={styles.rated} />;
        } else if (number - 0.5 === num) {
          return <Svg key={number} className={styles.size} href={halfStarIcon}  />
        } else {
          return <Svg key={number} href={starIcon} className={styles.svg} />;
        }
      })}
    </div>
  );
}
