import { cities } from "../data/cityCardData"
import Container from "../reusable/Container"
import CityCard from "./CityCard"
import style from "./exploreCities.module.css"

export default function ExploreCitiesSection() {
  return (
    <section className="section bg-grey">
      <Container element="div">
        <div className={style.grid_container}>
          <div className={`section-heading ${style.city_card_container}`}>
            <div className={style.section_title}>
              <h2 className="section_heading">Explore Cities</h2>
              <p>Have a look at listings located at some of the amazing cities in Nigeria.</p>
            </div>
          </div>
          {cities.map(city => (
            <CityCard key={city.name} city={city} />
          ))}
        </div>
      </Container>
    </section>
  )
}
