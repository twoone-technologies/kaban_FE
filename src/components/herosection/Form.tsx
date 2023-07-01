import { useState } from "react";
import Button from "~/components/reusable/Button";
import styles from "./hero.module.css";
import Svg from "../reusable/Svg";
import { searchIcon } from "~/assets";
import FormItem from "./FormItem";

export default function Form() {
  const [status, setStatus] = useState<'rent' | 'sale'>('rent')
  function handleStatus(stat: 'rent' | 'sale') {
    setStatus(stat)
  }

  return (
    <form className={`b-radius f-width ${styles.form}`}>
      <div className={`flex f-width ${styles.btn_wrap}`}>
        <label className={`${styles.label}
          ${status === "rent" ? styles.rent : styles.sale}`}
          htmlFor="button">
        </label>
        <input type="hidden" name="status" value={status} />
        <Button onClick={() => handleStatus('rent')} type="button"
          className={`${styles.form_btn}`}>
          For Rent
        </Button>
        <Button onClick={() => handleStatus('sale')} type="button"
          className={`${styles.form_btn}`}>
          For Sale
        </Button>
      </div>
      <div>
        <label htmlFor="location"></label>
        <div className={`flex b-radius f-width ${styles.form_input}`}>
          <input type="text" placeholder="Location" name="Location" maxLength={30}
          required className={`flex b-radius f-width ${styles.input}`} />
          <Svg href={searchIcon} className={styles.svgIcon} width="17px" height="17px" />
        </div>
      </div>
      <FormItem />
      <Button type="submit" className={styles.btn}>Search</Button>
    </form>
  )
}
