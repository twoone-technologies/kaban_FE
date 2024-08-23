import style from './property.module.css';
import Container from '../reusable/Container';
import PropertyTypeCard from './PropertyTypeCard';
import { propertyTypeData } from '../data/properyTypeData';

export default function PropertyTypeSection() {
  return (
    <Container element="div" className='container-pad'>
      <div className={style.section_title}>
        <h2>Property Types</h2>
        <p>Explore properties listings nationwide under this categories</p>
      </div>
        <div className={style.grid_container}>
          {propertyTypeData.map((data) => (
            <PropertyTypeCard key={data.name} data={data} />
          ))}
        </div>
    </Container>
  );
}
