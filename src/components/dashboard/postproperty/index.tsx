import { Wrapper } from '~/components/reusable/Container';
import { Form } from 'react-router-dom';
import styles from './index.module.css'
import Basic from './pages/Basic';
import Media from './pages/Media';
import ListingLocation from './pages/ListingLocation';
import { headers } from './pages/suffix';
import { useEffect, useRef, useState } from 'react';

export default function Post() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setActiveIndex(0)
  }, []); 

  const handleHeaderClick = (id: number) => {
    setActiveIndex(id);
  };

  const underlineStyle = {
    transform: `translateX(${activeIndex * (450 / headers.length)}%)`
  };

  return (
    <Wrapper element="section" className={styles.wrapper}>
      <div ref={ref} className={`flex gap-7 w-full ${styles.formNav}`}>
        {headers.map((header) => (
          <span key={header.value} onClick={() => handleHeaderClick(parseInt(header.value))}
          className={`${styles.header} ${parseInt(header.value) === activeIndex ? styles.active : ''}`}
          >
            {header.type}
          </span>
        ))}
        <div className={styles.underline} style={underlineStyle} />
      </div>
      <Form className="flex f-column gap">
        <Basic className={activeIndex === 0 ? 'visible' : styles.hidden} />
        <Media className={activeIndex === 1 ? 'visible' : styles.hidden} />
        <ListingLocation  className={activeIndex === 2 ? 'visible' : styles.hidden} />
      </Form>
    </Wrapper>
  );
}
