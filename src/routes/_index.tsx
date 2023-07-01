import { Outlet } from "react-router-dom";
import Navigation from "~/components/navigation";
import "~/styles/main.css";

export default function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}
