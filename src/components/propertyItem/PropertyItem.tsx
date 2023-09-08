import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../reusable/Container';
import { dummyObj } from '../reusable/dummyObj';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import styles from './propertyItem.module.css';
import Svg from '../reusable/Svg';
import { arrowIcon, cameraIcon, heartIcon, shareIcon } from '~/assets/icons';

export default function PropertyItem() {
  const { id } = useParams();
  const listingItem = dummyObj.find((item) => parseInt(item.id) === Number(id));
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container element="section" className={styles.wrapper}>
      <div>
        <Swiper
          loop={false}
          spaceBetween={28}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          updateOnWindowResize={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          pagination={{ el: '.c-pagination', clickable: true }}
          navigation={{
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          breakpoints={{
            500: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            700: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            1180: {
              slidesPerView: 1,
              centeredSlides: true,
            },
          }}
          className="swiper_container"
        >
          {listingItem?.images.map((img) => (
            <SwiperSlide
              className={`carousel_item ${styles.carousel_img_wrap}`}
              key={img.id}
            >
              <img src={img.url} alt={img.id} className={styles.carousel_img} />
            </SwiperSlide>
          ))}
          <div className={`flex gap s-btw align-y carousel-btn-grp`}>
            <div className={`flex f-width s-btw ${styles.btn_grp}`}>
              <div
                className={`flex align-y btn-prev stack ${styles.carousel_btn}`}
              >
                <Svg
                  width="3.4rem"
                  height="1.3rem"
                  href={arrowIcon}
                />
              </div>
              <div
                className={`flex align-y btn-next stack ${styles.carousel_btn}`}
              >
                <Svg
                  width="3.4rem"
                  height="1.3rem"
                  href={arrowIcon}
                />
              </div>
            </div>
            <div className="flex gap c-pagination" />
          </div>
          <div className={`flex stack gap c-pad b-radius align-y ${styles.img_no}`}>
            <Svg href={cameraIcon} />
            <span>{activeIndex + 1}/{listingItem?.images.length}</span>
          </div>
        </Swiper>
        <div className='flex s-btw'>
          <Svg href={arrowIcon}/>
          <div className='flex gap'>
          <Svg href={heartIcon}/>
          <Svg href={shareIcon}/>
          </div>
        </div>
      </div>
    </Container>
  );
}
