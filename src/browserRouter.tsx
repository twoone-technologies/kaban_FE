import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import LandingPage from './routes/_landingpage';
import { action as listingSearch } from './routes/landingPageAction';
import Root from './routes/_index';
import { action as signResults } from './routes/indexAction';
import Blog from './routes/blog';
import Commercial, { action as comResults } from './routes/_property.commercial';
import Industrial, { action as indResults } from './routes/_property.industrial';
import Residential, { action as resResults } from './routes/_property.residential';
import AboutUs from './routes/_company.about-us';
import ContactUs from './routes/_company.contact-us';
import FAQs from './routes/_company.faqs';
import Agents from './routes/_realtors.agents';
import Agencies from './routes/_realtors.agencies';
import SearchResults, { action as results } from './routes/search_results';
import PropertyItem from './components/propertyItem/PropertyItem';
import CityName, { action as cityResults } from './routes/cities.$cityName';
import Overview from './components/dashboard/overview';
import Insight from './components/dashboard/insight';
import Listings from './components/dashboard/mylisting';
import Token from './components/dashboard/token';
import Support from './components/dashboard/support';
import Notification from './components/dashboard/notification';
import Post, { action as postForm } from './components/dashboard/postproperty';
import EditProfile, { action as editForm } from './components/dashboard/editprofile';
import SupportCard from './components/dashboard/support/supportCard';
import EditProperty, { action as editPropertyForm } from './components/dashboard/editProperty';
import RequireAuth from './utils/functions/RequireAuth';
import AgentProfile from './routes/_realtors.agents$agentId';
import BlogPage from './components/blog/BlogPage';
import { OtherItemsPage } from './components/propertyItem/micellenous/OtherItemsPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} action={signResults}>
      {/* Public Routes */}
      <Route index element={<LandingPage />} action={listingSearch} />
      <Route path="search_results" element={<SearchResults />} action={results} />
      <Route path="property-item/:id" element={<PropertyItem />} />
      <Route path="blog" element={<Blog />} />
      <Route path="commercial" element={<Commercial />} action={comResults} />
      <Route path="industrial" element={<Industrial />} action={indResults} />
      <Route path="residential" element={<Residential />} action={resResults} />
      <Route path="agents" element={<Agents />} />
      <Route path="agents/:agentId" element={<AgentProfile />} />
      <Route path="agencies" element={<Agencies />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="faqs" element={<FAQs />} />
      <Route path="cities/:cityName" element={<CityName />} action={cityResults} />
      <Route path="blog/:id" element={<BlogPage />} />
      <Route path="similar-items/:type" element={<OtherItemsPage />} />
      <Route path="agent-istings/:id" element={<OtherItemsPage />} />

      {/* Realtor Routes (Aunthenticated) */}
      <Route element={<RequireAuth />}>
        <Route path='dashboard' element={<Outlet />}>
          <Route index element={<Overview />} />
          <Route path="insights" element={<Insight />} />
          <Route path="listings" element={<Listings />} />
          <Route path="token" element={<Token />} />
          <Route path="support" element={<Support />} />
          <Route path="support/:title" element={<SupportCard />} />
          <Route path="notification" element={<Notification />} />
          <Route path="post" element={<Post />} action={postForm} />
          <Route path="property_edit/:id" element={<EditProperty />} action={editPropertyForm} />
          <Route path="profile_edit" element={<EditProfile />} action={editForm} />
        </Route>
      </Route>
    </Route>
  ),
);
