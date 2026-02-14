import { ReactElement, Suspense } from 'react';
import {
  Outlet,
  Route,
  type ActionFunction,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { action as listingSearch } from './routes/landingPageAction';
import { action as signResults } from './routes/indexAction';
import RouteLoading from './components/reusable/RouteLoading';
import {
  AboutUs,
  Agencies,
  AgentProfile,
  Agents,
  Blog,
  BlogPage,
  CityName,
  Commercial,
  ContactUs,
  EditProfile,
  EditProperty,
  FAQs,
  Industrial,
  Insight,
  LandingPage,
  Listings,
  Notification,
  OtherItemsPage,
  Overview,
  Post,
  PropertyItem,
  RequireAuth,
  Residential,
  Root,
  SearchResults,
  Support,
  SupportCard,
  Token,
} from './routes/lazyRouteComponents';

const withSuspense = (element: ReactElement) => (
  <Suspense fallback={<RouteLoading />}>{element}</Suspense>
);

const results: ActionFunction = async (args) =>
  (await import('./routes/search_results')).action(args);
const comResults: ActionFunction = async (args) =>
  (await import('./routes/_property.commercial')).action(args);
const indResults: ActionFunction = async (args) =>
  (await import('./routes/_property.industrial')).action(args);
const resResults: ActionFunction = async (args) =>
  (await import('./routes/_property.residential')).action(args);
const cityResults: ActionFunction = async (args) =>
  (await import('./routes/cities.$cityName')).action(args);
const postForm: ActionFunction = async (args) =>
  (await import('./components/dashboard/postproperty')).action(args);
const editPropertyForm: ActionFunction = async (args) =>
  (await import('./components/dashboard/editProperty')).action(args);
const editForm: ActionFunction = async (args) =>
  (await import('./components/dashboard/editprofile')).Action(args);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={withSuspense(<Root />)} action={signResults}>
      {/* Public Routes */}
      <Route index element={withSuspense(<LandingPage />)} action={listingSearch} />
      <Route path="search_results" element={withSuspense(<SearchResults />)} action={results} />
      <Route path="property-item/:id" element={withSuspense(<PropertyItem />)} />
      <Route path="blog" element={withSuspense(<Blog />)} />
      <Route path="commercial" element={withSuspense(<Commercial />)} action={comResults} />
      <Route path="industrial" element={withSuspense(<Industrial />)} action={indResults} />
      <Route path="residential" element={withSuspense(<Residential />)} action={resResults} />
      <Route path="agents" element={withSuspense(<Agents />)} />
      <Route path="agents/:agentId" element={withSuspense(<AgentProfile />)} />
      <Route path="agencies" element={withSuspense(<Agencies />)} />
      <Route path="about-us" element={withSuspense(<AboutUs />)} />
      <Route path="contact-us" element={withSuspense(<ContactUs />)} />
      <Route path="faqs" element={withSuspense(<FAQs />)} />
      <Route path="cities/:cityName" element={withSuspense(<CityName />)} action={cityResults} />
      <Route path="blog/:id" element={withSuspense(<BlogPage />)} />
      <Route path="similar-items/:type" element={withSuspense(<OtherItemsPage />)} />
      <Route path="agent-istings/:id" element={withSuspense(<OtherItemsPage />)} />

      {/* Realtor Routes (Aunthenticated) */}
      <Route element={withSuspense(<RequireAuth />)}>
        <Route path='dashboard' element={<Outlet />}>
          <Route index element={withSuspense(<Overview />)} />
          <Route path="insights" element={withSuspense(<Insight />)} />
          <Route path="listings" element={withSuspense(<Listings />)} />
          <Route path="token" element={withSuspense(<Token />)} />
          <Route path="support" element={withSuspense(<Support />)} />
          <Route path="support/:title" element={withSuspense(<SupportCard />)} />
          <Route path="notification" element={withSuspense(<Notification />)} />
          <Route path="post" element={withSuspense(<Post />)} action={postForm} />
          <Route path="property_edit/:id" element={withSuspense(<EditProperty />)} action={editPropertyForm} />
          <Route path="profile_edit" element={withSuspense(<EditProfile />)} action={editForm} />
        </Route>
      </Route>
    </Route>
  ),
);
