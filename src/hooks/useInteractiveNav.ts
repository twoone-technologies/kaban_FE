import { useState, useEffect } from "react";

export default function useInteractiveNav() {
  const [open, setOpen] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const [goingUp, setGoingUp] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const debounce = <F extends (...args: any[]) => void>(func: F, delay: number) => {
      let timeoutId: NodeJS.Timeout;
      return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
      };
    };

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

    const navStatus = debounce(() => {
      colorSwap();
      handleScroll();
    }, 25); // Adjust the delay as needed

    window.addEventListener("scroll", navStatus);
    return () => {
      window.removeEventListener("scroll", navStatus);
    };
  }, [goingUp, scroll]);

  return { navBar, goingUp, scroll, open, setOpen };
}
