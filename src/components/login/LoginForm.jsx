import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../common/Button";
import Form from "../signup/Form";
import TextInput from "../signup/TextInput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError("Failed to log in!");
      setLoading(false);
    }
  };
  return (
    <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
      <TextInput
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
      />

      <TextInput
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter password"
        icon="lock"
      />

      <Button type="submit">
        <span>Submit Now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
