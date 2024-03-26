import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { SwiperSlide } from 'swiper/react';
import Svg from '~/components/reusable/Svg';
import { coverStarIcon, exLinkIcon, fileUploadIcon } from '~/assets/icons';
import CarouselWrap from '~/components/reusable/CarouselWrap';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import { ImageFile } from '~/hooks/useFileUpload';
import React from 'react';

type Props = {
  certArr?: ImageFile[];
  imageArr: ImageFile[];
  coverImage?: ImageFile[];
  setCertImg?: React.Dispatch<React.SetStateAction<ImageFile[]>>;
  setCoverImg?: React.Dispatch<React.SetStateAction<ImageFile[]>>;
  setListingImg: React.Dispatch<React.SetStateAction<ImageFile[]>>;
  setActiveImg?: React.Dispatch<React.SetStateAction<number>>;
  setPdfFile?: React.Dispatch<React.SetStateAction<ImageFile>>;
  deleteImage: (
    setImgArr: React.Dispatch<React.SetStateAction<ImageFile[]>>,
    id?: number,
  ) => void;
};

export default function Carousel({
  setListingImg,
  setCoverImg,
  setCertImg,
  certArr,
  imageArr,
  coverImage,
  setPdfFile,
  deleteImage,
  setActiveImg,
}: Props) {
  return (
    <div>
      {coverImage || (certArr && certArr.length > 0) || imageArr.length > 0 ? (
        <CarouselWrap setActiveImg={setActiveImg}>
          {coverImage && coverImage[0]?.url ? (
            <SwiperSlide className="relative">
              <img
                src={coverImage[0].url}
                alt={coverImage[0].name}
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
                      setPdfFile && setPdfFile({} as ImageFile);
                    }}
                  >
                    {' '}
                    &times;
                  </span>
                  {image.type.includes('pdf') && (
                    <span
                      title="preview"
                      className="cursor-pointer flex align-x align-y"
                      onClick={() => setPdfFile && setPdfFile(image)}
                    >
                      <Svg href={exLinkIcon} height="1.5rem" />
                    </span>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
          {certArr &&
            certArr.map((image, id) => (
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
                        setCertImg && deleteImage(setCertImg, id);
                        setPdfFile && setPdfFile({} as ImageFile);
                      }}
                    >
                      {' '}
                      &times;
                    </span>
                    {image.type.includes('pdf') && (
                      <span
                        title="preview"
                        className="cursor-pointer flex align-x align-y"
                        onClick={() => setPdfFile && setPdfFile(image)}
                      >
                        <Svg href={exLinkIcon} height="1.5rem" />
                      </span>
                    )}
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
