import Card from "../reusable/card/Card";
import Carousel from "../reusable/carousel/Carousel";
import Container from "../reusable/Container";
import { dummyObj } from "../reusable/dummyObj";
import styles from "./features.module.css"; 

export default function FeaturedList() {
  return (
    <Container element="section" className={`c_pad ${styles.feature}`}>
      <h2>Explore Our Featured Listings</h2>
      <p>Properties considered worth your time by listing realtors</p>
      <Carousel>
        {dummyObj.map((item) => (
          <Card key={item.id}
          apartmentImg={item.apartmentImg} 
          apartmentName={item.apartmentName} 
          status={item.status} 
          featured={item.featured} 
          price={item.price} 
          address={item.address} 
          propertyType={item.propertyType} 
          bedNo={item.bedNo} 
          toiletNo={item.toiletNo} 
          showerNo={item.showerNo} 
          carNo={item.carNo} 
          agentImg={item.agentImg} 
          agentName={item.agentName} 
          date={item.date} />
        ))}
      </Carousel>
    </Container>
  )
}
