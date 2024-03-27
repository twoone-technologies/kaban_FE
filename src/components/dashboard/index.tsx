import { ActionFunctionArgs } from "react-router-dom";
import Insight from "./insight";
import Overview from "./overview";

export async function action({ request }: ActionFunctionArgs) {
  // get form data
  const formData = await request.formData();
  console.log(...formData);

  // let user: { [x: string]: FormDataEntryValue; }[] = [];
  let data: { [x: string]: FormDataEntryValue; }[] = [];
  [...formData].map((val) => {
    data = [...formData].map(([key, value]) => ({ [key]: value }));

    console.log(val);
    return [{ data }]
  })

  // redirect to prev page with the data
  return data || null
}

export default function Dashboard() {
  return (
    <>
      <Overview />
      <Insight />
    </>
  )
}