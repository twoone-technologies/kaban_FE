import Card from "../reusable/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Container from "../reusable/Container";
import { dummyObj } from "../reusable/dummyObj";
import Svg from "../reusable/Svg";
import { arrowIcon} from "~/assets/icons";

export default function FeaturedList() {
  return (
    <section className="container-pad bg-grey">
      <Container element="div">
        <div className="text-align header">
          <h2>Explore Our Featured Listings</h2>
          <p>Properties considered worth your<br /> time by listing realtors</p>
        </div>
        <Swiper
          grabCursor={true}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={false}
          updateOnWindowResize={true}
          spaceBetween={28}
          pagination={{el:'.c-pagination', clickable: true}}
          navigation={{
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          breakpoints={{
            500: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            700: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            1180: {
              slidesPerView: 3,
              centeredSlides: false,
            },
          }}
          className="swiper_container"
        >
          {dummyObj.map(item => (
            <SwiperSlide className="carousel_item" key={item.id}>
              <Card card={item} />
            </SwiperSlide>
          ))}
          <div className={`flex gap s-btw align-y carousel-btn-grp`}>
            <div className="flex gap">
              <div className="carousel-btn flex align-y">
                <Svg className="btn-prev" href={arrowIcon} />
              </div>
              <div className={"carousel-btn flex align-y"}>
                <Svg className="btn-next" href={arrowIcon} />
              </div>
            </div>
            <div className="flex gap c-pagination" />
          </div>
        </Swiper>
      </Container>
    </section>
  )
}
