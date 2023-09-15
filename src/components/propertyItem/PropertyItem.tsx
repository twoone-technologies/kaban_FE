import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../reusable/Container';
import { dummyObj } from '../reusable/dummyObj';
import styles from './propertyItem.module.css';
import Svg from '../reusable/Svg';
import { arrowIcon, cameraIcon } from '~/assets/icons';
import Button from '../reusable/Button';

export default function PropertyItem() {
  const { id } = useParams();
  const listingItem = dummyObj.find((item) => parseInt(item.id) === Number(id));
  const [activeIndex, setActiveIndex] = useState(0);
  const length = listingItem.images.length;
  const imgRef = useRef(null);

  const nextSlide = () => {
    scrollToIndex(activeIndex);
    setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1);
  };

  const prevSlide = () => {
    scrollToIndex(activeIndex);
    setActiveIndex(activeIndex === 0 ? length - 1 : activeIndex - 1);
  };

  function scrollToIndex(id: number) {
    const listNode = imgRef.current as HTMLDivElement
    console.log(listNode);

    const imgNode = listNode.querySelectorAll('li > div')[id] as HTMLDivElement
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <Container element="section" className={styles.wrapper}>
      <div>
        <ul className={`${styles.carousel_wrap}`}>
          {listingItem?.images.map((img, id) => (
            <li key={img.id}
              className={styles.carousel_img_wrap}
            >
              {id === activeIndex && (
                <img
                  src={img.url}
                  alt={img.id}
                  className={styles.carousel_img}
                />
              )}
            </li>
          ))}
          <div className={`flex f-width s-btw ${styles.btn_grp}`}>
            <Button type="button"
              onClick={prevSlide}
              className={`flex align-y stack ${styles.carousel_btn}
              ${activeIndex === 0 ? styles.disable : styles.enable}`}
            >
              <Svg width="3.4rem" height="1.3rem" href={arrowIcon} />
            </Button>
            <Button type="button"
              onClick={nextSlide}
              className={`flex align-y stack ${styles.carousel_btn}
                ${activeIndex === length -1 ? styles.disable : styles.enable}`}
            >
              <Svg width="3.4rem" height="1.3rem" href={arrowIcon} />
            </Button>
          </div>
          <div
            className={`flex stack gap c-pad b-radius align-y ${styles.img_no}`}
          >
            <Svg href={cameraIcon} />
            <span>
              {activeIndex + 1}/{listingItem?.images.length}
            </span>
          </div>
        </ul>
        <ul ref={imgRef} className={`flex gap ${styles.carousel_wrap2}`}>
          {listingItem?.images.map((img, id) => (
            <li
              onClick={() => setActiveIndex(id)}
              className={`${styles.carousel_img_wrap2}
              ${id === activeIndex ? styles.b : styles.f}`}
              key={img.id}
            >
              <div className={`${styles.carousel_wrapper}`}>
                <img
                  src={img.url}
                  alt={img.id}
                  className={styles.carousel_img2}
                />
                <div className={`f-width ${styles.overlay} ${id === activeIndex ? styles.bg : styles.fg}`} />
              </div>
            </li>
          ))}
        </ul>
        {/* <div className="flex s-btw">
          <div className="flex gap">
            <Svg href={heartIcon} />
            <Svg href={shareIcon} />
          </div>
        </div> */}
      </div>
    </Container>
  );
}
