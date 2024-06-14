import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

type PaginationProp = {
  prevPageLink: string,
  nextPageLink: string,
  currentPage: number,
  totalPages: number
}

export default function PaginationComp({
  prevPageLink,
  nextPageLink,
  currentPage,
  totalPages,
}: PaginationProp) {
  return (
    <div className="flex items-center justify-center w-full mb-24">
      <div className="flex items-center border border-[#EAECF0] rounded-lg">
        <Link
          to={prevPageLink}
          className={`flex items-center !gap-[6px] px-2 md:px-6 py-1 md:py-3 text-sm md:text-base text-[#5F6D7E] border-r border-[#EAECF0] ${currentPage <= 1 ? "pointer-events-none opacity-50" : ""
            }`}
        >
          <FaArrowLeft />
          Prev
        </Link>
        {Array.from({ length: totalPages }, (_, index) => (
          <Link
            key={index}
            className={`flex items-center px-4 md:px-6 py-1 md:py-3 text-sm md:text-base text-[#5F6D7E] border-r border-[#EAECF0] ${currentPage === index + 1
              ? "bg-[#006AFF0D] text-primaryColor"
              : ""
              }`}
            to={`?page=${index + 1}`}
          >
            {index + 1}
          </Link>
        ))}
        <Link
          to={nextPageLink}
          className={`flex items-center !gap-[6px] px-2 md:px-6 py-1 md:py-3 text-sm md:text-base text-[#5F6D7E] ${currentPage >= totalPages ? "pointer-events-none opacity-50" : ""
            }`}
        >
          Next
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
