import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import styles from './map.module.css'

type MapProps = {
  location:  {
    address: string;
    lat: number;
    lng: number;
}
  zoomLevel: number;
};

export default function Map({ location, zoomLevel }: MapProps) {
  return (
    <div className={styles.map}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAT-hRk7tVNYvzXUjMPhZLkUtEm8wofOYs' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact> */}
    </div>
  );
}
