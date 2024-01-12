import { useState } from "react";
import Button from "~/components/reusable/Button";
import styles from "./navigation.module.css";
import NavItem from "~/components/navigation/navitem";
import navbarData from "~/components/navigation/navbarData";
import Svg from "~/components/reusable/Svg";
import { logoIcon } from "~/assets/icons";

function Navigation() {
  const [open, setopen] = useState(false);
  const [dropdown, setDropdown] = useState(-1);

  const onClickHandler = () => {
    setopen(!open);
  };

  return (
    <nav className={`flex f-width ${styles.nav}`}>
      <Svg href={logoIcon} width="100px" height="40px" className={styles.logo}/>
      <Button
        type="button"
        onClick={onClickHandler}
        className={`flex f-column ${styles.hamburger_menu} ${open ? styles.border : styles.border_1}`}
      >
        <span className={`${styles.line} ${open ? styles.tilt : styles.tilt_1}`}></span>
        <span className={`${styles.line} ${open ? styles.hide : styles.see}`}></span>
        <span className={`${styles.line} ${open ? styles.rtilt : styles.rtilt_1}`}></span>
      </Button>
      <ul className={`flex ${styles.nav_content} ${open ? styles.open : styles.close}`}>
        {Object.entries(navbarData).map(([key, val], idx) => (
          <NavItem key={key} 
            title={key} 
            href={val.href} 
            subItems={val.subItems} 
            drop={dropdown === idx} 
            handleClick={() => setDropdown(prev => prev === idx ? -1 : idx)}
            mouseOver={() => setDropdown(prev => prev === idx ? -1 : idx)} />
        ))}
        <li className={`flex ${styles.reg}`}>
          <Button type="submit"
            className={styles.reg_btn}>
            Register
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;