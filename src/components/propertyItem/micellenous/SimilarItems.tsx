import Card, { HouseCard } from '~/components/reusable/card/Card';
import styles from './micellenous.module.css';
import { Link } from 'react-router-dom';

export default function SimilarItems({ similar }: { similar: HouseCard[] }) {
  return (
    <div className={styles.similarItemsWrap}>
    <div className={`flex s-btw ${styles.similarItemsHeader}`}>
      <h4>Similar property listingItem you may like</h4>
      <Link className="bg-primary" to={''}>
        View all similar listings
      </Link>
    </div>
    <div className={styles.similarItems}>
      {similar.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  </div>
  )
}