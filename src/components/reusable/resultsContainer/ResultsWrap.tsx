import { useEffect, useState } from 'react';
import Container from '~/components/reusable/Container';
import { Link } from 'react-router-dom';
import Card from '~/components/reusable/card/Card';
import SearchForm from '~/components/searchForm/SearchForm';
import styles from '~/components/reusable/resultsContainer/results.module.css';
import MobileMapControl from './MobileMapControl';
import SwitchGroup from './SwitchGroup';
import useSortSwitch from '~/hooks/useSortSwitch';
import { Listing } from '~/utils/types/listing.types';
import MapComponent from '~/components/map/MapComponent';
import useResponsiveNav from '~/hooks/useResponsiveNav';

type ResultsProps = {
  city: string;
  status: string;
  defaultCity?: string;
  propertyCategory?: string;
  onSubmit?: () => void;
  object: Listing[];
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
  const { sortArr, handleSort } = useSortSwitch(object);

  const {mediasize} = useResponsiveNav({});
  useEffect(() => {
    mediasize === 'mobile' ? setMap(true) : setMap(false);
  }, [mediasize]);
  
  const toggleMap = () => {
    setMap(!map);
  };

  const listingsPage = stack === 'listings' ? styles.listingStack : styles.hideStack1;
  const mapPage = stack === 'map' ? '' : styles.hideStack2;
  const renderMap = map ? styles.off : '';
  const adjustList = map ? styles.results_full : '';
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
      ${!map ? styles.pad_right : styles.pad_inline}`}
    >
      <div className={`${styles.map_section} ${renderMap} ${mapPage}`}>
        <div className={styles.mapWrap}>
          <MapComponent handleStack={setStack} markerArr={object}  />
        </div>
      </div>
      <MobileMapControl stackOrder={stack} setStackOrder={setStack} />
      <div
        className={`${styles.results} ${adjustList}
        `}
      >
        <div className={`${stack === 'map' && styles.resMapInfo}`}>
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
            <b>
              {city} {status}
            </b>
          )}{' '}
          Listings {propertyCategory && city && `in ${city}`}
        </h3>
        <SearchForm
          defaultCity={defaultCity}
          className={styles.f}
          onSubmit={onSubmit}
        />
        <SwitchGroup
          onChange={(e) => handleSort(e.target.value)}
          mapState={map}
          onClick={toggleMap}
          listingObject={object}
          stackOrder={stack}
          orientation={position}
          setOrientation={setPosition}
        />
        </div>
        <div className={`${styles.listings_wrap} ${listingsPage} ${order}`}>
          {sortArr.map(item => 'location' in item &&
            <Card
              card={item as Listing}
              key={item.id}
              mapState={map}
              orientation={position}
            />
          )}
        </div>
      </div>
    </Container>
  );
}
