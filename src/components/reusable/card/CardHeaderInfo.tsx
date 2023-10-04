import Label from './Label';
import styles from './card.module.css';

type Props = {
  type: string;
  num: number;
  featured: boolean;
  stat: string;
};

const setNums = (num: number) => {
  if (num === undefined || NaN || '') return '...';
  return num.toLocaleString();
};

export default function CardHeaderInfo({type, num, featured, stat}: Props) {
  return (
    <div className={`flex f-column ${styles.header}`}>
      <p>{type}</p>
      <div className="flex align-y s-btw">
        <h3>₦{setNums(num)}</h3>
        <div className={`flex gap ${styles.status_grp}`}>
          {featured ? <Label type="featured" text="Featured" /> : null}
          <Label type="status" text={`For ${stat}`} />
        </div>
      </div>
    </div>
  );
}
