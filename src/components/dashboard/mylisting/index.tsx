import { useEffect, useState } from 'react';
import { Form, useLocation } from 'react-router-dom';
import { arrowDownIcon, arrowIcon, searchIcon, sortIcon } from '~/assets/icons';
import { Wrapper } from '~/components/reusable/Container';
import FormInput from '~/components/reusable/FormInput';
import styles from './listings.module.css';
import Button from '~/components/reusable/Button';
import Svg from '~/components/reusable/Svg';
import { sortOptions } from '~/components/searchForm/status';
import Checkbox from '~/components/searchForm/checkbox/Checkbox';
import ListingItem from './ListingItem';
import { HouseCard } from '~/components/reusable/card/Card';
import { dummyObj } from '~/components/reusable/dummyObj';
import PromptPage from './PromptPage';

export default function Listings() {
  const [sortArr, setSortArr] = useState<HouseCard[]>([]);
  const [active, setActive] = useState<'all' |'rent' | 'sale'>('all')

  const listingArray = dummyObj as HouseCard[];
  const [listingsObj, setListingsObj] = useState<HouseCard[]>(listingArray);

  const location = useLocation();
  
  useEffect(() => {
    const idFromHash = location.hash.substring(1);
    if (idFromHash) {
      const element = document.getElementById(`card-${idFromHash}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll to top if no hash is provided
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const handleCheckAll = () =>
  setListingsObj((prev) =>
    prev.map((item) => ({ ...item, checked: !item.checked }))
  );

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


  return (
    <Wrapper element="section">
      <div className={styles.search_order}>
        <Form className={styles.form}>
          <FormInput
            required
            width="17px"
            height="17px"
            type={'text'}
            maxLength={30}
            title={'search listing'}
            className={`${styles.schBar}`}
          />
          <Button className={`flex align-x align-y ${styles.btn}`}>
            <Svg href={searchIcon} />
          </Button>
        </Form>
        <div className={`flex gap ${styles.sortOptionsWrap}`}>
        <Svg href={sortIcon} className={styles.sortIcon} width="50px" height="30px" />
        <FormInput
          title={'sort'}
          className={styles.sort}
          header={'Sort'}
          subItems={sortOptions}
          onChange1={handleSort}
          link={arrowIcon}
        />
        </div>
      </div>
      {listingsObj.length !== 0 ? 
        <div className={`b-radius ${styles.listingsWrap}`}>
        <div className={`flex s-btw pad ${styles.listItem}`}>
          <div className='flex'>
            <Checkbox onChange={handleCheckAll} title1='select all' />
            <Svg href={arrowDownIcon} />
          </div>
          <div className={`flex gap-1 c-pad b-radius ${styles.sortWrap}`}>
            <span className={active === 'all' ? styles.active : ''} 
              onClick={() => setActive('all')}>All(12)</span>
            <span className={active === 'rent' ? styles.active : ''} 
              onClick={() => setActive('rent')}>For Rent(13)</span>
            <span className={active === 'sale' ? styles.active : ''} 
              onClick={() => setActive('sale')}>For Sale(13)</span>
          </div>
        </div>
        <div>
          <ListingItem 
            setItem={setListingsObj}
            listArr={listingsObj}
          />
        </div>
      </div> : 
      <PromptPage/>}
    </Wrapper>
  );
}
