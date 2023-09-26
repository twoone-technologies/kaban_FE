import { useState, useRef } from 'react';
import styles from './propertyItem.module.css';
import Image from './Image';
import Button from '../reusable/Button';
import Svg from '../reusable/Svg';
import { arrowIcon, cameraIcon, heartIcon } from '~/assets/icons';
import { HouseCard } from '../reusable/card/Card';

export default function Gallery({ item }: { item: HouseCard }) {
  const [touchPosition, setTouchPosition] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const length = item.images.length;
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
    const listNode = imgRef.current;
    const imgNode = listNode.querySelectorAll('li > div')[id] as HTMLDivElement;
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    diff > 5 ? nextSlide() : prevSlide();
    setTouchPosition(null);
  };

  return (
    <>
      <ul
        className={`${styles.carousel_wrap}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {item.images.map((img, id) => (
          <Image
            key={img.id}
            currentIndex={activeIndex}
            src={img.url}
            num={id}
          />
        ))}
        <div className={`flex f-width s-btw ${styles.btn_grp}`}>
          <Button
            type="button"
            onClick={prevSlide}
            className={`flex align-y stack ${styles.carousel_btn}
          ${activeIndex === 0 ? styles.disable : styles.enable}`}
          >
            <Svg width="3.4rem" height="1.3rem" href={arrowIcon} />
          </Button>
          <Button
            type="button"
            onClick={nextSlide}
            className={`flex align-y stack ${styles.carousel_btn}
            ${activeIndex === length - 1 ? styles.disable : styles.enable}`}
          >
            <Svg width="3.4rem" height="1.3rem" href={arrowIcon} />
          </Button>
        </div>
        <div
          className={`flex stack gap c-pad b-radius align-y ${styles.img_no}`}
        >
          <Svg href={cameraIcon} />
          <span>
            {activeIndex + 1}/{item.images.length}
          </span>
        </div>
        <div className={`flex stack s-btw f-width c_pad ${styles.dateLikes}`}>
          <span className={`c-pad b-radius ${styles.date}`}>
            {item.createdAt}
          </span>
          <Svg href={heartIcon} />
        </div>
      </ul>
      <ul ref={imgRef} className={`gap ${styles.carousel_wrap2}`}>
        {item.images.map((img, id) => (
          <Image
            currentIndex={activeIndex}
            key={img.id}
            src={img.url}
            num={id}
            onClick={() => setActiveIndex(id)}
          />
        ))}
      </ul>
    </>
  );
}
