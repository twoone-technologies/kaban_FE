import FeaturedList from "~/components/featuredListings/FeaturedList";
import HeroSection from "~/components/heroSection/HeroSection";
import ExploreCitiesSection from "~/components/exploreCitiesSection/ExploreCitiesSection";
import LatestAdditions from "~/components/latestAddidtions/LatestAdditions";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturedList />
      <ExploreCitiesSection />
      <LatestAdditions />
    </>
  )
} 
