import { useState, useEffect } from "react"
import { ActionFunctionArgs, Outlet, redirect, useNavigate } from "react-router-dom";
import Footer from "~/components/footer/Footer";
import Navigation from "~/components/navigation";
import "~/styles/main.css";

export async function action({ request }: ActionFunctionArgs) {
  // get form data
  const formData = await request.formData();
  console.log(...formData);

  let user: { [x: string]: FormDataEntryValue; }[] = [];
  let data: { [x: string]: FormDataEntryValue; }[] = [];
  [...formData].map(([key, val]) => {
    data = [...formData].map(([key, value]) => ({ [key]: value }));
  
    switch (val) {
      case 'Sign Up':
        // send data to BE
        localStorage.setItem('user', JSON.stringify(data));
        console.log('foo');
      break;
  
      case 'Sign In': {
        // get data from BE
        user = JSON.parse(localStorage.getItem('user'))
        if (user) {
          console.log(user);
          return user
        }
        break;
      }

      default: console.log('def');
        break;
    }
    console.log(data);
    return [{data}, {user}]
  })

  console.log(data);

  // redirect to prev page with the data
  return data || null
}

export default function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}
