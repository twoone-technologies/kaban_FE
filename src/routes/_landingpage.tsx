import FeaturedList from "~/components/featuredListings/FeaturedList";
import HeroSection from "~/components/heroSection/HeroSection";
import ExploreCitiesSection from "~/components/exploreCitiesSection/ExploreCitiesSection";
import LatestAdditions from "~/components/latestAddidtions/LatestAdditions";
import PropertyTypeSection from "~/components/propertyTypeSection/PropertyTypeSection";
import Footer from "~/components/footer/Footer";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturedList />
      <PropertyTypeSection />
      <ExploreCitiesSection />
      <LatestAdditions />
      <Footer />
    </>
  )
} 
