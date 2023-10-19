import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { dummyObj } from '~/components/reusable/dummyObj';
import ResultsWrap from '~/components/reusable/resultsContainer/ResultsWrap';

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

  if (location.pathname !== '/search_results') {
    console.log(location);
    return redirect(`/search_results?${searchStr}`);
  }
  return redirect(`/search_results?${searchStr}`);
}

export default function SearchResults() {
  const cityStat = () => {
    const arr = location.href.split('&');
    let city = arr[1].split('=')[1];
    const status = arr[0].split('=')[1];
    if (city.includes('%20')) city = city.replace(/%20/g, ' ');
    return { city, status };
  };

  return (
    <ResultsWrap
      city={cityStat().city}
      status={cityStat().status}
      object={dummyObj}
    />
  );
}
