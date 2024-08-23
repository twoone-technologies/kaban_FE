import { Listing } from '~/utils/types/listing.types';
import Label from './Label';
import styles from './card.module.css';
import { useLocation } from 'react-router-dom';

const setNums = (num: number) => {
  if (num === undefined || NaN || '') return '...';
  return num.toLocaleString();
};

export default function CardHeaderInfo({
  cardHeader,
}: {
  cardHeader: Listing;
}) {
  const locate = useLocation();
  return (
    <div className={`flex space-between gap ${styles.header}`}>
      <div className="flex flex-col align-x">
        <p>{cardHeader.property_type}</p>
        <h3>₦{setNums(cardHeader.price.amount)}</h3>
      </div>
      <div className={`grid gap-05 grid-cols-2 font-bold ${styles.status_grp}`}>
        {labelDisplay(cardHeader, locate.pathname).map((label, index) =>
          typeof label.type === 'boolean' ? (
            <Label key={index} type={label.value} />
          ) : (
            <Label key={index} type={label.type} />
          ),
        )}
      </div>
    </div>
  );
}

const labelDisplay = (listing: Listing, pathname: string) => {
  const labelArr = [] as { value: string; type: string | boolean }[];
  const isExpired = new Date(listing.expiresAt) < new Date();
  
  if (listing) {
    if (listing?.draft) {
      labelArr.push({ value: 'draft', type: listing.draft });
    }
    if (listing?.featured) {
      labelArr.push({ value: 'featured', type: listing.featured });
    }
    if (isExpired) {
      labelArr.push({ value: 'expired', type: isExpired });
    }
    if (listing?.status) {
      labelArr.push({ value: 'status', type: listing.status });
    }
    if (listing?.published_status) {
      labelArr.push({
        value: 'published_status',
        type: listing.published_status,
      });
    }
  }

  if (pathname !== '/dashboard/listings') {
    return labelArr.filter(
      (item) =>
        item.value !== 'draft' &&
        item.value !== 'expired' &&
        item.value !== 'published_status',
    );
  }

  const disapproved = listing.published_status === 'disapproved'
  if (listing.draft) {
    return labelArr.filter(
      (item) => item.value !== 'expired' && item.value !== 'published_status',
    );
  }

  if (isExpired) {
    return labelArr.filter(
      (item) => item.value !== 'draft' && item.value !== 'published_status'
      && item.value !== 'featured' 
    );
  }

  if (disapproved) {
    return labelArr.filter(
      (item) => item.value !== 'draft' && item.value !== 'featured' 
    );
  }

  return labelArr;
};
