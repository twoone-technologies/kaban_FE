import { useState } from 'react';
import { arrowIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';
import usePlacesAutocomplete from 'use-places-autocomplete';
import Checkbox from '~/components/searchForm/checkbox/Checkbox';
import Location from '~/components/dashboard/postproperty/pages/location/HoodAddress';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import MapAddress from '~/components/dashboard/postproperty/pages/location/MapAddress';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import { InputErrors, Register } from '~/components/reusable/FormControl';
import { Inputs } from '../..';
import { UseFormSetValue } from 'react-hook-form';

type LocationProps = {
  className: string;
  error: InputErrors;
  register?: Register;
  setValue: UseFormSetValue<Inputs>;
  activeIndex: number;
};

export default function ListingLocation({
  register,
  error,
  setValue,
  className,
  activeIndex,
}: LocationProps) {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const { clearSuggestions } = usePlacesAutocomplete();
  const [mapCenter, setMapCenter] = useState({ lat: 10.0, lng: 8.0 });
  const [marker, setMarker] = useState<google.maps.LatLngLiteral | null>(null);

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return;
    const obj: google.maps.LatLngLiteral = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setMarker(obj);
    setMapCenter({ lat: obj.lat, lng: obj.lng });
  };
  setValue('latitude', String(marker?.lat));
  setValue('longitude', String(marker?.lng));

  const svg = <Svg className={styles.svg} href={arrowIcon} />;
  return (
    <fieldset
      onClick={() => clearSuggestions()}
      className={`flex flex-col gap-6 ${className}`}
    >
      <Location
        idx={activeIndex}
        svg={svg}
        city={city}
        state={state}
        error={error}
        setCity={setCity}
        register={register}
        setState={setState}
        setMarker={setMarker}
      />
      <MapAddress
        city={city}
        error={error}
        state={state}
        marker={marker}
        idx={activeIndex}
        register={register}
        mapCenter={mapCenter}
        setMarker={setMarker}
        handleMapClick={handleMapClick}
      />
      <InputWrap>
        <h3>Agreement</h3>
        <div className="flex gap">
          <Checkbox
            name="consent"
            required={activeIndex === 2}
            register={register}
          />
          <span>
            I consent that I am an authorized marketing representative of the
            above described real estate property.
          </span>
        </div>
      </InputWrap>
    </fieldset>
  );
}
