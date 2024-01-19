import Checkbox from '~/components/searchForm/checkbox/Checkbox';
import styles from './listings.module.css';
import { dummyObj } from '~/components/reusable/dummyObj';
import Card from '~/components/reusable/card/Card';
type Props = {};

export default function ListingItem({}: Props) {
  return (
    <>
      {dummyObj.map((item) => (
        <div key={item.id} className={`pad flex ${styles.listItemGrp}`}>
          <Checkbox />
          <Card card={item} orientation="landscape" className={styles.card} />
        </div>
      ))}
    </>
  );
}
