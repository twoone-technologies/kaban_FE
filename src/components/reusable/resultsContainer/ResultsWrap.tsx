import { useState } from 'react';
import Container from '~/components/reusable/Container';
import Card, { HouseCard } from '~/components/reusable/card/Card';
import SearchForm from '~/components/searchForm/SearchForm';
import styles from '~/components/reusable/resultsContainer/results.module.css';
import MapLoader from '~/components/map/MapLoader';
import MobileMapControl from './MobileMapControl';
import SwitchGroup from './SwitchGroup';

type ResultsProps = {
  city: string;
  status: string;
  object: HouseCard[];
}

export default function ResultsWrap({city, status, object}: ResultsProps) {
  // const res = await searchListings(search)

  const [position, setPosition] = useState<'portrait' | 'landscape'>(
    'portrait',
  );
  const [stack, setStack] = useState<'listings' | 'map'>('listings');
  const [map, setMap] = useState(false);
  const [selectItem, setSelectItem] = useState(0);
  const [sortArr, setSortArr] = useState(object);

  const toggleMap = () => {
    setMap(!map);
  };

  const handleSort = (e: { target: { value: string } }) => {
    if (e.target.value === 'Price Acending') {
      setSortArr([...sortArr].sort((a, b) => a.price.amount - b.price.amount));
    }
    if (e.target.value === 'Price Decending') {
      setSortArr([...sortArr].sort((a, b) => b.price.amount - a.price.amount));
    }
    if (e.target.value === 'Featured listings first') {
      setSortArr(
        [...sortArr].sort((a, b) => Number(b.featured) - Number(a.featured)),
      );
    }
  };

  const listingsPage = stack === 'listings' ? '' : styles.stack;
  const mapPage = stack === 'map' ? '' : styles.stack;
  const renderMap = map ? styles.off : styles.on;
  const adjustList = map && styles.results_full;
  const resultOnly = position === 'portrait' && map === true
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
        <SearchForm className={styles.f} />
        <h3>{city} {status} Listings</h3>
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
          {sortArr.map((item) => (
            <Card
              card={item}
              key={item.id}
              mapState={map}
              orientation={position}
              className={
                selectItem === parseInt(item.id)
                  ? styles.activeElement
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
