import { ReactNode } from 'react';
import { useActionData } from 'react-router-dom';
import OptGroup from '~/components/herosection/Optgroup';
import { statusArr } from '~/components/searchForm/status';
import FormControl from '~/components/reusable/FormControl';
import { ErrorObj } from '~/components/dashboard/postproperty';
import InputWrap from '~/components/dashboard/postproperty/pages/miscellenous/InputWrap';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import { propertyTypes } from '~/components/dashboard/postproperty/pages/miscellenous/mapProps';

export default function PropertyDescription({svg}: {svg: ReactNode}) {
  const errors = useActionData() as ErrorObj;
  return (
    <InputWrap>
      <h3>Property Description</h3>
      <FormControl
        as="input"
        type="text"
        labelText="Title"
        name="title"
        maxLength={25}
        error={errors?.title !== undefined ? errors.title[0] : ''}
        className={styles.input}
        placeholder="Write a title"
        containerClass={`gap-0 f-column ${styles.inputWrap}`}
      />
      <div className={`flex gap ${styles.statType}`}>
        <FormControl
          as="select"
          name="status"
          labelText="Status"
          className={styles.input}
          containerClass={`gap-0 f-column ${styles.inputWrap}`}
          icon={svg}
        >
          <OptGroup header="status" subItems={statusArr} />
        </FormControl>
        <FormControl
          as="select"
          name="type"
          labelText="Type"
          className={styles.input}
          containerClass={`gap-0 f-column ${styles.inputWrap}`}
          icon={svg}
        >
          <OptGroup header="propertyTypes" subItems={propertyTypes} />
        </FormControl>
      </div>
      <FormControl
        error={errors?.description != undefined ? errors.description[0] : ''}
        as="textarea"
        containerClass={`gap-0 f-column ${styles.inputWrap}`}
        className={`f-width b-radius c-pad h-28 ${styles.input}`}
        name="description"
        labelText="Description"
        placeholder="Brief description of the property"
      />
    </InputWrap>
  );
}
