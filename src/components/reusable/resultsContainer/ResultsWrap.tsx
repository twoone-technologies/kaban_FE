import { useState } from 'react';
import Container from '~/components/reusable/Container';
import { Link } from 'react-router-dom';
import Card, { HouseCard } from '~/components/reusable/card/Card';
import SearchForm from '~/components/searchForm/SearchForm';
import styles from '~/components/reusable/resultsContainer/results.module.css';
import MapLoader from '~/components/map/MapLoader';
import MobileMapControl from './MobileMapControl';
import SwitchGroup from './SwitchGroup';
import useSortSwitch from '~/hooks/useSortSwitch';

type ResultsProps = {
  city: string;
  status: string;
  defaultCity?: string;
  propertyCategory?: string;
  onSubmit?: () => void;
  object: HouseCard[];
};

export default function ResultsWrap({
  city,
  defaultCity,
  status,
  onSubmit,
  propertyCategory,
  object,
}: ResultsProps) {
  // const res = await searchListings(search)
  const [position, setPosition] = useState<'portrait' | 'landscape'>(
    'portrait',
  );
  const [stack, setStack] = useState<'listings' | 'map'>('listings');
  const [map, setMap] = useState(false);
  const [selectItem, setSelectItem] = useState(0);

  const { sortArr, handleSort } = useSortSwitch(object);

  const toggleMap = () => {
    setMap(!map);
  };

  const listingsPage = stack === 'listings' ? '' : styles.stack;
  const mapPage = stack === 'map' ? '' : styles.stack;
  const renderMap = map ? styles.off : styles.on;
  const adjustList = map && styles.results_full;
  const resultOnly =
    position === 'portrait' && map === true
      ? styles.grid_style_2
      : map
      ? styles.grid_style_3
      : styles.grid_style_4;
  const order =
    position === 'portrait' && map === false ? styles.grid_style : resultOnly;

  return (
    <Container
      element="section"
      className={`container-pad ${styles.resultsWrap}
      ${!map ? styles.pad_right : styles.pad_inline}
      ${stack === 'map' ? styles.c_reset : ''}`}
    >
      <div className={`${styles.map_section} ${renderMap} ${mapPage}`}>
        <div className={styles.mapWrap}>
          <MapLoader object={object} onClick={setSelectItem} />
        </div>
      </div>
      <MobileMapControl stackOrder={stack} setStackOrder={setStack} />
      <div
        className={`${styles.results} ${adjustList}
        ${stack === 'map' && styles.resMap}`}
      >
        {(propertyCategory || city || status) && (
          <>
            <Link to={'/'} className="bg-primary">
              Home
            </Link>
            {status && (
              <span>
                {' '}
                {'>'} For {status}
              </span>
            )}
            {!status && <span> {'>'} Sales & Rent</span>}
          </>
        )}
        <h3>
          {propertyCategory || (
            <span>
              {city} {status}
            </span>
          )}{' '}
          Listings {propertyCategory && city && `in ${city}`}
        </h3>
        <SearchForm
          defaultCity={defaultCity}
          className={styles.f}
          onSubmit={onSubmit}
        />
        <SwitchGroup
          onChange={handleSort}
          mapState={map}
          onClick={toggleMap}
          listingObject={object}
          stackOrder={stack}
          orientation={position}
          setOrientation={setPosition}
        />
        <div className={`${styles.listings_wrap} ${listingsPage} ${order}`}>
          {sortArr.map(item => 'location' in item &&
            <Card
              card={item as HouseCard}
              key={item.id}
              mapState={map}
              orientation={position}
              className={selectItem === parseInt(item.id)
                ? styles.activeElement : undefined
              }
            />
          )}
        </div>
      </div>
    </Container>
  );
}
