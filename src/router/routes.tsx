import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import About from "../pages/About";
import Career from "../pages/Career";
import PrivateRoute from "./privateRoute";

const routes = createBrowserRouter([
  {
    path: "",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/demo-data/news.json"),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "about",
    element: (
      <PrivateRoute>
        <About />
      </PrivateRoute>
    ),
  },
  {
    path: "career",
    element: <Career />,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default routes;
