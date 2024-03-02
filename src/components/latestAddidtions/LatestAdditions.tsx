import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import { SwiperSlide } from "swiper/react";
import Container from "../reusable/Container";
import { dummyObj } from "../reusable/dummyObj";
import CarouselWrap from "../reusable/CarouselWrap";
import Card, { HouseCard } from "../reusable/card/Card";

export default function LatestAdditions() {
  const arr = dummyObj as HouseCard[]
  return (
    <section className="container-pad">
    <Container element="div">
      <div className="text-align header">
        <h2>Tour our Latest Additions </h2>
        <p>Experience the newest and most recent listings first hand by taking a captivating <br /> tour of our latest additions as they are being published live by realtors.</p>
      </div>
      <CarouselWrap>
        {arr.map(item => (
          <SwiperSlide className="carousel_item" key={item.id}>
            <Card card={item} />
          </SwiperSlide>
        ))}
      </CarouselWrap>
    </Container>
  </section>
  )
}