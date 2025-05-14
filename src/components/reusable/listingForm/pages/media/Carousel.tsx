import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { SwiperSlide } from 'swiper/react';
import Svg from '~/components/reusable/Svg';
import { coverStarIcon, fileUploadIcon } from '~/assets/icons';
import CarouselWrap from '~/components/reusable/CarouselWrap';
import styles from '~/components/reusable/listingForm/pages/miscellenous/listingForm.module.css';
import { ImageFile } from '~/hooks/useFileUpload';
import React from 'react';
import { Listing } from '~/utils/types/listing.types';

type Props = {
  imageArr: ImageFile[];
  listing?: Listing;
  coverImage?: ImageFile[];
  setCoverImg?: React.Dispatch<React.SetStateAction<ImageFile[]>>;
  setListingImg: React.Dispatch<React.SetStateAction<ImageFile[]>>;
  setActiveImg?: React.Dispatch<React.SetStateAction<number>>;
  deleteImage: (
    setImgArr: React.Dispatch<React.SetStateAction<ImageFile[]>>,
    id?: number,
  ) => void;
};

export default function Carousel({
  setListingImg,
  setCoverImg,
  imageArr,
  listing,
  coverImage,
  deleteImage,
  setActiveImg,
}: Props) {
  console.log(coverImage?.length, imageArr.length, listing) ;
  return (
    <div className={`border ${coverImage?.length === 0 && imageArr.length === 0 && listing === undefined ? 'h-0 border-none' : ''}`}>
      {coverImage || imageArr.length > 0 || listing ? (
        <CarouselWrap setActiveImg={setActiveImg}>
          {(coverImage && coverImage[0]?.url) || listing?.cover_image ? (
            <SwiperSlide className="relative">
              <img
                src={(coverImage && coverImage[0]?.url) || listing?.cover_image}
                alt={(coverImage && coverImage[0]?.name) || listing?.cover_image}
                className={`b-radius ${styles.img}`}
              />
              <div className={`absolute bottom-2 flex s-btw w-full`}>
                <b className={styles.starColor}>
                  <Svg href={coverStarIcon} />
                </b>
                <span
                  className={`flex w-8 align-x align-y ${styles.starColor}`}
                  onClick={() => setCoverImg && setCoverImg([])}
                >
                  {' '}
                  &times;
                </span>
              </div>
            </SwiperSlide>
          ) : undefined}
          {listing && listing.images.map((image, id) => (
            <SwiperSlide className="carousel_item" key={id}>
              <div className={styles.imgWrap}>
                <img
                  src={image}
                  alt={image}
                  className={`b-radius ${styles.img}`}
                />                
                <div className="flex absolute align-y w-full px-4 bottom-3 s-btw">
                  <span
                    className="cursor pointer flex align-x align-y"
                    onClick={() => {
                      setListingImg && deleteImage(setListingImg, id);
                    }}
                  >
                    {' '}
                    &times;
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {imageArr.map((image, id) => (
            <SwiperSlide className="carousel_item" key={id}>
              <div className={styles.imgWrap}>
                {image.type.includes('image') ? (
                  <img
                    src={image.url}
                    alt={image.name}
                    className={`b-radius ${styles.img}`}
                  />
                ) : (
                  <div
                    className={`flex flex-col b-radius p-6 align-x align-y ${styles.pdf}`}
                  >
                    <Svg href={fileUploadIcon} />
                    <b>{image.name}</b>
                  </div>
                )}
                <div className="flex absolute align-y w-full px-4 bottom-3 s-btw">
                  <span
                    className="cursor pointer flex align-x align-y"
                    onClick={() => {
                      setListingImg && deleteImage(setListingImg, id);
                    }}
                  >
                    {' '}
                    &times;
                  </span>
                </div>
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
