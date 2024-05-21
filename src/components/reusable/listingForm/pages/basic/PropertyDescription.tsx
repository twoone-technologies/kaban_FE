import { useEffect, useState } from 'react';
import OptGroup from '~/components/herosection/Optgroup';
import { statusArr } from '~/components/searchForm/status';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import FormControl, {
  InputErrors,
  Register,
} from '~/components/reusable/FormControl';
import styles from '~/components/reusable/listingForm/pages/miscellenous/listingForm.module.css';
import {
  propertyCategory,
  propertyType,
} from '~/components/reusable/listingForm/pages/miscellenous/mapProps';
import { StateCitiesMap } from '~/hooks/useStateCities';
import { GoodStat, HouseCard } from '~/components/reusable/card/Card';

type PropertyProps = {
  id: number;
  error: InputErrors;
  register: Register;
  listing?: HouseCard;
  setListing?: React.Dispatch<React.SetStateAction<HouseCard>>;
  setDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PropertyDescription({
  id,
  error,
  register,
  listing,
  setListing,
  setDetails,
}: PropertyProps) {
  const allPropertyType: StateCitiesMap = { ...propertyType };
  const [typeOptions, setTypeOptions] = useState(
    allPropertyType[propertyCategory[0].value],
  );

  const handleTypes = (category: string) => {
    const categoryKeys = Object.keys(allPropertyType);
    const similarCategoryKey = categoryKeys.find(
      (key) =>
        key.toLocaleLowerCase() ===
        category.toLocaleLowerCase(),
    );
    if (similarCategoryKey) {
      const types = allPropertyType[similarCategoryKey];
      setTypeOptions(types);
    }
  }

  useEffect(() => {
    const categoryKeys = Object.keys(allPropertyType);
    const similarCategoryKey = categoryKeys.find(
      (key) =>
        key.toLocaleLowerCase() ===
        listing?.property_category.toLocaleLowerCase(),
    );
    if (similarCategoryKey) {
      const types = allPropertyType[similarCategoryKey];
      setTypeOptions(types);
    }
    typeOptions[0] === 'Land' ? setDetails(true) : setDetails(false);
  }, [listing?.property_category]);

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
        value={listing?.title}
        error={error.title && error.title.message}
        containerClass={`gap-0 f-column ${styles.inputWrap}`}
        registerOptions={{
          maxLength: { value: 25, message: 'Title is too long' },
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            listing &&
            setListing &&
            setListing({ ...listing, title: e.target.value }),
        }}
      />
      <fieldset className={`flex gap ${styles.statType}`}>
        <FormControl
          as="select"
          name="status"
          labelText="Status"
          className={styles.input}
          containerClass={`gap-0 f-column ${styles.inputWrap}`}
          value={listing?.status}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            listing &&
            setListing &&
            setListing({ ...listing, status: e.target.value as GoodStat })
          }
        >
          <OptGroup header="status" subItems={statusArr} />
        </FormControl>
        <FormControl
          as="select"
          name="category"
          labelText="Category"
          className={styles.input}
          value={
            listing &&
            listing?.property_category.charAt(0).toUpperCase() +
              listing?.property_category.slice(1)
          }
          containerClass={`gap-0 f-column ${styles.inputWrap}`}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            listing &&
              setListing &&
              setListing({ ...listing, property_category: e.target.value });
            handleTypes(e.target.value);
          }}
        >
          <OptGroup header="propertyCategory" subItems={propertyCategory} />
        </FormControl>
        <FormControl
          as="select"
          name="type"
          labelText="Type"
          className={styles.input}
          value={
            listing &&
            listing?.property_type.charAt(0).toUpperCase() +
              listing?.property_type.slice(1)
          }
          containerClass={`gap-0 f-column ${styles.inputWrap}`}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            listing &&
              setListing &&
              setListing({ ...listing, property_type: e.target.value });
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
        value={listing?.description}
        labelText="Description"
        registerOptions={{
          maxLength: { value: 200, message: 'Description is too long' },
          onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
            listing &&
            setListing &&
            setListing({ ...listing, description: e.target.value }),
        }}
        placeholder="Brief description of the property"
        containerClass={`gap-0 f-column ${styles.inputWrap}`}
        error={error.description && error.description.message}
        className={`f-width b-radius c-pad h-28 ${styles.input}`}
      />
    </InputWrap>
  );
}
