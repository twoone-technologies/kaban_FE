import { useState } from "react";
import Button from "~/components/reusable/Button";
import styles from "./hero.module.css";
import Svg from "../reusable/Svg";
import { searchIcon } from "~/assets";
import HeroFormItem from "./HeroFormItem";
import { Form } from "react-router-dom";

export default function HeroForm() {

  const [status, setStatus] = useState<'rent' | 'sale'>('rent')
  function handleStatus(status: 'rent' | 'sale') {
    setStatus(status);
  }

  return (
    <Form method="post" className={`b-radius f-width ${styles.form}`}>
      <div className={`flex f-width h-grey ${styles.btn_wrap}`}>
        <label className={`${styles.label}
          ${status === "rent" ? styles.rent : styles.sale}`}
          htmlFor="button">
        </label>
        <input type="hidden" name="status" value={status} />
        <Button onClick={() => handleStatus('rent')} type="button"
          className={`${styles.form_btn} 
          ${status === 'rent' ? styles.isActive : styles.notActive}`}>
          For Rent
        </Button>
        <Button onClick={() => handleStatus('sale')} type="button"
          className={`${styles.form_btn}
          ${status === 'sale' ? styles.isActive : styles.notActive}`}>
          For Sale
        </Button>
      </div>
      <div className={styles.location}>
        <label htmlFor="location"></label>
        <div className={`flex b-radius f-width ${styles.form_input}`}>
          <input type="text" placeholder="Location" name="location" maxLength={30} required 
          className={`flex b-radius f-width ${styles.input}`} />
          <Svg href={searchIcon} className={styles.svgIcon} width="17px" height="17px" />
        </div>
      </div>
      <HeroFormItem />
      <Button type="submit" className={styles.btn}>Search</Button>
    </Form>
  )
}
