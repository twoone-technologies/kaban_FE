import { useSearchParams } from "react-router-dom";
import PaginationComp from "../reusable/Pagination";
import Card, { HouseCard } from "../reusable/card/Card";
import { dummyObj } from "../reusable/dummyObj";

export default function Listings() {
  const listingArray = dummyObj as unknown as HouseCard[];
  const [query, setSearchParams] = useSearchParams()
  const currentPage = Number(query.get("page") || 1);
  return (
    <>
      <div className="!grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8 mt-8">
        {listingArray.map((item) => {
          return (
            <>
              <Card card={item as HouseCard} />
            </>
          )
        })}
      </div>
      <div className="mt-16">
        <PaginationComp currentPage={currentPage} totalPages={5} setPage={(page) => {
          setSearchParams(prev => {
            prev.set("page", page.toString())
            return prev
          })
        }} />
      </div>
    </>
  );
}
