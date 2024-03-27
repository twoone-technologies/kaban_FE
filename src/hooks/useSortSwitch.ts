import { useEffect, useState } from "react";
import { Transaction } from "~/components/dashboard/wallet";
import { HouseCard } from "~/components/reusable/card/Card";

type ObjectTypes = HouseCard[] | Transaction[];

export default function useSortSwitch(object: ObjectTypes) {
  const [sortArr, setSortArr] = useState<ObjectTypes>([]);

  useEffect(() => {
    if (object) {
      setSortArr(object);
    }
  }, [object]);

  const isHouseCardArray = (arr: ObjectTypes): arr is HouseCard[] => {
    return Array.isArray(arr) && arr.length > 0 && 'price' in arr[0];
  };

  const handleSort = (e: { target: { value: string } }) => {
    if (isHouseCardArray(sortArr)) {
      if (e.target.value === 'Price Acending') {
        setSortArr([...sortArr].sort((a, b) => a.price.amount - b.price.amount));
      }
      if (e.target.value === 'Price Decending') {
        setSortArr([...sortArr].sort((a, b) => b.price.amount - a.price.amount));
      }
      if (e.target.value === 'Featured listings first') {
        setSortArr(
          [...sortArr].sort((a, b) => Number(b.featured) - Number(a.featured)),
        );
      }
    }
    if (!isHouseCardArray(sortArr)) {
      if (e.target.value === 'all action') setSortArr(
          [...sortArr].sort((a, b) => Number(a.id) - Number(b.id)),
      )
      if (e.target.value === 'publication') {
        setSortArr(
          [...sortArr].sort((a, b) => Number(b.action === 'publication') - Number(a.action === 'publication')),
        );
      }
      if (e.target.value === 'deposit') {
        setSortArr(
          [...sortArr].sort((a, b) => Number(b.action === 'deposit') - Number(a.action === 'deposit')),
        );
      }
      if (e.target.value === 'refund') {
        setSortArr(
          [...sortArr].sort((a, b) => Number(b.action === 'refund') - Number(a.action === 'refund')),
        );
      }
      if (e.target.value === 'referral') {
        setSortArr(
          [...sortArr].sort((a, b) => Number(b.action === 'referral') - Number(a.action === 'referral')),
        );
      }
      if (e.target.value === 'feature upgrade') {
        setSortArr(
          [...sortArr].sort((a, b) => Number(b.action === 'feature upgrade') - Number(a.action === 'feature upgrade')),
        );
      }
      if (e.target.value === 'account Verification') {
        setSortArr(
          [...sortArr].sort((a, b) => Number(b.action === 'account Verification') - Number(a.action === 'account Verification')),
        );
      }
    }
  }

  return { object, sortArr, setSortArr, handleSort }
}