import { useState, useEffect } from "react"

type MediaSize = 'mobile' | 'desktop'

export default function useResponsiveNav({ onClick, onMouseEnter, onMouseLeave }:
  { onClick?: () => void, onMouseEnter?: () => void, onMouseLeave?: () => void }) {
  const [mediasize, setmediaSize] = useState<MediaSize>('mobile');

  useEffect(() => {
    function handleResize() {
      setmediaSize(window.innerWidth <= 768 ? 'mobile' : 'desktop');
    }
    handleResize();
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);
  return mediasize === 'mobile'
    ? { onClick, mediasize }
    : { onMouseEnter, onMouseLeave, mediasize };
}