import { useParams } from "react-router-dom";
import { dummyObj } from "~/components/reusable/dummyObj";
import ResultsWrap from "~/components/reusable/resultsContainer/ResultsWrap";
import useHeader from "~/hooks/useHeader";
import { Listing } from "~/utils/types/listing.types";

export function OtherItemsPage() {
  const { id } = useParams();
  const { city, cityStatus, stat } = useHeader();
  const arr = dummyObj.filter(item => item.realtor.id === id) as unknown as Listing[];

	// useEffect(() => {
  //   fetch(`/api/items?id=${id}`)
  //     .then(res => res.json())
  //     .then(data => setItems(data));
  // }, [id]);

  return (
    <ResultsWrap
      city={city}
      status={stat}
      object={arr}
      onSubmit={() => {
        setTimeout(() => {
          cityStatus();
        }, 500);
      }}
    />
  );
}
