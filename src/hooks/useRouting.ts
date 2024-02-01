import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function useRouting() {
  const location = useLocation();
  
  useEffect(() => {
    console.log(location.hash);
    const idFromHash = location.hash.substring(1);
    if (idFromHash) {
      const element = document.getElementById(`card-${idFromHash}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll to top if no hash is provided
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
}