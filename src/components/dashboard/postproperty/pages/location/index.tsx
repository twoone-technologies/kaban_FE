import { useState } from 'react';
import { arrowIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';
import usePlacesAutocomplete from 'use-places-autocomplete';
import Checkbox from '~/components/searchForm/checkbox/Checkbox';
import Location from '~/components/dashboard/postproperty/pages/location/HoodAddress';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import MapAddress from '~/components/dashboard/postproperty/pages/location/MapAddress';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import ContinueOrCancel from '~/components/dashboard/postproperty/pages/miscellenous/ContinueOrCancel';

type LocationProps = {
  className: string;
  activeIndex: number;
  setNewIndex: (num: number) => void;
};

export default function ListingLocation({
  className,
  activeIndex,
  setNewIndex,
}: LocationProps) {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [canSubmit, setCanSubmit] = useState(0);
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

  const handleAgreement = (e: { target: { checked: boolean } }) => {
    e.target.checked === true && marker != null
      ? setCanSubmit(1)
      : setCanSubmit(0);
  };
  const svg = <Svg className={styles.svg} href={arrowIcon} />;

  return (
    <div
      onClick={() => clearSuggestions()}
      className={`flex flex-col gap-6 ${className}`}
    >
      <Location
        svg={svg}
        city={city}
        state={state}
        setCity={setCity}
        setState={setState}
        setMarker={setMarker}
      />
      <MapAddress
        city={city}
        state={state}
        marker={marker}
        mapCenter={mapCenter}
        setMarker={setMarker}
        handleMapClick={handleMapClick}
      />
      <InputWrap>
        <h3>Agreement</h3>
        <div className="flex gap">
          <Checkbox name="consent" onChange={handleAgreement} />
          <span>
            I consent that I am an authorized marketing representative of the
            above described real estate property.
          </span>
        </div>
      </InputWrap>
      <ContinueOrCancel
        disabled={canSubmit}
        activeIndex={activeIndex}
        setNewIndex={setNewIndex}
      />
    </div>
  );
}
