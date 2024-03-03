import { cities } from "../data/cityCardData"
import { SwiperSlide } from 'swiper/react';
import Container from "../reusable/Container"
import CityCard from "./CityCard"
import style from "./exploreCities.module.css"
import useResponsiveNav from '~/hooks/useResponsiveNav';
import CarouselWrap from "../reusable/CarouselWrap";

export default function ExploreCitiesSection() {  
  const { mediaSize } = useResponsiveNav({});
  return (
    <section className="section bg-grey">
      <Container element="div">
        {mediaSize === 'mobile' ? (
          <div>
            <div className={`flex f-column ${style.city_card_container}`}>
              <h2>Explore Cities</h2>
              <p>Have a look at listings located at some of the amazing cities in Nigeria.</p>
            </div>
            <CarouselWrap>
              {cities.map(city => (
                <SwiperSlide key={city.name}>
                  <CityCard city={city} />
                </SwiperSlide>
              ))}
            </CarouselWrap>
          </div>
        ) : (
        <div className={style.grid_container}>
          <div className={`flex f-column ${style.city_card_container}`}>
              <h2>Explore Cities</h2>
              <p>Have a look at listings located at some of the amazing cities in Nigeria.</p>
          </div>
          {cities.map(city => (
            <CityCard key={city.name} city={city} />
          ))}
        </div>
        )}
      </Container>
    </section>
  )
}
