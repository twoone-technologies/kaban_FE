import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LandingPage, { action as listingSearch } from "./routes/_landingpage"
import Root from "./routes/_index"
import Blog from "./routes/blog"
import Commercial, {action as comResults } from "./routes/_property.commercial"
import Industrial, {action as indResults } from "./routes/_property.industrial"
import Residential, {action as resResults } from "./routes/_property.residential"
import AboutUs from "./routes/_company.about-us"
import ContactUs from "./routes/_company.contact-us"
import FAQs from "./routes/_company.faqs"
import Agents from "./routes/_realtors.agents"
import Agencies from "./routes/_realtors.agencies"
import SearchResults, {action as results } from "./routes/search_results"
import PropertyItem from "./components/propertyItem/PropertyItem"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<LandingPage />} action={listingSearch} />
      <Route path="search_results" element={<SearchResults />} action={results} />
      <Route path="property-item/:id" element={<PropertyItem />} />
      <Route path="blog" element={<Blog />} />
      <Route path="commercial" element={<Commercial />} action={comResults} />
      <Route path="industrial" element={<Industrial />} action={indResults} />
      <Route path="residential" element={<Residential />} action={resResults} />
      <Route path="agents" element={<Agents />} />
      <Route path="agencies" element={<Agencies />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="faqs" element={<FAQs />} />
      <Route path="cities/:cityName" element={<FAQs />} />
    </Route>
  )
)