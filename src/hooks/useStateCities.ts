import { useState } from "react";
import {
  citiesInNigeria,
  statesInNigeria,
} from '~/components/dashboard/postproperty/pages/miscellenous/mapProps';


export type StateCitiesMap = { [key: string]: string[] };

export default function useStateCities() {
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

  return { allCities, cityOptions, handleCityChange}
}
