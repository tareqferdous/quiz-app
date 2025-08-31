import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Checkbox from "../components/common/Checkbox";
import Form from "../components/signup/Form";
import Illustration from "../components/signup/Illustration";
import TextInput from "../components/signup/TextInput";
import classes from "../styles/Signup.module.css";

export default function Signup() {
  return (
    <>
      <h1 className="text-lg md:text-2xl font-extrabold">Create an account</h1>

      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />

          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
            autocomplete="off"
          />

          <TextInput
            type="password"
            autocomplete="off"
            placeholder="Enter password"
            icon="lock"
          />

          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />

          <Checkbox text="I agree to the Terms &amp; Conditions" />

          <Button>Submit Now</Button>

          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
