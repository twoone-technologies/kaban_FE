import { ReactNode, useEffect, useState } from 'react';
import OptGroup from '~/components/herosection/Optgroup';
import FormControl, {
  InputErrors,
  Register,
} from '~/components/reusable/FormControl';
import useStateCities from '~/hooks/useStateCities';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import ListingAddress  from '~/components/reusable/placesAutocomplete/Address';
import styles from '~/components/reusable/listingForm/pages/miscellenous/listingForm.module.css';
import { statesInNigeria } from '~/components/reusable/listingForm/pages/miscellenous/mapProps';
import { Listing } from '~/utils/types/listing.types';

type Props = {
  city: string;
  idx: number;
  listing: Listing;
  state: string;
  svg: ReactNode;
  error: InputErrors;
  register?: Register;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setState: React.Dispatch<React.SetStateAction<string>>;
  setMarker: React.Dispatch<
    React.SetStateAction<google.maps.LatLngLiteral | null>
  >;
};

export default function HoodAddress({
  idx,
  svg,
  city,
  error,
  register,
  state,
  listing,
  setCity,
  setState,
  setMarker,
}: Props) {
  const { allCities, cityOptions, setCityOptions, handleCityChange } = useStateCities();
  const [defCity, setDefCity] = useState<string | undefined>(listing?.city);

  useEffect(() => {
    const defaultCity = allCities[capitalizeWord(listing?.state)]
    if (defaultCity) {
      setCityOptions(defaultCity);
      setState(capitalizeWord(listing?.state));
      setCity(capitalizeWord(listing?.city));
      setDefCity(capitalizeWord(listing?.city));
    }
  }, []);

  const capitalizeWord = (string?: string) => {
    return string ? string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' '): ''
  };

  return (
    <InputWrap>
      <h3>Location</h3>
      <div className={`gap ${styles.locationData}`}>
        <FormControl
          as="select"
          name="state"
          defaultValue={capitalizeWord(listing?.state)}
          containerClass={`gap-0 f-column ${styles.inputWrap}`}
          className={styles.input}
          labelText="State"
          icon={svg}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setState(e.target.value);
            handleCityChange(allCities, e.target.value);
          }}
        >
          <OptGroup subItems={statesInNigeria} header={'States'} />
        </FormControl>
        <FormControl
          as="select"
          name="city"
          value={defCity}
          icon={svg}
          labelText="City"
          className={styles.input}
          containerClass={`gap-0 f-column ${styles.inputWrap}`}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setCity(e.target.value);
            setDefCity(e.target.value);
          }}
        >
          <OptGroup subItems={cityOptions} header={'Cities'} />
        </FormControl>
        <ListingAddress
          idx={idx}
          name={"address"}
          required={idx === 2}
          listing={listing}
          error={error.address?.message}
          register={register}
          className={styles.address}
          setMarker={setMarker}
          city={city}
          state={state}
        />
      </div>
    </InputWrap>
  );
}
