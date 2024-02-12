import FormInput from '~/components/reusable/FormInput';
import InputWrap from './InputWrap';
import styles from './post.module.css';
import MapLoader from '~/components/map/MapLoader';
import { useState } from 'react';

type props = {
  className: string;
};

export default function ListingLocation({ className }: props) {
  const [marker, setMarker] = useState<google.maps.LatLngLiteral | null>(null);

  const handleMapClick = (latLng: google.maps.MapMouseEvent) => {
    if (!latLng.latLng) return; // Ensure latLng is defined

    const obj: google.maps.LatLngLiteral = {
      lat: latLng.latLng.lat(),
      lng: latLng.latLng.lng(),
    }
    setMarker(obj);
  };

  return (
    <div className={className}>
      <InputWrap>
        <h3>Location</h3>
        <div className={`gap ${styles.locationData}`}>
          <FormInput
            className={`gap-0 f-column ${styles.inputWrap}`}
            inputClass={styles.input}
            title_1="State"
            title={'state'}
            type="text"
            placeholder="Akwa Ibom, Lagos, Rivers"
          />
          <FormInput
            className={`gap-0 f-column ${styles.inputWrap}`}
            inputClass={styles.input}
            title_1="City"
            title={'city'}
            type="text"
            placeholder="Uyo, Ikeja, Port Harcourt"
          />
          <FormInput
            className={`gap-0 f-column ${styles.inputWrap}`}
            inputClass={styles.input}
            title_1="Address"
            title={'address'}
            type="text"
            placeholder="Enter Address"
          />
          <FormInput
            className={`gap-0 f-column ${styles.inputWrap}`}
            inputClass={styles.input}
            title_1="Landmark"
            title={'landmark'}
            type="text"
            placeholder="Nearest major road/Landmark"
          />
        </div>
      </InputWrap>
      <InputWrap>
        <h3>Map</h3>
        <div className={`gap-x-0.5 ${styles.mapData}`}>
          <div className={styles.mapWrap}>
            <MapLoader
              markerPosition={marker}
              onMapClick={e => {console.log(e);
                handleMapClick(e)
              }}
            />
          </div>
          <div className='flex flex-col justify-between'>
            <FormInput
              className={`gap-0 f-column ${styles.inputWrap}`}
              inputClass={styles.input}
              title_1="Map Address"
              title={'mapAddress'}
              type="text"
              placeholder="Enter address"
            />
            <FormInput
              className={`gap-0 f-column ${styles.inputWrap}`}
              inputClass={styles.input}
              title_1="Longitude"
              title={'longitude'}
              value={marker?.lng}
              type="number"
            />
            <FormInput
              className={`gap-0 f-column ${styles.inputWrap}`}
              inputClass={styles.input}
              title_1="Latitude"
              title={'latitude'}
              type="number"
              value={marker?.lat}
            />
          </div>
        </div>
      </InputWrap>
    </div>
  );
}
