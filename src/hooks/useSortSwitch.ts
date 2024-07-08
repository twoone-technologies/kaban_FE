import { useEffect, useState } from "react";
import { Transaction } from "~/components/dashboard/wallet";
import { Listing } from "~/utils/types/listing.types";

type ObjectTypes = Listing[] | Transaction[];

export default function useSortSwitch(object: ObjectTypes) {
  const [sortArr, setSortArr] = useState<ObjectTypes>([]);

  useEffect(() => {
    if (object) {
      setSortArr(object);
    }
  }, [object]);

  const isHouseCardArray = (arr: ObjectTypes): arr is Listing[] => {
    return Array.isArray(arr) && arr.length > 0 && 'price' in arr[0];
  };

  const handleSort = (value: string) => {
    if (isHouseCardArray(sortArr)) {
      if (value === 'Price Acending') {
        setSortArr([...sortArr].sort((a, b) => a.price.amount - b.price.amount));
      }
      if (value === 'Price Decending') {
        setSortArr([...sortArr].sort((a, b) => b.price.amount - a.price.amount));
      }
      if (value === 'Featured listings first') {
        setSortArr(
          [...sortArr].sort((a, b) => Number(b.featured) - Number(a.featured)),
        );
      }
    }
    if (!isHouseCardArray(sortArr)) {
      if (value !== 'all action') {
        setSortArr(
          [...sortArr].sort((a, b) => {
            const statusA = a.action === value;
            const statusB = b.action === value;
            if (statusA && statusB) return 0;
            if (statusA) return -1;
            if (statusB) return 1;
            return 0;
          })
        );
      } else {
        setSortArr(
          [...sortArr].sort((a, b) => Number(a.id) - Number(b.id))
        );      
      }
    }
    if(isHouseCardArray(sortArr) && location.pathname.includes('listings')) {
      if (value !== 'featured') {
        setSortArr(
          [...sortArr].sort((a, b) => {
            const statusA = a.status === value;
            const statusB = b.status === value;
            if (statusA && statusB) return 0;
            if (statusA) return -1;
            if (statusB) return 1;
            return 0;
          }),
        );
      } else {
        setSortArr(
          [...sortArr].sort((a, b) => {
            const aValue = a[value.toLowerCase()] as number;
            const bValue = b[value.toLowerCase()] as number;
            return bValue - aValue;
          }),
        );
      }
    }
  }

  return { object, sortArr, setSortArr, handleSort }
}