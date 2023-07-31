import { arrowIcon } from "~/assets/icons";
import Svg from "../reusable/Svg";
import styles from "./hero.module.css";
import { property_type, roomAndPrice } from "./formData";
import OptGroup from "./Optgroup";

export default function HeroFormItem() {

  return (
    <>
      <div className={`flex b-radius f-width ${styles.form_input}`}>
        <label htmlFor='Property type'></label>
        <select name='propertyType' title="propertyType" 
          className={`flex b-radius f-width ${styles.input}`}>
          {Object.entries(property_type).map(([key, val], id) => (
            <OptGroup key={id} header={key} subItems={val.subItems} />
          ))}
        </select>
        <Svg href={arrowIcon} className={`${styles.rotate} ${styles.svgIcon}`} />
      </div >
      {Object.entries(roomAndPrice).map(([key, val]) => (
        <div key={key} className={`flex b-radius f-width ${styles.form_input}`}>
          <label htmlFor={key}></label>
          <select name={key} title={key} className={`flex b-radius f-width ${styles.input}`}>
            {val.map(item => (
              <option key={item.type} value={item.value}>{item.type}</option>
            ))}
          </select>
          <Svg href={arrowIcon} className={`${styles.rotate} ${styles.svgIcon}`} />
        </div>
      ))}
    </>
  )
}
