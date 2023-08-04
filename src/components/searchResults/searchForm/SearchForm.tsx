import Button from "~/components/reusable/Button";
import styles from "./searchForm.module.css";
import { arrowIcon, searchIcon } from "~/assets/icons";
import { Form } from "react-router-dom";
import Svg from "~/components/reusable/Svg";
import HeroFormItem from "~/components/herosection/HeroFormItem";
import OptGroup from "~/components/herosection/Optgroup";
import { statusArr } from "./status";

export default function SearchForm() {
  return (
    <Form method="post" className={`b-radius f-width ${styles.form}`}>
      <div className={styles.location}>
        <label htmlFor="location"></label>
        <div className={`flex b-radius f-width ${styles.form_input}`}>
          <input type="text" placeholder="Location" name="location" maxLength={30} required 
          className={`flex b-radius f-width ${styles.input}`} />
          <Svg href={searchIcon} className={styles.svgIcon} width="17px" height="17px" />
        </div>
      </div>
      <div>
        <label htmlFor="status"></label>
        <div className={`flex b-radius f-width ${styles.form_input}`}>
        <select name='propertyType' title="propertyType" 
          className={`flex b-radius f-width ${styles.input}`}>
            <OptGroup header={'status'} subItems={statusArr} />
        </select>
        <Svg href={arrowIcon} className={`${styles.rotate} ${styles.svgIcon}`} />
        </div>
      </div>
      <HeroFormItem />
      <Button type="submit" className={styles.btn}>Search</Button>
    </Form>
  )
}
