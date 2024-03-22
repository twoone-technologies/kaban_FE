import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { SwiperSlide } from 'swiper/react';
import Svg from '~/components/reusable/Svg';
import { coverStarIcon } from '~/assets/icons';
import CarouselWrap from '~/components/reusable/CarouselWrap';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import { ImageFile } from '~/hooks/useImageUpload';

type Props = {
  imageArr: ImageFile[];
  coverImage: ImageFile[];
  deleteImage: (id?: number) => void;
  setActiveImg?: React.Dispatch<React.SetStateAction<number>>;
};

export default function Carousel({
  imageArr,
  coverImage,
  deleteImage,
  setActiveImg,
}: Props) {
  return (
    <div>
      {coverImage || imageArr.length > 0 ? (
        <CarouselWrap setActiveImg={setActiveImg}>
          {coverImage[0]?.url ? (
            <SwiperSlide className="relative">
              <img
                src={coverImage[0].url}
                alt={coverImage[0].name}
                className={`b-radius ${styles.img}`}
              />
              <div
                className={`absolute bottom-2 flex s-btw w-full`}
              >
                <b className={styles.starColor}><Svg href={coverStarIcon} /></b>
                <span
                  className={`flex w-8 align-x align-y ${styles.starColor}`}
                  onClick={() => deleteImage()}
                >
                  {' '}
                  &times;
                </span>
              </div>
            </SwiperSlide>
          ) : undefined}
          {imageArr.map((image, id) => (
            <SwiperSlide className="carousel_item" key={id}>
              <div className={styles.imgWrap}>
                <img
                  src={image.url}
                  alt={image.name}
                  className={`b-radius ${styles.img}`}
                />
                <span
                  className="flex align-x align-y absolute bottom-2 left-6"
                  onClick={() => deleteImage(id)}
                >
                  {' '}
                  &times;
                </span>
              </div>
            </SwiperSlide>
          ))}
        </CarouselWrap>
      ) : (
        ''
      )}
    </div>
  );
}
