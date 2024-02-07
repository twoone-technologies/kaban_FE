import { useState } from 'react';
import Checkbox from './checkbox/Checkbox';
import styles from './searchForm.module.css';
import { otherFeatures } from './status';

export default function CheckboxGroup({className}: {className?: string}) {
  const [features, setFeatures] = useState(otherFeatures);

  const handleCheckAll = () =>
    setFeatures((prev) =>
      prev.map((item) => ({ ...item, checked: !item.checked }))
    );

  const handleChecked = (id: string) => {
    setFeatures((prev) =>
      prev.map((item: { title: string; checked: boolean }) => {
        if (item.title === id) return { ...item, checked: !item.checked };
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
            onChange={() => handleChecked(feature.title)}
            checked={feature.checked}
            title={feature.title}
            title1={feature.title}
          />
        ))}
      </div>
    </div>
  );
}
