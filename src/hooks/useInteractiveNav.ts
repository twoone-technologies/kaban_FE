import { useState, useEffect } from "react"

export default function useInteractiveNav() {
  const [navBar, setNavBar] = useState(false);
  const [goingUp, setGoingUp] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (scroll < currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      if (scroll > currentScrollY && goingUp) {
        setGoingUp(false);
      }
      setScroll(currentScrollY);
    };

    const colorSwap = () => {
      window.scrollY >= 70 ? setNavBar(true) : setNavBar(false);
    };

    const navStatus = () => {
      colorSwap();
      handleScroll();
    };

    return () => {
      window.addEventListener('scroll', navStatus);
    };
  }, [goingUp, scroll]);

  return {navBar, goingUp, scroll}
}