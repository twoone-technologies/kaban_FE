import { useEffect } from 'react';
import { useLoadScript, Libraries } from '@react-google-maps/api';

interface UseGoogleApiOptions {
  onLoad?: () => void | undefined; // New onLoad callback prop
}

// interface UseGoogleApiResult {
//   isLoaded: boolean;
//   loadError: Error | undefined;
// }

const API_KEY = import.meta.env.VITE_API_KEY || '';
const libraries: Libraries = ["places"];

export default function useGoogleApi({ onLoad }: UseGoogleApiOptions) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries: libraries,
  });

  // Call onLoad callback when Google Maps API is loaded
  useEffect(() => {
    if (isLoaded && !loadError && onLoad) {
      onLoad();
    }
  }, [isLoaded, loadError, onLoad]);

  return { isLoaded, loadError }
}
