import Illustration from "../components/signup/Illustration";
import SignupForm from "../components/signup/SignupForm";

export default function Signup() {
  return (
    <>
      <h1 className="text-lg md:text-2xl font-extrabold">Create an account</h1>

      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
}
