import { Link } from "react-router-dom";
import logo from "../../../../assets/h.s/Logo.svg";
import Button from "../reusable/button";
import styles from "./navigation.module.css";
import { useState } from "react";
import arrow from "../../../../assets/h.s/arrow.svg";
//type Props = {}

function Navigation() {
  const [open, setopen] = useState(false);
  const onClickHandler = () => {
    setopen(!open);
  };

  return (
    <div>
      <div>
        <img src={logo} alt="logo" />
        <span>Kaban</span>
      </div>
      <Button
        onClick={onClickHandler}
        className={`flex ${styles.hamburger_menu}`}
        >
          <span className={`${styles.line} ${open ? styles.tilt : styles.tilt_1}`}></span>
          <span className={`${styles.line} ${open ? styles.hide : ''}`}></span>
          <span className={`${styles.line} ${open ? styles.rtilt : styles.rtilt_1}`}></span>
      </Button>
      <ul className={`flex ${styles.nav_content} ${open ? styles.open : styles.close}`}>
        <li className="flex"><a href="">Property</a><img src={arrow} alt="arrow" /></li>
        <li className="flex"><Link to="">Realtors</Link><img src={arrow} alt="arrow" /></li>
        <li className="flex"><Link to="">Company</Link><img src={arrow} alt="arrow" /></li>
        <li className="flex"><Link to="">Blog</Link></li>
        <li className={`flex ${styles.reg}`}><Button className={styles.reg_btn}>Register</Button></li>
      </ul>
    </div>
  )
}

export default Navigation;