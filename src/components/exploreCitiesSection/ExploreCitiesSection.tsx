import { cities } from "../data/cityCardData"
import Container from "../reusable/Container"
import CityCard from "./CityCard"
import style from "./exploreCities.module.css"

export default function ExploreCitiesSection() {
  return (
    <section className="section bg-grey">
      <Container element="div">
        <div className={style.grid_container}>
          <div className={`flex f-column ${style.city_card_container}`}>
              <h2>Explore Cities</h2>
              <p>Have a look at listings located at some of the amazing cities in Nigeria.</p>
          </div>
          {cities.map(city => (
            <CityCard key={city.name} city={city} />
          ))}
        </div>
      </Container>
    </section>
  )
}
