import { Listing } from '~/utils/types/listing.types';
import styles from './micellenous.module.css';
import ItemInfo from '../itemInfo/ItemInfo';
import CardIcons from '~/components/reusable/card/CardIcons';
import { squareIcon, bedIcon, showerIcon, carIcon } from '~/assets/icons';

export default function PropertyDetails({ item }: { item: Listing }) {
  const iconArr = [bedIcon, showerIcon, squareIcon, carIcon];
  return (
    <ItemInfo
      className={`b-radius bg-tertiary box-shadow ${styles.border}`}
      h1={'Property Details'}
      h2={item.id}
      children={
        <>
          {Object.entries(item.details).map(([key, val], id) => (
            <CardIcons
              key={id}
              title={key}
              className="bg-primary"
              icon={iconArr[id]}
              value={
                typeof val === 'string' || typeof val === 'number' ? val : null
              }
            />
          ))}
        </>
      }
    />
  );
}
