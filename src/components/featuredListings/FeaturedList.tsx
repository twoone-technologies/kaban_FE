import Card from "../reusable/card/Card";
import Container from "../reusable/Container";
import styles from "./features.module.css"; 

export default function FeaturedList() {
  return (
    <Container element="section" className={`c_pad ${styles.feature}`}>
      <h2>Explore Our Featured Listings</h2>
      <p>Properties considered worth your time by listing realtors</p>
      <Card />
    </Container>
  )
}
