import { Listing } from '~/utils/types/listing.types';
import styles from './micellenous.module.css';
import ItemInfo from '../itemInfo/ItemInfo';
import Checkbox from '~/components/searchForm/checkbox/Checkbox';

export default function DescriptionAndFeatures({ item }: { item: Listing }) {
  return (
    <div
      className={`grid gap box-shadow b-radius f-width ${styles.border}`}
    >
      <ItemInfo
        className={`bg-tertiary ${styles.description}`}
        h1={'Description'}
        children={<p>{item?.description}</p>}
      />
      <ItemInfo
        className={`bg-tertiary ${styles.features}`}
        h1={'Features'}
        children={
          <div className={`grid f-width ${styles.checkboxGroup}`}>
            {item?.details.features.map((box) => (
              <Checkbox
                key={box}
                title1={box}
                checked={!!box}
                readOnly
              />
            ))}
          </div>
        }
      />
    </div>
  );
}
