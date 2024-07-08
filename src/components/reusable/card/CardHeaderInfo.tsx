import Label from './Label';
import styles from './card.module.css';

type Props = {
  type: string;
  num: number;
  className: string;
  stat: string;
  featured: boolean
};

const setNums = (num: number) => {
  if (num === undefined || NaN || '') return '...';
  return num.toLocaleString();
};

export default function CardHeaderInfo({ type, num, stat, className, featured }: Props) {
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
