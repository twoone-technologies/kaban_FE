import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { HouseCard } from '~/components/reusable/card/Card';
import { dummyObj } from '~/components/reusable/dummyObj';
import ResultsWrap from '~/components/reusable/resultsContainer/ResultsWrap';
import useHeader from '~/hooks/useHeader';

export async function action({ request }: ActionFunctionArgs) {
  // get form data
  const formData = await request.formData();
  console.log(...formData);
  const searchStr = [...formData]
    .reduce((prev, [key, val]) => {
      if (val) prev.push(`${key}=${val}`);
      return prev;
    }, [] as string[])
    .join('&');
  // const str = `search_results?status=${status}&location=${location}&propertyType=${propertyType}&bedrooms=${bedrooms}&priceRange=${priceRange}`
  // console.log(str.split('&'));

  // send data to BE
  //const res = await searchListings(searchStr)

  // redirect to result page with the data

  if (location.pathname === '/industrial') {
    return redirect(`/industrial?${searchStr}`);
  }
  return redirect(`/industrial?${searchStr}`);
}

export default function Industrial() {
  const { category, city, cityStatus, stat } = useHeader();
  const industrial = dummyObj as HouseCard[]
  return (
    <ResultsWrap
      city={city}
      status={stat}
      propertyCategory={category}
      object={industrial}
      onSubmit={() => {
        setTimeout(() => {
          cityStatus();
        }, 500);
      }}
    />
  );
}
