import { useState, useEffect } from "react"

export default function useInteractiveNav() {
  const [open, setOpen] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const [goingUp, setGoingUp] = useState(false);
  const [scroll, setScroll] = useState(0);

  if (open) document.body.style.overflowY = 'hidden'
  else document.body.style.overflowY = ''

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
  }, [goingUp, scroll, open]);

  return {navBar, goingUp, scroll, open, setOpen}
}