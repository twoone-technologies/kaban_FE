import { ReactNode, useState } from 'react';
import { useActionData } from 'react-router-dom';
import OptGroup from '~/components/herosection/Optgroup';
import { statusArr } from '~/components/searchForm/status';
import FormControl from '~/components/reusable/FormControl';
import { ErrorObj } from '~/components/dashboard/postproperty';
import InputWrap from '~/components/dashboard/postproperty/pages/miscellenous/InputWrap';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import {
  propertyCategory,
  propertyType,
} from '~/components/dashboard/postproperty/pages/miscellenous/mapProps';
import { StateCitiesMap } from '../location/HoodAddress';

export default function PropertyDescription({
  svg,
  setDetails,
}: {
  svg: ReactNode;
  setDetails: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const allPropertyType: StateCitiesMap = { ...propertyType };
  const [typeOptions, setTypeOptions] = useState(
    allPropertyType[propertyCategory[0].value],
  );

  const handleCityChange = (categoryTypes: StateCitiesMap, value: string) => {
    const categoryKeys = Object.keys(categoryTypes);
    const similarCategoryKey = categoryKeys.find(
      (key) => key.toLocaleLowerCase() === value.toLocaleLowerCase(),
    );
    if (similarCategoryKey) {
      const cities = categoryTypes[similarCategoryKey];
      setTypeOptions(cities);
    }
  };
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
          name="category"
          labelText="Category"
          className={styles.input}
          containerClass={`gap-0 f-column ${styles.inputWrap}`}
          icon={svg}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            handleCityChange(allPropertyType, e.target.value);
            typeOptions[0] === 'Land' ? setDetails(true) : setDetails(false);
          }}
        >
          <OptGroup header="propertyCategory" subItems={propertyCategory} />
        </FormControl>
        <FormControl
          as="select"
          name="type"
          labelText="Type"
          className={styles.input}
          containerClass={`gap-0 f-column ${styles.inputWrap}`}
          icon={svg}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            console.log(e.target.value);
            e.target.value !== 'Land' ? setDetails(true) : setDetails(false);
          }}
        >
          <OptGroup header="propertyType" subItems={typeOptions} />
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
