import { useState, useEffect, useCallback } from 'react'

export default function useHeader() {
  const [category, setCategory] = useState('')
  const [stat, setStat] = useState('');
  const [city, setCity] = useState('')

    interface QueryObject {
      [key: string]: string;
    }

  const cityStatus = useCallback(() => {
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
    if (location.href.includes('?')) {
      cityStatus();
    }
  
    return () => {
      {category}
    }
  }, [category, cityStatus])

  return {category, cityStatus, city, stat}
}