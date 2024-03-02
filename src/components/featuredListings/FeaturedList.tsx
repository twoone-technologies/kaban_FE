import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SwiperSlide } from "swiper/react";
import Container from "../reusable/Container";
import { dummyObj } from "../reusable/dummyObj";
import CarouselWrap from "../reusable/CarouselWrap";
import Card, { HouseCard } from "../reusable/card/Card";

export default function FeaturedList() {
  const arr = dummyObj as HouseCard[]
  return (
    <section className="container-pad bg-grey">
      <Container element="div">
        <div className="text-align header">
          <h2>Explore Our Featured Listings</h2>
          <p>Properties considered worth your<br /> time by listing realtors</p>
        </div>
        <CarouselWrap>
          {arr.map((item) => (
            <SwiperSlide className="carousel_item" key={item.id}>
              <Card card={item} />
            </SwiperSlide>
          ))}
        </CarouselWrap>
      </Container>
    </section>
  )
}
