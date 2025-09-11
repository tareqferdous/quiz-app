import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/App.css";
import Layout from "./components/common/Layout";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signup",
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },
      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "quiz/:id",
        element: (
          <PrivateRoute>
            <Quiz />
          </PrivateRoute>
        ),
      },
      {
        path: "result",
        element: (
          <PrivateRoute>
            <Result />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
