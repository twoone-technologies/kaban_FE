import React, { useCallback } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import styles from './map.module.css';
import { dummyObj } from '../reusable/dummyObj';

type MapProps = {
  location?: {
    address: string;
    coordinates: [number, number];
  };
  idx?: string;
  zoomLevel?: number;
} & React.ComponentProps<'div'>;

export default function Map({ className, idx }: MapProps) {
  const { isLoaded, loadError } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAT-hRk7tVNYvzXUjMPhZLkUtEm8wofOYs',
  });

  const center = { lat: 5.020495237740932, lng: 7.925467457407156 };

  const onLoad = useCallback((map) => {
    const infoWindow = new window.google.maps.InfoWindow();

    if (window.location.pathname === `/property-item/${idx}`) {
      const listing = dummyObj.find((item) => parseInt(item.id) === Number(idx));

      if (listing?.location.coordinates) {
        const marker = new window.google.maps.Marker({
          position: {
            lat: listing.location.coordinates[0],
            lng: listing.location.coordinates[1],
          },
          map: map,
        });

        marker.addListener('click', () => {
          infoWindow.setPosition({
            lat: listing.location.coordinates[0],
            lng: listing.location.coordinates[1],
          });
          infoWindow.setContent(`
            <div>
              <h5>${listing.address}</h5>
              <small>${listing.title},</small>
              <small>${listing.property_type}</small>
            </div>
          `);
          infoWindow.open(map, marker);
        });

        const center = {
          lat: listing.location.coordinates[0],
          lng: listing.location.coordinates[1],
        };

        map.setCenter(center);
      }
    } else {
      const markers = dummyObj.map((markerData) => {
        const marker = new window.google.maps.Marker({
          position: {
            lat: markerData.location.coordinates[0],
            lng: markerData.location.coordinates[1],
          },
          map: map,
        });

        marker.addListener('click', () => {
          infoWindow.setPosition({
            lat: markerData.location.coordinates[0],
            lng: markerData.location.coordinates[1],
          });
          infoWindow.setContent(`
            <div>
              <h5>${markerData.address}</h5>
              <small>${markerData.title},</small>
              <small>${markerData.property_type}</small>
            </div>
          `);
          infoWindow.open(map, marker);
        });
      });

      if (dummyObj.length > 0) {
        let sumLat = 0;
        let sumLng = 0;

        dummyObj.forEach((markerData) => {
          sumLat += markerData.location.coordinates[0];
          sumLng += markerData.location.coordinates[1];
        });

        const avgLat = sumLat / dummyObj.length;
        const avgLng = sumLng / dummyObj.length;

        map.setCenter({ lat: avgLat, lng: avgLng });
      }
    }
  }, [idx]);

  if (loadError) {
    return <div>Error loading Google Maps: {loadError.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${styles.map}`}>
      <GoogleMap
        zoom={10}
        center={center}
        onLoad={onLoad}
        mapContainerClassName={`${styles.google_map} ${className}`}
      />
    </div>
  );
}
