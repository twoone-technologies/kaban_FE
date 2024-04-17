import { useState } from 'react';
import {
  Link,
  useActionData,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { logoIcon } from '~/assets/icons';
import Button from '~/components/reusable/Button';
import styles from './navigation.module.css';
import navbarData, { userData } from './navbarData';
import Svg from '~/components/reusable/Svg';
import NavItem from './navitem';
import Container from '../reusable/Container';
import useInteractiveNav from '~/hooks/useInteractiveNav';
import { SignInModal, SignUpModal } from './register/ModalRegister';
import HamburgerMenu from './HamburgerMenu';
import NavBoard from './dashboardNav';
import UserItem from './user';
import Tooltip from '../reusable/Tooltip';
// import { useAppSelector } from '~/api/hooks';

type UserData = {
  fullName: string;
  email: string;
};

function Navigation() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const alert = useActionData() as unknown as boolean;
  const location = useLocation();
  // const authState = useAppSelector((state) => state.auth);
  const [dropDown, setDropDown] = useState(-1);
  const [tooltip, setToolTip] = useState(false);
  const [user, _] = useState<UserData | null>(null);
  const [login, setLogIn] = useState<'sign_in' | 'sign_up'>('sign_up');
  const { navBar, goingUp, open, setOpen } = useInteractiveNav();

  if (open === true) document.body.style.overflowY = 'hidden';
  else document.body.style.overflowY = '';

  const onClickHandler = () => {
    setOpen(!open);
  };

  const fName = user && user?.fullName?.split(' ')[0]?.split('')[0];
  const lName = user && user?.fullName?.split(' ')[1]?.split('')[0];
  const fullName = user && user?.fullName;
  const email = user && user?.email;
  console.log({ fName, lName, fullName, email });

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
              {user !== null ? (
                <li className={`flex gap align-y ${styles.loggedState}`}>
                  <Button
                    onClick={() => navigate('/dashboard/post')}
                    className={styles.post_btn}
                  >
                    Post a property
                  </Button>
                  <UserItem
                    className={styles.toggleUser}
                    closeNav={setOpen}
                    firstLetter={fName}
                    lastLetter={lName}
                    drop={tooltip}
                    email={email}
                    subItems={userData}
                    handleClick={() => setToolTip(!tooltip)}
                    mouseOver={() => setToolTip(!tooltip)}
                    verified={true}
                    agentName={fullName}
                  />
                </li>
              ) : (
                <Button
                  type="submit"
                  className={styles.reg_btn}
                  onClick={() => {
                    setOpen(false);
                    setLogIn('sign_in');
                    setSearchParams((prev) => {
                      prev.append('auth', login);
                      return prev;
                    });
                  }}
                >
                  Register
                </Button>
              )}
              <SignInModal
                closeModal={() =>
                  setSearchParams((prev) => {
                    const params = new URLSearchParams(prev);
                    params.delete('auth');
                    return params;
                  })
                }
                isVisible={searchParams.get('auth') === `sign_in`}
                signUpUrl={() => {
                  setSearchParams((prev) => {
                    const params = new URLSearchParams(prev);
                    params.set('auth', 'sign_up');
                    return params;
                  });
                }}
              />
              <SignUpModal
                closeModal={() => searchParams.delete('auth')}
                isVisible={searchParams.get('auth') === `sign_up`}
                signInUrl={() => {
                  setSearchParams((prev) => {
                    const params = new URLSearchParams(prev);
                    params.set('auth', 'sign_in');
                    return params;
                  });
                }}
              />
              <Tooltip
                popOver={alert}
                // className={styles.tooltip}
                text={'Welcome '}
                // close={() => setToolTip(false)}
              />
            </ul>
          </ul>
        </Container>
      )}
    </>
  );
}

export default Navigation;
