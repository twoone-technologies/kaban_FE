import FeaturedList from '~/components/featuredListings/FeaturedList';
import ExploreCitiesSection from '~/components/exploreCitiesSection/ExploreCitiesSection';
import LatestAdditions from '~/components/latestAddidtions/LatestAdditions';
import PropertyTypeSection from '~/components/propertyTypeSection/PropertyTypeSection';
import HeroSection from '~/components/heroSection/HeroSection';

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturedList />
      <PropertyTypeSection />
      <ExploreCitiesSection />
      <LatestAdditions />
    </>
  );
}