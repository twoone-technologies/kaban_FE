import Svg from '~/components/reusable/Svg';
import InputWrap from './InputWrap';
import styles from './post.module.css';
import { coverStarIcon, uploadImgIcon } from '~/assets/icons';
import FormInput from '~/components/reusable/FormInput';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { arrowIcon } from '~/assets/icons';
import ContinueOrCancel from './ContinueOrCancel';

type props = {
  className: string;
}

export default function Media({className}) {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [cover, setCover] = useState(-1);

  const handleImage = (e) => {
    const files = e.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prev) => [
          ...prev,
          {
            id: i,
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
            cover: false,
            size: files[i].size,
            type: files[i].type,
            lastModified: files[i].lastModified,
            lastModifiedDate: files[i].lastModifiedDate,
            webkitRelativePath: files[i].webkitRelativePath,
          },
        ]);
      }
    }
  };
  // console.log(images);

  const handleCoverImg = (id) => {
    setCover(id);
    setImages((prev) => {
      return prev.map((image) => {
        if (image.id === id) {
          return { ...image, cover: true };
        } else {
          return { ...image, cover: false };
        }
      });
    });
    console.log(images); // Log the updated images after the state has been updated
  };

  const deleteImage = (id: number) => {
    setImages((prev) => prev.filter((_, idx) => idx !== id));
  };

  function onDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = 'copy';
  }

  function onDragLeave(e) {
    e.preventDefault();
    setIsDragging(false);
  }

  function onDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prev) => [
          ...prev,
          {
            id: i,
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
            cover: false,
            size: files[i].size,
            type: files[i].type,
            lastModified: files[i].lastModified,
            lastModifiedDate: files[i].lastModifiedDate,
            webkitRelativePath: files[i].webkitRelativePath,
          },
        ]);
      }
    }
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <InputWrap>
        <h3>Media</h3>
        <div>
          {images.length > 0 ? (
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
                600: {
                  slidesPerView: 1,
                  centeredSlides: true,
                },
                700: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                1230: {
                  slidesPerView: 3,
                  centeredSlides: false,
                },
              }}
              className="swiper_container"
            >
              {images.map((image, id) => (
                <SwiperSlide className="carousel_item" key={id}>
                  <div className={styles.imgWrap}>
                    <img
                      src={image.url}
                      alt={image.name}
                      className={styles.img}
                    />
                    <div
                      className={`flex s-btw w-full px-3 ${styles.imgControl}`}
                    >
                      <div
                        onClick={() => handleCoverImg(id)}
                        className={`${styles.svgWrap}
                      ${id === cover ? styles.starColor : ''}`}
                      >
                        <Svg href={coverStarIcon} />
                      </div>
                      <span
                        onClick={() => deleteImage(id)}
                        className="flex align-x align-y"
                      >
                        {' '}
                        &times;
                      </span>
                    </div>
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
          ) : (
            ''
          )}
        </div>
        <div onDragLeave={onDragLeave} onDragOver={onDragOver} onDrop={onDrop}>
          <span>Upload Images</span>
          <div
            className={`flex f-column pad-block-2 pad-inline-1 b-radius align-x align-y ${styles.uploadWrap}`}
          >
            <Svg href={uploadImgIcon} />
            <div className={styles.upload}>
              {isDragging ? (
                <span>Drop Image here</span>
              ) : (
                <span>
                  <b>Click here to upload</b> or drag and drop
                </span>
              )}
              <input
                multiple
                className={styles.fileInput}
                title="upload"
                accept=".jpg, .jpeg, .png"
                type="file"
                onChange={handleImage}
              />
            </div>
            <span>PNG, JPG (max. 1440x900px)</span>
          </div>
        </div>
        <h3>Video URL</h3>
        <FormInput
          type="text"
          title={'videoUrl'}
          placeholder="Example: https://www.youtube.com/watch?v=8T7SnBQDiuM"
        />
      </InputWrap>
      <ContinueOrCancel />
    </div>
  );
}
