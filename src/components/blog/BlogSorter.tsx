// import React from 'react'

import { useState } from "react";
import { sortOptions } from "../data/blogData";

// type Props = {}

export default function BlogSorter() {
  const [active, setActive] = useState('viewAll');
  
  const handleActive = (e: string) => {
    setActive(e);
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-1 mt-8 sortOptionsWrap max-w-[38rem]">
      {sortOptions.map((option) => (
        <div
          key={option.label}
          // type="button"
          onClick={() => handleActive(option.value)}
          className={`py-1 px-8 rounded-lg cursor-pointer border flex justify-center items-center
            ${active === option.value ? 'border  border-primaryColor text-primaryColor' : ''}
          `}
        >
          {option.label}
        </div>
      ))}
    </div>
  )
}
