import styles from '~/components/reusable/resultsContainer/results.module.css';
import {
  arrowIcon,
  gridIcon,
  mapIcon,
  sortIcon,
  vertIcon,
} from '~/assets/icons';
import FormInput from '../FormInput';
import { sortOptions } from '~/components/searchForm/status';
import Svg from '../Svg';
import { HouseCard } from '../card/Card';

type Props = {
  mapState: boolean;
  onClick: () => void;
  onChange: (e: { target: { value: string } }) => void;
  listingObject: HouseCard[];
  stackOrder: 'listings' | 'map';
  orientation: 'portrait' | 'landscape';
  setOrientation: (orientation: 'portrait' | 'landscape') => void;
};

export default function SwitchGroup({
  stackOrder,
  listingObject,
  mapState,
  onClick,
  onChange,
  setOrientation,
  orientation,
}: Props) {
    const handleClick = (orientation: 'portrait' | 'landscape') => {
    setOrientation(orientation);
  };
  
  const listingsPage = stackOrder === 'listings' ? '' : styles.stackOrder;

  return (
    <div className="flex s-btw align-y">
      <span className={styles.size}>{listingObject.length} results found</span>
      <div className={`flex align-y ${listingsPage}`}>
        <Svg href={sortIcon} width="50px" height="20px" />
        <FormInput
          title={'sort'}
          className={styles.sort}
          header={'Sort'}
          subItems={sortOptions}
          onChange1={onChange}
          link={arrowIcon}
        />
        <div className={`gap c-pad flex ${styles.nil}`}>
          <div title="landscape">
            <Svg
              href={vertIcon}
              onClick={() => handleClick('landscape')}
              className={orientation === 'landscape' ? 'bg-primary' : ''}
            />
          </div>
          <div title="portrait">
            <Svg
              href={gridIcon}
              onClick={() => handleClick('portrait')}
              className={orientation === 'portrait' ? 'bg-primary' : ''}
            />
          </div>
        </div>
        <div title="toggle Map" className={styles.nil}>
          <Svg
            href={mapIcon}
            className={!mapState ? 'bg-primary' : ''}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}
