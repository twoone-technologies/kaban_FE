import { useLocation } from 'react-router-dom';
import OptGroup from '~/components/herosection/Optgroup';
import { Wrapper } from '~/components/reusable/Container';
import Svg from '~/components/reusable/Svg';
import Card from '~/components/reusable/card/Card';
import { dummyObj } from '~/components/reusable/dummyObj';
import SearchForm from '~/components/searchResults/searchForm/SearchForm';
import { sortOptions } from '~/components/searchResults/searchForm/status';
import styles from '~/styles/search_results.module.css';
import style from '~/components/searchResults/searchForm/searchForm.module.css';
import { arrowIcon, gridIcon, sortIcon, vertIcon } from '~/assets/icons';
import { useState } from 'react';

export default function SearchResults() {
  const { search } = useLocation();
  console.log(search);
  // const res = await searchListings(search)

  const [position, setPosition] = useState<'portrait' | 'landscape'>(
    'portrait',
  );
  const handleClick = (position: 'portrait' | 'landscape') => {
    setPosition(position); console.log(position);
  };

  return (
    <Wrapper element="section" className="container-pad">
      <SearchForm />
      <h3>Rental Listings</h3>
      <div className="flex s-btw align-y">
        <p>{dummyObj.length} results found</p>
        <div className="flex align-y">
          <Svg href={sortIcon} />
          <p>Sort by:</p>
          <div>
            <label htmlFor="sort by"></label>
            <div
              className={`flex b-radius f-width ${style.form_input} ${styles.sort}`}
            >
              <select
                name="propertyType"
                title="propertyType"
                className={`flex b-radius f-width ${style.input} ${styles.sort}`}
              >
                <OptGroup header={'Sort by'} subItems={sortOptions} />
              </select>
              <Svg
                href={arrowIcon}
                className={`${style.rotate} ${style.svgIcon}`}
              />
            </div>
          </div>
          <div>
            <Svg
              href={vertIcon}
              height="22px"
              width="22px"
              onClick={() => handleClick('landscape')}
              className={position === 'landscape' ? 'bg-primary' : ''}
            />
            <Svg
              href={gridIcon}
              height="22px"
              width="22px"
              onClick={() => handleClick('portrait')}
              className={position === 'portrait' ? 'bg-primary' : ''}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.listings_wrap}`}>
        {dummyObj.map((item) => (
          <Card key={item.id} card={item} orientation={position} />
        ))}
      </div>
    </Wrapper>
  );
}
