import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from 'react-router-dom';
import { HouseCard } from '~/components/reusable/card/Card';
import { dummyObj } from '~/components/reusable/dummyObj';
import ResultsWrap from '~/components/reusable/resultsContainer/ResultsWrap';
import useHeader from '~/hooks/useHeader';

export async function loader({ }: LoaderFunctionArgs) {
  // Create getURLData function that will 
  // get the city from params and other query params
  // const { city } = getURLData(request.url);
  // const commercial = dummyObj.filter(
  //   (items) => items.city === city.toLocaleLowerCase(),
  // );
  // return { commercial };
  return ''
}

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

  if (location.pathname === '/cities/:cityName') {
    return redirect(`/cities/:cityName?${searchStr}`);
  }
  return redirect(`/cities/:cityName?${searchStr}`);
}

export default function CityName() {
  const { cityStatus, stat, city } = useHeader();
  const commercial = dummyObj as HouseCard[]
  commercial.filter(
    (items) => items.city === city.toLocaleLowerCase(),
  );
  const currCity = city.replace('+', ' ') ?? '';

  return (
    <ResultsWrap
      defaultCity={currCity}
      city={currCity}
      status={stat}
      object={commercial}
      onSubmit={() => {
        setTimeout(() => {
          cityStatus();
        }, 500);
      }}
    />
  );
}
