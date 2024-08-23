import { useEffect, useState } from 'react';
import { arrowIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';
import usePlacesAutocomplete from 'use-places-autocomplete';
import Checkbox from '~/components/searchForm/checkbox/Checkbox';
import Location from '~/components/reusable/listingForm/pages/location/HoodAddress';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import MapAddress from '~/components/reusable/listingForm/pages/location/MapAddress';
import styles from '~/components/reusable/listingForm/pages/miscellenous/listingForm.module.css';
import { InputErrors, Register } from '~/components/reusable/FormControl';
import { Inputs } from '../..';
import { UseFormSetValue } from 'react-hook-form';
import { Listing } from '~/utils/types/listing.types';
import { MapMouseEvent} from '@vis.gl/react-google-maps';

type LocationProps = {
  className: string;
  listing: Listing;
  error: InputErrors;
  register?: Register;
  setValue: UseFormSetValue<Inputs>;
  activeIndex: number;
};

export default function ListingLocation({
  register,
  listing,
  error,
  setValue,
  className,
  activeIndex,
}: LocationProps) {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const { clearSuggestions } = usePlacesAutocomplete();

  const [axis, setAxis] = useState<google.maps.LatLngLiteral | null>({
    lat: 10,
    lng: 8,
  });
  const [marker, setMarker] = useState<google.maps.LatLngLiteral | null>({
    lat: listing?.location.coordinates[0],
    lng: listing?.location.coordinates[1],
  });

  useEffect(() => {
    if (listing) {
      setAxis({
        lat: listing?.location.coordinates[0],
        lng: listing?.location.coordinates[1]
      })
    }
    if (marker?.lat !== undefined) setAxis(marker);
  },[listing, marker])
  
  const handleMapClick = (e: MapMouseEvent) => {
    if (!e.detail.latLng) return;
    setMarker(e.detail.latLng);
  };
  setValue('latitude', String(marker?.lat));
  setValue('longitude', String(marker?.lng));

  const svg = <Svg className={styles.svg} href={arrowIcon} />;
  return (
    <fieldset
      onClick={() => clearSuggestions()}
      className={className}
    >
      <Location
        idx={activeIndex}
        svg={svg}
        listing={listing}
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
        listing={listing}
        error={error}
        state={state}
        marker={marker}
        idx={activeIndex}
        register={register}
        mapCenter={axis}
        setMarker={setMarker}
        setMapCenter={setAxis}
        handleMapClick={handleMapClick}
      />
      <InputWrap>
        <h3>Agreement</h3>
        <div className="flex gap">
          <Checkbox
            name="consent"
            required={activeIndex === 2}
            defaultChecked
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
