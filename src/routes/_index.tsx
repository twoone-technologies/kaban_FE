import { Outlet } from "react-router-dom";
import Navigation from "~/components/Navigation";
import "~/styles/main.css";

export default function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}
