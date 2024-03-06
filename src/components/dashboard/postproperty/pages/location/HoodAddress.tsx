import { ReactNode, useState } from 'react';
import OptGroup from '~/components/herosection/Optgroup';
import FormControl from '~/components/reusable/FormControl';
import Address from '~/components/reusable/placesAutocomplete/Address';
import InputWrap from '~/components/dashboard/postproperty/pages/miscellenous/InputWrap';
import styles from '~/components/dashboard/postproperty/pages/miscellenous//post.module.css';
import { citiesInNigeria, statesInNigeria } from '~/components/dashboard/postproperty/pages/miscellenous//mapProps';

type Props = {
  city: string;
  state: string;
  svg: ReactNode;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setState: React.Dispatch<React.SetStateAction<string>>;
  setMarker: React.Dispatch<
    React.SetStateAction<google.maps.LatLngLiteral | null>
  >;
};

export type StateCitiesMap = { [key: string]: string[] };

export default function HoodAddress({
  svg,
  city,
  state,
  setCity,
  setState,
  setMarker,
}: Props) {
  const allCities: StateCitiesMap = { ...citiesInNigeria };
  const [cityOptions, setCityOptions] = useState(
    allCities[statesInNigeria[0].value],
  );

  const handleCityChange = (stateCitiesMap: StateCitiesMap, value: string) => {
    const stateKeys = Object.keys(stateCitiesMap);
    const similarStateKey = stateKeys.find(
      (key) => key.toLocaleLowerCase() === value.toLocaleLowerCase(),
    );
    if (similarStateKey) {
      const cities = stateCitiesMap[similarStateKey];
      setCityOptions(cities);
    }
  };
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
