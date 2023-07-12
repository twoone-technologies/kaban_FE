import PropertyTypeCard from './PropertyTypeCard'
import style from "./property.module.css"
export default function PropertyTypeSection() {
  return (
    <section className={`flex ${style.section}`}>
      <div className={`${style.section_heading}`}>
        <h1>Property Types</h1>
        <p>Explore properties listings nationwide under this categories</p>
      </div>
      <PropertyTypeCard />
    </section>
  )
}
