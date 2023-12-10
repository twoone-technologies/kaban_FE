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
import { SignInModal, SignUpModal } from './register/ModalRegister';
import HamburgerMenu from './HamburgerMenu';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropDown, setDropDown] = useState(-1);
  const [user] = useState(JSON.parse(localStorage.getItem('user') ?? ''));
  const [login, setLogIn] = useState<'sign_in' | 'sign_up'>('sign_up');
  const { navBar, goingUp, open, setOpen } = useInteractiveNav();

  const onClickHandler = () => {
    setOpen(!open);
  };

  // useEffect(() => {
  //   if (user) {
  //     console.log(user);
  //     setUser(user);
  //   }

  //   setLogIn('sign_up');

  //   return () => {
  //     login;
  //   };
  // }, [login, user]);

  // const fName = user[0]?.fullName?.split(' ')[0]?.split('')[0];
  // const lName = user[0]?.fullName?.split(' ')[1]?.split('')[0];
  // const fullName = user[0]?.fullName;
  // const email = user[1]?.email;
  // console.log({ fName, lName, fullName, email });

  const background =
    location.pathname === '/'
      ? `${navBar && `bg-tertiary`}`
      : `bg-tertiary ${styles.nav_btm}`;

  const linkColor =
    location.pathname === '/'
      ? `${navBar || open === true ? `bg-primary` : styles.logo}`
      : 'bg-primary';

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
      <HamburgerMenu onClick={onClickHandler}
        open={open} line_1={menuBtn_1}
        line_2={menuBtn_2} line_3={menuBtn_3}
      />
      <ul
        className={`flex ${styles.nav_content} ${open ? styles.open : styles.close
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
        <ul className={`flex gap ${styles.reg}`}>
          {user ? (
            <li className={`flex gap align-y ${styles.loggedState}`}>
              <Button className={styles.post_btn}>Post a property</Button>
              {/* <UserItem
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
              /> */}
            </li>
          ) : (
            <Button
              type="submit"
              className={styles.reg_btn}
              onClick={() => {
                setOpen(false);
                setLogIn('sign_in');
                navigate({ search: `?auth=${login}` });
              }}
            >
              Register
            </Button>
          )}
          <SignInModal
            isVisible={location.search.split('=')[1] === `sign_in`}
            signUpUrl={() => {
              navigate({ search: `?auth=sign_up` });
            }}
          />
          <SignUpModal
            isVisible={location.search.split('=')[1] === `sign_up`}
            signInUrl={() => {
              navigate({ search: `?auth=sign_in` });
            }}
          />
        </ul>
      </ul>
    </Container>
  );
}

export default Navigation;
