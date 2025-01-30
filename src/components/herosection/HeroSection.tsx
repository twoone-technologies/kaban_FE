import styles from "./hero.module.css";
import HeroForm from "~/components/heroSection/HeroForm";
export default function HeroSection() {
  return (
    <section className={`flex f-column ${styles.hero}`}>
      <p>Discover your customized fit with ease </p>
      <h1 className="text-center">Smartest way to scout real estate</h1>
      <HeroForm />
    </section>
  )
}