import Form from "./Form";
import styles from "./hero.module.css";

export default function HeroSection() {
  return (
    <section className={`flex f-column ${styles.hero}`}>
      <p>Discover your customized fit with ease </p>
      <h1>Smartest way to scout real estate</h1>
      <Form />
    </section>
  )
}