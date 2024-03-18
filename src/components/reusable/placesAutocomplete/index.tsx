import React from 'react';
import { getGeocode, getLatLng } from 'use-places-autocomplete';
import styles from './places.module.css';

type AutoCompleteProps = {
  currStat: string;
  inputValue: string;
  closeX?: (val:boolean) => void;
  clearOptions: () => void;
  dataArr: { place_id: string; description: string }[];
  setValues: (address: string, arg2: boolean) => void;
  setInputAddress: React.Dispatch<React.SetStateAction<string>>;
  setSelected: ({ lat, lng }: { lat: number; lng: number }) => void;
};

export default function PlacesAutocomplete({
  setSelected,
  setInputAddress,
  setValues,
  clearOptions,
  closeX,
  inputValue,
  currStat,
  dataArr,
}: AutoCompleteProps) {
  const handleSelect = async (address: string) => {
    setValues(address, false);
    closeX && closeX(true);
    clearOptions();
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    const description = target.innerText;
    handleSelect(description);
    setInputAddress(description);
  };

  return (
    <div className={`absolute w-full b-radius z-50 ${styles.autoCompleteDropDown}`}>
      <input  readOnly hidden value={inputValue} />
      <>{currStat === 'OK' && dataArr.map((item) => (
        <li className={`px-2 py-1 ${styles.srchres}`}
            onClick={handleClick}
            key={item.place_id}
          >
            {item.description}
        </li>
        ))}
      </>
    </div>
  );
}
