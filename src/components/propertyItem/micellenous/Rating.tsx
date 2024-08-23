import Svg from '~/components/reusable/Svg';
import styles from './micellenous.module.css';
import { starIcon } from '~/assets/icons';
import { halfStarIcon } from '~/assets/img';

export default function Rating({ num }: { num: number | undefined }) {
  if (num === undefined) return null;
  const numArr = [1, 2, 3, 4, 5];
  return (
    <div className="flex">
      {numArr.map((number) => {
        if (number <= num) {
          return <Svg key={number} href={starIcon} className={styles.rated} />;
        } else if (number - 0.5 === num) {
          return <img key={number} className={styles.size} src={halfStarIcon} alt="mm" />
        } else {
          return <Svg key={number} href={starIcon} className={styles.svg} />;
        }
      })}
    </div>
  );
}
