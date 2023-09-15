import { useState } from 'react';
import Container from '~/components/reusable/Container';
import { dummyObj } from '~/components/reusable/dummyObj';
import { sortOptions } from '~/components/searchForm/status';
import Svg from '~/components/reusable/Svg';
import Card from '~/components/reusable/card/Card';
import SearchForm from '~/components/searchForm/SearchForm';
import styles from '~/styles/search_results.module.css';
import {
  arrowIcon,
  gridIcon,
  mapIcon,
  sortIcon,
  vertIcon,
} from '~/assets/icons';
import { ActionFunctionArgs, redirect } from 'react-router-dom';
import Map from '~/components/map/Map';
import FormInput from '~/components/reusable/FormInput';

export async function action({ request }: ActionFunctionArgs) {
  // get form data
  const formData = await request.formData();
  console.log(...formData);
  const searchStr = [...formData].reduce((prev, [key, val]) => {
    if (val) prev.push(`${key}=${val}`)
    return prev
  }, [] as string[]).join('&')
  // console.log(searchStr);

  // const property_type = payload.propertyType;
  // const bedrooms = payload.bedrooms;
  // const price_Range = payload.priceRange;

  // const str = `search_results?status=${payload.status}&location=${payload.location}${property_type??`&propertyType=${payload.propertyType}`}${bedrooms??`&bedrooms=${payload.bedrooms}`}${price_Range??`&priceRange=${payload.priceRange}`}`
  // console.log(str);
  
  // send data to BE
  //const res = await searchListings(searchStr)
  
  
  // redirect to result page with the data
  
  if (location.pathname !== "/search_results") {
    console.log(location);
    return redirect(`/search_results?${searchStr}`)
  }
  return redirect(`/search_results?${searchStr}`)
}


export default function SearchResults() {
  // const res = await searchListings(search)

  const [position, setPosition] = useState<'portrait' | 'landscape'>(
    'portrait',
  );
  const [stack, setStack] = useState<'listings' | 'map'>('listings');

  const [map, setMap] = useState(false);

  const [sortArr, setSortArr] = useState(dummyObj);

  const handleStack = (stack: 'listings' | 'map') => {
    setStack(stack);
  };

  const handleClick = (position: 'portrait' | 'landscape') => {
    setPosition(position);
  };

  const toggleMap = () => {
    setMap(!map);
  };

  const handleSort = (e: { target: { value: string; }; }) => {
    if (e.target.value === 'Price Acending') {
      setSortArr([...sortArr].sort((a, b) => a.price.amount - b.price.amount))
    }
    if (e.target.value === 'Price Decending') {
      setSortArr([...sortArr].sort((a, b) => b.price.amount - a.price.amount))
    }
    if (e.target.value === 'Featured listings first') {
      setSortArr([...sortArr].sort((a, b) => Number(b.featured) - Number(a.featured)))
    }
  }

  const active = stack === 'listings' ? styles.isActive : ''
  const mapActive = stack === 'map' ? styles.isActive : ''

  const listingsPage = stack === 'listings' ? '' : styles.stack
  const mapPage = stack === 'map' ? '' : styles.stack

  const renderMap = map ? styles.off : styles.on;
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
    <Container element="section"
      className={`container-pad ${styles.search_container}`}
    >
      <div className={`${styles.map_section} ${renderMap} ${mapPage}`}>
        <div className={styles.map}>
        <Map />
        </div>
      </div>
      <div className={`flex b-radius c-pad ${styles.map_control}`}>
        <div onClick={() => handleStack('listings')}
          className={`flex c-pad f-width gap align-y ${active} ${styles.map_tool}`}>
          <Svg href={gridIcon} />
          <span>Listings</span>
        </div>
        <div onClick={() => handleStack('map')}
          className={`flex c-pad f-width gap align-y ${mapActive} ${styles.map_tool}`}>
          <Svg href={mapIcon} />
          <span>Map</span>
        </div>
      </div>
      <div className={`${styles.results} ${adjustList} ${listingsPage}`}>
        <SearchForm />
        <h3>Rental Listings</h3>
        <div className="flex s-btw align-y">
          <span className={styles.size}>{dummyObj.length} results found</span>
          <div className="flex align-y">
            <div title="toggle Map" className={styles.nil}>
              <Svg onClick={toggleMap} href={mapIcon} />
            </div>
            <Svg href={sortIcon} width='50px' height='20px'/>
            <FormInput title={'sort'} className={styles.sort} header={'Sort'} subItems={sortOptions}
              onChange1={handleSort} link={arrowIcon}/>
            <div className={`gap c-pad flex ${styles.nil}`}>
              <div title="landscape">
                <Svg
                  href={vertIcon}
                  onClick={() => handleClick('landscape')}
                  className={position === 'landscape' ? 'bg-primary' : ''}
                />
              </div>
              <div title="portrait">
                <Svg
                  href={gridIcon}
                  onClick={() => handleClick('portrait')}
                  className={position === 'portrait' ? 'bg-primary' : ''}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.listings_wrap} ${order}`}>
          {sortArr.map((item) => (
            <Card key={item.id} card={item} orientation={position} mapState={map} />
          ))}
        </div>
      </div>
    </Container>
  );
}
