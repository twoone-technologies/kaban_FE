import { ReactNode } from 'react';
import OptGroup from '~/components/herosection/Optgroup';
import FormControl, {
  InputErrors,
  Register,
} from '~/components/reusable/FormControl';
import useStateCities from '~/hooks/useStateCities';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import Address from '~/components/reusable/placesAutocomplete/Address';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import { statesInNigeria } from '~/components/dashboard/postproperty/pages/miscellenous/mapProps';

type Props = {
  city: string;
  idx: number;
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
  setCity,
  setState,
  setMarker,
}: Props) {

  const { allCities, cityOptions, handleCityChange} = useStateCities();

  return (
    <InputWrap>
      <h3>Location</h3>
      <div className={`gap ${styles.locationData}`}>
        <FormControl
          as="select"
          name="state"
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
          icon={svg}
          as="select"
          name="city"
          labelText="City"
          className={styles.input}
          containerClass={`gap-0 f-column ${styles.inputWrap}`}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setCity(e.target.value);
          }}
        >
          <OptGroup subItems={cityOptions} header={'Cities'} />
        </FormControl>
        <Address
          idx={idx}
          error={error}
          register={register}
          className={styles.address}
          setMarker={setMarker}
          city={city}
          state={state}
          title="address"
        />
      </div>
    </InputWrap>
  );
}
