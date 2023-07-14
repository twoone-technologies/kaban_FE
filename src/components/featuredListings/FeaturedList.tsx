import Card from "../reusable/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Container from "../reusable/Container";
import { dummyObj } from "../reusable/dummyObj";
import styles from "./features.module.css";
import Svg from "../reusable/Svg";
import { arrowLeftIcon, arrowRightIcon, indicatorIcon } from "~/assets";

export default function FeaturedList() {
  console.log(dummyObj);
  return (
    <Container element="section" className={`c_pad ${styles.feature}`}>
      <h2>Explore Our Featured Listings</h2>
      <p>Properties considered worth your time by listing realtors</p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        spaceBetween={100}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        updateOnWindowResize={true}
        pagination={{el:'.c-pagination', clickable: true}}
        navigation={{
          nextEl: '.btn-next',
          prevEl: '.btn-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {dummyObj.map(item => (
          <SwiperSlide className="carousel_item" key={item.id}>
            <Card card={item} />
          </SwiperSlide>
        ))}
        <div className={`flex gap s-btw align-y ${styles.btn_grp}`}>
          <div className="flex gap">
            <Svg className="btn-prev" href={arrowLeftIcon} />
            <Svg className="btn-next" href={arrowRightIcon} />
          </div>
          <div className="flex gap c-pagination" />
        </div>
      </Swiper>
    </Container>
  )
}
