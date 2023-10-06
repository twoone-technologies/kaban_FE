import Svg from '~/components/reusable/Svg';
import styles from '../propertyItem.module.css';
import { starIcon } from '~/assets/icons';

export default function Rating({ num }: {num: number | undefined}) {
  if (num === undefined) return null
  const numArr = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap">
      {numArr.map((number) =>
        number <= num ? (
          <Svg key={number} href={starIcon} className={styles.rated} />
        ) : (
          <Svg key={number} href={starIcon} className={styles.svg} />
        ),
      )}
    </div>
  );
}
