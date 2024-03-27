import { useState } from 'react'

type PostRoute = {
  type: string;
  value: number;
};

export default function useTabulation(pace = 104) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevId, setPrevId] = useState(0);
  // pace is the length of the header
  const handleHeaderClick = (id: number, arr: PostRoute[]) => {
    const num = arr.findIndex((item) => item.value === id);
    if (num > activeIndex) {
      const diff = num - activeIndex;
      const paceX = pace * diff;
      setPrevId((prev) => {
        if (prev < paceX) return prev + paceX;
        else if (diff > 1) return prev + paceX;
        else if (diff === 1) return prev + pace;
        else return prev; // No change
      });
    }
    if (num < activeIndex) {
      const diff = activeIndex - num;
      const paceX = pace * diff;
      setPrevId((prev) => {
        if (prev > paceX) return prev - paceX;
        else if (diff > 1) return prev - paceX;
        else if (diff === 1) return prev - pace;
        else return prev; // No change
      });
    }
    setActiveIndex(id);
  }

  const next = () => {
    setPrevId((prev) => prev + pace);
    setActiveIndex((prev) => prev + 1);
  }

  const prev = () => {
    setPrevId((prev) => prev - pace);
    setActiveIndex((prev) => prev - 1);
  }

  return { activeIndex, prevId, setActiveIndex, handleHeaderClick, next, prev }
}