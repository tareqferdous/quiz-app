import LoginForm from "../components/login/LoginForm";
import Illustration from "../components/signup/Illustration";

export default function Login() {
  return (
    <>
      <h1 className="text-lg md:text-2xl font-extrabold">
        Login to your account
      </h1>

      <div className="column">
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
}
