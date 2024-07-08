import { useState, useEffect } from 'react';
import Checkbox from './checkbox/Checkbox';
import styles from './searchForm.module.css';
import { otherFeatures } from './status';
import { Listing } from '~/utils/types/listing.types';

type FeatureProps = {
  className?: string;
  listing?: Listing;
  setListing?: React.Dispatch<React.SetStateAction<Listing>>;
};

export default function CheckboxGroup({
  className,
  listing,
  setListing,
}: FeatureProps) {
  const [features, setFeatures] = useState(otherFeatures);

  useEffect(() => {
    if (listing) {
      setFeatures((prev) =>
        prev.map((item) => ({
          ...item,
          checked: listing.details.features.includes(item.title),
        })),
      );
    }
  }, [listing]);

  const handleCheckAll = () =>
    setFeatures((prev) =>
      prev.map((item) => ({ ...item, checked: !item.checked })),
    );

  const handleChecked = ( e: React.ChangeEvent<HTMLInputElement>, ) => {
    // when a box is checked, push the string to the array else remove it
    if (listing) {
      setListing &&
        setListing((prev) => {
          const traits = prev.details.features;
          if (e.target.checked) {
            traits.push(e.target.name);
          } else {
            const index = traits.indexOf(e.target.name);
            traits.splice(index, 1);
          }
          return {
            ...prev,
            details: { ...prev.details, traits },
          };
        });
      return;
    }
    setFeatures((prev) =>
      prev.map((item: { title: string; checked: boolean }) => {
        if (e.target.name === item.title) return { ...item, checked: !item.checked };
        return item;
      }),
    );
  };

  return (
    <div className={className}>
      <Checkbox title1="Select all" onChange={handleCheckAll} />
      <div className={styles.checkboxGroup}>
        {features.map((feature) => (
          <Checkbox
            name={feature.title}
            key={feature.title}
            onChange={(e) => handleChecked(e)}
            checked={feature.checked}
            title={feature.title}
            title1={feature.title}
          />
        ))}
      </div>
    </div>
  );
}
