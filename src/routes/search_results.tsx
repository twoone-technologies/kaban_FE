import { useLocation } from 'react-router-dom';
import { arrowIcon } from '~/assets';
import OptGroup from '~/components/herosection/Optgroup';
import { Wrapper } from '~/components/reusable/Container';
import Svg from '~/components/reusable/Svg';
import Card from '~/components/reusable/card/Card';
import { dummyObj } from '~/components/reusable/dummyObj';
import SearchForm from '~/components/searchResults/searchForm/SearchForm';
import { sortOptions, statusArr } from '~/components/searchResults/searchForm/status';
import styles from '~/styles/search_results.module.css';
import style from '~/components/searchResults/searchForm/searchForm.module.css';

export default function SearchResults() {
  const { search } = useLocation();
  console.log(search);
  // const res = await searchListings(search)
  return (
    <Wrapper element="section" className="container-pad">
      <SearchForm />
      <h3>Rental Listings</h3>
      <div className='flex s-btw align-y'>
        <p>{dummyObj.length} results found</p>
        <div className='flex align-y'>
          <Svg href={''} />
          <p>Sort by:</p>
          <div>
            <label htmlFor="sort by"></label>
            <div className={`flex b-radius f-width ${style.form_input} ${styles.sort}`}>
              <select name='propertyType' title="propertyType"
                className={`flex b-radius f-width ${style.input} ${styles.sort}`}>
                <OptGroup header={'Sort by'} subItems={sortOptions} />
              </select>
              <Svg href={arrowIcon} className={`${style.rotate} ${style.svgIcon}`} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.listings_wrap}`}>
        {dummyObj.map((item, id) => (
          <div className={styles.wrap}>
            <Card key={id} card={item} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
