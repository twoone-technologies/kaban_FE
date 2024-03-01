import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { arrowIcon } from '~/assets/icons';
import Svg from '~/components/reusable/Svg';
import { coverStarIcon } from '~/assets/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { ImageFile } from '~/components/dashboard/postproperty/pages/media';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';

type Props = {
  imageArr: ImageFile[];
  coverImage: ImageFile;
  deleteImage: (id: number) => void;
};

export default function Carousel({ imageArr, coverImage, deleteImage }: Props) {
  return (
    <div className={styles.imageWrapper}>
      {coverImage.url ? (
        <div className="relative">
          <img
            src={coverImage.url}
            alt={coverImage.name}
            className={styles.coverImg}
          />
          <Svg href={coverStarIcon}
            className={`absolute bottom-4 left-4 ${styles.starColor}`}
          />
        </div>
      ) : undefined}
      {imageArr.length > 0 ? (
        <Swiper
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
            600: {slidesPerView: 1, centeredSlides: true},
            700: {slidesPerView: 2, centeredSlides: false},
            1230: {slidesPerView: 3, centeredSlides: false},
          }}
          className="swiper_container"
        >
          {imageArr.map((image, id) => (
            <SwiperSlide className="carousel_item" key={id}>
              <div className={styles.imgWrap}>
                <img src={image.url} alt={image.name} className={styles.img} />
                <span onClick={() => deleteImage(id)}
                  className="flex align-x align-y absolute bottom-2 left-6"
                >
                  {' '}&times;
                </span>
              </div>
            </SwiperSlide>
          ))}
          <div className={`flex gap s-btw align-y carousel-btn-grp`}>
            <div className="flex carousel-nav gap">
              <div className={`carousel-btn flex align-y`}>
                <Svg className="btn-prev" href={arrowIcon} />
              </div>
              <div className={'carousel-btn flex align-y'}>
                <Svg className="btn-next" href={arrowIcon} />
              </div>
            </div>
            <div className="flex gap c-pagination" />
          </div>
        </Swiper>
      ) : ('')}
    </div>
  );
}
