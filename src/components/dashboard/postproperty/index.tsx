import { Wrapper } from "~/components/reusable/Container";
import { Form } from "react-router-dom";
import Basic from "./pages/Basic";

export default function Post() {
  return (
    <Wrapper element='section'>
      <Form className="fle gap">
      <Basic />
      {/* <Media />
      <ListingLocation /> */}
      </Form>
    </Wrapper>
  )
}