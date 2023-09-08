import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logoIcon } from '~/assets/icons';
import Button from '~/components/reusable/Button';
import styles from './navigation.module.css';
import navbarData from './navbarData';
import Svg from '~/components/reusable/Svg';
import NavItem from './navitem';
import Container from '../reusable/Container';

function Navigation() {
  const [open, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(-1);
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

  const onClickHandler = () => {
    setOpen(!open);
  };

  const location = useLocation();
  let content;

  location.pathname === '/'
    ? (content = (
        <Container element='nav'
          className={`flex f-width ${styles.nav} ${navBar ? `bg-tertiary` : ''}
      ${goingUp ? styles.hide : styles.see}`}
        >
          <Link to={'/'}>
            <Svg
              href={logoIcon}
              width="100px"
              height="40px"
              className={`${navBar ? `bg-primary` : styles.logo}`}
            />
          </Link>
          <Button
            type="button"
            title="menu"
            onClick={onClickHandler}
            className={`flex f-column ${styles.hamburger_menu}
        ${open || navBar ? styles.border : styles.border_1}`}
          >
            <span
              className={`${styles.line} ${open ? styles.tilt : ''} 
        ${navBar || open ? styles.hue_1 : styles.hue_2}`}
            ></span>
            <span
              className={`${styles.line} ${open ? styles.hide : styles.see} 
        ${navBar || open ? styles.hue_1 : styles.hue_2}`}
            ></span>
            <span
              className={`${styles.line} ${open ? styles.rtilt : ''} 
        ${navBar || open ? styles.hue_1 : styles.hue_2}`}
            ></span>
          </Button>
          <ul
            className={`flex ${styles.nav_content} ${
              open ? styles.open : styles.close
            }`}
          >
            {Object.entries(navbarData).map(([key, val], idx) => (
              <NavItem
                key={key}
                title={key}
                href={val.href}
                subItems={val.subItems}
                drop={dropDown === idx}
                handleClick={() =>
                  setDropDown((prev) => (prev === idx ? -1 : idx))
                }
                mouseOver={() =>
                  setDropDown((prev) => (prev === idx ? -1 : idx))
                }
                navState={navBar}
              />
            ))}
            <li className={`flex ${styles.reg}`}>
              <Button type="submit" className={styles.reg_btn}>
                Register
              </Button>
            </li>
          </ul>
        </Container>
      ))
    : (content = (
        <Container element='nav'
          className={`flex f-width bg-tertiary ${styles.nav}
      ${goingUp ? styles.hide : styles.see}`}
        >
          <Link to={'/'}>
            <Svg
              href={logoIcon}
              width="100px"
              height="40px"
              className="bg-primary"
            />
          </Link>
          <Button
            type="button"
            title="menu"
            onClick={onClickHandler}
            className={`flex f-column ${styles.hamburger_menu} ${styles.border}`}
          >
            <span
              className={`${styles.line} ${open ? styles.tilt : ''} ${
                styles.hue_1
              }`}
            ></span>
            <span
              className={`${styles.line} ${open ? styles.hide : styles.see} ${
                styles.hue_1
              }`}
            ></span>
            <span
              className={`${styles.line} ${open ? styles.rtilt : ''} ${
                styles.hue_1
              }`}
            ></span>
          </Button>
          <ul
            className={`flex ${styles.nav_content} ${
              open ? styles.open : styles.close
            }`}
          >
            {Object.entries(navbarData).map(([key, val], idx) => (
              <NavItem
                key={key}
                title={key}
                href={val.href}
                subItems={val.subItems}
                drop={dropDown === idx}
                handleClick={() =>
                  setDropDown((prev) => (prev === idx ? -1 : idx))
                }
                mouseOver={() =>
                  setDropDown((prev) => (prev === idx ? -1 : idx))
                }
                navState={true}
              />
            ))}
            <li className={`flex ${styles.reg}`}>
              <Button type="submit" className={styles.reg_btn}>
                Register
              </Button>
            </li>
          </ul>
        </Container>
      ));

  return <>{content}</>;
}

export default Navigation;
