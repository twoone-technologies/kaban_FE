import { useEffect, useState } from 'react';
import { ActionFunctionArgs } from 'react-router-dom';
import { Wrapper } from '~/components/reusable/Container';
import { Form, redirect, useActionData } from 'react-router-dom';
import Basic from '~/components/dashboard/postproperty/pages/basic';
import Media from '~/components/dashboard/postproperty/pages/media';
import ListingLocation from '~/components/dashboard/postproperty/pages/location';
import styles from '~/components/dashboard/postproperty/index.module.css';
import { headers } from '~/components/dashboard/postproperty/pages/miscellenous/mapProps';

export type ErrorObj = {
  [fieldName: string]: string[];
};

export async function action({ request }: ActionFunctionArgs) {
  // get form data
  const formData = await request.formData();
  const videoUrl = formData.get('videoUrl');

  const fields = [
    { name: 'title', value: formData.get('title'), label: 'Title' },
    { name: 'description', value: formData.get('description'), label: 'Description' },
    { name: 'salesRentPrice', value: formData.get('salesRentPrice(₦)'), label: 'Price' },
    { name: 'coverImg', value: formData.get('coverImg'), label: 'Cover Image' },
    { name: 'listingImg', value: formData.get('listingImg'), label: 'Listing Images' },
    { name: 'address', value: formData.get('address'), label: 'Address' },
  ];

  // validate the fields
  const errors: ErrorObj = {};
  if (videoUrl !== null && videoUrl === '') {
    if (!errors['videoUrl']) errors['videoUrl'] = [];
    errors['videoUrl'].push(`please add video link`);
  }
  if ( videoUrl !== null && videoUrl !== '' &&
    [videoUrl].indexOf('watch') === -1
  ) {
    if (!errors['videoUrl']) errors['videoUrl'] = [];
    errors['videoUrl'].push(`broken link!!!, open video before you copy the url`)
  }

  fields.forEach((field) => {
    if (field.value !== null && field.value === '') {
      if (!errors[field.name])  errors[field.name] = [];
      errors[field.name].push(`${field.label} should not be empty`);
    }
    if (field.value !== null && typeof field.value === 'object' && Object.keys(field.value).length < 1) {
      if (!errors[field.name]) errors[field.name] = [];
      const valueObj = field.value as { [key: string]: unknown };
      if ('name' in valueObj && valueObj.name === '') {
        errors[field.name].push(`Please add ${field.label}`);
      }
    }
  });

  // return data if we have errors
  if (Object.keys(errors).length > 0) return errors;
  // otherwise log the result or send to the API
  else console.log(...formData);

  return redirect('/dashboard');
}

export default function Post() {
  const errors = useActionData() as ErrorObj;
  const [activeIndex, setActiveIndex] = useState(-1);
  function handleHeaderClick(id: number) {setActiveIndex(id)}

  useEffect(() => {
    setActiveIndex(0);
    if (errors?.title || errors?.description || errors?.price)
      setActiveIndex(0);
    else if (errors?.upload || errors?.videoUrl) setActiveIndex(1);
    else if (errors?.address) setActiveIndex(2);
  }, [errors]);


  const underlineStyle = {
    transform: `translateX(${activeIndex * (450 / headers.length)}%)`,
  };

  return (
    <Wrapper element="section" className={styles.wrapper}>
      <div className={`flex gap-7 w-full ${styles.formNav}`}>
        {headers.map((header) => (
          <span
            key={header.value}
            onClick={() => handleHeaderClick(parseInt(header.value))}
            className={`${styles.header} ${
              parseInt(header.value) === activeIndex ? styles.active : ''
            }`}
          >
            {header.type}
          </span>
        ))}
        <div className={styles.underline} style={underlineStyle} />
      </div>
      <Form
        encType="application/form-data"
        method="post"
        className="flex f-column gap"
      >
        <Basic
          setNewIndex={setActiveIndex}
          activeIndex={activeIndex}
          className={activeIndex === 0 ? 'visible' : styles.hidden}
        />
        <Media
          setNewIndex={setActiveIndex}
          activeIndex={activeIndex}
          className={activeIndex === 1 ? 'visible' : styles.hidden}
        />
        <ListingLocation
          setNewIndex={setActiveIndex}
          activeIndex={activeIndex}
          className={activeIndex === 2 ? 'visible' : styles.hidden}
        />
      </Form>
    </Wrapper>
  );
}
