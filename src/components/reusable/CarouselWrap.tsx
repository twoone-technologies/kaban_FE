import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ReactNode } from 'react';
import Svg from '../reusable/Svg';
import 'swiper/css/effect-coverflow';
import { Swiper } from 'swiper/react';
import { arrowIcon } from '~/assets/icons';
import { useLocation } from 'react-router';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function CarouselWrap({
  children,
  setActiveImg,
}: {
  children: ReactNode;
  setActiveImg?: React.Dispatch<React.SetStateAction<number>>;
}) {
  const location = useLocation();
  return (
    <Swiper
      onSlideChangeTransitionEnd={(swiper) => setActiveImg && setActiveImg(swiper.activeIndex)}
      grabCursor={true}
      slidesPerView={'auto'}
      loop={false}
      updateOnWindowResize={true}
      spaceBetween={28}
      pagination={{ el: '.c-pagination', clickable: true }}
      navigation={{
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      breakpoints={{
        500: {
          slidesPerView: 1,
          centeredSlides:
            location.pathname === '/dashboard/post' ? true : false,
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
      {children}
      <div className={`flex gap s-btw align-y carousel-btn-grp`}>
        <div className="flex carousel-nav gap">
          <div className="carousel-btn flex align-y">
            <Svg className="btn-prev" href={arrowIcon} />
          </div>
          <div className="carousel-btn flex align-y">
            <Svg className="btn-next" href={arrowIcon} />
          </div>
        </div>
        <div className="flex gap c-pagination" />
      </div>
    </Swiper>
  );
}
