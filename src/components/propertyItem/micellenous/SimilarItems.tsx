import { Listing } from '~/utils/types/listing.types';
import styles from './micellenous.module.css';
import { Link } from 'react-router-dom';
import Card from '~/components/reusable/card/Card';

export default function SimilarItems({ similar, listing }: { listing: Listing, similar: Listing[] }) {
  return (
    <div className={styles.similarItemsWrap}>
      <div className={`flex s-btw ${styles.similarItemsHeader}`}>
        <h4>Similar property listingItem you may like</h4>
        <Link className="bg-primary" to={`/similar-items/${listing.property_type}`}>
          View all similar listings
        </Link>
      </div>
      <div className={styles.similarItems}>
        {similar.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
