import { expire } from 'cookies';
import Label from './Label';
import styles from './card.module.css';

type Props = {
  type: string;
  num: number;
  stat: string;
  published?: 'published' | 'pending' | 'disapproved';
  featured: boolean
  draft?: boolean;
  expired: string;
};

const setNums = (num: number) => {
  if (num === undefined || NaN || '') return '...';
  return num.toLocaleString();
};

export default function CardHeaderInfo({ type, num, stat, featured, draft, published, expired }: Props) {
  return (
    <div className={`flex space-between gap ${styles.header}`}>
      <div className="flex flex-col align-x">
        <p>{type}</p>
        <h3>₦{setNums(num)}</h3>
      </div>
      <div className={`grid gap-05 grid-cols-2 font-bold ${styles.status_grp}`}>
        <Label type={stat} />
        {draft ? <Label type="draft" /> : null}
        {featured ? <Label type="featured" /> : null}
        {location.pathname.includes('dashboard') && published ?
          <Label type={published} /> : null}
        {expired && <Label type="expired" />}
      </div>
    </div>
  );
}
