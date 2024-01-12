import { useState } from "react";
import Button from "~/components/reusable/Button";
import styles from "./hero.module.css";
import { Form } from "react-router-dom";
import HeroFormItem from "~/components/herosection/HeroFormItem";

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
      <HeroFormItem />
      <Button type="submit" className={styles.btn}>Search</Button>
    </Form>
  )
}
