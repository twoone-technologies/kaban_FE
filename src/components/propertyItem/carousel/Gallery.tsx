import { useState, useRef } from 'react';
import styles from './carousel.module.css';
import Image from './Image';
import { arrowIcon, cameraIcon, heartIcon } from '~/assets/icons';
import Button from '~/components/reusable/Button';
import Svg from '~/components/reusable/Svg';
import { HouseCard } from '~/components/reusable/card/Card';
import { dateHandler } from '~/components/reusable/FunctionUtils';

export default function Gallery({item}:{item:  HouseCard}) {
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const length = item.images.length;
  const imgRef = useRef<HTMLUListElement | null>(null);

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
    if (listNode) {
      const imgNode = listNode.querySelectorAll('li > div')[id];
      if (imgNode instanceof HTMLElement) {
        imgNode.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchDown = touchPosition;
    if (touchDown === null) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 5) {
      nextSlide();
    } else {
      prevSlide();
    }
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
            className={`flex align-y stack ${styles.carousel_btn} ${
              activeIndex === 0 ? styles.disable : styles.enable
            }`}
          >
            <Svg width="3.4rem" height="1.3rem" href={arrowIcon} />
          </Button>
          <Button
            type="button"
            onClick={nextSlide}
            className={`flex align-y stack ${styles.carousel_btn} ${
              activeIndex === length - 1 ? styles.disable : styles.enable
            }`}
          >
            <Svg width="3.4rem" height="1.3rem" href={arrowIcon} />
          </Button>
        </div>
        <div className={`flex stack gap c-pad b-radius align-y ${styles.img_no}`}>
          <Svg href={cameraIcon} />
          <span>
            {activeIndex + 1}/{item.images.length}
          </span>
        </div>
        <div className={`flex stack s-btw f-width c_pad ${styles.dateLikes}`}>
          <span className={`c-pad b-radius ${styles.date}`}>
            {dateHandler(item.createdAt)}
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
