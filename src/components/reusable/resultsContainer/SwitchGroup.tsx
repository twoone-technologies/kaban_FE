import styles from '~/components/reusable/resultsContainer/results.module.css';
import {
  gridIcon,
  mapIcon,
  sortIcon,
  vertIcon,
} from '~/assets/icons';
import { sortOptions } from '~/components/searchForm/status';
import Svg from '../Svg';
import FormControl from '../FormControl';
import OptGroup from '~/components/herosection/Optgroup';
import { Listing } from '~/utils/types/listing.types';

type Props = {
  mapState: boolean;
  onClick: () => void;
  onChange: (e: { target: { value: string } }) => void;
  listingObject: Listing[];
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
        <FormControl
          as="select"
          title={'sort'}
          className={styles.sort}
          onChange={onChange}
        >
          <OptGroup header={'Sort'} subItems={sortOptions} />
        </FormControl>
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
        <div title="toggle Map" className={styles.mapSwitch}>
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
