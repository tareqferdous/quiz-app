import Button from "../components/signup/Button";
import Form from "../components/signup/Form";
import Illustration from "../components/signup/Illustration";
import TextInput from "../components/signup/TextInput";
import classes from "../styles/Login.module.css";

export default function Login() {
  return (
    <>
      <h1 className="text-lg md:text-2xl font-extrabold">
        Login to your account
      </h1>

      <div className="column">
        <Illustration />
        <Form className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button>Submit Now</Button>

          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
