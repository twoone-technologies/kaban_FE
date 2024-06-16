import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type PaginationProp = {
  currentPage: number,
  totalPages: number,
  setPage: (page: number) => void
}

export default function PaginationComp({
  currentPage,
  totalPages,
  setPage
}: PaginationProp) {
  return (
    <div className="flex items-center justify-center w-full mb-24">
      <div className="flex items-center border border-[#EAECF0] rounded-lg">
        <button
          onClick={() => setPage(currentPage - 1)}
          className={`flex items-center !gap-[6px] px-2 md:px-6 py-1 md:py-3 text-sm md:text-base text-[#5F6D7E] border-r border-[#EAECF0] ${currentPage <= 1 ? "pointer-events-none opacity-50" : ""
            }`}
        >
          <FaArrowLeft />
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`flex items-center px-4 md:px-6 py-1 md:py-3 text-sm md:text-base text-[#5F6D7E] border-r border-[#EAECF0] ${currentPage === index + 1
              ? "bg-[#006AFF0D] text-primaryColor"
              : ""
              }`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setPage(currentPage + 1)}
          className={`flex items-center !gap-[6px] px-2 md:px-6 py-1 md:py-3 text-sm md:text-base text-[#5F6D7E] ${currentPage >= totalPages ? "pointer-events-none opacity-50" : ""
            }`}
        >
          Next
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
