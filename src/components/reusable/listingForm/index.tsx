import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Wrapper } from '~/components/reusable/Container';
import { Form } from 'react-router-dom';
import Basic from '~/components/reusable/listingForm/pages/basic';
import Media from '~/components/reusable/listingForm/pages/media';
import ListingLocation from '~/components/reusable/listingForm/pages/location';
import styles from '~/components/reusable/listingForm/index.module.css';
import { headers } from '~/components/reusable/listingForm/pages/miscellenous/mapProps';
import useTabulation from '~/hooks/useTabulation';
import Tabulation from '~/components/reusable/tabulation/Tabulation';
import { useForm } from 'react-hook-form';
import ContinueOrCancel from './pages/miscellenous/ContinueOrCancel';
import Tooltip from '~/components/reusable/Tooltip';
import { HouseCard } from '~/components/reusable/card/Card';

export type ErrorObj = {
  [fieldName: string]: string[];
};

export type Inputs = {
  title: string;
  status: string;
  category: string;
  type: string;
  description: string;
  salesRentPrice: number;
  priceSuffix: string;
  areaSize: number;
  coverImage: string;
  listingImages: string;
  videoUrl?: string;
  state: string;
  city: string;
  address: string;
  latitude: string;
  longitude: string;
};

export default function ListingForm({
  listingArray,
}: {
  listingArray?: HouseCard[];
}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [minNum, setMinNum] = useState(false);
  const [success, setSuccess] = useState(false);
  const { activeIndex, prevId, next, prev } = useTabulation();
  const property = listingArray?.find((item) => item.id === id);
  const listingItem = property as HouseCard;
  const [listing, setListing] = useState<HouseCard>(listingItem);

  const underlineStyle = {
    transform: `translateX(${prevId}px)`,
  };

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;
    if (success) {
      hideTimeout = setTimeout(() => {
        setSuccess(false);
        navigate('/dashboard/listings');
      }, 2000);
    }
    return () => {
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, [success]);

  const {
    register,
    setValue,    
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'all',
  });
  console.log(isValid, minNum);

  return (
    <Wrapper element="section" className={styles.wrapper}>
      <Tabulation
        idx={activeIndex}
        style={underlineStyle}
        headerArr={headers}
      />
      <Form
        method="post"
        className="flex f-column gap"
        encType="application/form-data"
      >
        <Basic
          listing={listing}
          setListing={setListing}
          error={errors}
          register={register}
          activeIndex={activeIndex}
          className={activeIndex === 0 ? 'visible' : styles.hidden}
        />
        <Media
          setValue={setValue}
          error={errors}
          register={register}
          setMinNum={setMinNum}
          activeIndex={activeIndex}
          className={activeIndex === 1 ? 'visible' : styles.hidden}
        />
        <ListingLocation
          error={errors}
          setValue={setValue}
          activeIndex={activeIndex}
          register={activeIndex === 2 ? register : undefined}
          className={activeIndex === 2 ? 'visible' : styles.hidden}
        />
        <ContinueOrCancel
          prev={prev}
          next={next}
          minImg={minNum}
          valid={isValid}
          setSuccess={setSuccess}
          activeIndex={activeIndex}
        />
        <Tooltip
          popOver={true}
          text={'Listing created successfully'}
          copy={success}
        />
      </Form>
    </Wrapper>
  );
}
