import { useEffect, useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { logoIcon } from '~/assets/icons';
import Button from '~/components/reusable/Button';
import styles from './navigation.module.css';
import navbarData from './navbarData';
import Svg from '~/components/reusable/Svg';
import NavItem from './navitem';
import Container from '../reusable/Container';
import useInteractiveNav from '~/hooks/useInteractiveNav';
import { SignInModal, SignUpModal } from './register/ModalRegister';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [login, setLogIn] = useState<'sign_in' | 'sign_up'>('sign_up');
  const [dropDown, setDropDown] = useState(-1);
  const { navBar, goingUp, open, setOpen } = useInteractiveNav();

  const onClickHandler = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setLogIn('sign_up');

    return () => {
      login;
    };
  }, [login]);

  const background =
    location.pathname === '/'
      ? `${navBar && `bg-tertiary`}`
      : `bg-tertiary ${styles.nav_btm}`;

  const linkColor =
    location.pathname === '/'
      ? `${navBar || open === true ? `bg-primary` : styles.logo}`
      : 'bg-primary';

  const menuBtn =
    location.pathname === '/'
      ? `${navBar || open ? styles.border : styles.border_1}`
      : styles.border;

  const menuBtn_1 =
    location.pathname === '/'
      ? `${navBar || open ? styles.hue_1 : styles.hue_2}`
      : styles.hue_1;

  const menuBtn_2 =
    location.pathname === '/'
      ? `${navBar || open ? styles.hue_1 : styles.hue_2}`
      : styles.hue_1;

  const menuBtn_3 =
    location.pathname === '/'
      ? `${navBar || open ? styles.hue_1 : styles.hue_2}`
      : styles.hue_1;

  const txtColor = location.pathname === '/' ? navBar : true;

  return (
    <Container
      element="nav"
      className={`flex f-width ${styles.nav}
      ${background} ${goingUp && styles.slideUp}`}
    >
      <Link to={'/'} onClick={() => setOpen(false)}>
        <Svg
          href={logoIcon}
          width="100px"
          height="40px"
          className={linkColor}
        />
      </Link>
      <Button
        type="button"
        title="menu"
        onClick={onClickHandler}
        className={`flex f-column 
          ${styles.hamburger_menu} ${menuBtn}`}
      >
        <span
          className={`${styles.line} 
          ${open && styles.tilt} ${menuBtn_1}`}
        />
        <span
          className={`${styles.line} ${menuBtn_2}
          ${open ? styles.hide : styles.see}`}
        />
        <span
          className={`${styles.line}
          ${open && styles.rtilt} ${menuBtn_3}`}
        />
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
            closeNav={setOpen}
            href={val.href}
            subItems={val.subItems}
            drop={dropDown === idx}
            handleClick={() => setDropDown((prev) => (prev === idx ? -1 : idx))}
            mouseOver={() => setDropDown((prev) => (prev === idx ? -1 : idx))}
            navState={txtColor}
          />
        ))}
        <li className={`flex ${styles.reg}`}>
          <Button
            type="submit"
            onClick={() => {
              setOpen(false);
              setLogIn('sign_in');
              navigate({ search: `?login=login/${login}` });
            }}
            className={styles.reg_btn}
          >
            Register
          </Button>
          <SignInModal 
            isVisible={location.search.split('=')[1] === `login/sign_in`}
            signUpUrl={() => {
              navigate({ search: `?login=login/sign_up`})
            }} />
          <SignUpModal 
            isVisible={location.search.split('=')[1] === `login/sign_up`} 
            signInUrl={() => {
              console.log('foo');
              navigate({ search: `?login=login/sign_in`});
            }} />
        </li>
      </ul>
    </Container>
  );
}

export default Navigation;
