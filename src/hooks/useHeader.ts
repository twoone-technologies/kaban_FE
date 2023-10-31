import { useState, useEffect, useCallback } from 'react'

export default function useHeader() {
  const [category, setCategory] = useState('')
  const [stat, setStat] = useState('');
  const [city, setCity] = useState('')

  interface QueryObject {
    [key: string]: string;
  }

  const cityStatus = useCallback(() => {
    if (location.pathname === '/cities/:cityName' && location.href.includes('location')) {
      const url = new URL(location.href);
      const urlParams = new URLSearchParams(document.location.search)
      
      const currCity = urlParams.get("location");

      const new_params = new URLSearchParams([
        ...Array.from(url.searchParams.entries()),
      ]).toString();

      const new_url = `${url.origin}/cities/${currCity}?${new_params}`;
      window.history.pushState({ path: new_url }, '', new_url)
    }
    if (location.href.indexOf('?') === -1) {
      console.log('goat');
      console.log(location.href.split('/'));
      const key = location.href.split('/')[4];
      setCity(key.replace('%20', ' ') ?? '');
    }
    else if(location.pathname !== '/cities/:cityName') {console.log('piggy');
      const keyValuePairs: string[] = location.href.split('?')[1].split('&');
      const resultArray: QueryObject[] = [];
      
      keyValuePairs.forEach((keyValue: string) => {
        const [key, value] = keyValue.split('=');
        if (key) resultArray.push({ [key]: value || '' });
      });
      
      const locationItem = resultArray.find((item) => item.location);
      setCity(locationItem?.location?.replace('%20', ' ') ?? '');
      const statusItem = resultArray.find((item) => item.status);
      setStat(statusItem?.status ?? '');
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/commercial') {
      setCategory('Commercial')
    }
    if (location.pathname === '/industrial') {
      setCategory('Industrial')
    }
    if (location.pathname === '/residential') {
      setCategory('Residential')
    }
    cityStatus();

    return () => {
      { category }
    }
  }, [category, cityStatus])

  return { category, cityStatus, city, stat }
}