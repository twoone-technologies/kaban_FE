import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import LandingPage, { action as listingSearch } from './routes/_landingpage';
import Root, { action as signResults } from './routes/_index';
import Blog from './routes/blog';
import Commercial, {
  action as comResults,
} from './routes/_property.commercial';
import Industrial, {
  action as indResults,
} from './routes/_property.industrial';
import Residential, {
  action as resResults,
} from './routes/_property.residential';
import AboutUs from './routes/_company.about-us';
import ContactUs from './routes/_company.contact-us';
import FAQs from './routes/_company.faqs';
import Agents from './routes/_realtors.agents';
import Agencies from './routes/_realtors.agencies';
import SearchResults, { action as results } from './routes/search_results';
import PropertyItem from './components/propertyItem/PropertyItem';
import CityName, {
  action as cityResults,
  loader as citiesLoader,
} from './routes/cities.$cityName';
import Overview from './components/dashboard/overview';
import Dashboard, { action as srchRes } from './components/dashboard';
import Insight from './components/dashboard/insight';
import Listings from './components/dashboard/mylisting';
import Wallet from './components/dashboard/wallet';
import Support from './components/dashboard/support';
import Notification from './components/dashboard/notification';
import Post, { action as postForm } from './components/dashboard/postproperty';
import Edit, { action as editForm } from './components/dashboard/editprofile';
import SupportCard from './components/dashboard/support/supportCard';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} action={signResults}>
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
      <Route path="cities/:cityName" element={<CityName />} loader={citiesLoader} action={cityResults} />
      <Route path="dashboard" element={<Dashboard />} action={srchRes} />
      <Route path="dashboard/overview" element={<Overview />} />
      <Route path="dashboard/insights" element={<Insight />} />
      <Route path="dashboard/listings" element={<Listings />} />
      <Route path="dashboard/wallet" element={<Wallet />} />
      <Route path="dashboard/support" element={<Support />} />
      <Route path="dashboard/support/:title" element={<SupportCard />} />
      <Route path="dashboard/notification" element={<Notification />} />
      <Route path="dashboard/post" element={<Post />} action={postForm} />
      <Route path="dashboard/profile_edit" element={<Edit />} action={editForm} />
    </Route>,
  ),
);
