import Label from './Label';
import styles from './card.module.css';
import { GoodStat, EnlistStat, ErrorStat } from './Card';

type Props = {
  type: string;
  num: number;
  featured: boolean;
  className: string;
  stat: GoodStat | EnlistStat | ErrorStat;
};

const setNums = (num: number) => {
  if (num === undefined || NaN || '') return '...';
  return num.toLocaleString();
};

export default function CardHeaderInfo({ type, num, featured, stat, className }: Props) {
  return (
    <div className={`flex space-between ${styles.header}`}>
      <div className="flex flex-col align-x">
        <p>{type}</p>
        <h3>₦{setNums(num)}</h3>
      </div>
      <div className="flex align-y s-btw">
        <div className={`flex gap ${className} ${styles.status_grp}`}>
          {featured ? <Label type="featured" /> : null}
          <Label type={stat} />
        </div>
      </div>
    </div>
  );
}
