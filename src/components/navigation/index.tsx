import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logoIcon } from '~/assets/icons';
import Button from '~/components/reusable/Button';
import styles from './navigation.module.css';
import navbarData from './navbarData';
import Svg from '~/components/reusable/Svg';
import NavItem from './navitem';
import Container from '../reusable/Container';
import useInteractiveNav from '~/hooks/useInteractiveNav';
import ModalRegister from './register/ModalRegister';
import HamburgerMenu from './HamburgerMenu';
import NavBoard from './dashboardNav';
import UserItem from './user';
import { useAppSelector } from '~/api/hooks';
import { selectCurrentToken } from '~/api/slices/auth';
import useAuthUtils from '~/utils/functions/useAuthUtils';

type ErrorResProps =
  | { data: number; error?: undefined }
  | { error: string; data?: undefined };

function Navigation({ res }: { res: ErrorResProps }) {
  const navigate = useNavigate();
  const { addAuthToUrl, removeAuthFromUrl, authState } = useAuthUtils();
  const location = useLocation();
  const isLoggedIn = useAppSelector((state) => selectCurrentToken(state));
  const [dropDown, setDropDown] = useState(-1);
  const [tooltip, setToolTip] = useState(false);
  const { navBar, goingUp, open, setOpen } = useInteractiveNav();

  if (open === true || location.search.includes(`auth`))
    document.body.style.overflowY = 'hidden';
  else document.body.style.overflowY = '';

  const onClickHandler = () => {
    setOpen(!open);
  };

  const background =
    location.pathname === '/'
      ? `${navBar && `bg-tertiary`}`
      : `bg-tertiary ${styles.nav_btm}`;

  const linkColor =
    location.pathname === '/'
      ? `${navBar || open === true ? `bg-primary` : styles.logo}`
      : 'bg-primary';

  const txtColor = location.pathname === '/' ? navBar : true;

  return (
    <>
      {location.pathname.includes('dashboard') ? (
        <NavBoard />
      ) : (
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
          <HamburgerMenu onClick={onClickHandler} open={open} />
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
                handleClick={() =>
                  setDropDown((prev) => (prev === idx ? -1 : idx))
                }
                mouseOver={() =>
                  setDropDown((prev) => (prev === idx ? -1 : idx))
                }
                navState={txtColor}
              />
            ))}
            <ul className={`flex gap ${styles.reg}`}>
              {isLoggedIn ? (
                <li className={`flex gap align-y ${styles.loggedState}`}>
                  <Button
                    onClick={() => navigate('/dashboard/post')}
                    className={styles.post_btn}
                  >
                    Post a property
                  </Button>
                  <UserItem
                    drop={tooltip}
                    closeNav={setOpen}
                    mouseEnter={() => setToolTip(true)}
                    mouseLeave={() => setToolTip(false)}
                    handleClick={() => setToolTip(!tooltip)}
                  />
                </li>
              ) : (
                <Button
                  type="button"
                  className={styles.reg_btn}
                  onClick={() => {
                    setOpen(false);
                    addAuthToUrl('sign_in');
                  }}
                >
                  Register
                </Button>
              )}
            </ul>
          </ul>
        </Container>
      )}
      <ModalRegister
        error={res?.error}
        closeModal={() => {
          removeAuthFromUrl();
        }}
        signUpUrl={() => {
          addAuthToUrl('sign_up');
        }}
        signInUrl={() => {
          addAuthToUrl('sign_in');
        }}
        authState={authState}
      />
    </>
  );
}

export default Navigation;
