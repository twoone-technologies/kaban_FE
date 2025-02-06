import { useState } from 'react';
import { Form } from 'react-router-dom';
import { searchIcon, sortIcon } from '~/assets/icons';
import { Wrapper } from '~/components/reusable/Container';
import styles from './listings.module.css';
import Button from '~/components/reusable/Button';
import Svg from '~/components/reusable/Svg';
import { listingOptions } from '~/components/searchForm/status';
import ListingItem from './ListingItem';
import { dummyObj } from '~/components/reusable/dummyObj';
import PromptPage from './PromptPage';
import useRouting from '~/hooks/useRouting';
import FormControl from '~/components/reusable/FormControl';
import OptGroup from '~/components/herosection/Optgroup';

import useSortSwitch from '~/hooks/useSortSwitch';
import { Listing } from '~/utils/types/listing.types';

export default function Listings() {
  useRouting();
  const [active, setActive] = useState<'all' | 'rent' | 'sale'>('all');
  const listingArray = dummyObj as unknown as Listing[];
  const { sortArr, handleSort } = useSortSwitch(listingArray);

  return (
    <Wrapper element="section">
      <div className={'flex flex-col gap-1 space-between sm:flex-row'}>
        <Form className={styles.form}>
          <FormControl
            as="input"
            type={'text'}
            maxLength={30}
            placeholder={'search listing'}
            className={`${styles.schBar}`}
          />
          <Button className={`flex align-x align-y ${styles.btn}`}>
            <Svg href={searchIcon} />
          </Button>
        </Form>
        <div className={`flex gap ${styles.sortOptionsWrap}`}>
          <Svg
            href={sortIcon}
            className={styles.sortIcon}
            width="50px"
            height="30px"
          />
          <FormControl
            as="select"
            title={'sort'}
            disabled={active !== 'all'}
            className={`${active !== 'all' ? 'cursor-not-allowed' : ''} ${styles.sort}`}
            onChange={(e) => handleSort(e.target.value)}
          >
            <OptGroup header="Sort options" subItems={listingOptions} />
          </FormControl>
        </div>
      </div>
      {sortArr.length !== 0 ? (
        <div className={`b-radius ${styles.listingsWrap}`}>
          <div className={`flex gap-1 c-pad justify-end mb-1 ${styles.sortWrap}`}>
            <span
              className={`cursor-pointer ${active === 'all' ? styles.active : ''}`}
              onClick={() => setActive('all')}
            >
              All(12)
            </span>
            <span
              className={`cursor-pointer ${active === 'rent' ? styles.active : ''}`}
              onClick={() => {setActive('rent'); handleSort('rent')}}
            >
              For Rent(13)
            </span>
            <span
              className={`cursor-pointer ${active === 'sale' ? styles.active : ''}`}
              onClick={() => {setActive('sale'); handleSort('sale')}}
            >
              For Sale(13)
            </span>
          </div>
          <ListingItem listArr={sortArr as Listing[]} />
        </div>
      ) : (
        <PromptPage />
      )}
    </Wrapper>
  );
}
