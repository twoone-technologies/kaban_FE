import { HouseCard } from '~/components/reusable/card/Card';
import styles from './micellenous.module.css';
import ItemInfo from '../itemInfo/ItemInfo';
import Checkbox from '~/components/searchForm/checkbox/Checkbox';

export default function DescriptionAndFeatures({ item }: { item: HouseCard }) {
  return (
    <div
      className={`grid box-shadow b-radius f-width ${styles.border}`}
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
                key={box.title}
                title1={box.title}
                checked={box.checked}
                readOnly
              />
            ))}
          </div>
        }
      />
    </div>
  );
}
