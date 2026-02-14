import { lazy } from "react";

export const Root = lazy(() => import("./_index"));
export const LandingPage = lazy(() => import("./_landingpage"));
export const SearchResults = lazy(() => import("./search_results"));
export const PropertyItem = lazy(
  () => import("../components/propertyItem/PropertyItem"),
);
export const Blog = lazy(() => import("./blog"));
export const Commercial = lazy(() => import("./_property.commercial"));
export const Industrial = lazy(() => import("./_property.industrial"));
export const Residential = lazy(() => import("./_property.residential"));
export const Agents = lazy(() => import("./_realtors.agents"));
export const AgentProfile = lazy(() => import("./_realtors.agents$agentId"));
export const Agencies = lazy(() => import("./_realtors.agencies"));
export const AboutUs = lazy(() => import("./_company.about-us"));
export const ContactUs = lazy(() => import("./_company.contact-us"));
export const FAQs = lazy(() => import("./_company.faqs"));
export const CityName = lazy(() => import("./cities.$cityName"));
export const BlogPage = lazy(() => import("../components/blog/BlogPage"));
export const OtherItemsPage = lazy(() =>
  import("../components/propertyItem/micellenous/OtherItemsPage").then(
    (module) => ({
      default: module.OtherItemsPage,
    }),
  ),
);
export const Overview = lazy(() => import("../components/dashboard/overview"));
export const Insight = lazy(() => import("../components/dashboard/insight"));
export const Listings = lazy(() => import("../components/dashboard/mylisting"));
export const Token = lazy(() => import("../components/dashboard/token"));
export const Support = lazy(() => import("../components/dashboard/support"));
export const SupportCard = lazy(
  () => import("../components/dashboard/support/supportCard"),
);
export const Notification = lazy(
  () => import("../components/dashboard/notification"),
);
export const Post = lazy(() => import("../components/dashboard/postproperty"));
export const EditProperty = lazy(
  () => import("../components/dashboard/editProperty"),
);
export const EditProfile = lazy(
  () => import("../components/dashboard/editprofile"),
);
export const RequireAuth = lazy(() => import("../utils/functions/RequireAuth"));
