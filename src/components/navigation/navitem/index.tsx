import { useState } from "react";
import { arrowIcon } from "~/assets/icons";
import styles from "./navitem.module.css"
import Svg from "~/components/reusable/Svg";
import { Link } from "react-router-dom";
import useResponsiveNav from "~/hooks/useResponsiveNav";

type Props = {
  title: string,
  href?: string;
  subItems?: {
    icon: string;
    name: string;
    path: string;
  }[];
  navState: boolean;
  drop: boolean;
  handleClick: () => void;
  mouseOver: () => void;
}

const NavItem = ({ title, href, subItems, navState, drop, handleClick, mouseOver }: Props) => {
  const [hover, sethover] = useState(-1);
  const navStateHandler = useResponsiveNav({
    onClick: handleClick,
    onMouseEnter: mouseOver,
    onMouseLeave: mouseOver,
  });

  return (
    href ? <Link className={`flex f-column blog ${navState ? styles.txt_color_2 : styles.txt_color} ${styles.nav_item}`} to={href}>{title}</Link>
    : <li className={`flex f-column ${styles.nav_item}`} {...navStateHandler}>
        <div className={`flex ${styles.nav_item_ul}`}>
          <span
            className={`${navState ? styles.txt_color_2 : styles.txt_color}
            ${drop ? styles.set_color : styles.exit_color}`}
          >
            {title}
          </span>
          <Svg className={`${styles.arrow_Icon} 
            ${drop ? styles.rotate90 : styles.rotate0}`} 
            href={arrowIcon} />
        </div>
        <div className={styles.overlay}>
          <div className={`flex f-column b-radius ${styles.drop_down}
            ${drop ? styles.open_link : styles.close_link}`}>
            {subItems?.map((item, id) => (
              <Link to={item.path} key={id}
                onMouseEnter={() => sethover(id)} onMouseLeave={() => sethover(-1)}
                className={`flex pad b-radius ${styles.nav_item_link}`}>
                {hover === id && drop ?
                  <Svg href={`${item.icon}`} className={`${drop ? styles.blue : styles.ash}`} /> :
                  <Svg href={`${item.icon}`} className={`${drop ? styles.ash : styles.ash}`} />}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </li>
  )
}

export default NavItem;