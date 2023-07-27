import { propertyTypeData } from '../data/properyTypeData'
import Container from '../reusable/Container'
import PropertyTypeCard from './PropertyTypeCard'
import style from "./property.module.css"
export default function PropertyTypeSection() {
  return (
    <section className="section">
      <Container element='div'>
        <div className={`pad ${style.section_title}`}>
          <h1 className='section_heading'>Property Types</h1>
          <p>Explore properties listings nationwide under this categories</p>
        </div>
        <div className={style.grid_container}>
          {propertyTypeData.map(data => (
            <PropertyTypeCard key={data.name} data={data} />
          ))}
        </div>
      </Container>
    </section>
  )
}
