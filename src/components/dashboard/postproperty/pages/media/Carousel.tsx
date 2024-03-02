import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Svg from '~/components/reusable/Svg';
import { coverStarIcon } from '~/assets/icons';
import { SwiperSlide } from 'swiper/react';
import { ImageFile } from '~/components/dashboard/postproperty/pages/media';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import CarouselWrap from '~/components/reusable/CarouselWrap';

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
        <CarouselWrap>
          {imageArr.map((image, id) => (
            <SwiperSlide className="carousel_item" key={id}>
              <div className={styles.imgWrap}>
                <img src={image.url} alt={image.name} className={`b-radius ${styles.img}`} />
                <span onClick={() => deleteImage(id)}
                  className="flex align-x align-y absolute bottom-2 left-6"
                >
                  {' '}&times;
                </span>
              </div>
            </SwiperSlide>
          ))}
        </CarouselWrap>
      ) : ('')}
    </div>
  );
}
