import { useState } from 'react'

type PostRoute = {
  type: string;
  value: number;
};

// this hook is used with the Tabulation Component
// the pace is the width of each header
// it returns the activeIndex, prevId, setActiveIndex, handleHeaderClick, next, prev
// prevId is used to determine the position of the header and passed to the active tab variable of the tabulation component
// activeIndex is passed to the idx variable of the tabulation component.
// handleHeaderClick function is used to switch between tabs

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
    // if ()
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