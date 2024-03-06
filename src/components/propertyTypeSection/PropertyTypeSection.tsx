import style from './property.module.css';
import { SwiperSlide } from 'swiper/react';
import Container from '../reusable/Container';
import PropertyTypeCard from './PropertyTypeCard';
import CarouselWrap from '../reusable/CarouselWrap';
import useResponsiveNav from '~/hooks/useResponsiveNav';
import { propertyTypeData } from '../data/properyTypeData';

export default function PropertyTypeSection() {
  const { mediasize } = useResponsiveNav({});
  return (
    <Container element="div" className='container-pad'>
      <div className={style.section_title}>
        <h2>Property Types</h2>
        <p>Explore properties listings nationwide under this categories</p>
      </div>
      {mediasize === 'mobile' ? (
        <CarouselWrap>
          {propertyTypeData.map((data) => (
            <SwiperSlide key={data.name}>
              <PropertyTypeCard data={data} />
            </SwiperSlide>
          ))}
        </CarouselWrap>
      ) : (
        <div className={style.grid_container}>
          {propertyTypeData.map((data) => (
            <PropertyTypeCard key={data.name} data={data} />
          ))}
        </div>
      )}
    </Container>
  );
}
