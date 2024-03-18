import { ReactNode, useState } from 'react';
import OptGroup from '~/components/herosection/Optgroup';
import { StateCitiesMap } from '../location/HoodAddress';
import { statusArr } from '~/components/searchForm/status';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import FormControl, { InputErrors, Register } from '~/components/reusable/FormControl';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import { propertyCategory, propertyType,} from '~/components/dashboard/postproperty/pages/miscellenous/mapProps';

export default function PropertyDescription({
  id,
  svg,
  error,
  register,
  setDetails,
}: {
  id: number;
  svg: ReactNode;
  error: InputErrors;
  register: Register;
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

  return (
    <InputWrap>
      <h3>Property Description</h3>
      <FormControl
        required={id === 0}
        as="input"
        type="text"
        name="title"
        labelText="Title"
        register={register}
        className={styles.input}
        placeholder="Write a title"
        error={error.title && error.title.message}
        containerClass={`gap-0 f-column ${styles.inputWrap}`}
        registerOptions={{
          maxLength: { value: 25, message: 'Title is too long' },
        }}
      />
      <fieldset className={`flex gap ${styles.statType}`}>
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
      </fieldset>
      <FormControl
        required={id === 0}
        as="textarea"
        name="description"
        register={register}
        labelText="Description"
        placeholder="Brief description of the property"
        containerClass={`gap-0 f-column ${styles.inputWrap}`}
        error={error.description && error.description.message}
        className={`f-width b-radius c-pad h-28 ${styles.input}`}
      />
    </InputWrap>
  );
}
