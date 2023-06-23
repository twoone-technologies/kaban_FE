import { useState } from "react";
import { logoIcon } from "~/assets";
import Button from "../reusable/button/button";
import styles from "./navigation.module.css";
import NavItem from "./navitem/navitem";
import navbarData from "./data/navbarData";

function Navigation() {
  const [open, setopen] = useState(false);
  const [dropdown, setDropdown] = useState(-1);

  const onClickHandler = () => {
    setopen(!open);
    console.log(setopen(!open));
  };

  return (
    <nav className={`flex ${styles.nav}`}>
      <div>
        <img src={logoIcon} alt="logo" />
      </div>
      <Button
        type="button"
        onClick={onClickHandler}
        className={`flex f_column ${styles.hamburger_menu}`}
      >
        <span className={`${styles.line} ${open ? styles.tilt : styles.tilt_1}`}></span>
        <span className={`${styles.line} ${open ? styles.hide : ''}`}></span>
        <span className={`${styles.line} ${open ? styles.rtilt : styles.rtilt_1}`}></span>
      </Button>
      <ul className={`flex f_column ${styles.nav_content} ${open ? styles.open : styles.close}`}>
        {Object.entries(navbarData).map(([key, val], idx) => (
          <NavItem key={key} 
            title={key} 
            href={val.href} 
            subItems={val.subItems} 
            drop={dropdown === idx} 
            handleClick={() => setDropdown(prev => prev === idx ? -1 : idx)} />
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