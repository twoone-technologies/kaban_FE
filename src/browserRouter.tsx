import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LandingPage from "./routes/_landingpage"
import Root from "./routes/_index"
import Blog from "./routes/blog"
import Commercial from "./routes/_property.commercial"
import Industrial from "./routes/_property.industrial"
import Residential from "./routes/_property.residential"
import AboutUs from "./routes/_company.about-us"
import ContactUs from "./routes/_company.contact-us"
import FAQs from "./routes/_company.faqs"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<LandingPage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="commercial" element={<Commercial />} />
            <Route path="industrial" element={<Industrial />} />
            <Route path="residential" element={<Residential />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="cities/:cityName" element={<FAQs />} />
        </Route>
    )
)