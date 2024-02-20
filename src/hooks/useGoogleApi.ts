import { useEffect } from 'react';
import { useLoadScript, Libraries } from '@react-google-maps/api';

interface UseGoogleApiOptions {
  apiKey: string;
  libraries: Libraries;
  onLoad?: () => void; // New onLoad callback prop
}

interface UseGoogleApiResult {
  isLoaded: boolean;
  loadError: Error | undefined;
}

export default function useGoogleApi({ apiKey, libraries, onLoad }: UseGoogleApiOptions): UseGoogleApiResult {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
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
