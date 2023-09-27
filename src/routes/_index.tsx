import { Outlet } from "react-router-dom";
import Footer from "~/components/footer/Footer";
import Navigation from "~/components/navigation";
import "~/styles/main.css";

export default function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}
