import FeaturedList from "~/components/featuredListings/FeaturedList";
import HeroSection from "~/components/herosection/HeroSection";
import ExploreCitiesSection from "~/components/exploreCitiesSection/ExploreCitiesSection";
import LatestAdditions from "~/components/latestAddidtions/LatestAdditions";
import PropertyTypeSection from "~/components/propertyTypeSection/PropertyTypeSection";
import { ActionFunctionArgs, redirect, useLocation } from "react-router-dom";

export async function action({ request }: ActionFunctionArgs) {
  // get form data
  const formData = await request.formData()
  const searchStr = [...formData].reduce((prev, [key, val]) => {
    if (val) prev.push(`${key}=${val}`)
    return prev
  }, [] as string[]).join('&')
  console.log(searchStr);

  // const property_type = payload.propertyType;
  // const bedrooms = payload.bedrooms;
  // const price_Range = payload.priceRange;

  // const str = `search_results?status=${payload.status}&location=${payload.location}${property_type??`&propertyType=${payload.propertyType}`}${bedrooms??`&bedrooms=${payload.bedrooms}`}${price_Range??`&priceRange=${payload.priceRange}`}`
  // console.log(str);
  
  // send data to BE
  //const res = await searchListings(searchStr)
  
  
  // redirect to result page with the data
  
  if (location.pathname !== "/search_results") {
    console.log(location);
    return redirect(`/search_results?${searchStr}`)
  }
  return redirect(`/search_results?${searchStr}`)
}

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturedList />
      <PropertyTypeSection />
      <ExploreCitiesSection />
      <LatestAdditions />
    </>
  )
} 
