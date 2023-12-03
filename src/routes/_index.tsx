import { ActionFunctionArgs, Outlet } from "react-router-dom";
import Footer from "~/components/footer/Footer";
import Navigation from "~/components/navigation";
import "~/styles/main.css";

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

    console.log(searchStr);
  // const str = `search_results?status=${status}&location=${location}&propertyType=${propertyType}&bedrooms=${bedrooms}&priceRange=${priceRange}`
  // console.log(str.split('&'));

  // send data to BE
  //const res = await searchListings(searchStr)

  // redirect to result page with the data

  // if (location.pathname !== '/search_results') {
  //   console.log(location);
  //   return redirect(`/search_results?${searchStr}`);
  // }
  // return redirect(`/search_results?${searchStr}`);
}

export default function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}
