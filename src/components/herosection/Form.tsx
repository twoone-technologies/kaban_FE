import Button from "~/components/reusable/Button";
import styles from "./hero.module.css";

export default function Form() {
  return (
    <form className={`b-radius f-width ${styles.form}`}>
      <div>
        <label htmlFor="name"></label>
        <input
          name="fullname"
          type="text"
          maxLength="30"
          className={`flex b-radius f-width ${styles.form_input}`}
          placeholder="Property Type"
          required
        />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input
          name="email"
          type="text"
          className={`flex b-radius f-width ${styles.form_input}`}
          maxLength="30"
          placeholder="All Cities"
          required
        />
      </div>
      <div>
        <label htmlFor="bedrooms"></label>
        <input
          name="bedrooms"
          type="text"
          className={`flex b-radius f-width ${styles.form_input}`}
          placeholder="Bedrooms"
          maxLength="500"
          required
        />
      </div>
      <div>
        <label htmlFor="max price"></label>
        <input
          name="max price"
          type="text"
          className={`flex b-radius f-width ${styles.form_input}`}
          placeholder="Max. price"
          maxLength="500"
          required
        />
      </div>
      <Button className={styles.btn}>Search</Button>
    </form>
  )
}
