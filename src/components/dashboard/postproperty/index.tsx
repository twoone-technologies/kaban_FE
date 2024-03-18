import { useEffect, useState } from 'react';
import { ActionFunctionArgs, useNavigate } from 'react-router-dom';
import { Wrapper } from '~/components/reusable/Container';
import { Form } from 'react-router-dom';
import Basic from '~/components/dashboard/postproperty/pages/basic';
import Media from '~/components/dashboard/postproperty/pages/media';
import ListingLocation from '~/components/dashboard/postproperty/pages/location';
import styles from '~/components/dashboard/postproperty/index.module.css';
import { headers } from '~/components/dashboard/postproperty/pages/miscellenous/mapProps';
import useTabulation from '~/hooks/useTabulation';
import Tabulation from '~/components/reusable/tabulation/Tabulation';
import { useForm } from 'react-hook-form';
import ContinueOrCancel from './pages/miscellenous/ContinueOrCancel';
import Tooltip from '~/components/reusable/Tooltip';

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
  coverImg: File;
  listingImages: string;
  videoUrl?: string;
  state: string;
  city: string;
  address: string;
  latitude: string;
  longitude: string;
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const listingImages = formData.getAll('listingImages');
  const newArray: [string, File][] = [];
  
  listingImages.forEach((file) => {
    const fileObject = JSON.parse(file as string) as File[];
    fileObject.forEach((item) => {
      const newFile = new File([item], item.name, { type: item.type });
      newArray.push(['listingImage', newFile]);
    });
  });
  formData.delete('listingImages');

  const finalFormData = [...formData.entries(), ...newArray];
  // Push finalFormData to backend
  console.log(...finalFormData);
  // Return error object if validation fails

  return 'success';
}

export default function Post() {
  const navigate = useNavigate()
  const [minNum, setMinNum] = useState(false);
  const [success, setSuccess] = useState(false);
  const { activeIndex, prevId, next, prev } = useTabulation();

  const underlineStyle = {
    transform: `translateX(${prevId}px)`,
  };

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;
    if (success) {
      hideTimeout = setTimeout(() => {
        setSuccess(false);
        navigate('/dashboard/listings')
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
          valid={isValid}
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
