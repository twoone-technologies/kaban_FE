import { useState } from "react";
import { arrowIcon } from "~/assets";
import styles from "./navitem.module.css"
import Svg from "~/components/reusable/svg/svg";
import { Link } from "react-router-dom";

type Props = {
  title: string,
  href?: string;
  subItems?: {
    icon: string;
    name: string;
  }[];
  drop: boolean;
  handleClick: () => void;
}

const NavItem = ({ title, href, subItems, drop, handleClick }: Props) => {
  const [hover, sethover] = useState(-1);

  const onItemClickHandler = () => {
    handleClick();
  }

  return (href
    ? <li className={`${styles.nav_item}`}><a href={href}>{title}</a></li>
    : <li className={`flex f_column ${styles.nav_item}`} onClick={onItemClickHandler}>
      <div className={`flex ${styles.nav_item_ul}`}>
        <span
          className={`${drop ? styles.set_color : styles.exit_color}`}
        >
          {title}
        </span>
        <img
          className={`${drop ? styles.rotate90 : styles.rotate0}`} src={arrowIcon} alt="arrowIcon" />
      </div>
      <ul className={`flex f_column ${styles.drop_down} ${drop ? styles.open_link : styles.close_link}`}>
        {subItems?.map((item, id) => (
          <li key={id} onMouseEnter={() => sethover(id)} onMouseLeave={() => sethover(-1)}
            className={`flex pad b-radius ${styles.nav_item_link}`}>
            {hover === id && drop ?
              <Svg href={`${item.icon}`} className={`${drop ? styles.blue : styles.ash}`} /> :
              <Svg href={`${item.icon}`} className={`${drop ? styles.ash : styles.ash}`} />}
            <Link to={'#'}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default NavItem;